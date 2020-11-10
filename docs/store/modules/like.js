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
    
    LIKE_FETCH(state, data) {
      data.docs = state.data.docs.concat(data.docs);
      data.offset += data.limit;
      state.data = data;

    },


    LIKE_INFO(state, data) {
      state.info = data;
    },   

    LIKE_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    }


  },


  actions: {

    LIKE_FETCH({ commit }, payload) {
      return api.post("like/fetch", payload).then(({ data }) => {
        commit("LIKE_FETCH", data);
        return data;
      });
    },    

    LIKE_NEW({ commit }, payload) {
      return api.post("like/new", payload);
    },


  },
};
