import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import "./Styles/Resets/reset.css";
import "./Styles/Resets/default_base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import HomePage from "./Pages/HomePage";
import Works from "./Pages/Portfolio";
import Details from "./Components/Details";
import ProjectPage from "./Pages/ProjectPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App bg-primary-dark">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route exact path="/portfolio" Component={Works} />
        <Route exact path="/portfolio/projects/:project" Component={Details} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
