<template>
    <div class="container-fluid p-0">
        <div class="hero-section">
            <img src="../assets/tracking.webp" alt="Ship Image" class="img-fluid w-100 hero-image">
            <div class="hero-text">
                <h1 class="display-4">Tracking</h1>
                <p>
                    <span class="home">HOME</span>
                    <span class="arrow"> &gt; </span>
                    <span class="tracking">TRACKING</span>
                </p>
            </div>
        </div>
    </div>
    <div class="tracking-section py-5">
        <div class="container">
            <div class="text-center mb-4">
                <h1 class="tracking-subtitle">Vehicle and Container Tracking</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tracking-form">
                        <p class="tracking-instructions text-center">
                            Enter your Vin No, Lot No, or Container No to track your shipments.
                        </p>
                        <div class="input-group mb-3">
                            <input v-model="trackingNumber" type="text" class="form-control"
                                placeholder="Vin/Lot/Container number" aria-label="Vin/Lot/Container number" />
                        </div>
                        <div class="text-center">
                            <button class="btn  btn-lg" type="button">Track</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <h2 class="mt-4 mb-4">Vehicle Images</h2>
            <div class="row " style="background-color: #FFFFFF;">
                <div class="col-12 col-md-4 mb-4">
                    <div class="image-container mt-4">
                        <img src="../assets/truck1.webp" alt="Vehicle Front" class="img-fluid ">
                    </div>
                </div>
                <div class="col-12 col-md-8 mb-4">
                    <div class="image1-container mt-4">
                        <img src="../assets/truck2.webp" alt="Vehicle Side" class="img1-fluid ">
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <!-- Vehicle Detail Section -->
            <div class="row mt-4 mb-4" style="background-color:#FFFFFF;">
                <div class="col-12">
                    <h2 class="text-left" style="padding-top: 1%;">Vehicle Detail <span
                            class="float-right vin-number">VIN No :
                            1nb4SrHETXDt52457</span></h2>
                </div>
                <div class="line mt-2"></div>
                <div class="col-11 col-md-6 col-lg-3 mb-3" style="padding-top: 2%">
                    <div class="card">
                        <div class="card-body" style="padding-top: 2%;">
                            <h5 class="card-title" style="padding-top: 2%;">Customer:</h5>
                            <p class="card-text">Werner Steuber <br> P. NO: 754-938-4255</p>

                        </div>
                    </div>
                </div>
                <div class="col-11 col-md-6 col-lg-3 mb-3" style="padding-top: 2%">
                    <div class="card">
                        <div class="card-body" style="padding-top: 2%;">
                            <h5 class="card-title" style="padding-top: 2%;">Address</h5>
                            <p class="card-text">644 Hazel Canyon Apt. 398,<br> Sawaynberg</p>
                        </div>
                    </div>
                </div>
                <div class="col-11 col-md-6 col-lg-3 mb-3" style="padding-top: 2%">
                    <div class="card">
                        <div class="card-body" style="padding-top: 2%;">
                            <h5 class="card-title" style="padding-top: 2%;">Vehicle Information</h5>
                            <p class="card-text">YearMakeModel: 2013DODGEDurango<br>vehicle model: xyz<br>shipping via:
                                AFG shipping</p>

                        </div>
                    </div>
                </div>
                <div class="col-11 col-md-6 col-lg-3 mb-3" style="padding-top: 2%">
                    <div class="card">
                        <div class="card-body" style="padding-top: 2%;">
                            <h5 class="card-title" style="padding-top: 2%;">Order Date</h5>
                            <p class="card-text">4:43 PM<br> THU, 16 May 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Tracking Section -->
            <div class="row mt-4" style="background-color:#FFFFFF;">
                <div class="col-12">
                    <h3 class="text-center" style="padding-top: 2%;">Tracking Order Number:<span class="num">012112334556</span>
                    </h3>
                    <div class="line mt-4"></div>

                    <div class="status-section d-flex justify-content-between align-items-center mt-4">
                        <span class="status-item shipping"><strong>Shipping Via:</strong> AFG</span>
                        <span class="status-item status"><strong>Status:</strong> Product Dispatched</span>
                        <span class="status-item date"><strong>Expected Date:</strong> 20 May, 2024</span>
                    </div>

                    <div class="tracking-container mt-5">
                        <div class="tracking-step active">
                            <div class="icon-container">
                                <img src="../assets/Confirmorder.webp" alt="Confirmed Order" />
                            </div>
                            <span>Confirmed Order</span>
                        </div>
                        <div class="tracking-step active">
                            <div class="icon-container">
                                <img src="../assets/processingorder.webp" alt="Processing Order" />
                            </div>
                            <span>Processing Order</span>
                        </div>
                        <div class="tracking-step active">
                            <div class="icon-container">
                                <img src="../assets/productdispatch.webp" alt="Product Dispatched" />
                            </div>
                            <span>Product Dispatched</span>
                        </div>
                        <div class="tracking-step">
                            <div class="icon-container">
                                <img src="../assets/ondelivery.webp" alt="On Delivery" />
                            </div>
                            <span>On Delivery</span>
                        </div>
                        <div class="tracking-step">
                            <div class="icon-container">
                                <img src="../assets/productdeliver.webp" alt="Product Delivered" />
                            </div>
                            <span>Product Delivered</span>
                        </div>
                        <div class="tracking-line"></div>
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

}

.hero-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    color: #00000080;
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
    color: #FFFFFF;

}

