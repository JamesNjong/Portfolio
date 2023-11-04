import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import About from "../Components/Stacks";
import Services from "../Components/Services";
import Featured from "../Components/Featured";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Background from "../Components/Background";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="home-page">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="App-body">
          <Home />
          <Services />
          <About />
          <Featured />
          <Background />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
