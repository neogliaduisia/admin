<template>
  <div>
    <users-table
      :users="users"
      :removable="false"
      @on-add="addToGroup($event)"
    ></users-table>
  </div>
</template>

<script>
import UsersTable from "../components/users-table";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "users",
  components: {
    UsersTable,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setUserToGroup"]),
    addToGroup(data) {
      this.setUserToGroup(data);
    },
  },
  computed: {
    ...mapGetters(["users", "groups"]),
  },
};
</script>

