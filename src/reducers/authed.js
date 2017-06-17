import {
  handleActions
} from 'redux-actions'

const initialState = {
  isReady: false,
  isAuthenticated: false,
  user: {},
  loginRequesting: false,
  fetUserRequesting: true,
  error: {},
  redirectURL: '/'
}

export default handleActions({
  'login request' (state, action) {
    return {
      ...state,
      loginRequesting: true
    }
  },
  'login failure' (state, action) {
    return {
      ...state,
      loginRequesting: false,
      isReady: true,
      error: action.payload.error
    }
  },
  'login success' (state, action) {
    return {
      ...state,
      isReady: true,
      isAuthenticated: true,
      loginRequesting: false
    }
  },
  'login out' (state, action) {
    return {
      ...state,
      isAuthenticated: false
    }
  },
  'fetch user request' (state, action) {
    return {
      ...state,
      isAuthenticated: true,
      fetUserRequesting: true,
    }
  },
  'fetch user success' (state, action) {
    return {
      ...state,
      fetUserRequesting: false,
      user: action.payload.user,
      isAuthenticated: true
    }
  },
  'store current url' (state, action) {
    return {
      ...state,
      redirectURL: action.payload,
    }
  }
}, initialState)
