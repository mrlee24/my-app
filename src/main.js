import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//End
//Firebase
import * as firebase from "firebase";
//End

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyBZbS5nhN_QxOnFyogMP3sZ0jqZRsiEFss",
  authDomain: "tenant-manage.firebaseapp.com",
  databaseURL: "https://tenant-manage.firebaseio.com",
  projectId: "tenant-manage",
  storageBucket: "tenant-manage.appspot.com",
  messagingSenderId: "854725763245",
  appId: "1:854725763245:web:f04a6885c76cbdac83a624",
  measurementId: "G-TPF9EDD0WW"
};

firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
