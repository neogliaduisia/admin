import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import groupModule from './group.module';
import groupsModule from './groups.module';
import userModule from './user.module';
import usersModule from './users.module';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    users: usersModule,
    groups: groupsModule,
    group: groupModule,
    user: userModule
  },
  // saving groups to localStorage
  plugins: [createPersistedState({
    paths: ['groups']
  })],
});

export default store;