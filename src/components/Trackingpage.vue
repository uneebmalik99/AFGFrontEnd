<template>
    <div class="gallery ">
        <div class="image-container0">
            <img src="../assets/tracking.webp" alt="Gallery Image" class="tracking-image" />
            <div class="breadcrumbs">
                <h1>Tracking</h1>
                <div class="breadcrumb_des">
                    <p>HOME &nbsp > Services > &nbsp </p>
                    <p class="breadcrumb_name"> TRACKING</p>
                </div>
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
                        <p class="tracking-instructions text-center"> Enter your Vin No, Lot No, or Container No to track
                            your shipments. </p>
                        <div class="input-group mb-3">
                            <input v-model="trackingNumber" type="text" class="form-control"
                                placeholder="Vin/Lot/Container number" aria-label="Vin/Lot/Container number" />
                        </div>
                        <div class="text-center">
                            <button class="btn" type="button" @click="trackShipment">Track</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-3" v-if="vehicleData.status == 'success'">
            <div class="row rounded" style="background-color: #FFFFFF;" v-if="vehicleData.data.images">
                <div class="col-md-12">
                    <h2 class="mt-3 mb-3 text-left">Vehicle Images</h2>
                </div>
                <div v-if="vehicleData.data.images.lenght > 0">
                    <div class="col-12 col-md-4 mb-4" v-for="image in vehicleData.data.images" :key="image.id">
                        <div class="image-container">
                            <img :src="`https://admin.afgshipping.com/uploads/${image.thumbnail}`" alt="Vehicle Image"
                                class="img-fluid rounded">
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="col-md-12">
                        <div class="alert alert-danger" role="alert"> No Vehicle Images found. </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div v-if="vehicleData && vehicleData.status == 'success'">
                <!-- Vehicle Detail Section -->
                <div class="row mt-4 mb-4 rounded" style="background-color:#FFFFFF;">
                    <div class="col-12">
                        <h2 class="text-left" style="padding-top: 1%;"> Vehicle Detail <span class="float-right vin-number">
                                VIN No: {{ vehicleData && vehicleData.data ? vehicleData.data.vin : '' }} </span>
                        </h2>
                    </div>
                    <div class="line mt-2"></div>
                    <div class="col-11 col-md-6 col-lg-3 mb-3" style="padding-top: 2%">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Customer</h5>
                                <p class="card-text">Werner Steuber <br> P. NO: 754-938-4255</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-md-6 col-lg-3 mb-3" style="padding-top: 2%">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Address</h5>
                                <p class="card-text">644 Hazel Canyon Apt. 398,<br> Sawaynberg</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-md-6 col-lg-3 mb-3" style="padding-top: 2%">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Vehicle Info.</h5>
                                <p class="card-text"> Year-Make-Model: <br> {{ vehicleData && vehicleData.data ?
                                    vehicleData.data.year : '' }} -{{ vehicleData && vehicleData.data ?
        vehicleData.data.make : '' }}-{{ vehicleData && vehicleData.data ?
        vehicleData.data.model : '' }} <br>Vehicle Model: {{ vehicleData && vehicleData.data ?
        vehicleData.data.model : '' }} <br>Shipping via: AFG Shipping </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-md-6 col-lg-3 mb-3" style="padding-top: 2%">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Order Date</h5>
                                <p class="card-text" v-html="formatDateTime(vehicleData.data.created_at)"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Tracking Section -->
                <div class="row mt-4" style="background-color:#FFFFFF;">
                    <div class="col-12">
                        <h3 class="text-center" style="padding-top: 2%;"> Tracking Order Number: <span
                                class="num">012112334556</span>
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
            <div v-else-if="vehicleData && vehicleData.status == 'error'">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger" role="alert"> {{ vehicleData.message }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            trackingNumber: '',
            vehicleData: this.$route.query.vehicleData ? JSON.parse(this.$route.query.vehicleData) : {},
        };
    },
    methods: {
        async trackShipment() {
            if (this.trackingNumber) {
                try {
                    const response = await axios.get(`http://trackvinapi.afgshipping.com/api.php?vin=${this.trackingNumber}`);
                    console.log(response.data);
                    this.vehicleData = response.data;
                } catch (error) {
                    console.error('Error tracking shipment:', error);
                }
            } else {
                alert('Please enter a tracking number.');
            }
        },
        formatDateTime(datetime) {
            if (!datetime) return '';

            const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
            const date = new Date(datetime);

            return `${date.toLocaleDateString('en-US', options)}`;
        }
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

.image-container0 {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
}

.tracking-image {
    justify-content: center;
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
    padding: 5px 10px;
    border-radius: 8px;
    color: white;
}

.btn:hover {
    color: white;
    background-color: #eb3347;
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

.img-fluid {
    width: 338.19px;
    height: 474.23px;
    gap: 0px;
}

.card {
    width: 260px;
    height: 147.65px;
    gap: 0px;
    border-radius: 12.76px;
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

/* .card-title {
    width: 200px;
    height: 30px;
    opacity: 0px;
    background: #FAFAFA;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 17.78px;
    text-align: center;
} */

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

    .card-title {
        width: 170px;
    }
}
</style>