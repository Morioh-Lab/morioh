import api from '../../api';
import store from 'store';

export default {
    state: {

        data: {
            docs: [],
            offset: 0
        },
        history: [],
        doc: null,
    },

    mutations: {

        MSG_PM(state, msg) {
            state.doc = msg;
        },

        MSG_FETCH(state, data) {
            state.data.docs = data.docs.reverse().concat(state.data.docs);
            state.data.offset += data.limit;
        },

        // MSG_HISTORY(state, data) {
        //     state.history.docs = state.history.docs.concat(data.docs);
        //     state.history.offset += data.limit;
        // },
        MSG_HISTORY(state, data) {
            state.history = data;
        },

        MSG_NEW(state, data) {
            state.data.docs.push(data);

        },
        MSG_CLEAN(state, data) {
            state.data = { offset: 0, docs: [] };
        },
        // MSG_HISTORY_CLEAN(state, data) {
        //     state.history = { offset: 0, docs: [] };
        // },

    },


    actions: {
        MSG_LOAD({ commit, dispatch }) {
            var msg = store.get('msg') || { to: null, list: [] };
            commit('MSG_PM', msg);

            if (msg.to) {
                dispatch('MSG_FETCH', { offset: 0, tid: msg.to._id });
            }
        },
        MSG_PM({ commit, dispatch }, to) {
            var msg = store.get('msg') || { to: null, list: [] };
            for (let i = 0; i < msg.list.length; i++) {
                const doc = msg.list[i];
                if (doc._id === to._id) {
                    msg.list.splice(i, 1);
                    break;
                }
            }
            if (msg.to && msg.to._id != to._id)
                msg.list.push(msg.to);
            msg.to = to;

            commit('MSG_PM', msg);
            store.set('msg', msg);
            commit('MSG_CLEAN');
            dispatch('MSG_FETCH', { offset: 0, tid: msg.to._id });
        },
        MSG_MINI({ commit }, to) {
            var msg = store.get('msg');
            msg.list.push(msg.to);
            msg.to = null;
            commit('MSG_PM', msg);
            store.set('msg', msg);
        },

        MSG_HIDE({ commit }, to) {
            var msg = store.get('msg');
            for (let i = 0; i < msg.list.length; i++) {
                const doc = msg.list[i];
                if (doc._id === to._id) {
                    msg.list.splice(i, 1);
                    break;
                }
            }
            msg.to = null;
            commit('MSG_PM', msg);
            store.set('msg', msg);
        },

        MSG_FETCH({ commit }, payload) {
            return api.post('/msg/fetch', payload).then(({ data }) => {
                commit('MSG_FETCH', data);
                return data;
            });
        },
        MSG_HISTORY({ commit }, payload) {
            return api.post('/msg/history', payload).then(({ data }) => {
                commit('MSG_HISTORY', data);
                return data;
            });
        },

        MSG_CHECK({ commit }, payload) {
            return api.post('/msg/check', payload).then(({ data }) => {
                return data;
            });
        },

        MSG_SAVE({ commit }, payload) {
            return api.post('/msg/save', payload).then(({ data }) => {
                commit('MSG_NEW', data);
                return data;
            });
        },
        MSG_KILL({ commit }, payload) {
            return api.post('/msg/kill', payload).then(({ data }) => {                
                return data;
            });
        },

        MSG_DEL({ commit }, payload) {
            return api.post('/msg/delete', payload).then(({ data }) => {                
                return data;
            });
        },

        MSG_READ({ commit }, payload) {
            return api.post('/msg/read', payload).then(({ data }) => {
                return data;
            });
        },



    }
}

