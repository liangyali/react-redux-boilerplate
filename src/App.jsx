import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Home from './containers/Home'
import styles from './App.less'
import {Button} from 'antd'

const About = () => (
  <div>
    <h2 className={styles.name}>About</h2>
  </div>
)

const NoMatch = ({location}) => (
  <div>
    <h2>404 NotFound {location.pathname}</h2>
  </div>
)
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
