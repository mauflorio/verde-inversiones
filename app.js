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
