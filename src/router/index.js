import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import New from '../views/new.vue';
import Geleizujian from '../views/geleizujian.vue';
import Yidongzujian from '../views/yidongzujian.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new",
    name: "New",
    component: New,
  },
  {
    path: "/geleizujian",
    name: "Geleizujian",
    component: Geleizujian,
  },
  {
    path: "/yidongzujian",
    name: "Yidongzujian",
    component: Yidongzujian,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;