<template>
  <div class="row">
    <div class="col-md-2 col-lg-12">
      <div class="card card-profile my-5">
        <div class="card-body">
          <h5 class="card-title text-center">Personal Info</h5>
          <hr />
          <form class="container form-profile">
            <div class="form-group text-center m-4">
              <img
                src="@/assets/default-avatar.png"
                alt="Avatar"
                class="img-fluid img-thumbnail"
                v-if="!user.data.photoUrl"
              />
              <img
                :src="user.data.photoUrl"
                alt="Avatar"
                class="img-fluid img-thumbnail"
                v-else
              />
            </div>
            <hr />
            <div class="row">
              <div class="col border-right">
                <div class="form-group mx-auto">
                  <label for="email">Email:</label>
                  <input
                    id="email"
                    type="text"
                    class="form-control"
                    name="email"
                    :disabled="disabledEmail == 1"
                    v-model="form.email"
                    :placeholder="user.data.email"
                  />
                  <div class="form-inline float-right my-2">
                    <a
                      class="btn btn-outline-info mr-2"
                      title="Edit your email address"
                      ><b-icon icon="pencil"></b-icon
                    ></a>
                    <a
                      class="btn btn-outline-danger"
                      title="Cancel your modification"
                      ><b-icon icon="x"></b-icon
                    ></a>
                  </div>
                </div>
                <div class="form-group mx-auto my-5">
                  <label for="displayName">Display Name:</label>
                  <input
                    v-if="!user.data.displayName"
                    id="displayName"
                    type="text"
                    class="form-control mx-auto"
                    name="displayName"
                    :disabled="disabledDisplayName == 1"
                    v-model="form.displayName"
                    placeholder="Edit your display name"
                  />

                  <input
                    v-else
                    id="displayName"
                    type="text"
                    class="form-control mx-auto"
                    name="displayName"
                    :disabled="disabledDisplayName == 1"
                    v-model="form.displayName"
                    :placeholder="user.data.displayName"
                  />

                  <div class="form-inline float-right my-2">
                    <a
                      class="btn btn-outline-info mr-2"
                      title="Edit your display name"
                      ><b-icon icon="pencil"></b-icon
                    ></a>
                    <a
                      class="btn btn-outline-danger"
                      title="Cancel your modification"
                      ><b-icon icon="x"></b-icon
                    ></a>
                  </div>
                </div>
                <div class="form-group mx-auto my-5">
                  <label for="photoURL">Photo Url:</label>
                  <input
                    v-if="!user.data.photoURL"
                    id="photoURL"
                    type="url"
                    class="form-control mx-auto"
                    name="photoURL"
                    :disabled="disabledPhotoUrl == 1"
                    v-model="form.photoURL"
                    placeholder="Add your photo url here..."
                  />

                  <input
                    v-else
                    id="photoURL"
                    type="text"
                    class="form-control mx-auto"
                    name="photoURL"
                    :disabled="disabled == 1"
                    v-model="form.photoURL"
                    :placeholder="user.data.photoURL"
                  />

                  <div class="form-inline float-right my-2">
                    <a
                      class="btn btn-outline-info mr-2"
                      title="Change your Photo Url"
                      ><b-icon icon="pencil"></b-icon
                    ></a>
                    <a
                      class="btn btn-outline-danger"
                      title="Cancel your modification"
                      ><b-icon icon="x"></b-icon
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-group mx-auto">
                  <label for="phoneNumber">Phone Number: </label>
                  <input
                    v-if="!user.data.phoneNumber"
                    id="phoneNumber"
                    type="phoneNumber"
                    class="form-control mx-auto"
                    name="phoneNumber"
                    :disabled="disabledPhoneNumber == 1"
                    placeholder="Add your phone number"
                  />

                  <input
                    v-else
                    id="phoneNumber"
                    type="text"
                    class="form-control mx-auto"
                    name="phoneNumber"
                    :disabled="disabledPhoneNumber == 1"
                    v-model="form.phoneNumber"
                    :placeholder="user.data.phoneNumber"
                  />

                  <div class="form-inline float-right my-2">
                    <a
                      class="btn btn-outline-info mr-2"
                      title="Change your Photo Url"
                      ><b-icon icon="pencil"></b-icon
                    ></a>
                    <a
                      class="btn btn-outline-danger"
                      title="Cancel your modification"
                      ><b-icon icon="x"></b-icon
                    ></a>
                  </div>
                </div>
                <div class="form-group mx-auto my-5">
                  <label for="displayName">Address:</label>
                  <input
                    v-if="!user.data.address"
                    id="address"
                    type="text"
                    class="form-control mx-auto"
                    name="address"
                    :disabled="disabledAddress == 1"
                    v-model="form.address"
                    placeholder="Add your address here"
                  />

                  <input
                    v-else
                    id="address"
                    type="text"
                    class="form-control mx-auto"
                    name="address"
                    :disabled="disabledAddress == 1"
                    v-model="form.address"
                    :placeholder="user.data.address"
                  />

                  <div class="form-inline float-right my-2">
                    <a
                      class="btn btn-outline-info mr-2"
                      title="Change your Photo Url"
                      ><b-icon icon="pencil"></b-icon
                    ></a>
                    <a
                      class="btn btn-outline-danger"
                      title="Cancel your modification"
                      ><b-icon icon="x"></b-icon
                    ></a>
                  </div>
                </div>
                <div class="form-group mx-auto my-5">
                  <label for="photoURL">Title:</label>
                  <input
                    v-if="!user.data.title"
                    id="title"
                    type="text"
                    class="form-control mx-auto"
                    name="title"
                    :disabled="disabledTitle == 1"
                    v-model="form.title"
                    placeholder="Add your photo url here..."
                  />
                  <input
                    v-else
                    id="title"
                    type="text"
                    class="form-control mx-auto"
                    name="title"
                    :disabled="disabledTitle == 1"
                    v-model="form.title"
                    :placeholder="user.data.title"
                  />
                </div>
              </div>
            </div>
            <div
              v-if="error"
              class="alert alert-danger"
              @dismissed="onDismissed"
            >
              {{ error.message }}
            </div>
            <hr />
            <div class="container form-group mt-3">
              <div class="row form-inline mx-auto text-center">
                <div
                  class="col mx-auto btn-lg btn-fluid "
                  role="group"
                  aria-label="Submit Group"
                >
                  <!-- <a
                    class="btn btn-outline-info col-sm-5 mr-4"
                    @click.prevent="disabled = 0"
                    v-if="disabled == 1"
                    ><b-icon icon="pencil"></b-icon> Edit</a
                  >
                  <a
                    class="btn btn-outline-info col-sm-5 mr-4"
                    @click.prevent="onUpdateUser"
                    v-else
                    ><b-icon icon="pencil"></b-icon> Save</a
                  >
                  <a
                    class="btn btn-outline-danger col-sm-5"
                    @click.prevent="disabled = 1"
                    ><b-icon icon="x"></b-icon>Cancel</a
                  > -->
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        displayName: "",
        photoURL: "",
        phoneNumber: "",
        address: "",
        title: "",
      },

      disabledEmail: 1,
      disabledDisplayName: 1,
      disabledPhotoUrl: 1,
      disabledPhoneNumber: 1,
      disabledAddress: 1,
      disabledTitle: 1,
    };
  },
  methods: {
    onUpdateUser() {
      this.$store.dispatch("updateUserProfile", {
        displayName: this.form.displayName,
        photoURL: this.form.photoURL,
      });
      console.log(this.form.displayName);
    },

    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },

    error() {
      return this.$store.getters.error;
    },

    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style scoped>
.border-right {
  border-right: 1px solid #ccc;
}
.card-profile {
  border: 0;
  border-radius: 2rem;
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

/* .form-profile {
  width: 100%;
} */

.form-profile .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  transition: all 0.2s;
}

.form-group input {
  text-align: center;
  border-radius: 2rem;
}
</style>
