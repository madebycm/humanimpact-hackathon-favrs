import {
  SET_PENDING,
  DELETE_PENDING,
} from './'

export function setPending(name) {
  return {
    type: SET_PENDING,
    name
  }
}

export function deletePending(name) {
  return {
    type: DELETE_PENDING,
    name
  }
}
