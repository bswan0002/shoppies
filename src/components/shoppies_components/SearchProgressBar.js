import { ProgressBar } from "react-bootstrap";

const SearchProgressBar = ({ searchProgress }) => {
  return <ProgressBar now={Math.round(searchProgress.get() * 100)} />;
};

export default SearchProgressBar;
