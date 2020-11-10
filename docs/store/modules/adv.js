import api from "./../../api";


export default {
  state: {
    info: null,
    data: {
      alerts: [],
      docs: []
    }
  },
  mutations: {

    ADV_FETCH(state, data) {
      state.data = data;
    },

    ADV_INFO(state, data) {
      state.info = data;
    },

  },


  actions: {

    ADV_FETCH({ commit }, payload) {
      return api.post("roll/fetch", payload).then(({ data }) => {
        commit("ADV_FETCH", data);
        return data;
      });
    },

    ADV_INFO({ commit }, payload) {
      return api.post("roll/info", payload).then(({ data }) => {
        commit("ADV_INFO", data);
        return data;
      })
    },


  },
};
