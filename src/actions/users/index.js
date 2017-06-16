import {
  push
} from 'react-router-redux'

export const redirectNew = (pathname) => dispatch => dispatch(push(`${pathname}/new`))
