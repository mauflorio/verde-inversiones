// ====================================
// VERDE INVERSIONES - COMPRAR.HTML
// ====================================

// Base de datos de propiedades
const propertiesDatabase = [
    {
        id: 1,
        name: 'Villa Moderna en Madrid',
        country: 'espana',
        countryName: '🇪🇸 España',
        location: 'Zona residencial exclusiva, Madrid',
        city: 'Madrid',
        description: 'Hermosa villa de diseño contemporáneo con acabados de lujo, situada en una de las zonas más exclusivas de Madrid.',
        fullDescription: 'Esta espectacular villa representa lo mejor de la arquitectura contemporánea española. Con 350m² de construcción en una parcela de 800m², la propiedad ofrece espacios amplios y luminosos, con vistas panorámicas y privacidad absoluta. Incluye sistema de domótica completo, climatización centralizada, y acabados premium en todos los ambientes.',
        price: 750000,
        currency: '€',
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        areaUnit: 'm²',
        type: 'Villa',
        status: 'Disponible',
        features: ['Piscina', 'Jardín', 'Garaje para 2 autos', 'Aire acondicionado'],
        amenities: ['Piscina privada', 'Jardín amplio', 'Sistema de seguridad', 'Cocina equipada', 'Terraza', 'Garaje doble', 'Aire acondicionado central', 'Calefacción', 'Domótica'],
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true
    },
    {
        id: 2,
        name: 'Apartamento Frente al Mar',
        country: 'espana',
        countryName: '🇪🇸 España',
        location: 'Barcelona, Frente al mar',
        city: 'Barcelona',
        description: 'Moderno apartamento con vistas espectaculares al Mediterráneo, a pocos pasos de la playa.',
        fullDescription: 'Apartamento de lujo ubicado en primera línea de playa en Barcelona. Con 120m² perfectamente distribuidos, este inmueble ofrece vistas panorámicas al mar Mediterráneo desde todos los ambientes principales. La propiedad ha sido completamente renovada con materiales de primera calidad.',
        price: 450000,
        currency: '€',
        bedrooms: 2,
        bathrooms: 2,
        area: 120,
        areaUnit: 'm²',
        type: 'Apartamento',
        status: 'Disponible',
        features: ['Vista al mar', 'Balcón', 'Parking incluido'],
        amenities: ['Vista al mar', 'Balcón amplio', 'Parking privado', 'Piscina comunitaria', 'Gimnasio', 'Seguridad 24/7', 'Cocina moderna', 'Aire acondicionado'],
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true
    },
    {
        id: 3,
        name: 'Casa Tradicional en Valencia',
        country: 'espana',
        countryName: '🇪🇸 España',
        location: 'Centro histórico, Valencia',
        city: 'Valencia',
        description: 'Encantadora casa tradicional valenciana completamente renovada, perfecta para familias.',
        fullDescription: 'Casa tradicional valenciana de 200m² que combina el encanto histórico con todas las comodidades modernas. Ubicada cerca del centro de Valencia, esta propiedad ha sido cuidadosamente renovada manteniendo los elementos arquitectónicos originales.',
        price: 320000,
        currency: '€',
        bedrooms: 3,
        bathrooms: 2,
        area: 200,
        areaUnit: 'm²',
        type: 'Casa',
        status: 'Disponible',
        features: ['Jardín', 'Terraza', 'Bodega'],
        amenities: ['Jardín privado', 'Terraza', 'Bodega', 'Parking', 'Cocina equipada', 'Aire acondicionado', 'Calefacción', 'Trastero'],
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false
    },
    {
        id: 4,
        name: 'Penthouse de Lujo en São Paulo',
        country: 'brasil',
        countryName: '🇧🇷 Brasil',
        location: 'Vila Nova Conceição, São Paulo',
        city: 'São Paulo',
        description: 'Espectacular penthouse con terraza panorámica en el corazón de São Paulo.',
        fullDescription: 'Penthouse de ultra lujo de 450m² en uno de los barrios más exclusivos de São Paulo. Con terraza panorámica de 150m², piscina privada y acabados importados. Vista 360° de la ciudad.',
        price: 2500000,
        currency: 'R$',
        bedrooms: 5,
        bathrooms: 4,
        area: 450,
        areaUnit: 'm²',
        type: 'Penthouse',
        status: 'Disponible',
        features: ['Piscina privada', 'Terraza panorámica', 'Sauna', 'Cava de vinos'],
        amenities: ['Piscina privada', 'Terraza 150m²', 'Sauna', 'Cava de vinos', 'Home theater', 'Garaje para 4 autos', 'Seguridad 24/7', 'Gimnasio privado', 'Domótica completa'],
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true
    },
    {
        id: 5,
        name: 'Casa Frente a la Playa de Copacabana',
        country: 'brasil',
        countryName: '🇧🇷 Brasil',
        location: 'Copacabana, Río de Janeiro',
        city: 'Río de Janeiro',
        description: 'Exclusiva casa con acceso directo a la playa de Copacabana.',
        fullDescription: 'Propiedad única en Río de Janeiro con 300m² y acceso directo a la icónica playa de Copacabana. Esta casa ofrece privacidad absoluta y vistas incomparables del océano Atlántico.',
        price: 1800000,
        currency: 'R$',
        bedrooms: 4,
        bathrooms: 3,
        area: 300,
        areaUnit: 'm²',
        type: 'Casa',
        status: 'Disponible',
        features: ['Acceso directo a playa', 'Piscina', 'BBQ area'],
        amenities: ['Acceso directo a playa', 'Piscina infinity', 'Área de BBQ', 'Cocina gourmet', 'Terraza con vista', 'Garaje triple', 'Sistema de seguridad', 'Aire acondicionado'],
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true
    },
    {
        id: 6,
        name: 'Apartamento Moderno en Florianópolis',
        country: 'brasil',
        countryName: '🇧🇷 Brasil',
        location: 'Jurerê Internacional, Florianópolis',
        city: 'Florianópolis',
        description: 'Apartamento contemporáneo cerca de las mejores playas del sur de Brasil.',
        fullDescription: 'Apartamento de 150m² en el exclusivo barrio de Jurerê Internacional. Diseño contemporáneo con acabados de primera línea y a pocos minutos de las playas más hermosas de Florianópolis.',
        price: 900000,
        currency: 'R$',
        bedrooms: 3,
        bathrooms: 2,
        area: 150,
        areaUnit: 'm²',
        type: 'Apartamento',
        status: 'Disponible',
        features: ['Vista al mar', 'Piscina comunitaria', 'Gimnasio'],
        amenities: ['Vista al mar', 'Piscina comunitaria', 'Gimnasio', 'Sauna', 'Playground', 'Seguridad 24/7', 'Parking', 'Cocina equipada'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false
    },
    {
        id: 7,
        name: 'Mansión en Punta del Este',
        country: 'uruguay',
        countryName: '🇺🇾 Uruguay',
        location: 'La Barra, Punta del Este',
        city: 'Punta del Este',
        description: 'Espectacular mansión en zona premium con vista al océano.',
        fullDescription: 'Mansión de 400m² en La Barra, la zona más exclusiva de Punta del Este. Propiedad de arquitectura contemporánea con materiales premium, piscina climatizada y amplios jardines con vista panorámica al mar.',
        price: 890000,
        currency: 'USD',
        bedrooms: 5,
        bathrooms: 4,
        area: 400,
        areaUnit: 'm²',
        type: 'Mansión',
        status: 'Disponible',
        features: ['Piscina climatizada', 'Vista al mar', 'Jardín amplio', 'BBQ'],
        amenities: ['Piscina climatizada', 'Vista panorámica al mar', 'Jardín 1000m²', 'Quincho con BBQ', 'Bodega', 'Garaje para 3 autos', 'Seguridad', 'Home office', 'Gimnasio'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true
    },
    {
        id: 8,
        name: 'Apartamento de Lujo en Pocitos',
        country: 'uruguay',
        countryName: '🇺🇾 Uruguay',
        location: 'Pocitos, Montevideo',
        city: 'Montevideo',
        description: 'Elegante apartamento con vista al mar en el barrio más cotizado de Montevideo.',
        fullDescription: 'Apartamento de 180m² en Pocitos, con vista directa a la Rambla y el Río de la Plata. Edificio de categoría con amenities completos y ubicación privilegiada cerca de restaurantes y comercios.',
        price: 350000,
        currency: 'USD',
        bedrooms: 3,
        bathrooms: 2,
        area: 180,
        areaUnit: 'm²',
        type: 'Apartamento',
        status: 'Disponible',
        features: ['Vista al mar', 'Balcón', 'Piscina comunitaria'],
        amenities: ['Vista al Río de la Plata', 'Balcón amplio', 'Piscina', 'Gimnasio', 'Sauna', 'Salón de eventos', 'Seguridad 24/7', 'Garaje doble'],
        image: 'https://images.unsplash.com/photo-1502672260066-6bc35f0a1ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false
    },
    {
        id: 9,
        name: 'Estancia con Viñedos',
        country: 'uruguay',
        countryName: '🇺🇾 Uruguay',
        location: 'Colonia del Sacramento',
        city: 'Colonia',
        description: 'Hermosa estancia de 5 hectáreas con viñedos productivos y casa colonial.',
        fullDescription: 'Estancia productiva de 5 hectáreas con viñedos en plena producción. Casa principal de 250m² de estilo colonial completamente restaurada, casa de huéspedes, bodega y todas las instalaciones para producción vitivinícola.',
        price: 420000,
        currency: 'USD',
        bedrooms: 4,
        bathrooms: 3,
        area: 50000,
        areaUnit: 'm² de terreno',
        type: 'Estancia',
        status: 'Disponible',
        features: ['Viñedos', 'Bodega', 'Casa de huéspedes', 'Establos'],
        amenities: ['5 hectáreas de viñedos', 'Bodega equipada', 'Casa de huéspedes', 'Establos', 'Piscina', 'Quincho', 'Maquinaria incluida', 'Pozos de agua'],
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false
    }
];

// ====================================
// PROPERTIES MANAGER CLASS
// ====================================
class PropertiesManager {
    constructor() {
        this.properties = propertiesDatabase;
        this.filteredProperties = [...this.properties];
        this.grid = document.getElementById('propertiesGrid');
        this.resultsCount = document.getElementById('results-count');
        this.noResults = document.getElementById('no-results');
        
        this.countryFilter = document.getElementById('country-filter');
        this.priceFilter = document.getElementById('price-filter');
        this.bedroomsFilter = document.getElementById('bedrooms-filter');
        this.resetBtn = document.getElementById('reset-filters');
        
        this.init();
    }
    
    init() {
        this.renderProperties();
        
        this.countryFilter.addEventListener('change', () => this.applyFilters());
        this.priceFilter.addEventListener('change', () => this.applyFilters());
        this.bedroomsFilter.addEventListener('change', () => this.applyFilters());
        this.resetBtn.addEventListener('click', () => this.resetFilters());
    }
    
    applyFilters() {
        const country = this.countryFilter.value;
        const priceRange = this.priceFilter.value;
        const minBedrooms = parseInt(this.bedroomsFilter.value) || 0;
        
        this.filteredProperties = this.properties.filter(property => {
            if (country !== 'all' && property.country !== country) {
                return false;
            }
            
            if (priceRange !== 'all') {
                const priceInEuros = this.convertToEuros(property.price, property.currency);
                const [min, max] = this.getPriceRange(priceRange);
                
                if (max && (priceInEuros < min || priceInEuros > max)) {
                    return false;
                }
                if (!max && priceInEuros < min) {
                    return false;
                }
            }
            
            if (minBedrooms > 0 && property.bedrooms < minBedrooms) {
                return false;
            }
            
            return true;
        });
        
        this.renderProperties();
    }
    
    convertToEuros(price, currency) {
        const rates = {
            '€': 1,
            'R$': 0.18,
            'USD': 0.92
        };
        return price * rates[currency];
    }
    
    getPriceRange(range) {
        const ranges = {
            '0-300000': [0, 300000],
            '300000-500000': [300000, 500000],
            '500000-1000000': [500000, 1000000],
            '1000000+': [1000000, null]
        };
        return ranges[range] || [0, null];
    }
    
    resetFilters() {
        this.countryFilter.value = 'all';
        this.priceFilter.value = 'all';
        this.bedroomsFilter.value = 'all';
        this.filteredProperties = [...this.properties];
        this.renderProperties();
    }
    
    renderProperties() {
        this.grid.innerHTML = '';
        this.updateResultsCount();
        
        if (this.filteredProperties.length === 0) {
            this.noResults.style.display = 'block';
            return;
        }
        
        this.noResults.style.display = 'none';
        
        this.filteredProperties.forEach((property, index) => {
            const card = this.createPropertyCard(property, index);
            this.grid.appendChild(card);
        });
    }
    
    createPropertyCard(property, index) {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => window.modalManager.openModal(property);
        
        card.innerHTML = `
            <div class="property-image" style="background-image: url('${property.image}')">
                ${property.featured ? '<div class="property-badge">Destacada</div>' : ''}
                <div class="property-country">${property.countryName}</div>
            </div>
            <div class="property-details">
                <h3>${property.name}</h3>
                <p class="property-location">📍 ${property.location}</p>
                <p class="property-description">${property.description}</p>
                <div class="property-features">
                    <span>🛏️ ${property.bedrooms} hab</span>
                    <span>🚿 ${property.bathrooms} baños</span>
                    <span>📐 ${property.area}${property.areaUnit}</span>
                </div>
                <div class="property-footer">
                    <div class="property-price">${property.currency}${property.price.toLocaleString()}</div>
                    <button class="view-details-btn">
                        Ver Detalles
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }
    
    updateResultsCount() {
        const count = this.filteredProperties.length;
        this.resultsCount.innerHTML = `Mostrando <strong>${count}</strong> ${count === 1 ? 'propiedad' : 'propiedades'}`;
    }
}

// ====================================
// MODAL MANAGER CLASS
// ====================================
class ModalManager {
    constructor() {
        this.modal = document.getElementById('propertyModal');
        this.modalBody = document.getElementById('modalBody');
        this.modalClose = document.getElementById('modalClose');
        this.modalOverlay = this.modal.querySelector('.modal-overlay');
        
        this.init();
    }
    
    init() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openModal(property) {
        document.body.style.overflow = 'hidden';
        this.renderModalContent(property);
        this.modal.classList.add('active');
    }
    
    closeModal() {
        document.body.style.overflow = '';
        this.modal.classList.remove('active');
    }
    
    renderModalContent(property) {
        this.modalBody.innerHTML = `
            <div class="modal-hero" style="background-image: url('${property.image}')">
                <div class="modal-hero-content">
                    <h2>${property.name}</h2>
                    <p class="location">📍 ${property.location}</p>
                </div>
            </div>
            
            <div class="modal-info">
                <div class="modal-price">
                    ${property.currency}${property.price.toLocaleString()}
                </div>
                
                <div class="modal-features-grid">
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🛏️</span>
                        <span class="modal-feature-label">Habitaciones</span>
                        <span class="modal-feature-value">${property.bedrooms}</span>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🚿</span>
                        <span class="modal-feature-label">Baños</span>
                        <span class="modal-feature-value">${property.bathrooms}</span>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">📐</span>
                        <span class="modal-feature-label">Área</span>
                        <span class="modal-feature-value">${property.area}${property.areaUnit}</span>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🏠</span>
                        <span class="modal-feature-label">Tipo</span>
                        <span class="modal-feature-value">${property.type}</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3>Descripción</h3>
                    <p>${property.fullDescription}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Características</h3>
                    <div class="modal-amenities">
                        ${property.amenities.map(amenity => `
                            <div class="modal-amenity">${amenity}</div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3>Ubicación</h3>
                    <p><strong>Ciudad:</strong> ${property.city}</p>
                    <p><strong>Dirección:</strong> ${property.location}</p>
                    <p><strong>País:</strong> ${property.countryName}</p>
                </div>
            </div>
            
            <div class="modal-actions">
                <a href="https://wa.me/34900000000?text=Hola,%20estoy%20interesado%20en%20la%20propiedad:%20${encodeURIComponent(property.name)}%20(${property.currency}${property.price.toLocaleString()})" 
                   target="_blank" 
                   class="modal-btn modal-btn-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                    </svg>
                    Consultar por WhatsApp
                </a>
                <a href="index.html#contacto" class="modal-btn modal-btn-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Enviar Consulta
                </a>
            </div>
        `;
    }
}

// ====================================
// NAVIGATION HANDLER
// ====================================
class ComprarNavigationHandler {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMenu();
            });
        }
        
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.navMenu.classList.contains('active')) {
                    this.toggleMenu();
                }
            });
        });
        
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

