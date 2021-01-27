<template>
  <div>
    <v-card class="mx-auto card" outlined>
      <v-card-title> User </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item class="userInfo"> Name: {{ user.name }} </v-list-item>
          <v-list-item class="userInfo"
            >Last name: {{ user.lastName }}</v-list-item
          >
          <v-list-item class="userInfo">Email: {{ user.email }}</v-list-item>
        </v-list-item-content>
        <v-list-item-avatar tile size="150" color="grey">
          <v-img
            :src="user.image"
            max-height="150"
            max-width="150"
            class="image"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
    <groups-table
      :items="userGroups"
      :removable="true"
      @on-remove="removeUser($event)"
    ></groups-table>
  </div>
</template>

<script>
import GroupsTable from "../components/groups-table";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "user-details",
  props: ["userId"],
  components: {
    GroupsTable,
  },
  data() {
    return {};
  },
  created() {
    this.getUserData(this.userId);
  },
  computed: {
    ...mapGetters(["user", "userGroups"]),
  },
  methods: {
    ...mapActions(["getUserData", "deleteUserFromGroup"]),
    removeUser(data) {
      this.deleteUserFromGroup({
        userId: this.user.id,
        groupId: data.groupId,
      });
      this.getUserData(this.userId);
    },
  },
};
</script>

<style scoped lang='scss'>
.card {
  margin: 5% 10% 20px 10% !important;
}

.userInfo {
  padding: 0px;
  font-size: 16px;
}
</style>
