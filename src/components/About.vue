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
  padding: 6rem 2rem;
  background: white;
  transition: background-color 0.3s ease;
}

:global(body.dark-mode) .about,
:global(html.dark-mode) .about {
  background: #1a1a1a;
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.05rem;
  color: #333;
}

:deep(.dark-mode) .about-text p {
  color: #ccc;
}

.about-image {
  display: flex;
  justify-content: center;
}

.avatar-image {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 12px 40px rgba(0, 123, 255, 0.2);
  border: 5px solid #007bff;
  transition: all 0.3s ease;
}

.avatar-image:hover {
  transform: scale(1.05);
  box-shadow: 0 16px 48px rgba(0, 123, 255, 0.3);
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .avatar-image {
    width: 240px;
    height: 240px;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 3rem 1.5rem;
  }

  .about-content {
    gap: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .about-text p {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }

  .avatar-image {
    width: 200px;
    height: 200px;
    border-width: 4px;
  }
}
</style>
