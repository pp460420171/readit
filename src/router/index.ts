import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/Main.vue"),
      children: [
        {
          path: "measuring-tool-collect",
          name: "measuring-tool-collect",
          component: () => import("@/views/measuring-tool-collect/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: { isPublic: true },
    },
  ],
});

export default router;
