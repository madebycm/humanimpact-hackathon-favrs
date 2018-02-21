import {syncano} from '../utils/api'
import api from '../utils/api'
import {setPending, deletePending} from './ui'

export const loginWithFb = code => async dispatch => {
  try {
    dispatch(setPending('auth.loginWithFb'))
    const userData = await api.auth.login({code})
    window.localStorage.setItem('token', userData.user_key)

    dispatch(deletePending('auth.loginWithFb'))
  } catch (e) {
    dispatch(deletePending('auth.loginWithFb'))
  }
}