.home {
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.38px;
    text-align: left;

}

.arrow {
    width: 8px;
    height: 14px;
    gap: 0px;
    opacity: 0px;
    color: #FFFFFF;
}

.tracking {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    color: #011936;

}

.tracking-section {
    background: #f4fffd;
    padding: 50px 0;
}

.tracking-subtitle {
    font-size: 32px;
    font-weight: 700;
    color: #002d72;
}

.tracking-form .input-group {
    display: flex;
    align-items: center;
}

.tracking-form .input-group .form-control {
    border-radius: 0.25rem;
    margin-right: 10px;
}

.tracking-instructions {
    margin-top: 20px;
    font-size: 14px;
    color: #6c757d;
}

.tracking-result {
    margin-top: 20px;
    font-size: 16px;
    color: #333;
}

.btn {
    background-color: #ff4c60;
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
}

@media (max-width: 767px) {
    .tracking-form .input-group {
        flex-direction: column;
        align-items: center;
    }

    .tracking-form .input-group .form-control {
        width: 100%;
        margin-right: 0;
        margin-bottom: 10px;
    }
    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-container .col-11 {
        display: flex;
        justify-content: center;
        margin-bottom: 10px; 
    }

    .card-container .card {
        width: 100%; 
        max-width: 300px; 
    }

}

.image-container {
    text-align: center;
}

h2 {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.26px;
    text-align: left;
    color: #333333;

}

.row {
    background: #f4fffd;

}

.line {
    border: 0.1px solid #23232133;
    width: 96%;
    height: 0px;
    gap: 2px;
    border: 0.1px 0px 0px 0px;
    margin-left: 2%;

}

.img1-fluid {
    width: 95%;
    height: 474.23px;
    gap: 0px;
    border-radius: 10px 0px 0px 0px;
    opacity: 0px;
    box-shadow: -2px 2px 5px 0px #0000001A;
    box-shadow: -7px 7px 10px 0px #00000017;
    box-shadow: -16px 16px 13px 0px #0000000D;
    box-shadow: -28px 28px 16px 0px #00000003;
    box-shadow: -43px 43px 17px 0px #00000000;
}

.img-fluid {
    width: 338.19px;
    height: 474.23px;
    gap: 0px;
    border-radius: 10px 0px 0px 0px;
    opacity: 0px;

}

.card {
    width: 260px;
    height: 147.65px;
    gap: 0px;
    border-radius: 12.76px;
    opacity: 0px;
    box-shadow: 0px 0px 9.11px 0px #00000040;
    justify-content: center;

}

.text-left {
    font-family: Montserrat;
    font-size: 19.97px;
    font-weight: 600;
    line-height: 24.34px;
    color: #333333;

}

.vin-number {
    font-family: Montserrat;
    font-size: 19.97px;
    font-weight: 500;
    line-height: 24.34px;
    text-align: right;
    color: #333333;
}

.card-title {
    width: 200px;
    height: 30px;
    opacity: 0px;
    background: #FAFAFA;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 17.78px;
    text-align: center;

}

.card-text {
    font-family: Montserrat;
    font-size: 12.84px;
    font-weight: 400;
    line-height: 15.65px;
    text-align: left;
    color: #333333;
    padding-top: 4%;

}

.text-center {
    font-family: Montserrat;
    font-size: 19.97px;
    font-weight: 600;
    line-height: 24.34px;
    color: #333333;

}

.num {
    font-family: Montserrat;
    font-size: 19.97px;
    font-weight: 600;
    line-height: 24.34px;
    color: #95989D;


}

.status-section {
    background-color: #f8f9fa;
    padding: 10px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 0.25rem;
}

.status-item {
    font-size: 1rem;
    color: #95989D;

}

.status-item strong {
    color: #333333;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 600;
    line-height: 18.29px;
    text-align: left;
}

.shipping {
    text-align: left;
}

.status {
    text-align: center;
    flex: 1;
}

.date {
    text-align: left;
}

@media (max-width: 767.98px) {
    .status-section {
        flex-direction: column;
        align-items: flex-start;
    }

    .status-item {
        width: 100%;
        margin-bottom: 5px;
    }

    .status {
        text-align: left;
    }
    .text-left {
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 600;
    line-height: 24.34px;
    color: #333333;

}

.vin-number {
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 500;
    line-height: 24.34px;
    text-align: right;
    color: #333333;
}
    
}

.tracking-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 20px 0;
}

.tracking-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
}

.tracking-step .icon-container {
    width: 90px;
    height: 90px;
    background-color: #d3d3d3;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.tracking-step.active .icon-container {
    background-color: #002d72;
}

.tracking-step img {
    width: 40px;
    height: 40px;
}

.tracking-line {
    position: absolute;
    top: 40%;
    left: 9%;
    right: 35%;
    height: 4px;
    background-color: #d3d3d3;
    z-index: 0;

}

.tracking-step.active~.tracking-line {
    background-color: #002d72;
}

.text-center {
    font-weight: bold;
    color: #343a40;
}


@media (max-width: 767.98px) {
    .tracking-container {
        flex-direction: column;
        align-items: center;
    }

    .tracking-step {
        margin-bottom: 20px;
    }

    .tracking-line {
        display: none;
    }
}
@media (min-width: 1024px) {
    .col-11 {
        flex: 0 0 25%;
        max-width: 25%;
    }

    .card {
        width: 100%;
    }
   .card-title{
    width: 170px;
   }
}
</style>