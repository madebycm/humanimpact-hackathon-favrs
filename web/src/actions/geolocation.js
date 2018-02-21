import {syncano} from '../utils/api'
import api from '../utils/api'
import {setPending, deletePending} from './ui'

export const saveMyPosition = position => async dispatch => {
  try {
    dispatch(setPending('geolocation.saveMyPosition'))
    const userData = await api.geolocation.saveMyPosition({position})

    dispatch(deletePending('geolocation.saveMyPosition'))
  } catch (e) {
    dispatch(deletePending('geolocation.saveMyPosition'))
  }
}
