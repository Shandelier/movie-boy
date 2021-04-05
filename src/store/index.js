import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      isLogged: false,
      userName: "Karol",
      premiumStatus: "",
      userMovieList: []
    };
  },
  mutations: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
    addMovie() {
      console.log("WIP");
    },
    loadMovie() {
      console.log("WIP");
    },
    setUserName(state, payload) {
      state.userName = payload.name;
    }
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logout");
    },
    setName(context, payload) {
      context.commit("setUserName", payload);
    }
  },
  getters: {}
});
