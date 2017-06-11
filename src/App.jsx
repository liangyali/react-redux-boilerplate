import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import styles from './App.less'
import {Sidebar, MainContainer} from './components/Layout'
import {Button} from 'antd'

class Home extends Component {
  render() {
    console.log(this.props.routes)
    return (
      <div>Home
        <Route path='/home/about' breadcrumbName='test' component={About}></Route>
      </div>
    )
  }
}

class About extends Component {
  render() {
    console.log(this.props)
    return (
      <div>About
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <MainContainer>
          <Route path='/home' breadcrumbName='test' component={Home}></Route>
        </MainContainer>
      </div>
    )
  }
}
