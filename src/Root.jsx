import React from 'react'
import renderRoutes from './utils/renderRoutes'
import routes from './containers/routes'

export default() => {
  return (
    <div>
      {renderRoutes(routes)}
    </div>
  )
}
