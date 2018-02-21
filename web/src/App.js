import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
    }
    showPosition = (position) => {
        console.log("hey", position);
    }

  render() {
    return (
      <div>
        <button onClick={this.getLocation}>Get my location</button>
        <div id="x"></div>
      </div>
    );
  }
}

export default App;
