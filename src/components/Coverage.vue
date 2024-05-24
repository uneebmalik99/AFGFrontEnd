<template>
  <div class="coverage-section">
    <div class="coverage-header">
      <h2 class="coverage-title">Coverage</h2>
      <h3 class="coverage-subtitle">Where We Operate</h3>
    </div>
    <div class="coverage-content">
      <div class="coverage-map">
        <div class="coverage-loc">
          <img src="../assets/Vector.png" alt="Savvana GA" />
          <img src="../assets/Vector (1).png" alt="California" />
          <img src="../assets/Vector (2).png" alt="Baltimore" />
          <img src="../assets/Vector (3).png" alt="Texas" />
          <img src="../assets/Vector (4).png" alt="New Jersey" />
        </div>
        <img src="../assets/worldmap.png" alt="World Map" class="world-map" />
      </div>
      <div class="map-marker">
        <div class="mark">
          <div class="image">
            <img src="../assets/Vector.png" alt="Savvana GA" />
            <span>Savvana GA</span>
            <img src="../assets/Vector (1).png" alt="California" />
            <span>California</span>
          </div>
        </div>
        <div class="mark">
          <div class="image">
            <img src="../assets/Vector (2).png" alt="Baltimore" />
            <span>Baltimore</span>
            <img src="../assets/Vector (3).png" alt="Texas" />
            <span>Texas</span>
          </div>
        </div>
        <div class="mark">
          <div class="image">
            <img src="../assets/Vector (4).png" alt="New Jersey" />
            <span>New Jersey</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Coverage",
  data() {
    return {
      locations: [],
    };
  },
  methods: {
    navigateToLocation(id) {
      const location = this.locations.find((loc) => loc.id === id);
      if (location) {
        // This example scrolls to the top of the page when a marker is clicked
        // You can replace this with the actual navigation logic
        alert(`Navigating to ${location.name}`);
      }
    },
  },
};
</script>
<style scoped>
.coverage-section {
  background: #f4fffd;
  color: white;
  padding: 20px;
  text-align: left;
}

.coverage-header {
  margin-bottom: 20px;
}

.coverage-title {
  font-size: 2em;
  color: #ff4c60;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
  text-align: left;
}

.coverage-subtitle {
  font-size: 1.5em;
  color: #002d72;
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 700;
  line-height: 58.51px;
  text-align: left;
}

.coverage-content {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.coverage-map {
  flex: 1;
  position: relative;
}

.coverage-loc {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%; /* Adjust as necessary */
  left: 10%; /* Adjust as necessary */
  width: 10%; /* Adjust as necessary */
  gap: 10px;
  background: transparent;
}

.coverage-loc img {
  width: 10%;
  height:10%;
  
}

.world-map {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.map-marker {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45%;
  right: 250px; /* Move slightly left by reducing the right value */
  transform: translateY(-50%);
  width: 30%;
  padding: 8px 0;
  gap: 20px;
  background: transparent;
}

.mark {
  display: flex;
  width: 100%;
}

.image {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.image img {
  margin-right: 10px;
  margin-left: 25px;
}

.image span {
  color: #000000;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 34.74px;
  text-align: center;
  margin-left: 8px;
}

/* Add spacing between specific spans and images */
.image span:nth-of-type(1) {
  margin-right: 20px; /* Adjust the spacing value as needed */
}

.image span:nth-of-type(2) {
  margin-left: 20px; /* Adjust the spacing value as needed */
}
</style>
