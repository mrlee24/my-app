<template>
<div>
  <b-row>
    <h1 class="my-4">Users</h1>
  </b-row>
  <hr />
  <b-row>
    <b-col >
      <div class="float-right my-4">
        <b-button v-b-modal.add-user-modal class="mr-2" variant="primary" description="Add a new user">Add User</b-button>
        <b-button class="mr-sm-2" variant="info">Edit User</b-button>
        <b-button class="mr-sm-2" variant="danger">Delete User</b-button>
        <b-modal id="add-user-modal" size="lg" hide-footer><AddUserModal></AddUserModal></b-modal>
      </div>
      <UserTable></UserTable>
    </b-col>
  </b-row>
</div>
</template>

<script>
import AddUserModal from '@/components/Admin/AddUserModal' 
import UserTable from '@/components/Admin/UserTable'
export default {
  components: {
    AddUserModal,
    UserTable  
    },

}
</script>

<style>

</style>