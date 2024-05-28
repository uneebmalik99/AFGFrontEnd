<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">AFG Logo</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" active-class="active">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link" active-class="active">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tracking" class="nav-link" active-class="active">Tracking</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact-us" class="nav-link" active-class="active">Contact Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link" active-class="active">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/announcements" class="nav-link" active-class="active">Announcements</router-link>
            </li>
          </ul>
          <button class="btn btn-primary" type="button">Log In</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  };
  </script>
  
  <style scoped>
  .navbar {
    padding: 20px 0;
  }
  
  .navbar-brand {
    font-family: Montserrat, sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #333333;
  }
  
  .nav-item .nav-link {
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #333333;
    transition: color 0.3s;
  }
  
  .nav-item .nav-link.active {
    color: #011936;
  }
  
  .nav-item .nav-link:hover {
    color: #011936;
  }
  
  .btn {
    background: #011936;
    color: white;
    border-radius: 26px;
    padding: 10px 26px;
  }
  
  @media (max-width: 768px) {
    .navbar-collapse {
      text-align: center;
    }
  
    .nav-item {
      margin-bottom: 10px;
    }
  
    .btn {
      width: 100%;
    }
  }
  </style>
  