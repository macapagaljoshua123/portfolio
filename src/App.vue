<template>
  <div :class="{ 'dark-mode': darkMode }" class="app-container">
    <!-- Dark Mode Background -->
    <div class="dark-bg" v-if="darkMode"></div>
    
    <!-- Galaxy Elements - Now only visible in About section -->
    <div class="galaxy-elements" v-if="darkMode" ref="galaxyContainer">
      <!-- Stars -->
      <div class="stars-container">
        <div class="star" v-for="i in 30" :key="i" :style="{ top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', animationDelay: Math.random() * 5 + 's' }"></div>
      </div>
      
      <!-- Planet Jupiter -->
      <div class="planet jupiter" @click.stop="showCharacterMessage($event, 'jupiter')">
        <div class="planet-ring"></div>
        <div class="planet-tooltip">Click me! 🪐</div>
      </div>
      
      <!-- Planet Earth -->
      <div class="planet earth" @click.stop="showCharacterMessage($event, 'earth')">
        <div class="planet-tooltip">Click me! 🌍</div>
      </div>
      
      <!-- Planet Mars -->
      <div class="planet mars" @click.stop="showCharacterMessage($event, 'mars')">
        <div class="planet-tooltip">Click me! 🔴</div>
      </div>
      
      <!-- Spaceship -->
      <div class="spaceship">
        <div class="spaceship-body"></div>
        <div class="spaceship-cockpit"></div>
        <div class="spaceship-engine"></div>
        <div class="spaceship-beam"></div>
      </div>
      
      <!-- Alien 1 -->
      <div class="alien alien-1" @click.stop="showCharacterMessage($event, 'alien1')">
        <div class="alien-head"></div>
        <div class="alien-eyes">
          <div class="alien-eye"></div>
          <div class="alien-eye"></div>
        </div>
        <div class="alien-body"></div>
        <div class="alien-tooltip">Click me! 👽</div>
      </div>
      
      <!-- Alien 2 -->
      <div class="alien alien-2" @click.stop="showCharacterMessage($event, 'alien2')">
        <div class="alien-head"></div>
        <div class="alien-eyes">
          <div class="alien-eye"></div>
          <div class="alien-eye"></div>
        </div>
        <div class="alien-body"></div>
        <div class="alien-tooltip">Click me! 👾</div>
      </div>
      
      <!-- Alien 3 -->
      <div class="alien alien-3" @click.stop="showCharacterMessage($event, 'alien3')">
        <div class="alien-head"></div>
        <div class="alien-eyes">
          <div class="alien-eye"></div>
          <div class="alien-eye"></div>
        </div>
        <div class="alien-body"></div>
        <div class="alien-tooltip">Click me! 👽</div>
      </div>
      
      <!-- Moon with Astronaut -->
      <div class="moon-scene" @click.stop="showCharacterMessage($event, 'astronaut')">
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
        <div class="moon-tooltip">Click me! 👨‍🚀</div>
      </div>
      
      <!-- Shooting Stars - Fixed: Normal falling stars -->
      <div class="shooting-star" v-for="i in 8" :key="i" :style="{ animationDelay: `${i * 2}s`, top: `${Math.random() * 80}%`, left: `${Math.random() * 100}%` }"></div>
      
      <!-- Satellite -->
      <div class="satellite" @click.stop="showCharacterMessage($event, 'satellite')">
        <div class="satellite-body"></div>
        <div class="satellite-panel panel-left"></div>
        <div class="satellite-panel panel-right"></div>
        <div class="satellite-tooltip">Click me! 🛰️</div>
      </div>
    </div>

    <!-- Speech Bubbles - Positioned above characters -->
    <div v-if="activeCharacter" class="global-speech-bubble" :class="bubbleType" :style="bubbleStyle">
      <div class="bubble-content">
        <span class="bubble-icon">{{ bubbleIcon }}</span>
        <p>{{ activeMessage }}</p>
      </div>
      <div class="bubble-tail"></div>
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

    <button v-show="showBackToTop" class="back-to-top" @click="scrollToTop">↑</button>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 Joshua Macapagal. All rights reserved.</p>
        <div class="social-links">
          <a href="https://github.com/macapagaljoshua123" target="_blank" rel="noopener noreferrer"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/joshua-macapagal-5551643bb/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /></a>
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
      darkMode: false,
      showBackToTop: false,
      activeCharacter: null,
      activeMessage: '',
      bubbleIcon: '',
      bubbleType: 'alien',
      bubbleStyle: {},
      messageTimeout: null,
      scrollHandler: null
    }
  },
  mounted() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    if (savedDarkMode) {
      this.darkMode = true
    }
    window.addEventListener('scroll', this.handleScroll)
    
    // Position galaxy elements relative to About section
    this.$nextTick(() => {
      this.positionGalaxyElements()
      window.addEventListener('scroll', this.positionGalaxyElements)
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.positionGalaxyElements)
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout)
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
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    positionGalaxyElements() {
      const aboutSection = this.$refs.aboutSection?.$el
      if (aboutSection && this.darkMode) {
        const rect = aboutSection.getBoundingClientRect()
        const galaxyEl = this.$refs.galaxyContainer
        if (galaxyEl) {
          // Position galaxy only within About section
          galaxyEl.style.position = 'absolute'
          galaxyEl.style.top = `${window.scrollY + rect.top}px`
          galaxyEl.style.height = `${rect.height}px`
        }
      }
    },
    showCharacterMessage(event, character) {
      // Clear previous timeout
      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout)
      }
      
      // Get character position
      const rect = event.currentTarget.getBoundingClientRect()
      
      // Set message based on character
      let message = ''
      let icon = ''
      let type = 'alien'
      
      switch(character) {
        case 'jupiter':
          message = 'Your skills are massive like my Great Red Spot!'
          icon = '🪐'
          type = 'planet'
          break
        case 'earth':
          message = 'Earth welcomes you! Keep building amazing things! 🌍'
          icon = '🌍'
          type = 'planet'
          break
        case 'mars':
          message = 'Mars is impressed! Your code is red-hot! 🔴'
          icon = '🔴'
          type = 'planet'
          break
        case 'alien1':
          message = 'Zorp zorp! We come in peace! Take me to your developer! 👽'
          icon = '👽'
          type = 'alien'
          break
        case 'alien2':
          message = 'Beep boop! Your portfolio is out of this world! 🚀'
          icon = '👾'
          type = 'alien'
          break
        case 'alien3':
          message = 'Greetings Earthling! Love your Vue.js skills! Keep coding! 🛸'
          icon = '🛸'
          type = 'alien'
          break
        case 'astronaut':
          const messages = [
            'Houston, we have a solution! Amazing portfolio, Joshua! 🚀',
            'One small click for man, one giant leap for your career! 🌙',
            'To infinity and beyond! Your code is stellar! ⭐',
            'Star quality detected! This developer is going places! ✨'
          ]
          message = messages[Math.floor(Math.random() * messages.length)]
          icon = '👨‍🚀'
          type = 'human'
          break
        case 'satellite':
          message = '🛰️ "Signal received! Your coding frequency is excellent! Keep transmitting!"'
          icon = '🛰️'
          type = 'human'
          break
      }
      
      this.activeMessage = message
      this.bubbleIcon = icon
      this.bubbleType = type
      this.activeCharacter = character
      
      // Position bubble ABOVE the character's head
      this.bubbleStyle = {
        position: 'fixed',
        top: (rect.top - 100) + 'px',
        left: (rect.left + rect.width / 2 - 140) + 'px',
        zIndex: 2000
      }
      
      // Make sure bubble stays in viewport
      if (parseInt(this.bubbleStyle.left) < 10) {
        this.bubbleStyle.left = '10px'
      }
      if (parseInt(this.bubbleStyle.left) + 280 > window.innerWidth) {
        this.bubbleStyle.left = (window.innerWidth - 290) + 'px'
      }
      
      // Auto hide after 4 seconds
      this.messageTimeout = setTimeout(() => {
        this.activeCharacter = null
      }, 4000)
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

