import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Proximity from './pages/Proximity'
import Chat from './pages/Chat'

import store, { history } from './store'

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
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/proximity" component={Proximity} />
            <Route path="/chat" component={Chat} />
            {/* <Route component={NoMatch}/> */}
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App
