import logo from './logo.svg';
import './App.css';
import './Look.css';
import './stylus/xs.css';
import './stylus/sm.css';
import './stylus/md.css';
import './stylus/lg.css';
import './stylus/xl.css';

import { Route, Routes } from "react-router-dom";
import HomePage from './components/pages/homepage';  
import ScrollToTop from './components/supports/ScrollToTop';
import Projects from './components/pages/projectsPage';

function App() {
  return (
    <div className="App bg-primary-dark">
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route exact path="/portfolio" Component={Projects} /> 
    </Routes>
    <ScrollToTop/>
  </div>
  );
}

export default App;
