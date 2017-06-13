import React from 'react'
import {AppLayout} from '../../components/Layout'
import renderRoutes from '../../utils/renderRoutes'

export default({route}) => (
  <div>
    <AppLayout>
      {renderRoutes(route.routes)}
    </AppLayout>
  </div>
)
