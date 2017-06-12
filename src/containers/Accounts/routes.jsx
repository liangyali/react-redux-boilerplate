import Main from './Main'
import Users from './Users'

export default(pathname) => {
  return {
    path: pathname,
    component: Main,
    breadcumbName: '账号管理',
    routes: [Users.createRoutes(`${pathname}/users`)]
  }
}
