// ============================================
// Navbar Scroll Effect
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbarMenu');
const langToggle = document.getElementById('langToggle');
const announcement = document.getElementById('announcement');
const positionsList = document.getElementById('positions');
const pageTitle = document.getElementById('pageTitle');

// Translations dictionary (English + French)
const translations = {
    en: {
        title: 'Summer Recruitment 2026 — Stellantis Morocco',
        nav: { program: 'Our Program', discover: 'Discover Stellantis', apply: 'Apply Now' },
        hero: { subtitle: 'Join Stellantis Morocco and start your professional journey', description: "A unique opportunity to join one of the world's leading automotive manufacturers without an initial CV pre-selection." },
        meta: { location: 'Location: Stellantis Kénitra', recruitment: 'Summer Recruitment' },
        video: { title: 'Kénitra Plant Capacity', caption: 'Mounir Kharbouche (Stellantis): "l\'usine de Kénitra a atteint une capacité de 535 000 véhicules"' },
        announcement: 'From July 13 — We are hiring for:',
        positions: {
            title: 'Open Positions',
            description: 'These are the roles we are looking for in our summer recruitment campaign.',
            list: ['Maintenance Unit Manager','Manufacturing Unit Manager','Maintenance Technician','Facilities Technician','Maintenance Apprentice','Other Position']
        },
        btn: { apply: 'Apply Now', discover: 'Discover the Program' },
        about: { title: 'Why Stellantis Morocco?', text: "Stellantis is one of the world's leading automotive manufacturers, bringing together iconic brands and innovative technologies. At the Kenitra plant, we are committed to excellence, innovation, and the development of young talent. Every year, we welcome motivated candidates who wish to gain valuable industrial experience while contributing to the future of sustainable mobility.", highlight1: 'Global Company', highlight2: 'Innovation', highlight3: 'Career Opportunities', highlight4: 'Professional Growth' },
        program: { title: 'Summer Recruitment Program', description: 'Our Summer Recruitment Program is a unique opportunity for motivated candidates to join Stellantis Morocco during one of our largest recruitment campaigns of the year.', feature1: 'Direct Access to Interviews', feature2: 'No CV Pre-selection Required', feature3: 'Demonstrate Your Potential', feature4: 'Join a Global Leader' },
        why: { title: 'Why Apply?', card1: { title: 'Interview Without Initial Selection', text: 'Meet our recruiters directly and demonstrate your potential without barriers. Your motivation and skills matter most to us.' }, card2: { title: 'Fast Recruitment Process', text: 'A simplified recruitment journey designed to reduce waiting time and get you results quickly.' }, card3: { title: 'Career Opportunities', text: "Access long-term employment opportunities within Stellantis and grow with one of the world's largest automotive companies." }, card4: { title: 'Professional Development', text: 'Develop your skills through an international industrial environment with world-class training and mentoring.' } },
        timeline: { step1: { title: 'Apply Online', text: 'Fill out your information and express your interest in the program.' }, step2: { title: 'Receive Invitation', text: 'Get your interview invitation and select your preferred date.' }, step3: { title: 'Interview', text: 'Meet with our recruitment teams and showcase your potential.' }, step4: { title: 'Medical Visit', text: 'Complete the medical examination for employment eligibility.' }, step5: { title: 'Integration', text: 'Welcome aboard! Start your journey with Stellantis.' } },
        values: { title: 'Our Values', card1: { title: 'Innovation', text: 'Driving the future of automotive technology and sustainable mobility.' }, card2: { title: 'Team Spirit', text: 'Collaborating across cultures and disciplines to achieve excellence together.' }, card3: { title: 'Performance', text: 'Striving for operational excellence and continuous improvement in everything we do.' }, card4: { title: 'Respect', text: 'Valuing diversity, integrity, and the potential in every individual.' } },
        discover: { title: 'Discover Stellantis', item1: { title: 'Kenitra Plant', text: 'A state-of-the-art manufacturing facility at the forefront of automotive production.' }, item2: { title: 'Automotive Innovation', text: 'Pioneering electric and hybrid technologies for sustainable transportation.' }, item3: { title: 'Advanced Manufacturing', text: 'Utilizing Industry 4.0 technologies and best practices in production.' }, item4: { title: 'Professional Environment', text: 'A dynamic, inclusive workplace where talent thrives and careers flourish.' } },
        footer: { links: 'Quick Links', contact: 'Contact', program: 'Program', about: 'Leading the global automotive industry with innovation, sustainability, and excellence.', link: { home: 'Home', program: 'Program', about: 'About', discover: 'Discover' }, contactInfo: { address: 'Stellantis Kénitra, Morocco', email: 'recruitment@stellantis.com', phone: '+212 5XX XX XX XX' }, copyright: '© 2026 Stellantis Morocco — Kenitra Plant. All rights reserved.' }
    },
    fr: {
        title: "Recrutement d'été 2026 — Stellantis Maroc",
        nav: { program: 'Notre programme', discover: 'Découvrir Stellantis', apply: 'Postuler' },
        hero: { subtitle: 'Rejoignez Stellantis Maroc et commencez votre parcours professionnel', description: "Une opportunité unique de rejoindre l'un des principaux constructeurs automobiles mondiaux sans présélection de CV." },
        meta: { location: 'Lieu : Stellantis Kénitra', recruitment: "Recrutement d'été" },
        video: { title: 'Capacité de l\'usine de Kénitra', caption: 'Mounir Kharbouche (Stellantis) : "l\'usine de Kénitra a atteint une capacité de 535 000 véhicules"' },
        announcement: "À partir du 13 juillet — Nous recrutons pour :",
        positions: {
            title: 'Postes ouverts',
            description: 'Voici les postes que nous recherchons dans notre campagne de recrutement d’été.',
            list: ['Responsable unité maintenance','Responsable unité fabrication','Technicien maintenance','Technicien facilities','Apprenti maintenance','Autre poste']
        },
        btn: { apply: 'Postuler', discover: 'Découvrir le programme' },
        about: { title: 'Pourquoi Stellantis Maroc ?', text: "Stellantis est l'un des principaux constructeurs automobiles mondiaux, réunissant des marques emblématiques et des technologies innovantes. À l'usine de Kénitra, nous nous engageons pour l'excellence, l'innovation et le développement des jeunes talents. Chaque année, nous accueillons des candidats motivés qui souhaitent acquérir une expérience industrielle précieuse et contribuer à l'avenir d'une mobilité durable.", highlight1: 'Entreprise mondiale', highlight2: 'Innovation', highlight3: 'Opportunités de carrière', highlight4: 'Développement professionnel' },
        program: { title: 'Programme de recrutement d\'été', description: 'Notre programme de recrutement est une opportunité unique pour les candidats motivés de rejoindre Stellantis Maroc.', feature1: "Accès direct aux entretiens", feature2: "Pas de présélection de CV", feature3: "Démontrez votre potentiel", feature4: "Rejoignez un leader mondial" },
        why: { title: 'Pourquoi postuler ?', card1: { title: 'Entretien sans présélection', text: "Rencontrez nos recruteurs et démontrez votre potentiel sans barrières." }, card2: { title: 'Processus de recrutement rapide', text: 'Un parcours simplifié pour réduire les délais et obtenir rapidement des résultats.' }, card3: { title: 'Opportunités de carrière', text: "Accédez à des opportunités d'emploi à long terme chez Stellantis." }, card4: { title: 'Développement professionnel', text: 'Développez vos compétences grâce à un environnement industriel international.' } },
        timeline: { step1: { title: "Postuler en ligne", text: "Remplissez vos informations et exprimez votre intérêt pour le programme." }, step2: { title: "Recevoir l'invitation", text: "Recevez votre invitation et sélectionnez la date souhaitée." }, step3: { title: "Entretien", text: "Rencontrez nos équipes de recrutement et montrez votre potentiel." }, step4: { title: "Visite médicale", text: "Effectuez l'examen médical requis pour l'embauche." }, step5: { title: "Intégration", text: "Bienvenue à bord ! Commencez votre parcours chez Stellantis." } },
        values: { title: 'Nos valeurs', card1: { title: 'Innovation', text: "Poussant l'avenir de la technologie automobile et de la mobilité durable." }, card2: { title: 'Esprit d\'équipe', text: 'Collaborer à travers les cultures pour atteindre l\'excellence.' }, card3: { title: 'Performance', text: "Viser l'excellence opérationnelle et l'amélioration continue." }, card4: { title: 'Respect', text: "Valoriser la diversité et l'intégrité." } },
        discover: { title: 'Découvrir Stellantis', item1: { title: 'Usine de Kénitra', text: "Une installation de pointe au premier plan de la production automobile." }, item2: { title: 'Innovation automobile', text: "Pionnier des technologies électriques et hybrides." }, item3: { title: 'Fabrication avancée', text: "Utilisation des technologies Industrie 4.0 et des meilleures pratiques." }, item4: { title: 'Environnement professionnel', text: "Un lieu de travail inclusif où le talent prospère." } },
        footer: { links: 'Liens rapides', contact: 'Contact', program: 'Programme', about: "Leader mondial de l'industrie automobile avec l'innovation, la durabilité et l'excellence.", link: { home: 'Accueil', program: 'Programme', about: 'À propos', discover: 'Découvrir' }, contactInfo: { address: 'Stellantis Kénitra, Maroc', email: 'recruitment@stellantis.com', phone: '+212 5XX XX XX XX' }, copyright: '© 2026 Stellantis Maroc — Usine de Kénitra. Tous droits réservés.' }
    }
};

