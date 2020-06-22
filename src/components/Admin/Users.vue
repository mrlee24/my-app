<template>
<div>
  <b-row>
    <h1 class="my-4">Users</h1>
  </b-row>
  <hr />
  <UserTable></UserTable>
</div>
</template>

<script>
import UserTable from '@/components/Admin/UserTable'
export default {
  components: {
    UserTable,
  },

}
</script>

<style>

</style>