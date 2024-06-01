<template>
  <div class="wrapper">
    <div class="content">
      <h5>AFG Shipping</h5>
     <h7 class="group">THE AMERICAN FREIGHT GROUP</h7>
      <h1 class="big">Big or Small</h1>
      <h1>We Ship It All</h1>
      <p style="font-size: small;">We provide you with full package services, from bidding on your favorite
      cars in the US auctions and delivering to your desired locations.</p>
      <div>
        <h5>LET’S TALK</h5>
      </div>
    </div>
    <video height="800" width="100%" loop autoplay muted preload="auto">
      <source src="../assets/Video/AfgShipping_video.mp4" type="video/mp4">
      <!-- <source src="../assets/Video/AfgShipping_video.webm" type="video/webm"> -->
      Your browser does not support the video tag.
    </video>
  </div>

  <Coverage />
   <Tracking />
  <Technology />
  <!-- <Aboutus />
  <Contactus /> -->
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
