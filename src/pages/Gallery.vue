<template>
    <div class="gallery ">
        <div class="image-container0">
            <img src="../assets/Gallery.webp" alt="Gallery Image" class="gallery-image" />
            <div class="overlay"></div>

            <div class="breadcrumbs">
                <h1>Gallery</h1>
                <div class="breadcrumb_des">
                    <p>HOME &nbsp > &nbsp </p>
                    <p class="breadcrumb_name">GALLERY</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container container--gallery">
      <div class="row">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="image.colClass"
          @click="showGallery(index)"
        >
          <div class="photo-zoom">
            <img :src="image.src" alt="" />
          </div>
        </div>
      </div>
      <vue-easy-lightbox
        v-if="visible"
        :imgs="images.map(image => image.src)"
        :index="index"
        @hide="handleHide"
      />
    </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  name: 'MasonryGallery',
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      visible: false,
      index: 0,
      images: [
        { src: require('@/assets/Gallery_01.webp'), colClass: 'col-12 col-sm-6 col-md-4' },
        { src: require('@/assets/Gallery_02.webp'), colClass: 'col-12 col-sm-6 col-md-8' },
        { src: require('@/assets/Gallery_03.webp'), colClass: 'col-12 col-sm-6 col-md-4' },
        { src: require('@/assets/Gallery_04.webp'), colClass: 'col-12 col-sm-6 col-md-4' },
        { src: require('@/assets/Gallery_05.webp'), colClass: 'col-12 col-sm-6 col-md-4' },
        { src: require('@/assets/Gallery_06.webp'), colClass: 'col-12 col-md-12' }
      ]
    };
  },
  methods: {
    showGallery(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style>
.gallery {
    width: 100%;
}

.breadcrumb_des {
    display: flex;
    flex-direction: row;
}

.breadcrumb_name {
    color: #011936;
    font-weight: 700;
}

.image-container0 {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
}
.gallery-image{
    justify-content: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.breadcrumbs {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  font-size: 16px;
  z-index: 10;
}

.container--gallery {
  margin-top: 40px;
  margin-bottom: 40px;
}

.container--gallery .row {
  margin-left: -4px;
  margin-right: -4px;
}

.container--gallery [class*="col-"] {
  padding-left: 4px;
  padding-right: 4px;
  margin-bottom: 8px;
}

.photo-zoom {
  outline: 0;
  overflow: hidden;
  position: relative;
  display: block;
  height: 230px;
}

.photo-zoom img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
}

.image-source-link {
  color: #98c3d1;
}
</style>
