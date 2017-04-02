import React from 'react';
import Typewriter from './Typewriter.jsx';

const HeroContent = () => 
  <header className="hero-header">
    <h1>Integrated Training Academy</h1>
    <p><Typewriter /></p>
    <p>We provide solutions</p>
    <a className="button btn-white" href="#">Lets Do it</a>
  </header>

module.exports = HeroContent;
