<template>
    <div class="tracking-section">
        <div class="container" style=" display: flex; align-items: center; flex-direction: column; ">
            <div class="text-center col-12 mb-4">
                <h2 class="tracking-title">Tracking</h2>
                <h1 class="tracking-subtitle">Track Your Vehicle</h1>
            </div>
            <div class="row col-12 justify-content-center">
                <div class="col-sm-6 col-md-10 col-lg-10 justify-content-center">
                    <div class="tracking-form">
                        <p class="tracking-instructions text-center"> Enter your Vin No or Lot No to track your shipments.
                        </p>
                        <div class="input-group mb-3">
                            <input v-model="trackingNumber" type="text" class="form-control" placeholder="Vin/Lot"
                                aria-label="Vin/Lot" />
                            <div class="input-group-append">
                                <button class="btn" type="button" @click="trackShipment">Track</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "VTracking",
    data() {
        return {
            trackingNumber: ''
        };
    },
    methods: {
        async trackShipment() {
            if (this.trackingNumber) {
                try {
                    const response = await axios.get(`http://trackvinapi.afgshipping.com/api.php?trackingNumber=${this.trackingNumber}`);
                    console.log(response.data);
                    const data = response.data;
                    this.$router.push({
                        name: 'Tracking', // Name of the route to navigate to
                        query: { vehicleData: JSON.stringify(data) }
                    });
                } catch (error) {
                    console.error('Error tracking shipment:', error);
                }
            } else {
                alert('Please enter a tracking number.');
            }
        }
    }
};
</script>

<style scoped>
.tracking-section {
    background-color: #f4fffd;
    padding: 50px 0;
}

.tracking-title {
    font-size: 24px;
    font-weight: 700;
    color: #ff4c60;
    margin-bottom: 10px;
}

.tracking-subtitle {
    font-size: 32px;
    font-weight: 700;
    color: #011936;
}

::v-deep .form-control::placeholder {
    color: #A6A6A6;
    /* Change this to your desired color */
    /* Optional: Ensures the color opacity is not altered */
}

.tracking-form .input-group {
    display: flex;
    align-items: center;
}

.tracking-form .input-group .form-control {
    border-radius: 0.25rem;
    margin-right: 10px;
    /* Add space between input and button */
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
    color: white;
    display: inline-block;
    gap: 11.89px;
    border-radius: 9.51px;
}

.btn:hover {
    color: white;
    background-color: #eb3347;
}

@media (max-width: 767px) {
    .tracking-form .input-group {
        flex-direction: column;
        /* Stack input and button vertically on smaller screens */
        align-items: center;
        /* Center items horizontally */
    }

    .tracking-form .input-group .form-control {
        width: 100%;
        /* Make input full width */
        margin-right: 0;
        /* Remove margin for smaller screens */
        margin-bottom: 10px;
        /* Add space between input and button */
    }

    .tracking-form .input-group .input-group-append {
        width: 100%;
    }

    .tracking-form .input-group .input-group-append .btn {
        width: 100%;
        /* Make button full width */

    }
}
</style>
