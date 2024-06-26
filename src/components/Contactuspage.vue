<template>
    <div class="image-container">
        <!-- <img src="../assets/contactus.webp" alt="Gallery Image" class="gallery-image" />
        <div class="overlay"></div> -->
        <div class="content-container" style="color: #011936;">
            <h1 class="">Contact Us</h1>
            <div class="breadcrumb_des">
                <p>HOME &nbsp > &nbsp </p>
                <p class="breadcrumb_name"> CONTACT US</p>
            </div>
        </div>
        <div>
            <Vue3Lottie :animationData="ContactUsJSON" :height="400" :width="800" />
        </div>
    </div>
    <div style="background-color: #f4fffd; ">
        <div class="right_div">
            <div class="right_div_box">
            </div>
        </div>
        <div class="container">
            <div class="py-0 col-sm-12 col-md-12 col-lg-12 mt-5 main_header">
                <h3 class="contactus-subtitle">Get In <span class="touch">Touch</span></h3>
                <div>
                    <p class="text">Feel free to contact us any time.</p>
                </div>
            </div>
            <div class="row col-sm-12 col-md-12 col-lg-12" style="display: flex; justify-content: center;">
                <div class="col-sm-10 col-md-10 col-lg-6 ">
                    <form @submit.prevent="sendEmail">
                        <input type="text" v-model="form.name" class="form_name col-12 mt-4 py-2" placeholder="Name *">
                        <input type="email" v-model="form.email" class="form_email col-12 mt-4 py-2" placeholder="Email">
                        <input type="tel" v-model="form.phone" class="form_phoneno col-12 mt-4 py-2"
                            placeholder="Phone number *">
                        <textarea v-model="form.message" class="form-control form_message col-12 mt-4 py-2"
                            placeholder="Write your message here" rows="3"></textarea>
                        <button type="submit" :disabled="isSending" class="btn btn-primary btn-lg mt-4 col-12"
                            style="background-color: #ed254e; border: 0px;"> {{ isSending ? 'SENDING...' : 'SEND MESSAGE' }}
                        </button>
                    </form>
                    <div class="contact-info mt-5 col-sm-12 col-md-12 col-lg-12 py-4">
                        <div class=" py-1 details_address">
                            <Vue3Lottie :animationData="LocationJSON" :height="50" :width="50" />
                            <!-- <img src="../assets/address2.webp" class="icon" alt="Address Icon"> -->
                            <div class="box_details_2">
                                <h5>Address</h5>
                                <p class="text1 ">AFG Global Shipping 290 NYE AVE, Irvington, NJ 07111</p>
                            </div>
                        </div>
                        <div class=" py-1  details_address">
                            <Vue3Lottie :animationData="PhoneJSON" :height="50" :width="50" />
                            <!-- <img src="../assets/phone.webp" class="icon" alt="Address Icon"> -->
                            <div class="box_details_2">
                                <h5>Phone</h5>
                                <p class="text1 ">+1 862 237 7066</p>
                            </div>
                        </div>
                        <div class=" py-1  details_address">
                            <Vue3Lottie :animationData="EmailJSON" :height="50" :width="50" />
                            <!-- <img src="../assets/email2.webp" class="icon" alt="Address Icon"> -->
                            <div class="box_details_2">
                                <h5>Email</h5>
                                <p class="text1 ">csupport@afgglobalusa.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div id="map" class="position-absolute map-image" style=" width: 80%; height: 100%;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import { Vue3Lottie } from 'vue3-lottie'

import ContactUsJSON from '../animations/contact-us.json'
import LocationJSON from '../animations/location.json'
import PhoneJSON from '../animations/phone.json'
import EmailJSON from '../animations/email.json'


const instance = axios.create({
    baseURL: '/sendEmailAPI'
});

export default {
    components: {
        Vue3Lottie,
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            isSending: false,
            ContactUsJSON,
            LocationJSON,
            PhoneJSON,
            EmailJSON
        };
    },
    methods: {
        initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 40.720163240204926, lng: -74.21926653069052 }, // AFG Global Shipping coordinates
                zoom: 15,
            });
            new google.maps.Marker({
                position: { lat: 40.720163240204926, lng: -74.21926653069052 },
                map,
                title: "AFG Global Shipping",
            });
        },
        sendEmail() {
            this.isSending = true;
            const $toast = useToast();
            instance.post('/sendEmail.php', this.form)
                .then(response => {
                    $toast.success(response.data.message, { position: 'top-right', timeout: 5000 });
                })
                .catch(error => {
                    $toast.error(error.response.data.message || 'Failed to send email.', { position: 'top-right', timeout: 5000 });
                })
                .finally(() => {
                    this.isSending = false;
                    this.clearForm();
                });
        },
        clearForm() {
            this.form.name = '';
            this.form.email = '';
            this.form.phone = '';
            this.form.message = '';
        }
    },
    mounted() {
        this.initMap();
    }
};
</script>
  
