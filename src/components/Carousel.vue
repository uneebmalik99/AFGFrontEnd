<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" ref="carouselWrapper">
      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }">
        <div v-for="(card, index) in cards" :key="index" class="carousel-card">
          <div class="card-content">
            <img :src="card.image" alt="Gallery Image" class="gallery-image"/>
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
        { title: "Card 1", image: require('../assets/S_1.webp') },
        { title: "Card 2", image: require('../assets/S_8.webp') },
        { title: "Card 3", image: require('../assets/S_4.webp') },
        { title: "Card 4", image: require('../assets/S_2.webp') },
        { title: "Card 5", image: require('../assets/S_3.webp') },
        { title: "Card 6", image: require('../assets/S_5.webp') },
        { title: "Card 7", image: require('../assets/S_6.webp') },
        { title: "Card 8", image: require('../assets/S_7.webp') },
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
  background-color: #a5a5e0;
  border-radius: 10px;
  text-align: center;
}

.gallery-image {
  max-width: 100%;
  height: 350px;
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
