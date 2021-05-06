// Libraries
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Components
import MovieSearch from "./shoppies_components/MovieSearch";
import ResultsList from "./shoppies_components/ResultsList";
import NominationsList from "./shoppies_components/NominationsList";
import FailedSearchAlert from "./shoppies_components/FailedSearchAlert";
import SuccessfulSearchAlert from "./shoppies_components/SuccessfulSearchAlert";
import Celebration from "./shoppies_components/Celebration";
// Custom Hooks
import useTrait from "../custom_hooks/useTrait";

const Shoppies = () => {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [showSuccessfulSearch, setShowSuccessfulSearch] = useState(false);
  const [showFailedSearch, setShowFailedSearch] = useState(false);
  const [successfulSearchTitle, setSuccessfulSearchTitle] = useState("");
  const [failedSearchTitle, setFailedSearchTitle] = useState("");
  const [nominations, setNominations] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const searchProgress = useTrait(0);

  useEffect(() => {
    if (nominations.length === 5) {
      setShowCelebration(true);
    }
  }, [nominations]);

  const handleResponses = (responses) => {
    if (responses.length === 0) {
      setResults([]);
      setFailedSearchTitle(title);
      setShowFailedSearch(true);
      searchProgress.set(0);
    } else {
      setResults(responses);
      setShowFailedSearch(false);
      setSuccessfulSearchTitle(title);
      setShowSuccessfulSearch(true);
    }
  };

  const paginatedFetch = (page = 1, responses = []) => {
    fetch(
      `http://www.omdbapi.com/?type=movie&s=${title}&page=${page}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    )
      .then((res) => {
        return res.ok && res.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          responses.push([...data.Search]);
          searchProgress.set(
            (responses.length * 10) / parseInt(data.totalResults)
          );
          page++;
          return paginatedFetch(page, responses);
        } else {
          handleResponses(responses);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProgress.set(0);
    setShowFailedSearch(false);
    setShowSuccessfulSearch(false);
    paginatedFetch();
  };

  return (
    <Container className="mt-4">
      <Celebration
        showCelebration={showCelebration}
        setShowCelebration={setShowCelebration}
      />
      <Row className="d-flex justify-content-between">
        <h1 className="darkgreen">The Shoppies</h1>
        <FailedSearchAlert
          title={failedSearchTitle}
          showFailedSearch={showFailedSearch}
          setShowFailedSearch={setShowFailedSearch}
        />
        <SuccessfulSearchAlert
          title={successfulSearchTitle}
          numResults={
            results.length > 0 &&
            (results.length - 1) * 10 + results[results.length - 1].length
          }
          showSuccessfulSearch={showSuccessfulSearch}
          setShowSuccessfulSearch={setShowSuccessfulSearch}
        />
      </Row>
      <MovieSearch
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        searchProgress={searchProgress}
      />
      <Row>
        {results.length > 0 && (
          <Col className="mt-4" xs={12} sm={12} lg={6}>
            <ResultsList
              results={results}
              nominations={nominations}
              setNominations={setNominations}
            />
          </Col>
        )}
        {nominations.length > 0 && (
          <Col className="mt-4">
            <NominationsList
              nominations={nominations}
              setNominations={setNominations}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Shoppies;
