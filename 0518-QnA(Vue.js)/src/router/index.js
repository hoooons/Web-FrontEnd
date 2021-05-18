import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Insert from "../views/Insert.vue";
import Detail from "../views/Detail.vue";
import Update from "../views/Update.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/mvInsert",
    name: "insert",
    component: Insert,
  },
  {
    path: "/mvDetail/:id",
    name: "mvDetail",
    component: Detail,
  },
  {
    path: "/update",
    name: "update",
    component: Update,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
