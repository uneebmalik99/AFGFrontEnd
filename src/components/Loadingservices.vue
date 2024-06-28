<template>
  <div class="gallery">
    <div class="image-container0">
      <img src="../assets/car-bg.webp" alt="Gallery Image" class="loading-image" />
      <div class="overlay"></div>
      <div class="breadcrumbs">
        <h1>Loading Services</h1>
        <div class="breadcrumb_des">
          <p>HOME &nbsp > SERVICES > &nbsp </p>
          <p class="breadcrumb_name"> LOADING SERVICES</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid p-0" style="background-color:#f4fffd;">
    <div class="container-fluid">
      <div class="support-buttons-container my-4">
        <div class="support-buttons d-flex justify-content-start py-3">
          <button @click="setActive(0)" class="btn" :class="{ 'active': activeButton === 0 }">Loading Services</button>
          <button @click="setActive(1)" class="btn " :class="{ 'active': activeButton === 1 }">Safe Transit, Damage
            Free</button>
          <button @click="setActive(2)" class="btn " :class="{ 'active': activeButton === 2 }">Mix Shipping</button>
        </div>
        <div class="progress-container mt-2">
          <div class="progress-bar" :style="progressBarStyle"></div>
        </div>
      </div>
      <div class="container">
        <div v-show="activeButton === 0">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 mb-4 mb-md-4">
              <h2 class="call-heading">Loading Services</h2>
              <p class="call-subtitle"> Loading services encompass a range of activities involved in the safe and
                efficient loading of goods or materials onto vehicles, containers, or other transport mediums. These
                services are essential in logistics, warehousing, and transportation industries, ensuring that items are
                securely loaded to prevent damage during transit. Loading services may include the use of specialized
                equipment and techniques tailored to the type of cargo and the mode of transport.<br><br> The primary
                objective of loading services is to streamline the transportation process by maximizing space utilization,
                maintaining load stability, and adhering to safety protocols. This involves careful planning,
                coordination, and execution to optimize efficiency and minimize loading times. Loading services are
                crucial for industries such as shipping, construction, and manufacturing, where timely and secure
                transport of goods is essential for operational success.<br><br> By employing skilled personnel and
                adhering to industry standards, loading services contribute to smoother logistics operations, reduced
                operational costs, and enhanced customer satisfaction. They play a pivotal role in ensuring that goods
                reach their destination intact and on schedule, thereby supporting the seamless flow of supply chains and
                meeting the needs of diverse industries. </p>
            </div>
            <div class="col-12 col-md-6 text-center">
              <div class="image-container position-relative">
                <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                <img src="../assets/service.webp" class="img-fluid custom-image service-top">
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeButton === 1">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 mb-4 mb-md-4">
              <h2 class="call-heading">Safe Transit, Damage Free</h2>
              <p class="call-subtitle"> Safe transit, damage-free refers to the commitment and practices implemented to
                ensure that goods, products, or materials are transported from one location to another without incurring
                any damage or loss. This concept is crucial in logistics and transportation industries where maintaining
                the integrity and condition of cargo is paramount to meeting customer expectations and regulatory
                standards.<br><br> The goal of safe transit, damage-free practices is twofold: first, to prevent physical
                damage to goods during handling and transport; and second, to safeguard against other potential risks such
                as theft, spoilage, or environmental factors. This involves using appropriate packaging materials,
                securing loads properly, and employing skilled personnel who are trained in safe handling
                techniques.<br><br> Implementing safe transit, damage-free practices requires meticulous planning and
                adherence to quality assurance protocols throughout the entire logistics chain. This includes inspecting
                goods before loading, selecting appropriate transport methods and routes, and monitoring conditions during
                transit to mitigate any risks that could compromise the cargo's condition.</p>
            </div>
            <div class="col-12 col-md-6 text-center">
              <div class="image-container position-relative">
                <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                <img src="../assets/service.webp" class="img-fluid custom-image service-top">
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeButton === 2">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 mb-4 mb-md-4">
              <h2 class="call-heading">Mix Shipping</h2>
              <p class="call-subtitle">Mix shipping refers to a logistics strategy where multiple types of goods or
                products are combined and transported together within a single shipment. This approach allows businesses
                to optimize their shipping processes by consolidating various items that are destined for the same or
                similar locations, thereby reducing costs and improving efficiency.<br><br> The concept of mix shipping is
                particularly beneficial in scenarios where businesses need to fulfill orders that consist of different
                types of products or items with varying shipping requirements. By combining these items into one shipment,
                companies can streamline logistics operations, reduce the number of shipments needed, and potentially
                lower transportation expenses.<br><br> Implementing mix shipping requires careful planning and
                coordination to ensure that all items within a shipment are compatible in terms of packaging, handling
                requirements, and delivery timelines. Logistics providers and businesses often leverage technology and
                advanced planning tools to effectively manage and optimize mix shipping processes.</p>
            </div>
            <div class="col-12 col-md-6 text-center">
              <div class="image-container position-relative">
                <img src="../assets/serviceblue.webp" class="img-fluid custom-image service-blue">
                <img src="../assets/service.webp" class="img-fluid custom-image service-top">
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
  data() {
    return {
      activeButton: 0,
      buttonWidth: 258, // Default button width for larger screens
      buttonMargin: 10, // Default button margin
    };
  },
  computed: {
    progressBarStyle() {
      const width = this.getButtonWidth();
      const margin = this.getButtonMargin();
      return {
        width: `${width}px`,
        left: `${this.activeButton * (width + margin)}px`,
      };
    },
  },
  methods: {
    setActive(index) {
      this.activeButton = index;
      this.updateProgressBar();
    },
    updateProgressBar() {
      this.$forceUpdate();
    },
    getButtonWidth() {
      // Adjust button width based on screen size
      return window.innerWidth <= 767 ? window.innerWidth * 0.28 : this.buttonWidth;
    },
    getButtonMargin() {
      // Adjust button margin based on screen size
      return window.innerWidth <= 767 ? 5 : this.buttonMargin;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateProgressBar);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateProgressBar);
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

