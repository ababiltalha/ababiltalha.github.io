# Portfolio Website

A modular, responsive portfolio website built with HTML, CSS, and JavaScript featuring a clean design with your specified color palette: `#90D5FF`, `#57B9FF`, `#77B1D4`, `#517891`, black, and white.

## Features

- 🎨 **Consistent Color Palette**: Uses your specified 6-color scheme throughout
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🔧 **Modular Architecture**: Easy to enable/disable pages and add new ones
- 🚀 **Single Page Application**: Smooth navigation without page reloads
- ⚡ **Fast Loading**: Optimized performance with minimal dependencies
- 🎯 **SEO Friendly**: Proper URL routing and meta tags

## Pages Included

1. **Home** (`/`) - Main landing page with hero section
2. **Research Experience** (`/research`) - Academic research and publications
3. **Professional Experience** (`/work`) - Work history and career highlights
4. **Academic History** (`/education`) - Educational background
5. **Academic Projects** (`/academic-projects`) - University and coursework projects
6. **Personal Projects** (`/personal-projects`) - Side projects and personal work
7. **Leadership** (`/leadership`) - Leadership roles and community involvement
8. **Miscellaneous** (`/miscellaneous`) - Additional interests and achievements

## Quick Start

1. **Clone or download** this repository
2. **Update your information** in `js/config.js`
3. **Replace the photo** at `assets/images/photo.jpg` with your own
4. **Add your CV** to `assets/pdf/cv.pdf`
5. **Customize content** by editing the page templates in `index.html`
6. **Deploy** to your preferred hosting platform

## Configuration

### Basic Setup

Edit `js/config.js` to customize your site:

```javascript
const SITE_CONFIG = {
    siteName: "Your Portfolio",
    author: "Your Name",
    
    // Enable/disable pages
    pages: {
        home: { enabled: true, ... },
        research: { enabled: true, ... },
        // Set enabled: false to hide a page
        work: { enabled: false, ... }
    }
};
```

### Adding a New Page

1. **Add page configuration** in `js/config.js`:
```javascript
SITE_CONFIG.pages.newPage = {
    enabled: true,
    title: "New Page Title",
    url: "/new-page",
    navText: "New Page",
    order: 9
};
```

2. **Create page template** in `index.html`:
```html
<div id="template-newPage" class="page-template">
    <section class="page-header">
        <h1>New Page Title</h1>
        <p class="page-description">Page description</p>
    </section>
    
    <section class="content-section">
        <!-- Your content here -->
    </section>
</div>
```

### Enabling/Disabling Pages

You can control page visibility in three ways:

1. **In configuration file** (`js/config.js`):
```javascript
SITE_CONFIG.pages.leadership.enabled = false;
```

2. **Using JavaScript console** (for testing):
```javascript
PortfolioUtils.disablePage('leadership');
PortfolioUtils.enablePage('leadership');
```

3. **Programmatically** in your code:
```javascript
window.portfolioApp.disablePage('leadership');
window.portfolioApp.enablePage('leadership');
```

## Customization

### Colors

The color palette is defined in CSS custom properties in `css/styles.css`:

```css
:root {
    --color-primary: #90D5FF;
    --color-secondary: #57B9FF;
    --color-accent1: #77B1D4;
    --color-accent2: #517891;
    --color-dark: #000000;
    --color-light: #FFFFFF;
}
```

### Content

Edit the page templates in `index.html` to customize your content. Each page template has the ID format `template-{pageKey}`.

### Styling

- Modify `css/styles.css` for styling changes
- The CSS uses a modular approach with utility classes
- Responsive breakpoints are defined as CSS custom properties

## File Structure

```
portfolio/
├── index.html          # Main HTML file with all page templates
├── css/
│   └── styles.css      # Complete CSS framework
├── js/
│   ├── config.js       # Site configuration and page management
│   └── scripts.js      # JavaScript routing and functionality
├── assets/
│   ├── images/
│   │   └── photo.jpg   # Your profile photo
│   └── pdf/
│       └── cv.pdf      # Your CV/resume
└── README.md           # This file
```

## JavaScript API

The website provides utility functions for dynamic page management:

```javascript
// Navigate to a page
PortfolioUtils.navigateTo('research');

// Add a new page
PortfolioUtils.addPage('blog', {
    title: 'Blog',
    url: '/blog',
    navText: 'Blog'
});

// Enable/disable pages
PortfolioUtils.enablePage('leadership');
PortfolioUtils.disablePage('miscellaneous');

// Get current page
const currentPage = PortfolioUtils.getCurrentPage();
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This is a static website that can be deployed to:

- **GitHub Pages** (recommended for GitHub repositories)
- **Netlify**
- **Vercel**
- **Firebase Hosting**
- Any static hosting service

### GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

## Performance

- **Minimal dependencies**: Only uses Font Awesome icons and Google Fonts
- **Optimized CSS**: Uses modern CSS features and custom properties
- **Efficient JavaScript**: Lightweight SPA implementation
- **Fast loading**: Optimized for quick initial page load

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Need help?** Check the browser console for debug information and available utility functions.