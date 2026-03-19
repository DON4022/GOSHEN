// ========== WEBSITE CONFIGURATION ==========
const config = {
    phoneNumber: '0717563725',
    whatsappMessage: 'Hello Goshen Cake Haven! I would like to inquire about your cakes. 🍰',
    companyName: 'Goshen Cake Haven',
    location: 'Maseno',
    currency: 'KSh '
};

// ========== CAKE DATA ==========
const cakes = [
    {
        id: 'cake1',
        name: '🍫 Divine Chocolate',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
        description: 'Rich, moist chocolate cake with velvety ganache. Perfect for chocolate lovers!',
        details: ['🍫 Belgian Chocolate', '🥚 Free-range Eggs', '🌿 Vanilla Essence'],
        badge: 'Best Seller',
        prices: [
            { size: '0.25 kg', servings: '2-3 people', price: 500 },
            { size: '0.5 kg', servings: '4-6 people', price: 1000 },
            { size: '1 kg', servings: '8-10 people', price: 2000 },
            { size: '2 kg', servings: '15-20 people', price: 4500 }
        ],
        fullDescription: 'Our signature Divine Chocolate cake is a chocolate lover\'s paradise! Made with premium Belgian chocolate, this cake features three layers of moist chocolate sponge, filled with rich chocolate ganache, and covered in a silky smooth chocolate buttercream. Each bite is an explosion of deep, rich chocolate flavor that melts in your mouth.',
        specifications: [
            { label: 'Flavor', value: 'Belgian Chocolate' },
            { label: 'Filling', value: 'Chocolate Ganache' },
            { label: 'Frosting', value: 'Chocolate Buttercream' },
            { label: 'Shelf Life', value: '3-4 days refrigerated' },
            { label: 'Allergens', value: 'Contains gluten, dairy, eggs' }
        ]
    },
    {
        id: 'cake2',
        name: '❤️ Red Velvet Dream',
        image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=800&q=80',
        description: 'Classic red velvet with cream cheese frosting. A perfect balance of sweetness and tanginess.',
        details: ['❤️ Red Velvet Color', '🧀 Cream Cheese', '🌿 Natural Flavor'],
        badge: 'Customer Favorite',
        prices: [
            { size: '0.25 kg', servings: '2-3 people', price: 500 },
            { size: '0.5 kg', servings: '4-6 people', price: 1000 },
            { size: '1 kg', servings: '8-10 people', price: 2000 },
            { size: '2 kg', servings: '15-20 people', price: 4500 }
        ],
        fullDescription: 'Our Red Velvet Dream is a classic Southern favorite with a hint of cocoa and a striking red color. The cake is incredibly moist and tender, with a subtle tang from buttermilk and a hint of vanilla. It\'s paired with our signature cream cheese frosting that\'s perfectly sweet and tangy, creating a beautiful balance of flavors.',
        specifications: [
            { label: 'Flavor', value: 'Red Velvet with Cocoa' },
            { label: 'Filling', value: 'Cream Cheese Frosting' },
            { label: 'Frosting', value: 'Cream Cheese' },
            { label: 'Shelf Life', value: '3-4 days refrigerated' },
            { label: 'Allergens', value: 'Contains gluten, dairy, eggs' }
        ]
    },
    {
        id: 'cake3',
        name: '🎉 Celebration Special',
        image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
        description: 'Colorful sprinkles and vanilla buttercream. Perfect for birthdays and special occasions!',
        details: ['🎨 Colorful Sprinkles', '🧁 Vanilla Buttercream', '🕯️ Candle Included'],
        badge: 'Party Favorite',
        prices: [
            { size: '0.25 kg', servings: '2-3 people', price: 500 },
            { size: '0.5 kg', servings: '4-6 people', price: 1000 },
            { size: '1 kg', servings: '8-10 people', price: 2000 },
            { size: '2 kg', servings: '15-20 people', price: 4500 }
        ],
        fullDescription: 'Make your celebration extra special with our Celebration Special cake! This fun and festive cake features a light and fluffy vanilla sponge, layered with silky vanilla buttercream, and covered in colorful sprinkles. It\'s the perfect centerpiece for birthdays, anniversaries, or any happy occasion. Each cake comes with a complimentary birthday candle.',
        specifications: [
            { label: 'Flavor', value: 'Vanilla' },
            { label: 'Filling', value: 'Vanilla Buttercream' },
            { label: 'Topping', value: 'Rainbow Sprinkles' },
            { label: 'Shelf Life', value: '3-4 days refrigerated' },
            { label: 'Extras', value: 'Free candle included' }
        ]
    },
    {
        id: 'cake4',
        name: '🍓 Fresh Fruit Fantasy',
        image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=80',
        description: 'Light sponge topped with fresh seasonal fruits. A healthy and delicious choice!',
        details: ['🍓 Fresh Strawberries', '🍌 Fresh Bananas', '🍊 Citrus Zest'],
        badge: 'Healthy Choice',
        prices: [
            { size: '0.25 kg', servings: '2-3 people', price: 500 },
            { size: '0.5 kg', servings: '4-6 people', price: 1000 },
            { size: '1 kg', servings: '8-10 people', price: 2000 },
            { size: '2 kg', servings: '15-20 people', price: 4500 }
        ],
        fullDescription: 'Our Fresh Fruit Fantasy is a light and refreshing option for fruit lovers! The cake features a delicate vanilla sponge, layered with light whipped cream, and topped with an abundance of fresh seasonal fruits including strawberries, blueberries, kiwis, and mangoes. It\'s the perfect choice for those who prefer a less sweet, more natural dessert option.',
        specifications: [
            { label: 'Flavor', value: 'Vanilla with Fresh Fruits' },
            { label: 'Filling', value: 'Whipped Cream' },
            { label: 'Topping', value: 'Assorted Fresh Fruits' },
            { label: 'Shelf Life', value: '2-3 days refrigerated' },
            { label: 'Seasonal', value: 'Fruits vary by season' }
        ]
    },
    {
        id: 'cake5',
        name: '💜 Purple Velvet Dream',
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=80',
        description: 'Our signature purple velvet cake with cream cheese frosting. A royal treat with natural purple color from ube!',
        details: ['💜 Natural Ube', '🧀 Cream Cheese', '✨ Purple Sprinkles'],
        badge: 'New Arrival',
        prices: [
            { size: '0.25 kg', servings: '2-3 people', price: 550 },
            { size: '0.5 kg', servings: '4-6 people', price: 1100 },
            { size: '1 kg', servings: '8-10 people', price: 2200 },
            { size: '2 kg', servings: '15-20 people', price: 4800 }
        ],
        fullDescription: 'Our signature Purple Velvet Dream is a showstopper! Made with natural ube (purple yam) extract, this cake has a beautiful purple hue and a unique, nutty flavor. The moist purple velvet layers are paired with creamy cream cheese frosting and topped with purple sprinkles. It\'s as delicious as it is beautiful!',
        specifications: [
            { label: 'Flavor', value: 'Ube (Purple Yam)' },
            { label: 'Filling', value: 'Cream Cheese Frosting' },
            { label: 'Frosting', value: 'Cream Cheese' },
            { label: 'Natural Color', value: 'From Ube' },
            { label: 'Allergens', value: 'Contains gluten, dairy, eggs' }
        ]
    },
    {
        id: 'cake6',
        name: '🌸 Lavender Honey Cake',
        image: 'https://images.unsplash.com/photo-1626803775150-322a85d9e438?auto=format&fit=crop&w=800&q=80',
        description: 'Delicate lavender-infused sponge with pure honey and purple lavender buttercream. Aromatic and elegant!',
        details: ['🌸 Culinary Lavender', '🍯 Pure Honey', '💜 Lavender Buttercream'],
        badge: 'Signature Flavor',
        prices: [
            { size: '0.25 kg', servings: '2-3 people', price: 600 },
            { size: '0.5 kg', servings: '4-6 people', price: 1200 },
            { size: '1 kg', servings: '8-10 people', price: 2400 },
            { size: '2 kg', servings: '15-20 people', price: 5000 }
        ],
        fullDescription: 'Experience the delicate floral notes of our Lavender Honey Cake. Each layer is infused with culinary lavender and sweetened with pure honey, creating a sophisticated flavor profile. The cake is frosted with a lavender buttercream and decorated with dried lavender buds. It\'s a truly elegant dessert perfect for special occasions.',
        specifications: [
            { label: 'Flavor', value: 'Lavender & Honey' },
            { label: 'Filling', value: 'Honey Buttercream' },
            { label: 'Frosting', value: 'Lavender Buttercream' },
            { label: 'Shelf Life', value: '3-4 days refrigerated' },
            { label: 'Allergens', value: 'Contains gluten, dairy, eggs' }
        ]
    },
    {
        id: 'cake7',
        name: '🫐 Blueberry Purple Cheesecake',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
        description: 'Creamy purple cheesecake with a blueberry swirl on a buttery biscuit base. Topped with fresh blueberries!',
        details: ['🫐 Fresh Blueberries', '🍪 Biscuit Base', '💜 Purple Swirl'],
        badge: 'Premium Dessert',
        prices: [
            { size: '0.25 kg', servings: '2-3 people', price: 650 },
            { size: '0.5 kg', servings: '4-6 people', price: 1300 },
            { size: '1 kg', servings: '8-10 people', price: 2600 },
            { size: '2 kg', servings: '15-20 people', price: 5200 }
        ],
        fullDescription: 'Our Blueberry Purple Cheesecake is a creamy dream! The smooth purple cheesecake filling is made with cream cheese and a hint of blueberry puree, giving it a beautiful lavender color. It sits on a buttery biscuit base and is topped with fresh blueberries and a blueberry swirl. Each bite is rich, creamy, and bursting with berry flavor.',
        specifications: [
            { label: 'Flavor', value: 'Blueberry Cheesecake' },
            { label: 'Base', value: 'Butter Biscuit' },
            { label: 'Topping', value: 'Fresh Blueberries' },
            { label: 'Shelf Life', value: '4-5 days refrigerated' },
            { label: 'Allergens', value: 'Contains gluten, dairy, eggs' }
        ]
    }
];

