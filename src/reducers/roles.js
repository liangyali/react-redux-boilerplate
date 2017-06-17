import {
  handleActions
} from 'redux-actions'

const initialState = {
  form:{
    saving:false,
    values:{}
  }
}

export default handleActions({
  'role saving' (state, action) {
    return {
      ...state,
      form:{
        ...state.form,
        saving:true
      }
    }
  }
}, initialState)
