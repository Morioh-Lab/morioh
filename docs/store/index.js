import Vue from "vue";
import Vuex from "vuex";

import Member from './modules/member';
import Post from './modules/post';
import Topic from './modules/topic';
import Like from './modules/like';
import Claim from './modules/claim';
import Subscribe from './modules/subscribe';
import Comment from './modules/comment';
import Adv from './modules/adv';
import Course from './modules/course';
import List from './modules/list';
import Notication from './modules/notication';
import Follow from './modules/follow';
import Meta from './modules/meta';
import Upload from './modules/upload';
import Msg from './modules/msg';


Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    member: Member,
    post: Post,
    topic: Topic,
    like: Like,
    claim: Claim,
    subscribe: Subscribe,
    comment: Comment,
    adv: Adv,
    course: Course,
    list: List,
    notication: Notication,
    follow: Follow,
    meta: Meta,
    upload: Upload,
    msg: Msg
    // snippet: Snippet

    // posts: ()=> import('./modules/post'),

    // locale: ()=> import('./modules/locale')
  }
});