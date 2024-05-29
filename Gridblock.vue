
<template>
    <div class="main-container">
      <div class="row1">
        <div class="main-div-rone" style="align-self: flex-start;">
          <div class="child-div-row1" style="align-self: flex-end;">
            <img src="./icons/1.png" alt="" />
          </div>
          <div class="child-div-row1">
            <img src="./icons/1red.png" alt="" />
          </div>
          <div class="child-div-row1">
            <pre><p><h1>Purchase</h1><br>Customer Purchase Product</p></pre>
          </div>
        </div>
        <div class="main-div-rone" >
          <div class="child-div-row1" style="align-self: self-end;">
            <img src="./icons/2.png" alt="" />
          </div>
          <div class="child-div-row1" style="align-self: self-end">
            <img style="align-self: self-end;" src="./icons/2red.png" alt="" />
          </div>
          <div class="child-div-row1" >
            <pre><p><h1 >Dispatch</h1> <br> We dispatch and receive the product
    to one of our variouswarehouses</p>
            </pre>
          </div>
        </div>
      </div>
      <div class="row2">
        <div class="main-div-rtwo" >
          <div class="child-div-row2" style="align-self: self-end">
            <img src="./icons/3.png" alt="" />
          </div>
          <div class="child-div-row2">
            <img src="./icons/3red.png" alt="" />
          </div>
          <div class="child-div-row2" ><pre><p><h1>Loading Point Receives Vehicle</h1><br>The product is loaded</p></pre>
          </div>
        </div>
        <div class="main-div-rtwo">
          <div class="child-div-row2" style="align-self: self-end">
            <img src="./icons/4.png" alt="" />
          </div>
          <div class="child-div-row2" style="align-self: flex-end;">
            <img src="./icons/4red.png" alt="" />
          </div>
          <div class="child-div-row2" style="align-self: flex-end;">
            <pre  style="align-self: flex-end;"><p><h1>Clearance and Delivery</h1><br>The container is cleared and delivered
  to the customer</p>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
  .main-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  }
  @media screen and (max-width: 480px) {
    .child-div-row1,
    .child-div-row2 {
      width: 150px; /* Adjust width for even smaller screens */
    }
  }
  </style>
  