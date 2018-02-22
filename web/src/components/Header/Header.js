import React from 'react';
import {connect} from 'react-redux'

import Avatar from '../Avatar'
import Wrapper from '../Wrapper/Wrapper'

import './style.css'

const Header = ({user, children}) => (
  <header>
    <Wrapper>
      <section>
        <Avatar url={user.picture_url} />
        <h3 className='u-ml-'>{user.full_name}</h3>
      </section>

      <section>
        {children}
      </section>
    </Wrapper>
  </header>
);

export default connect(({user}) => ({
  user: user.profile
}))(Header);
