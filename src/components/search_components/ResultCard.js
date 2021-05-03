import { Card } from "react-bootstrap";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResultCard = ({ movie }) => {
  return (
    <Card className="resultcard">
      <div className="d-flex justify-content-start">
        {movie.Poster === "N/A" ? (
          <FontAwesomeIcon
            icon={faImage}
            className="resultcard-imagenotfound ml-2"
          />
        ) : (
          <img src={movie.Poster} alt="poster" style={{ height: "10rem" }} />
        )}

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
