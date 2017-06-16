import React from 'react'
import renderRoutes from '../../utils/renderRoutes'

export default({route}) => (
  <div>
      {renderRoutes(route.routes)}
  </div>
)
