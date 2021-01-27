<template>
  <v-simple-table
    fixed-header
    max-height="400px"
    max-width="400px"
    class="table"
  >
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
          v-for="item in items"
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
            <v-btn
              small
              text
              color="primary"
              v-if="!removable"
              @click.stop="openAddModal(item.id)"
            >
              Add user to group
            </v-btn>
            <v-btn
              small
              text
              color="primary"
              v-if="removable"
              @click.stop="openRemoveModal(item.id)"
            >
              Remove user from group
            </v-btn>
          </td>
        </router-link>
      </tbody>
      <v-dialog v-model="addDialog" max-width="550">
        <v-card>
          <v-form>
            <v-card-title class="headline">
              Which user do you want to add to the group?
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
              <v-btn color="grey darken-1" text @click="addDialog = false">
                Close
              </v-btn>
              <v-btn color="green darken-1" text @click="addToGroup()">
                Add
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog v-model="removeDialog" max-width="400">
        <v-card>
          <v-form>
            <v-card-text class="text">
              Do you want to delete user from group?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-1" text @click="removeDialog = false">
                Close
              </v-btn>
              <v-btn color="red darken-1" text @click="remove()">
                Delete
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters } from "vuex";
import { tableMixin } from "../mixins/table-mixin";

export default {
  name: "groups-table",
  mixins: [tableMixin],
  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<style scoped lang="scss">
.table {
  margin: 5% 10% 0% 10%;
  border: 1px lightgrey solid;
  td:hover {
    cursor: pointer;
  }
}
.text {
    font-size: 20px;
    text-align: start;
    padding-left: 20px;
    padding-top: 30px;
  }
</style>