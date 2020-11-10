import { app } from "../../app";
import api from "../../api"
import { SET_LOCALE } from "../const";

export default {
    state: {
        locale: 'en'
    },
    mutations: {
        [SET_LOCALE](state, payload) {
            state.locale = payload;
            app.$i18n.locale = payload
        }
    },


    actions: {

        [SET_LOCALE]({ commit }, payload) {
            if (payload in app.$i18n.messages) {
                commit(SET_LANG, payload);
            } else {
                api.get(`/www/i18n/${payload}.json`)
                    .then((res) => {
                        app.$i18n.setLocaleMessage(payload, res.data)
                        commit(SET_LANG, payload);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }


    }
};
