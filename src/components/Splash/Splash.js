import React, { Component } from 'react';
import './Splash.css';
import { strictEqual } from 'assert';
import { relative } from 'path';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      username: this.props.username
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    const beOnTop = {
        zindex: 99
    }
    const low = {
        zindex: 1
    }
    return (
      <div>
        <h1>Welcome To BoulderReactCodingNight.Twitter</h1>
        <img style={low} src={`https://picsum.photos/${this.state.width}/${this.state.height - 100}?random`} />
        <div style={beOnTop}>
            <button >
                Continue to Website
            </button>
        </div>
      </div>
    );
  }
}

export default Splash;
