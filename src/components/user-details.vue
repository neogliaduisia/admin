<template>
<div>
  <v-card class="mx-auto card" outlined>
    <v-card-title> User </v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item> Name: {{ user.name }} </v-list-item>
        <v-list-item>Last name: {{ user.lastName }}</v-list-item>
        <v-list-item>Email: {{ user.email }}</v-list-item>
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
  <v-simple-table fixed-header max-height="550px" class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Group</th>
            <th class="text-left">Members</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in userGroups" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{item.usersIds.length}}</td>
            <td>
              <v-btn small color="primary" @click="openModal(item.id)">
                Delete user from group
              </v-btn>
            </td>
          </tr>
        </tbody>
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">
              Do you want to delete user from group?
            </v-card-title>
            <v-card-text> </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Disagree
              </v-btn>
              <v-btn color="green darken-1" text @click="remove()">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-simple-table>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "user-details",
  props: ["userId"],
  data() {
      return {
          dialog: false,
          currentGroup: "",
      }
  },
  created() {
    this.getUserData(this.userId);
  },
  computed: {
    ...mapGetters(["user", "userGroups"]),
  },
  methods: {
    ...mapActions([ "getUserData", "deleteUserFromGroup"]),
    openModal(groupId) {
      this.dialog = true;
      this.currentGroup = groupId;
    },
    remove() {
      this.dialog = false;
      this.deleteUserFromGroup({
        userId: this.user.id,
        groupId: this.currentGroup,
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
.table {
    margin: 20px 10% 20px 10% !important;
    border: 1px lightgrey solid
}
</style>
