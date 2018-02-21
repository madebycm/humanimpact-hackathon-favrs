import React, { Component } from 'react'
import {connect} from 'react-redux'
import qs from 'query-string'

import {loginWithFb} from '../../actions/auth'

import api from '../../utils/api'

class Auth extends Component {
  async componentDidMount() {
    const params = qs.parse(this.props.location.search);

    this.props.loginWithFb(params.code)
  }

  render = () => <div></div>
}


export default connect(null, {
  loginWithFb
})(Auth)
