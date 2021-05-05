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
            {nomination.Title}
            <Button
              className="btn-danger"
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
