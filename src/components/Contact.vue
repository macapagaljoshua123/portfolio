<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2>Get In Touch</h2>
      <p class="contact-intro">
        I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
      </p>
      
      <div class="contact-content">
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                v-model="form.name"
                type="text" 
                id="name" 
                placeholder="Your name"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                id="email" 
                placeholder="your@email.com"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                v-model="form.subject"
                type="text" 
                id="subject" 
                placeholder="Message subject"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                v-model="form.message"
                id="message" 
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn">Send Message</button>
            <p v-if="formMessage" :class="['form-message', formStatus]">
              {{ formMessage }}
            </p>
          </form>
        </div>
        
        <div class="contact-info">
          <div class="info-item">
            <h3>📧 Email</h3>
            <a href="mailto:your-email@example.com">joshuamacapagal0409@gmail.com</a>
          </div>
          
          <div class="info-item">
            <h3>🔗 Social Links</h3>
            <div class="social-list">
              <a href="https://github.com/macapagaljoshua123" target="_blank" rel="noopener">https://github.com/macapagaljoshua123</a>
              <a href="https://www.linkedin.com/in/joshua-macapagal-5551643bb/" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
          
          <div class="info-item">
            <h3>📍 Location</h3>
            <p>San Jose San Miguel Bulacan</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      formMessage: '',
      formStatus: ''
    }
  },
  methods: {
    submitForm() {
      // Note: This is a placeholder. For production, integrate with a backend service
      // or use services like Formspree, EmailJS, or Firebase
      
      if (this.form.name && this.form.email && this.form.subject && this.form.message) {
        console.log('Form submitted:', this.form)
        
        // Simulate form submission
        this.formStatus = 'success'
        this.formMessage = '✓ Message sent successfully! Thank you for reaching out.'
        
        // Reset form after 2 seconds
        setTimeout(() => {
          this.resetForm()
        }, 2000)
      } else {
        this.formStatus = 'error'
        this.formMessage = '✗ Please fill in all fields'
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      this.formMessage = ''
      this.formStatus = ''
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 5rem 2rem;
  background: #f8f9fa;
  transition: background-color 0.3s;
}

:deep(.dark-mode) .contact {
  background: #1a1a1a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff;
  text-align: center;
}

.contact-intro {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: #666;
}

:deep(.dark-mode) .contact-intro {
  color: #ccc;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

:deep(.dark-mode) .contact-form {
  background: #2a2a2a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

:deep(.dark-mode) .form-group label {
  color: #f0f0f0;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  background: white;
  color: #333;
  transition: border-color 0.3s;
}

:deep(.dark-mode) .form-group input,
:deep(.dark-mode) .form-group textarea {
  background: #333;
  color: #f0f0f0;
  border-color: #444;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 0.8rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background: #0056b3;
}

.form-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
}

.form-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

:deep(.dark-mode) .form-message.success {
  background: #1a3a1a;
  color: #90ee90;
  border-color: #2d5a2d;
}

.form-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

:deep(.dark-mode) .form-message.error {
  background: #3a1a1a;
  color: #ff6b6b;
  border-color: #5a2d2d;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

:deep(.dark-mode) .info-item {
  background: #2a2a2a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.info-item h3 {
  color: #007bff;
  margin-bottom: 1rem;
}

.info-item a {
  color: #007bff;
  transition: opacity 0.3s;
}

.info-item a:hover {
  opacity: 0.7;
}

.social-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
