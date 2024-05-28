<template>
  <div class="container-fluid">
    <div class="row align-items-center info-section">
      <div class="col-md-6 info-text">
        <div class="app-header">
          <h2 class="app-title">About</h2>
          <h1 class="app-subtitle">About US</h1>
        </div>
        <p>
          AFG Global Shipping is a professionally managed shipping company running
          with an objective to offer timely, efficient and cost-effective shipping
          services. Thanks to our well experienced work force, we have portrayed
          exceptional customer service consistently. It's a privilege to have the
          premium clients who trusted us since the inception. While we focus on
          increasing our clientele, we never compromise on delivering high quality
          service to our existing clients, who built the foundation for us in the
          local and international market.
        </p>
        <button class="btn btn-primary view-more-button" @click="viewMore">View More <span>→</span></button>
      </div>
      <div class="col-md-6 info-images">
        <img src="../assets/Ship.webp" alt="Ship" class="image-medium img-fluid" />
        <img src="../assets/car.webp" alt="cars" class="image-large img-fluid" />
        <img src="../assets/Parking.webp" alt="Parking" class="image-small img-fluid" />
      </div>
    </div>
  </div>
</template>





<script>
export default {
  name: "Aboutus",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    viewMore() {
      // Your view more logic here
    },
  },
};
</script>

<style scoped>
.info-section {
  background: #f4fffd;
  color: #333;
  padding: 20px;
  border-radius: 15px;
}

.app-header {
  margin-top: 10%;
}

.app-title {
  font-size: 2em;
  color: #ff4c60;
  font-family: Montserrat;
  font-weight: 700;
}

.app-subtitle {
  font-size: 1.5em;
  color: #002d72;
  font-family: Montserrat;
  font-weight: 700;
}

.info-text {
  padding-right: 20px;
}

.info-text p {
  font-family: Montserrat;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  max-height: 216px;
  overflow: hidden;
}

.view-more-button {
  display: inline-flex;
  align-items: center;
  background-color: #002d72;
  color: white;
  border: none;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  animation-timing-function: cubic-bezier(0.59, 0, 0, 1.01);
  animation-duration: 600ms;
  width: 159px;
  height: 60px;
  border-radius: 40px;
  opacity: 0px;


}

.view-more-button span {
  margin-left: 10px;
  font-size: 1.5em;
  background: #ff4c60;
  border-radius: 50px;
  height: 80%;
  width: 40%;
}

.info-images {
  position: relative;
  height: 500px;
  background: url('../assets/cubicshape.webp') no-repeat center center;
  background-size: contain;
}

.info-images img {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
}

.image-large {
  width: 100%;
  max-width: 300px;
  height: auto;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.image-medium {
  width: 100%;
  max-width: 200px;
  height: auto;
  top: 50px;
  left: 25%;
  transform: translateX(-50%);
  z-index: 2;
}

.image-small {
  width: 100%;
  max-width: 200px;
  height: auto;
  top: 270px;
  left: 66%;
  transform: translateX(-50%);
  z-index: 2;
}
</style>
