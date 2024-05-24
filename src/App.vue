<template>
  <div id="app">
    <Coverage />
    <Technology />
    <Aboutus />
    <Footer >
  
    </Footer>
  </div>
</template>

<script>
import Coverage from './components/Coverage.vue';
import Technology from './components/Technology.vue';
import Aboutus from './components/Aboutus.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Coverage,
    Technology,
    Aboutus,
    Footer
  }
}
</script>

<style scoped>

</style>
