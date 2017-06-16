//authed actions
const axios = require('axios')
import Cookies from 'js-cookie'
import {
  createAction
} from 'redux-actions'
import {
  push
} from 'react-router-redux'

const loginRequest = createAction('login request')
const loginFailure = createAction('login failure')
const loginSuccess = createAction('login success')
const loginOut = createAction('login out')
const fetchUserRequest = createAction('fetch user request')
const fetchUserSuccess = createAction('fetch user success')

const COOKIE_NAME = '_ACCESS_TOKEN'

function redirectLogin() {
  return dispatch => {
    return dispatch(push('/login'))
  }
}

function fetchAuthedUser() {
  return dispatch => {
    return axios({
      url: '/api/users/current'
    }).then(res => dispatch(fetchUserSuccess({
      user: res.data
    })))
  }
}

/**
 * 初始化登录用户
 * @return {object}
 */
export function initAuthedUser() {
  return (dispatch, getState) => {
    const accessToken = Cookies.get(COOKIE_NAME)
    if (!accessToken) {
      return dispatch(redirectLogin())
    }
    dispatch(fetchUserRequest())
    return dispatch(fetchAuthedUser())
  }
}

/**
 * 退出登录
 */
export function logout() {
  Cookies.remove(COOKIE_NAME)
  return dispatch => {
    dispatch(loginOut())
    dispatch(redirectLogin())
  }
}

/**
 * login
 * @param  {string} email    [description]
 * @param  {string} password [description]
 * @return {[type]}          [description]
 */
export function login({
  email,
  password
}) {
  return dispatch => {
    dispatch(loginRequest())
    return axios({
      method: 'post',
      url: '/api/token',
      data: {
        auth: {
          email,
          password
        }
      }
    }).then(res => {
      if (res.status === 200) {
        Cookies.set(COOKIE_NAME, res.data.jwt, {
          expires: 3600
        })
        dispatch(loginSuccess())
        dispatch(initAuthedUser())
        dispatch(push('/'))
      } else {
        dispatch(loginFailure())
      }
    }).catch(() => {
      dispatch(loginFailure())
    })
  }
}
