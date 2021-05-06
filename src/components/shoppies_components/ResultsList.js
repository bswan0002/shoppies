// Libraries
import React, { useState, useEffect } from "react";
// Components
import ResultCard from "./ResultCard";
import ResultsPagination from "./ResultsPagination";

const ResultsList = ({ results, nominations, setNominations }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [results]);

  const renderResultCards = () => {
    return results[page - 1].map((movie, i) => (
      <ResultCard
        key={movie.imdbID + i}
        movie={movie}
        nominations={nominations}
        setNominations={setNominations}
      />
    ));
  };

  return (
    <>
      <h3>Results</h3>
      <div className="resultslist">{renderResultCards()}</div>
      <div className="d-flex justify-content-center mt-2">
        <ResultsPagination
          pageCount={results.length}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default ResultsList;
