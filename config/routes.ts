export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './User/Login',
      },
      {
        name: '注册',
        path: '/user/register',
        component: './User/Register',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/GenChart',
    name: '智能分析-同步',
    icon: 'LineChartOutlined',
    component: './Chart/GenChart',
  },
  {
    path: '/GenChartAsync',
    name: '智能分析-异步',
    icon: 'RadarChartOutlined',
    component: './Chart/GenChartAsync',
  },
  {
    path: '/my/chart',
    name: '历史分析',
    icon: 'BarChartOutlined',
    component: './Chart/MyChart',
  },
  {
    path: '/game',
    name: '休息一下',
    icon: 'BarChartOutlined',
    component: './Game',
  },
  // {
  //   path: '/admin',
  //   name: '管理页',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     { path: '/admin', redirect: '/admin/sub-page' },
  //     { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
  //   ],
  // },
  // { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
