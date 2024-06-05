<template>
  <div class="wrapper">
    <div class="content"  style="background-color: rgba(0, 0, 0, 0.9); border-radius: 10px;" >
      <h5>AFG Shipping</h5>
     <h7 class="group">THE AMERICAN FREIGHT GROUP</h7>
      <h1 class="big">Big or Small</h1>
      <h1>We Ship It All</h1>
      <p style="font-size: small;">We provide you with full package services, from bidding on your favorite <br />
      cars in the US auctions and delivering to your desired locations.</p>
      <div>
        <div style="display: flex; flex-direction: row;">
          <button class="let_btn"><img src="../assets/Arrow_right.webp"/> </button>
          <h5>LET’S TALK</h5>
        </div>
      </div>
    </div>
    <video height="800" width="100%" loop autoplay muted preload="auto">
      <source src="../assets/Video/AfgShipping_video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>



  <!-- <Technology /> -->



  <Grid />
  <Partners/>
  <Coverage/>
  <VTracking />
  <Faq />
  <Aboutus />
  <Contactus/>

</template>

<script>
import Aboutus from './../components/Aboutus.vue';
import Coverage from './../components/Coverage.vue';
import VTracking from '../components/VTracking.vue';
import Technology from './../components/Technology.vue';
import Contactus from './../components/Contactus.vue';
import Services from './../components/Services.vue';
import Faq from './../components/Faq.vue';
import Partners from './../components/Partners.vue';
import Grid from './../components/Gridblock.vue';



export default {
  name: "Home",
  components: {
    Grid,
    Partners,
    Coverage,
    VTracking,
    Technology,
    Aboutus,
    Faq,
    Services,
    Contactus,
  },
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
}

.group{
  color: #ED254E;
  font-weight: 500;
}

.let_btn{
  background: #ff4c60;
  border-radius: 200px;
  height:20px;
  width:20px;
}
.big{
  color:#011936;
  font-size: 33;
  font-weight: 600;
}

.we{
  color:white;
  font-size: 33;
  font-weight: bolder;
}

.content {
  position: absolute;
  top: 50%;
  left: 8%; /* Margin from the left */
  transform: translateY(-50%);
  color: white; /* Ensure text color is white for better readability */
  padding: 20px;
  max-width: 600px; /* Optional: Limit the width of the content */
}

video {
  width: 100%;
  height: 100vh; /* Full viewport height */
  object-fit: cover; /* Ensures the video covers the entire area */
}
</style>
