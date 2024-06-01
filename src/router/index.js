// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ContactUs from '@/pages/ContactUs.vue';
import Gallery from '@/pages/Gallery.vue';
import Aboutuspage from '@/components/Aboutuspage.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/contact-us', component: ContactUs },
  { path: '/aboutus', component: Aboutuspage },
  { path: '/gallery', component: Gallery },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
