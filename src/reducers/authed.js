import {
  handleActions
} from 'redux-actions'

const initialState = {
  authed: true,
  user: {},
  loading: false,
  error: {}
}

export default handleActions({
  'login request' (state, action) {
    return {
      ...state,
      loading: true
    }
  },
  'login failure' (state, action) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  },
  'fetch user success' (state, action) {
    return {
      ...state,
      loading: false,
      user: action.user,
      authed: true
    }
  }
}, initialState)
