class HeroCarousel {
            constructor() {
                this.slides = document.querySelectorAll('.carousel-slide');
                this.indicators = document.querySelectorAll('.indicator');
                this.currentSlide = 0;
                this.slideInterval = null;
                
                this.init();
            }
            
            init() {
                // Iniciar el carrusel automático
                this.startCarousel();
            }
            
            startCarousel() {
                // Limpiar cualquier intervalo existente
                if (this.slideInterval) {
                    clearInterval(this.slideInterval);
                }
                
                // Iniciar nuevo intervalo
                this.slideInterval = setInterval(() => {
                    this.nextSlide();
                }, 2500); // 2.5 segundos
            }
            
            pauseCarousel() {
                if (this.slideInterval) {
                    clearInterval(this.slideInterval);
                    this.slideInterval = null;
                }
            }
            
            nextSlide() {
                // Remover clase active del slide actual
                this.slides[this.currentSlide].classList.remove('active');
                this.indicators[this.currentSlide].classList.remove('active');
                
                // Ir al siguiente slide (volver al inicio si es el último)
                this.currentSlide = (this.currentSlide + 1) % this.slides.length;
                
                // Agregar clase active al nuevo slide
                this.slides[this.currentSlide].classList.add('active');
                this.indicators[this.currentSlide].classList.add('active');
            }
            
            goToSlide(slideIndex) {
                // Remover clase active del slide actual
                this.slides[this.currentSlide].classList.remove('active');
                this.indicators[this.currentSlide].classList.remove('active');
                
                // Ir al slide especificado
                this.currentSlide = slideIndex;
                
                // Agregar clase active al nuevo slide
                this.slides[this.currentSlide].classList.add('active');
                this.indicators[this.currentSlide].classList.add('active');
                
                // Reiniciar el carrusel
                this.startCarousel();
            }
        }
        
        // Inicializar el carrusel cuando el DOM esté listo
        document.addEventListener('DOMContentLoaded', () => {
            const carousel = new HeroCarousel();
            
            // Para agregar funcionalidad a los indicadores más adelante
            
            /*
            document.querySelectorAll('.indicator').forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    carousel.goToSlide(index);
                });
            });
            */
        });
        
        // Pausar el carrusel cuando la página no está visible (ahorra recursos)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                carousel.pauseCarousel();
            } else {
                carousel.startCarousel();
            }
        });
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');

            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('open');
            });
            });
            
            
            // NAVIGATION HANDLER
// ====================================
class NavigationHandler {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        // Toggle mobile menu
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMenu();
            });
        }
        
        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.navMenu.classList.contains('active')) {
                    this.toggleMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu.classList.contains('active') && 
                !this.navMenu.contains(e.target) && 
                !this.hamburger.contains(e.target)) {
                this.toggleMenu();
            }
        });
    }
    
    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('open');
    }
}


            // Navigate to Properties Page
