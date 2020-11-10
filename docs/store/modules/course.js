import api from "./../../api";


export default {
  state: {
    data: {
      offset: 0,
      limit: 30,
      docs: []
    },
    info: null,
    suggest: []

  },
  mutations: {

    COURSE_FETCH(state, data) {
      state.data.docs = state.data.docs.concat(data.docs);
      state.data.offset += data.limit;

    },


    COURSE_INFO(state, data) {
      state.info = data;
    },

    COURSE_SUGGEST(state, data) {
      state.suggest = data;
    },

    COURSE_CLEAN(state) {
      state.data = { offset: 0, docs: [] };
    }


  },


  actions: {

    COURSE_FETCH({ commit }, payload) {
      return api.post("course/fetch", payload).then(({ data }) => {
        commit("COURSE_FETCH", data);
        return data;
      });
    },

    COURSE_INFO({ commit }, payload) {
      return api.post("course/info", payload).then(({ data }) => {
        commit("COURSE_INFO", data);
        return data;
      })
    },

    COURSE_SUGGEST({ commit }, payload) {
      return api.post("course/suggest", payload).then(({ data }) => {
        commit("COURSE_SUGGEST", data);
        return data;
      });
    },


  },
};
