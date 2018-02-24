import api from '../utils/api'
import {setPending, deletePending} from './ui'

import {
  SET_MY_HIGHFIVES,
  SET_ALL_HIGHFIVES,
  SET_USER_HIGHFIVES_COUNT,
} from './'

export const getMy = () => async dispatch => {
  try {
    dispatch(setPending('highfives.getMy'))
    const myHighFives = await api.highFives.getMy()

    dispatch({
      type: SET_MY_HIGHFIVES,
      myHighFives,
    })
    dispatch({
      type: SET_USER_HIGHFIVES_COUNT,
      count: (myHighFives || []).length
    })
    dispatch(deletePending('highfives.getMy'))
  } catch (e) {
    console.error(e)
    dispatch(deletePending('highfives.getMy'))
  }
}

export const getAll = code => async dispatch => {
  try {
    dispatch(setPending('highfives.getAll'))
    const allHighFives = await api.highFives.getAll()

    dispatch({
      type: SET_ALL_HIGHFIVES,
      allHighFives,
    })
    dispatch(deletePending('highfives.getAll'))
  } catch (e) {
    console.error(e)
    dispatch(deletePending('highfives.getAll'))
  }
}
