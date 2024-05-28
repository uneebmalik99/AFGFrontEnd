<template>
  <div id="app">
    <Navbar />
  <Home />
    <Footer >
    </Footer>
  </div>
</template>

<script>
import Coverage from './components/Coverage.vue';
import Technology from './components/Technology.vue';
import Aboutus from './components/Aboutus.vue';
import Tracking from './components/Tracking.vue';
import Contactus from './components/Contactus.vue'
import Footer from './components/Footer.vue';
import Aboutuspage from './components/Aboutuspage.vue';
import Home from './pages/Home.vue'
import Contactuspage from './components/Contactuspage.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Contactuspage,
    Footer
  },
}
</script>

<style scoped>

</style>
