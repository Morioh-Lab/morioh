import api from "./../../api";

export default {
    actions: {

        META_PARSER({ commit }, payload) {
            return api.post("meta/parser", payload).then(({ data }) => {
                return data;
            });
        },
    }


};