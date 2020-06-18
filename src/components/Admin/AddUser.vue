<template>
  <b-form inline> 
    <label class="sr-only" for="inline-form-input-email">Email</label>
    <b-input
    id="inline-form-input-email"
    class="mb-2 mr-sm-2 mb-sm-0"
    placeholder="Email" type="email" v-model="form.email"></b-input>

    <label class="sr-only" for="inline-form-input-password">Password</label>
    <b-input
    id="inline-form-input-password"
    class="mb-2 mr-sm-2 mb-sm-0"
    placeholder="Password" type="password" v-model="form.password"></b-input>
    
    <b-button class="mr-sm-2" variant="info">Add</b-button>
    <b-button class="mr-sm-2" @click.prevent="clearField" variant="danger">Clear</b-button>
  </b-form>
</template>

<script>
// import * as firebase from "firebase"
// import db from 'firebase/firestore'
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
        // addUser() {
        //     let ref = db.collection('users').doc()
        //     ref.get().then(doc => {
        //         firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
        //         .then(user => {
        //             ref.set({
        //                 user_id: user.uid,
        //                 email: user.email,
        //                 password: user.password
        //             })
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        //     })
        // },

        // clearField() {
        //     this.form.email = '',
        //     this.form.password = ''
        // }
    }
}
</script>

<style>

</style>