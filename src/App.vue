<template>
  <div id="app">
    <Navbar />
    <router-view />
    <!-- <div class="whatsapp-div" @click="openWhatsApp"> -->
    <font-awesome-icon :icon="['fab', 'whatsapp']" :size="'2x'" class="whatsapp-button" @click="openWhatsApp" />
    <!-- </div> -->
    <Footer>
    </Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';



export default {
  name: 'App',
  methods: {
    openWhatsApp() {
      const phoneNumber = "1234567890"; // Replace with your phone number
      const message = "Hello, I'm interested in your services."; // Replace with your predefined message
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    },
  },
  components: {
    Navbar,
    Footer,

  },
}
</script>

<style scoped>

.whatsapp-button {
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #3c9a3e;
  cursor: pointer;
  z-index: 1;
}

.whatsapp-button img {
  width: 30px;
  height: 30px;
}
</style>