// ========== UTILITY FUNCTIONS ==========
function showLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) spinner.style.display = 'block';
}

function hideLoading() {
    setTimeout(() => {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) spinner.style.display = 'none';
    }, 500);
}

function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, duration);
}

function formatPrice(price) {
    return config.currency + price.toLocaleString();
}

// ========== WHATSAPP INTEGRATION ==========
const formattedPhone = '254' + config.phoneNumber.substring(1);

function openWhatsApp(message = '') {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    trackEvent('WhatsApp', 'Open', message.substring(0, 30));
}

// ========== RENDER CAKES ==========
function renderCakes() {
    const cakeGrid = document.getElementById('cakeGrid');
    if (!cakeGrid) return;
    
    cakeGrid.innerHTML = '';

    cakes.forEach(cake => {
        const priceTable = cake.prices.map(p => 
            `<div class="price-row">
                <span class="size">${p.size} (${p.servings})</span>
                <span class="price">${formatPrice(p.price)}</span>
            </div>`
        ).join('');

        const sizeOptions = cake.prices.map(p =>
            `<div class="size-option" data-weight="${p.size}" data-price="${p.price}" data-servings="${p.servings}">
                <div class="weight">${p.size}</div>
                <div class="price">${formatPrice(p.price)}</div>
                <small>${p.servings}</small>
            </div>`
        ).join('');

        const cakeCard = document.createElement('div');
        cakeCard.className = 'cake-card';
        cakeCard.id = cake.id;
        cakeCard.innerHTML = `
            <div class="price-badge">${cake.badge}</div>
            <div class="cake-image">
                <img src="${cake.image}" alt="${cake.name}" loading="lazy">
            </div>
            <div class="cake-info">
                <h3>${cake.name}</h3>
                <p class="cake-description">${cake.description}</p>
                
                <div class="cake-details">
                    ${cake.details.map(d => `<span class="cake-detail-item">${d}</span>`).join('')}
                </div>
                
                <div class="price-table">
                    ${priceTable}
                </div>

                <div class="cake-size-selector">
                    <div style="font-weight: bold; margin-bottom: 0.5rem;">Select Size:</div>
                    <div class="size-options" data-cake="${cake.name}">
                        ${sizeOptions}
                    </div>
                </div>

                <button class="view-details-btn" onclick='showCakeDetails("${cake.id}")'>📋 View Full Details</button>
                <button class="order-now-btn" data-cake="${cake.name}">Order Now</button>
            </div>
        `;

        cakeGrid.appendChild(cakeCard);
    });

    // Add event listeners after rendering
    addEventListeners();
}

