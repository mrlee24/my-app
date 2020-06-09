<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="col-xs-auto col-4 px-1" id="sticky-sidebar">
        <ProfileSidebar></ProfileSidebar>
      </div>
      <div class="col-8" id="main">
        <ProfileCard></ProfileCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/Profile/ProfileCard';
import ProfileSidebar from '@/components/Profile/ProfileSideBar';
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
    },
    components: {
        ProfileCard,
        ProfileSidebar
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