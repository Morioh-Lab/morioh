import api from "./../../api";


export default {
  state: {
   
    info: null    
  },
  mutations: {    


    CLAIM_INFO(state, data) {
      state.info = data;
    },  


  },


  actions: {

    // CLAIM_FETCH({ commit }, payload) {
    //   return api.post("report/fetch", payload).then(({ data }) => {
    //     commit("CLAIM_FETCH", data);
    //     return data;
    //   });
    // },    

    CLAIM_NEW({ commit }, payload) {
      return api.post("claim/new", payload);
    },


  },
};
