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
            <a href="mailto:joshuamacapagal0409@gmail.com">joshuamacapagal0409@gmail.com</a>
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
      if (this.form.name && this.form.email && this.form.subject && this.form.message) {
        console.log('Form submitted:', this.form)
        
        this.formStatus = 'success'
        this.formMessage = '✓ Message sent successfully! Thank you for reaching out.'
        
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
  border-radius: 20px;
  margin: 2rem;
  position: relative;
  z-index: 2;
}

.dark-mode .contact {
  background: rgba(20, 20, 40, 0.85);
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

.dark-mode .contact-intro {
  color: #ccc;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.dark-mode .contact-form {
  background: rgba(30, 30, 50, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form:hover {
  box-shadow: 0 8px 20px rgba(0, 123, 255, 0.1);
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.dark-mode .form-group label {
  color: #e0e0e0;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
  background: white;
  color: #333;
  transition: all 0.3s ease;
}

.dark-mode .form-group input,
.dark-mode .form-group textarea {
  background: rgba(50, 50, 70, 0.9);
  border-color: rgba(255, 255, 255, 0.2);
  color: white;
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
  background: linear-gradient(135deg, #007bff, #0056b3);
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
  gap: 0.5rem;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.form-message {
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
}

.form-message.success {
  background: #d4edda;
  color: #155724;
}

.dark-mode .form-message.success {
  background: #1a3a1a;
  color: #90ee90;
}

.form-message.error {
  background: #f8d7da;
  color: #721c24;
}

.dark-mode .form-message.error {
  background: #3a1a1a;
  color: #ff6b6b;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.dark-mode .info-item {
  background: rgba(30, 30, 50, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.info-item:hover {
  transform: translateY(-3px);
}

.info-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.info-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.info-item h3 {
  color: #007bff;
  margin: 0;
  font-size: 1.1rem;
}

.info-item a {
  color: #007bff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.info-item a:hover {
  text-decoration: underline;
}

.info-item p {
  color: #666;
  margin: 0;
}

.dark-mode .info-item p {
  color: #ccc;
}

.social-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 2rem;
    margin: 1rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  .contact-intro {
    margin-bottom: 3rem;
    font-size: 1rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-form,
  .info-item {
    padding: 1.2rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 3rem 1.5rem;
    margin: 0.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .contact-intro {
    font-size: 0.9rem;
  }

  .submit-btn {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
}
</style>