import api from "./../../api";


export default {
  state: {
    data: {
      offset: 0,      
      docs: []
    },
    info: null    
  },
  mutations: {
    NOTICATION_FETCH(state, data) {     
      state.data.docs = state.data.docs.concat(data.docs);
      state.data.offset += data.limit;
    },


    NOTICATION_INFO(state, data) {
      state.info = data;
    },

   
    NOTICATION_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    }

  },


  actions: {

    NOTICATION_FETCH({ commit }, payload) {
      return api.post("notication/fetch", payload).then(({ data }) => {
        commit("NOTICATION_FETCH", data);
        return data;
      });
    },

    NOTICATION_INFO({ commit }, payload) {
      return api.post("notication/info", payload).then(({ data }) => {
        commit("NOTICATION_INFO", data);
        return data;
      })
    },

    NOTICATION_DEL({ commit }, payload) {
      return api.post("notication/delete", payload)
    },

    NOTICATION_SAVE({ commit }, payload) {
      return api.post("notication/save", payload);
    },

    NOTICATION_CHECK({ commit }, payload) {
      return api.post("notication/check", payload);
    },


  },
};
