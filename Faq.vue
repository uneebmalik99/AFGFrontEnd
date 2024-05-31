<template>

    <div class="container">


        <div class="content-row">

            <!-- Left Section (FAQ) -->

            <div class="left-section">
                 <h1 style="font-family: Montserrat; font-size: 32px; font-weight: 700; line-height: 39.01px; text-align: left; color: #ED254E;">
              FAQs
            </h1>
            <h1 style="font-family: Montserrat; font-size: 48px; font-weight: 700; line-height: 58.51px; text-align: left;">
              How Can We Help You?
            </h1>
               <Bar/>
            </div>

            <!-- Right Section (Images) -->
            <div class="right-section">
                <div class="image-container">
                    <img src="./icons/ovel2.png" alt="Image 2">
                    <!-- Add more images as needed -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bar from './Bar.vue'
export default {
    components: {
   Bar
 },
    data() {
        return {
            faqs: [
                { question: 'How can I update my profile?', answer: 'You can update your profile by...' },
                { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.' },
                // Add more FAQs here
            ]
        };
    },
    methods: {
        toggleAnswer(index) {
            this.faqs[index].open = !this.faqs[index].open;
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    padding: 20px;

}

.content-row {
    display: flex;
    width: 100%;
    max-width: 1200px;
}

.left-section,
.right-section {
    flex: 1;
    padding: 15px;
}



.faq-item {
    margin-bottom: 20px;
}

.question {
    cursor: pointer;
    font-weight: bold;
}

.answer {
    margin-top: 10px;
}

.image-container {
    display: flex;
    justify-content: flex-end;
}

@media (max-width: 768px) {
    .content-row {
        flex-direction: column;
    }

    .left-section,
    .right-section {
        border-right: none;
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px;
        margin-bottom: 15px;
    }

    .image-container img {
        width: 100%;
    }
}
</style>