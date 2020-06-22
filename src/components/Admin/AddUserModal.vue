<template>
    <b-card header-tag="header" footer-tag="footer">
        <template v-slot:header>
            <h4 class="text-center">Add New User</h4>
        </template>
        <b-card-text>  
            <b-form> 
                <b-form-group
                    id="input-email-group"
                    label="Email address:"
                    label-for="input-email">
                    <b-form-input
                        id="input-email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-password-group"
                    label="Password:"
                    label-for="input-password">
                    <b-form-input
                        id="input-password"
                        v-model="form.password"
                        type="password"
                        required
                        placeholder="Password"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-fullname-group"
                    label="Employee Fullname:"
                    label-for="input-fullname">
                    <b-form-input
                        id="input-fullname"
                        v-model="form.name"
                        type="text"
                        required
                        placeholder="Employee FullName"
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-claims-group"
                    label="Claims:"
                    label-for="input-claims"></b-form-group>
                <b-form-select id="input-claims" v-model="selected" :options="options"></b-form-select>
            </b-form>
        </b-card-text>
        <template v-slot:footer>
            <div class="text-center">  
                <b-button class="mr-sm-2" variant="info">Add</b-button>
                <b-button class="mr-sm-2" @click.prevent="clearField" variant="danger">Clear</b-button>
            </div>
        </template>
    </b-card>

</template>

<script>
// import * as firebase from "firebase"
// import db from 'firebase/firestore'
export default {
    data() {
        return {
            selected: null,
            options: [
                { value: null, text: 'Please select an option'},
                { value: 'Admin', text: 'Administrator'},
                { value: 'Manager', text: 'Manager'},
                { value: 'Receptionist', text: 'Receptionist'},
            ],
            form: {
                email: '',
                password: '',
                name: '',
                claim: ''
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