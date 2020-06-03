import Vue from "vue";
import auth from "./modules/auth"
import shared from "./modules/shared"
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    shared
  }
});