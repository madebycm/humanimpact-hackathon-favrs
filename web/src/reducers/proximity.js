import {
  SET_NEAREST_USERS,
} from '../actions'

const INITIAL_STATE = {
  nearestUsers: [],
}

export default function reducer (state = INITIAL_STATE, action) {
  const {type} = action
  switch (type) {
  case SET_NEAREST_USERS:
    return {...state, nearestUsers: action.nearestUsers}
  default:
    return state
  }
}
