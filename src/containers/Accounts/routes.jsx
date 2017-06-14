import Main from './Main'
import Users from './Users'
import Notfound from '../../components/Notfound'

export default(pathname) => {
  return {
    path: pathname,
    component: Main,
    authenticated: true,
    breadcumbName: '账号管理',
    routes: [
      Users.createRoutes(`${pathname}/users`), {
        breadcumbName: '无法找到页面',
        component: Notfound
      }
    ]
  }
}
