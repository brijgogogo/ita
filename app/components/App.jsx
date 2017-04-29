import React from 'react'
import Hero from './Hero.jsx'
import Services from './Services.jsx'
import ServiceA from './ServiceA.jsx'
import Footer from './Footer.jsx'
import Technologies from './Technologies.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="page">
        <Hero />
        <Services />
        <ServiceA />
        <Technologies />
        <Footer />
      </div>
  }
}

