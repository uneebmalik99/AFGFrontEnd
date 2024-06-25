<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
    <router-link class="navbar-brand" to="/">AFG Shipping</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item" :class="{ active: isActive('/') }">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" :class="{ active: isActive('/aboutus') }">
          <router-link class="nav-link" to="/aboutus">About Us</router-link>
        </li>
        
        <li class="nav-item dropdown" :class="{ active: isActive('/services') }">
          <router-link class="nav-link dropdown-toggle" to="/services" id="navbarDropdown" role="button">
            Services
          </router-link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/customersupport">24/7 Customer Support</router-link>
            <router-link class="dropdown-item" to="/towingservices">Towing Services</router-link>
            <router-link class="dropdown-item" to="/loadingservices">Loading Services</router-link>
            <router-link class="dropdown-item" to="/shippingservices">Shipping Services</router-link>
            <router-link class="dropdown-item" to="/warehousingservices">Warehousing Services</router-link>
            <router-link class="dropdown-item" to="/clearinserviceuae">Clearance Services in UAE</router-link>
            <router-link class="dropdown-item" to="/bookingservices">Booking Services</router-link>
            <router-link class="dropdown-item" to="/halfcutservices">Half-cut Services</router-link>
          </div>
        </li>
        <li class="nav-item" :class="{ active: isActive('/tracking') }">
          <router-link class="nav-link" to="/tracking">Tracking</router-link>
        </li>
        <li class="nav-item" :class="{ active: isActive('/gallery') }">
          <router-link class="nav-link" to="/gallery">Gallery</router-link>
        </li>
        <li class="nav-item" :class="{ active: isActive('/contact-us') }">
          <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
        </li>
        <li class="nav-item" :class="{ active: isActive('/announcements') }">
          <router-link class="nav-link" to="/announcements" id="navbarAnnouncements" role="button">
            Announcements
          </router-link>
        </li>
      </ul>
      <button class="btn my-2 my-sm-0" type="button" @click="openLoginPage">Login</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    isActive(route) {
      return this.$route.path === route || this.$route.path.startsWith(route + '/');
    },
    openLoginPage() {
      window.location.href = 'https://admin.afgshipping.com/';
    }
  }
};
</script>

<style scoped>
.navbar {
  padding: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow to the bottom */
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

.nav-item.active .nav-link {
  color: #011936;
}

.nav-item .nav-link:hover {
  color: #011936;
}

.nav-item.dropdown:hover .dropdown-menu {
  display: block;
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

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  margin-top: 0.25rem;
}

.nav-item.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
