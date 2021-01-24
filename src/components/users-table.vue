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
          <v-card-title class="headline">
            Which group do you want to add the user to?
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
            <v-btn color="grey darken-1" text @click="addDialog = false">
              Close
            </v-btn>
            <v-btn color="green darken-1" text @click="addToGroup()">
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="removeDialog" max-width="400">
        <v-card>
          <v-form>
            <v-card-text class="text">
              Do you want to delete user from group?</v-card-text
            >
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
export default {
  name: "users",
  props: {
    users: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    removable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      addDialog: false,
      removeDialog: false,
      currentGroup: "",
      currentUser: "",
    };
  },
  methods: {
    openAddModal(userId) {
      this.addDialog = true;
      this.currentUser = userId;
    },
    addToGroup() {
      this.$emit("on-add", {
        userId: this.currentUser,
        groupId: this.currentGroup,
      });
      this.addDialog = false;
    },
    openRemoveModal(userId) {
      this.removeDialog = true;
      this.currentUser = userId;
    },
    remove() {
      this.$emit("on-remove", {
        userId: this.currentUser,
        groupId: this.currentGroup,
      });
      this.removeDialog = false;
    },
  },
  computed: {
    ...mapGetters(["groups"]),
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
