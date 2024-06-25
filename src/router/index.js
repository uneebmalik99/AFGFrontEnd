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
  { path: '/', component: Home, meta: { title: 'Home | AFG Global Shipping Inc.' } },
  { path: '/aboutus', component: Aboutuspage, meta: { title: 'About Us | AFG Global Shipping Inc.' } },
  { path: '/gallery', component: Gallery, meta: { title: 'Gallery | AFG Global Shipping Inc.' } },
  { path: '/contact-us', component: ContactUs, meta: { title: 'Contact Us | AFG Global Shipping Inc.' } },
  { path: '/about', component: About, meta: { title: 'About | AFG Global Shipping Inc.' } },
  { path: '/tracking', component: Tracking, meta: { title: 'Tracking | AFG Global Shipping Inc.' } },
  { path: '/services', component: Services, meta: { title: 'Services | AFG Global Shipping Inc.' } },
  { path: '/customersupport', component: Customersupport, meta: { title: 'Customer Support | AFG Global Shipping Inc.' } },
  { path: '/announcements', component: Announcements, meta: { title: 'Announcements | AFG Global Shipping Inc.' } },
  { path: '/towingservices', component: Towingservices, meta: { title: 'Towing Services | AFG Global Shipping Inc.' } },
  { path: '/loadingservices', component: Loadingservices, meta: { title: 'Loading Services | AFG Global Shipping Inc.' } },
  { path: '/shippingservices', component: Shippingservices, meta: { title: 'Shipping Services | AFG Global Shipping Inc.' } },
  { path: '/bookingservices', component: Bookingservices, meta: { title: 'Booking Services | AFG Global Shipping Inc.' } },
  { path: '/halfcutservices', component: Halfcutservices, meta: { title: 'Half-Cut Services | AFG Global Shipping Inc.' } },
  { path: '/warehousingservices', component: Warehousingservices, meta: { title: 'Warehousing Services | AFG Global Shipping Inc.' } },
  { path: '/clearinserviceuae', component: Clearinserviceuae, meta: { title: 'Clearance Services in UAE | AFG Global Shipping Inc.' } },
  { path: '/blog', component: Blog, meta: { title: 'Blog | AFG Global Shipping Inc.' } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'AFG Global Shipping Inc.';
  next();
});

export default router;
