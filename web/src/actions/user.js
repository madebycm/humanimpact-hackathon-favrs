import {syncano} from '../utils/api'
import api from '../utils/api'
import {setPending, deletePending} from './ui'

import {
  SET_USER_PROFILE,
} from './'

export const setProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
})

export const getProfile = code => async dispatch => {
  try {
    dispatch(setPending('user.getProfile'))
    const user = await api.user.getProfile()

    dispatch(setProfile(user))
    dispatch(deletePending('user.getProfile'))
  } catch (e) {
    dispatch(deletePending('user.getProfile'))
  }
}
