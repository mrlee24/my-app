<template>
  <div class="col-3 position-static">
    <div class="card card-sidebar bg-aqua">
      <div class="card-body">
        <h5 class="card-title text-center">Header</h5>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>
.card-sidebar {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  background-color: #222222;
}

.card-sidebar .card-title {
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}
</style>
