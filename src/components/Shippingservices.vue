<template>
    <div class="gallery ">
        <div class="image-container0">
            <div class="d-flex justify-content-end" style="margin-right: 15%;">
                <img src="../assets/container_ship-heading.png" alt="Gallery Image" class="shipping-image" />
            </div>
            <!-- <div class="overlay"></div> -->
            <div class="breadcrumbs">
                <h1>Shipping Services</h1>
                <div class="breadcrumb_des">
                    <p>HOME &nbsp > SERVICES > &nbsp </p>
                    <p class="breadcrumb_name"> SHIPPING SERVICES</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0" style="background-color:#f4fffd;">
        <div class="container-fluid">
            <div class="support-buttons-container my-4">
                <div class="support-buttons d-flex justify-content-start py-3">
                    <button @click="setActive(0)" class="btn" :class="{ 'active': activeButton === 0 }">Shipping
                        Services</button>
                    <button @click="setActive(1)" class="btn " :class="{ 'active': activeButton === 1 }">Global
                        Reach</button>
                    <button @click="setActive(2)" class="btn" :class="{ 'active': activeButton === 2 }">Direct Ship Line
                        Partnerships</button>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" :style="progressBarStyle"></div>
                </div>
            </div>
        </div>
        <div class="container ">
            <div v-show="activeButton === 0">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 mb-4 mb-md-4">
                        <h2 class="call-heading">Shipping Services</h2>
                        <p class="call-subtitle"> Shipping services encompass a range of logistical operations involved in
                            transporting goods from one location to another. These services are crucial for businesses and
                            individuals seeking to move products efficiently and reliably across local, national, or
                            international borders.<br><br> Key components of shipping services typically include
                            transportation planning, freight forwarding, warehousing, and distribution. Providers of
                            shipping services manage the entire logistics chain, ensuring that goods are handled, stored,
                            and delivered in a timely and secure manner.<br><br> Modern shipping services leverage advanced
                            technologies and global networks to offer comprehensive solutions tailored to the specific needs
                            of various industries. These may include sea freight, air freight, road transport, and
                            multimodal transport options, each optimized for different types of cargo and destinations.</p>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="image-container position-relative">
                            <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                            <img src="../assets/service.webp" class="img-fluid custom-image service-top">Shipping Services
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="activeButton === 1">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 mb-4 mb-md-4">
                        <h2 class="call-heading">Global Reach</h2>
                        <p class="call-subtitle">Global reach refers to the extensive geographic coverage and operational
                            capabilities that enable businesses to operate and serve customers worldwide. It signifies the
                            ability of an organization to expand its presence beyond local or regional boundaries, tapping
                            into international markets and establishing a robust global footprint.<br><br> Achieving global
                            reach involves strategic planning, market research, and logistical infrastructure to navigate
                            diverse regulatory environments and cultural landscapes. It encompasses various aspects such as
                            international sales and distribution networks, cross-border logistics, and localized customer
                            support.<br><br> Businesses with global reach can leverage economies of scale, access new growth
                            opportunities, and diversify revenue streams across different markets. They often employ
                            sophisticated supply chain management strategies, utilize technology for real-time communication
                            and data analytics, and adapt services to meet local market demands while maintaining global
                            standards.</p>
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
                        <h2 class="call-heading">Direct Ship Line Partnerships</h2>
                        <p class="call-subtitle">Direct ship line partnerships refer to collaborative arrangements between
                            shipping companies and logistics providers aimed at optimizing transport efficiencies and
                            enhancing service offerings. These partnerships facilitate direct access to shipping routes and
                            cargo capacity, reducing transit times and costs while ensuring reliable delivery
                            schedules.<br><br> By forging direct ship line partnerships, organizations can streamline their
                            supply chain operations, improve inventory management, and respond more flexibly to market
                            demands. These collaborations often involve agreements for shared resources, joint investments
                            in infrastructure, and coordinated logistics planning to meet the needs of global trade.<br><br>
                            Direct ship line partnerships are pivotal in fostering strategic alliances within the shipping
                            industry, enabling stakeholders to leverage combined expertise and resources for competitive
                            advantage. They contribute to operational resilience, sustainability initiatives, and customer
                            satisfaction by ensuring seamless and efficient movement of goods across international borders.
                        </p>
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
</template>

<script>
export default {
    data() {
        return {
            activeButton: 0,
            buttonWidth: 280, // Default button width for larger screens
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
    color: #011936;
    display: flex;
    flex-direction: row;
}

.breadcrumbs h1 {
    color: #011936;
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

.shipping-image {
    width: 400px;
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
    width: 280px;
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
    .breadcrumb_des {
        display: flex;
        flex-direction: row;
        font-size: 14px;
    }

    .breadcrumb_name {
        color: #011936;
        font-weight: 700;
    }

    .support-buttons .btn {
        font-size: 10px;
        width: 110px;
        height: 59px;
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
        width: 280px;
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