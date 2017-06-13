import {
  combineReducers
} from 'redux'
import {
  routerReducer,
} from 'react-router-redux'

import authed from './authed'

export default combineReducers({
  authed,
  router: routerReducer
})
