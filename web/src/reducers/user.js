import {
  SET_USER_PROFILE,
} from '../actions'

const INITIAL_STATE = {
  profile: {},
  isFetched: false,
}

export default function reducer (state = INITIAL_STATE, action) {
  const {type} = action
  switch (type) {
  case SET_USER_PROFILE:
    return {
      ...state,
      profile: action.user,
      isFetched: true,
    }
  default:
    return state
  }
}