// ====================================
// FILTERS HIDE ON SCROLL - IMPORTANTE!
// ====================================
class FiltersScrollBehavior {
    constructor() {
        this.filtersSection = document.querySelector('.filters-section');
        this.lastScrollTop = 0;
        this.scrollThreshold = 100;
        this.isFiltersSectionVisible = true;
        
        this.init();
    }
    
    init() {
        if (!this.filtersSection) {
            console.warn('⚠️ No se encontró .filters-section');
            return;
        }
        
        console.log('✅ FiltersScrollBehavior inicializado');
        
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (Math.abs(currentScrollTop - this.lastScrollTop) < 10) {
            return;
        }
        
        if (currentScrollTop < this.scrollThreshold) {
            this.showFilters();
            this.lastScrollTop = currentScrollTop;
            return;
        }
        
        if (currentScrollTop > this.lastScrollTop && this.isFiltersSectionVisible) {
            this.hideFilters();
        } 
        else if (currentScrollTop < this.lastScrollTop && !this.isFiltersSectionVisible) {
            this.showFilters();
        }
        
        this.lastScrollTop = currentScrollTop;
    }
    
    hideFilters() {
        this.filtersSection.classList.add('hidden');
        this.isFiltersSectionVisible = false;
        console.log('🔽 Filtros ocultos');
    }
    
