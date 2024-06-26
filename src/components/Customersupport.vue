<template>
    <div class="gallery">
        <!-- <div class="image-container0"> -->
            <!-- <img src="../assets/customersupport.webp" alt="Gallery Image" class="customersuport-image" /> -->
            <!-- <div class="overlay"></div> -->
            <div class="content-container" style="color: #011936;">
                <h1>24/7 Customer Support</h1>
                <div class="breadcrumb_des">
                    <p>HOME &nbsp > Services > &nbsp </p>
                    <p class="breadcrumb_name"> 24/7 Customer Support</p>
                </div>
            </div>
            <div>
                <Vue3Lottie :animationData="CutomerSupportJSON2" :height="400" :width="800" />
            </div>
        <!-- </div> -->
    </div>
    <div class="container-fluid p-0" style="background-color:#f4fffd;">
        <div class="container-fluid">
            <div class="support-buttons-container my-4">
                <div class="support-buttons d-flex justify-content-start py-3">
                    <button @click="setActive(0)" class="btn" :class="{ 'active': activeButton === 0 }">Call center
                        support</button>
                    <button @click="setActive(1)" class="btn" :class="{ 'active': activeButton === 1 }">Message
                        Support</button>
                    <button @click="setActive(2)" class="btn" :class="{ 'active': activeButton === 2 }">Email
                        Support</button>
                </div>
                <div class="progress-container mt-2">
                    <div class="progress-bar" :style="progressBarStyle"></div>
                </div>
            </div>
        </div>
        <div class="container ">
            <div class="row align-items-center">
                <div class="col-12 col-md-6 mb-4 mb-md-0">
                    <h2 class="call-heading">Call Center Support</h2>
                    <p class="call-subtitle"> Lorem ipsum dolor sit amet consectetur. Nisi diam est fermentum tortor
                        tincidunt congue viverra. Pulvinar elit ipsum ut fermentum eget. Non egestas pellentesque tristique
                        turpis tortor habitasse ac vel enim. Pretium et sit lobortis enim est nunc ultrices mi quam. </p>
                    <p class="call-subtitle"> Lorem ipsum dolor sit amet consectetur. Nisi diam est fermentum tortor
                        tincidunt congue viverra. Pulvinar elit ipsum ut fermentum eget. Non egestas pellentesque tristique
                        turpis tortor habitasse ac vel enim. Pretium et sit lobortis enim est nunc ultrices mi quam. </p>
                    <p class="call-subtitle"> Lorem ipsum dolor sit amet consectetur. Nisi diam est fermentum tortor
                        tincidunt congue viverra. Pulvinar elit ipsum ut fermentum eget. Non egestas pellentesque tristique
                        turpis tortor habitasse ac vel enim. Pretium et sit lobortis enim est nunc ultrices mi quam. </p>
                </div>
                <div class="col-12 col-md-6 text-center">
                    <div class="image-container position-relative">
                        <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                        <!-- <img src="../assets/service.webp" class="img-fluid custom-image service-top"> -->
                        <Vue3Lottie :animationData="CutomerSupportJSON1" :height="300" :width="100" class="img-fluid custom-image service-top" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import CutomerSupportJSON1 from '../animations/customer_support_1.json'
import CutomerSupportJSON2 from '../animations/customer_support_2.json'


export default {
    components: {
        Vue3Lottie,
    },
    data() {
        return {
            activeButton: 0,
            buttonWidth: 220,
            buttonMargin: 10,
            CutomerSupportJSON1,
            CutomerSupportJSON2
        };
    },
    computed: {
        progressBarStyle() {
            const width = this.getButtonWidth();
            const margin = this.getButtonMargin();
            return {
                width: `${width}px`,
                left: `${this.activeButton * (width + margin)}px`,
            };
        },
    },
    methods: {
        setActive(index) {
            this.activeButton = index;
            this.updateProgressBar();
        },
        updateProgressBar() {
            this.$forceUpdate();
        },
        getButtonWidth() {
            // Adjust button width based on screen size
            return window.innerWidth <= 767 ? window.innerWidth * 0.26 : this.buttonWidth;
        },
        getButtonMargin() {
            // Adjust button margin based on screen size
            return window.innerWidth <= 767 ? 5 : this.buttonMargin;
        }

    },
    mounted() {
        window.addEventListener('resize', this.updateProgressBar);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateProgressBar);
    }
};
</script>

<style scoped>
.gallery {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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

/* .customersuport-image {
    justify-content: center;
} */

.customer-support {
    color: #011936;
}

.support-buttons-container {
    text-align: left;
    margin-top: 0px !important;
    margin-left: 10%;
}

.support-buttons .btn {
    border-radius: 20px;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    margin: 0 5px;
    width: 220px;
    height: 46px;
    border: 1px solid black;
}

.support-buttons .btn.active {
    background-color: #0b1a34;
    color: #fff;
    border: none;
}

.support-buttons .btn-outline-primary {
    color: #0b1a34;
    border-color: #0b1a34;
}

.support-buttons .btn-outline-primary:hover {
    background-color: #0b1a34;
    color: #fff;
}

.progress-container {
    width: 65%;
    height: 2px;
    margin: 10px 0;
    background-color: #e9ecef;
    position: relative;
}

.progress-bar {
    height: 100%;
    background-color: #ff4a57;
    position: absolute;
    transition: left 0.3s;
}

.call-heading {
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 600;
    line-height: 43.88px;
    text-align: left;
    color: #011936;
}

.call-subtitle {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.38px;
    text-align: left;
    color: #333333;
}

.custom-image {
    border-radius: 20px;
    max-width: 100%;
}

.image-container {
    position: relative;
    width: 474px;
    height: 400px;
    gap: 0px;
    left: 15%;
}

.service-blue {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    width: 80%;
    max-width: 400px;
}

.service-top {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 70%;
    max-width: 350px;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
}

@media (max-width: 767.98px) {
    .hero-text {
        left: 20px;
        transform: translateY(-50%);
    }

    .breadcrumb_des {
        display: flex;
        flex-direction: row;
        font-size: 14px;
    }

    .breadcrumb_name {
        color: #011936;
        font-weight: 700;
    }

    .support-buttons-container {
        margin-left: 5%;
    }

    .support-buttons .btn {
        font-size: 10px;
        width: 95px;
        height: 53px;
    }

    .call-heading {
        font-size: 28px;
        line-height: 35px;
    }

    .call-subtitle {
        font-size: 16px;
        line-height: 20px;
    }

    .progress-container {
        width: 100%;
    }

    .service-blue {
        width: 100%;
        max-width: 300px;
    }

    .service-top {
        width: 90%;
        max-width: 270px;
    }

    .image-container {
        left: 0;
        width: 100%;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .support-buttons-container {
        margin-left: 7%;
    }

    .support-buttons .btn {
        font-size: 12px;
        width: 220px;
        height: 46px;
    }

    .call-heading {
        font-size: 32px;
        line-height: 40px;
    }

    .call-subtitle {
        font-size: 18px;
        line-height: 22px;
    }

    .progress-container {
        width: 70%;
    }

    .service-blue {
        width: 90%;
        max-width: 350px;
    }

    .service-top {
        width: 80%;
        max-width: 300px;
    }

    .image-container {
        left: 10%;
        width: 90%;
    }
}
</style>
