<template>
  <div>
    <users-table
      :items="users"
      :removable="false"
      @on-add="addToGroup($event)"
    ></users-table>
  </div>
</template>

<script>
import usersTable from "../components/users-table";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "users",
  components: {
    usersTable,
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

