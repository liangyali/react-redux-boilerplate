import Main from './Main'
import List from './List'
import New from './New'

export default(pathname) => {
  return {
    path: pathname,
    component: Main,
    breadcumbName: '用户管理',
    routes: [
      {
        path: pathname,
        exact: true,
        breadcumbName: '列表',
        component: List
      }, {
        path: `${pathname}/new`,
        breadcumbName: '创建',
        component: New
      }
    ]
  }
}
