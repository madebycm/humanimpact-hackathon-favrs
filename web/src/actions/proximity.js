import {
  SET_NEAREST_USERS,
} from './'
import api from '../utils/api'
import {setPending, deletePending} from './ui'

export const getNearesUserLocations = code => async dispatch => {
  try {
    dispatch(setPending('proximity.getProfile'))
    const users = await api.proximity.getNearesUserLocations()

    dispatch({
      type: SET_NEAREST_USERS,
      nearestUsers: users
    })
    dispatch(deletePending('proximity.getNearesUserLocations'))
  } catch (e) {
    dispatch(deletePending('proximity.getNearesUserLocations'))
  }
}
