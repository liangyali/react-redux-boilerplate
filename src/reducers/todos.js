import {
  handleActions
} from 'redux-actions'

const initialState = {
  name: 'init'
}

export default handleActions({
  'fetch todos' (state, action) {
    return {
      name: 'testtest'
    }
  }
}, initialState)
