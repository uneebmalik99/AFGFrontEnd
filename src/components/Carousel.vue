<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" ref="carouselWrapper">
      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }">
        <div v-for="(card, index) in cards" :key="index" class="carousel-card">
          <div class="card-content">

            
            <img :src="card.image" alt="Gallery Image" class="gallery-image"/>
            <div class="innerbox">
              <h6>{{card.title}}</h6>
              <p style="width: 100%;color: grey; text-align: center;">{{card.des}}</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <div class="nav-buttons">
      <button class="nav-button left" @click="scrollLeft">&#8249;</button>
      <button class="nav-button right" @click="scrollRight">&#8250;</button>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  data() {
    return {
      cards: [     
        { title: "24/7 Customer Support",des:'We provide 24/7 customer support to our client via email, calls, and website', image: require('../assets/customersupport_small.png') },
        { title: "HalfCut Service",des:'We provide 24/7 customer support to our client via email, calls, and website', image: require('../assets/halfcut_small.png') },
        { title: "Booking Service",des:'We provide 24/7 customer support to our client via email, calls, and website', image: require('../assets/loading_small.png') },
        { title: "Towing Service", des:'We provide 24/7 customer support to our client via email, calls, and website',image: require('../assets/towing_small.png') },
        { title: "Shipping Service", des:'We provide 24/7 customer support to our client via email, calls, and website',image: require('../assets/shipping_small.png') },
        { title: "Warehousing Service",des:'We provide 24/7 customer support to our client via email, calls, and website', image: require('../assets/warehousing_small.png') },
        { title: "Clearence Service",des:'We provide 24/7 customer support to our client via email, calls, and website', image: require('../assets/clearence_small.png') },
        { title: "Loading Service", des:'We provide 24/7 customer support to our client via email, calls, and website',image: require('../assets/container_loading_small.png') },
      ],
      currentIndex: 0,
      cardWidth: 0
    };
  },
  mounted() {
    nextTick(this.updateCardWidth); // Ensure DOM is fully rendered
    window.addEventListener('resize', this.updateCardWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateCardWidth);
  },
  methods: {
    scrollLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    scrollRight() {
      if (this.currentIndex < this.cards.length - Math.floor(this.$refs.carouselWrapper.clientWidth / this.cardWidth)) {
        this.currentIndex++;
      }
    },
    updateCardWidth() {
      if (this.$refs.carouselWrapper) {
        this.cardWidth = this.$refs.carouselWrapper.clientWidth / 3; // Adjust for the number of cards visible
      }
    }
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: auto;
}

.carousel-wrapper {
  overflow: hidden;
}

.innerbox{
  background-color: white;
  border-radius: 10px;
  padding: 5%;
}
.innerbox h6 {
    border-bottom: 1px solid #ddd; /* Light gray line */
    padding-bottom: 8px; /* Space between the text and the line */
}
.innerbox p {
    width: 100%; /* Ensure the paragraph takes up full width */
    text-align: center; /* Center align text within the paragraph */
    display: -webkit-box; /* Required for line clamping */
    -webkit-line-clamp: 3; /* Limit to 3 lines */
    -webkit-box-orient: vertical; /* Required for line clamping */
    overflow: hidden; /* Hide overflowing text */
    text-overflow: ellipsis; /* Add ellipsis (...) to overflowing text */
}
.carousel {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-card {
  flex: 0 0 33.33%; /* Adjust for the number of cards visible */
  box-sizing: border-box;
  padding: 10px;
}

.card-content {
  background-color: #F1F1F1;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a shadow */
}

.gallery-image {
  width: 60%;
  height: auto;
  margin-block: 5px;
  border-radius: 10px;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.nav-button {
  background: #f04e45;
  border: none;
  color: white;
  padding-inline: 10px;
  font-size: 1.5rem;
  margin: 0 5px;
  cursor: pointer;
}
</style>
