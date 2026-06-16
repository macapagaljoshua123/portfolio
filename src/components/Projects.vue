<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2>Featured Projects</h2>
      
      <!-- Filter Buttons -->
      <div class="filter-buttons" role="tablist" aria-label="Project categories">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="currentCategory = category"
          :class="['filter-btn', { active: currentCategory === category }]"
          :aria-pressed="currentCategory === category"
        >
          {{ category === 'all' ? 'All Projects' : category }}
        </button>
      </div>
      
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div 
            class="carousel-slide" 
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(project, index) in filteredProjects" 
              :key="project.id" 
              class="project-card"
              @click="openModal(project)"
            >
              <div class="project-image">
                <img 
                  :src="project.image" 
                  :alt="project.title" 
                  class="project-img"
                  loading="lazy"
                  @error="handleImageError(project)"
                >
                <div class="project-overlay">
                  <span class="view-details">🔍 Click to View Details</span>
                </div>
              </div>
              <h3>{{ project.title }}</h3>
              <p class="project-tagline">{{ project.tagline }}</p>
            </div>
          </div>
        </div>

        <button class="carousel-btn prev-btn" @click.stop="prevSlide" aria-label="Previous project">
          ❮
        </button>
        <button class="carousel-btn next-btn" @click.stop="nextSlide" aria-label="Next project">
          ❯
        </button>

        <div class="carousel-dots">
          <span 
            v-for="(_, index) in filteredProjects" 
            :key="index"
            class="dot"
            :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="selectedProject" class="modal" @click.self="closeModal" role="dialog" aria-modal="true">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal" aria-label="Close">×</button>
          
          <div class="modal-header">
            <div class="modal-icon">{{ selectedProject.icon }}</div>
            <h2>{{ selectedProject.title }}</h2>
          </div>
          
          <div class="modal-body">
            <img 
              :src="selectedProject.image" 
              :alt="selectedProject.title" 
              class="modal-img"
              loading="lazy"
              @error="handleImageError(selectedProject)"
            >
            
            <div class="modal-description">
              <p>{{ selectedProject.description }}</p>
            </div>
            
            <div class="modal-tech">
              <h3>Technologies Used</h3>
              <div class="tech-list">
                <span v-for="tech in selectedProject.tech" :key="tech" class="tech-badge">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="modal-links">
              <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank" rel="noopener noreferrer" class="modal-link github">
                <Icon name="github" /> View on GitHub
              </a>
              <a v-if="selectedProject.link" :href="selectedProject.link" target="_blank" rel="noopener noreferrer" class="modal-link demo">
                <Icon name="external" /> Live Demo
              </a>
            </div>
            
            <!-- Git Clone Button -->
            <div class="git-clone-section" v-if="selectedProject.github">
              <div class="clone-input-group">
                <input 
                  type="text" 
                  :value="`git clone ${selectedProject.github}`" 
                  id="gitCloneUrl" 
                  readonly
                  aria-label="Git clone command"
                >
                <button @click="copyGitClone" class="copy-btn" :aria-label="'Copy git clone command'">
                  {{ copyButtonText }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Projects',
  components: {
    Icon
  },
  data() {
    return {
      currentIndex: 0,
      selectedProject: null,
      autoplayInterval: null,
      scrollPosition: 0,
      currentCategory: 'all',
      copyButtonText: 'Copy',
      projects: [
        {
          id: 1,
          title: 'EdgeLink WebApp',
          icon: '🌐',
          tagline: 'Interactive Event Platform',
          image: '/images/edgelink.png',
          fallbackImage: '/images/fallback-project.png',
          description: 'A web application deployed on infinityfree hosting that includes a responsive design and modern UI elements. This web app allows you to create Events, Live Forms, Word Clouds, and QnAce for interactive Q&A sessions like Kahoot.',
          tech: ['HTML/CSS', 'JavaScript', 'PHP/MySQL'],
          github: 'https://github.com/macapagaljoshua123/edgelinkfree',
          link: 'http://edgelinkwebapp.great-site.net/',
          category: 'fullstack'
        },
        {
          id: 2,
          title: 'PC Parts E-Commerce',
          icon: '🖥️',
          tagline: 'Build Your Dream PC',
          image: '/images/pceco.png',
          fallbackImage: '/images/fallback-project.png',
          description: 'A full-stack web application for browsing and purchasing PC components. Built with React.js frontend, Node.js backend, and PostgreSQL database. Features include product filtering, shopping cart, and user authentication.',
          tech: ['React', 'Node.js', 'PostgreSQL'],
          github: 'https://github.com/macapagaljoshua123/pcgosite',
          category: 'fullstack'
        },
        {
          id: 3,
          title: 'AI Search App',
          icon: '✨',
          tagline: 'AI-Powered Web Search',
          image: '/images/ai-assistant.png',
          fallbackImage: '/images/fallback-project.png',
          description: 'AI-powered web search app with a TypeScript + React frontend and a Python FastAPI backend using Google Gemini AI and DuckDuckGo — no API key required for search (but AI needs Gemini API key). Features include chat interface, web search, and source citations.',
          tech: ['TypeScript', 'FastAPI', 'Google Gemini AI', 'DuckDuckGo'],
          github: 'https://github.com/macapagaljoshua123/dev-intern-search-api',
          link: 'https://dev-intern-search-api-1kxv-deiwbv7iv.vercel.app/',
          category: 'ai'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.currentCategory === 'all') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.currentCategory)
    },
    categories() {
      return ['all', ...new Set(this.projects.map(p => p.category))]
    }
  },
  mounted() {
    this.startAutoplay()
    window.addEventListener('keydown', this.handleEscapeKey)
  },
  beforeUnmount() {
    this.stopAutoplay()
    window.removeEventListener('keydown', this.handleEscapeKey)
  },
  methods: {
    handleImageError(project) {
      project.image = project.fallbackImage
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.filteredProjects.length
      this.resetAutoplay()
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.filteredProjects.length) % this.filteredProjects.length
      this.resetAutoplay()
    },
    goToSlide(index) {
      this.currentIndex = index
      this.resetAutoplay()
    },
    lockScroll() {
      this.scrollPosition = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${this.scrollPosition}px`
      document.body.style.width = '100%'
    },
    unlockScroll() {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, this.scrollPosition)
    },
    openModal(project) {
      this.selectedProject = project
      this.lockScroll()
      this.stopAutoplay()
    },
    closeModal() {
      this.selectedProject = null
      this.unlockScroll()
      this.startAutoplay()
    },
    handleEscapeKey(event) {
      if (event.key === 'Escape' && this.selectedProject) {
        this.closeModal()
      }
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
        this.autoplayInterval = null
      }
    },
    resetAutoplay() {
      this.stopAutoplay()
      this.startAutoplay()
    },
    async copyGitClone() {
      const gitUrl = `git clone ${this.selectedProject.github}`
      try {
        await navigator.clipboard.writeText(gitUrl)
        this.copyButtonText = 'Copied! ✓'
        setTimeout(() => {
          this.copyButtonText = 'Copy'
        }, 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
        this.copyButtonText = 'Failed! ✗'
        setTimeout(() => {
          this.copyButtonText = 'Copy'
        }, 2000)
      }
    }
  },
  watch: {
    currentCategory() {
      this.currentIndex = 0
    },
    filteredProjects() {
      if (this.currentIndex >= this.filteredProjects.length) {
        this.currentIndex = Math.max(0, this.filteredProjects.length - 1)
      }
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 6rem 2rem;
  background: #f8f9fa;
  transition: background-color 0.3s ease;
  border-radius: 20px;
  margin: 2rem;
  position: relative;
  z-index: 2;
}

.dark-mode .projects {
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

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  background: white;
  border: 2px solid #007bff;
  border-radius: 25px;
  color: #007bff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
}

.dark-mode .filter-btn {
  background: #1e1e2e;
  border-color: #66b3ff;
  color: #66b3ff;
}

.filter-btn:hover {
  background: #007bff;
  color: white;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: #007bff;
  color: white;
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;
}

.carousel-wrapper {
  overflow: hidden;
  border-radius: 20px;
}

.carousel-slide {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.project-card {
  min-width: 100%;
  padding: 1rem;
  cursor: pointer;
  background: white;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.dark-mode .project-card {
  background: #1e1e2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 123, 255, 0.2);
}

.project-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 15px;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-details {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  background: #007bff;
  border-radius: 30px;
  border: 2px solid white;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
}

.project-card h3 {
  font-size: 1.5rem;
  color: #007bff;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.project-tagline {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

.dark-mode .project-tagline {
  color: #e0e0e0;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: rgba(0, 123, 255, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover {
  background: #007bff;
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn:focus-visible {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

.prev-btn {
  left: -60px;
}

.next-btn {
  right: -60px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 12px;
}

.dot:hover {
  background: #007bff;
  transform: scale(1.2);
}

.dot.active {
  width: 30px;
  background: #007bff;
  border-radius: 10px;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 700px;
  max-height: 85vh;
  border-radius: 20px;
  position: relative;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

.dark-mode .modal-content {
  background: #1e1e2e;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
  z-index: 10;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: #007bff;
  transform: rotate(90deg);
}

.modal-close:focus-visible {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 20px 20px 0 0;
}

.modal-icon {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.modal-header h2 {
  color: white;
  margin: 0;
  font-size: 1.8rem;
}

.modal-body {
  padding: 1.5rem;
}

.modal-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1.5rem;
}

.modal-description p {
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
}

.dark-mode .modal-description p {
  color: #e0e0e0;
}

.modal-tech h3 {
  color: #007bff;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  background: #e7f3ff;
  color: #0066cc;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  min-height: 38px;
  display: inline-flex;
  align-items: center;
}

.dark-mode .tech-badge {
  background: rgba(0, 123, 255, 0.2);
  color: #66b3ff;
}

.modal-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  min-height: 48px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.modal-link.github {
  background: #333;
  color: white;
}

.modal-link.demo {
  background: #007bff;
  color: white;
}

.modal-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.git-clone-section {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

.dark-mode .git-clone-section {
  border-top-color: #3a3a4e;
}

.clone-input-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.clone-input-group input {
  flex: 1;
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #333;
  font-family: monospace;
  font-size: 0.85rem;
}

.dark-mode .clone-input-group input {
  background: #2a2a3e;
  border-color: #3a3a4e;
  color: #e0e0e0;
}

.copy-btn {
  padding: 0.75rem 1.5rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.copy-btn:hover {
  background: #218838;
  transform: translateY(-1px);
}

.copy-btn:focus-visible {
  outline: 2px solid #28a745;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 1rem;
    margin: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .filter-buttons {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .prev-btn {
    left: -45px;
  }

  .next-btn {
    right: -45px;
  }

  .project-image {
    height: 220px;
  }

  .modal-header h2 {
    font-size: 1.3rem;
  }
  
  .clone-input-group {
    flex-direction: column;
  }
  
  .clone-input-group input {
    width: 100%;
  }
  
  .copy-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .carousel-btn {
    display: none;
  }

  .project-image {
    height: 180px;
  }

  .project-card h3 {
    font-size: 1.2rem;
  }

  .modal-content {
    width: 95%;
  }

  .modal-links {
    flex-direction: column;
  }
}
</style>