function navigateToProperties(country) {
    // Hide landing page content
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('#nosotros').style.display = 'none';
    document.querySelector('#servicios').style.display = 'none';
    document.querySelector('#contacto').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.topbar').style.display = 'none';
    document.querySelector('.whatsapp-float').style.display = 'none';
    
    // Show properties page
    document.getElementById('properties-page').style.display = 'block';
    
    // Hide all country properties
    document.querySelectorAll('.country-properties').forEach(el => {
        el.style.display = 'none';
    });
    
    // Show selected country properties
    document.getElementById(country + '-properties').style.display = 'block';
    
    // Update title
    const titles = {
        'espana': 'Propiedades en España 🇪🇸',
        'brasil': 'Propiedades en Brasil 🇧🇷',
        'uruguay': 'Propiedades en Uruguay 🇺🇾'
    };
    document.getElementById('country-title').textContent = titles[country];
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Back to Landing Page
function backToLanding() {
    // Show landing page content
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('#nosotros').style.display = 'block';
    document.querySelector('#servicios').style.display = 'block';
    document.querySelector('#contacto').style.display = 'block';
    document.querySelector('.footer').style.display = 'block';
    document.querySelector('.navbar').style.display = 'block';
    document.querySelector('.topbar').style.display = 'block';
    document.querySelector('.whatsapp-float').style.display = 'block';
    
    // Hide properties page
    document.getElementById('properties-page').style.display = 'none';
    
    // Scroll to properties section
    document.getElementById('comprar').scrollIntoView({ behavior: 'smooth' });
}

// Contact for specific property
function contactProperty(propertyName) {
    // Navigate back to landing
    backToLanding();
    
    // Wait a moment for the page to load
    setTimeout(() => {
        // Scroll to contact form
        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
        
        // Pre-fill the message field with property info
        const messageField = document.getElementById('message');
        messageField.value = `Hola, estoy interesado/a en la propiedad: ${propertyName}. Me gustaría recibir más información.`;
        
        // Set service to "comprar"
        document.getElementById('service').value = 'comprar';
    }, 300);
}

// PROPERTIES PAGE NAVIGATION
// ====================================
class PropertiesNavigation {
    constructor() {
        this.propertiesPage = document.getElementById('properties-page');
        this.landingSections = [
            '.hero',
            '#nosotros',
            '#servicios',
            '#contacto',
            '.footer',
            '.navbar',
            '.topbar',
            '.whatsapp-float'
        ];
    }
    
    navigateToProperties(country) {
        // Ocultar landing page
        this.landingSections.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = 'none';
            }
        });
        
        // Mostrar properties page
        if (this.propertiesPage) {
            this.propertiesPage.style.display = 'block';
        }
        
        // Ocultar todas las propiedades de países
        document.querySelectorAll('.country-properties').forEach(el => {
            el.style.display = 'none';
        });
        
        // Mostrar propiedades del país seleccionado
        const countryProperties = document.getElementById(`${country}-properties`);
        if (countryProperties) {
            countryProperties.style.display = 'block';
        }
        
        // Actualizar título
        const titles = {
            'espana': 'Propiedades en España 🇪🇸',
            'brasil': 'Propiedades en Brasil 🇧🇷',
            'uruguay': 'Propiedades en Uruguay 🇺🇾'
        };
        
        const countryTitle = document.getElementById('country-title');
        if (countryTitle) {
            countryTitle.textContent = titles[country] || 'Propiedades Disponibles';
        }
        
        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Pausar carrusel si está activo
        if (heroCarousel) {
            heroCarousel.pauseCarousel();
        }
    }
    
    backToLanding() {
        // Mostrar landing page
        this.landingSections.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = selector === '.navbar' || selector === '.topbar' ? 'block' : 
                                        selector === '.hero' ? 'flex' : 'block';
            }
        });
        
        // Ocultar properties page
        if (this.propertiesPage) {
            this.propertiesPage.style.display = 'none';
        }
        
        // Scroll a la sección de comprar
        setTimeout(() => {
            const comprarSection = document.getElementById('comprar');
            if (comprarSection) {
                comprarSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        
        // Reiniciar carrusel
        if (heroCarousel) {
            heroCarousel.startCarousel();
        }
    }
}

// CONTACT FORM HANDLER
// ====================================
class ContactFormHandler {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.submitBtn = null;
        
        if (this.form) {
            this.submitBtn = this.form.querySelector('.submit-btn');
            this.init();
        }
    }
    
    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    async handleSubmit() {
        // Validar formulario
        if (!this.validateForm()) {
            return;
        }
        
        // Deshabilitar botón
        const originalText = this.submitBtn.textContent;
        this.submitBtn.disabled = true;
        this.submitBtn.textContent = 'Enviando...';
        
        // Obtener datos del formulario
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Simular envío (en producción, aquí iría la integración real)
        try {
            // Aquí puedes integrar con FormSpree, FormSubmit, o tu backend
            await this.simulateSubmit(data);
            
            // Mostrar mensaje de éxito
            this.showMessage('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.', 'success');
            
            // Limpiar formulario
            this.form.reset();
            
        } catch (error) {
            // Mostrar mensaje de error
            this.showMessage('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.', 'error');
        } finally {
            // Rehabilitar botón
            this.submitBtn.disabled = false;
            this.submitBtn.textContent = originalText;
        }
    }
    
    validateForm() {
        const name = this.form.querySelector('#name').value.trim();
        const email = this.form.querySelector('#email').value.trim();
        const message = this.form.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            this.showMessage('Por favor, completa todos los campos requeridos.', 'error');
            return false;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showMessage('Por favor, ingresa un email válido.', 'error');
            return false;
        }
        
        return true;
    }
    
    simulateSubmit(data) {
        return new Promise((resolve) => {
            console.log('Datos del formulario:', data);
            setTimeout(resolve, 1500);
        });
    }
    
    showMessage(text, type) {
        // Remover mensaje anterior si existe
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Crear nuevo mensaje
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = text;
        
        // Insertar al inicio del formulario
        this.form.insertBefore(messageDiv, this.form.firstChild);
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
    
    prefillProperty(propertyName) {
        const messageField = this.form.querySelector('#message');
        const serviceField = this.form.querySelector('#service');
        
        if (messageField) {
            messageField.value = `Hola, estoy interesado/a en la propiedad: ${propertyName}. Me gustaría recibir más información.`;
        }
        
        if (serviceField) {
            serviceField.value = 'comprar';
        }
    }
}

// ====================================
// SCROLL ANIMATIONS
// ====================================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        // Crear observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);
        
        // Observar elementos
        const animatedElements = document.querySelectorAll('.fade-in-up');
        animatedElements.forEach(el => observer.observe(el));
    }
}

// GLOBAL FUNCTIONS (para onclick en HTML)
// ====================================
let propertiesNav = null;
let contactForm = null;

function navigateToProperties(country) {
    if (propertiesNav) {
        propertiesNav.navigateToProperties(country);
    }
}

function backToLanding() {
    if (propertiesNav) {
        propertiesNav.backToLanding();
    }
}

function contactProperty(propertyName) {
    // Volver al landing
    backToLanding();
    
    // Esperar a que se complete la navegación
    setTimeout(() => {
        // Scroll al formulario
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Pre-llenar el formulario
        if (contactForm) {
            setTimeout(() => {
                contactForm.prefillProperty(propertyName);
            }, 300);
        }
    }, 300);
}

// ====================================
// INITIALIZATION
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar carrusel del hero
    heroCarousel = new HeroCarousel();
    
    // Inicializar navegación
    new NavigationHandler();
    
    // Inicializar navegación de propiedades
    propertiesNav = new PropertiesNavigation();
    
    // Inicializar formulario de contacto
    contactForm = new ContactFormHandler();
    
    // Inicializar animaciones de scroll
    new ScrollAnimations();
    
    // Agregar clase fade-in-up a elementos que deben animarse
    const animatableElements = [
        '.service-card',
        '.stat-item',
        '.about-text'
    ];
    
    animatableElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in-up');
        });
    });
    
    console.log('✅ Verde Inversiones - Sistema inicializado correctamente');
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignorar si es solo "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});