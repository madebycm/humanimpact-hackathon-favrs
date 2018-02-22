import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ui from './ui'
import user from './user'

export default combineReducers({
  ui,
  user,

  routing: routerReducer
})
