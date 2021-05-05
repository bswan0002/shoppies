import React, { useState, useEffect } from "react";
import { Card, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { faImage, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResultCard = ({ movie, nominations, setNominations }) => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?type=movie&i=${movie.imdbID}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, []);

  const getImdbRating = () => {
    let foundIndex = movieDetails.Ratings?.findIndex(
      (rating) => rating.Source === "Internet Movie Database"
    );

    return foundIndex >= 0 ? (
      <>
        <FontAwesomeIcon icon={faStar} className="gold" />
        {movieDetails.Ratings[foundIndex].Value}
      </>
    ) : null;
  };

  const isNominated = () => {
    return nominations.some((nomination) => nomination.imdbID === movie.imdbID);
  };

  const popover = (props) => {
    return (
      <Popover {...props}>
        <Popover.Title>{movie.Title}</Popover.Title>
        <Popover.Content>
          <p>Directed by: {movieDetails.Director}</p>
          <p>Starring: {movieDetails.Actors}</p>
          <p>{movieDetails.Plot}</p>
          <p>{`${movieDetails.Rated} | ${movieDetails.Runtime} | ${movieDetails.Genre} | ${movieDetails.Released} (${movieDetails.Country})`}</p>
        </Popover.Content>
      </Popover>
    );
  };

  return (
    <Card className="resultcard">
      <div className="d-flex justify-content-start">
        {movie.Poster === "N/A" ? (
          <FontAwesomeIcon
            icon={faImage}
            className="resultcard-imagenotfound ml-2"
          />
        ) : (
          <img src={movie.Poster} alt="poster" style={{ width: "8rem" }} />
        )}

        <div className="pt-2 pl-2 moviecard-details d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between">
            <div>
              <span className="moviecard-title">{movie.Title} </span>
              <span className="moviecard-year">({movie.Year})</span>
            </div>
            <p className="mr-2">{getImdbRating()}</p>
          </div>
          <div className="mb-2 mr-2 d-flex justify-content-between">
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              <div>
                <Button>More Details</Button>
              </div>
            </OverlayTrigger>
            {isNominated() ? (
              <Button className="btn-secondary" disabled>
                Nominate
              </Button>
            ) : (
              <Button
                className="btn-secondary"
                onClick={() => setNominations([...nominations, movie])}
              >
                Nominate
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
