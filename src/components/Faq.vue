<template>
  <div style="background-color: #f4fffd;">
  <div class="container py-5" >
    <div class="faq-container">
      <div class="faq-content">
        <h2>FAQs</h2>
        <h3>How Can We Help You?</h3>
        <div class="scroll-box">
          <ul>
            <li v-for="(faq, index) in faqs" :key="index">
              <h4>{{ index + 1 }}. {{ faq.question }}</h4>
              <p>{{ faq.answer }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="faq-image-container">
        <div  class="bg_image">
          <!-- <img src="../assets/contianer_contect.webp" alt="FAQ Image" /> -->
        <div class="contact-box" >
          <p>Still have questions?</p>
          <button>Contact Us</button>
          <p>OR</p>
          <p>write us</p>
          <p style="color: #ED254E;padding-inline: 8px;">Csupport@afgglobalusa.com</p>
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
      faqs: [
        {
          question: 'How much does it cost to transport a vehicle?',
          answer: 'The cost of transporting your vehicle depends on several factors...'
        },
        {
          question: 'Can I load personal items in my vehicle during transport?',
          answer: 'It is not recommended to load personal items...'
        },
        {
          question: 'How long does it take to transport a vehicle?',
          answer: 'The transportation time can vary based on...'
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
        },
        // Add more FAQs as needed
      ]
    };
  }
};
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
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  position: relative;
}

.faq-content {
  flex: 1;
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

.bg_image{
      width: 375px;
      height: 68vh; /* Adjust as needed */
      background-image: url('../assets/contianer_contect.webp');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
}

.scroll-box {
  max-height: 400px;
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
}

.scroll-box h4 {
  font-size: 18px;
  color: #2c3e50;
}

.scroll-box p {
  font-size: 16px;
  color: #7f8c8d;
}

.faq-image-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
}

.faq-image-container img {
  max-width: 100%;
  margin-bottom: 20px;
}

.contact-box {
  background-color: #011936;
  border: 10px solid white;
  color: white;
  padding: 10px;
  position: absolute;
  bottom: -120px;
  height: 340px;
  margin-left: -120px;
  text-align: center;
  border-radius: 400px;
  z-index: 1;
  
  /* Flexbox properties */
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
    flex-direction: column;
  }

  .faq-content {
    padding-right: 0;
    margin-bottom: 20px;
  }

  .faq-image-container {
    
    align-items: flex-end;
    position: relative;
      
  }

  .faq-image-container img {
    width: 80%;
  }
}
</style>
