// 0.Import the createWebHashHistory and createRouter from vue-router
import { createWebHashHistory, createRouter } from "vue-router";

// 1. Define route components.
import HomeView from "./views/HomeView.vue";
import BlogView from "./views/BlogView.vue";
import SingleBlogPostView from "./views/SingleBlogPostView.vue";
import SingleCategoryView from "./views/SingleCategoryView.vue";
import SingleTagView from "./views/SingleTagView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import NotFoundView from './views/NotFoundView.vue';

// 2. Define some routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:slug',
    name: 'post',
    component: SingleBlogPostView
  },

  {
    path: '/categories/:slug',
    name: 'category',
    component: SingleCategoryView
  },

  {
    path: '/tags/:slug',
    name: 'tag',
    component: SingleTagView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  },

];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes
});

// export the vue router instance
export { router }