import api from "./../../api";


export default {
  state: {
    data: {
      offset: 0,
      docs: []
    },
    info: null,
    doc: null,
    asks: [],
    recommended: []
  },
  mutations: {
    POST_FETCH(state, data) {
      state.data.docs = state.data.docs.concat(data.docs);
      state.data.offset += data.limit;

    },

    POST_INFO(state, data) {
      state.info = data;
    },
    POST_NEW(state, data) {
      state.doc = data;
    },


    POST_SUGGEST(state, data) {

      if (data.act == 'ask') {
        state.asks = data.data;
      } else {
        state.recommended = data.data;
      }

    },

    POST_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    }


  },


  actions: {

    POST_FETCH({ commit }, payload) {
      return api.post("post/fetch", payload).then(({ data }) => {
        commit("POST_FETCH", data);
        return data;
      });
    },

    POST_INFO({ commit }, payload) {
      return api.post("post/info", payload).then(({ data }) => {
        commit("POST_INFO", data);
        return data;
      })
    },

    POST_SAVE({ commit }, payload) {
      return api.post("post/save", payload);
    },
    POST_DEL({ commit }, payload) {
      return api.post("post/hide", payload);
    },
    POST_FORCE_DEL({ commit }, payload) {
      return api.post("/post/delete", payload);
    },

    POST_SUGGEST({ commit }, payload) {
      return api.post("post/suggest", payload).then(({ data }) => {
        commit("POST_SUGGEST", { act: payload.act, data: data });
        return data;
      });
    },


    POST_SEARCH({ commit }, payload) {
      return api.post("post/search", payload).then(({ data }) => {
        commit("POST_FETCH", { docs: data });
        return data;
      })
    },

    // POST_SEARCH({ commit }, payload) {
    //   return api.post("post/search", payload).then(({ data }) => {
    //     return data;
    //   })
    // },




    ACK({ commit }, payload) {
      return api.post("ack", payload);
    },

    // INVITE({ commit }, payload) {
    //   return api.post("invite", payload);
    // },


    // HTML_LOAD({ commit }, payload) {
    //   return api.post("html", payload);
    // },





  },
};
