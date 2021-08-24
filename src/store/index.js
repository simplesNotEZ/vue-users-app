import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: null,
    userToEdit: null,
    formStatus: null,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    updateUserToEdit(state, payload) {
      state.userToEdit = payload;
    },
    updateFormStatus(state, payload) {
      state.formStatus = payload;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const res = await api.getAll();
        commit("setUsers", res.data);
      } catch (err) {
        console.log("fetchUsers error", err);
      }
    },
    addUser({ dispatch }, payload) {
      api
        .post(payload)
        .then(() => {
          dispatch("getUsers");
        })
        .catch((error) => {
          console.log("POST error: ", error);
        });
    },
    editUser({ dispatch }, payload) {
      api
        .put(payload.userId, payload.newUser)
        .then(() => {
          dispatch("getUsers");
        })
        .catch((error) => {
          console.log("PUT error: ", error);
        });
    },
    deleteUser({ dispatch }, payload) {
      api
        .delete(payload)
        .then(() => {
          return dispatch("getUsers");
        })
        .catch((error) => {
          console.log("deleteUser error: ", error);
        });
    },
  },
});
