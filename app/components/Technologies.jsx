import React from 'react'

class SliderPager extends React.Component {
  constructor(props) {
    super(props)
    this.getPager = this.getPager.bind(this)
  }

  getPager(item, idx) {
    return <li key={idx} className="sliderLink"
      onClick={() => this.props.onActiveIndexChange(idx)}></li>
  }

  render() {
    return <div id="sliderLinks" className="clear">
        <ul className="list-inline clear">
          {this.props.items.map(this.getPager)}
        </ul>
      </div>
  }
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  getSliderContent(item, index) {
    let classNames = `fa ${item}`;
    return <li key={index}>
      <i className={classNames}></i>
      </li>
  }

  render() {
    return <div className="clear sliderContainer">
        <ul className="list-unstyled slider">
          {this.props.items.map(this.getSliderContent)}
        </ul>
      </div>
  }
}


class SliderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0
    }

    this.setActiveItemIndex = this.setActiveItemIndex.bind(this);
  }

  setActiveItemIndex(newIndex) {
    console.log(newIndex);
    this.setState({ activeItemIndex: newIndex });
  }

  render() {
    return <div className="container clear">
      <Slider items={this.props.items}
        onActiveIndexChange={this.setActiveItemIndex}
        activeItemIndex={this.state.activeItemIndex}/>
      <SliderPager items={this.props.items}
        onActiveIndexChange={this.setActiveItemIndex}
        activeItemIndex={this.state.activeItemIndex} />
    </div>
  }

}

export default class Technologies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "fa-git", 
        "fa-code",
        "fa-cloud",
        "fa-cogs",
        "fa-envelope",
        "fa-group",
        "fa-institution",
        "fa-credit-card",
        "fa-paypal",
        "fa-line-chart",
        "fa-youtube-play",
        "fa-bitcoin",
      ]
    }
  }

  render() {
    return <div id="technologies" className="clear">
      <SliderContainer items={this.state.items} />
    </div>
  }
}


//module.exports = Technologies;
