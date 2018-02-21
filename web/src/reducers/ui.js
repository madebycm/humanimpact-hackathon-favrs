import {
  SET_PENDING,
  DELETE_PENDING,
} from '../actions'

const INITIAL_STATE = {
  pending: [],
}

export default function reducer (state = INITIAL_STATE, action) {
  const {type} = action
  switch (type) {
  case SET_PENDING:
    const newPending = [...state.pending, action.name]
      .filter((value, idx, arr) => arr.indexOf(value) === idx)
    return {...state, pending: newPending}
  case DELETE_PENDING:
    return {...state, pending: state.pending.filter(item => item !== action.name)}
  default:
    return state
  }
}
