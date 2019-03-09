/**
 * @author v4 <lucky6616888@163.com>
 */
import Loadable from 'react-loadable';
const loadable = (filename) => Loadable({
  loader: () => import(`../page/${filename}`),
  loading: () => ('')
});


//路由配置对象
const routers = [
  {
    path: '/',
    exact: true,
    component: loadable('Index/App')
  },
  {
    path: '/login',
    component: loadable('Login/Index')
  },
  {
    path: '/shop',
    component: loadable('Shop/Shop')
  },
  {
    path: '/detail/:id',
    component: loadable('Shop/child/Detail')
  },
  {
    path: '/buy/:id',
    component: loadable('Buy/Buy')
  },
  {
    path: '/user',
    component: loadable('User/User')
  },
  {
    path: '/user/text',
    component: loadable('User/child/Text')
  },
  {
    path: '*',
    component: loadable('NotFind/NotFind')
  }
];

export default routers;
