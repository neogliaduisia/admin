import Vue from 'vue'
import VueRouter from 'vue-router'
import users from '../views/users'
import groups from '../views/groups'
import userDetails from '../views/user-details'
import groupDetails from '../views/group-details'

Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: users,
    },
    {
      path: "/groups",
      name: "groups",
      component: groups,
    },
    {
      path: '/group/:id',
      name: 'group-details',
      component: groupDetails,
      props: route => ({ groupId: route.params.id }),
    },
    {
      path: '/users/:id',
      name: 'user-details',
      component: userDetails,
      props: route => ({ userId: route.params.id }),
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'users' && to.name !== 'groups' && to.name !== 'group-details' && to.name !== 'user-details') {
    next({ path: '/users' })
  } else next();
})
export default router