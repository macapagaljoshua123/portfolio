<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-header">
            <div class="project-image">
              <Icon name="rocket" />
            </div>
            <h3>{{ project.title }}</h3>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          <div class="project-links">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="link-btn">
              <Icon name="github" /> GitHub
            </a>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="link-btn">
              <Icon name="external" /> Website
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="link-btn">
              <Icon name="external" /> Demo
            </a>
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
      projects: [
        {
          id: 1,
          title: 'Project One',
          description: ' A web application deployed on a infinityfree hosting that includes a responsive design and modern UI elements. Also this web you can make Events, Live Forms, Word Clouds, and QnAce that you can make an Question and Answer like Kahoot',
          tech: ['HTML/CSS', 'JavaScript', 'PHP/MySQL'],
          github: 'https://github.com/macapagaljoshua123/edgelinkfree',
          link: 'http://edgelinkwebapp.great-site.net/',
          demo: 'http://edgelinkwebapp.great-site.net/'
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'website allows users to explore a catalog of PC parts (CPU, GPU, motherboards, RAM, etc.), view detailed product information, filter by categories, and manage a shopping cart. It includes user authentication features for a personalized experience.',
          tech: ['React', 'Fast API Python', 'PostgreSQL'],
          github: 'https://github.com/macapagaljoshua123/pcgosite',
        },
        {
          id: 3,
          title: 'Project Three',
          description: 'AI-powered web search app with a TypeScript + React frontend and a Python FastAPI backend using Google Gemini AI and DuckDuckGo — no API key required for search (but AI needs Gemini API key).',
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
  padding: 6rem 2rem;
  background: #f8f9fa;
  transition: background-color 0.3s ease;
}

:global(body.dark-mode) .projects,
:global(html.dark-mode) .projects {
  background: #1a1a1a;
}

:global(body.dark-mode) .project-card,
:global(html.dark-mode) .project-card {
  background: #1e1e2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
}

:global(body.dark-mode) .project-description,
:global(html.dark-mode) .project-description {
  color: #ccc;
}

:global(body.dark-mode) .tech-tag,
:global(html.dark-mode) .tech-tag {
  background: #1a3a52;
  color: #66b3ff;
  border-color: rgba(102, 179, 255, 0.2);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #007bff;
  text-align: center;
  letter-spacing: -0.5px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

:deep(.dark-mode) .project-card {
  background: #1e1e2e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 123, 255, 0.15);
}


.project-header {
  margin-bottom: 1.5rem;
}

.project-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1) rotate(5deg);
}

.project-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: #007bff;
}

.project-description {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
  flex-grow: 1;
}

:deep(.dark-mode) .project-description {
  color: #ccc;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: #e7f3ff;
  color: #0066cc;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 102, 204, 0.2);
}

.tech-tag:hover {
  background: #0066cc;
  color: white;
  border-color: #0066cc;
}

:deep(.dark-mode) .tech-tag {
  background: #1a3a52;
  color: #66b3ff;
  border-color: rgba(102, 179, 255, 0.2);
}

:deep(.dark-mode) .tech-tag:hover {
  background: #0066cc;
  border-color: #0066cc;
}

.project-links {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: #007bff;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 2px solid #007bff;
  text-decoration: none;
  cursor: pointer;
}

.link-btn:hover {
  background: white;
  color: #007bff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

:global(body.dark-mode) .link-btn:hover,
:global(html.dark-mode) .link-btn:hover {
  background: #007bff;
  color: white;
  border-color: #0056b3;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 2rem;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .link-btn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .projects {
    padding: 3rem 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .project-card {
    padding: 1.2rem;
  }

  .project-image {
    width: 48px;
    height: 48px;
    font-size: 1.4rem;
  }

  .project-card h3 {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .link-btn {
    flex: 1;
    justify-content: center;
  }
}
</style>
