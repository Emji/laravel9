import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/home.vue"),


    },
    {
      path: "/galery/:id",
      name: "galery",
      component: () => import("../components/galery.vue"),
      props: true,
    },

    {

      path: "/contact",
      name: "contact",
      component: () => import("../components/contact.vue"),
    },

  ],
});

export default router;
