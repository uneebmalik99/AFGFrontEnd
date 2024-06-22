// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ContactUs from '@/pages/ContactUs.vue';
import Gallery from '@/pages/Gallery.vue';
import Aboutuspage from '@/components/Aboutuspage.vue';
import About from '@/pages/About.vue';
import Tracking from '@/pages/Tracking.vue';
import Services from '@/pages/Services.vue';
import Announcements from '@/pages/Announcements.vue';
import Customersupport from '@/components/Customersupport.vue';
import Towingservices from '@/components/Towingservices.vue';
import Loadingservices from '@/components/Loadingservices.vue';
import Shippingservices from '@/components/Shippingservices.vue';
import Bookingservices from '@/components/Bookingservices.vue';
import Halfcutservices from '@/components/Halfcutservices.vue';
import Warehousingservices from '@/components/Warehousingservices.vue';
import Clearinserviceuae from '@/components/Clearinserviceuae.vue';
import Blog from '@/pages/Announcements/Blog.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/aboutus', component: Aboutuspage },
  { path: '/gallery', component: Gallery },
  { path: '/contact-us', component: ContactUs },
  { path: '/about', component: About },
  { path: '/tracking', component: Tracking },
  { path: '/services', component: Services },
  { path: '/customersupport', component:Customersupport  },
  {path: '/announcements', component: Announcements },
  { path: '/aboutus', component: Aboutuspage },
  { path: '/gallery', component: Gallery },

  { path: '/towingservices', component: Towingservices },
  { path: '/loadingservices', component: Loadingservices },
  { path: '/shippingservices', component: Shippingservices },
  { path: '/bookingservices', component: Bookingservices },
  { path: '/halfcutservices', component: Halfcutservices },
  { path: '/warehousingservices', component: Warehousingservices },
  { path: '/clearinserviceuae', component: Clearinserviceuae },
  { path: '/blog', component: Blog }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
