export const tableMixin = {
  props: {
    items: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    removable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      addDialog: false,
      removeDialog: false,
      currentGroup: "",
      currentUser: "",
    };
  },
  methods: {
    openAddModal(userId) {
      this.addDialog = true;
      this.currentUser = userId;
    },
    addToGroup() {
      this.$emit("on-add", {
        userId: this.currentUser,
        groupId: this.currentGroup,
      });
      this.addDialog = false;
    },
    openRemoveModal(userId) {
      this.removeDialog = true;
      this.currentUser = userId;
    },
    remove() {
      this.$emit("on-remove", {
        userId: this.currentUser,
        groupId: this.currentGroup,
      });
      this.removeDialog = false;
    },
  },
};