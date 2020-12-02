import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Account from '@/views/Account.vue';
import Corporate from '@/views/Corporate.vue';
import Store from '@/views/Store.vue';
import StoreDetails from '@/views/StoreDetails.vue';
import Staff from '@/views/Staff.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Account',
    component: Account,
  },
  {
    path: '/corporate',
    name: 'Corporate',
    component: Corporate,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  },
  {
    path: '/store/:id',
    name: 'StoreDetails',
    component: StoreDetails,
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !true) next({ name: 'Login' });
  else next();
});

export default router;