// ========== ADD EVENT LISTENERS ==========
function addEventListeners() {
    // Size selector
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.querySelectorAll('.size-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });

    // Order buttons
    document.querySelectorAll('.order-now-btn').forEach(button => {
        button.addEventListener('click', function() {
            const cakeName = this.getAttribute('data-cake');
            const cakeCard = this.closest('.cake-card');
            const selectedSize = cakeCard.querySelector('.size-option.selected');
            
            if (selectedSize) {
                const weight = selectedSize.getAttribute('data-weight');
                const price = selectedSize.getAttribute('data-price');
                const servings = selectedSize.getAttribute('data-servings');
                
                const message = `Hello Goshen Cake Haven! I would like to order ${cakeName} (${weight}) for ${formatPrice(parseInt(price))} which serves ${servings}. Please let me know if it's available for pickup/delivery in Maseno.`;
                
                if (confirm(`Order ${cakeName} (${weight}) for ${formatPrice(parseInt(price))}?`)) {
                    openWhatsApp(message);
                    showToast('Redirecting to WhatsApp...');
                }
            } else {
                alert('Please select a cake size first!');
                showToast('Please select a cake size', 2000);
            }
        });
    });
}

// ========== CAKE DETAILS MODAL ==========
const modal = document.getElementById('cakeModal');
const closeModal = document.querySelector('.close-modal');

window.showCakeDetails = function(cakeId) {
    const cake = cakes.find(c => c.id === cakeId);
    if (!cake) return;
    
    document.getElementById('modalImage').src = cake.image;
    document.getElementById('modalTitle').textContent = cake.name;
    document.getElementById('modalDescription').textContent = cake.fullDescription;
    
    // Display specifications
    const detailsContainer = document.getElementById('modalDetails');
    detailsContainer.innerHTML = '';
    cake.specifications.forEach(spec => {
        const detailDiv = document.createElement('div');
        detailDiv.className = 'modal-detail-item';
        detailDiv.innerHTML = `
            <div class="modal-detail-label">${spec.label}</div>
            <div class="modal-detail-value">${spec.value}</div>
        `;
        detailsContainer.appendChild(detailDiv);
    });
    
    // Display price table
    const priceContainer = document.getElementById('modalPriceTable');
    priceContainer.innerHTML = '';
    cake.prices.forEach(price => {
        const priceRow = document.createElement('div');
        priceRow.className = 'modal-price-row';
        priceRow.innerHTML = `
            <span>${price.size} (${price.servings})</span>
            <span style="color: #9370db; font-weight: bold;">${formatPrice(price.price)}</span>
        `;
        priceContainer.appendChild(priceRow);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    trackEvent('Modal', 'View', cake.name);
};

// Close modal
if (closeModal) {
    closeModal.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Modal order button
const modalOrderBtn = document.getElementById('modalOrderBtn');
if (modalOrderBtn) {
    modalOrderBtn.addEventListener('click', function() {
        const cakeTitle = document.getElementById('modalTitle').textContent;
        openWhatsApp(`Hello Goshen Cake Haven! I would like to order ${cakeTitle}. Please provide more information.`);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        showToast('Opening WhatsApp...');
    });
}

// ========== VIDEO BACKGROUND HANDLING ==========
const video = document.getElementById('hero-video');
const fallback = document.getElementById('videoFallback');

if (video) {
    video.addEventListener('loadeddata', function() {
        console.log('Video loaded successfully');
        hideLoading();
    });

    video.addEventListener('error', function() {
        if (fallback) {
            fallback.style.display = 'block';
            fallback.innerHTML = 'Unable to load video. Enjoy our cakes in Maseno! 🍰';
        }
        hideLoading();
    });

    video.play().catch(() => {
        if (fallback) {
            fallback.style.display = 'block';
            fallback.innerHTML = 'Click to experience our delicious cakes! 🎂';
        }
        hideLoading();
    });
}

// ========== MOBILE MENU ==========
window.toggleMenu = function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.toggle('active');
};

// ========== SCROLL TO TOP ==========
window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            const navLinks = document.getElementById('navLinks');
            if (navLinks) navLinks.classList.remove('active');
        }
    });
});

