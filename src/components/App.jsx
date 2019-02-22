import React, { Component } from 'react';
import './App.css';
import Splash from './Splash/Splash';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <Splash username="Gary" />
      </div>
    );
  }
}

export default App;

