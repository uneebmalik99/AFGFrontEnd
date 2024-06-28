<template>
    <div class="gallery">
        <div class="hero-section">
            <div class="overlay"></div>
            <div class="breadcrumbs">
                <h1>Half-Cut and Dismantling</h1>
                <div class="breadcrumb_des">
                    <p>HOME &nbsp > SERVICES > &nbsp </p>
                    <p class="breadcrumb_name"> HALF-CUT AND DISMANTLING</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0" style="background-color:#f4fffd;">
        <div class="container-fluid">
            <div class="support-buttons-container my-4">
                <div class="support-buttons d-flex justify-content-start py-3">
                    <button @click="setActive(0)" class="btn" :class="{ 'active': activeButton === 0 }">Half-Cut and
                        Dismantling</button>
                    <button @click="setActive(1)" class="btn " :class="{ 'active': activeButton === 1 }">Cost-Effective
                        Solutions</button>
                    <button @click="setActive(2)" class="btn " :class="{ 'active': activeButton === 2 }">Accuracy &
                        Skill</button>
                </div>
                <div class="progress-container mt-2">
                    <div class="progress-bar" :style="progressBarStyle"></div>
                </div>
            </div>
        </div>
        <div class="container ">
            <div v-show="activeButton === 0">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 mb-4 mb-md-4">
                        <h2 class="call-heading">Half-Cut and Dismantling</h2>
                        <p class="call-subtitle">Half-cut and dismantling services involve the partial disassembly of
                            vehicles or machinery for transportation or modification purposes. This process typically
                            includes carefully separating components to facilitate easier handling, shipping, or reassembly
                            at another location. In the automotive and industrial sectors, half-cut and dismantling services
                            are crucial for transporting large or complex machinery efficiently.<br><br> Logistics providers
                            specializing in half-cut and dismantling possess the expertise and equipment necessary to
                            execute these tasks safely and efficiently. They ensure that components are carefully labeled,
                            stored, and transported to minimize damage and ensure accurate reassembly. These services are
                            particularly valuable in industries requiring precise engineering and logistical solutions for
                            heavy or oversized equipment.</p>
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
                        <h2 class="call-heading">Cost-Effective Solutions</h2>
                        <p class="call-subtitle">Cost-effective solutions refer to strategies, services, or products that
                            provide maximum value for money spent, minimizing expenses while achieving desired outcomes. In
                            logistics and business operations, opting for cost-effective solutions involves careful
                            consideration of factors such as efficiency, reliability, and affordability.<br><br> Logistics
                            companies often offer cost-effective solutions by optimizing routes, consolidating shipments, or
                            leveraging technology to streamline operations. This approach not only reduces direct costs but
                            also enhances overall productivity and customer satisfaction. Cost-effective solutions are
                            essential for businesses looking to maintain competitiveness and profitability in dynamic
                            markets.<br><br> Choosing cost-effective logistics solutions involves assessing total cost of
                            ownership, including initial expenses, operational costs, and long-term benefits. It requires
                            balancing cost savings with quality and service levels to meet organizational goals effectively.
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
            <div v-show="activeButton === 2">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 mb-4 mb-md-4">
                        <h2 class="call-heading">Accuracy & Skill</h2>
                        <p class="call-subtitle">Accuracy and skill are crucial attributes in logistics and service
                            industries, emphasizing precision, proficiency, and expertise in delivering reliable outcomes.
                            In logistics, accuracy entails meticulous attention to detail throughout processes like
                            inventory management, order fulfillment, and shipment tracking. It ensures that goods are
                            handled and delivered with precision, minimizing errors and delays.<br><br> Skill, on the other
                            hand, encompasses the proficiency and competence of personnel involved in logistics operations.
                            Skilled professionals possess the knowledge and capability to navigate complexities in
                            transportation, warehousing, and supply chain management effectively. Their expertise
                            contributes to operational efficiency, timely deliveries, and customer satisfaction.<br><br>
                            Combining accuracy and skill in logistics operations enhances reliability, reduces operational
                            costs, and strengthens competitive advantage. It fosters a culture of excellence where precision
                            and proficiency drive organizational success and customer loyalty.</p>
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
            buttonWidth: 255,
            buttonMargin: 10,
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
    font-weight: 900;
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
    width: 255px;
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
    width: 83%;
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

.container {
    width: Fixed (1, 196px)px;
    height: Hug (457px)px;
    top: 636px;
    left: 122px;
    gap: 0px;
    justify-content: space-between;
}

@media (max-width: 767.98px) {
    .breadcrumb_des {
        display: flex;
        flex-direction: row;
        font-size: 13px;
    }

    .breadcrumb_name {
        color: #011936;
        font-weight: 700;
        font-size: 13px;
    }

    .support-buttons .btn {
        font-size: 9px;
        width: 100px;
        height: 50px;
    }

    .call-heading {
        font-size: 25px;
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
    .breadcrumbs h1{
        font-size: 28px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .support-buttons-container {
        margin-left: 7%;
    }

    .support-buttons .btn {
        font-size: 12px;
        width: 255px;
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
