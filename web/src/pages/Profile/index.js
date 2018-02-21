import React from 'react'
import {connect} from 'react-redux'

import './style.css'

const Profile = ({user}) => (
  <div className='Profile-page'>
    <div>
      {user.full_name}
    </div>

    <section className='u-mt-'>
      <div>
        <div>27</div>
        <div>High Fives</div>
      </div>

      <div>
        Tap - and find someone to take a High-five with
      </div>
    </section>
  </div>
);

export default connect(({user}) => ({
  user: user.profile
}))(Profile)
