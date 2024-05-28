<template>
  <div id="app">
  <Home />
    <Coverage />
    <Technology />
    <Aboutus />
    <Tracking />
    <Contactus />
    <Footer >
    </Footer>
    <Aboutuspage/>
    <Contactuspage/>
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

export default {
  name: 'App',
  components: {
    Home,
    Contactuspage
  },
}
</script>

<style scoped>

</style>
