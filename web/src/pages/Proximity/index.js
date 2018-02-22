import React, {PureComponent} from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {Header, Table, IconButton} from '../../components'

import {getNearesUserLocations} from '../../actions/proximity'

import api from '../../utils/api'

import './style.css'

class Proximity extends PureComponent {
  componentDidMount() {
    const {history} = this.props
    const token = window.localStorage.getItem('token')

    if (!token) {
      history.push('/')
    } else {
      this.props.getNearesUserLocations()
    }
  }
  handleClick = async user => {
    const object = await api.highFives.initialize({to_user: user.userdata.id})
    this.props.history.push(`/chat/${user.userdata.id}/${object.id}`)
  }

  render() {
    const {history} = this.props

    return (
      <div className='Page'>
        <Header>
          <IconButton
            text='Back to profile'
            onClick={() => history.push('/profile')}
          />
        </Header>

        <p className='u-ta-c'>
          Find someone close. <br/>
          Tap on profile to chat and arrange your High Five
        </p>

        <Table
          className='u-mt'
          rows={this.props.users.map(user => ({
            name: user.userdata.full_name,
            url: user.userdata.picture_url,
            distance: `${user.geodata.distance.text} (${user.geodata.duration.text})`,
            onIconClick: () => this.handleClick(user)
          }))}
        />
      </div>
    );
  }
}

export default withRouter(connect(({proximity}) => ({
  users: proximity.nearestUsers
}), {
  getNearesUserLocations
})(Proximity));
