import api from "./../../api";

export default {
    actions: {

        UPLOAD({ commit }, payload) {
            return api.post("upload", payload).then(({ data }) => {
                return data;
            });
        },
    }


};