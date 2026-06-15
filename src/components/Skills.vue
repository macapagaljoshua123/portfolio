<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2>Skills & Expertise</h2>
      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.name" class="skill-category">
          <div class="skill-header">
            <Icon :name="category.icon" class="category-icon" />
            <h3>{{ category.name }}</h3>
          </div>
          <div class="skills-list">
            <span v-for="skill in category.skills" :key="skill" class="skill-item">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Skills',
  components: {
    Icon
  },
  data() {
    return {
      skillCategories: [
        {
          name: 'Frontend',
          icon: 'code',
          skills: ['Vue.js', 'React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS']
        },
        {
          name: 'Backend',
          icon: 'code',
          skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs']
        },
        {
          name: 'Tools & Platforms',
          icon: 'tool',
          skills: ['Git', 'Docker', 'Google AI Tools']
        },
        {
          name: 'Soft Skills',
          icon: 'people',
          skills: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Communication']
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 6rem 2rem;
  background: white;
  transition: background-color 0.3s ease;
}

:global(body.dark-mode) .skills,
:global(html.dark-mode) .skills {
  background: #1a1a1a;
}

:global(body.dark-mode) .skill-category,
:global(html.dark-mode) .skill-category {
  background: #1e1e2e;
  border-color: rgba(255, 255, 255, 0.05);
}

:global(body.dark-mode) .skill-item,
:global(html.dark-mode) .skill-item {
  background: #2a2a3e;
  color: #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.skill-category {
  background: #f8f9fa;
  padding: 2.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

:deep(.dark-mode) .skill-category {
  background: #1e1e2e;
  border-color: rgba(255, 255, 255, 0.05);
}

.skill-category:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 123, 255, 0.1);
  background: #f0f7ff;
}

:deep(.dark-mode) .skill-category:hover {
  background: #2a2a3e;
  box-shadow: 0 12px 24px rgba(0, 123, 255, 0.15);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.category-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.skill-category h3 {
  color: #007bff;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-item {
  background: white;
  color: #333;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: default;
}

:deep(.dark-mode) .skill-item {
  background: #2a2a3e;
  color: #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
}

.skill-item:hover {
  background: #007bff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.25);
  border-color: #007bff;
}

:deep(.dark-mode) .skill-item:hover {
  background: #007bff;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
}

@media (max-width: 768px) {
  .skills {
    padding: 4rem 2rem;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
  }

  .skill-category {
    padding: 2rem;
  }

  .skill-header {
    gap: 0.8rem;
  }

  .category-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .skill-category h3 {
    font-size: 1.1rem;
  }

  .skill-item {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .skills {
    padding: 3rem 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-category {
    padding: 1.5rem;
  }

  .category-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .skill-category h3 {
    font-size: 1rem;
  }

  .skills-list {
    gap: 0.6rem;
  }

  .skill-item {
    font-size: 0.8rem;
    padding: 0.4rem 0.9rem;
  }
}
</style>
</style>
