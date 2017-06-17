import React from 'react'
import {renderRoutes} from '../../../utils'

export default({route}) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
)
