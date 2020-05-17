import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/PageHome.vue";
import About from "./pages/PageAbout.vue";
import Animation from "./pages/PageAnimation.vue";
import Calculator from "./pages/PageCalculator.vue";
import LedgerA from "./pages/PageLedgerA.vue";
import HabitTracker from "./pages/PageHabitTracker.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
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
      path: "/crazy-calculator",
      name: "calculator",
      component: Calculator,
    },
    {
      path: "/ledger-A",
      name: "ledger-a",
      component: LedgerA,
    },
    {
      path: "/habit-tracker",
      name: "habit-tracker",
      component: HabitTracker,
    },
  ],
});
