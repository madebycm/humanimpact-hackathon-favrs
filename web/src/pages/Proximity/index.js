import React from 'react';
import { withRouter } from 'react-router-dom'
import {Header, Table, IconButton} from '../../components'

import './style.css'

const Proximity = ({history}) => (
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
      rows={[
        {
          name: 'Thomas',
          distance: '0,3km',
          onIconClick: () => history.push('/chat')
        },
        {
          name: 'Stine',
          distance: '0,3km',
          onIconClick: () => history.push('/chat')
        }
      ]}
    />
  </div>
);

export default withRouter(Proximity);
