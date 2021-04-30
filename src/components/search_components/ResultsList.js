import { Card, Row, Col } from "react-bootstrap";

const ResultsList = ({ results }) => {
  return (
    <div>
      <Card>
        <div className="d-flex justify-content-start">
          <img
            src={results[0][0].Poster}
            alt="poster"
            style={{ width: "100px" }}
          />
          <div className="mt-2 moviecard-details">
            <div className="d-flex justify-content-between">
              <div className="ml-2">
                <span className="moviecard-title">{results[0][0].Title} </span>
                <span className="moviecard-year">({results[0][0].Year})</span>
              </div>
              <p className="mr-2">5/5</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultsList;
