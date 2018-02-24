import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import {Header, Wrapper, CircleButton} from '../../components'

import {getMy, getAll} from '../../actions/highfives'

import './style.css'

class Profile extends PureComponent {
  componentWillMount() {
    const {history} = this.props
    const token = window.localStorage.getItem('token')

    if (!token) {
      history.push('/')
    } else {
      this.props.getMyHighFives()
    }
  }

  render() {
    const {history, user, myhf, allhf} = this.props

    return (
      <div className='Page'>
        <Header />

        <Wrapper>
          <section className='High-fives u-mt+ u-flex-row u-center'>
            <div className='High-fives__item u-mr-- u-ta-c u-width-half '>
              <div className='High-fives__item__counter'>27</div>
              <div>High Fives</div>
            </div>

            <div className='High-fives__item u-ml-- u-ta-c u-width-half '>
              <CircleButton
                className='Proximity-redirect-button'
                text={`Tap - and find\nsomeone to take a\nHigh-five with`}
                fileName='HighFiveIcon.png'
                onClick={() => history.push('/proximity')}
              />
            </div>
          </section>
        </Wrapper>

        <section className='High-fives-lists u-mt'>
          <header className='u-space-between'>
            <span className='u-width-half u-mili u-mr- u-center'>MY HIGH-FIVES</span>
            <span className='u-width-half u-mili u-ml- u-center'>COMMUNITY HIGH-FIVES</span>
          </header>

          <Wrapper>
            <div className='u-space-between u-mt--'>
              <ul className='High-fives-list u-width-half u-mr--'>
                {myhf.map(hf => (
                  <li className='High-fives-list__item'>
                    <aside className='badge'>HIGH FIVE</aside>
                    <img src={hf.photo} alt=""/>
                  </li>
                ))}
              </ul>

              <ul className='High-fives-list u-width-half u-ml--'>
                {allhf.map(hf => (
                  <li className='High-fives-list__item'>
                    <aside className='badge'>HIGH FIVE</aside>
                    <img src={hf.photo} alt=""/>
                  </li>
                ))}
              </ul>
            </div>
          </Wrapper>
        </section>
      </div>
    )
  }
}

export default withRouter(connect(({user, highfives}) => ({
  user: user.profile,
  myhf: highfives.my,
  allhf: highfives.all,
}), {
  getMyHighFives: getMy,
  getAllHighFives: getAll
})(Profile))
