// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Code Tab Switching
const codeTabs = document.querySelectorAll('.code-tab');
const codeBlocks = document.querySelectorAll('.code-block');

codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const lang = tab.getAttribute('data-lang');
        
        // Update active tab
        codeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active code block
        codeBlocks.forEach(block => {
            if (block.getAttribute('data-lang') === lang) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('.feature-card, .sdk-card, .use-case-card, .benefit-card, .comparison-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Copy code functionality (optional enhancement)
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            background: var(--accent-primary);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 0.875rem;
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        `;
        
        copyButton.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        copyButton.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0.8';
        });
        
        copyButton.addEventListener('click', async () => {
            const code = block.querySelector('code').textContent;
            try {
                await navigator.clipboard.writeText(code);
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
        
        block.style.position = 'relative';
        block.appendChild(copyButton);
    });
}

// Initialize copy buttons when DOM is loaded
document.addEventListener('DOMContentLoaded', addCopyButtons);

// Mobile menu toggle (if needed in future)
function createMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-toggle';
    mobileMenuButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    `;
    
    // Add mobile menu functionality here if needed
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll handler
const debouncedScroll = debounce(() => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Add interactive hover effects to graph animation nodes
document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('mouseenter', () => {
        node.style.transform = 'scale(1.5)';
    });
    
    node.addEventListener('mouseleave', () => {
        node.style.transform = 'scale(1)';
    });
});

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'https://github.com/jchristn/LiteGraph/blob/main/assets/favicon.png?raw=true'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize on page load
window.addEventListener('load', () => {
    preloadImages();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Press 'T' to toggle theme
    if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            themeToggle.click();
        }
    }
});

// Analytics placeholder (implement if needed)
function trackEvent(category, action, label) {
    // Implement analytics tracking here if needed
    console.log(`Analytics: ${category} - ${action} - ${label}`);
}

// Track important interactions
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('CTA', 'click', 'Get Started');
    });
});

document.querySelectorAll('.github-link').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('External', 'click', 'GitHub');
    });
});