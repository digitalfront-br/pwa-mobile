import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/pages/Home.vue")
  },
  {
    path: "/institucional",
    name: "institucional",
    component: () => import("@/views/pages/Institucional.vue")
  },
  {
    path: "/cursos",
    name: "cursos",
    component: () => import("@/views/pages/Cursos.vue")
  },
  {
    path: "/centro-pesquisa",
    name: "centro-pesquisa",
    component: () => import("@/views/pages/CentroPesquisa.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/pages/Blog.vue"),
  },
  {
    path: "/blog/:slug",
    name: "blog-detail",
    component: () => import("@/views/pages/BlogDetail.vue")
  },
  {
    path: "/contato",
    name: "contato",
    component: () => import("@/views/pages/Contato.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
