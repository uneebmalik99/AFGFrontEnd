<template>
  <div class="gallery">
    <div class="image-container">
      <img src="../assets/Gallery.webp" alt="Gallery Image" class="gallery-image"/>
      <div class="overlay"></div>
      <div class="breadcrumbs">
        <span>hbhjg</span>
        Home > Gallery</div>
    </div>

    <div class="masonry-gallery">
      <masonry :cols="{ 'default': 4, '1100': 3, '700': 2, '500': 1 }" gutter="30px">
        <div v-for="image in images" :key="image.id" class="masonry-item">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </masonry>
    </div>
  </div>
</template>



<script>
import Masonry from 'vue-masonry-css';

export default {
  name: 'MasonryGallery',
  components: {
    Masonry
  },
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/Gallery_01.webp'), alt: 'Image 1' },
        { id: 2, src: require('@/assets/Gallery_02.webp'), alt: 'Image 2' },
        { id: 3, src: require('@/assets/Gallery_03.webp'), alt: 'Image 3' },
        { id: 4, src: require('@/assets/Gallery_04.webp'), alt: 'Image 4' },
        // Add more images as needed
      ]
    };
  }
};
</script>





<style>
.gallery {
  width: 100%;
}

.image-container {
  position: relative;
  width: 100%;
  height: 400px; /* Adjust the height as needed */
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Black overlay with 0.8 opacity */
}

.breadcrumbs {
  position: absolute;
  top: 50%; /* Move to the vertical center */
  left: 10%; /* Adjust the position as needed */
  transform: translateY(-50%); /* Center it vertically */
  color: white;
  font-size: 16px; /* Adjust the font size as needed */
  z-index: 10; /* Ensure it is above the overlay */
}

.masonry-gallery {
  padding: 20px;
}

.masonry-item {
  margin-bottom: 30px;
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
}
</style>


