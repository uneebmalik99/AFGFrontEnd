
<template>
<div style="background-color: #F4FFFD;">
  <div class="container pt-5 "  >
    <div style="display: flex; justify-content: center;" class="col-md-6 col-lg-6 col-sm-12">
      <h1 class="works">How It Works</h1>
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
  