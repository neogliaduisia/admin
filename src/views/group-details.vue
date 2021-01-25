<template>
  <div>
    <v-card class="mx-auto card" outlined>
      <v-card-title> Group </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-list>
          <v-list-item class="groupInfo">
            Group name: {{ group.name }}
          </v-list-item>
          <v-list-item class="groupInfo">
            Members: {{ group.usersIds.length }}
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <users-table
      :users="usersInGroup"
      :removable="true"
      @on-remove="removeGroup($event)"
    ></users-table>
  </div>
</template>

<script>
import UsersTable from "../components/users-table";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "group-details",
  props: ["groupId"],
  components: {
    UsersTable,
  },
  created() {
    this.getGroupData(this.groupId);
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getGroupData", "deleteUserFromGroup"]),
    removeGroup(data) {
      this.deleteUserFromGroup({
        userId: data.userId,
        groupId: this.group.id,
      });
      this.getGroupData(this.groupId);
    },
  },
  computed: {
    ...mapGetters(["usersInGroup", "group"]),
  },
};
</script>

<style scoped lang='scss'>
.card {
  margin: 5% 10% 20px 10% !important;
}
.groupInfo {
  padding: 0px;
  font-size: 16px;
}
</style>
