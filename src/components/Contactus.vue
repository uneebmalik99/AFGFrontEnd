<template>
    <div class="container-fluid">
        <div class="row mb-5">
            <div class="col-lg-6">
                <div class="contactus-header mx-3 mx-md-5">
                    <h2 class="contactus-title">Contact us</h2>
                    <h3 class="contactus-subtitle">Get In Touch</h3>
                </div>
                <div class="form mx-3 mx-md-5">
                    <div class="mx-5">
                        <p class="text">Feel free to contact us any time.</p>
                    </div>
                    <div class="mx-5">
                        <input type="text" class="name col-12 mt-4" placeholder="Name *">
                        <input type="email" class="email col-12 mt-4" placeholder="Email">
                        <input type="tel" class="phoneno col-12 mt-4" placeholder="Phone number *">
                        <textarea class="form-control col-12 mt-4" placeholder="Write your message here"
                            rows="3"></textarea>
                        <button class="btn btn-primary btn-lg mt-4 col-12" style="background-color: #ed254e;">SEND
                            MESSAGE</button>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-info mt-5">
                            <div class="contact-item mt-4 d-flex align-items-start">
                                <img src="../assets/address2.png" class="icon" alt="Address Icon">
                                <div class="info">
                                    <h4>Address</h4>
                                    <p class="text1  ml-3">AFG Global Shipping 290 NYE AVE, Irvington, NJ 07111</p>
                                </div>
                            </div>
                            <div class="contact-item mt-4 d-flex align-items-start">
                                <img src="../assets/phone.png" class="icon" alt="Call Icon">
                                <div class="info">
                                    <h4>Phone</h4>
                                    <p class="text1 ml-3">+1 862 237 7066</p>
                                </div>
                            </div>
                            <div class="contact-item mt-4 d-flex align-items-start">
                                <img src="../assets/email2.png" class="icon" alt="Email Icon">
                                <div class="info">
                                    <h4>Email</h4>
                                    <p class="text1 ml-3">Csupport@afgglobalusa.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 d-flex justify-content-center justify-content-lg-end">
                <div class="image">
                    <img src="../assets/Navyshape.png" style="width: 100%;">
                    <img src="../assets/Boat.png" style="position: absolute; right: 20%; bottom: 10%; max-width: 80%;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contactus",
};
</script>

<style scoped>
.container-fluid {
    background: #f4fffd;
}

.contactus-title {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;
    text-align: left;
    color: #ed254e;
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
}

.text1 {
    margin-bottom: 0;
    color: #ed254e;
    /* Change text color */
    white-space: nowrap;
    /* Prevent text from wrapping */
    overflow: hidden;
    text-overflow: ellipsis;

}

.info {
    margin-left: 15px;
}

@media (max-width: 992px) {
    .contact-item {
        flex-direction: column;
    }
}
</style>
