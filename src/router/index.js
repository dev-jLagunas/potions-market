import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const AboutView = () => import("@/views/AboutView.vue");
const FaqsView = () => import("@/views/FaqsView.vue");
const PotionsView = () => import("@/views/PotionsView.vue");
const StaffView = () => import("@/views/StaffView.vue");
const NotFoundView = () => import("@/views/NotFoundView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/faqs",
      name: "faqs",
      component: FaqsView,
    },
    {
      path: "/potions",
      name: "potions",
      component: PotionsView,
    },
    {
      path: "/staff",
      name: "staff",
      component: StaffView,
    },
    ,
    {
      path: "/:pathMatch(.*)",
      component: NotFoundView,
    },
  ],
});

export default router;
