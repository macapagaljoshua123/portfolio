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
            
            <button type="submit" class="submit-btn">
              <Icon name="send" /> Send Message
            </button>
            <p v-if="formMessage" :class="['form-message', formStatus]">
              {{ formMessage }}
            </p>
          </form>
        </div>
        
        <div class="contact-info">
          <div class="info-item">
            <div class="info-header">
              <Icon name="mail" class="info-icon" />
              <h3>Email</h3>
            </div>
            <a href="mailto:your-email@example.com">joshuamacapagal0409@gmail.com</a>
          </div>
          
          <div class="info-item">
            <div class="info-header">
              <Icon name="linkedin" class="info-icon" />
              <h3>Social Links</h3>
            </div>
            <div class="social-list">
              <a href="https://github.com/macapagaljoshua123" target="_blank" rel="noopener">
                <Icon name="github" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/joshua-macapagal-5551643bb/" target="_blank" rel="noopener">
                <Icon name="linkedin" /> LinkedIn
              </a>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-header">
              <Icon name="location" class="info-icon" />
              <h3>Location</h3>
            </div>
            <p>San Jose San Miguel Bulacan</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Contact',
  components: {
    Icon
  },
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
  padding: 6rem 2rem;
  background: #f8f9fa;
  transition: background-color 0.3s ease;
}

:global(body.dark-mode) .contact,
:global(html.dark-mode) .contact {
  background: #1a1a1a;
}

:global(body.dark-mode) .contact-intro,
:global(html.dark-mode) .contact-intro {
  color: #ccc;
}

:global(body.dark-mode) .contact-form,
:global(html.dark-mode) .contact-form {
  background: #1e1e2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
}

:global(body.dark-mode) .form-group label,
:global(html.dark-mode) .form-group label {
  color: #f0f0f0;
}

:global(body.dark-mode) .form-group input,
:global(body.dark-mode) .form-group textarea,
:global(html.dark-mode) .form-group input,
:global(html.dark-mode) .form-group textarea {
  background: #2a2a3e;
  color: #f0f0f0;
  border-color: #3a3a4e;
}

:global(body.dark-mode) .info-item,
:global(html.dark-mode) .info-item {
  background: #1e1e2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
}

:global(body.dark-mode) .info-item p,
:global(html.dark-mode) .info-item p {
  color: #ccc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #007bff;
  text-align: center;
  letter-spacing: -0.5px;
}

.contact-intro {
  text-align: center;
  font-size: 1.05rem;
  margin-bottom: 4rem;
  color: #666;
  line-height: 1.6;
}

:deep(.dark-mode) .contact-intro {
  color: #ccc;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

:deep(.dark-mode) .contact-form {
  background: #1e1e2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
}

.contact-form:hover {
  box-shadow: 0 8px 20px rgba(0, 123, 255, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.6rem;
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

:deep(.dark-mode) .form-group label {
  color: #f0f0f0;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.9rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  background: white;
  color: #333;
  transition: all 0.3s ease;
}

:deep(.dark-mode) .form-group input,
:deep(.dark-mode) .form-group textarea {
  background: #2a2a3e;
  color: #f0f0f0;
  border-color: #3a3a4e;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999;
}

:deep(.dark-mode) .form-group input::placeholder,
:deep(.dark-mode) .form-group textarea::placeholder {
  color: #777;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 123, 255, 0.3);
}

.submit-btn:active {
  transform: translateY(0);
}

.form-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

:deep(.dark-mode) .info-item {
  background: #1e1e2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
}

.info-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 123, 255, 0.1);
}

.info-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.info-item h3 {
  color: #007bff;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.info-item a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #007bff;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

.info-item a:hover {
  color: #0056b3;
  text-decoration: underline;
}

:deep(.dark-mode) .info-item a:hover {
  color: #66b3ff;
}

.social-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.info-item p {
  color: #666;
  margin: 0;
}

:deep(.dark-mode) .info-item p {
  color: #ccc;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 2rem;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  .contact-intro {
    margin-bottom: 3rem;
    font-size: 1rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .contact-form,
  .info-item {
    padding: 1.8rem;
  }

  .submit-btn {
    padding: 0.9rem;
    font-size: 0.95rem;
  }

  .info-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .info-item h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 3rem 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .contact-intro {
    font-size: 0.95rem;
  }

  .contact-content {
    gap: 2rem;
  }

  .contact-form,
  .info-item {
    padding: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 0.8rem;
    font-size: 0.95rem;
  }

  .submit-btn {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  .info-header {
    gap: 0.8rem;
  }

  .info-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .info-item h3 {
    font-size: 1rem;
  }

  .social-list {
    gap: 0.6rem;
  }

  .info-item a {
    font-size: 0.9rem;
  }
}
</style>
