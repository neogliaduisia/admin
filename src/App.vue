<template>
  <v-app id="app">
    <div class="toolbar">
      <v-app-bar color="white" dense class="elevation-2">
        <v-tabs color="green">
          <v-tab :to="{ name: 'users' }">Users</v-tab>
          <v-tab :to="{ name: 'groups' }">Groups</v-tab>
        </v-tabs>
      </v-app-bar>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang='scss'>
#app {
  min-height: 0px !important;
  .toolbar {
    height: 48px;
  }
}
</style>
