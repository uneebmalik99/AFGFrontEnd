<template>
  <div style="background-color: #f4fffd;">
    <div class="container py-5">
      <div class="row faq-container">
        <div class="col-sm-12 col-md-6 col-lg-6 faq-content">
          <h2>FAQs</h2>
          <h3>How Can We Help You?</h3>
          <div class="scroll-box">
            <ul>
              <li v-for="(faq, index) in faqs" :key="index" @click="toggleAnswer(index)" :class="{ active: activeIndex === index }">
                <h4>
                  <span :class="{ active: activeIndex === index }">{{ index + 1 }}.</span> {{ faq.question }}
                </h4>
                <p v-if="activeIndex === index">{{ faq.answer }}</p>
                <div class="line" :class="{ active: activeIndex === index }"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-0 col-md-6 col-lg-6 faq-image-container">
          <div class="bg_image">
            <div class="contact-box">
              <p>Still have questions?</p>
              <button>Contact Us</button>
              <p>OR</p>
              <p>write us</p>
              <p style="color: #ED254E; padding-inline: 8px;">csupport@afgglobalusa.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      activeIndex: 0, // Set the first item as active by default
      faqs: [
        {
          question: 'What is the cheapest way to ship a car?',
          answer: 'Ocean freight Container transport is roughly 50% cheaper than the RoRo.\
          About 90% of all vehicle shipments go by Container shipping from United States, which is actually very safe.'
        },
        {
          question: 'Can I track the progress of my shipment online?',
          answer: 'Yes, online tracking is available to you 24 hours a day and is updated regularly.\
          Upon scheduling your shipment, you will receive an email from us that will allow you to track the status of your shipment online.'
        },
        {
          question: 'How do I pay for my auto shipping?',
          answer: 'We accept all major credit cards, electronic transfer, postal money order, and bank/certified check for the deposit or full pre-payment of your shipment.\
          If a balance is due upon delivery, it can be paid directly in bank/certified check, or postal money order.'
        },
        {
          question: 'Can I transport a non-operational vehicle?',
          answer: 'Yes, you can transport non-operational vehicles...'
        },
        {
          question: 'How long does it take to transport a vehicle?',
          answer: 'The transportation time can vary based on...'
        },
        {
          question: 'Can I transport a non-operational vehicle?',
          answer: 'Yes, you can transport non-operational vehicles...'
        }
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
}
</script>

<style scoped>
.faq-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.track-container {
  display: flex;
  margin-bottom: 20px;
}

.track-container input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  flex: 1;
}

.track-container button {
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}

.faq-container {
  padding-bottom: 100px;
}

.faq-content {
  padding-right: 20px;
}

.faq-content h2 {
  color: #ff5a5f;
  font-size: 24px;
  margin-bottom: 10px;
}

.faq-content h3 {
  color: #2c3e50;
  font-size: 36px;
  margin-bottom: 20px;
}

.bg_image {
  width: 70%;
  height: 92vh;
  background-image: url('../assets/faqs.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.scroll-box {
  max-height: 250px;
  margin-top: 30px;
  overflow-y: auto;
  padding-right: 10px;
}

.scroll-box ul {
  list-style: none;
  padding: 0;
}

.scroll-box li {
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;
}

.scroll-box h4 {
  font-size: 16px;
  color: #011936;
  padding-top: 10px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 18.19px;
  text-align: left;
  display: flex;
  align-items: center;
}

.scroll-box h4 span {
  border: 1px solid black;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.scroll-box h4 span.active {
  background-color: #011936;
  color: white;
  border: 1px solid black;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-box p {
  color: #011936;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 16.54px;
  text-align: left;
  margin-top: 10px;
  margin-left: 50px;
}

.line {
  height: 1.36px;
  background-color: grey;
  margin-top: 20px;
  width: 70%;
  margin-left: 10px;
}

.line.active {
  background-color: #ED254E;
}

.scroll-box::-webkit-scrollbar {
  width: 5px;
}

.scroll-box::-webkit-scrollbar-track {
  background: #f4fffd;
}

.scroll-box::-webkit-scrollbar-thumb {
  background: #011936;
  border-radius: 4.5px;
}

.faq-image-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
}

.contact-box {
  background-color: #011936;
  border: 10px solid white;
  color: white;
  padding: 8px;
  position: absolute;
  bottom: -120px;
  height: 340px;
  left: -20px;
  text-align: center;
  border-radius: 400px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-box button {
  background-color: white;
  border: none;
  padding: 10px 10px;
  color: #011936;
  cursor: pointer;
  border-radius: 4px;
}

.contact-box p {
  margin: 10px 0;
}

@media (max-width: 768px) {
  .faq-container {
    flex-direction: row;
  }

  .faq-content {
    padding-right: 0;
    margin-bottom: 20px;
  }

  .faq-image-container {
    align-items: flex-end;
  }

  .faq-image-container img {
    width: 80%;
  }

  .faq-content h2 {
    font-size: 20px; 
  }

  .faq-content h3 {
    font-size: 28px; 
  }

  .scroll-box h4 {
    font-size: 10px; 
    padding-top: 5px;
  }

  .scroll-box p {
    font-size: 10px; 
    margin-top: 5px;
    margin-left: 42px;
  }
  .scroll-box h4 span.active {
    width: 35px;
    height: 35px;
  }
  .scroll-box h4 span {
    width: 35px;
    height: 35px;
  }

  .bg_image {
    width: 90%;
    height: 70vh;
    margin-top: 18%;
  }
  .line {
  height: 1.36px;
  background-color: grey;
  margin-top: 10px;
  width: 70%;
  margin-left: 10px;
}
}

@media (min-width: 769px) and (max-width: 1024px) {
  .faq-container {
    flex-direction: row;
  }

  .faq-content {
    padding-right: 15px;
  }

  .faq-image-container {
    align-items: center;
  }

  .bg_image {
    width: 83%;
    height: 40vh;
  }

  .scroll-box h4 {
    font-size: 13px; 
  }

  .scroll-box p {
    font-size: 12px; 
  }
}

@media (min-width: 1025px) {
  .faq-container {
    flex-direction: row;
  }

  .faq-content {
    padding-right: 20px;
  }

  .faq-image-container {
    align-items: center;
  }

  .bg_image {
    width: 80%;
    height: 105vh;
  }
}

</style>