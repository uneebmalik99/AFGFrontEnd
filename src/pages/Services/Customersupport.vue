<template>
    <div class="container-fluid p-0" style="background-color:#f4fffd;">
        <div class="hero-section">
            <img src="../assets/customersupport.webp" alt="Ship Image" class="img-fluid w-100 hero-image">
            <div class="hero-text">
                <h1 class="display-4">24/7 Customer Support</h1>
                <p>
                    <span class="home">HOME</span>
                    <span class="arrow"> &gt; </span>
                    <span class="services">SERVICES</span>
                    <span class="arrow"> &gt; </span>
                    <span class="customer-support">24/7 Customer Support</span>
                </p>
            </div>
        </div>
        <div class="container-fluid">
            <div class="support-buttons-container my-4">
                <div class="support-buttons d-flex justify-content-start">
                    <button @click="setActive(0)" class="btn" :class="{'active': activeButton === 0}">Call center support</button>
                    <button @click="setActive(1)" class="btn btn-outline-primary" :class="{'active': activeButton === 1}">Message Support</button>
                    <button @click="setActive(2)" class="btn btn-outline-primary" :class="{'active': activeButton === 2}">Email Support</button>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" :style="progressBarStyle"></div>
                </div>
            </div>
        </div>
        <div class="container mb-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2 class="call-heading">Call Center Support</h2>
                    <p class="call-subtitle">
                        Lorem ipsum dolor sit amet consectetur. Nisi diam est fermentum tortor tincidunt congue viverra.
                        Pulvinar elit ipsum ut fermentum eget. Non egestas pellentesque tristique turpis tortor
                        habitasse ac vel enim. Pretium et sit lobortis enim est nunc ultrices mi quam.
                    </p>
                    <p class="call-subtitle">
                        Lorem ipsum dolor sit amet consectetur. Nisi diam est fermentum tortor tincidunt congue viverra.
                        Pulvinar elit ipsum ut fermentum eget. Non egestas pellentesque tristique turpis tortor
                        habitasse ac vel enim. Pretium et sit lobortis enim est nunc ultrices mi quam.
                    </p>
                    <p class="call-subtitle">
                        Lorem ipsum dolor sit amet consectetur. Nisi diam est fermentum tortor tincidunt congue viverra.
                        Pulvinar elit ipsum ut fermentum eget. Non egestas pellentesque tristique turpis tortor
                        habitasse ac vel enim. Pretium et sit lobortis enim est nunc ultrices mi quam.
                    </p>
                </div>
                <div class="col-md-6 position-relative text-center">
                    <div class="image-container">
                        <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                        <img src="../assets/service.webp" class="img-fluid custom-image service-top">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeButton: 0,
        };
    },
    computed: {
        progressBarStyle() {
            const buttonWidth = 200; // approximate width of each button, adjust as needed
            const buttonMargin = 10; // approximate margin of each button, adjust as needed
            return {
                width: `${buttonWidth}px`,
                left: `${this.activeButton * (buttonWidth + buttonMargin)}px`,
            };
        },
    },
    methods: {
        setActive(index) {
            this.activeButton = index;
        },
    },
};
</script>

<style scoped>
.hero-section {
    position: relative;
    text-align: left;
    color: white;
}

.hero-image {
    height: 500px;
    object-fit: cover;
    width: 100%;
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    font-family: Montserrat, sans-serif;
}

.hero-text h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 68px;
}

.hero-text p {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
}

.home,
.services,
.customer-support,
.arrow {
    font-family: Montserrat, sans-serif;
}

.arrow {
    color: #ffffff;
}

.customer-support {
    color: #011936;
}

.support-buttons-container {
    text-align: left;
    margin-top: 20px;
    margin-left: 10%;
}

.support-buttons .btn {
    border-radius: 20px;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    font-family: Montserrat, sans-serif;
    font-size: 20px;
    margin: 0 5px;
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
    width: 100%;
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
    font-weight: 700;
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
    opacity: 0px;
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

.container {
    width: Fixed (1, 196px)px;
    height: Hug (457px)px;
    top: 636px;
    left: 122px;
    padding: 9px 0px 9px 0px;
    gap: 0px;
    justify-content: space-between;
    opacity: 0px;
}

@media (max-width: 767.98px) {
    .hero-text h1 {
        font-size: 36px;
        line-height: 48px;
    }

    .hero-text p {
        font-size: 16px;
        line-height: 20px;
    }

    .support-buttons .btn {
        font-size: 16px;
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
}
</style>
