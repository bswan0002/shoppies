// Libraries
import React, { useState } from "react";
// Components
import ResultCard from "./ResultCard";
import ResultsPagination from "./ResultsPagination";

const ResultsList = ({ results }) => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <ResultCard movie={results[0][0]} />
      <ResultsPagination />
    </div>
  );
};

export default ResultsList;
