import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

export default({location, children}) => (
  <div>
    <Sidebar/>
    <Main>
      {children}
    </Main>
  </div>
)
