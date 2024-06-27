<template>
    <div class="gallery">
        <div class="hero-section">
            <div class="overlay"></div>
            <div class="breadcrumbs">
                <h1>Inland Transportation</h1>
                <div class="breadcrumb_des">
                    <p>HOME &nbsp > SERVICES > &nbsp </p>
                    <p class="breadcrumb_name"> INLAND TRANSPORTATION</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0" style="background-color:#f4fffd;">
        <div class="container-fluid">
            <div class="support-buttons-container ">
                <div class="support-buttons d-flex justify-content-start py-3">
                    <button @click="setActive(0)" class="btn" :class="{ 'active': activeButton === 0 }">Towing
                        Services</button>
                    <button @click="setActive(1)" class="btn " :class="{ 'active': activeButton === 1 }">Quick
                        Pickup</button>
                    <button @click="setActive(2)" class="btn " :class="{ 'active': activeButton === 2 }">Towing
                        Policy</button>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" :style="progressBarStyle">
                    </div>
                </div>
            </div>
            <div class="container ">
                <div v-show="activeButton === 0">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 mb-4 mb-md-4">
                            <h2 class="call-heading">Towing Services</h2>
                            <p class="call-subtitle"> Towing services encompass a vital aspect of roadside assistance,
                                providing essential support to motorists facing vehicle breakdowns or accidents. These
                                services involve the transportation of vehicles that are immobilized due to mechanical
                                failures, collisions, or other emergencies. Towing companies deploy specialized vehicles
                                equipped to safely haul cars, trucks, motorcycles, and other vehicles to designated
                                locations, such as repair shops or impound lots.<br><br> The primary function of towing
                                services is to rescue stranded vehicles from inconvenient or hazardous locations and
                                transport them to safety or repair facilities. They play a critical role in maintaining
                                traffic flow, ensuring road safety, and assisting drivers in distress. Additionally, towing
                                professionals are trained to handle various roadside situations, including jump-starts, tire
                                changes, and lockouts, offering comprehensive assistance beyond mere towing.<br><br>
                                Efficient towing services prioritize prompt response times and adhere to safety protocols to
                                minimize risks during vehicle retrieval and transport. By providing reliable and expedient
                                assistance, towing companies contribute significantly to the convenience, safety, and peace
                                of mind of motorists navigating unforeseen road challenges.</p>
                        </div>
                        <div class="col-12 col-md-6 text-center">
                            <div class="image-container position-relative">
                                <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                                <img src="../assets/service.webp" class="img-fluid custom-image service-top">
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="activeButton === 1">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 mb-4 mb-md-4">
                            <h2 class="call-heading">Quick Pickup</h2>
                            <p class="call-subtitle">Quick pickup services cater to the immediate retrieval and
                                transportation needs of individuals and businesses alike. Whether it's parcels, groceries,
                                or important documents, these services offer rapid collection and delivery solutions
                                designed to streamline logistics and meet tight deadlines.<br><br> The hallmark of quick
                                pickup services lies in their efficiency and responsiveness. They leverage modern technology
                                and strategic operational planning to ensure swift turnaround times, enabling customers to
                                schedule pickups at their convenience and receive timely deliveries. This agility makes
                                quick pickup services indispensable for businesses requiring fast distribution channels and
                                individuals seeking prompt and reliable transportation solutions.<br><br> By focusing on
                                speed, reliability, and customer satisfaction, quick pickup services enhance operational
                                efficiency, support time-sensitive deliveries, and contribute to seamless logistics
                                management across various industries.</p>
                        </div>
                        <div class="col-12 col-md-6 text-center">
                            <div class="image-container position-relative">
                                <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                                <img src="../assets/service.webp" class="img-fluid custom-image service-top">
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="activeButton === 2">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 mb-4 mb-md-4">
                            <h2 class="call-heading">Towing Policy</h2>
                            <p class="call-subtitle">A towing policy outlines the guidelines and procedures governing the
                                towing of vehicles in specific situations, typically enforced by municipalities, property
                                owners, or towing companies. This policy defines the circumstances under which vehicles may
                                be towed, such as unauthorized parking, safety hazards, or legal violations. It also details
                                the responsibilities of vehicle owners, procedures for notifying owners of towed vehicles,
                                and the process for reclaiming impounded vehicles.<br><br> The primary objectives of a
                                towing policy are to maintain order, ensure public safety, and protect private property
                                rights. It provides clarity and transparency regarding towing practices, including fees and
                                penalties associated with towing and impoundment. Effective towing policies aim to strike a
                                balance between enforcing regulations and providing fair treatment to vehicle owners,
                                thereby contributing to safer and more orderly communities.<br><br> By establishing clear
                                guidelines and procedures, a towing policy helps mitigate disputes, promote compliance with
                                regulations, and uphold standards of safety and accessibility on public and private
                                properties. It serves as a crucial tool for managing parking and traffic issues while
                                safeguarding the interests of both vehicle owners and the community at large.</p>
                        </div>
                        <div class="col-12 col-md-6 text-center">
                            <div class="image-container position-relative">
                                <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                                <img src="../assets/service.webp" class="img-fluid custom-image service-top">
                            </div>
                        </div>
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
            buttonWidth: 200, // Default button width for larger screens
            buttonMargin: 10, // Default button margin
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

.hero-section {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
}

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
    width: 200px;
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
    width: 58%;
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

    .support-buttons .btn {
        font-size: 10px;
        width: 100px;
        height: 40px;
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

    .breadcrumb_des {
        display: flex;
        flex-direction: row;
        font-size: 12px;
    }

    .breadcrumb_name {
        color: #011936;
        font-weight: 700;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .support-buttons-container {
        margin-left: 7%;
    }

    .support-buttons .btn {
        font-size: 12px;
        width: 200px;
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
}</style>