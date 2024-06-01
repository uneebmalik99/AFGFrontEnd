// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ContactUs from '@/pages/ContactUs.vue';
import About from '@/pages/About.vue';
import Tracking from '@/pages/Tracking.vue';
import Services from '@/pages/Services.vue';
import Announcements from '@/pages/Announcements.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/contact-us', component: ContactUs },
  { path: '/about', component: About },
  { path: '/tracking', component: Tracking },
  { path: '/services', component: Services },
  {path: '/announcements', component: Announcements },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
