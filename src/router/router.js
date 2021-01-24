import Vue from 'vue'
import VueRouter from 'vue-router'
import users from '../components/users'
import groups from '../components/groups'
import userDetails from '../components/user-details'
import groupDetails from '../components/group-details'

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
      props: route => ({groupId: route.params.id}),
    },
    {
      path: '/users/:id',
      name: 'user-details',
      component: userDetails,
      props: route => ({userId: route.params.id}),
    },
  ]
})
export default router