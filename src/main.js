import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

/* import store component */
import store from './store/index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import the specific icon

// Add the icon to the library
library.add(faWhatsapp);

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Vue3Lottie from 'vue3-lottie'
const app = createApp(App);

// Register Vue3Lottie as a global component
app.component('Vue3Lottie', Vue3Lottie);

// Register FontAwesomeIcon as a global component
app.component('font-awesome-icon', FontAwesomeIcon)


app.use(store);

app.use(router).mount('#app');
