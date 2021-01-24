<template>
  <v-simple-table fixed-header max-height="450px" class="table">
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
        <router-link
          v-for="item in users"
          :key="item.name"
          :to="{
            name: 'user-details',
            params: { id: item.id },
          }"
          tag="tr"
        >
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
            <v-btn small color="primary" @click.stop="openModal(item.id)">
              Add user to group
            </v-btn>
          </td>
        </router-link>
      </tbody>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">
            Use Google's location service?
          </v-card-title>
          <v-card-text>
            <v-select
              :items="groups"
              item-text="name"
              v-model="currentGroup"
              item-value="id"
              class="select"
              dense
            >
            </v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="addToGroup()">
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-simple-table>
</template>

<script>
import { mdiAccount } from "@mdi/js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "users",
  data() {
    return {
      svgPath: mdiAccount,
      dialog: false,
      currentGroup: "",
      currentUser: "",
    };
  },
  methods: {
    ...mapActions(["setUserToGroup"]),
    openModal(userId) {
      this.dialog = true;
      this.currentUser = userId;
    },
    addToGroup() {
      this.dialog = false;
      this.setUserToGroup({
        userId: this.currentUser,
        groupId: this.currentGroup,
      });
      this.currentGroup = "";
      this.currentUser = "";
    },
  },
  computed: {
    ...mapGetters(["users", "groups"]),
  },
};
</script>

<style scoped lang='scss'>
.table {
  margin: 5% 10% 0% 10%;
  border: 1px lightgrey solid;
  .image {
    border-radius: 50%;
  }
}
</style>
