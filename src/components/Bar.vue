<template>
    <div class="scrollable-container">
      <div class="scrollable-text" ref="textContainer" @scroll="updateScrollbar">
        <div class="content-row">
  
          <!-- Left Section (FAQ) -->
  
          <div class="left-section">
           
  
            <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
              <div class="question" @click="toggleAnswer(index)" style="font-family: Montserrat; font-size: 14.92px; font-weight: 700; line-height: 18.19px; text-align: left;">
                {{ faq.question }}
              </div>
              <transition name="fade">
                <div v-if="faq.open" class="answer" style="font-family: Montserrat; font-size: 13.57px; font-weight: 400; line-height: 16.54px; text-align: left;">
                  {{ faq.answer }}
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="scrollbar">
        <div class="thumb" ref="thumb" @mousedown="startDrag"></div>
      </div>
    </div>
  </template>
<script>
export default {
    name: 'Bar',
  data() {
    return {
        
      faqs: [
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        { question: 'How can I update my profile?', answer: 'You can update your profile by...', open: false },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, and PayPal.', open: false },
        // Add more FAQs here
      ],
      isDragging: false,
      startY: 0,
      startScrollTop: 0,
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
    startDrag(event) {
      this.isDragging = true;
      this.startY = event.clientY;
      this.startScrollTop = this.$refs.textContainer.scrollTop;
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    onDrag(event) {
      if (this.isDragging) {
        const deltaY = event.clientY - this.startY;
        const scrollableHeight = this.$refs.textContainer.scrollHeight - this.$refs.textContainer.clientHeight;
        const thumbHeight = this.$refs.thumb.clientHeight;
        const newScrollTop = this.startScrollTop + deltaY * (scrollableHeight / (this.$refs.textContainer.clientHeight - thumbHeight));
        this.$refs.textContainer.scrollTop = newScrollTop;
      }
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    },
    updateScrollbar() {
      const scrollableHeight = this.$refs.textContainer.scrollHeight - this.$refs.textContainer.clientHeight;
      const thumbHeight = this.$refs.textContainer.clientHeight / this.$refs.textContainer.scrollHeight * this.$refs.textContainer.clientHeight;
      this.$refs.thumb.style.height = `${thumbHeight}px`;
      const thumbPosition = this.$refs.textContainer.scrollTop / scrollableHeight * (this.$refs.textContainer.clientHeight - thumbHeight);
      this.$refs.thumb.style.transform = `translateY(${thumbPosition}px)`;
    },
  },
  mounted() {
    this.updateScrollbar();
    window.addEventListener('resize', this.updateScrollbar);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScrollbar);
  },
};
</script>
<style scoped>
.scrollable-container {
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
 
  padding: 10px;
  background-color: #ffffff;
}

.scrollable-text {
  flex: 1;
  height: 300px;
  overflow-y: hidden;
  padding: 10px;
  border-right: 1px solid #ffffff;
}

.scrollbar {
  width: 10px;
  height: 300px;
  position: relative;
  background-color: #adadad;
  border-radius: 10px;
}

.thumb {
  width: 100%;
  background-color: #304a68;
  position: absolute;
  top: 0;
  cursor: pointer;
  border-radius: 10px;
}
</style>
  