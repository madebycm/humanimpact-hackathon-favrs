import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Button} from '../../components'

import './style.css'

const redirectToTheFacebookModal = () => {
  window.location.href = `https://www.facebook.com/v2.12/dialog/oauth?client_id=1747104338635842&redirect_uri=http://${window.location.host}/auth`
}

class HomePage extends PureComponent {
  componentWillMount() {
    const {user, history} = this.props
    const token = window.localStorage.getItem('token')

    if (token) {
      history.push('/profile')
    }
  }

  render() {
    return (
      <div className='Page Home-page u-ta-c'>
        <img src="https://placehold.it/350x150" alt=""/>

        <div className='u-mt'>
          <img src="https://placehold.it/150x200" alt=""/>
          <h5>High-Five</h5>
        </div>

        <div className='u-mt+++'>
          <Button backgroundBlue onClick={redirectToTheFacebookModal}>LOGIN WITH FACEBOOK</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(({user}) => ({
  user: user.profile
}))(HomePage))
