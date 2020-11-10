import api from "./../../api";


export default {
  state: {
    info: null,
    data: {
      offset: 0,
      limit: 30,
      docs: []
    },
  },
  mutations: {

    FOLLOW_FETCH(state, data) {
      state.data.docs = state.data.docs.concat(data.docs);
      state.data.offset += data.limit;
    },


    FOLLOW_INFO(state, data) {
      state.info = data;
    },

    FOLLOW_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    },

  },


  actions: {


    FOLLOW_FETCH({ commit }, payload) {

      return api.post("follow/fetch", payload).then(({ data }) => {
        commit("FOLLOW_FETCH", data);
        return data;
      })
    },

    FOLLOW_INFO({ commit }, payload) {

      return api.post("follow/info", payload).then(({ data }) => {
        commit("FOLLOW_INFO", data);
        return data;
      })
    },


    // FOLLOW_CHECK({ commit }, payload) {
    //   return api.post("follow/check", payload);
    // },



    FOLLOW({ commit }, payload) {
      return api.post("follow/save", payload).then(({ data }) => {
        commit("FOLLOW_INFO", data);
        return data;
      })
    },

    UNFOLLOW({ commit }, payload) {
      return api.post("follow/remove", payload).then(({ data }) => {
        commit("FOLLOW_INFO", null);
        return data;
      });
    },


  },
};
