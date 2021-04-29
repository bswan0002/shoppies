// Styles
import "./App.css";
import "./custom.scss";
// Components
import MovieSearch from "./components/MovieSearch";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="body">
        <TopBar />
        <MovieSearch />;
      </div>
      <Footer />
    </>
  );
};

export default App;
