# Joshua Macapagal - Portfolio

A modern, responsive portfolio website built with **Vue 3** and **Vite**. This template showcases your projects, skills, and provides a way for visitors to get in touch.

## Features

✨ **Modern Design** - Clean, professional, and responsive layout  
🌙 **Dark Mode** - Toggle between light and dark themes with local storage persistence  
📱 **Mobile Responsive** - Works seamlessly on all devices  
⚡ **Fast Performance** - Built with Vite for optimal build speeds  
🎨 **Customizable** - Easy to adapt colors, content, and sections  
📦 **Production Ready** - Optimized for deployment

## Project Structure

```
.
├── index.html           # Entry HTML file
├── package.json         # Project dependencies
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.js         # Vue app entry point
│   ├── App.vue         # Main app component with navigation
│   └── components/
│       ├── About.vue   # About section
│       ├── Projects.vue # Projects showcase
│       ├── Skills.vue  # Skills list
│       └── Contact.vue # Contact form
└── README.md           # This file
```

## Sections

### About
Brief introduction about yourself, background, and interests.

### Projects
Showcase your featured projects with descriptions, technologies used, and links to GitHub/demo.

### Skills
Display your technical and soft skills organized by categories.

### Contact
Contact form and information for visitors to reach out.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/macapagaljoshua123/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## Development

### Start Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Customization

### Update Your Information

1. **App.vue** - Update social links and footer info
2. **About.vue** - Replace placeholder text with your bio
3. **Projects.vue** - Add your actual projects with correct links
4. **Skills.vue** - Update skills based on your expertise
5. **Contact.vue** - Update contact information and email

### Colors

The primary color is `#007bff` (blue). To change it:
- Find and replace `#007bff` with your preferred color in component files
- Update gradients in CSS as needed

### Adding a Contact Form Backend

The contact form is currently a placeholder. To make it functional:

**Option 1: Using Formspree**
```javascript
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(this.form)
})
```

**Option 2: Using Firebase**
```javascript
import { addDoc, collection } from 'firebase/firestore'
await addDoc(collection(db, 'messages'), this.form)
```

**Option 3: Using Your Own Backend**
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(this.form)
})
```

## Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

2. Build the project:
```bash
npm run build
```

3. Deploy using GitHub Pages or similar service

### Deploy to Vercel

1. Connect your GitHub repo to Vercel
2. Vercel will auto-detect Vite and configure accordingly
3. Deploy with one click

### Deploy to Netlify

1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 90+
- Optimized bundle size
- Lazy loading support

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation build tool
- **CSS3** - Modern styling with variables and grid
- **JavaScript ES6+** - Modern JavaScript

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## Support

If you have questions or suggestions, please open an issue on GitHub.

---

**Made with ❤️ by Joshua Macapagal**

Visit: https://github.com/macapagaljoshua123
