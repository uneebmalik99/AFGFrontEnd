<template>
    <div class="services-container">

      <div class="services-grid">
        <Card
          v-for="(service, index) in services"
          :key="index"
          :image="service.image"
          :title="service.title"
          :description="service.description"
          @update-content="updateContent(index)"
        />
      </div>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue'; // Adjust the path as necessary
  
  export default {
    components: {
      Card,
    },
    data() {
      return {
        services: [
          
        { image: 'src/components/icons/G1.webp', title: 'Service 1', description: 'Description for Service 1' },
        { image: 'src/components/icons/G1.webp', title: 'Service 1', description: 'Description for Service 1' },
        { image: 'src/components/icons/G1.webp', title: 'Service 1', description: 'Description for Service 1' },
        { image: 'src/components/icons/G1.webp', title: 'Service 1', description: 'Description for Service 1' },
        { image: 'src/components/icons/G1.webp', title: 'Service 1', description: 'Description for Service 1' },
        { image: 'src/components/icons/G1.webp', title: 'Service 1', description: 'Description for Service 1' },
        { image: 'src/components/icons/G1.webp', title: 'Service 1', description: 'Description for Service 1' },
        { image: 'src/components/icons/G1.webp', title: 'Service 1', description: 'Description for Service 1' }
        
        ],
      };
    },
  };
  </script>

<style scoped>
.services-container {
  display: flex;
  justify-content: center;
  padding: 0px;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2%; 
  justify-content: center;
  width: 100%;
}

.services-grid > * {
  /* flex:  calc(30% - 10px);  */
  flex: 30%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .services-grid > * {
    flex: 1 1 calc(50% - 10px); /* Two cards per row on smaller screens */
  }
}

@media (max-width: 480px) {
  .services-grid > * {
    flex: 1 1 100%; /* One card per row on very small screens */
  }
}

/* Specific styling for the last row to only have 2 cards */
.services-grid > *:nth-last-child(1),
.services-grid > *:nth-last-child(2) {
  flex: 1 1 calc(50% - 10px);
}
</style>
