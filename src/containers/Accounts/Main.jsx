import React,{Component} from 'react'
import {renderRoutes} from '../../utils'


class Main extends Component{
  render(){
    const {route}=this.props
    return (
      <div>
          {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default Main
