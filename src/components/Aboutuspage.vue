<template>
    <div class="container-fluid p-0">
        <div class="hero-section">
            <img src="../assets/Ship2.webp" alt="Ship Image" class="img-fluid w-100 hero-image">
            <div class="hero-text">
                <h1 class="display-4">About Us</h1>
                <p>
                    <span class="home">HOME</span>
                    <span class="arrow"> &gt; </span>
                    <span class="about-us">ABOUT US</span>
                </p>
            </div>
        </div>
        <div class="container-fluid p-0">
            <div class="row no-gutters align-items-stretch">
                <div class="col-md-9 p-0 d-flex flex-column" style="background-color: #011936;">
                    <div class="text-section h-100 d-flex flex-column justify-content-center">
                        <h2 class="section-title">AFG Global Shipping</h2>
                        <p class="section-text">
                            AFG Global Shipping is a professionally managed shipping company running with an
                            objective
                            to offer timely, efficient and cost-effective shipping services.
                        </p>
                        <p class="section-text">
                            Thanks to our well experienced work force, we have portrayed exceptional customer
                            service
                            consistently. It's a privilege to have the premium clients who trusted us since the
                            inception. While we focus on increasing our clientele, we never compromise on delivering
                            high quality service to our existing clients, who built the foundation for us in the
                            local
                            and international market.
                        </p>
                        <p class="section-text">
                            AFG Global Shipping has gone far beyond than a traditional shipping company by expanding
                            the
                            range of services offered every now and then. We purely believe in the theory “Customer
                            driven business”. We have expanded our business and market segments based on our
                            customer’s
                            requirements and thankfully, we were on the right path.
                        </p>
                        <p class="section-text">
                            Today, we stand in the market as a trend setter in the industry by offering out of the
                            box
                            solutions to our customers.
                        </p>
                    </div>
                </div>
                <div class="col-md-3 p-0 d-flex">
                    <img src="../assets/ship3.webp" alt="Shipping Image"
                        class="img-fluid w-100 h-100 align-self-stretch">
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" style="background-color:#f4fffd; ">
        <div class="Mission-header text-center ">

            <h2 class="Mission-title mt-5">Mission & Milestone</h2>

            <p class="Mission-subtitle">As a logistics and shipping company, the AFG Global mission is to decrease
                freight management inefficiencies and to provide maximum hard and soft cost savings for our customers in
                the process of shipping LTL (less than truckload) or truckload freight and small package freight by
                providing logistics solutions through our powerful and proprietary web-based proprietary transportation
                management system, the AFG Global Rater, and integrated managed transportation services. The AFG Global
                vision is to establish ourselves as the best logistics service provider by garnering the respect of our
                shippers and developing successful and satisfied customers and employees by focusing on our niche:
                re-engineering the approach to solving our customers logistics processes and freight management needs,
                especially those who ship freight via less-than-truckload (LTL).</p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
            <div class="col">
                <div class="card">
                    <div class="icon-container">
                        <img src="../assets/1.webp" class="icon-img" alt="Icon">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Innovative</h5>
                        <p class="card-text">Open and creative to customer and employee solutions</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="icon-container">
                        <img src="../assets/2.webp" class="icon-img" alt="Icon">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Continuous Improvement</h5>
                        <p class="card-text">Continuous improvement of our people and services</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="icon-container">
                        <img src="../assets/3.webp" class="icon-img" alt="Icon">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Respect</h5>
                        <p class="card-text">Respect of individuals and their contribution to the team</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mt-5 mb-5">
                    <div class="icon-container">
                        <img src="../assets/4.webp" class="icon-img" alt="Icon">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Loyalty</h5>
                        <p class="card-text">Faithful and devoted to our company at all times.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mt-5 mb-5">
                    <div class="icon-container">
                        <img src="../assets/5.webp" class="icon-img" alt="Icon">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Reliability</h5>
                        <p class="card-text">Perform and maintain our functions in all circumstances</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mt-5 mb-5">
                    <div class="icon-container">
                        <img src="../assets/6.webp" class="icon-img" alt="Icon">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Efficiency</h5>
                        <p class="card-text">Using the lowest amount of inputs to create the greatest outputs</p>
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

        };
    }
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
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    font-family: Montserrat;
}

.hero-text h1 {
    font-family: Montserrat;
    font-size: 56px;
    font-weight: 700;
    line-height: 68.26px;
    text-align: left;
    font-weight: 700;

}

.home {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.38px;
    text-align: left;
    color: #ffffff;
}

.arrow {
    width: 8px;
    height: 14px;
    gap: 0px;
    opacity: 0px;

}

.about-us {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.38px;
    text-align: left;
    color: #011936;
}

.text-section {
    color: #ffffff;
    padding: 20px;
}

.section-title {
    font-size: 3em;
    font-family: Montserrat;
    font-weight: 700;
    color: #FFFFFF;
}

.section-text {
    margin-bottom: 15px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
}

@media (max-width: 767.98px) {
    .hero-text h1 {
        font-size: 36px;
    }

    .hero-text p {
        font-size: 16px;
    }

    .section-title {
        font-size: 2em;
    }

    .section-text {
        font-size: 18px;
    }
}

.Mission-title {
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.88px;
    color: #011936;
}

.Mission-subtitle {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.38px;
    color: #011936;
}

.card {
    position: relative;
    padding-top: 50px;
    border: 2px solid #011936;
    border-radius: 20px;
    width: 345px;
    height: 245px;
    left: 50px;
    gap: 0px;
    opacity: 0px;
}

.image-container {
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.icon-container {
    position: absolute;
    top: -25px;
    left: 15%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.mt-5 {
    margin-top: 3rem !important;
}

.mb-5 {
    margin-bottom: 3rem !important;
}
</style>
