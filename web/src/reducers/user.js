import {
  SET_USER_PROFILE,
} from '../actions'

const INITIAL_STATE = {
  profile: {},
  allhf: [],
  myhf: [],
  isFetched: false,
}

export default function reducer (state = INITIAL_STATE, action) {
  const {type} = action
  switch (type) {
  case SET_USER_PROFILE:
    return {
      ...state,
      profile: action.profile,
      allhf: action.allhf,
      myhf: action.myhf,
      isFetched: true
    }
  default:
    return state
  }
}
