// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ContactUS from '@/pages/ContactUS.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/contact-us', component: ContactUS },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
