import React from 'react';
import {Button} from '../../components'

import './style.css'

const redirectToTheFacebookModal = () => {
  window.location.href = `https://www.facebook.com/v2.12/dialog/oauth?client_id=1747104338635842&redirect_uri=http://${window.location.host}/auth`
}

const HomePage = ({}) => (
  <div className='Home-page u-ta-c'>
    <img src="https://placehold.it/200x100" alt=""/>

    <div>
      <img src="https://placehold.it/100x150" alt=""/>
      <h5>High-Five</h5>
    </div>

    <Button backgroundBlue onClick={redirectToTheFacebookModal}>LOGIN WITH FACEBOOK</Button>
  </div>
);

export default HomePage;
