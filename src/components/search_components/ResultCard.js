import { Card, Row, Col } from "react-bootstrap";

const ResultCard = ({ movie }) => {
  return (
    <Card>
      <div className="d-flex justify-content-start">
        <img src={movie.Poster} alt="poster" style={{ width: "100px" }} />
        <div className="mt-2 moviecard-details">
          <div className="d-flex justify-content-between">
            <div className="ml-2">
              <span className="moviecard-title">{movie.Title} </span>
              <span className="moviecard-year">({movie.Year})</span>
            </div>
            <p className="mr-2">5/5</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
