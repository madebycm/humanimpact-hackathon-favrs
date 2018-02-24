import {
  SET_MY_HIGHFIVES,
  SET_ALL_HIGHFIVES,
} from '../actions'

const INITIAL_STATE = {
  my: [],
  all: [],
}

export default function reducer (state = INITIAL_STATE, action) {
  const {type} = action
  switch (type) {
  case SET_MY_HIGHFIVES:
    return {...state, my: action.myHighFives}
  case SET_ALL_HIGHFIVES:
    return {...state, all: action.allHighFives}
  default:
    return state
  }
}
