import { ListGroup, Button } from "react-bootstrap";

const ResultsList = ({ nominations, setNominations }) => {
  const handleRemove = (id) => {
    let newNominations = nominations.filter(
      (nomination) => nomination.imdbID !== id
    );
    setNominations(newNominations);
  };

  const renderNominations = () => {
    return nominations.map((nomination, i) => {
      return (
        <ListGroup.Item key={nomination + i}>
          <div className="d-flex justify-content-between">
            <p style={{ paddingTop: "1rem" }}>
              {nomination.Title}
              <span className="moviecard-year"> ({nomination.Year})</span>
            </p>

            <Button
              className="btn-danger mh-40"
              style={{ marginTop: "0.5rem" }}
              onClick={() => handleRemove(nomination.imdbID)}
            >
              Remove
            </Button>
          </div>
        </ListGroup.Item>
      );
    });
  };
  return (
    <>
      <h3>Nominations</h3>
      <ListGroup>{renderNominations()}</ListGroup>
    </>
  );
};

export default ResultsList;
