const userModule = {
  state: {
    user: {},
    userGroups: []
  },
  getters: {
    user(state) {
      return state.user;
    },
    userGroups(state) {
      return state.userGroups;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserGroups(state, groups) {
      state.userGroups = groups;
    }
  },
  actions: {
    getUser({rootGetters, commit}, userId) {
      let user = rootGetters['users'].find(user => user.id == userId);
      commit('setUser', user);
    },
    getGroups({rootGetters, commit, state}) {
      const groups = rootGetters['groups'].filter(group => {
        return group.usersIds.includes(state.user.id)
      })
      commit('setUserGroups', groups);
    },
    getUserData({dispatch}, groupId) {
      dispatch('getUser', groupId);
      dispatch('getGroups');
    },
  },
};

export default userModule;