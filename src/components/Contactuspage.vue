<template>
    <div class="container-fluid p-0">
          <div class="hero-section">
              <img src="../assets/contactus.webp"  class="img-fluid w-100 hero-image">
              <div class="hero-text">
                  <h1 class="display-4">Contact Us</h1>
                  <p>
                      <span class="home">HOME</span>
                      <span class="arrow"> &gt; </span>
                      <span class="contact-us">CONTACT US</span>
                  </p>
              </div>
          </div>
      </div>
      <div class="container-fluid ">
          <div class="row ">
              <div class="col-md-6 mb-md-0  mt-5">
                  <div class="form mx-3 mx-md-5 ">
                    <div class="contactus-header mx-3 mx-md-5">
                      <h3 class="contactus-subtitle mt-5">Get In <span class="touch">Touch </span></h3>
                  </div>
                      <div class="mx-3 mx-md-5 mt-3">
                          <p class="text">Feel free to contact us any time.</p>
                      </div>
                      <div class="mx-3 mx-md-5 mt-4">
                          <input type="text" class="form-control mt-4" placeholder="Name *">
                          <input type="email" class="form-control mt-4" placeholder="Email">
                          <input type="tel" class="form-control mt-4" placeholder="Phone number *">
                          <textarea class="form-control mt-4" placeholder="Write your message here" rows="3"></textarea>
                          <button class="btn btn-primary btn-lg mt-4 w-100" style="background-color: #ed254e;">SEND MESSAGE</button>
                      </div>
                      <div class="contact-info mx-3 mx-md-5 mt-5">
                          <div class="contact-item d-flex align-items-start mt-4">
                              <img src="../assets/address2.webp" class="icon" alt="Address Icon">
                              <div class="info ml-3">
                                  <h4>Address</h4>
                                  <p class="text1">AFG Global Shipping 290 NYE AVE, Irvington, NJ 07111</p>
                              </div>
                          </div>
                          <div class="contact-item d-flex align-items-start mt-4">
                              <img src="../assets/phone.webp" class="icon" alt="Call Icon">
                              <div class="info ml-3">
                                  <h4>Phone</h4>
                                  <p class="text1">+1 862 237 7066</p>
                              </div>
                          </div>
                          <div class="contact-item d-flex align-items-start mt-4">
                              <img src="../assets/email2.webp" class="icon" alt="Email Icon">
                              <div class="info ml-3">
                                  <h4>Email</h4>
                                  <p class="text1 mb-2">Csupport@afgglobalusa.com</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 d-flex justify-content-md-end">
                  <div class="image position-relative ">
                      <img src="../assets/bluerect.webp" class="img-fluid w-100 bluerect-image">
                      <img src="../assets/map.webp" class="position-absolute map-image" >
                  </div>
              </div>
          </div>
      </div>
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
  .hero-section {
      position: relative;
      text-align: left;
  }
  
  .hero-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      color: #00000080;
  }
  
  .hero-text {
      position: absolute;
      top: 50%;
      left: 50px;
      transform: translateY(-50%);
      font-family: Montserrat;
  }
  
  .hero-text h1 {
      font-size: 56px;
      font-weight: 700;
      color: #FFFFFF;
  }
  
  .home {
      color: #FFFFFF;
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 700;
      line-height: 24.38px;
      text-align: left;
  }
  
  .arrow {
      width: 8px;
      height: 14px;
      gap: 0px;
      opacity: 0px;
  }
  
  .contact-us {
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 700;
      color: #011936;
  }
  
  .container-fluid {
      background: #f4fffd;
  }
  
  .touch{
    color: #DD5471;

  }
  
  .contactus-subtitle {
      font-family: Montserrat;
      font-size: 48px;
      font-weight: 700;
      line-height: 58.51px;
      text-align: left;
      color: #011936;
  }
  
  .contact-item {
      display: flex;
  }
  
  .icon {
      width: 30px;
      height: auto;
  }
  
  .text1 {
      margin-bottom: 0;
      color: #ed254e;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  
  .info {
      margin-left: 15px;
  }
  
  .bluerect-image {
      height: auto;
  }
  
  .map-image {
      right: 30%;
      bottom: 10%;
      max-width: auto;
      height: auto;
  }
  
  @media (max-width: 992px) {
      .hero-text h1 {
          font-size: 40px;
      }
  
      .home, .contact-us {
          font-size: 16px;
      }
      .contactus-subtitle {
          font-size: 36px;
      }
  
      .map-image {
          right: 20%;
          bottom: 10%;
          max-width: 70%;
          display: none;
      }
      .bluerect-image{
          right: 20%;
          bottom: 10%;
          max-width: 70%;
          display: none;
      }
  }
  
  @media (max-width: 768px) {
      .contact-item {
          flex-direction: column;
          align-items: flex-start;
      }
  
      .map-image {
          right: 20%;
          bottom: 10%;
          max-width: 70%;
          display: none;
      }
      .bluerect-image{
          right: 20%;
          bottom: 10%;
          max-width: 70%;
          display: none;
      }
  
      .contact-info {
          margin-left: 0 !important;
          margin-right: 0 !important;
      }
  
      .text1 {
          font-size: 12px;
      }
      .icon{
        height: 8%;
        width: 8%;
      }
  }
  @media (max-width: 1300px) {
      .hero-text h1 {
          font-size: 40px;
      }
  
      .home, .contact-us {
          font-size: 16px;
      }
      .contactus-subtitle {
          font-size: 36px;
      }
  
      .map-image {
          right: 20%;
          bottom: 10%;
          max-width: 70%;
          display: none;
      }
      .bluerect-image{
          right: 20%;
          bottom: 10%;
          max-width: 70%;
          display: none;
      }
  }
  
  </style>
  