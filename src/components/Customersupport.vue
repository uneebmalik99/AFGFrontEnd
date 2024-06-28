<template>
    <div class="gallery">
        <div class="content-container" style="color: #011936;">
            <h1 class="text-center mt-5">24/7 Customer Support</h1>
            <div class="breadcrumb_des text-center">
                <p>HOME &nbsp > Services > &nbsp </p>
                <p class="breadcrumb_name text-center"> 24/7 Customer Support</p>
            </div>
        </div>
        <div class="animation">
            <Vue3Lottie :animationData="CutomerSupportJSON2" :height="400" :width="800" />
        </div>
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
        <div class="container">
            <!-- Support Details -->
            <div v-show="activeButton === 0">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 mb-4 mb-md-4">
                        <h2 class="call-heading">Call Center Support</h2>
                        <p class="call-subtitle"> Call Center Support is a crucial function that provides customer service
                            through various communication channels, including phone calls, emails, and live chats. Trained
                            professionals handle customer inquiries, resolve issues, and offer technical assistance,
                            ensuring that customers receive prompt and effective solutions. This support can range from
                            answering questions about products and services to troubleshooting technical problems and
                            processing orders. <br><br> The primary goal of call center support is to enhance customer
                            satisfaction and loyalty by delivering high-quality service. By operating 24/7, call centers
                            ensure that customers can get help whenever they need it, regardless of time zones. This
                            continuous availability, combined with the expertise of dedicated agents, helps businesses
                            maintain positive customer relationships and drive long-term success.</p>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="image-container position-relative">
                            <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                            <Vue3Lottie :animationData="CutomerSupportJSON1" :height="300" :width="100"
                                class="img-fluid custom-image service-top" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="activeButton === 1">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 mb-4 mb-md-4">
                        <h2 class="call-heading">Message Support</h2>
                        <p class="call-subtitle"> Message Support involves providing customer assistance and resolving
                            inquiries through written communication channels such as text messages, online chats, and
                            messaging apps. This form of customer service allows individuals to interact conveniently and
                            efficiently with businesses without the need for direct verbal communication. Message support
                            agents are trained to handle various queries, ranging from product information requests to
                            technical troubleshooting and order tracking. <br><br> The key advantage of message support lies
                            in its flexibility and accessibility. Customers can initiate conversations at their convenience
                            and receive responses in real-time or within a reasonable timeframe, depending on the service
                            level agreements (SLAs) set by the company. This mode of support is particularly beneficial for
                            businesses looking to cater to tech-savvy and mobile-oriented customers who prefer non-verbal
                            communication channels. By offering reliable and responsive message support, businesses can
                            enhance customer satisfaction, streamline operations, and strengthen their overall customer
                            service strategy.</p>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="image-container position-relative">
                            <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                            <Vue3Lottie :animationData="CutomerSupportJSON1" :height="300" :width="100"
                                class="img-fluid custom-image service-top" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="activeButton === 2">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 mb-4 mb-md-4">
                        <h2 class="call-heading">Email Support</h2>
                        <p class="call-subtitle"> Email Support refers to a customer service approach where businesses
                            interact with their customers and resolve queries through email correspondence. It plays a
                            crucial role in providing efficient and documented solutions to customer inquiries, issues, and
                            requests. Email support teams are equipped to handle a wide range of customer concerns,
                            including product inquiries, technical assistance, billing inquiries, and more complex
                            problem-solving.<br><br> One of the primary advantages of email support is its asynchronous
                            nature, allowing customers to send queries at any time and receive responses within a reasonable
                            timeframe. This flexibility accommodates customers across different time zones and schedules,
                            enhancing accessibility and convenience. Moreover, email support enables businesses to maintain
                            a record of interactions, which can aid in tracking customer issues, analyzing trends, and
                            improving overall service quality.<br><br> Effective email support is characterized by prompt
                            responses, clear communication, and personalized solutions tailored to each customer's needs. By
                            leveraging email as a customer service channel, businesses can foster positive relationships,
                            streamline communication, and uphold high standards of customer satisfaction.</p>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="image-container position-relative">
                            <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                            <Vue3Lottie :animationData="CutomerSupportJSON1" :height="300" :width="100"
                                class="img-fluid custom-image service-top" />
                        </div>
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
.content-container {
    opacity: 0;
    /* Start with 0 opacity */
    animation: fadeIn 1s forwards;
    /* Animation name, duration, retain final state */
}

.content-container h1,
.content-container .breadcrumb_des {
    transform: translateX(-100%);
    /* Start from outside the left of the viewport */
}

.content-container h1 {
    animation: slideInLeft 1s forwards;
    /* Slide in animation for h1 */
    animation-delay: 0.6s;
    /* Delay for animation to start after container animation */
}

.content-container .breadcrumb_des {
    animation: slideInRight 1s forwards;
    /* Slide in animation for breadcrumb_des */
    animation-delay: 0.6s;
    /* Delay for animation to start after container animation */
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

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

.support-details {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

    .support-details {
        padding: 10px;
    }

    .animation {
        display: none;
    }

    .text-center {
        font-size: 16px;
    }
    .content-container h1{
        font-size: 30px;
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
}</style>
