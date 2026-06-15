<template>
  <section id="about" class="about">
    <div class="container">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Hi! I'm Joshua Macapagal, a passionate software developer with expertise in building modern web applications.
            I specialize in full-stack development and have a strong interest in creating elegant solutions to complex problems.
          </p>
          <p>
            With several years of experience, I've worked on various projects ranging from frontend interfaces to backend systems.
            I'm always eager to learn new technologies and best practices in the industry.
          </p>
          <p>
            When I'm not coding, you can find me exploring new tech trends, contributing to open source, or enjoying outdoor activities.
          </p>
        </div>
        <div class="about-image">
          <img src="/avatar.png" alt="Joshua Macapagal" class="avatar-image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 5rem 2rem;
  background: white;
  transition: background-color 0.3s;
}

:deep(.dark-mode) .about {
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
}

.about-image {
  display: flex;
  justify-content: center;
}

.avatar-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 5px solid #007bff;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 2rem;
  }

  .avatar-image {
    width: 200px;
    height: 200px;
  }
}
</style>
