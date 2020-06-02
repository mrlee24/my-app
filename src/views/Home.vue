<template>
  <div class="container" v-if="user.loggedIn">
    <h1 align="center">Hello {{user.data.email}} !!</h1>
  </div>
  <div v-else>
    <h1 align="center">Please login into your account</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
computed: {
    ...mapGetters({
    // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  }
}
</script>

<style>

</style>