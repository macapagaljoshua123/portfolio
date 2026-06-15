<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2>Get In Touch</h2>
      <p class="contact-intro">
        I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
      </p>
      
      <div class="contact-content">
        <div class="contact-form">
          <form @submit.prevent="submitForm" novalidate>
            <div class="form-group" :class="{ 'error': errors.name }">
              <label for="name">Name *</label>
              <input 
                v-model="form.name"
                type="text" 
                id="name" 
                placeholder="Your name"
                @blur="validateField('name')"
              >
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>
            
            <div class="form-group" :class="{ 'error': errors.email }">
              <label for="email">Email *</label>
              <input 
                v-model="form.email"
                type="email" 
                id="email" 
                placeholder="your@email.com"
                @blur="validateField('email')"
              >
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            
            <div class="form-group" :class="{ 'error': errors.message }">
              <label for="message">Message *</label>
              <textarea 
                v-model="form.message"
                id="message" 
                placeholder="Your message..."
                rows="5"
                @blur="validateField('message')"
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting" class="spinner"></span>
              <span v-else>📧 Send Message</span>
            </button>
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
              <a href="https://github.com/macapagaljoshua123" target="_blank" rel="noopener noreferrer">
                <Icon name="github" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/joshua-macapagal-5551643bb/" target="_blank" rel="noopener noreferrer">
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

    <!-- Toast Notification -->
    <div v-if="toast.show" :class="['toast', toast.type]" @click="toast.show = false">
      <span class="toast-icon">{{ toast.type === 'success' ? '✓' : '✗' }}</span>
      <span class="toast-message">{{ toast.message }}</span>
    </div>
  </section>
</template>

<script>
import Icon from './Icon.vue'

// ✅ IMPORTANT: You MUST replace this with your REAL Formspree form ID
// Get it from: https://formspree.io/ (Sign up → Create new form → Copy your form ID)
// Your form ID will look like: "xeqvzrkv" or similar
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkoaynbj'

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
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      toast: {
        show: false,
        message: '',
        type: 'success'
      }
    }
  },
  methods: {
    validateField(field) {
      const value = this.form[field].trim()
      
      switch(field) {
        case 'name':
          if (!value) {
            this.errors.name = 'Name is required'
          } else if (value.length < 2) {
            this.errors.name = 'Name must be at least 2 characters'
          } else {
            this.errors.name = ''
          }
          break
          
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!value) {
            this.errors.email = 'Email is required'
          } else if (!emailRegex.test(value)) {
            this.errors.email = 'Please enter a valid email address'
          } else {
            this.errors.email = ''
          }
          break
          
        case 'message':
          if (!value) {
            this.errors.message = 'Message is required'
          } else if (value.length < 10) {
            this.errors.message = 'Message must be at least 10 characters'
          } else {
            this.errors.message = ''
          }
          break
      }
    },
    
    validateForm() {
      this.validateField('name')
      this.validateField('email')
      this.validateField('message')
      return !this.errors.name && !this.errors.email && !this.errors.message
    },
    
    showToast(message, type = 'success') {
      this.toast = {
        show: true,
        message,
        type
      }
      
      // Auto hide after 4 seconds
      setTimeout(() => {
        this.toast.show = false
      }, 4000)
    },
    
    async submitForm() {
      // Check if Formspree ID is still placeholder
      if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID_HERE')) {
        this.showToast('⚠️ Form not configured yet. Please email me directly at joshuamacapagal0409@gmail.com', 'error')
        return
      }
      
      if (!this.validateForm()) {
        this.showToast('Please fix the errors in the form', 'error')
        return
      }
      
      this.isSubmitting = true
      
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          })
        })
        
        if (response.ok) {
          this.showToast('✓ Message sent successfully! I\'ll get back to you soon.', 'success')
          this.resetForm()
        } else {
          const data = await response.json()
          throw new Error(data.errors ? data.errors.map(e => e.message).join(', ') : 'Failed to send')
        }
      } catch (error) {
        console.error('Form submission error:', error)
        this.showToast('Failed to send message. Please email me directly at joshuamacapagal0409@gmail.com', 'error')
      } finally {
        this.isSubmitting = false
      }
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        message: ''
      }
      this.errors = {
        name: '',
        email: '',
        message: ''
      }
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
  background: #121212;
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
}

.contact-intro {
  text-align: center;
  font-size: 1.05rem;
  margin-bottom: 4rem;
  color: #666;
  line-height: 1.6;
}

.dark-mode .contact-intro {
  color: #e0e0e0;
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
  background: #1e1e2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
  background: white;
  color: #333;
  transition: all 0.3s ease;
  min-height: 44px;
}

.dark-mode .form-group input,
.dark-mode .form-group textarea {
  background: #2a2a3e;
  border-color: #3a3a4e;
  color: #e0e0e0;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form-group.error input,
.form-group.error textarea {
  border-color: #dc3545;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  min-height: 48px;
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

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Toast Notification */
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: slideIn 0.3s ease;
  cursor: pointer;
  max-width: 350px;
}

.dark-mode .toast {
  background: #1e1e2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.toast.success {
  border-left: 4px solid #28a745;
}

.toast.error {
  border-left: 4px solid #dc3545;
}

.toast-icon {
  font-size: 1.2rem;
  font-weight: bold;
}

.toast.success .toast-icon {
  color: #28a745;
}

.toast.error .toast-icon {
  color: #dc3545;
}

.toast-message {
  font-size: 0.9rem;
  color: #333;
}

.dark-mode .toast-message {
  color: #e0e0e0;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
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
  background: #1e1e2e;
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
  min-height: 44px;
  padding: 10px 0;
}

.info-item a:hover {
  text-decoration: underline;
}

.info-item p {
  color: #666;
  margin: 0;
}

.dark-mode .info-item p {
  color: #e0e0e0;
}

.social-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1rem;
    margin: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .toast {
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: calc(100% - 32px);
  }
}
</style>