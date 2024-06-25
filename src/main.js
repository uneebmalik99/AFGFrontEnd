// // src/main.js
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';

// createApp(App).use(router).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Vue3Lottie from 'vue3-lottie'
const app = createApp(App);

// Register Vue3Lottie as a global component
app.component('Vue3Lottie', Vue3Lottie);

app.use(router).mount('#app');
