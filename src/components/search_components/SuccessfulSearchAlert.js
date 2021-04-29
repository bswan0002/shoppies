import { Alert } from "react-bootstrap";

const SuccessfulSearchAlert = ({
  showSuccessfulSearch,
  setShowSuccessfulSearch,
  title,
  numResults,
}) => {
  if (showSuccessfulSearch) {
    return (
      <Alert
        variant="success"
        onClose={() => setShowSuccessfulSearch(false)}
        dismissible
      >
        {numResults} {numResults === 1 ? "movie" : "movies"} found for '{title}'
      </Alert>
    );
  }
  return null;
};

export default SuccessfulSearchAlert;
