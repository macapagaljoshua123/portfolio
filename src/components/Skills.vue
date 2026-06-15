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
            <span v-for="skill in category.skills" :key="skill" class="skill-item">
              {{ skill }}
            </span>
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
  border-radius: 20px;
  margin: 2rem;
  position: relative;
  z-index: 2;
}

.dark-mode .skills {
  background: #121212;
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
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.dark-mode .skill-category {
  background: #1e1e2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 123, 255, 0.1);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.category-icon {
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
}

.skill-category h3 {
  color: #007bff;
  margin: 0;
  font-size: 1.3rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-item {
  background: white;
  color: #333;
  padding: 8px 18px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
}

/* Dark mode - WCAG AA compliant (4.5:1 contrast ratio) */
.dark-mode .skill-item {
  background: #2a2a3e;
  color: #e0e0e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.skill-item:hover {
  background: #007bff;
  color: white;
  transform: translateY(-2px);
  cursor: default;
}

.dark-mode .skill-item:hover {
  background: #007bff;
  color: white;
}

@media (max-width: 768px) {
  .skills {
    padding: 4rem 1rem;
    margin: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .skill-category {
    padding: 1.5rem;
  }

  .category-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }

  .skill-category h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .skills {
    padding: 3rem 1rem;
  }

  .skill-category {
    padding: 1rem;
  }

  .skill-item {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
</style>