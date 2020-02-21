import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "@/components/Products";
import Inomhus from "@/components/inomhus/InomhusProducts";
import Utomhus from "@/components/utomhus/UtomhusProducts";

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
    path: "/products/utomhus",
    name: "utomhus",
    component: Utomhus
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
