<template>
  <div id="app">
    <Navbar />
    <router-view />
    <div class="whatsapp-button" @click="openWhatsApp">
      <img src="./../src/assets/whatsapp.jpg" alt="WhatsApp" />
    </div>
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
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.whatsapp-button img {
  width: 30px;
  height: 30px;
}
</style>