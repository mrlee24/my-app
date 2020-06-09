export default {
    state: {
      loading: false,
      error: null,
      profileEdit: false,
    },
    
    mutations: {
      SET_LOADING (state, payload) {
        state.loading = payload
      },
      SET_EDIT_PROFILE(state, payload) {
        state.profileEdit = payload
      },
      SET_ERROR (state, payload) {
        state.error = payload
      },
      CLEAR_ERROR (state) {
        state.error = null
      }
    },

    actions: {
      clearError ({commit}) {
        commit("CLEAR_ERROR")
      },

      setEditProfile({commit}, payload) {
        commit("SET_EDIT_PROFILE", payload)
      },

      setError ({commit}, payload) {
        commit("SET_ERROR", payload)
      }
    },

    getters: {
      loading (state) {
        return state.loading
      },
      error (state) {
        return state.error
      },
      profileEdit (state) {
        return state.profileEdit
      }
    }
  }
