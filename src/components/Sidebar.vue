<template>
  <div class="col-sm-2 position-static">
    <div class="card card-sidebar bg-aqua">
      <div class="card-body">
        <h5 class="card-title text-center">Header</h5>
        <hr />
      </div>
      <div class="text-center">
        <b-button v-b-toggle.collapse-1 variant="white" class="my-2">Dashboard</b-button>
          <b-collapse id="collapse-1" class="mt-1">
            <p class="card-text">Collapse contents Here</p>
            <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
            <b-collapse id="collapse-1-inner" class="mt-2">
          </b-collapse>
        </b-collapse>
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
