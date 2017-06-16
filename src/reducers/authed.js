import {
  handleActions
} from 'redux-actions'

const initialState = {
  isAuthenticated: false,
  user: {},
  loginRequesting: false,
  fetUserRequesting: true,
  error: {}
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
      error: action.payload.error
    }
  },
  'login success' (state, action) {
    return {
      ...state,
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
      isAuthenticated:true,
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
  }
}, initialState)
