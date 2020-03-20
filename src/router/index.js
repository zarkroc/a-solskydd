import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "@/components/Products";
import Inomhus from "@/components/inomhus/InomhusProducts";
import Utomhus from "@/components/utomhus/UtomhusProducts";
import Gallery from "@/components/Gallery";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/products/inomhus",
    name: "inomhus",
    component: Inomhus,
  },
  {
    path: "/products/utomhus",
    name: "utomhus",
    component: Utomhus,
  },
  {
    path: "/referenser",
    name: "gallery",
    component: Gallery,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
