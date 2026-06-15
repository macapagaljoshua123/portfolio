<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2>Skills & Expertise</h2>
      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.name" class="skill-category">
          <h3>{{ category.name }}</h3>
          <div class="skills-list">
            <span v-for="skill in category.skills" :key="skill" class="skill-item">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillCategories: [
        {
          name: 'Frontend',
          skills: ['Vue.js', 'React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS']
        },
        {
          name: 'Backend',
          skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs']
        },
        {
          name: 'Tools & Platforms',
          skills: ['Git', 'Docker', 'Google AI Tools']
        },
        {
          name: 'Soft Skills',
          skills: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Communication']
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 5rem 2rem;
  background: white;
  transition: background-color 0.3s;
}

:deep(.dark-mode) .skills {
  background: #2a2a2a;
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  transition: background-color 0.3s;
}

:deep(.dark-mode) .skill-category {
  background: #333;
}

.skill-category h3 {
  color: #007bff;
  margin-bottom: 1.5rem;
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
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.95rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

:deep(.dark-mode) .skill-item {
  background: #2a2a2a;
  color: #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.skill-item:hover {
  background: #007bff;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
