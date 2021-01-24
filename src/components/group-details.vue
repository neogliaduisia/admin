<template>
  <div>
    <v-card class="card">
      <v-card-title> Group </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-list>
          <v-list-item> Group name: {{ group.name }} </v-list-item>
          <v-list-item> Members: {{ group.usersIds.length }} </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-simple-table fixed-header max-height="550px" class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Photo</th>
            <th class="text-left">Name</th>
            <th class="text-left">Last Name</th>
            <th class="text-left">Email</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in usersInGroup" :key="item.name">
            <td>
              <v-img
                :src="item.image"
                max-height="40"
                max-width="40"
                class="image"
              ></v-img>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.email }}</td>
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
import { mdiAccount } from "@mdi/js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "group-details",
  props: ["groupId"],
  created() {
    this.getGroupData(this.groupId);
  },
  data() {
    return {
      svgPath: mdiAccount,
      dialog: false,
      currentUser: "",
    };
  },
  methods: {
    ...mapActions(["setUserToGroup", "getGroupData", "deleteUserFromGroup"]),
    openModal(userId) {
      this.dialog = true;
      this.currentUser = userId;
    },
    remove() {
      this.dialog = false;
      this.deleteUserFromGroup({
        userId: this.currentUser,
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
.table {
    margin: 20px 10% 20px 10% !important;
    border: 1px lightgrey solid;
    .image {
        border-radius: 50%;
    }
}
</style>
