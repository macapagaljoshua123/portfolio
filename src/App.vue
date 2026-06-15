<template>
  <div :class="{ 'dark-mode': darkMode }" class="app-container">
    <!-- Dark Mode Background -->
    <div class="dark-bg" v-if="darkMode"></div>
    
    <!-- Galaxy Elements - Pure CSS Graphics (Dark Mode Only) -->
    <div class="galaxy-elements" v-if="darkMode">
      <!-- Stars Container -->
      <div class="stars-container">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      
      <!-- Planet 1 - Jupiter-like -->
      <div class="planet jupiter">
        <div class="planet-ring"></div>
      </div>
      
      <!-- Planet 2 - Earth-like -->
      <div class="planet earth"></div>
      
      <!-- Planet 3 - Mars-like -->
      <div class="planet mars"></div>
      
      <!-- Spaceship -->
      <div class="spaceship">
        <div class="spaceship-body"></div>
        <div class="spaceship-cockpit"></div>
        <div class="spaceship-engine"></div>
        <div class="spaceship-beam"></div>
      </div>
      
      <!-- Alien 1 -->
      <div class="alien alien-1">
        <div class="alien-head"></div>
        <div class="alien-eyes">
          <div class="alien-eye"></div>
          <div class="alien-eye"></div>
        </div>
        <div class="alien-body"></div>
      </div>
      
      <!-- Alien 2 -->
      <div class="alien alien-2">
        <div class="alien-head"></div>
        <div class="alien-eyes">
          <div class="alien-eye"></div>
          <div class="alien-eye"></div>
        </div>
        <div class="alien-body"></div>
      </div>
      
      <!-- Alien 3 -->
      <div class="alien alien-3">
        <div class="alien-head"></div>
        <div class="alien-eyes">
          <div class="alien-eye"></div>
          <div class="alien-eye"></div>
        </div>
        <div class="alien-body"></div>
      </div>
      
      <!-- Moon with Astronaut -->
      <div class="moon-scene">
        <div class="moon-crater"></div>
        <div class="moon-crater-2"></div>
        <div class="astronaut">
          <div class="astronaut-helmet"></div>
          <div class="astronaut-body"></div>
          <div class="astronaut-arm"></div>
          <div class="flag-pole"></div>
          <div class="flag-ph">
            <div class="flag-blue"></div>
            <div class="flag-red"></div>
            <div class="flag-sun"></div>
          </div>
        </div>
      </div>
      
      <!-- Shooting Stars -->
      <div class="shooting-star"></div>
      <div class="shooting-star second"></div>
      
      <!-- Satellite -->
      <div class="satellite">
        <div class="satellite-body"></div>
        <div class="satellite-panel panel-left"></div>
        <div class="satellite-panel panel-right"></div>
      </div>
    </div>

    <!-- Navbar -->
    <header class="navbar">
      <div class="container">
        <div class="logo">Joshua Macapagal</div>
        <nav class="nav-links">
          <a href="#" @click.prevent="scrollToSection('about')">About</a>
          <a href="#" @click.prevent="scrollToSection('projects')">Projects</a>
          <a href="#" @click.prevent="scrollToSection('skills')">Skills</a>
          <a href="#" @click.prevent="scrollToSection('contact')">Contact</a>
          <button class="theme-toggle" @click="toggleDarkMode">
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
          <a href="https://github.com/macapagaljoshua123" target="_blank" rel="noopener"><Icon name="github" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener"><Icon name="linkedin" /></a>
          <a href="mailto:joshuamacapagal0409@gmail.com"><Icon name="mail" /></a>
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
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Light Mode */
.app-container:not(.dark-mode) {
  background: #ffffff;
}

/* Dark Mode Background */
.dark-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #0a0a2a 0%, #1a0033 50%, #000022 100%);
  z-index: 0;
}

/* Galaxy Elements Layer */
.galaxy-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

/* ========== STARS ========== */
.stars-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0.6;
  animation: twinkle 3s ease-in-out infinite;
}

