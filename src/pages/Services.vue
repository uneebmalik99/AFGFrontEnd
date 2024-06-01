<template>
  <Customersupport />
  <Inlandtransportation />
  <Loadingservices />
  <Shippingservices />
  <Warehousingservices />
  <Clearinserviceuae/>
  <Bookingservices/>
  <Halfcutservices/>
</template>

<script>
import Loadingservices from './../components/Loadingservices.vue';
import Customersupport from './../components/Customersupport.vue';
import Inlandtransportation from './../components/Inlandtransportation.vue';
import Shippingservices from './../components/Shippingservices.vue';
import Warehousingservices from '@/components/Warehousingservices.vue';
import Clearinserviceuae from '@/components/Clearinserviceuae.vue';
import Bookingservices from '@/components/Bookingservices.vue';
import Halfcutservices from '@/components/Halfcutservices.vue';
export default {

  name: "Services",
  components: {
    Customersupport,
    Inlandtransportation,
    Loadingservices,
    Shippingservices,
    Warehousingservices,
    Clearinserviceuae,
    Bookingservices,
    Halfcutservices
  },
}
</script>

<style></style>