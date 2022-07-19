import React from "react";
import Fade from 'react-reveal/Fade';

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Methods from './Components/Methods';
import Results from './Components/Results';
import Pricing from './Components/Pricing';
import Certifications from './Components/Certifications';
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <section className = "nav-section">
        <Navbar />
      </section>

      <section className = "about-section">
      <Fade left>
        <About />
      </Fade>
      </section>
      

      <section className = "methods-section">
      <Fade left>
        <Methods />
      </Fade>
      </section>

      <section className = "results-section">
      <Fade left>
        <Results />
      </Fade>
      </section>

      <section className = "certifications-section">
      <Fade left>
        <Certifications />
      </Fade>
      </section>

      <section className = "pricing-section">
      <Fade left>
        <Pricing />
      </Fade> 
      </section>

      <section className = "contact-form">
        <Contact />
      </section>

      <section className = "footer-section">
        <Footer />
      </section>

      

    </div>

  );
}

export default App;
