import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'

import Auth from './pages/Auth'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Proximity from './pages/Proximity'
import Chat from './pages/Chat'
import Showcase from './pages/Showcase'

import api from './utils/api'

import {initializeSession} from './actions/auth'

import './App.css';

class App extends Component {
  async componentDidMount() {
    if (!this.props.user.isFetched) {
      await this.props.initializeSession()
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        api.geolocation.saveMyPosition({position: coords})
        window.setInterval(() => {
          api.geolocation.saveMyPosition({position: coords})
        }, 1000 * 60)
      });
    }
    else alert("Your device doesnt support this app because of geolocation");
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/proximity" component={Proximity} />
        <Route path="/chat/:id/:highFiveId" component={Chat} />

        <Route path="/auth" component={Auth} />

        <Route path="/showcase" component={Showcase} />
        {/* <Route component={NoMatch}/> */}
      </Switch>
    );
  }
}

export default withRouter(connect(({user}) => ({
  user
}), {
  initializeSession
})(App))
