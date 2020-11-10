import api from "./../../api";


export default {
  state: {
    data: {
      offset: 0,
      limit: 30,
      docs: []
    },
    info: null,   
  },
  mutations: {
    COMMENT_FETCH(state, data) {      
      state.data.docs = state.data.docs.concat(data.docs);
      state.data.offset += data.limit;      

    },


    COMMENT_INFO(state, data) {
      state.info = data;
    },

   
    COMMENT_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    }

  },


  actions: {

    COMMENT_FETCH({ commit }, payload) {
      return api.post("comment/fetch", payload).then(({ data }) => {
        commit("COMMENT_FETCH", data);
        return data;
      });
    },

    COMMENT_INFO({ commit }, payload) {
      return api.post("comment/info", payload).then(({ data }) => {
        commit("COMMENT_INFO", data);
        return data;
      })
    },

    COMMENT_DEL({ commit }, payload) {
      return api.post("comment/delete", payload)
    },

    COMMENT_SAVE({ commit }, payload) {
      return api.post("comment/save", payload);
    },


  },
};
