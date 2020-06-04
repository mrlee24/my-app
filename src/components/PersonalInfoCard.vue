<template>
      <div class="container" allign-v="center">
        <template v-if="user.loggedIn">
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-profile my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Personal Info</h5>
                            <hr/>
                            <form class="container form-profile">
                                <div v-if="error" class="alert alert-danger" @dismissed="onDismissed" >{{error.message}}</div>
                                <div class="form-group text-center mt-5">
                                  <img src="@/assets/default-avatar.png" alt="Avatar" class="img-fluid img-thumbnail" v-if="!user.data.photoUrl">
                                  <img :src="user.data.photoUrl" alt="Avatar" class="img-fluid img-thumbnail" v-else>
                                </div>
                                <div class="form-group mx-auto my-5"> 
                                    <label for="email">Email: </label>
                                    <input
                                        id="email"
                                        type="email"
                                        class="form-control mx-auto"
                                        name="email"
                                        :disabled="disabled == 1"
                                        :value="user.data.email"/>
                                </div>
                                <div class="form-group mx-auto my-5">
                                    <label for="displayName">Display Name:</label>
                                      <input
                                          id="displayName"
                                          type="text"
                                          class="form-control mx-auto"
                                          name="displayName"
                                          :disabled="activateEdit == 0"
                                          v-model="form.displayName"
                                          :placeholder="user.data.displayName" />
                                </div>
                                <div class="form-group mx-auto my-5">
                                    <label for="photoURL">Upload Photo:</label>
                                      <input
                                          id="photoURL"
                                          type="url"
                                          class="form-control mx-auto"
                                          name="photoURL"
                                          :disabled="activateEdit == 0"
                                          v-model="form.photoURL"
                                          :placeholder="user.data.photoUrl" />
                                </div>
                                <hr/>
                                <div class="container form-group mt-3">
                                    <div class="row form-inline mx-auto text-center">
                                        <div class="col mx-auto btn-lg btn-fluid " role="group" aria-label="Submit Group"> 
                                            <a class="btn btn-outline-info col-sm-5 mr-4"  @click.prevent="activateEdit = 1" v-if="activateEdit == 0"><b-icon icon="pencil"></b-icon> Edit</a>
                                            <a class="btn btn-outline-info col-sm-5 mr-4"  @click.prevent="onUpdateUser" v-else><b-icon icon="pencil"></b-icon> Save</a>
                                            <a class="btn btn-outline-danger col-sm-5"  @click.prevent="activateEdit = 0"><b-icon icon="x"></b-icon>Cancel</a>
                                        </div>
                                    </div>
                                </div>
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
        displayName: '',
        photoURL: ''
      },
      activateEdit: 0,
      disabled: 1,
    }
  },
  methods: {
    onUpdateUser () {
      this.$store.dispatch('updateUserProfile', {displayName: this.form.displayName, photoURL: this.form.photoURL})
      console.log(this.form.displayName)
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
}
</script>

<style scoped>
.card-profile {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-profile .card-title {
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-profile .card-body {
  padding: 2rem;
}

.form-profile {
  width: 100%;
}

.form-profile .btn {
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