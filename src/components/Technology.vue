<template>
  <div class="container-fluid app-container">
    <div class="row justify-content-start">
      <div class="col-lg-6 col-md-8 app-header">
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
    <div class="row justify-content-center app-download">
      <div class="col-lg-10 background-image">
        <div class="row app-promo">
          <div class="col-md-6 text-center">
            <img
              class="img-fluid app-image"
              src="../assets/iPhone 15.png"
              alt="AFG Global Shipping App"
            />
          </div>
          <div class="col-md-6 app-download-info">
            <h3 class="download-title">Download Our App Now</h3>
            <p class="download-description">
              Our latest app, using latest technology to meet with user
              requirements. AFG Global was established with the sole aim of
              enabling growth, by providing efficient and prompt logistics
              solutions.
            </p>
            <div class="download-buttons d-flex justify-content-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                class="download-button"
              >
                <img
                  src="../assets/Googleplay.png"
                  alt="Get it on Google Play"
                  class="img-fluid"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                class="download-button"
              >
                <img
                  src="../assets/Appplay.png"
                  alt="Download on the App Store"
                  class="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
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

.app-header {
  text-align: left;
  margin-top: 10%;
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
  margin-top: 10px;
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
  border: 1px solid;
  border-radius: 30px;
  text-align: center;
}

.download-title {
  margin-bottom: 10px;
  font-family: Montserrat;
  font-size: 2em;
  font-weight: 700;
}

.download-description {
  margin-bottom: 20px;
  color: #ffffff;
  font-family: Montserrat;
  font-size: 1em;
  font-weight: 400;
}

.download-buttons .download-button img {
  width: 150px;
}

.background-image {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/bg.png") no-repeat center center;
  background-size: cover;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