    showFilters() {
        this.filtersSection.classList.remove('hidden');
        this.isFiltersSectionVisible = true;
        console.log('🔼 Filtros mostrados');
    }
}

// ====================================
// SCROLL TO TOP BUTTON
// ====================================
class ScrollToTop {
    constructor() {
        this.createButton();
        this.init();
    }
    
    createButton() {
        const button = document.createElement('button');
        button.id = 'scrollToTop';
        button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        `;
        button.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 32px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-medium);
            z-index: 9998;
            transition: var(--transition-medium);
        `;
        document.body.appendChild(button);
        this.button = button;
    }
    
    init() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.style.display = 'flex';
            } else {
                this.button.style.display = 'none';
            }
        });
        
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        this.button.addEventListener('mouseenter', () => {
            this.button.style.transform = 'translateY(-6px) scale(1.05)';
        });
        
        this.button.addEventListener('mouseleave', () => {
            this.button.style.transform = 'translateY(0) scale(1)';
        });
    }
}

// ====================================
// LOADING ANIMATION
// ====================================
function showLoadingSkeleton() {
    const grid = document.getElementById('propertiesGrid');
    grid.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton-text title"></div>
                <div class="skeleton-text small"></div>
                <div class="skeleton-text description"></div>
                <div class="skeleton-text description"></div>
                <div class="skeleton-text small"></div>
            </div>
        `;
        grid.appendChild(skeleton);
    }
}

// ====================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
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
}

// ====================================
// INITIALIZATION
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando página de comprar...');
    
    showLoadingSkeleton();
    
    setTimeout(() => {
        window.propertiesManager = new PropertiesManager();
        window.modalManager = new ModalManager();
        window.filtersScrollBehavior = new FiltersScrollBehavior();
        
        new ComprarNavigationHandler();
        new ScrollToTop();
        
        initSmoothScroll();
        
        console.log('✅ Página de Comprar - Sistema inicializado correctamente');
        console.log(`📊 ${propertiesDatabase.length} propiedades cargadas`);
        console.log('🎯 Scroll behavior activado - Los filtros se ocultarán al bajar');
        console.log('💡 Haz scroll hacia abajo para ver el efecto');
    }, 800);
});