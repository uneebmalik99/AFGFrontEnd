// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ContactUs from '@/pages/ContactUs.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/contact-us', component: ContactUs },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
