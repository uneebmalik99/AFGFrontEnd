<template>
  <div class="my-background" >
  <div class="container " style="display: flex;justify-content: center;">
    <div class="row  col-12 header_box" >
    <div class="col-lg-5 col-md-10 col-sm-10 app-header" >
      <h2 class="app-title">Our App</h2>
      <h1 class="app-subtitle">Technology and Tracking</h1>
      <p class="app-description">
        In line with our dedication to innovation, AFG Global is using new tools
        designed to elevate your experience with us, granting you 24/7 access to
        essential information about your vehicles, shipments, invoices and
        real-time updates and implementation with its website, mobile app and
        the AFG system.
      </p>
    </div>
  </div>
  </div>
 
  <div class="row mt-5" >
  <div class="col-md-6 d-flex justify-content-center align-items-center" >
    <img src="../assets/iPhone 15.webp" alt="Left Image" class="img-fluid2" />
    
  </div>
  <!-- <div class="col-md-6 d-flex  align-items-center justify-content-end">
    <div class="row justify-content-center app-download" >
          <div class="col-md-8 app-download-info" style="background-color: rgba(255, 255, 255, 0.1);">
            <h1 class="download-title0">Download</h1>
            <h2 class="download-title">Our App Now</h2>
            <p class="download-description">
              Our latest app, using latest technology to meet with user requirments. AFG Global was established with the sole aim of enabling growth, by providing efficient and prompt logistics, solutions.
            </p>
            <div class="download-buttons d-flex justify-content-center ">
              <a
                href="https://play.google.com/store"
                target="_blank"
                class="download-button"
              >
                <img
                  src="../assets/Googleplay.webp"
                  alt="Get it on Google Play"
                  class="img-fluid"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                class="download-button ml-4"
              >
                <img
                  src="../assets/Appplay.webp"
                  alt="Download on the App Store"
                  class="img-fluid"
                />
              </a>
            </div>
          
        </div>
        </div>


  </div> -->
</div>

</div>

</template>


<script>
export default {
  name: "Technology",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    // Define your methods if needed
  },
};
</script>

<style scoped>
.app-container {
  background: #f4fffd;
  color: white;
  padding: 20px;
}

.header_box{
  display: flex;
  justify-content: flex-start;
}


@media (max-width: 992px) {
  .header_box{
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-header {
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}
}
.my-background {
  background: #f4fffd;
  background-image: url('../assets/App_bg.png'); /* Replace with your image path */
  background-size: contain; /* Adjust to fit the entire div */
  background-position: right; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating the image */
  height: auto; /* Set the height as needed, e.g., full viewport height */
  width: 100%;
  position: relative;
}

.App_heading{
  background-color: grey;

}
.app-header {
  text-align: left;
  margin-top: 5%;
}

.left-block {
  margin-right: 0px;
}

.right-block {
  margin-left: auto;
  margin-right: 0;
}
.app-title {
  font-size: 2em;
  color: #ff4c60;
  font-family: Montserrat;
  font-weight: 700;
  text-align: left;
}

.app-subtitle {
  font-size: 1.5em;
  color: #002d72;
  font-family: Montserrat;
  font-weight: 700;
  text-align: left;
}

.app-description {
  margin-top: 8%;
  color: black;
  text-align: left;
}

.app-download {
  position: relative;
  margin-top: 40px;
}

.app-promo {
  align-items: center;
}

.app-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.app-download-info {
  background: transparent;
  padding: 20px;
  border: 1px solid  rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
.download-title0 {
  margin-bottom: 5px;
  font-family: Montserrat;
  color: white;
  font-size: 2em;
  font-weight: 700;
}
.download-title {
  margin-bottom: 10px;
  font-family: Montserrat;
  color: white;
  font-size: 2em;
  font-weight: 500;
}

.download-description {
  margin-bottom: 20px;
  color: #ffffff;
  text-align: left;
  padding-inline: 40px;
  font-family: Montserrat;
  font-size: 1em;
  font-weight: 400;
}

.download-buttons .download-button img {
  width: 150px;
}

.img-fluid2{
  max-width: 60%; /* Adjust the percentage as needed */
  height: auto;
}
.background-image {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/bg.webp") no-repeat center center;
  background-size: cover;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Adjustments for smaller screens */
@media (max-width: 992px) {
  .my-background {
    background-size: contain; /* Ensure the image is fully visible */
    height: auto; /* Adjust height to auto for better responsiveness */
  }
}

@media (max-width: 768px) {
  .my-background {
    background-size: contain; /* Ensure the image is fully visible */
    height: auto; /* Adjust height to auto for better responsiveness */
  }
}

@media (max-width: 576px) {
  .my-background {
    background-size: contain; /* Ensure the image is fully visible */
    height: auto; /* Adjust height to auto for better responsiveness */
  }
}

@media (max-width: 480px) {
  .my-background {
    background-size: contain; /* Ensure the image is fully visible */
    height: auto; /* Adjust height to auto for better responsiveness */
  }
}
</style>
