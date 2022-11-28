import HomePage from "./pages/HomePage.vue";
import ProfileEditingPage from "./pages/ProfileEditingPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import SearchPage from "./pages/SearchPage.vue";

import { createRouter, createWebHistory } from "vue-router";
import { getJwtToken } from "./apis/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/search_result",
    name: "search_result",
    component: SearchPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
  },
  {
    path: "/profile/edit",
    name: "profile_edit",
    component: ProfileEditingPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to) => {
  // hasn't properly logged in
  if (to.name !== "login" && !getJwtToken()) {
    return { name: "login" };
  }

  // already logged in
  if (to.name === "login" && getJwtToken()) {
    return { name: "home" };
  }
});

export { router };
