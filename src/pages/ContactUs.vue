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
import footer from './../components/Navbar.vue'

import Contactus from './../components/Contactus.vue'



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
