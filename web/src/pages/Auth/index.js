import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'

import {loginWithFb} from '../../actions/auth'

import api from '../../utils/api'

class Auth extends Component {
  async componentDidMount() {
    const params = qs.parse(this.props.location.search);

    await this.props.loginWithFb(params.code)
    this.props.history.push('/profile')
  }

  render = () => <div className='Page'></div>
}


export default connect(null, {
  loginWithFb
})(withRouter(Auth))
