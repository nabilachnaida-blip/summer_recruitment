# Summer Recruitment 2026 — Stellantis Morocco

A professional, fully responsive landing page for the Stellantis Morocco Summer Recruitment 2026 campaign.

## 📋 Project Overview

This is a standalone web application built with vanilla HTML5, CSS3, and JavaScript. No frameworks or build tools are required. The website features a modern corporate design inspired by the Stellantis brand identity with a focus on recruitment and career opportunities.

## 🎨 Design Features

- **Modern Corporate Design**: Clean, professional aesthetic aligned with Stellantis brand
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-up effects, scroll animations, and hover interactions
- **Interactive Elements**: Hamburger menu, smooth scrolling, parallax effects
- **Accessible**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Fast loading and smooth performance

## 🚀 Features

### Sections

1. **Navbar** - Transparent to white transition on scroll with responsive menu
2. **Hero Section** - Full-screen introduction with call-to-action buttons
3. **About Stellantis** - Company overview and key highlights
4. **Summer Recruitment Program** - Detailed program description
5. **Why Apply** - 4-card benefit showcase
6. **Recruitment Process** - Timeline with 5 stages
7. **Our Values** - 4 core values display
8. **Discover Stellantis** - Kenitra plant information
9. **Call-to-Action** - Final recruitment invitation
10. **Footer** - Links, contact, and social media

### Interactive Features

- Smooth scroll navigation
- Mobile hamburger menu
- Navbar background transition on scroll
- Fade-up animations on scroll
- Hover effects on cards and buttons
- Button ripple effect
- Scroll-to-top button
- Parallax effects

## 📁 Project Structure

```
summer_recruitment/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
├── assets/
│   ├── images/         # Image placeholder folder
│   └── icons/          # Icon placeholder folder
└── README.md           # This file
```

## 🎨 Color Palette

- **Primary Dark**: #223579
- **Primary Blue**: #0D6FA3
- **Primary Teal**: #00B3B8
- **Teal Light**: #38D6C4
- **Teal Lighter**: #6EE7D2
- **Accent Orange**: #FF5A1F
- **Text Dark**: #072C5A
- **Text Gray**: #4a5568

## 💻 How to Use

### Simple Setup

1. Open `index.html` in any modern web browser
2. No build process or dependencies required
3. Everything works out of the box

### Customization

#### Update Google Form URL

Find and replace the placeholder URLs in `index.html`:

```html
<a href="https://forms.google.com/placeholder" target="_blank">
```

Replace `https://forms.google.com/placeholder` with your actual Google Form URL.

#### Modify Content

Edit the text directly in `index.html` sections:
- Title and subtitle
- Program description
- Benefits and values
- Contact information
- Social media links

#### Customize Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-dark: #223579;
    --primary-blue: #0D6FA3;
    --primary-teal: #00B3B8;
    /* ... etc */
}
```

#### Add Images

Place your images in the `assets/images/` folder and update the image placeholders in `style.css` or `index.html`.

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Performance

- No external dependencies
- Minimal CSS file size
- Optimized animations
- Fast initial load time
- Smooth 60fps animations

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible styles
- Alt text support for images
- Sufficient color contrast ratios

## 📝 Customization Guide

### Change Hero Background

Edit in `style.css` - `.hero::before`:

```css
background: linear-gradient(135deg, rgba(34, 53, 121, 0.8) 0%, ...);
```

### Modify Animation Timing

Edit in `script.js` - `observerOptions`:

```javascript
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};
```

### Update Typography

Edit font sizes in `style.css`:

```css
.section-title {
    font-size: 36px; /* Change this value */
}
```

## 🚀 Deployment

### Local Testing

1. Open `index.html` directly in a browser
2. Use any local server (Python, Node.js, etc.)

### Production Deployment

1. Upload all files to your web hosting
2. Ensure the folder structure is maintained
3. Update the Google Form URL before deployment
4. Test all links and functionality

### With Python

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`

### With Node.js

```bash
npx http-server
```

### With VS Code Live Server

1. Install Live Server extension
2. Right-click `index.html` → "Open with Live Server"

## 📋 Checklist Before Launch

- [ ] Update Google Form URL
- [ ] Update contact information
- [ ] Add company logo if needed
- [ ] Replace placeholder images
- [ ] Test on mobile devices
- [ ] Test all links
- [ ] Check form submissions
- [ ] Test cross-browser compatibility
- [ ] Verify SEO meta tags
- [ ] Check page load performance

## 🔍 SEO Optimization

Update the following in `index.html`:

```html
<meta name="description" content="Your recruitment page description">
<meta name="keywords" content="recruitment, Stellantis, summer, jobs">
<meta name="author" content="Stellantis Morocco">
<meta property="og:title" content="Summer Recruitment 2026">
<meta property="og:description" content="Your description">
<meta property="og:image" content="path/to/image.png">
```

## 📞 Support & Maintenance

### Common Issues

**Links not working?**
- Ensure Google Form URL is correct
- Check that anchor links match section IDs

**Mobile menu not closing?**
- Clear browser cache
- Check JavaScript console for errors

**Animations not smooth?**
- Update browser to latest version
- Disable browser extensions
- Check GPU acceleration is enabled

## 📄 License

This project is created for Stellantis Morocco recruitment purposes.

## 👥 Credits

- **Design**: Inspired by Stellantis brand guidelines
- **Development**: Modern web standards (HTML5, CSS3, Vanilla JS)
- **Icons**: Font Awesome 6.4.0
- **Fonts**: System fonts (-apple-system, Segoe UI, Roboto)

## 🎓 Future Enhancements

Potential additions (optional):

- Backend form processing
- Admin dashboard
- Application tracking system
- Email notifications
- Multi-language support
- Dark mode toggle
- Analytics integration
- Video hosting

---

**Version**: 1.0.0  
**Last Updated**: July 2026  
**Status**: Ready for Production
