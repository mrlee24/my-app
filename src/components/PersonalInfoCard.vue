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
                            <form class="form-profile">
                                <div v-if="error" class="alert alert-danger" @dismissed="onDismissed" >{{error.message}}</div>
                                <div class="form-group form-inline"> 
                                    <input
                                        id="email"
                                        type="email"
                                        class="form-control mx-auto"
                                        name="email"
                                        :disabled="disabled == 0"
                                        :value="user.data.email"/>
                                    <div class="btn-group mr-2 mx-auto btn-sm" role="group" aria-lable="Function Group">
                                        <a class="btn btn-info"  @click.prevent="disabled = 1"><b-icon icon="pencil-square"></b-icon></a>
                                        <a class="btn btn-secondary"  @click.prevent="disabled = 0"><b-icon icon="x-octagon"></b-icon></a>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-inline"> 
                                        <template v-if="!user.data.name">
                                        <input
                                            id="displayName"
                                            type="text"
                                            class="form-control mx-auto"
                                            name="email"
                                            :disabled="disabled == 0"
                                            v-model="form.name"
                                            placeholder="Edit your username here..." />
                                        </template>
                                        <template v-else>
                                            <input
                                                id="email"
                                                type="email"
                                                class="form-control mx-auto"
                                                name="email"
                                                :disabled="disabled == 0"
                                                :value="user.data.name"/>
                                        </template>
                                        <div class="btn-group  mx-auto btn-sm" role="group" aria-lable="Function Group">
                                            <a class="btn btn-info"  @click.prevent="disabled = 1"><b-icon icon="pencil-square"></b-icon></a>
                                            <a class="btn btn-secondary"  @click.prevent="disabled = 0"><b-icon icon="x-octagon"></b-icon></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mx-auto">
                                    <b-form-file
                                        v-model="form.photoUrl"
                                        placeholder="Upload or drop your image here..."
                                        drop-placeholder="Drop file here..."
                                    ></b-form-file>
                                </div>
                                <hr/>
                                <div class="container form-group">
                                    <div class="wrapper text-center">
                                        <div class="btn-group mt-3 mx-auto btn-lg" role="group" aria-label="Submit Group"> 
                                            <a class="btn btn-outline-info"  @click.prevent="disabled = 1">Save</a>
                                            <a class="btn btn-outline-danger"  @click.prevent="disabled = 0">Reset</a>
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
        password: ''
      },
      disabled: 0
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