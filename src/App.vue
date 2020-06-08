<template>
  <div id="app">
    <Navbar></Navbar>
    <div v-if="user.loggedIn" class="container-sticky">
      <div class="row">
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
      </div>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';

export default {
  name: 'App',

  components: {
    Navbar,
    Sidebar,
    Dashboard
  },

  data: () => ({
    //
  }),
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
};
</script>

<style scoped>

</style>
