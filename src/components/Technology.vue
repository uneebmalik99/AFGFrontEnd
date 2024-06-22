<template>
  <div class="my-background">
    <div class="container">
      <div class="row header_box">
        <div class="col-lg-5 col-md-10 col-sm-12 app-header">
          <h2 class="app-title">Our App</h2>
          <h1 class="app-subtitle">Technology and Tracking</h1>
          <p class="app-description">
            In line with our dedication to innovation, AFG Global is using new tools designed to elevate your experience
            with us, granting you 24/7 access to essential information about your vehicles, shipments, invoices and
            real-time updates and implementation with its website, mobile app and the AFG system.
          </p>
        </div>
      </div>

      <div class="row ">
        <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img src="../assets/iPhone 15.webp" alt="Left Image" class="img-fluid2" />
        </div>
        <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">

          <div class="app-download-info">
            <h1 class="download-title0">Download</h1>
            <h2 class="download-title">Our App Now</h2>
            <p class="download-description">
              Our latest app, using latest technology to meet with user requirements. AFG Global was established with
              the sole aim of enabling growth, by providing efficient and prompt logistics, solutions.
            </p>
            <div class="download-buttons d-flex justify-content-center">
              <a href="https://play.google.com/store" target="_blank" class="download-button">
                <img src="../assets/Googleplay.webp" alt="Get it on Google Play" class="img-fluid" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" class="download-button ml-4">
                <img src="../assets/Appplay.webp" alt="Download on the App Store" class="img-fluid" />
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
  methods: {},
};
</script>

<style scoped>
.app-container {
  background: #f4fffd;
  color: white;
  padding: 20px;
}

.header_box {
  display: flex;
  justify-content: flex-start;
}

@media (max-width: 992px) {
  .header_box {
    justify-content: center;
    align-items: center;
  }

  .app-header {
    text-align: center;
    margin-top: 5%;
  }

  .my-background {
    background-size: contain;
  }
  .app-title {
    font-size: 20px;
  }

  .app-subtitle {
    font-size: 25px;
  }

  .app-description {
    font-size: 14px;
    width: 270px;
    margin-top: 1%;
  }
}

@media (max-width: 768px) {
  .app-header {
    margin-top: 10%;
  }
}

.my-background {
  background: #f4fffd;
  background-image: url('../assets/App_bg.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  padding: 20px;
}

.app-header {
  text-align: left;
  margin-top: 5%;
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

.app-description {
  margin-top: 3%;
  color: black;
}

.app-download-info {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  text-align: center;
  margin-bottom: 60%;
}

.download-title0,
.download-title {
  color: white;
  font-family: Montserrat;
}

.download-title0 {
  font-size: 2em;
  font-weight: 700;
}

.download-title {
  font-size: 2em;
  font-weight: 500;
}

.download-description {
  color: #ffffff;
  text-align: left;
  padding-inline: 40px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
}

.download-buttons .download-button img {
  width: 150px;
}

.img-fluid2 {
  max-width: 94%;
  height: auto;
  margin-bottom: 40%;
}

@media (max-width: 768px) {
  .app-description {
    margin-top: 10%;
  }

  .app-download {
    margin-bottom: 20%;
  }

  .download-description {
    padding-inline: 20px;
    font-size: 0.9em;
  }

  .download-buttons .download-button img {
    width: 120px;
  }

  .img-fluid2 {
    max-width: 80%;
  }

  .my-background {
    background-size: contain;
  }

  .app-header {
    text-align: left;
    margin-top: 5%;
  }

  .app-title {
    font-size: 17px;
  }

  .app-subtitle {
    font-size: 19px;
  }

  .app-description {
    font-size: 10px;
    width: 270px;
    margin-top: 1%;
  }

  .download-title0,
  .download-title {
    color: white;
    font-family: Montserrat;
  }

  .download-title0 {
    font-size: 1em;
    font-weight: 700;
  }

  .download-title {
    font-size: 2em;
    font-weight: 500;
  }

  .download-description {
    color: #ffffff;
    text-align: left;
    padding-inline: 40px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
  }

  .download-buttons .download-button img {
    width: 150px;
  }

}

@media (max-width: 576px) {

  .download-title0,
  .download-title {
    font-size: 12px;
  }

  .download-description {
    font-size: 11px;
    padding-inline: 10px;
  }

  .download-buttons .download-button img {
    width: 30px;
  }

  .img-fluid2 {
    max-width: 80%;
    height: 50%;
    margin-right: 50%;
  }

  .app-download-info {
    margin-top: -100%;
    max-width: 53%;
    margin-left: 50%;
    padding: 1px;
  }

  .my-background {
    background-size: contain;
  }
}

@media (max-width: 480px) {
  .download-description {
    padding-inline: 5px;
  }

  .download-buttons .download-button img {
    width: 58px;
  }


  .img-fluid2 {
    max-width: 50%;
    height: 50%;
    margin-top: 10%;
  }
}
</style>