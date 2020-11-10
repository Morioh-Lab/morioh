import api from "./../../api";


export default {
  state: {
    data: {
      offset: 0,
      limit: 30,
      docs: []
    },
    info: null

  },
  mutations: {

    TOPIC_FETCH(state, data) {
      state.data.docs = state.data.docs.concat(data.docs);
      state.data.offset += data.limit;

    },


    TOPIC_INFO(state, data) {
      state.info = data;
    },

    TOPIC_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    }


  },


  actions: {

    TOPIC_FETCH({ commit }, payload) {
      return api.post("topic/fetch", payload).then(({ data }) => {
        commit("TOPIC_FETCH", data);
        return data;
      });
    },

    TOPIC_INFO({ commit }, payload) {
      return api.post("topic/info", payload).then(({ data }) => {
        commit("TOPIC_INFO", data);
        return data;
      })
    },

    TOPIC_SUGGEST({ commit }, payload) {
      return api.post("topic/suggest", payload).then(({ data }) => {
        commit("TOPIC_SUGGEST", data);
        return data;
      });
    },


  },
};
