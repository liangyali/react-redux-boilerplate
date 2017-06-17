import {
  push
} from 'react-router-redux'
import {
  createAction
} from 'redux-actions'
const axios = require('axios')

const roleSaving = createAction('role saving')

export const redirectNew = (pathname) => dispatch => dispatch(push(`${pathname}/new`))

export const create = (values) => dispatch => {
  dispatch(roleSaving())
  return axios({
    url: '/api/roles',
    method: 'POST'
  })
}
