import {
  SET_USER_PROFILE,
  SET_USER_HIGHFIVES_COUNT,
} from '../actions'

const INITIAL_STATE = {
  profile: {},
  highFivesCount: 0,
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
  case SET_USER_HIGHFIVES_COUNT:
    return {...state, highFivesCount: action.count}
  default:
    return state
  }
}
