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

    LIST_FETCH(state, data) {
      state.data.docs = state.data.docs.concat(data.docs);
      state.data.offset += data.limit;

    },


    LIST_INFO(state, data) {
      state.info = data;
    },

    LIST_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    }


  },


  actions: {

    LIST_FETCH({ commit }, payload) {
      return api.post("list/fetch", payload).then(({ data }) => {
        commit("LIST_FETCH", data);
        return data;
      });
    },

    LIST_INFO({ commit }, payload) {
      return api.post("list/info", payload).then(({ data }) => {
        commit("LIST_INFO", data);
        return data;
      })
    },

    LIST_SUGGEST({ commit }, payload) {
      return api.post("list/suggest", payload).then(({ data }) => {
        commit("LIST_SUGGEST", data);
        return data;
      });
    },


  },
};
