// Styles
import "./App.css";
import "./custom.scss";
// Components
import Shoppies from "./components/Shoppies";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="body">
        <TopBar />
        <Shoppies />;
      </div>
      <Footer />
    </>
  );
};

export default App;