.star:nth-child(1) { top: 5%; left: 10%; width: 3px; height: 3px; animation-delay: 0s; }
.star:nth-child(2) { top: 15%; left: 85%; width: 2px; height: 2px; animation-delay: 0.5s; }
.star:nth-child(3) { top: 25%; left: 45%; width: 2px; height: 2px; animation-delay: 1s; }
.star:nth-child(4) { top: 35%; left: 70%; width: 3px; height: 3px; animation-delay: 1.5s; }
.star:nth-child(5) { top: 45%; left: 20%; width: 2px; height: 2px; animation-delay: 0.3s; }
.star:nth-child(6) { top: 55%; left: 90%; width: 3px; height: 3px; animation-delay: 0.8s; }
.star:nth-child(7) { top: 65%; left: 35%; width: 2px; height: 2px; animation-delay: 1.2s; }
.star:nth-child(8) { top: 75%; left: 55%; width: 3px; height: 3px; animation-delay: 0.1s; }
.star:nth-child(9) { top: 85%; left: 15%; width: 2px; height: 2px; animation-delay: 1.8s; }
.star:nth-child(10) { top: 95%; left: 75%; width: 2px; height: 2px; animation-delay: 0.6s; }
.star:nth-child(11) { top: 10%; left: 50%; width: 2px; height: 2px; animation-delay: 2s; }
.star:nth-child(12) { top: 40%; left: 80%; width: 3px; height: 3px; animation-delay: 2.5s; }

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}

/* ========== PLANETS ========== */
.planet {
  position: absolute;
  border-radius: 50%;
  animation: floatPlanet 20s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(255,255,255,0.2);
}

