<template>
  <div :class="{ 'dark-mode': darkMode }">
    <header class="navbar">
      <div class="container">
        <div class="logo">Joshua Macapagal</div>
        <nav class="nav-links">
          <a href="#" @click.prevent="scrollToSection('about')">About</a>
          <a href="#" @click.prevent="scrollToSection('projects')">Projects</a>
          <a href="#" @click.prevent="scrollToSection('skills')">Skills</a>
          <a href="#" @click.prevent="scrollToSection('contact')">Contact</a>
          <button class="theme-toggle" @click="toggleDarkMode" :title="darkMode ? 'Light Mode' : 'Dark Mode'">
            {{ darkMode ? '☀️' : '🌙' }}
          </button>
        </nav>
      </div>
    </header>

    <main>
      <About ref="aboutSection" />
      <Projects ref="projectsSection" />
      <Skills ref="skillsSection" />
      <Contact ref="contactSection" />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 Joshua Macapagal. All rights reserved.</p>
        <div class="social-links">
          <a href="https://github.com/macapagaljoshua123" target="_blank" rel="noopener"></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener"></a>
          <a href="mailto:your-email@example.com"></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    About,
    Projects,
    Skills,
    Contact
  },
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      document.body.classList.toggle('dark-mode')
      localStorage.setItem('darkMode', this.darkMode)
    },
    scrollToSection(sectionName) {
      const section = this.$refs[sectionName + 'Section']
      if (section) {
        section.$el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  mounted() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    if (savedDarkMode) {
      this.darkMode = true
      document.body.classList.add('dark-mode')
    }
  }
}
</script>

<style scoped>
.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s;
}

.dark-mode .navbar {
  background: #2a2a2a;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.dark-mode .nav-links a {
  color: #f0f0f0;
}

.nav-links a:hover {
  color: #007bff;
}

.theme-toggle {
  font-size: 1.5rem;
  transition: transform 0.3s;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

main {
  min-height: calc(100vh - 200px);
}

.footer {
  background: #f8f9fa;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #dee2e6;
  transition: background-color 0.3s;
}

.dark-mode .footer {
  background: #2a2a2a;
  border-top-color: #444;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-links a {
  color: #007bff;
  font-weight: 500;
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 0.7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>

<style>
.dark-mode {
  background-color: #1a1a1a;
  color: #f0f0f0;
}
</style>
