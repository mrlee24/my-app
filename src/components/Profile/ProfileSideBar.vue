<template>
    <div class="col-xs-auto card card-profile-sidebar mr-5">
        <div class="card-body">
          <div class="form-group text-center ">
              <b-avatar v-if="!user.data.photoUrl" size="7em" variant="info"></b-avatar>
              <b-avatar v-else :src="user.data.photoUrl"></b-avatar>
          </div>
          <hr />
          <div class="row justify-content-center col-xs-auto">
            <b-button-group class="col-xs-auto" vertical>
              <b-button @click.prevent="deactivateEdit" to="/Profile" variant="outline-light text-dark mt-3" class="my-2 btn-md">Your Profile</b-button>
              <b-button @click.prevent="editProfile" variant="outline-light text-dark" class="my-2 btn-md">Profile Settings</b-button>
              <b-button variant="outline-light text-dark" class="my-2 btn-md">Email Settings</b-button>
              <b-button variant="outline-light text-dark" class="my-2 btn-md">Edit Your Password</b-button>
              <hr class="my-4"/>
              <b-button pill variant="danger" class="btn-md">Sign Out</b-button>
            </b-button-group>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      disabledEditProfile: false
    }

  },
  computed: {
      user() {
        return this.$store.getters.user;
      },

      profileEdit() {
      return this.$store.getters.profileEdit;
    },
  },

  methods: {
    deactivateEdit() {
      this.disabledEditProfile = false
      this.$store.dispatch("setEditProfile", {disabledEditProfile: this.disabledEditProfile})
    },
    editProfile() {
      
      this.disabledEditProfile = true
      this.$store.dispatch("setEditProfile", {disabledEditProfile: this.disabledEditProfile})
    }
  }
}
</script>

<style>
.card-profile-sidebar {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-profile-sidebar .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-profile-sidebar .card-body {
  padding: 2rem;
}
</style>