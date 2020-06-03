import * as firebase from 'firebase'

const state = {
    user: { loggedIn: false, data: null }
}

export const getters = {
    user (state) {
        return state.user
    }
}

export const mutations = {
    SET_LOGGED_IN (state, value) {
        state.user.loggedIn = value;
    },

    SET_USER (state, data) {
        state.user.data = data;
    }
}

export const actions = {
    signUserIn ({ commit }, payload) {
        commit('SET_LOADING', true)
        commit('CLEAR_ERROR')
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then (
                commit("SET_USER", {
                    id: payload.uid,
                    name: payload.displayName,
                    email: payload.email,
                    photoUrl: payload.photoURL})
            )
            .catch(error => {
              commit('SET_LOADING', false)
              commit('SET_ERROR', error)
              console.log(error)
            }
          )
      },

    signUserOut ({ commit }) {
        firebase.auth().signOut().then(() => {
            commit("SET_USER", null)
        })
    },

    fetchUser({ commit }, user) {
        commit("SET_LOGGED_IN", user !== null);
        if (user) {
          commit("SET_USER", {
                id: user.uid,
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
          });
        } else {
          commit("SET_USER", user);
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}