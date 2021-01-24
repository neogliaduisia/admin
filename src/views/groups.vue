<template>
  <div>
    <groups-table
      :groups="groups"
      :removable="false"
      @on-add="addToGroup($event)"
    ></groups-table>
  </div>
</template>

<script>
import GroupsTable from "../components/groups-table";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "groups",
  components: {
    GroupsTable,
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
    ...mapGetters(["groups", "users"]),
  },
};
</script>

