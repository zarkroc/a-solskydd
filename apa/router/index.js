import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "@/components/Products";
import Inomhus from "@/components/inomhus/InomhusProducts";
import Persienner from "@/components/inomhus/Persienner";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/products",
    name: "products",
    component: Products
  },
  {
    path: "/products/inomhus",
    name: "inomhus",
    component: Inomhus
  },
  {
    path: "/products/inomhus/persienner",
    name: "persienner",
    component: Persienner
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
