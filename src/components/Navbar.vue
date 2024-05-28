<template>
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

</style>