// Helper to resolve nested keys like 'program.feature1'
function resolveKey(obj, key) {
    return key.split('.').reduce((o, k) => (o || {})[k], obj);
}

function translatePage(lang) {
    const elems = document.querySelectorAll('[data-i18n]');
    elems.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = resolveKey(translations[lang], key);
        if (value !== undefined) {
            el.textContent = value;
        }
    });

    // positions list (array)
    if (positionsList && translations[lang].positions && translations[lang].positions.list) {
        positionsList.innerHTML = translations[lang].positions.list.map(p => `<li>${p}</li>`).join('');
    }

    // page title
    if (pageTitle && translations[lang].title) pageTitle.textContent = translations[lang].title;

    // announcement
    if (announcement && translations[lang].announcement) announcement.textContent = translations[lang].announcement;

    // update lang toggle label (show the other language)
    if (langToggle) {
        langToggle.textContent = (lang === 'en') ? 'FR' : 'EN';
    }

    // persist choice
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
}

// Initialize language from localStorage or default to English
let currentLang = (localStorage.getItem('siteLang') || 'en');
translatePage(currentLang);

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = (currentLang === 'en') ? 'fr' : 'en';
        translatePage(currentLang);
    });
}

    // Try to load a local MP4 if present; otherwise fall back to YouTube embed
    function loadLocalOrEmbedVideo() {
        const container = document.getElementById('videoContainer');
        if (!container) return;

        const localPath = 'assets/videos/kenitra_capacity.mp4';

        // Check for local file using a HEAD request
        console.log('Checking local video at', localPath);
        fetch(localPath, { method: 'HEAD' }).then(res => {
            console.log('HEAD response for', localPath, res.status);
            if (res.ok) {
                console.log('Local video found — inserting <video> element');
                const video = document.createElement('video');
                video.controls = true;
                video.playsInline = true;
                video.preload = 'metadata';
                video.style.width = '100%';
                video.style.height = '100%';
                const src = document.createElement('source');
                src.src = localPath;
                src.type = 'video/mp4';
                video.appendChild(src);
                container.innerHTML = '';
                container.appendChild(video);
            } else {
                console.log('Local video not available (status', res.status, '), falling back to YouTube embed');
                // fallback to YouTube embed
                container.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/O8qq_szw0nw" title="Mounir Kharbouche — L\'usine de Kénitra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            }
        }).catch(() => {
            console.log('Error while checking local video, inserting YouTube fallback');
            container.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/O8qq_szw0nw" title="Mounir Kharbouche — L\'usine de Kénitra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        });
    }

    // run after initial translate so caption/title are set
    document.addEventListener('DOMContentLoaded', loadLocalOrEmbedVideo);

window.addEventListener('scroll', () => {
    // Animate elements on scroll
    animateElementsOnScroll();
});

// ============================================
// Mobile Menu Toggle
// ============================================

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(isActive));
    });
}

