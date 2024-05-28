<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="coverage-header">
          <h2 class="coverage-title">Coverage</h2>
          <h3 class="coverage-subtitle">Where We Operate</h3>
        </div>
        <div class="coverage-content">
          <div class="coverage-map position-relative">
            <div class="coverage-loc d-flex flex-column">
              <img src="../assets/Vector.png" alt="Savvana GA" class="img-fluid" />
              <img src="../assets/Vector (1).png" alt="California" class="img-fluid" />
              <img src="../assets/Vector (2).png" alt="Baltimore" class="img-fluid" />
              <img src="../assets/Vector (3).png" alt="Texas" class="img-fluid" />
              <img src="../assets/Vector (4).png" alt="New Jersey" class="img-fluid" />
            </div>
            <img src="../assets/worldmap.png" alt="World Map" class="world-map img-fluid" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="map-marker">
          <div class="mark">
            <div class="image">
              <img src="../assets/Vector.png" alt="Savvana GA" class="img-fluid" />
              <span class="small">Savvana GA</span>
              <img src="../assets/Vector (1).png" alt="California" class="img-fluid" />
              <span class="small">California</span>
            </div>
          </div>
          <div class="mark">
            <div class="image">
              <img src="../assets/Vector (2).png" alt="Baltimore" class="img-fluid" />
              <span class="small">Baltimore</span>
              <img src="../assets/Vector (3).png" alt="Texas" class="img-fluid" />
              <span class="small">Texas</span>
            </div>
          </div>
          <div class="mark">
            <div class="image">
              <img src="../assets/Vector (4).png" alt="New Jersey" class="img-fluid" />
              <span class="small">New Jersey</span>
            </div>
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
.container{
  background: #f4fffd;
}
.coverage-header {
  margin-bottom: 20px;
}

.coverage-title {
  font-size: 32px;
  font-weight: 700;
  color: #ff4c60;
}

.coverage-subtitle {
  font-size: 48px;
  font-weight: 700;
  color: #002d72;
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
  width: 30px; /* Adjust the size of map marker images */
  height: 30px; /* Adjust the size of map marker images */
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
</style>
