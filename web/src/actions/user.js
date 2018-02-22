import api from '../utils/api'
import {setPending, deletePending} from './ui'

import {
  SET_USER_PROFILE,
  SET_CHAT_USER,
} from './'

export const setProfile = ({profile, allhf, myhf}) => ({
  type: SET_USER_PROFILE,
  profile,
  allhf,
  myhf
})

export const getProfile = code => async dispatch => {
  try {
    dispatch(setPending('user.getProfile'))
    const {user, myhf, allhf} = await api.user.getProfile()

    dispatch(setProfile({profile: user, myhf, allhf}))
    dispatch(deletePending('user.getProfile'))
  } catch (e) {
    dispatch(deletePending('user.getProfile'))
  }
}

export const find = id => async dispatch => {
  try {
    dispatch(setPending('user.find'))
    const user = await api.user.find({id})

    dispatch({
      type: SET_CHAT_USER,
      user
    })
    dispatch(deletePending('user.find'))
  } catch (e) {
    dispatch(deletePending('user.find'))
  }
}
