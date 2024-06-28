<template>
    <div class="gallery">
        <div class="hero-section">
            <div class="overlay"></div>
            <div class="breadcrumbs">
                <h1>Custom Clearance Services in UAE</h1>
                <div class="breadcrumb_des">
                    <p>HOME &nbsp > SERVICES > &nbsp </p>
                    <p class="breadcrumb_name"> CUSTOM CLEARANCE SERVICES IN UAE</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0" style="background-color:#f4fffd;">
        <div class="container-fluid">
            <div class="support-buttons-container my-4">
                <div class="support-buttons d-flex justify-content-start py-3">
                    <button @click="setActive(0)" class="btn" :class="{ 'active': activeButton === 0 }">Custom Clearance
                        Services</button>
                    <button @click="setActive(1)" class="btn " :class="{ 'active': activeButton === 1 }">Notice for
                        Arrival</button>
                    <button @click="setActive(2)" class="btn " :class="{ 'active': activeButton === 2 }">Documentation &
                        Attestation</button>
                </div>
                <div class="progress-container mt-2">
                    <div class="progress-bar" :style="progressBarStyle">
                    </div>
                </div>
            </div>
            <div class="container ">
                <div v-show="activeButton === 0">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 mb-4 mb-md-4">
                            <h2 class="call-heading">Custom Clearance Service</h2>
                            <p class="call-subtitle"> Customs clearance service refers to the process of complying with
                                customs regulations and formalities for importing or exporting goods across international
                                borders. It involves the submission of necessary documents, payment of duties and taxes, and
                                inspection of goods by customs authorities to facilitate smooth and legal entry or exit of
                                shipments.<br><br> This service is essential for ensuring compliance with local and
                                international trade laws, as well as for avoiding delays or penalties associated with
                                improper documentation or declaration of goods. Customs clearance agents or brokers
                                specialize in navigating the complexities of customs procedures, representing importers and
                                exporters to customs authorities, and ensuring that shipments move swiftly through the
                                clearance process.<br><br> Efficient customs clearance services contribute to supply chain
                                efficiency by reducing transit times, minimizing storage costs at ports or airports, and
                                enabling timely delivery of goods to customers. Businesses often rely on experienced customs
                                clearance providers to streamline their international trade operations, mitigate risks
                                associated with customs compliance, and maintain seamless global supply chain management.
                            </p>
                        </div>
                        <div class="col-12 col-md-6 text-center">
                            <div class="image-container position-relative">
                                <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                                <img src="../assets/service.webp" class="img-fluid custom-image service-top">Shipping
                                Services
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="activeButton === 1">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 mb-4 mb-md-4">
                            <h2 class="call-heading">Notice for Arrival</h2>
                            <p class="call-subtitle"> A notice for arrival is a formal communication sent to inform
                                recipients about the imminent arrival of a shipment, vehicle, or personnel at a designated
                                location or facility. It serves as an advance notification that allows relevant parties to
                                prepare for the arrival, coordinate logistics, and ensure timely reception and
                                processing.<br><br> In logistics and transportation contexts, notices for arrival are
                                crucial for planning and operational efficiency. They typically include essential details
                                such as the estimated arrival date and time, the nature of the arrival (e.g., cargo
                                shipment, passenger transport), and any specific instructions or requirements for handling
                                the arrival.<br><br> This notification helps recipients anticipate and manage resources
                                effectively, whether it involves arranging for personnel to be on-site, preparing storage or
                                handling facilities, or ensuring compliance with regulatory or safety protocols associated
                                with the arrival process.</p>
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
                            <h2 class="call-heading">Documentation & Attestation</h2>
                            <p class="call-subtitle"> Documentation and attestation refer to the process of verifying,
                                validating, and certifying official documents and records to ensure their authenticity and
                                compliance with legal, regulatory, or organizational requirements. This process is essential
                                in various industries, including legal, financial, international trade, and immigration,
                                where accurate and verified documentation is crucial for transparency, legality, and
                                accountability.<br><br> In business and legal contexts, documentation and attestation
                                involve thorough review and validation of documents such as contracts, agreements,
                                certifications, and financial statements. This verification ensures that all information
                                presented is accurate, complete, and legally binding, thereby mitigating risks related to
                                fraud, misrepresentation, or non-compliance.<br><br> Attestation, often performed by
                                authorized individuals or entities, confirms the authenticity of documents through
                                signatures, stamps, or official seals. This certification serves as a guarantee of the
                                document's validity and reliability, providing confidence to stakeholders, clients, and
                                regulatory bodies.</p>
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
            buttonWidth: 283, // Default button width for larger screens
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
    width: 283px;
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
    width: 87%;
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
        font-size: 11px;
    }

    .breadcrumb_name {
        color: #011936;
        font-weight: 700;
        font-size: 11px;
    }

    .support-buttons .btn {
        font-size: 8px;
        width: 99px;
        height: 50px;
    }

    .call-heading {
        font-size: 18px;
        line-height: 35px;
    }

    .call-subtitle {
        font-size: 14px;
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
        font-size: 21px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .support-buttons-container {
        margin-left: 7%;
    }

    .support-buttons .btn {
        font-size: 12px;
        width: 283px;
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
