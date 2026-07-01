# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio features a clean design, smooth animations, and is fully responsive across all devices.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Animations**: CSS animations and JavaScript interactions
- **SEO Friendly**: Semantic HTML structure

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Personal information and statistics
3. **Skills Section**: Technical skills organized by category
4. **Projects Section**: Featured projects with descriptions and links
5. **Contact Section**: Contact information and form

## Customization Guide

### Personal Information

1. **Name and Title**: Update the hero section in `index.html`
   ```html
   <h1 class="hero-title">
       Hi, I'm <span class="highlight">Your Name</span>
   </h1>
   <h2 class="hero-subtitle">Full Stack Developer</h2>
   ```

2. **About Section**: Modify the about content in `index.html`
   ```html
   <p>I'm a passionate developer with 3+ years of experience...</p>
   ```

3. **Contact Information**: Update contact details in `index.html`
   ```html
   <span>your.email@example.com</span>
   <span>+1 (555) 123-4567</span>
   <span>Your City, Country</span>
   ```

### Skills

Update the skills section in `index.html` to reflect your technical skills:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

### Projects

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="github-link" class="project-link">
                <i class="fab fa-github"></i>
                Code
            </a>
            <a href="live-demo-link" class="project-link">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </a>
        </div>
    </div>
</div>
```

### Colors and Styling

Main colors can be customized in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --text-color: #333;
    --background-color: #ffffff;
}
```

### Profile Image

To add your profile image:

1. Replace the icon in the hero section:
```html
<div class="profile-image">
    <img src="your-photo.jpg" alt="Your Name">
</div>
```

2. Update the CSS in `styles.css`:
```css
.profile-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times
- Mobile-first responsive design

## Getting Started

1. Download or clone the files
2. Open `index.html` in your web browser
3. Customize the content with your information
4. Deploy to your preferred hosting platform

## Deployment

You can deploy this portfolio to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out!
