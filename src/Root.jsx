import React from 'react'
import {renderRoutes} from 'react-router-config'
import routes from './routes'

export default({route}) => {
  return (
    <div>
      {renderRoutes(routes)}
    </div>
  )
}
