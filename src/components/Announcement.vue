<template>
    <div class="container-fluid" style="background-color: #f4fffd;">
        <div class="row justify-content-end" style="margin-right: 10%">
            <p class="text mt-5">
                <span class="home">HOME</span>
                <span class="arrow"> &gt; </span>
                <span class="services">ANNOUNCEMENTS</span>
            </p>
        </div>
        <div class="row justify-content-center mt-3">
            <h1 class="Heading mb-4 text-center">News and Announcements</h1>
        </div>
        <div class="row">
            <div class="col-12 mb-4">
                <swiper :scrollbar="{
                    hide: false,
                    draggable: true,
                }" :modules="modules" class="mySwiper mb-5">
                    <swiper-slide v-for="(card, index) in cards" :key="index">
                        <div class="card mb-5">
                            <img :src="card.image" class="card-img-fluid" alt="Card image cap">
                            <div class="overlay">
                                <h5 class="card-title">{{ card.title }}</h5>
                                <p class="card-text">{{ card.text }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div>
            <h4 class="h4-title">Latest Post</h4>
        </div>
        <div class="container justify-content-start pl-md-3 pl-1">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card2 mb-5 mt-3 mx-auto">
                        <img class="card-img-top" src="../assets/cardboat.webp" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title2">Technology</h5>
                            <p class="card-text2">Cargo ship going to deliver the containers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mb-5">
                <button class="button">Load More</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Scrollbar],
        };
    },
    data() {
        return {
            cards: [
                {
                    image: require('../assets/Ann.webp'), // Update image path accordingly
                    title: 'Loading Containers in Ship',
                    text: 'Loading of container in ship via lifter with ease safety',
                },
                {
                    image: require('../assets/Ann.webp'), // Update image path accordingly
                    title: 'Card Title 2',
                    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                },
                {
                    image: require('../assets/Ann.webp'), // Update image path accordingly
                    title: 'Card Title 3',
                    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                },
            ],
        };
    },
};
</script>

<style scoped>
.text {
    margin: 0;
    padding: 0;
    text-align: right;
}

.home,
.arrow,
.services {
    display: inline-block;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.38px;
    text-align: left;
}

.home,
.arrow {
    color: #333333;
}

.services {
    color: #011936;
}

.Heading {
    font-family: Montserrat;
    font-size: 56px;
    font-weight: 700;
    line-height: 68.26px;
    text-align: center;
    color: #011936;
}

.swiper {
    width: 100%;
    height: 100%;
    padding: 0 15%;
    /* Add padding to show the corners of adjacent slides */
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    position: relative;
    width: 80%;
    height: auto;
    max-width: 900px;
    margin: 0 auto;
    /* Center the card */
}

.card-img-fluid {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.overlay {
    position: absolute;
    bottom: 100px;
    left: 20px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
}

.card-title {
    font-family: Montserrat;
    font-size: 31px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: #FFFFFF;
}

.card-text {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 19.5px;
    text-align: left;
    color: #FFFFFF;
}

.h4-title {
    padding-left: 15px;
}

/* Custom styles for the Swiper scrollbar */
.swiper-scrollbar {
    position: absolute;
    left: 0;
    right: 0;
    height: 5px;
    /* Smaller height for the scrollbar */
    top: 50%;
    /* Position the scrollbar in the middle */
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.1);
    /* Light background color */
    border-radius: 5px;
}

.swiper-scrollbar-drag {
    color: #011936;
    /* Custom color for the scrollbar drag handle */
    border-radius: 5px;
}

.card-title2 {
    font-family: Work Sans;
    font-size: 13.76px;
    font-weight: 500;
    line-height: 19.65px;
    text-align: left;
    color: #4B6BFB;
}

.h4-title {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 700;
    line-height: 27.56px;
    text-align: start;
    color: #011936;
    margin-left: 5%;
}

.card-text2 {
    font-family: Work Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 27.52px;
    text-align: left;
    color: #181A2A;
}

.card2 {
    width: 100%;
    max-width: 385.23px;
    height: auto;
    padding: 15.72px;
    gap: 15.72px;
    border-radius: 11.79px;
    border: 0.98px solid #E8E8EA;
    background-color: white;
}

.button {
    font-family: Montserrat;
    font-size: 15.72px;
    font-weight: 500;
    line-height: 23.59px;
    text-align: center;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 11.79px 19.65px;
    gap: 11.79px;
    border-radius: 5.9px;
    background: #ED254E;
    color: #FFFFFF;
}

/* Responsive styles */
@media (max-width: 767.98px) {
    .Heading {
        font-size: 36px;
        line-height: 44px;
    }

    .card-title {
        font-size: 24px;
    }

    .card-text {
        font-size: 10px;
    }

    .swiper {
        padding: 0 5%;
    }
}
</style>
