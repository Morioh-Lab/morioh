import api from "./../../api";


export default {
  state: {
    info: null,
    docs: []
  },
  mutations: {

    SUBSCRIBE_FETCH(state, data) {
      state.docs = data;
    },

    SUBSCRIBE_INFO(state, data) {
      state.info = data;
    },

  },


  actions: {


    SUBSCRIBE_FETCH({ commit }, payload) {

      return api.post("subscribe/fetch", payload).then(({ data }) => {
        commit("SUBSCRIBE_FETCH", data);
        return data;
      })
    },

    SUBSCRIBE_INFO({ commit }, payload) {

      return api.post("subscribe/info", payload).then(({ data }) => {
        commit("SUBSCRIBE_INFO", data);
        return data;
      })
    },


    SUBSCRIBE_CHECK({ commit }, payload) {
      return api.post("subscribe/check", payload);
    },



    NEW_SUBSCRIBE({ commit }, payload) {
      return api.post("subscribe/new", payload);
    },

    SUBSCRIBE_REMOVE({ commit }, payload) {
      return api.post("subscribe/remove", payload);
    },


  },
};