// Close menu when a link or button is clicked
const navLinks = navbarMenu.querySelectorAll('a, button');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
        navbarMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        if (hamburger) hamburger.classList.remove('active');
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
        if (hamburger) hamburger.classList.remove('active');
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
// Technical Interviewer Access (code modal)
// ============================================

// Entry point for technical interviewers: click the "Interviewer Access"
// button and enter the access code (000) in the styled modal card.
// Not real security (anyone reading this file can find the code) — it just
// keeps the link from being obvious to casual visitors.
(function setupTechInterviewAccess() {
    const TECH_ACCESS_CODE = '000';
    const TECH_FORM_URL = 'https://tally.so/r/ZjykYz';

    const openBtn = document.getElementById('techInterviewBtn');
    const overlay = document.getElementById('accessModalOverlay');
    const closeBtn = document.getElementById('accessModalClose');
    const submitBtn = document.getElementById('accessModalSubmit');
    const input = document.getElementById('accessCodeInput');
    const error = document.getElementById('accessModalError');

    function openModal() {
        if (!overlay) return;
        error.classList.remove('show');
        input.value = '';
        overlay.classList.add('active');
        input.focus();
    }

    function closeModal() {
        if (!overlay) return;
        overlay.classList.remove('active');
    }

    function submitCode() {
        if (input.value.trim() === TECH_ACCESS_CODE) {
            closeModal();
            window.open(TECH_FORM_URL, '_blank', 'noopener');
        } else {
            error.classList.add('show');
            input.focus();
        }
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }
    if (submitBtn) submitBtn.addEventListener('click', submitCode);
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') submitCode();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
})();

// ============================================
// Error Handling
// ============================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.message);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
