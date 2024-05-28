<template>
<Coverage />
<Tracking />
<Technology />
<Aboutus />
<Contactus />
</template>



<script>
import Aboutus from './../components/Aboutus.vue';
import Coverage from './../components/Coverage.vue';
import Tracking from './../components/Tracking.vue';
import Technology from './../components/Technology.vue';
import Contactus from './../components/Contactus.vue';



export default {
  name: "Home",
  components: {
    Coverage,
    Tracking,
    Technology,
    Aboutus,
    Contactus

  },
}
</script>

<style>

</style>
