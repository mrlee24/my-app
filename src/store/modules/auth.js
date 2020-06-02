//import * as firebase from "firebase"
import firebase from 'firebase'

const state =  {
    user: {loggedIn: false, data: null}
};

export const getters ={
    user (state) {
        return state.user
    }
};

export const mutations = {
    SET_USER (state, payload) {
        state.user.data = payload
    },

    SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value
    }
};

export const actions = {
    loginIn({commit}, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(  user =>
                commit("SET_USER", {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email, 
                    photoURL: user.photoURL
                })
            )
            .catch(
                error => {
                    //commit('setLoading', false)
                    //commit('setError', error)
                    console.log(error)
                }
            )
    },

    logOut({commit}) {
        firebase.auth().signOut()
        commit("SET_USER", null)
    },

    fetchUser({commit}, user) {
        commit("SET_LOGGED_IN", user !== null);
        if(user) {
            commit("SET_USER", {
                id: user.uid,
                name: user.displayName,
                email: user.email, 
                photoURL: user.photoURL
            });
        } else {
            commit("SET_USER", null);
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};