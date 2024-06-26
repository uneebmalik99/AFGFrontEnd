<template>
  <div class=" py-5 main-box" ref="offer">
    <div class="col-sm-12 col-md-5 col-lg-5 inner_left">
      <div style="align-items: left; display: flex; justify-content: center; flex-direction: column;">
        <h2 class="title fade-up">What We Offer</h2>
        <p class="des fade-up delay">Peace Global Logistics provides a wide array of services tailored to meet the diverse
          needs of both car wholesalers and retailers. Whether you're looking for solutions in logistics, transportation,
          or supply chain management, we have you covered.</p>
      </div>
    </div>
    <div class="col-sm-12 col-md-7 col-lg-7 inner_right">
      <Carousel />
    </div>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Offer',
  components: {
    Carousel
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const options = {
        threshold: 0.1, // Trigger when 10% of the component is in view
      };
      const observer = new IntersectionObserver(this.handleIntersect, options);
      const elements = this.$refs.offer.querySelectorAll('.fade-up');
      elements.forEach(el => {
        observer.observe(el);
      });
    },
    handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target); // Unobserve the element once it has been animated
        }
      });
    }
  }
};
</script>
<style scoped>
/* Animation Start */
.fade-up {
  opacity: 0;
  /* Start with 0 opacity */
  transform: translateY(20px);
  /* Start slightly below its final position */
  animation: fadeUp 1s forwards ease-out;
  /* Animation name, duration, and retain final state */
  animation-play-state: paused;
  /* Start paused */
}

.delay {
  animation-delay: 0.5s;
  /* Delay the animation of the p tag by 0.5 seconds */
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
    /* Start from 20px below */
  }

  to {
    opacity: 1;
    transform: translateY(0);
    /* Slide to its original position */
  }
}

/* Animation End */

.main-box {
  width: 100%;
  padding-block: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.inner_left {
  display: flex;
  flex-direction: column;
  padding-left: 8%;
  justify-self: center;
  align-items: center;
}

.title {
  color: #011936;
  text-align: left;
}

.des {
  margin-top: 15px;
  color: #011936;
  text-align: left;
  font-weight: 300;
}

@media screen and (max-width: 992px) {
  .main-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inner_right {
    margin-top: 10px;
  }

  .inner_left {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
  }

  .title {
    color: #011936;
    text-align: center;
  }

  .des {
    margin-top: 15px;
    text-align: center;
    color: #011936;
    padding-block: 3%;
  }
}

@media screen and (max-width: 768px) {
  .main-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inner_right {
    margin-top: 10px;
  }

  .inner_left {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
  }

  .title {
    color: #011936;
    text-align: center;
  }

  .des {
    margin-top: 15px;
    text-align: center;
    color: #011936;
    padding-block: 3%;
  }
}

@media screen and (max-width: 480px) {
  .main-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inner_left {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
  }

  .inner_right {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    color: #011936;
    text-align: center;
  }

  .des {
    margin-top: 15px;
    text-align: center;
    color: #011936;
    padding-block: 3%;
  }
}
</style>
