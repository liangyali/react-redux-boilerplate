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
const storeCurrentURL = createAction('store current url')

const COOKIE_NAME = '_ACCESS_TOKEN'

/**
 * 跳转到login
 */
function redirectLogin() {
  return push('/login')
}

/**
 * 获取登陆用户信息
 * @return {Promise<object>}
 */
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
 * 初始化登陆信息
 */
export function init({currentURL}) {
  return dispatch => {
    const accessToken = Cookies.get(COOKIE_NAME)
    if (accessToken) {
      dispatch(loginSuccess())
      dispatch(fetchUserRequest())
      return dispatch(fetchAuthedUser())
    }
    dispatch(storeCurrentURL(currentURL))
    return dispatch(redirectLogin())
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
  return (dispatch,getState) => {
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
        dispatch(fetchUserRequest())
        dispatch(fetchAuthedUser())
        dispatch(push(getState().authed.redirectURL))
      } else {
        dispatch(loginFailure())
      }
    }).catch(() => {
      dispatch(loginFailure())
    })
  }
}
