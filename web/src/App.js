import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Proximity from './pages/Proximity'
import Chat from './pages/Chat'
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
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/proximity" component={Proximity} />
          <Route path="/chat" component={Chat} />
          {/* <Route component={NoMatch}/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
