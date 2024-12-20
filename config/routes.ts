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
    access: 'notBanned',
    component: './Chart/GenChart',
  },
  {
    path: '/GenChartAsync',
    name: '智能分析-异步',
    icon: 'RadarChartOutlined',
    access: 'notBanned',
    component: './Chart/GenChartAsync',
  },
  {
    path: '/my/chart',
    name: '历史分析',
    icon: 'BarChartOutlined',
    access: 'notBanned',
    component: './Chart/MyChart',
  },
  {
    path: '/game',
    name: '休息一下',
    icon: 'CustomerServiceOutlined',
    component: './Game',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/user',
        name: '用户管理页',
        component: './User/Admin',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
