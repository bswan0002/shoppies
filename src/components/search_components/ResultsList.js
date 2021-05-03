// Libraries
import React, { useState } from "react";
// Components
import ResultCard from "./ResultCard";
import ResultsPagination from "./ResultsPagination";

const ResultsList = ({ results }) => {
  const [page, setPage] = useState(1);

  const renderResultCards = () => {
    return results[page - 1].map((movie) => <ResultCard movie={movie} />);
  };

  return (
    <>
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