.loading-image {
  justify-content: center;
}

.customer-support {
  color: #011936;
}

.support-buttons-container {
  text-align: left;
  margin-top: 0px !important;
  margin-left: 10%;
}

.support-buttons .btn {
  border-radius: 20px;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  margin: 0 5px;
  width: 258px;
  height: 46px;
  border: 1px solid black;
}

.support-buttons .btn.active {
  background-color: #0b1a34;
  color: #fff;
  border: none;
}

.support-buttons .btn-outline-primary {
  color: #0b1a34;
  border-color: #0b1a34;
}

.support-buttons .btn-outline-primary:hover {
  background-color: #0b1a34;
  color: #fff;
}

.progress-container {
  width: 65%;
  height: 2px;
  margin: 10px 0;
  background-color: #e9ecef;
  position: relative;
}

.progress-bar {
  height: 100%;
  background-color: #ff4a57;
  position: absolute;
  transition: left 0.3s;
}

.call-heading {
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 700;
  line-height: 43.88px;
  text-align: left;
  color: #011936;
}

.call-subtitle {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.38px;
  text-align: left;
  color: #333333;
}

.custom-image {
  border-radius: 20px;
  max-width: 100%;
}

.image-container {
  position: relative;
  width: 474px;
  height: 400px;
  gap: 0px;
  left: 15%;
}

.service-blue {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 80%;
  max-width: 400px;
}

.service-top {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 70%;
  max-width: 350px;
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
}

/* Media Queries */
@media (max-width: 767.98px) {
  .breadcrumb_des {
    display: flex;
    flex-direction: row;
    font-size: 14px;
  }

  .breadcrumb_name {
    color: #011936;
    font-weight: 700;
  }

  .support-buttons-container {
    margin-left: 5%;
  }

  .support-buttons .btn {
    font-size: 9px;
    width: 140px;
    height: 65px;
  }

  .call-heading {
    font-size: 22px;
    line-height: 35px;
  }

  .call-subtitle {
    font-size: 16px;
    line-height: 20px;
  }

  .progress-container {
    width: 100%;
  }

  .service-blue {
    width: 100%;
    max-width: 300px;
  }

  .service-top {
    width: 90%;
    max-width: 270px;
  }

  .image-container {
    left: 0;
    width: 100%;
    /* Ensure the height adjusts automatically */
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .support-buttons-container {
    margin-left: 7%;
  }

  .support-buttons .btn {
    font-size: 12px;
    width: 258px;
    height: 46px;
  }

  .call-heading {
    font-size: 32px;
    line-height: 40px;
  }

  .call-subtitle {
    font-size: 18px;
    line-height: 22px;
  }

  .progress-container {
    width: 70%;
  }

  .service-blue {
    width: 90%;
    max-width: 350px;
  }

  .service-top {
    width: 80%;
    max-width: 300px;
  }

  .image-container {
    left: 10%;
    width: 90%;
    /* Ensure the height adjusts automatically */
  }
}</style>