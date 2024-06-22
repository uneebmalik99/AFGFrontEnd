<template>
<cat-carousel
    :items="items"
    :item-per-page="5"
    :indicators-config="{activeColor: '#000', size: 10, color: '#d1d1d1', hideIndicators: false}"
  >
    <template
      slot="item"
      slot-scope="{data, index}"
    >
      <div class="item">{{index}} {{data.name}} </div>
    </template>
  </cat-carousel>
  </template>
  
  <script>
    CatCarousel: () => import('vue-cat-carousel')

  export default {
    name: 'ImageCarousel',
    data() {
      return {
        currentIndex: 0,
        images: [
          require('@/assets/Ship.webp'),
          require('@/assets/Ship.webp'),
          require('@/assets/Ship.webp'),
          // Add more image paths as needed
        ]
      };
    },
    computed: {
      carouselStyle() {
        return {
          transform: `translateX(-${this.currentIndex * (100 / this.visibleItems)}%)`
        };
      },
      visibleItems() {
        return 3; // Number of items visible at a time
      }
    },
    methods: {
      moveSlide(direction) {
        const totalItems = this.images.length;
        const maxIndex = totalItems - this.visibleItems;
        this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems;
  
        if (this.currentIndex < 0) {
          this.currentIndex = maxIndex;
        } else if (this.currentIndex > maxIndex) {
          this.currentIndex = 0;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    max-width: 800px;
    margin: auto;
    overflow: hidden;
  }
  
  .carousel-wrapper {
    overflow: hidden;
  }
  
  .carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    min-width: calc(100% / 3); /* Adjust this to control how many items are visible */
    box-sizing: border-box;
    padding: 10px;
  }
  
  .carousel-item img {
    width: 100%;
    display: block;
  }
  
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
  }
  
  .carousel-btn.left {
    left: 10px;
  }
  
  .carousel-btn.right {
    right: 10px;
  }
  </style>
  