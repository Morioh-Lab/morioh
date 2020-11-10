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
    SNIPPET_FETCH(state, data) {

      
      state.data.docs = state.data.docs.concat(data.docs);
      state.data.offset += data.limit;      

    },


    SNIPPET_INFO(state, data) {
      state.info = data;
    },

   
    SNIPPET_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    }

  },


  actions: {

    SNIPPET_FETCH({ commit }, payload) {
      return api.post("snippet/fetch", payload).then(({ data }) => {
        commit("SNIPPET_FETCH", data);
        return data;
      });
    },

    SNIPPET_INFO({ commit }, payload) {
      return api.post("snippet/info", payload).then(({ data }) => {
        commit("SNIPPET_INFO", data);
        return data;
      })
    },

    SNIPPET_DEL({ commit }, payload) {
      return api.post("snippet/delete", payload)
    },

    SNIPPET_SAVE({ commit }, payload) {
      return api.post("snippet/save", payload);
    },


  },
};
