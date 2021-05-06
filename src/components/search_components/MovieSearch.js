// Libraries
import { Card, Form, InputGroup } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Components
import SearchProgressBar from "./SearchProgressBar";

const MovieSearch = ({ title, setTitle, handleSubmit, searchProgress }) => {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Movie Search</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <InputGroup>
              <Form.Control
                placeholder="Lookup Movies by Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
              <InputGroup.Append>
                <InputGroup.Text
                  onClick={handleSubmit}
                  className="ripple"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Row>
        </Form>
      </Card.Body>
      <SearchProgressBar searchProgress={searchProgress} />
    </Card>
  );
};

export default MovieSearch;
