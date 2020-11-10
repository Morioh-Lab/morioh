import VueRouter from "vue-router";

const router = VueRouter.createRouter({
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes: [

    // { path: '/login', component: () => import("../views/member/login.vue"), meta: { nav: -1 } },
    // { path: '/register', component: () => import("../views/member/register.vue"), meta: { nav: -1 } },
    // { path: '/2fa', component: () => import("../views/member/2fa.vue") },
    // { path: '/forgetpwd', component: () => import("../views/member/forget-pwd.vue"), meta: { nav: -1 } },

    // { path: "/topic/:id", name: "topic-info", component: () => import("../views/topic/info.vue") },
    // { path: "/topics", component: () => import("../views/topic/index.vue") },
    // { path: "/questions", component: () => import("../views/ask/index.vue") },

    // { path: '/explore/gifts', redirect: '/courses' },
    // { path: "/courses", component: () => import("../views/course/index.vue") },
    // { path: "/tutorials", component: () => import("../views/list/index.vue") },
    // { path: "/search", name: 'search', component: () => import("../views/post/search.vue") },
    // { path: "/videos", component: () => import("../views/video/index.vue") },

    // { path: "/list/:id", name: 'list-info', component: () => import("../views/list/info.vue") },

    // { path: "/p/:id/:slg?", name: "post-info", component: () => import("../views/post/info.vue") },
    // { path: "/n/:id", name: 'noti-info', component: () => import("../views/notication/info.vue") },
    // { path: "/explore/:id?", component: () => import("../views/explore.vue"), props: true },
    { path: '/submit', name: "new", component: () => import("../views/submit.vue"), meta: { auth: true } },
    { path: "/avatar", component: () => import("../views/ui/avatar.vue") },    
    { path: "/", alias: '/dashboard', component: () => import("../views/index.vue") },    
    // { path: "*", component: () => import("../views/404.vue") },
  ]
});


export default router;

