import Main from './Main'
import List from './List'
import New from './New'

export default(pathname) => {
  return {
    path: pathname,
    component: Main,
    breadcumbName: '角色管理',
    routes: [
      {
        path: pathname,
        exact: true,
        breadcumbName: '角色列表',
        component: List
      }, {
        path: `${pathname}/new`,
        breadcumbName: '创建角色',
        component: New
      }
    ]
  }
}
