import { Alert } from "react-bootstrap";

const FailedSearchAlert = ({
  showFailedSearch,
  setShowFailedSearch,
  title,
}) => {
  if (showFailedSearch) {
    return (
      <Alert
        variant="danger"
        onClose={() => setShowFailedSearch(false)}
        dismissible
      >
        No results found for '{title}'
      </Alert>
    );
  }
  return null;
};

export default FailedSearchAlert;
