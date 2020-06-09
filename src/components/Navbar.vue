<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div>
        <b-button v-b-toggle.sidebar-backdrop class="navbar-toggler-icon mr-3 btn-lg"></b-button>
        <b-sidebar 
          id="sidebar-backdrop"
          backdrop-variant="transparent"
          backdrop no-header shadow>
          <ToggleSidebar></ToggleSidebar>
        </b-sidebar>
      </div>
      <b-navbar-brand to="/">WebApp</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto" right>
            <template v-if="user.loggedIn">
              <b-nav-item-dropdown v-if="!user.data.displayName" :text="user.data.email" right>
                <b-dropdown-item to="/Profile">Account</b-dropdown-item>
                <hr/>
                <b-dropdown-item @click.prevent="onLogout">Sign out</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown v-else :text="user.data.displayName" right>
                <b-dropdown-item to="/Profile">Account</b-dropdown-item>
                <hr/>
                <b-dropdown-item @click.prevent="onLogout">Sign out</b-dropdown-item>
              </b-nav-item-dropdown>
            </template>
            <template v-else>
              <li class="nav-item">
                <router-link to="login" class="nav-link">Login</router-link>
              </li>
            </template>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

import ToggleSidebar from '@/components/ToggleSidebar';
export default {
  components: {
    ToggleSidebar,
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },

  methods: {
    onLogout () {
      this.$store.dispatch('signUserOut')
      this.$router.push('/login')
    }
  }
};
</script>