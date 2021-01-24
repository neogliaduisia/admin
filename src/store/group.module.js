const groupModule = {
  state: {
    group: {},
    usersInGroup: []
  },
  getters: {
    group(state) {
      return state.group;
    },
    usersInGroup(state) {
      return state.usersInGroup;
    },
  },
  mutations: {
    setGroup(state, group) {
      state.group = group;
    },
    setUsersInGroup(state, users) {
      state.usersInGroup = users;
    }
  },
  actions: {
    getGroup({rootGetters, state}, groupId) {
      let group = rootGetters['groups'].find(group => group.id == groupId);
      state.group = group;
    },
    getUsersInGroup({rootGetters, commit, state}) {
      const users = rootGetters['users'].filter(user => {
        return state.group.usersIds.includes(user.id)
      });
      commit('setUsersInGroup', users);
    },
    getGroupData({dispatch}, groupId) {
      dispatch('getGroup', groupId);
      dispatch('getUsersInGroup');
    },
  },
};

export default groupModule;