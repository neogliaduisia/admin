const groupsModule = {
  state: {
    groups: [
      {
        id: 1,
        name: "Hobbits",
        usersIds: [1, 2, 3, 4]
      },
      {
        id: 2,
        name: "Wizards",
        usersIds: [5, 6, 7]
      },
      {
        id: 3,
        name: "Kings",
        usersIds: [8, 9, 10]
      },
    ]
  },
  getters: {
    groups(state) {
      return state.groups;
    }
  },
  mutations: {
    updateGroups(state, groups) {
      state.groups = groups;
    }
  },
  actions: {
    setUserToGroup({state, commit}, data) {
      if (data.userId === '' || data.groupId === '') {
        return;
      }
      const groupsCopy = [...state.groups];
      let group = groupsCopy.find(group => group.id == data.groupId);
      if (group.usersIds.indexOf(data.userId) === -1) {
        group.usersIds.push(data.userId);
      }
      commit("updateGroups", groupsCopy);
    },
    deleteUserFromGroup({state, commit}, data) {
      console.log(data)
      const groupsCopy = [...state.groups];
      let group = groupsCopy.find(group => group.id == data.groupId);
      const userIndex = group.usersIds.indexOf(data.userId);
      group.usersIds.splice(userIndex, 1);
      commit("updateGroups", groupsCopy);
    },
  },
};

export default groupsModule;