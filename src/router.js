import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/PageHome.vue";
import About from "./pages/PageAbout.vue";
import Animation from "./pages/PageAnimation.vue";
import Calculator from './pages/PageCalculator.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/animations",
      name: "animations",
      component: Animation,
    },
    {
      path: "/annoying-calculator",
      name: "calculator",
      component: Calculator,
    },
  ],
});
