<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">{{ project.icon }}</div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          <div class="project-links">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener">GitHub</a>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener">Website</a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project One',
          description: ' A web application deployed on a infinityfree hosting that includes a responsive design and modern UI elements. Also this web you can make Events, Live Forms, Word Clouds, and QnAce that you can make an Question and Answer like Kahoot',
          icon: '',
          tech: ['HTML/CSS', 'JavaScript', 'PHP/MySQL'],
          github: 'https://github.com/macapagaljoshua123/edgelinkfree',
          link: 'http://edgelinkwebapp.great-site.net/',
          demo: 'http://edgelinkwebapp.great-site.net/'
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'website allows users to explore a catalog of PC parts (CPU, GPU, motherboards, RAM, etc.), view detailed product information, filter by categories, and manage a shopping cart. It includes user authentication features for a personalized experience.',
          icon: '',
          tech: ['React', 'Fast API Python', 'PostgreSQL'],
          github: 'https://github.com/macapagaljoshua123/pcgosite',
        },
        {
          id: 3,
          title: 'Project Three',
          description: 'AI-powered web search app with a TypeScript + React frontend and a Python FastAPI backend using Google Gemini AI and DuckDuckGo — no API key required for search (but AI needs Gemini API key).',
          icon: '',
          tech: ['TypeScript', 'Fast API Python', 'DuckduckGo', 'Google Gemini AI'],
          github: 'https://github.com/macapagaljoshua123/dev-intern-search-api',
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 5rem 2rem;
  background: #f8f9fa;
  transition: background-color 0.3s;
}

:deep(.dark-mode) .projects {
  background: #1a1a1a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #007bff;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

:deep(.dark-mode) .project-card {
  background: #2a2a2a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

:deep(.dark-mode) .project-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.project-image {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.project-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

:deep(.dark-mode) .project-card p {
  color: #ccc;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: #e7f3ff;
  color: #0066cc;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

:deep(.dark-mode) .tech-tag {
  background: #1a3a52;
  color: #66b3ff;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  color: #007bff;
  font-weight: 500;
  transition: opacity 0.3s;
}

.project-links a:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