// ========== ACTIVE LINK HIGHLIGHT ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== WHATSAPP BUTTONS ==========
const whatsappButton = document.getElementById('whatsappButton');
if (whatsappButton) {
    whatsappButton.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsApp('Hello Goshen Cake Haven! I would like to inquire about your cakes. 🍰');
        showToast('Opening WhatsApp...');
    });
}

const whatsappContactLink = document.getElementById('whatsappContactLink');
if (whatsappContactLink) {
    whatsappContactLink.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsApp('Hello Goshen Cake Haven! I saw your website and would like to know more about your products.');
        showToast('Opening WhatsApp...');
    });
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const whatsappMessage = `*New Inquiry from Goshen Cake Haven Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
        
        if (confirm('Send this message via WhatsApp?')) {
            openWhatsApp(whatsappMessage);
            e.target.reset();
            showToast('Message sent via WhatsApp!');
        }
    });
}

// ========== ANALYTICS TRACKING ==========
function trackEvent(category, action, label) {
    console.log(`📊 Track: ${category} - ${action} - ${label}`);
    // You can integrate with Google Analytics here
}

// Track page views
trackEvent('Page', 'View', 'Home');

// Track section visibility
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            trackEvent('Section', 'View', entry.target.id);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ========== INITIALIZE WEBSITE ==========
document.addEventListener('DOMContentLoaded', function() {
    showLoading();
    renderCakes();
    
    // Show welcome message
    setTimeout(() => {
        showToast('Welcome to Goshen Cake Haven! 💜', 4000);
    }, 1000);
    
    console.log('🚀 Goshen Cake Haven website loaded successfully!');
    console.log('📍 Location: Maseno Town');
    console.log('📱 WhatsApp: ' + config.phoneNumber);
    console.log('💜 Purple theme active');
});

// ========== SERVICE WORKER FOR OFFLINE SUPPORT ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// ========== LAZY LOAD IMAGES ==========
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

console.log('🎉 Website is live and ready!');