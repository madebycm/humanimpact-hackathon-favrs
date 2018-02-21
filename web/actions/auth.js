import {syncano} from '../utils/api'

export const loginWithFb = async code => {
  return dispatch => {
    const userData = await api.auth.login({code})
    dispatch(handleValidAuth(userData))
  }
}

export const handleValidAuth = ({user_key}) => {
  return dispatch => {
    localStorage.save('token', user_key)
  }
}
