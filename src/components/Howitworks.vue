
<template>
<div style="background-color: #F4FFFD;">
  <div class="container pt-5 "  >
    <div style="display: flex; justify-content: center;" class="col-md-6 col-lg-6 col-sm-12">
      <h1 class="works">How It Works</h1>
    </div>

    <div class="row col-md-12 col-lg-12 col-sm-12" style="margin-top: 30px;">
      <!-- First box_grid -->
      <div class="box_grid col-md-6 col-lg-6 col-sm-6"  style="align-items:flex-start">
        <div class="row">
          <div class="box_first " >
            <img src="../assets/icon1.webp" class="icon">
          </div>
          <div class="box_second  ">
            <img src="../assets/redicon1.webp" class="icon">
          </div>
          <div class="box_thrid  ">
            <div>
              <h4 class="box_head">Purchase</h4>
            <p class="box_p">Customer purchases product</p>
              </div>
          </div>
        </div>
      </div>
         <!-- Second box_grid -->
        <div class="box_grid col-md-6 col-lg-6 col-sm-6"  style="align-items:center">
        <div class="row">
          <div class="box_first " style="align-items: flex-end;" >
            <img src="../assets/icon2.webp" class="icon">
          </div>
          <div class="box_second  ">
            <img src="../assets/redicon2.webp" class="icon">
          </div>
          <div class="box_thrid  ">
            <div>
              <h4 class="box_head">Dispatch</h4>
            <p class="box_p">We dispatch and receive the product<br/>
to one of our various warehouses </p>
              </div>
          </div>
        </div>
      </div>
      </div>

    <div class="col-12 content_area">
      <div cl>
        1
      </div>
      <div>
        2
      </div>

    </div>
   
    </div>
</div>
  

  </template>
  
  <script>
  export default {
    name: 'Howitworks',
    data() {
      return {
        steps: [
        { title: "Purchase", description: "Customer purchases the product." },
        { title: "Dispatch", description: "We dispatch the product to one of our various warehouses." },
        { title: "Receiving", description: "The product is received at the warehouse." },
        { title: "Loading Point Receives Vehicle", description: "The product is loaded onto the vehicle at the loading point." },
        { title: "Clearance and Delivery", description: "The product is cleared through customs and delivered to the customer." },
        { title: "Delivery", description: "The product is delivered to the customer's location." }

        ],
      };
    },
  };
  </script>
  
  <style scoped>
 
  .content_area{
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    


  }
  
  /* Remove width constraints for smaller screens */
  @media screen and (max-width: 768px) {
    .child-div-row1,
    .child-div-row2 {
      flex: 1; /* Allow flexible width */
      width: max-content;
    }
  }
  img{
    max-width: 90vh;
  }
  pre {
    margin: 0;
    font-family: inherit;
  }
  h1 {
    margin: 0;
    font-size: 1.2em;
  }
  body {
    margin: 5px 0 0;
    font-size: 1em;
  }
  @media screen and (max-width: 768px) {
    .child-div-row1,
    .child-div-row2 {
      width: 100px; /* Adjust width for smaller screens */
    }
    .box_head{
    font-weight: 600;
    font-size: 20px;
    color: #011936
  }

  }
  @media screen and (max-width: 480px) {
    .child-div-row1,
    .child-div-row2 {
      width: 150px; /* Adjust width for even smaller screens */
    }
    .box_head{
    font-weight: 600;
    font-size: 18px;
    color: #011936
  }
  }
  </style>
  