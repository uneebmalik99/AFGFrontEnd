<template>
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">AFG Logo</a>
                <button class="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Tracking</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Announcements</a>
                        </li>
                    </ul>
                    <button class="btn btn-primary" type="button">Log In</button>
                </div>
            </div>
        </nav>
        <div class="hero-section">
            <img src="../assets/contactus.png" alt="Ship Image" class="img-fluid w-100 hero-image">
            <div class="hero-text">
                <h1 class="display-4">Contact Us</h1>
                <p>HOME &gt; CONTACT US</p>
            </div>
        </div>
    </div>
    <div class="container-fluid mt-5">
        <div class="row mb-5 ">
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
                    <img src="../assets/bluerect.png" style="width: 100%;">
                    <img src="../assets/map.png" style="position: absolute; right: 20%; bottom: 10%; max-width: 80%;">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {

        };
    }
};
</script>

<style scoped>
.navbar {
    padding: 20px 0;
}

.navbar-brand {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    color: #333333;
}

.nav-item {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    color: #333333;
}

.btn {
    background: #011936;
    color: white;
    border-radius: 26px;
    padding: 10px 26px;
}

.hero-section {
    position: relative;
    text-align: left;
    color: white;
}

.hero-image {
    width: 1506px;
    height: 461px;
    top: 69px;
    gap: 0px;
    opacity: 0px;
    object-fit: cover;
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    font-family: Montserrat;
}

.hero-text h1 {
    font-size: 56px;
    font-weight: 700;
}

.hero-text p {
    font-size: 20px;
    font-weight: 700;
    color: #011936;
}

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