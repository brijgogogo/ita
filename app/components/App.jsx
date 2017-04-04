import React from 'react';
import Hero from './Hero.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="page">
        <Hero />
      </div>
  }
}

