import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth"
import firebase from "firebase"

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  modules: { 
    auth: auth
  }
});