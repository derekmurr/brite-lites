import React, { Component } from 'react';
import './index.css';
import './App.css';

class Bulb extends Component {
  constructor() {
    super();

    this.state = {
      color: 0,
    }
  }

  toggleOn = () => {
    if(this.state.color === this.props.selColor) {
      this.setState({ color: 0});
    } else {
      this.setState({ color: this.props.selColor });
    }
  }

  render() {
    const bulbClass = "bulb bulb-color" + this.state.color;
    return(
      <div onClick={this.toggleOn} className={bulbClass}></div>
    );
  }
}

export default Bulb;