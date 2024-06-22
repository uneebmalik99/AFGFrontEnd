<template>
    <div  class="py-5" style="background-color: #f4fffd; "> 

            <div class="contact_home_right">

            <div class="" style="width: 30%;  display: flex; justify-content: flex-end; align-self: flex-end;">
              
                    <img src="../assets/Navyshape.webp" >
                    <img src="../assets/Boat.webp" style=" position: absolute; top: 10%; right: 5%;;">
                
            </div>
        </div>
          
    <div class="container " >


        <div class="col-sm-12 col-md-12 col-lg-12" >
            <h2 class="contactus-title">Contact us</h2>
                    <h3 class="contactus-subtitle">Get In Touch</h3>
                    <div >
                        <p class="text">Feel free to contact us any time.</p>
                    </div>
        </div>

        <div class="row col-sm-12 col-md-12 col-lg-12">

            <div class="col-sm-10 col-md-12 col-lg-6">
    
    <input type="text" class="form_name col-12 mt-4 py-2"  placeholder="Name *">
    <input type="email" class="form_email col-12 mt-4 py-2" placeholder="Email">
    <input type="tel" class="form_phoneno col-12 mt-4 py-2" placeholder="Phone number *">
    <textarea class="form-control form_message col-12 mt-4 py-2" placeholder="Write your message here"
        rows="3"></textarea>
    <button class="btn btn-primary btn-lg mt-4 col-12" style="background-color: #ed254e; border: 0px;">SEND
        MESSAGE</button> 


        <div class="contact-info mt-5 col-sm-12 col-md-12 col-lg-12">
<div class=" details_address"  >
    <img src="../assets/address2.webp" class="icon" alt="Address Icon">
   <div  class="text-section">
    <h5>Address</h5>
    <p class="text1 ">AFG Global Shipping 290 NYE AVE, Irvington, NJ 07111</p>

   </div>
    


    </div>


    <div class=" details_address" >
    <img src="../assets/phone.webp" class="icon" alt="Address Icon">
   <div  class="text-section">
    <h5>Phone</h5>
    <p class="text1 ">+1 862 237 7066</p>

   </div>
    


    </div>



    <div class=" details_address" >
    <img src="../assets/email2.webp" class="icon" alt="Address Icon">
   <div  class="text-section">
    <h5>Email</h5>
    <p class="text1 ">Csupport@afgglobalusa.com</p>

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
    name: "Contactus",
};
</script>

<style scoped>
.container-fluid {
    background: #f4fffd;
}
.details_address{
    padding-inline: 10px; 
    display: flex; 
    flex-direction: row;
    justify-content: center; 
    align-self: flex-start;
}


.contact-info{
     display: flex;
     flex-direction: column; 
     justify-content: flex-start;
}

.contactus-title {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;
    text-align: left;
    color: #ed254e;
}
.contact_home_right{
    width: 100%;
     position: absolute;
      display: flex;
      justify-content: flex-end;

}



.form_name{
    border: 1px solid #E0E0E0;
    border-radius: 2px;
}
.form_name::placeholder {
    color: #828282; /* Change this to your desired color */
}

.form_email{
    border: 1px solid #E0E0E0;
    border-radius: 2px;
}
.form_email::placeholder{
    color: #828282; /* Change this to your desired color */
}

.form_phoneno{
    border: 1px solid #E0E0E0;
    border-radius: 2px;
}
.form_phoneno::placeholder{
    color: #828282; /* Change this to your desired color */

}

.form_message{
    border: 1px solid #E0E0E0;
    border-radius: 2px;

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
    display: flex;
    align-self: center;
}

.text1 {
    font-size: 12px;
    color: #ed254e;
    text-align: center;
   

}

.text-section{
    margin-left: 10px; 
    display: flex;
     justify-content: center;
      flex-direction: column;
       align-items: flex-start;
}

.info {
    margin-left: 15px;
}

@media (max-width: 990px) {
    .contact_home_right {
        width: 0%;
    }
}

@media (max-width: 576px) {
    
    .details_address{
    padding-inline: 8px; 
    display: flex; 
    justify-content: center; 
    align-self: center;
}
.text-section{
    margin-left: 10px; 
    display: flex;
    margin-top: 10px;
     justify-content: center;
      flex-direction: column;
       align-items: center;
}
.details_address{
    padding-inline: 10px; 
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-self: center;
}

}

@media (max-width: 992px) {
    .contact-item {
        flex-direction: column;
    }
}

</style>
