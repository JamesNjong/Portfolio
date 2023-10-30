import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import "./Styles/Resets/reset.css";
import "./Styles/Resets/default_base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import Comingsoon from "./Pages/Comingsoon";

function App() {
  return (
    <div className="App bg-primary-dark">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route exact path="/comingsoon" Component={Comingsoon} />
      </Routes>
    </div>
  );
}

export default App;
