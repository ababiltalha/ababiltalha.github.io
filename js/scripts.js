// Portfolio Website JavaScript
// Handles navigation and page content loading

let currentPage = 'home';

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    generateNavigation();
    initializeRouting();
    loadCurrentPage();
    
    // Handle hash-based navigation for internal links
    window.addEventListener('hashchange', handleHashNavigation);
});

// Generate navigation menu from config
function generateNavigation() {
    const navMenu = document.getElementById('nav-menu');
    const enabledPages = getEnabledPages();
    
    navMenu.innerHTML = '';
    
    enabledPages.forEach(page => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = page.url;
        a.textContent = page.navText;
        a.setAttribute('data-page', page.key);
        
        // Prevent default link behavior for SPA routing
        a.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage(page.key, page.url);
        });
        
        li.appendChild(a);
        navMenu.appendChild(li);
    });
}

// Navigate to a specific page
function navigateToPage(pageKey, url) {
    if (currentPage === pageKey) return;
    
    // Update URL without page reload
    history.pushState({ page: pageKey }, '', url);
    
    // Update active navigation
    updateActiveNavigation(pageKey);
    
    // Load page content
    loadPageContent(pageKey);
    
    currentPage = pageKey;
}

// Update active navigation styling
function updateActiveNavigation(activePageKey) {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === activePageKey) {
            link.classList.add('active');
        }
    });
}

// Load content for a specific page
async function loadPageContent(pageKey) {
    const pageContent = document.getElementById('page-content');
    const pageConfig = SITE_CONFIG.pages[pageKey];
    const pageData = SITE_DATA[pageKey] || {};
    
    if (!pageConfig) {
        pageContent.innerHTML = '<div class="error">Page not found</div>';
        return;
    }
    
    // Show loading state
    pageContent.innerHTML = '<div class="loading">Loading...</div>';
    
    // Create page content based on page type
    let content = '';
    
    try {
        switch (pageKey) {
            case 'home':
                content = await generateHomePage(pageData);
                break;
            case 'research':
                content = generateResearchPage(pageData);
                break;
            case 'work':
                content = generateWorkPage(pageData);
                break;
            case 'education':
                content = generateEducationPage(pageData);
                break;
            case 'projects':
                content = generateProjectsPage(pageData);
                break;
            case 'leadership':
                content = generateLeadershipPage(pageData);
                break;
            case 'miscellaneous':
                content = generateMiscellaneousPage(pageData);
                break;
            default:
                content = generateDefaultPage(pageConfig.title, pageData);
        }
        
        pageContent.innerHTML = content;
    } catch (error) {
        console.error('Error loading page content:', error);
        pageContent.innerHTML = '<div class="error">Error loading page content</div>';
    }
}

// Page content generators (currently showing placeholders)
async function generateHomePage(data) {
    try {
        // Load the about layout template
        const response = await fetch('layouts/about/about.html');
        let template = await response.text();
        
        // Replace template variables with actual data
        if (data.content) {
            template = template.replace(/\{\{bio\}\}/g, data.content.bio || '');
            template = template.replace(/\{\{mail\}\}/g, data.content.mail || '');
            template = template.replace(/\{\{github\}\}/g, data.content.github || '#');
            template = template.replace(/\{\{linkedin\}\}/g, data.content.linkedin || '#');
            template = template.replace(/\{\{orcid\}\}/g, data.content.orcid || '#');
            template = template.replace(/\{\{kaggle\}\}/g, data.content.kaggle || '#');
            template = template.replace(/\{\{youtube\}\}/g, data.content.youtube || '#');
            template = template.replace(/\{\{twitter\}\}/g, data.content.twitter || '#');
            template = template.replace(/\{\{cv\}\}/g, data.content.cv || '#');
        }
        
        return template;
    } catch (error) {
        console.error('Error loading about layout:', error);
        // Fallback content
        return `
            <div class="about-container">
                <div class="about-content">
                    <div class="about-text">
                        <h1 class="about-title">About Me</h1>
                        <div class="about-bio">
                            <p>${data.content?.bio || 'Welcome to my personal website.'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function generateResearchPage(data) {
    return `
        <h1 class="page-title">Research Experience</h1>
        <div class="page-section">
            <p>This page will showcase my research experience and academic work.</p>
            <p><em>Content will be added here...</em></p>
        </div>
    `;
}

function generateWorkPage(data) {
    return `
        <h1 class="page-title">Professional Experience</h1>
        <div class="page-section">
            <p>This page will detail my professional work experience and career history.</p>
            <p><em>Content will be added here...</em></p>
        </div>
    `;
}

function generateEducationPage(data) {
    return `
        <h1 class="page-title">Academic History</h1>
        <div class="page-section">
            <p>This page will contain my educational background and academic achievements.</p>
            <p><em>Content will be added here...</em></p>
        </div>
    `;
}

function generateProjectsPage(data) {
    return `
        <h1 class="page-title">Projects</h1>
        <div class="page-section">
            <p>This page will showcase my various projects and technical work.</p>
            <p><em>Content will be added here...</em></p>
        </div>
    `;
}

function generateLeadershipPage(data) {
    return `
        <h1 class="page-title">Leadership</h1>
        <div class="page-section">
            <p>This page will highlight my leadership experience and roles.</p>
            <p><em>Content will be added here...</em></p>
        </div>
    `;
}

function generateMiscellaneousPage(data) {
    return `
        <h1 class="page-title">Miscellaneous</h1>
        <div class="page-section">
            <p>This page will contain additional information and miscellaneous content.</p>
            <p><em>Content will be added here...</em></p>
        </div>
    `;
}

function generateDefaultPage(title, data) {
    return `
        <h1 class="page-title">${title}</h1>
        <div class="page-section">
            <p>This page is under construction.</p>
            <p><em>Content will be added here...</em></p>
        </div>
    `;
}

// Initialize routing for browser navigation
function initializeRouting() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.page) {
            updateActiveNavigation(e.state.page);
            loadPageContent(e.state.page);
            currentPage = e.state.page;
        } else {
            // Handle initial page load or direct URL access
            loadCurrentPage();
        }
    });
}

// Handle hash-based navigation for internal links
function handleHashNavigation() {
    const hash = window.location.hash;
    
    if (hash.startsWith('#/')) {
        const path = hash.substring(1); // Remove the '#' to get '/research'
        
        // Find matching page in config
        Object.entries(SITE_CONFIG.pages).forEach(([key, page]) => {
            if (page.enabled && page.url === path) {
                navigateToPage(key, page.url);
            }
        });
    }
}

// Load the current page based on URL
function loadCurrentPage() {
    // Check for hash navigation first
    const hash = window.location.hash;
    if (hash.startsWith('#/')) {
        handleHashNavigation();
        return;
    }
    
    const path = window.location.pathname;
    
    // Find matching page in config
    let targetPage = 'home';
    
    Object.entries(SITE_CONFIG.pages).forEach(([key, page]) => {
        if (page.enabled && page.url === path) {
            targetPage = key;
        }
    });
    
    // Load the target page
    updateActiveNavigation(targetPage);
    loadPageContent(targetPage);
    currentPage = targetPage;
    
    // Update browser state
    const pageConfig = SITE_CONFIG.pages[targetPage];
    if (pageConfig) {
        history.replaceState({ page: targetPage }, '', pageConfig.url);
    }
}
