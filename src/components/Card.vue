<template>
    <div class="card">
      <img :src="image" alt="Service Image" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
        <button class="card-button">
          View More
          <span class="card-button-icon">➜</span>
        </button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    methods: {
      updateContent() {
        this.$emit('update-content');
      },
    },
  };
  </script>
  <style scoped>
  .card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: white;
    width: 100%;
    max-width: 400px;
    margin: 10px;
  }
  
  .card-image {
    width: 100%;
    padding: 0%;
    height: auto;
    display: block;
  }
  
  .card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the start (left) */
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-description {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .card-button {
    display: inline-flex;
    align-items: center;
    background-color: #0b0e18;
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    border: none;
  }
  
  .card-button:hover {
    background-color: #333;
  }
  
  .card-button-icon {
    background-color: red;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    font-size: 1rem;
    transition: transform 0.2s;
  }
  
  .card-button:hover .card-button-icon {
    transform: translateX(5px);
  }
  </style>
  