<template>
  <div class="container" allign-v="center">
        <template v-if="!user.loggedIn">
          <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" >
                  <div class="card-header">Login</div>
                  <div class="card-body">
                      <div v-if="error" class="alert alert-danger">{{error}}</div>
                      <form id="formLogin" action="#" @submit.prevent="onSignin">
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                            <div class="col-md-6">
                            <input
                                id="email"
                                type="email"
                                class="form-control"
                                name="email"
                                value
                                required
                                autofocus
                                v-model="form.email" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                            <input
                                id="password"
                                type="password"
                                class="form-control"
                                name="password"
                                required
                                v-model="form.password" />
                            </div>
                        </div>
                        <hr/>
                        <b-button class="btn btn-primary btn-lg btn-block" type="submit" variant="primary">Login</b-button>
                      </form>
                  </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
            <div><h1>Hello {{user.data.email}}</h1></div>
        </template>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.form.email, password: this.form.password})
    },
  },

  computed: {
    user () {
      return this.$store.getters.user
    }
  }
};
</script>
<style scoped>

</style>