.app-container:not(.dark-mode) {
  background: #ffffff;
}

.dark-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #0a0a2a 0%, #1a0033 50%, #000022 100%);
  z-index: 0;
}

/* Galaxy Elements - Positioned relative to About section */
.galaxy-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 20;
  overflow: visible;
}

.galaxy-elements .planet,
.galaxy-elements .alien,
.galaxy-elements .moon-scene,
.galaxy-elements .satellite {
  pointer-events: auto;
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
  position: absolute;
  z-index: 25;
}

.galaxy-elements .planet:hover,
.galaxy-elements .alien:hover,
.galaxy-elements .moon-scene:hover,
.galaxy-elements .satellite:hover {
  transform: scale(1.15);
  filter: brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.4));
}

/* Tooltips */
.planet-tooltip,
.alien-tooltip,
.moon-tooltip,
.satellite-tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 10px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 30;
  font-weight: bold;
}

.planet:hover .planet-tooltip,
.alien:hover .alien-tooltip,
.moon-scene:hover .moon-tooltip,
.satellite:hover .satellite-tooltip {
  opacity: 1;
}

/* ========== GLOBAL SPEECH BUBBLE ========== */
.global-speech-bubble {
  position: fixed;
  background: white;
  border-radius: 20px;
  padding: 15px 20px;
  min-width: 260px;
  max-width: 320px;
  animation: bubblePop 0.3s ease-out;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  z-index: 2000;
}

.bubble-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bubble-icon {
  font-size: 2.5rem;
}

.bubble-content p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #333;
  font-weight: 500;
}

.bubble-tail {
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid white;
}

/* Alien Bubble */
.global-speech-bubble.alien {
  background: #1a2e1a;
  border: 2px solid #4CAF50;
}

.global-speech-bubble.alien .bubble-content p {
  color: #90EE90;
}

.global-speech-bubble.alien .bubble-tail {
  border-top-color: #1a2e1a;
}

