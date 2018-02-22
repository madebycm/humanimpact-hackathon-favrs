import api from '../utils/api'
import {setPending, deletePending} from './ui'
import {setProfile} from './user'

export const loginWithFb = code => async dispatch => {
  try {
    dispatch(setPending('auth.loginWithFb'))
    const user = await api.auth.login({code})
    window.localStorage.setItem('token', user.user_key)

    dispatch(setProfile(user))
    dispatch(deletePending('auth.loginWithFb'))
  } catch (e) {
    dispatch(deletePending('auth.loginWithFb'))
  }
}

export const initializeSession = () => async dispatch => {
  try {
    dispatch(setPending('auth.initializeSession'))
    const token = window.localStorage.getItem('token')
    if (!token) return

    const {user, myhf, allhf} = await api.user.getProfile()

    dispatch(setProfile({profile: user, myhf, allhf}))
    dispatch(deletePending('auth.initializeSession'))
  } catch (e) {
    dispatch(deletePending('auth.initializeSession'))
  }
}
