// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel functionality
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselIndicators = document.querySelectorAll('.carousel-indicators button');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
let currentIndex = 0;
const totalItems = carouselItems.length;

// Function to update carousel
function updateCarousel(index) {
    // Remove active class from all items and indicators
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselIndicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current item and indicator
    carouselItems[index].classList.add('active');
    carouselIndicators[index].classList.add('active');
    
    currentIndex = index;
}

// Function to go to next slide
function nextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= totalItems) {
        nextIndex = 0;
    }
    updateCarousel(nextIndex);
}

// Function to go to previous slide
function prevSlide() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = totalItems - 1;
    }
    updateCarousel(prevIndex);
}

// Event listeners for navigation buttons
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

// Event listeners for indicators
carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        updateCarousel(index);
    });
});

// Auto slide
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto slide on hover
const carousel = document.querySelector('.carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
}

// Form validation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Add hover effect to food items
const foodItems = document.querySelectorAll('.food-item');
foodItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add animation to review cards
const reviewCards = document.querySelectorAll('.review-card');
reviewCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300 * index);
});

// Add parallax effect to banner
window.addEventListener('scroll', function () {
    const banner = document.querySelector('.banner');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < banner.offsetHeight) {
        banner.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Add loading animation
window.addEventListener('load', function () {
    const loader = document.createElement('div');
    loader.style.position = 'fixed';
    loader.style.top = '0';
    loader.style.left = '0';
    loader.style.width = '100%';
    loader.style.height = '100%';
    loader.style.backgroundColor = '#fefbf6';
    loader.style.display = 'flex';
    loader.style.alignItems = 'center';
    loader.style.justifyContent = 'center';
    loader.style.zIndex = '9999';
    
    const logo = document.createElement('img');
    logo.src = 'img/logo.png';
    logo.style.height = '100px';
    logo.style.animation = 'pulse 1.5s infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    loader.appendChild(logo);
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = '0';
        
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 500);
    }, 1500);
});