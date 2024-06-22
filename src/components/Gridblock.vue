
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
      <!-- Third box_grid -->
      <div class="row col-md-12 col-lg-12 col-sm-12" >
        <div class="box_grid col-md-6 col-lg-6 col-sm-6 col-xs-6"  >
        <div class="row">
          <div class="box_first " style="align-items: center;">
            <img src="../assets/icon3.webp" class="icon">
          </div>
          <div class="box_second ">
            <img src="../assets/redicon3.webp" class="icon">
          </div>
          <div class="box_thrid  ">
            <div>
              <h4 class="box_head">Loading Point</h4>
              <h4 class="box_head">Receives Vehicle</h4>
              
            <p class="box_p">The product is loaded </p>
              </div>
          </div>
        </div>
      </div>
          <!-- Fourth box_grid -->
      <div class="box_grid col-md-6 col-lg-6 col-sm-6"  style="align-items:center">
        <div class="row">
          <div class="box_first " style="align-items: center;" >
            <img src="../assets/icon4.webp" class="icon">
          </div>
          <div class="box_second ">
            <img src="../assets/redicon4.webp" class="icon">
          </div>
          <div class="box_thrid  ">
            <div >
              <h4 class="box_head">Clearance and</h4>
              <h4 class="box_head">Delivery</h4>
              
            <p class="box_p">The container is cleared and <br/> delivered to the customer </p>
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
    name: 'Grid',
    data() {
      return {
        steps: [
          { title: "Purchase", description: "Customer purchases product" },
          { title: "Dispatch", description: "We dispatch and receive the product to one of our various warehouses" },
          { title: "Loading Point Receives Vehicle", description: "The product is loaded" },
          { title: "Clearance and Delivery", description: "The container is cleared and delivered to the customer" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
 
.works{
  font-size: 30px;
  font-weight: 700;
  color: #011936;
}
  .box_grid{
    display: flex;
    justify-content: center;
    height: 200px;
    padding: 10px;
  }

  .box_first{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

  }
  .box_second{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .box_thrid{    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .icon{
    height: auto;
    width: 40%;

  }

  .box_head{
    font-weight: 600;
    font-size: 25px;
    color: #011936
  }

  .box_p{
    font-size: 10px;
    color: #011936;
  }

  .row1,

  
  .row2 {
    display: flex;
    flex-wrap: wrap; /* Wrap child divs */
    gap: 10px;
  }
  .row1 .main-div-rone,
  .row2 .main-div-rtwo {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  .main-div-rone,
  .main-div-rtwo {
    flex: 1;
    display: flex;
    gap: 10px;
  }
  .child-div-row1,
  .child-div-row2 {
    padding: 10px;
    width: 50px; /* Default width */
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
  