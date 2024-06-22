<template>
  <div class="container mt-4 mb-4">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="partners-section mb-5">
          <div class="partners-title">Partners</div>
          <div class="partners-subtitle">We are trusted by major global brands</div>
          <div
            class="scroll-container"
            ref="scrollContainer"
            @scroll="handleScroll"
            @mousedown="mouseDown"
            @mouseup="mouseUp"
            @mouseleave="mouseUp"
            @mousemove="mouseMove"
            @touchstart="touchStart"
            @touchend="touchEnd"
            @touchmove="touchMove"
          >
            <div class="partner-logo" v-for="(image, index) in images" :key="'clone-start-' + index">
              <img :src="image" :alt="'Partner ' + (index + 1)">
            </div>
            <div class="partner-logo" v-for="(image, index) in images" :key="'main-' + index">
              <img :src="image" :alt="'Partner ' + (index + 1)">
            </div>
            <div class="partner-logo" v-for="(image, index) in images" :key="'clone-end-' + index">
              <img :src="image" :alt="'Partner ' + (index + 1)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import G1 from '../assets/P_ADESA.webp'; // Update the path to your actual image location
import G2 from '../assets/P_aa.webp'; // Update the path to your actual image location
import G3 from '../assets/P_MSC.webp'; // Update the path to your actual image location
import G4 from '../assets/P_maersk.webp'; // Update the path to your actual image location
import G5 from '../assets/P_hmm.webp'; // Update the path to your actual image location
import G6 from '../assets/P_evergreenline.webp'; // Update the path to your actual image location
import G7 from '../assets/P_yangming.webp'; // Update the path to your actual image location
import G8 from '../assets/P_m.webp'; // Update the path to your actual image location
import G9 from '../assets/P_hapag_loyd.webp'; // Update the path to your actual image location
import G10 from '../assets/P_CMACGM.webp'; // Update the path to your actual image location
import G11 from '../assets/P_Copart.webp'; // Update the path to your actual image location

export default {
  name: 'Partners',
  data() {
    return {
      images: [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11],
      isDown: false,
      startX: 0,
      scrollLeft: 0
    };
  },
  mounted() {
    this.setInitialScroll();
  },
  methods: {
    setInitialScroll() {
      const container = this.$refs.scrollContainer;
      const contentWidth = container.scrollWidth / 3; // Divide by 3 because we have 3 sets of images
      container.scrollLeft = contentWidth;
    },
    handleScroll() {
      const container = this.$refs.scrollContainer;
      const contentWidth = container.scrollWidth / 3;

      if (container.scrollLeft <= 0) {
        container.scrollLeft = contentWidth;
      } else if (container.scrollLeft >= contentWidth * 2) {
        container.scrollLeft = contentWidth;
      }
    },
    mouseDown(e) {
      this.isDown = true;
      this.startX = e.pageX - this.$refs.scrollContainer.offsetLeft;
      this.scrollLeft = this.$refs.scrollContainer.scrollLeft;
    },
    mouseUp() {
      this.isDown = false;
    },
    mouseMove(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.scrollContainer.offsetLeft;
      const walk = (x - this.startX) * 3; // Scroll-fast
      this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk;
    },
    touchStart(e) {
      this.isDown = true;
      this.startX = e.touches[0].pageX - this.$refs.scrollContainer.offsetLeft;
      this.scrollLeft = this.$refs.scrollContainer.scrollLeft;
    },
    touchEnd() {
      this.isDown = false;
    },
    touchMove(e) {
      if (!this.isDown) return;
      const x = e.touches[0].pageX - this.$refs.scrollContainer.offsetLeft;
      const walk = (x - this.startX) * 3; // Scroll-fast
      this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk;
    }
  }
};
</script>

<style scoped>
.partners-section {
  text-align: center;
  padding: 20px;
}
.partners-title {
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 500;
}
.partners-subtitle {
  font-size: 34px;
  margin-bottom: 40px;
  font-weight: 500;
}
.scroll-container {
  display: flex;
  overflow-x: auto;
  padding: 10px;
  scrollbar-width: none; 
  -ms-overflow-style: none;  
}
.scroll-container::-webkit-scrollbar {
  display: none; 
}
.partner-logo {
  flex: 0 0 auto;
  margin: 0 10px;
  max-width: 200px;
  min-width: 100px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.partner-logo img {
  display: block;
  width: 100%;
  height: auto;
}
</style>