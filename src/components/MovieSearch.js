// Libraries
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Components
import SearchCard from "./search_components/SearchCard";
import ResultsList from "./search_components/ResultsList";
import NominationsList from "./search_components/NominationsList";
import FailedSearchAlert from "./search_components/FailedSearchAlert";
import SuccessfulSearchAlert from "./search_components/SuccessfulSearchAlert";
// Custom Hooks
import useTrait from "../custom_hooks/useTrait";

const MovieSearch = () => {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [showSuccessfulSearch, setShowSuccessfulSearch] = useState(false);
  const [showFailedSearch, setShowFailedSearch] = useState(false);
  const [successfulSearchTitle, setSuccessfulSearchTitle] = useState("");
  const [failedSearchTitle, setFailedSearchTitle] = useState("");
  const [nominations, setNominations] = useState([]);
  const searchProgress = useTrait(0);

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
      <SearchCard
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

export default MovieSearch;
