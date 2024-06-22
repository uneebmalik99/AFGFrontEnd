<template>
  <div class="gallery">
    <div class="image-container">
      <img src="../assets/Service_cover.webp" alt="Gallery Image" class="gallery-image"/>
      <div class="overlay"></div>
      
      <div class="breadcrumbs">
        <h1>Services</h1>
        <div class="breadcrumb_des">
          <p>HOME &nbsp > &nbsp </p>
          <p class="breadcrumb_name"> SERVICES</p>
        </div>
      </div>
    </div>

    <div class="py-3" style="background-color: #F4FFFD;">
      <div class="container py-5" style="display: flex; justify-content: center; align-items: center;">
        <div class="row col-md-12 col-sm-12 col-lg-12" style="display: flex; justify-content:center">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box_service">
              <img src="@/assets/S_1.webp">
              <h5 class="Service_Title">24/7 Customer Support</h5>
              <p class="Service_des">We provide 24/7 customer support to our client via email, calls, and website</p>
              <button class="view-more-button" @click="this.$router.push('/customersupport');">&nbsp; &nbsp; View More<span><img src="../assets/Arrow_right.webp"/></span></button>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box_service">
              <img src="@/assets/S_2.webp">
              <h5 class="Service_Title">Towing Services</h5>
              <p class="Service_des">We provide 24/7 customer support to our client via email, calls, and website</p>
              <button class="view-more-button" @click="this.$router.push('/towingservices');">&nbsp; View More<span class="view-more-buttonicon"><img src="../assets/Arrow_right.webp"/></span></button>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box_service">
              <img src="@/assets/S_3.webp">
              <h5 class="Service_Title">Loading Services</h5>
              <p class="Service_des">We provide 24/7 customer support to our client via email, calls, and website</p>
              <button class="view-more-button" @click="this.$router.push('/loadingservices');">&nbsp; View More<span class="view-more-buttonicon"><img src="../assets/Arrow_right.webp"/></span></button>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box_service">
              <img src="@/assets/S_4.webp">
              <h5 class="Service_Title">Shipping Services</h5>
              <p class="Service_des">We provide 24/7 customer support to our client via email, calls, and website</p>
              <button class="view-more-button" @click="this.$router.push('/shippingservices');">&nbsp; View More<span class="view-more-buttonicon"><img src="../assets/Arrow_right.webp"/></span></button>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box_service">
              <img src="@/assets/S_5.webp">
              <h5 class="Service_Title">Warehousing services</h5>
              <p class="Service_des">We provide 24/7 customer support to our client via email, calls, and website</p>
              <button class="view-more-button" @click="this.$router.push('/warehousingservices');">&nbsp; View More<span class="view-more-buttonicon"><img src="../assets/Arrow_right.webp"/></span></button>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box_service">
              <img src="@/assets/S_6.webp">
              <h5 class="Service_Title">Clearance Services in UAE</h5>
              <p class="Service_des">We provide 24/7 customer support to our client via email, calls, and website</p>
              <button class="view-more-button" @click="this.$router.push('/clearinserviceuae');">&nbsp; View More<span class="view-more-buttonicon"><img src="../assets/Arrow_right.webp"/></span></button>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box_service">
              <img src="@/assets/S_7.webp">
              <h5 class="Service_Title">Booking Services</h5>
              <p class="Service_des">We provide 24/7 customer support to our client via email, calls, and website</p>
              <button class="view-more-button" @click="this.$router.push('/bookingservices');">&nbsp; View More<span class="view-more-buttonicon"><img src="../assets/Arrow_right.webp"/></span></button>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="box_service">
              <img src="@/assets/S_8.webp">
              <h5 class="Service_Title">Half-cut Services</h5>
              <p class="Service_des">We provide 24/7 customer support to our client via email, calls, and website</p>
              <button class="view-more-button" @click="this.$router.push('/halfcutservices');">&nbsp; View More<span class="view-more-buttonicon"><img src="../assets/Arrow_right.webp"/></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  methods: {
    viewMore() {
      // Your view more logic here
    },
  },
};
</script>

<style>
.gallery {
  width: 100%;
}
.breadcrumb_des {
  display: flex;
  flex-direction: row;
}
.breadcrumb_name {
  color: #011936;
  font-weight: 700;
}
.image-container {
  position: relative;
  width: 100%;
  height: 400px; /* Adjust the height as needed */
  overflow: hidden;
}
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.view-more-button {
  display: inline-flex;
  padding-right: 3px;
  align-items: center;
  background-color: #011936;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  animation-timing-function: cubic-bezier(0.59, 0, 0, 1.01);
  animation-duration: 600ms;
  width: 130px;
  height: 45px;
  border-radius: 200px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}
.Service_Title {
  margin-top: 5px;
  padding-inline: 5px;
  color: #011936;
}
.Service_des {
  margin-top: 2px;
  padding-inline: 5px;
  color: #011936;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Black overlay with 0.6 opacity */
}
.box_service {
  background-color: white; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 
              0 6px 20px rgba(0, 0, 0, 0.19);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  display: flex;
  margin-top: 30px;
  border-radius: 10px;
  padding: 10px;
  justify-content: space-around;
  flex-direction: column;
}
.box_service:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 
              0 12px 40px rgba(0, 0, 0, 0.19);
  transform: scale(1.05); /* Increase the size by 5% */
}
.breadcrumbs {
  position: absolute;
  top: 50%;
  left: 10%;
  display: flex;
  flex-direction: column;
  transform: translateY(-50%);
  color: white;
  font-size: 16px;
  z-index: 10;
}
</style>
