import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userToEdit: {},
    formStatus: null
  },
  mutations: {
    updateUserToEdit(state, payload) {
      state.userToEdit = payload;
    },
    updateFormStatus(state, payload) {
      state.formStatus = payload;
    }
  }
});
