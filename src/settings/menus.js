/**
 * 系统菜单配置项
 * @type {String}
 */
export default [{
  path:'/dashboard',
  title:'系统面板',
  icon:'home'
},{
  title:'账号管理',
  path:'/accounts',
  icon:'user',
  subs:[{
    title:'用户管理',
    path:'/accounts/users',
  },{
    title:'角色管理',
    path:'/accounts/roles',
  }]
},{
  title:'店铺管理',
  path:'/stores',
  icon:'appstore',
  subs:[{
    title:'区域管理',
    path:'/stores/area'
  },{
    title:'店员管理',
    path:'/stores/emp'
  }]
}]
