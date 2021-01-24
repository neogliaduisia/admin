<template>
  <div>
    <v-simple-table fixed-header max-height="400px" max-width="400px" class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Groups</th>
            <th class="text-left">Members</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <router-link
            v-for="item in groups"
            :key="item.name"
            :to="{
              name: 'group-details',
              params: { id: item.id },
            }"
            tag="tr"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.usersIds.length }}</td>
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
                :items="users"
                item-text="name"
                v-model="currentUser"
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "groups",
  data() {
    return {
      currentGroup: "",
      currentUser: "",
      dialog: false
    };
  },
  methods: {
    ...mapActions(["setUserToGroup"]),
    openModal(groupId) {
      this.dialog = true;
      this.currentGroup = groupId;
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
    ...mapGetters(["groups", "users"]),
  },
};
</script>

<style scoped lang='scss'>
.table {
  margin: 5% 10% 5% 10%;
  border: 1px lightgrey solid;
}
</style>
