import React from 'react'
import {AppLayout} from '../../components/Layout'
import {renderRoutes} from 'react-router-config'

export default({route}) => (
  <div>
    <AppLayout>
      {renderRoutes(route.routes)}
    </AppLayout>
  </div>
)
