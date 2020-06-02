<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">WebApp</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" right>
          <template v-if="user.loggedIn">
            <b-nav-item-dropdown :text="user.data.email" right>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
              <b-dropdown-item @click.prevent="signOut">Sign out</b-dropdown-item>
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
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>