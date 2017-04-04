import React from 'react';
import Typewriter from './Typewriter.jsx';

const HeroContent = () => 
  <header className="hero-header clear">
    <h1>Integrated Training Academy</h1>
    <p><Typewriter /></p>
    <p className="tagline">We provide solutions</p>
    <a className="btn btn-white no-text-transform" href="#">Lets Do it</a>
  </header>

module.exports = HeroContent;
