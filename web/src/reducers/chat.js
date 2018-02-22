import {
  SET_CHAT_USER,
} from '../actions'

const INITIAL_STATE = {
  user: {},
}

export default function reducer (state = INITIAL_STATE, action) {
  const {type} = action
  switch (type) {
  case SET_CHAT_USER:
    return {...state, user: action.user}
  default:
    return state
  }
}