<style scoped>
.contactus-subtitle {
    opacity: 0;
    /* Start with 0 opacity */
    animation: fadeIn 3s forwards;
    /* Animation name, duration, and retain final state */
}

@keyframes fadeIn {
    from {
        opacity: 0;
        /* Start opacity */
    }

    to {
        opacity: 1;
        /* End opacity */
    }
}

.content-container {
    opacity: 0; /* Start with 0 opacity */
    animation: fadeIn 1s forwards; /* Animation name, duration, retain final state */
}

.content-container h1,
.content-container .breadcrumb_des {
    transform: translateX(-100%); /* Start from outside the left of the viewport */
}

.content-container h1 {
    animation: slideInLeft 1s forwards; /* Slide in animation for h1 */
    animation-delay: 0.6s; /* Delay for animation to start after container animation */
}

.content-container .breadcrumb_des {
    animation: slideInRight 1s forwards; /* Slide in animation for breadcrumb_des */
    animation-delay: 0.6s; /* Delay for animation to start after container animation */
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

.image-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.lottie-animation-container {
    margin: 0% !important;
    background-color: transparent !important;
}

.map-image {
    right: 10%;
    bottom: 10%;
    max-width: auto;
    height: auto;
}


.right_div {
    display: flex;
    justify-content: flex-end;
}


.box_details_2 {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}

.main_header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.details_address {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    flex-direction: row;
}

.touch {
    color: #ed254e;
    font-family: Montserrat;
    font-size: 54px;
    font-weight: 700;
    line-height: 65.83px;
}

@media (max-width: 576px) {

    .details_address {
        padding-inline: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
    }

    .box_details_2 {
        margin-left: 10px;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        flex-direction: column;
        align-items: center;
    }

    .right_div {
        display: none;
    }

    .map-image {
        display: none;
    }

    .main_header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.contact_home_right {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-end;

}

.touch {
    color: #ed254e;
    font-family: Montserrat;
    font-size: 54px;
    font-weight: 700;
    line-height: 65.83px;


}

.right_div_box {
    width: 30%;
    height: 115%;
    background-color: rgba(1, 25, 54, 0.8);
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

}

@media (max-width: 990px) {
    .contact_home_right {
        width: 0%;
    }

    .details_address {
        padding-inline: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
    }

    .main_header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box_details_2 {
        margin-left: 10px;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        flex-direction: column;
        align-items: center;
    }

    .right_div {
        display: none;
    }

    .map-image {
        display: none;
    }
}

.form_name {
    border: 1px solid #E0E0E0;
    border-radius: 2px;
}

.form_name::placeholder {
    color: #828282;

}

.form_email {
    border: 1px solid #E0E0E0;
    border-radius: 2px;
}

.form_email::placeholder {
    color: #828282;
}

.form_phoneno {
    border: 1px solid #E0E0E0;
    border-radius: 2px;
}

.form_phoneno::placeholder {
    color: #828282;

}

.form_message {
    border: 1px solid #E0E0E0;
    border-radius: 2px;

}

.contactus-subtitle {
    font-family: Montserrat;
    font-size: 48px;
    font-weight: 700;
    line-height: 58.51px;
    text-align: left;
    color: #011936;
}

.contact-item {
    display: flex;
}

.icon {
    width: 30px;
    height: auto;
    display: flex;
    align-self: center;
}

.text1 {
    font-size: 12px;
    color: #ed254e;
    text-align: center;


}

.info {
    margin-left: 15px;
}

@media (max-width: 992px) {
    .contact-item {
        flex-direction: column;
    }

    .box_details_2 {
        margin-left: 10px;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 1200px) {
    .right_div_box {
        width: 30%;
        height: 100vh;
        background-color: rgba(1, 25, 54, 0.8);
        position: absolute;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

    }
}

@media (max-width: 1024px) {
    .right_div_box {
        width: 30%;
        height: 70vh;
        background-color: rgba(1, 25, 54, 0.8);
        position: absolute;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

    }
}</style>