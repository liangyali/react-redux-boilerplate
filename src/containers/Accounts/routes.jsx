import Main from './Main'
import Users from './Users'
import Roles from './Roles'
import Notfound from '../../components/Notfound'

export default(pathname) => {
  return {
    path: pathname,
    component: Main,
    breadcumbName: '账号1管理',
    routes: [
      Users.createRoutes(`${pathname}/users`),
      Roles.createRoutes(`${pathname}/roles`), {
        breadcumbName: '无法找到页面',
        component: Notfound
      }
    ]
  }
}