/* Human Bubble */
.global-speech-bubble.human {
  background: #1a2a3e;
  border: 2px solid #007bff;
}

.global-speech-bubble.human .bubble-content p {
  color: #87CEEB;
}

.global-speech-bubble.human .bubble-tail {
  border-top-color: #1a2a3e;
}

/* Planet Bubble */
.global-speech-bubble.planet {
  background: #3e2a1a;
  border: 2px solid #FF9800;
}

.global-speech-bubble.planet .bubble-content p {
  color: #FFD699;
}

.global-speech-bubble.planet .bubble-tail {
  border-top-color: #3e2a1a;
}

@keyframes bubblePop {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* ========== STARS ========== */
.stars-container {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
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

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}

/* ========== PLANETS ========== */
.planet {
  border-radius: 50%;
  animation: floatPlanet 20s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(255,255,255,0.2);
}

.jupiter {
  width: 100px;
  height: 100px;
  top: 15%;
  right: 5%;
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

.earth {
  width: 65px;
  height: 65px;
  bottom: 10%;
  left: 5%;
  background: linear-gradient(135deg, #4169E1, #228B22, #87CEEB);
  animation-duration: 18s;
  animation-delay: 2s;
}

.mars {
  width: 50px;
  height: 50px;
  top: 50%;
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
  top: 40%;
  left: -80px;
  animation: flySpaceship 14s linear infinite;
  pointer-events: none;
  z-index: 22;
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
  animation: danceAlien 2s ease-in-out infinite;
}

.alien-1 {
  top: 25%;
  left: 15%;
}

.alien-2 {
  top: 65%;
  left: 70%;
  animation-delay: 0.5s;
}

.alien-3 {
  top: 75%;
  right: 8%;
  animation-delay: 1s;
}

.alien-head {
  width: 40px;
  height: 40px;
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
  top: 12px;
  left: 8px;
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
  width: 25px;
  height: 18px;
  background: #4CAF50;
  border-radius: 10px;
  position: absolute;
  bottom: -18px;
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
  bottom: 8%;
  right: 5%;
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

/* ========== SHOOTING STARS - FIXED: Normal falling stars ========== */
.shooting-star {
  position: absolute;
  width: 2px;
  height: 80px;
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0));
  animation: shootStar 4s linear infinite;
  opacity: 0;
  pointer-events: none;
  transform: rotate(0deg);
}

.shooting-star::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -4px;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, rgba(255,255,200,1), rgba(255,255,255,0));
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255,255,200,0.9);
}

@keyframes shootStar {
  0% {
    transform: translateY(-100px) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    transform: translateY(300px) translateX(100px);
    opacity: 1;
  }
  100% {
    transform: translateY(400px) translateX(150px);
    opacity: 0;
  }
}

/* ========== SATELLITE ========== */
.satellite {
  position: absolute;
  top: 30%;
  right: 10%;
  animation: satelliteOrbit 12s ease-in-out infinite;
  cursor: pointer;
  z-index: 22;
}

.satellite-body {
  width: 25px;
  height: 25px;
  background: #C0C0C0;
  border-radius: 5px;
}

.satellite-panel {
  position: absolute;
  width: 40px;
  height: 15px;
  background: #4169E1;
  top: 5px;
}

.panel-left {
  left: -45px;
  border-radius: 5px 0 0 5px;
}

.panel-right {
  right: -45px;
  border-radius: 0 5px 5px 0;
}

@keyframes satelliteOrbit {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
}

/* ========== NAVBAR ========== */
.navbar {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
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
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-links a {
  color: #333;
  font-weight: 500;
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

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #007bff;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-5px);
  background: #0056b3;
}

main {
  position: relative;
  z-index: 15;
  min-height: calc(100vh - 200px);
}

:deep(.about), 
:deep(.projects), 
:deep(.skills), 
:deep(.contact) {
  background: rgba(255, 255, 255, 0.85) !important;
  border-radius: 20px !important;
  margin: 2rem !important;
  position: relative;
  z-index: 15;
  backdrop-filter: blur(4px);
}

.dark-mode :deep(.about),
.dark-mode :deep(.projects),
.dark-mode :deep(.skills),
.dark-mode :deep(.contact) {
  background: rgba(15, 15, 35, 0.85) !important;
}

.footer {
  background: #f8f9fa;
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid #dee2e6;
  position: relative;
  z-index: 15;
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

@media (max-width: 768px) {
  .jupiter, .earth, .mars { transform: scale(0.7); }
  .alien, .spaceship, .satellite { transform: scale(0.8); }
  .moon-scene { transform: scale(0.7); bottom: 0; }
  :deep(.about), :deep(.projects), :deep(.skills), :deep(.contact) {
    margin: 1rem !important;
  }
  .global-speech-bubble {
    min-width: 200px;
    max-width: 250px;
    padding: 10px 15px;
  }
  .bubble-icon {
    font-size: 1.8rem;
  }
  .bubble-content p {
    font-size: 0.8rem;
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