/* Jupiter */
.jupiter {
  width: 100px;
  height: 100px;
  top: 12%;
  right: 3%;
  background: linear-gradient(135deg, #D2B48C, #A0522D, #8B4513);
  animation-duration: 25s;
}

.planet-ring {
  position: absolute;
  width: 140px;
  height: 30px;
  border: 3px solid rgba(210, 180, 140, 0.5);
  border-radius: 50%;
  top: 35px;
  left: -20px;
  transform: rotate(-15deg);
}

/* Earth */
.earth {
  width: 65px;
  height: 65px;
  bottom: 15%;
  left: 3%;
  background: linear-gradient(135deg, #4169E1, #228B22, #87CEEB);
  animation-duration: 18s;
  animation-delay: 2s;
}

/* Mars */
.mars {
  width: 50px;
  height: 50px;
  top: 55%;
  right: 8%;
  background: linear-gradient(135deg, #DC143C, #8B0000);
  animation-duration: 15s;
  animation-delay: 4s;
}

@keyframes floatPlanet {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(5deg); }
}

/* ========== SPACESHIP ========== */
.spaceship {
  position: absolute;
  top: 45%;
  left: -80px;
  animation: flySpaceship 14s linear infinite;
}

.spaceship-body {
  width: 60px;
  height: 25px;
  background: linear-gradient(135deg, #C0C0C0, #A9A9A9);
  border-radius: 25px 25px 25px 25px;
  position: relative;
}

.spaceship-cockpit {
  width: 20px;
  height: 20px;
  background: #87CEEB;
  border-radius: 50%;
  position: absolute;
  top: -12px;
  left: 10px;
  border: 2px solid white;
}

.spaceship-engine {
  width: 15px;
  height: 15px;
  background: #FF6347;
  border-radius: 50%;
  position: absolute;
  right: -8px;
  top: 5px;
  box-shadow: 0 0 10px #FF6347;
}

.spaceship-beam {
  width: 20px;
  height: 40px;
  background: linear-gradient(180deg, rgba(255,255,0,0.6), rgba(255,255,0,0));
  position: absolute;
  bottom: -35px;
  left: 20px;
  border-radius: 0 0 10px 10px;
  animation: beamPulse 0.8s ease-in-out infinite;
}

@keyframes flySpaceship {
  0% { transform: translateX(0) translateY(0); }
  20% { transform: translateX(30vw) translateY(-30px); }
  40% { transform: translateX(55vw) translateY(20px); }
  60% { transform: translateX(75vw) translateY(-15px); }
  80% { transform: translateX(90vw) translateY(10px); }
  100% { transform: translateX(calc(100vw + 100px)) translateY(0); }
}

@keyframes beamPulse {
  0%, 100% { opacity: 0.5; height: 40px; }
  50% { opacity: 1; height: 50px; }
}

/* ========== ALIENS ========== */
.alien {
  position: absolute;
  animation: danceAlien 2s ease-in-out infinite;
}

.alien-1 {
  top: 20%;
  left: 20%;
}

.alien-2 {
  top: 70%;
  left: 75%;
  animation-delay: 0.5s;
}

.alien-3 {
  top: 80%;
  right: 10%;
  animation-delay: 1s;
}

.alien-head {
  width: 35px;
  height: 35px;
  background: #4CAF50;
  border-radius: 50%;
  position: relative;
}

.alien-2 .alien-head {
  background: #9C27B0;
}

.alien-3 .alien-head {
  background: #FF9800;
}

.alien-eyes {
  display: flex;
  gap: 8px;
  position: absolute;
  top: 10px;
  left: 7px;
}

.alien-eye {
  width: 8px;
  height: 8px;
  background: black;
  border-radius: 50%;
}

.alien-eye::after {
  content: '';
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  position: absolute;
}

.alien-body {
  width: 20px;
  height: 15px;
  background: #4CAF50;
  border-radius: 10px;
  position: absolute;
  bottom: -15px;
  left: 7px;
}

.alien-2 .alien-body {
  background: #9C27B0;
}

.alien-3 .alien-body {
  background: #FF9800;
}

@keyframes danceAlien {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-12px) rotate(-10deg); }
  50% { transform: translateY(8px) rotate(10deg); }
  75% { transform: translateY(-5px) rotate(-5deg); }
}

/* ========== MOON & ASTRONAUT ========== */
.moon-scene {
  position: absolute;
  bottom: 5%;
  right: 3%;
  animation: bounceMoon 3s ease-in-out infinite;
}

.moon-crater {
  width: 90px;
  height: 90px;
  background: radial-gradient(circle at 30% 30%, #D3D3D3, #A9A9A9, #808080);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255,255,255,0.2);
}

.moon-crater::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: #696969;
  border-radius: 50%;
  top: 20px;
  left: 25px;
  opacity: 0.5;
}

.moon-crater-2 {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #696969;
  border-radius: 50%;
  top: 55px;
  left: 55px;
  opacity: 0.5;
}

.astronaut {
  position: absolute;
  top: -35px;
  left: 25px;
}

.astronaut-helmet {
  width: 25px;
  height: 25px;
  background: white;
  border-radius: 50%;
  border: 2px solid #C0C0C0;
}

.astronaut-body {
  width: 20px;
  height: 25px;
  background: white;
  border-radius: 10px;
  position: absolute;
  top: 22px;
  left: 2px;
}

.astronaut-arm {
  width: 15px;
  height: 8px;
  background: white;
  border-radius: 5px;
  position: absolute;
  top: 28px;
  left: -12px;
  transform: rotate(-30deg);
  animation: waveArm 2s ease-in-out infinite;
}

@keyframes waveArm {
  0%, 100% { transform: rotate(-30deg); }
  50% { transform: rotate(10deg); }
}

.flag-pole {
  width: 3px;
  height: 30px;
  background: #8B4513;
  position: absolute;
  top: -30px;
  left: 20px;
}

.flag-ph {
  position: absolute;
  top: -30px;
  left: 23px;
  width: 25px;
  height: 18px;
}

.flag-blue {
  width: 12px;
  height: 18px;
  background: #0038A8;
  position: absolute;
  left: 0;
  top: 0;
}

.flag-red {
  width: 13px;
  height: 9px;
  background: #CE1126;
  position: absolute;
  right: 0;
  top: 0;
}

.flag-sun {
  width: 8px;
  height: 8px;
  background: #FCD116;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  top: 5px;
}

@keyframes bounceMoon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* ========== SHOOTING STARS ========== */
.shooting-star {
  position: absolute;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, white, transparent);
  top: 15%;
  right: 0;
  animation: shootStar 10s linear infinite;
  transform: rotate(35deg);
}

