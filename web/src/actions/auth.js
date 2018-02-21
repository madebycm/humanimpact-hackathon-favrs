import {syncano} from '../utils/api'
import api from '../utils/api'
import {setPending, deletePending} from './ui'

export const loginWithFb = code => async dispatch => {
  try {
    dispatch(setPending('company.getCompanyData'))
    const userData = await api.auth.login({code})
    window.localStorage.setItem('token', userData.user_key)
    dispatch(deletePending('company.getCompanyData'))
  } catch (e) {
    dispatch(deletePending('company.getCompanyData'))
  }
}
