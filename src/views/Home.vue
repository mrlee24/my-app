<template>
  <div class="container" v-if="user.loggedIn">
    <h1 align="center">Hello {{user.data.email}}</h1>
  </div>
  <div v-else>
    <h1 align="center">Please login into your account</h1>
  </div>
</template>

<script>
export default {
computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style>

</style>