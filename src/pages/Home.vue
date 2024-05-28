<template>
<Navbar />
<Coverage />
<Tracking />
<Technology />
<Aboutus />
<Contactus />
<Footer > </Footer>
</template>



<script>
import Aboutus from './../components/Aboutus.vue'
import Navbar from './../components/Navbar.vue'
import Coverage from './../components/Coverage.vue'
import Tracking from './../components/Tracking.vue'
import Technology from './../components/Technology.vue'
import Contactus from './../components/Contactus.vue'
import Footer from './../components/Footer.vue'



export default {
  name: "Home",
  components: {
    Navbar,
    Coverage,
    Tracking,
    Technology,
    Aboutus,
    Contactus,
    Footer



  },
}
</script>
