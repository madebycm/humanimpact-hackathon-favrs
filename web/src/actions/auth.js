import api from '../utils/api'
import {push} from 'react-router-redux'
import {setPending, deletePending} from './ui'
import {getProfile, setProfile} from './user'

export const loginWithFb = code => async dispatch => {
  try {
    dispatch(setPending('auth.loginWithFb'))
    const profile = await api.auth.login({code})
    if (!profile.user_key) {
      dispatch(push('/'))
      return
    }

    window.localStorage.setItem('token', profile.user_key)

    dispatch(setProfile(profile))
    dispatch(deletePending('auth.loginWithFb'))
  } catch (e) {
    dispatch(deletePending('auth.loginWithFb'))
  }
}

export const initializeSession = () => async dispatch => {
  try {
    dispatch(setPending('auth.initializeSession'))
    const token = window.localStorage.getItem('token')

    if (token === 'undefined') {
      window.localStorage.removeItem('token')
      dispatch(push('/'))
      return
    }

    dispatch(getProfile())

    dispatch(deletePending('auth.initializeSession'))
  } catch (e) {
    dispatch(deletePending('auth.initializeSession'))
  }
}
