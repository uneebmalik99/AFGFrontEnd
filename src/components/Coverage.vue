<template>
  <div class="maincontainer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="container coverage-header">
            <h2 class="coverage-title">Coverage</h2>
            <h3 class="coverage-subtitle">Where We Operate</h3>
          </div>
        </div>
      </div>
      <div class="col-md-12 my-background">
        <div class="box_coverage">
          <!-- Create grid of response boxes -->
          <div class="col-sm-0 col-md-12 response-grid">
            <div class="col-md-12 response-box_coverage">
              <div class="col-md-3 ">
                <img src="../assets/Vector.webp" alt="Savannah GA" class="img-fluid" />
              </div>
              <div class="col-md-12  d-flex align-items-center">
                <h5 class="">Savannah GA</h5>
              </div>
            </div>


            <div class="col-md-12 response-box_coverage">
              <div class="col-md-3 ">
                <img src="../assets/Vector (1).webp" alt="Los Angeles CA" class="img-fluid" />
              </div>
              <div class="col-md-12  d-flex align-items-center">
                <h5 class="">Los Angeles CA</h5>
              </div>
            </div>
            <div class="col-md-12 response-box_coverage">
              <div class="col-md-3 ">
                <img src="../assets/Vector (2).webp" alt="Baltimore MD" class="img-fluid" />
              </div>
              <div class="col-md-12  d-flex align-items-center">
                <h5 class="">Baltimore MD</h5>
              </div>
            </div>
            <div class="col-md-12 response-box_coverage">
              <div class="col-md-3 ">
                <img src="../assets/Vector (3).webp" alt="Houston TX" class="img-fluid" />
              </div>
              <div class="col-md-12  d-flex align-items-center">
                <h5 class="">Houston TX</h5>
              </div>
            </div>



            <div class="col-md-12 response-box_coverage">
              <div class="col-md-3 ">
                <img src="../assets/Vector (4).webp" alt="Newark NJ" class="img-fluid" />
              </div>
              <div class="col-md-12  d-flex align-items-center">
                <h5 class="">Newark NJ</h5>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-sm-0 col-md-12 response-grid2">
        <div class="col-md-12 response-box_coverage">
          <div class="col-md-3 col-sm-3  col-lg-3 "  style="padding-right: 0%;">
            <img src="../assets/Vector.webp" alt="Savannah GA" class="img-fluid" />
          </div>
          <div class="col-md-12  d-flex " >
            <h5 class="">Savannah GA</h5>
          </div>
        </div>

        <div class="col-md-12 response-box_coverage">
          <div class="col-md-3 col-sm-3  col-lg-3"  >
            <img src="../assets/Vector (1).webp" alt="Los Angeles CA" class="img-fluid" />
          </div>
          <div class="col-md-12  d-flex align-items-center" >
            <h5 class="">Los Angeles CA</h5>
          </div>
        </div>
        <div class="col-md-12 response-box_coverage">
          <div class="col-md-3 col-sm-3  col-lg-3" >
            <img src="../assets/Vector (2).webp" alt="Baltimore MD" class="img-fluid" />
          </div>
          <div class="col-md-12  d-flex align-items-center">
            <h5 class="">Baltimore MD</h5>
          </div>
        </div>
        <div class="col-md-12 response-box_coverage">
          <div class="col-md-3 col-sm-3  col-lg-3"   >
            <img src="../assets/Vector (3).webp" alt="Houston TX" class="img-fluid" />
          </div>
          <div class="col-md-12  d-flex align-items-center" >
            <h5 class="">Houston TX</h5>
          </div>
        </div>



        <div class="col-md-12 response-box_coverage">
          <div class="col-md-3 col-sm-3  col-lg-3"  >
            <img src="../assets/Vector (4).webp" alt="Newark NJ" class="img-fluid" />
          </div>
          <div class="col-md-12  d-flex align-items-center" >
            <h5 class="">Newark NJ</h5>
          </div>
        </div>

      </div>




    </div>
  </div>
</template>

<script>
export default {
  name: "Coverage",
};
</script>



<style scoped>
.maincontainer {
  background: #f4fffd;
  padding-block: 50px;
}

.container {
  background: #f4fffd;
}

.coverage-header {
  margin-bottom: 20px;
}

.box_coverage {

  margin-right: 1%;
  position: absolute;
  right: 0;
  top: 45%;
  transform: translateY(-50%);
  padding: 20px;
}

.coverage-title {
  font-size: 32px;
  font-weight: 700;
  color: #ff4c60;
}

.my-background {
  background-image: url('../assets/mapwithpin.png');
  /* Replace with your image path */
  background-size: contain;
  /* Adjust to fit the entire div */
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Prevent repeating the image */
  height: 70vh;
  /* Set the height as needed, e.g., full viewport height */
  position: relative;
}

.coverage-subtitle {
  font-size: 48px;
  font-weight: 700;
}

.coverage-content {
  display: flex;
  justify-content: space-between;
}

.coverage-map {
  position: relative;
}

.coverage-loc {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.coverage-loc img {
  width: 30px;
  /* Adjust the size of map marker images */
  height: 30px;
  /* Adjust the size of map marker images */
}

.world-map {
  width: 100%;
  height: auto;
}

.map-marker {
  position: relative;
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mark {
  display: flex;
}

.image {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.image img {
  margin-right: 10px;
}

.small {
  font-size: 14px;
  /* Adjust font size as needed */
}

.response-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}

.response-box_coverage {
  padding: 2px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

.inner-box_coverage {
  background-color: #e0e0e0;
  padding: 5px;
  flex: 1;
  margin: 0 0px;
}

@media screen and (max-width: 768px) {
  .response-grid {
    display: none;

  }

  .response-grid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

  }

  .coverage-subtitle {
    font-size: 40px;
    font-weight: 600;
  }

  .coverage-title {
    font-size: 28px;
    font-weight: 600;
    color: #ff4c60;
  }

  .my-background {
    background-image: url('../assets/mapwithpin.png');
    /* Replace with your image path */
    background-size: contain;
    /* Adjust to fit the entire div */
    background-position: center;
    /* Center the image */
    background-repeat: no-repeat;
    /* Prevent repeating the image */
    height: 40vh;
    /* Set the height as needed, e.g., full viewport height */
    position: relative;
  }
}


@media screen and (max-width: 576px) {
  .response-grid {
    display: none;

  }

  .response-grid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;

  }

  .coverage-subtitle {
    font-size: 36px;
    font-weight: 600;
  }

  .coverage-title {
    font-size: 24px;
    font-weight: 600;
    color: #ff4c60;
  }

  .my-background {
    background-image: url('../assets/mapwithpin.png');
    /* Replace with your image path */
    background-size: contain;
    /* Adjust to fit the entire div */
    background-position: center;
    /* Center the image */
    background-repeat: no-repeat;
    /* Prevent repeating the image */
    height: 30vh;
    /* Set the height as needed, e.g., full viewport height */
    position: relative;
  }

}

@media screen and (min-width: 821px) {
  .response-grid2 {
    display: none;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;

  }
}
</style>
