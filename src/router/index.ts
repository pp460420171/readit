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
        {
          path: "set-ftp-client",
          name: "set-ftp-client",
          component: () => import("@/views/set-ftp-client/index.vue"),
        },
        {
          path: "upload-file",
          name: "upload-file",
          component: () => import("@/views/upload-file/index.vue"),
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
