<template>
    <footer class="text-light py-5">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-3">
            <h2 class="heading mb-3">AFG LOGO</h2>
            <p class="text mt-4">
              AFG Global was established with the sole aim of enabling growth, by providing
              efficient and prompt logistics, freight forwarding & transportation solutions.
            </p>
          </div>
          <div class="col-md-3">
            <h3 class="heading1">Get in Touch</h3>
            <div class="contact-item mt-4 d-flex align-items-start">
              <img src="../assets/Address.png" class="icon" alt="Address Icon">
              <p class="text1 ml-3">AFG Global Shipping 290 NYE AVE, Irvington, NJ 07111</p>
            </div>
            <div class="contact-item mt-4 d-flex align-items-start">
              <img src="../assets/Email.png" class="icon" alt="Email Icon">
              <p class="text1 ml-3">Csupport@afgglobalusa.com</p>
            </div>
            <div class="contact-item mt-4 d-flex align-items-start">
              <img src="../assets/call.png" class="icon" alt="Call Icon">
              <p class="text1 ml-3">+1 862 237 7066</p>
            </div>
          </div>
          <div class="col-md-3">
            <h3 class="heading1">Service</h3>
            <ul class="list mt-4">
              <li>Inland transportation</li>
              <li>Loading Services</li>
              <li>Shipping Service</li>
              <li>Warehousing services</li>
              <li>Clearance Services in UAE</li>
              <li>Booking Services</li>
              <li>Half-cut Services</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3 class="heading1">Join a Newsletter</h3>
            <label class="text2 mt-4">Your Email</label>
            <input type="email" class="form-control my-2" placeholder="Enter Your Email">
            <button class="button  mt-3 ">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  footer {
    background: #011936;
  }
  
  .heading,
  .heading1 {
    font-family: Montserrat;
    font-weight: 700;
  }
  
  .heading {
    font-size: 32px;
  }
  
  .heading1 {
    font-size: 16px;
  }
  
  .text,
  .text1,
  .text2,
  .list {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    color: #CFD3D7;
  }
  
  .list {
    list-style: disc;
    padding-left: 20px;
  }
  
  .button {
    background: #ED254E;
    color: white;
    border-radius: 8px;
    width: 60%;
    height: 17%;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
  }
  
  .icon {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 767px) {
    .contact-item {
      flex-direction: column;
      align-items: flex-start;
    }
    .icon {
      margin-bottom: 5px;
    }
  }
  </style>
  