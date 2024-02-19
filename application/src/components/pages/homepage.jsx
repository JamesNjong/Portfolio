import React, { Component } from 'react';
import NavBar from '../compounds/navbar';
import Hero from '../compounds/hero';
import About from '../compounds/about'; 
import Stack from '../compounds/stack';
import Featured from '../compounds/Featured';
import Background from '../compounds/Background';
import Projects from '../compounds/projects';
import Contactus from '../compounds/contactus';
import Footer from '../compounds/footer'; 

class HomePage extends Component {
    state = {  } 
    render() {
        return (
          <div className="">
            <header className="App-header"> 
                <NavBar/>
            </header> 
            <main>
                <Hero/>
                <About/> 
                <Stack/>
                <Featured/>
                <Projects/>
                <Background/>
                <Contactus/>
                
            </main>
            <footer>
                <Footer/>
            </footer>
          </div>
        );
      }
}
 
export default HomePage;