
<template>

  


<div class=" py-5  main-box" >
    <div class=" col-sm-12 col-md-5 col-lg-5 inner_left"  >
      <div style=" align-items: left; display: flex; justify-content: center; flex-direction: column; ">
        <h2 class="title">What We Offer </h2>
        <p class="des">Peace Global Logistics provides a wide array of services tailored to meet the diverse needs of both car wholesalers and
retailers. Whether you're looking for solutions in logistics, transportation, or supply chain management, we have you covered.</p>

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
  data() {
    return {
      items: [{name: 'hans'}, {name: 'sagita'}]
    }
  }
   
  
  };
  </script>
  
  <style scoped>

  .main-box{
    width: 100%;
    padding-block: 3%;
    display: flex; flex-direction: row;justify-content: center;align-items: center;
  }

  .inner_left{
    display: flex;
    flex-direction: column; 
    padding-left: 8%;
    justify-self: center; 
    align-items: center; 

  }
  .title{
    color: #011936;
    text-align: left;
  }
  .des{
    margin-top: 15px; 
    color: #011936;
    text-align: left;
    font-weight: 300;
  }



@media screen and (max-width: 992px) {
    .main-box{
      width: 100%;

      display: flex; flex-direction: column;justify-content: center;align-items: center;
  }
  .inner_right{
  margin-top: 10px;
  }
  .inner_left{
    display: flex;
    flex-direction: column; 
    justify-self: center; 
    align-items: center; 
  }
  .title{
    color: #011936;

    text-align: center;
  }
  .des{
    margin-top: 15px; 
    text-align: center;
    color: #011936;
    padding-block: 3%;
  }

}

@media screen and (max-width: 768) {
    .main-box{
      width: 100%;

      display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
  }
  .inner_right{
    margin-top: 10px;
  }
  .inner_left{
    display: flex;
    flex-direction: column; 
    justify-self: center; 
    align-items: center; 
  }
  .title{
    color: #011936;

    text-align: center;
  }
  .des{
    margin-top: 15px; 
    text-align: center;
    color: #011936;
    padding-block: 3%;
  }
}
@media screen and (max-width: 480px) {
  .main-box{
    width: 100%;

    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .inner_left{
    display: flex;
    flex-direction: column; 
    justify-self: center; 
    align-items: center; 
  }
  .inner_right{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title{
    color: #011936;

    text-align: center;
  }
  .des{
    margin-top: 15px; 
    text-align: center;
    color: #011936;
    padding-block: 3%;
  }
}

  </style>
  