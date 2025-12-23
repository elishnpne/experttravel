// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-links a');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
    }
});

// ===== IMAGE SLIDER =====
const sliderTrack = document.getElementById('sliderTrack');
let slideIndex = 1;
let slideTimer;

// Initialize slider
showSlides(slideIndex);
startAutoSlide();

function startAutoSlide() {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(autoShowSlides, 4000);
}

function plusSlides(n) {
    clearTimeout(slideTimer);
    slideIndex += n;
    showSlides(slideIndex);
    startAutoSlide();
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n;
    showSlides(slideIndex);
    startAutoSlide();
}

function autoShowSlides() {
    slideIndex++;
    showSlides(slideIndex);
    startAutoSlide();
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    const totalSlides = slides.length;

    if (n > totalSlides) slideIndex = 1;
    if (n < 1) slideIndex = totalSlides;

    const activeIndex = slideIndex - 1;
    const moveDistance = activeIndex * -100;
    
    if (sliderTrack) {
        sliderTrack.style.transform = `translateX(${moveDistance}%)`;
    }

    // Update dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    if (dots[activeIndex]) {
        dots[activeIndex].classList.add('active');
    }
}

// ===== FORM SUBMISSION =====
const travelForm = document.getElementById('travelForm');

if (travelForm) {
    travelForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(travelForm);
        const data = Object.fromEntries(formData);
        
        // Show success message (you can replace this with actual form submission)
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
        
        // Reset form
        travelForm.reset();
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});


