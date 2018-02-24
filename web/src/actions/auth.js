import api from '../utils/api'
import {setPending, deletePending} from './ui'
import {getProfile, setProfile} from './user'

export const loginWithFb = code => async dispatch => {
  try {
    dispatch(setPending('auth.loginWithFb'))
    const profile = await api.auth.login({code})
    window.localStorage.setItem('token', profile.user_key)

    dispatch(setProfile({profile}))
    dispatch(deletePending('auth.loginWithFb'))
  } catch (e) {
    dispatch(deletePending('auth.loginWithFb'))
  }
}

export const initializeSession = () => async dispatch => {
  try {
    dispatch(setPending('auth.initializeSession'))

    dispatch(getProfile())

    dispatch(deletePending('auth.initializeSession'))
  } catch (e) {
    dispatch(deletePending('auth.initializeSession'))
  }
}
