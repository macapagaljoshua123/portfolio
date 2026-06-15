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
            <Icon :name="darkMode ? 'sun' : 'moon'" />
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
          <a href="https://github.com/macapagaljoshua123" target="_blank" rel="noopener" title="GitHub"><Icon name="github" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" title="LinkedIn"><Icon name="linkedin" /></a>
          <a href="mailto:your-email@example.com" title="Email"><Icon name="mail" /></a>
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
import Icon from './components/Icon.vue'

export default {
  name: 'App',
  components: {
    About,
    Projects,
    Skills,
    Contact,
    Icon
  },
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      document.documentElement.classList.toggle('dark-mode')
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
      document.documentElement.classList.add('dark-mode')
      document.body.classList.add('dark-mode')
    }
  }
}
</script>

<style scoped>
.navbar {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

html.dark-mode .navbar,
body.dark-mode :deep(.navbar) {
  background: #1e1e2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  max-width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
  letter-spacing: -0.5px;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.nav-links a {
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #007bff;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

html.dark-mode .nav-links a,
body.dark-mode :deep(.nav-links a) {
  color: #f0f0f0;
}

.nav-links a:hover {
  color: #007bff;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f0f0;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  color: #007bff;
}

html.dark-mode .theme-toggle,
body.dark-mode :deep(.theme-toggle) {
  background: #2a2a3e;
}

.theme-toggle:hover {
  transform: rotate(20deg);
  background: #e0e0e0;
}

html.dark-mode .theme-toggle:hover,
body.dark-mode :deep(.theme-toggle:hover) {
  background: #3a3a4e;
}

main {
  min-height: calc(100vh - 200px);
}

.footer {
  background: #f8f9fa;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid #dee2e6;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

html.dark-mode .footer,
body.dark-mode :deep(.footer) {
  background: #1e1e2e;
  border-top-color: #3a3a4e;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer p {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
}

html.dark-mode .footer p,
body.dark-mode :deep(.footer p) {
  color: #aaa;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: white;
  color: #007bff;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

html.dark-mode .social-links a,
body.dark-mode :deep(.social-links a) {
  background: #2a2a3e;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.social-links a:hover {
  background: #007bff;
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .navbar .container {
    padding: 1rem 1.5rem;
  }

  .logo {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .nav-links a {
    font-size: 0.9rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .footer {
    padding: 2rem 1.5rem;
  }

  .social-links {
    gap: 1rem;
  }

  .social-links a {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .navbar .container {
    padding: 0.8rem 1rem;
    flex-direction: column;
    gap: 0.8rem;
  }

  .logo {
    font-size: 1rem;
  }

  .nav-links {
    gap: 1rem;
    font-size: 0.85rem;
    justify-content: center;
  }

  .nav-links a {
    font-size: 0.85rem;
  }

  .container {
    padding: 0 1rem;
  }
}
</style>
