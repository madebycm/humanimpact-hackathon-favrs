import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ui from './ui'
import user from './user'
import proximity from './proximity'
import chat from './chat'

export default combineReducers({
  ui,
  user,
  proximity,
  chat,

  routing: routerReducer
})
