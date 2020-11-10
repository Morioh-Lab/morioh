
import Vue from "vue";
import App from "./app.vue";
// import store from "./store";
import router from "./router";


// import Button from '../src/button';
import MoriohUI from "../src";




// Vue.config.devtools = process.env.NODE_ENV !== 'production';

// const app = Vue.createApp({
//   el: '#app',
//   // router,
//   // store,
//   // nprogress: new NProgress(),
//   // i18n,  
//   render: h => h(App)
// });


const app = Vue.createApp(App);
app.use(router);
app.use(MoriohUI);
app.mount("#app");

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router };