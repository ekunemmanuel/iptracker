import { createRouter, createWebHistory } from "vue-router";
import IPView from "../views/IPView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IPView,
      meta: {
        title: "IP Address Tracker",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/PageNotFound.vue"),
      meta: {
        title: "Not Found",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
