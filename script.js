// ============================================
// Navbar Scroll Effect
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbarMenu');

window.addEventListener('scroll', () => {
    // Animate elements on scroll
    animateElementsOnScroll();
});

// ============================================
// Mobile Menu Toggle
// ============================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = navbarMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
    }
});

// ============================================
// Smooth Scroll Behavior
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            const offsetTop = element.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll Indicator Animation
// ============================================

const scrollIndicator = document.getElementById('scrollIndicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-up elements
document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// ============================================
// Animate Elements on Scroll
// ============================================

function animateElementsOnScroll() {
    // Add animation to elements as they come into view
    const elements = document.querySelectorAll('.fade-up');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (elementPosition < viewportHeight - 100) {
            element.classList.add('in-view');
        }
    });
}

// Initial call
animateElementsOnScroll();

// ============================================
// Navbar Mobile Menu Responsive
// ============================================

// Add responsive styles for mobile menu
const style = document.createElement('style');
style.textContent = `
    .navbar-menu.active {
        display: flex !important;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(13, 111, 163, 0.96);
        backdrop-filter: blur(20px);
        padding: 20px;
        border-radius: 0 0 12px 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        gap: 12px;
        animation: slideDown 0.3s ease;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .navbar-menu.active .nav-link {
        color: var(--light-bg) !important;
        padding: 12px 16px;
        border-radius: 8px;
        transition: all 0.2s ease;
    }

    .navbar-menu.active .nav-link:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--teal-light) !important;
    }

    .navbar-menu.active .nav-button {
        margin-top: 8px;
    }

    @media (min-width: 769px) {
        .navbar-menu {
            display: flex !important;
            position: static !important;
            background: transparent !important;
            flex-direction: row !important;
            padding: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            gap: 32px !important;
        }

        .navbar-menu.active .nav-link {
            padding: 0 !important;
            background: transparent !important;
        }

        .navbar-menu.active .nav-link:hover {
            background: transparent !important;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Button Ripple Effect
// ============================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
if (!document.querySelector('style[data-ripple]')) {
    const rippleStyle = document.createElement('style');
    rippleStyle.setAttribute('data-ripple', 'true');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                width: 400px;
                height: 400px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// ============================================
// Counter Animation (Optional)
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// Lazy Load Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Form Submission (if needed)
// ============================================

// Prevent default form submission and show success message
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (this.dataset.noDefault !== 'true') {
            // Form will submit normally to Google Forms
            // This is just a placeholder for additional handling
        }
    });
});

// ============================================
// Parallax Effect on Hero
// ============================================

const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < 1000) {
            hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
        }
    });

    // Add parallax movement on mouse
    document.addEventListener('mousemove', (e) => {
        if (window.scrollY < 500) {
            const x = (e.clientX / window.innerWidth) * 10;
            const y = (e.clientY / window.innerHeight) * 10;
            hero.style.transform = `perspective(1000px) rotateX(${y * 0.05}deg) rotateY(${x * 0.05}deg)`;
        }
    });
}

// ============================================
// Performance Monitoring
// ============================================

// Log performance metrics
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfTiming = window.performance.timing;
        const pageLoadTime = perfTiming.loadEventEnd - perfTiming.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    });
}

// ============================================
// Accessibility Enhancements
// ============================================

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
    }

    // Skip to main content
    if (e.altKey && e.key === 's') {
        document.querySelector('main')?.focus();
    }
});

// Add focus visible styles
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    *:focus-visible {
        outline: 2px solid var(--teal-light);
        outline-offset: 2px;
    }

    button:focus-visible,
    a:focus-visible {
        border-radius: 4px;
    }
`;
document.head.appendChild(focusStyle);

// ============================================
// Scroll-to-top Button (Optional)
// ============================================

// Create and add scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

const scrollToTopStyle = document.createElement('style');
scrollToTopStyle.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-blue) 0%, var(--teal-light) 100%);
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        box-shadow: 0 6px 20px rgba(13, 111, 163, 0.3);
        transition: all 0.3s ease;
        font-size: 20px;
    }

    .scroll-to-top.show {
        display: flex;
    }

    .scroll-to-top:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(13, 111, 163, 0.4);
    }

    @media (max-width: 768px) {
        .scroll-to-top {
            width: 45px;
            height: 45px;
            bottom: 20px;
            right: 20px;
            font-size: 18px;
        }
    }
`;
document.head.appendChild(scrollToTopStyle);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Initialize on Page Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    animateElementsOnScroll();
    
    // Log that the page has loaded
    console.log('Summer Recruitment 2026 website loaded successfully');
});

// ============================================
// Error Handling
// ============================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.message);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