.shooting-star.second {
  top: 45%;
  animation-duration: 14s;
  animation-delay: 5s;
}

@keyframes shootStar {
  0% {
    transform: translateX(0) translateY(0) rotate(35deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  20% {
    transform: translateX(-500px) translateY(200px) rotate(35deg);
    opacity: 1;
  }
  100% {
    transform: translateX(-800px) translateY(350px) rotate(35deg);
    opacity: 0;
  }
}

/* ========== SATELLITE ========== */
.satellite {
  position: absolute;
  top: 65%;
  left: -50px;
  animation: satelliteOrbit 18s linear infinite;
}

.satellite-body {
  width: 20px;
  height: 20px;
  background: #C0C0C0;
  border-radius: 5px;
}

.satellite-panel {
  position: absolute;
  width: 30px;
  height: 15px;
  background: #4169E1;
  top: 2px;
}

.panel-left {
  left: -35px;
  border-radius: 5px 0 0 5px;
}

.panel-right {
  right: -35px;
  border-radius: 0 5px 5px 0;
}

@keyframes satelliteOrbit {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(calc(100vw + 100px)) translateY(-50px); }
}

/* ========== NAVBAR ========== */
.navbar {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.dark-mode .navbar {
  background: rgba(30, 30, 46, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
  text-decoration: none;
  position: relative;
}

.dark-mode .nav-links a {
  color: #f0f0f0;
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

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f0f0;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.dark-mode .theme-toggle {
  background: #2a2a3e;
}

.theme-toggle:hover {
  transform: rotate(20deg);
}

/* ========== MAIN CONTENT ========== */
main {
  position: relative;
  z-index: 10;
  min-height: calc(100vh - 200px);
}

/* ========== FOOTER ========== */
.footer {
  background: #f8f9fa;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid #dee2e6;
  position: relative;
  z-index: 10;
}

.dark-mode .footer {
  background: rgba(30, 30, 46, 0.95);
  backdrop-filter: blur(10px);
  border-top-color: rgba(255, 255, 255, 0.1);
}

.footer p {
  color: #666;
  margin-bottom: 1.5rem;
}

.dark-mode .footer p {
  color: #aaa;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-links a {
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: white;
  color: #007bff;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.dark-mode .social-links a {
  background: #2a2a3e;
}

.social-links a:hover {
  background: #007bff;
  color: white;
  transform: translateY(-4px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Component Styles - Transparent para kita ang galaxy */
:deep(.about), :deep(.projects), :deep(.skills), :deep(.contact) {
  background: rgba(255, 255, 255, 0.95) !important;
  transition: background 0.3s ease;
  border-radius: 20px !important;
  margin: 2rem !important;
}

.dark-mode :deep(.about),
.dark-mode :deep(.projects),
.dark-mode :deep(.skills),
.dark-mode :deep(.contact) {
  background: rgba(20, 20, 40, 0.85) !important;
  backdrop-filter: none !important;
}

@media (max-width: 768px) {
  .jupiter, .earth, .mars { transform: scale(0.7); }
  .alien, .spaceship, .satellite { transform: scale(0.8); }
  .moon-scene { transform: scale(0.7); bottom: 0; }
  :deep(.about), :deep(.projects), :deep(.skills), :deep(.contact) {
    margin: 1rem !important;
  }
}

@media (max-width: 480px) {
  .jupiter, .earth, .mars { display: none; }
  .alien-1, .alien-2, .alien-3 { display: none; }
  .moon-scene { transform: scale(0.5); bottom: -2%; }
  :deep(.about), :deep(.projects), :deep(.skills), :deep(.contact) {
    margin: 0.5rem !important;
  }
}
</style>