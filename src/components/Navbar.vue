<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
    <router-link class="navbar-brand" to="/">AFG Shipping</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item" :class="{ active: isActive('/') }" @click="collapseNavbar">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" :class="{ active: isActive('/aboutus') }" @click="collapseNavbar">
          <router-link class="nav-link" to="/aboutus">About Us</router-link>
        </li>
        
        <li class="nav-item dropdown" :class="{ active: isActive('/services') }" @click="toggleServicesDropdown">
          <router-link class="nav-link dropdown-toggle" to="/services" id="navbarDropdown" role="button">
            Services
          </router-link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/customersupport" @click="collapseNavbar">24/7 Customer Support</router-link>
            <router-link class="dropdown-item" to="/towingservices" @click="collapseNavbar">Towing Services</router-link>
            <router-link class="dropdown-item" to="/loadingservices" @click="collapseNavbar">Loading Services</router-link>
            <router-link class="dropdown-item" to="/shippingservices" @click="collapseNavbar">Shipping Services</router-link>
            <router-link class="dropdown-item" to="/warehousingservices" @click="collapseNavbar">Warehousing Services</router-link>
            <router-link class="dropdown-item" to="/clearinserviceuae" @click="collapseNavbar">Clearance Services in UAE</router-link>
            <router-link class="dropdown-item" to="/bookingservices" @click="collapseNavbar">Booking Services</router-link>
            <router-link class="dropdown-item" to="/halfcutservices" @click="collapseNavbar">Half-cut Services</router-link>
          </div>
        </li>
        <li class="nav-item" :class="{ active: isActive('/tracking') }" @click="collapseNavbar">
          <router-link class="nav-link" to="/tracking">Tracking</router-link>
        </li>
        <li class="nav-item" :class="{ active: isActive('/gallery') }" @click="collapseNavbar">
          <router-link class="nav-link" to="/gallery">Gallery</router-link>
        </li>
        <li class="nav-item" :class="{ active: isActive('/contact-us') }" @click="collapseNavbar">
          <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
        </li>
        <li class="nav-item" :class="{ active: isActive('/announcements') }" @click="collapseNavbar">
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
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route || this.$route.path.startsWith(route + '/');
    },
    openLoginPage() {
      window.location.href = 'https://admin.afgshipping.com/';
    },
    collapseNavbar() {
      if (window.innerWidth < 992) { // Adjust breakpoint as necessary
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
      this.closeDropdown(); // Close the dropdown menu
    },
    toggleServicesDropdown() {
      if (window.innerWidth < 992) {
        this.isDropdownOpen = !this.isDropdownOpen;
        if (this.isDropdownOpen) {
          this.closeNavbar();
        }
      }
    },
    closeNavbar() {
      const navbarCollapse = document.getElementById('navbarSupportedContent');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    },
    closeDropdown() {
      const dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(menu => {
        if (menu.classList.contains('show')) {
          menu.classList.remove('show');
        }
      });
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
