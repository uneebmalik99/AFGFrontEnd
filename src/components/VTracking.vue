<template>
    <div class="tracking-section py-5">
        <div class="container">
            <div class="text-center mb-4">
                <h2 class="tracking-title">Tracking</h2>
                <h1 class="tracking-subtitle">Vehicle and Container Tracking</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10 col-sm-12">
                    <div class="tracking-form">
                        <p class="tracking-instructions text-center">
                            Enter your Vin No, Lot No, or Container No to track your shipments.
                        </p>
                        <div class="input-group mb-3">
                            <input v-model="trackingNumber" type="text" class="form-control"
                                placeholder="Vin/Lot/Container number" aria-label="Vin/Lot/Container number" />
                            <div class="input-group-append">
                                <button class="btn btn-lg" type="button">Track</button>
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
    name: "VTracking",
    data() {
        return {
            trackingNumber: ""
        };
    },
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
    color: #002d72;
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
    opacity: 0px;
   
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
