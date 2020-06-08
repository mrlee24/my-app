<template>
  <div class="container">
        <template v-if="!user.loggedIn">
          <div class="container">
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                  <div class="card-body">
                    <h5 class="card-title text-center">Login</h5>
                    <hr/>
                    <form class="form-signin" @submit.prevent="onSignin">
                      <div class="mx-auto" role="alert" v-if="error">
                        <span v-if="error.code == 'auth/too-many-requests'" class="error text-danger" @dismissed="onDismissed">{{error.message}}</span>
                      </div>
                      <div class="form-group mt-3">
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          name="email"
                          value
                          required
                          autofocus
                          v-model="form.email" 
                          placeholder="Email"/>
                      </div>
                      <div v-if="error" role="alert">
                        <span v-if="error.code == 'auth/user-not-found' && error !== null" class="error text-danger" @dismissed="onDismissed">{{error.message}}</span>
                      </div>
                      <div class="form-group mt-3">
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                          name="password"
                          required
                          v-model="form.password" 
                          placeholder="Password"/>
                      </div>
                      <div v-if="error" role="alert">
                        <span v-if="error.code == 'auth/wrong-password' && error !== null" class="error text-danger" @dismissed="onDismissed">{{error.message}}</span>
                      </div>
                      <hr/>
                      <!-- <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Remember password</label>
                      </div> -->
                      <button class="btn btn-sm btn-outline-info btn-block">Login</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    }
  },
  
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.form.email, password: this.form.password})
    },
        
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  },

  computed: {
    user () {
      return this.$store.getters.user
    },

    error () {
      return this.$store.getters.error
    },
      
    loading () {
      return this.$store.getters.loading
    }
  }
};
</script>
<style scoped>

.card-signin {
  border: 0;
  border-radius: 2rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-group input {
  height: auto;
  border-radius: 2rem;
}
</style>