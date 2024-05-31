<template>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="slider" ref="slider"
               @mousedown="startDrag"
               @touchstart="startDrag"
               @mouseup="stopDrag"
               @touchend="stopDrag"
               @mouseleave="stopDrag"
               @mousemove="drag"
               @touchmove="drag"
               >
            <div class="slider-content d-flex" ref="sliderContent">
              <div class="card" v-for="(image, index) in images" :key="index">
                <img :src="image" alt="Image" class="card-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import G1 from './icons/G1.webp'; // Update the path to your actual image location
  import G2 from './icons/G2.webp'; // Update the path to your actual image location
  import G3 from './icons/G3.webp'; // Update the path to your actual image location
  import G4 from './icons/G4.webp'; // Update the path to your actual image location
  import G5 from './icons/G5.webp'; // Update the path to your actual image location
  import G6 from './icons/G6.webp'; // Update the path to your actual image location
  
  export default {
    name: 'ImageSlider',
    data() {
      return {
        images: [
          G1,
          G2,
          G3,
          G4,
          G5,
          G1,
          G2,
          G3,
          G4,
          G5,
          G1,
          G2,
          G3,
          G4,
          G5,
          G6
        ],
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
      };
    },
    methods: {
      startDrag(event) {
        this.isDragging = true;
        this.startX = event.type === 'mousedown' ? event.pageX : event.touches[0].pageX;
        this.scrollLeft = this.$refs.slider.scrollLeft;
      },
      drag(event) {
        if (!this.isDragging) return;
        const x = event.type === 'mousemove' ? event.pageX : event.touches[0].pageX;
        const walk = (x - this.startX) * 2;
        this.$refs.slider.scrollLeft = this.scrollLeft - walk;
      },
      stopDrag() {
        this.isDragging = false;
      }
    }
  };
  </script>
  <style scoped>
  .slider {
    overflow-x: hidden;
    display: flex;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    cursor:auto;
  }
  .slider-content {
    display: flex;
  }
  .card {
    flex: auto;
    margin: 10px;
   
  
   
    border-radius: 8px;
    box-sizing: border-box;
    
  }
  .card-img {
    width: 100px;
    height: 50px;
  
   
  }
  </style>
  