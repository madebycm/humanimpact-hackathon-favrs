import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Auth from './pages/Auth'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Proximity from './pages/Proximity'
import Chat from './pages/Chat'
import api from './utils/api'

import './App.css';

class App extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({coords}) => api.geolocation.saveMyPosition({position: coords}));
    }
    else alert("Your device doesnt support this app because of geolocation");
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/proximity" component={Proximity} />
        <Route path="/chat" component={Chat} />

        <Route path="/auth" component={Auth} />
        {/* <Route component={NoMatch}/> */}
      </Switch>
    );
  }
}

export default App
