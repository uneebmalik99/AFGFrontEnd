<template>
    <div class="container-fluid" style="background-color: #f4fffd;">
        <div class="row justify-content-end">
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
                <swiper :scrollbar="{ hide: false, draggable: true }" :modules="modules" :initial-slide="1" class="mySwiper mb-5">
                    <swiper-slide v-for="(card, index) in cards" :key="index" class="swiper-slide-custom" style="background-color: #f4fffd;">
                        <div class="card mb-5 swiper-card" style="background-color: #f4fffd;">
                            <img :src="card.image" class="swiper-slide-img" alt="Card image cap">
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
        <div class="container justify-content-start">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4" v-for="(post, index) in posts" :key="index">
                    <div class="card2 mb-4 mt-3 mx-auto">
                        <img :src="post.image" class="card-img-top" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title2">{{ post.title }}</h5>
                            <p class="card-text2">{{ post.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center ">
                <button class="button mb-4">Load More</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';
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
                    image: require('../assets/Ann.webp'),
                    title: 'Loading Containers in Ship',
                    text: 'Loading of container in ship via lifter with ease safety',
                },
                {
                    image: require('../assets/Ann.webp'),
                    title: 'Loading Containers in Ship',
                    text: 'Loading of container in ship via lifter with ease safety',
                },
                {
                    image: require('../assets/Ann.webp'),
                    title: 'Loading Containers in Ship',
                    text: 'Loading of container in ship via lifter with ease safety',
                },
            ],
            posts: [
                { image: require('../assets/cardboat.webp'), title: 'Technology', text: 'Cargo ship going to deliver the containers.' },
                { image: require('../assets/A-2.webp'), title: 'Technology', text: 'Cargo ship going to deliver the containers.' },
                { image: require('../assets/A-3.webp'), title: 'Technology', text: 'Cargo ship going to deliver the containers.' },
                { image: require('../assets/A-4.webp'), title: 'Technology', text: 'Cargo ship going to deliver the containers.' },
                { image: require('../assets/A-5.webp'), title: 'Technology', text: 'Cargo ship going to deliver the containers.' },
                { image: require('../assets/A-6.webp'), title: 'Technology', text: 'Cargo ship going to deliver the containers.' },
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
    margin-right: 17px;
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
    padding: 0 6%;
}


.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-card {
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    border-radius: 50px;
}

.swiper-slide-img {
    width: 100%;
    height: auto;
    border-radius: 20px;
}

.overlay {
    position: absolute;
    bottom: 30px;
    left: 50px;
    color: #fff;
    font-size: 12px;
    background-color: transparent;
}

.card-title {
    font-family: Montserrat;
    font-size: 38px;
    font-weight: 700;
    text-align: left;
    line-height: 18px;
    color: #FFFFFF;
    margin-top: 34%;
}

.card-text {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    color: #FFFFFF;
    padding-top: 0.5%;
   
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

.card-title2 {
    font-family: Work Sans;
    font-size: 13.76px;
    font-weight: 500;
    text-align: left;
    color: #4B6BFB;
}

.card-text2 {
    font-family: Work Sans;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    color: #181A2A;
}

.card2 {
    width: 100%;
    max-width: 385px;
    height: auto;
    padding: 15px;
    border-radius: 12px;
    border: 1px solid #E8E8EA;
    background-color: white;
}

.button {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding: 12px 20px;
    border-radius: 6px;
    background: #ED254E;
    border: #ED254E;
    color: #FFFFFF;
}

@media (max-width: 1100px) {
    .text {
        text-align: center;
        margin-right: 0;
    }
    .Heading {
        font-size: 36px;
        line-height: 44px;
    }

    .swiper {
        padding: 0 4%;
    }

    .swiper-scrollbar {
        height: 3px;
        top: auto;
        bottom: 10px;
        transform: translateY(0);
    }

    .swiper-card {
        width: 100%;
        border-radius: 50px;
    }
    
    .swiper-slide-img {
        width: 100%;
        height: auto;
    }

    .card2 {
        max-width: 100%;
        padding: 10px;
        border-radius: 10px;
    }
    
    .button {
        font-size: 14px;
        padding: 10px 15px;
    }
}

@media (max-width: 767.98px) {
    .card-title {
        font-size: 18px;
        
    }

    .card-text {
        font-size: 8px;
    }

    .overlay {
        bottom: 10px;
        left: 5px;
        font-size: 10px;
        padding: 3px;
    }

    .h4-title {
        font-size: 20px;
    }

    .card-title2 {
        font-size: 12px;
    }

    .card-text2 {
        font-size: 18px;
    }

    .card2 {
        padding: 8px;
        border-radius: 8px;
    }
}
</style>