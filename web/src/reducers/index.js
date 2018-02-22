import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ui from './ui'
import user from './user'
import proximity from './proximity'

export default combineReducers({
  ui,
  user,
  proximity,

  routing: routerReducer
})
