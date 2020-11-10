import api from '../../api';
import store from 'store';

export default {
    state: {

        data: {},
        info: null,
        session: null,
        sessions: null
    },

    mutations: {

        MEMBER_SESSION(state, data) {
            state.session = data;
        },

        MEMBER_INFO(state, data) {
            state.info = data;
        },
        MEMBER_FETCH(state, data) {
            state.data = data;
        },

        MEMBER_SESSION_LIST(state, data) {
            state.sessions = data;
        },



    },


    actions: {
        MEMBER_SESSION({ commit }) {

            // return api.post('/member/session').then(({ data }) => {
            //     commit('MEMBER_SESSION', data);
            //     return data;
            // }).catch(error => {
            //     commit('MEMBER_SESSION', null);
            //     //console.error(error);
            //     return error;
            // });
            var session = store.get('session');
            if (!session.token) {
                store.remove('session');
            } else {
                commit('MEMBER_SESSION', session);
                commit('MEMBER_SESSION_LIST', store.get('accounts'));
            }

        },

        MEMBER_REFRESH({ commit }) {
            return api.post('/member/token/refresh').then(({ data }) => {
                store.set('session', data);
                return data;
            });

        },

        MEMBER_SWITCH({ commit }, data) {
            store.set('session', data);            
            commit('MEMBER_SESSION', data);
        },

        MEMBER_LOGIN({ commit }, payload) {
            return api.post('/login', payload).then(({ data }) => {
                if (data.doc) {
                    // commit('MEMBER_SESSION', data.doc);

                    var accounts = store.get('accounts') || [];
                    var f = accounts.some((s) => s._id == data.doc._id);
                    if (!f) {
                        accounts.push(data.doc);
                    }
                    store.set('session', data.doc);
                    store.set('accounts', accounts);
                }

                return data;
            });
        },

        MEMBER_REGISTER({ commit }, payload) {
            return api.post('/register', payload);
        },

        MEMBER_LOGOUT_ALL({ commit }) {
            store.remove('session');
            store.remove('accounts');
        },

        MEMBER_LOGOUT({ commit }) {
            var session = store.get('session');
            var accounts = store.get('accounts') || [];
            accounts = accounts.filter(s => s._id !== session._id);
            // console.log(accounts);
            if (accounts.length > 0) {
                store.set('accounts', accounts);
                store.set('session', accounts[0]);
            } else {
                store.remove('session');
                store.remove('accounts');
            }

        },
        MEMBER_INFO({ commit }, payload) {
            return api.post('member/info', payload).then(({ data }) => {
                commit('MEMBER_INFO', data);
                return data;
            });
        },
        MEMBER_SAVE({ commit }, payload) {
            return api.post('member/save', payload).then(({ data }) => {
                commit('MEMBER_INFO', data);
            });
        },

        MEMBER_CHANGEPWD({ commit }, payload) {
            return api.post('member/password', payload);
        },

        MEMBER_2FA_GENERATE({ commit }, payload) {
            return api.post('member/2fa/generate', payload);
        },
        MEMBER_2FA_SAVE({ commit }, payload) {
            return api.post('member/2fa/save', payload);
        },
        MEMBER_2FA_ENABLED({ commit }, payload) {
            return api.post('member/2fa/enabled', payload);
        },

        MEMBER_2FA_VERIFY({ commit }, payload) {
            return api.post('member/2fa/verify', payload).then(({ data }) => {
                if (data.doc) {
                    var accounts = store.get('accounts') || [];
                    var f = accounts.some((s) => s._id == data.doc._id);
                    if (!f) {
                        accounts.push(data.doc);
                    }
                    store.set('session', data.doc);
                    store.set('accounts', accounts);
                }
                return data;
            });
        },

        MEMBER_FORGETPWD({ commit }, payload) {
            return api.post('member/pwd/forget', payload);
        },
        MEMBER_STATS({ commit }, payload) {
            return api.post('member/stats', payload);
        },

        MEMBER_FETCH({ commit }, payload) {
            return api.post("member/fetch", payload).then(({ data }) => {
                commit('MEMBER_FETCH', data);
                return data;
            });
        },
        MEMBER_UPDATE({ commit }, payload) {
            return api.post('member/update', payload).then(({ data }) => {
                return data;
            });
        },
        MEMBER_BLOCK({ commit }, payload) {
            return api.post('member/block', payload).then(({ data }) => {
                return data;
            });
        },
        MEMBER_UNBLOCK({ commit }, payload) {
            return api.post('member/unlock', payload).then(({ data }) => {
                return data;
            });
        },


    }
}

