tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                },
                dark: {
                    900: '#020617',
                    800: '#0f172a',
                    700: '#1e293b',
                    600: '#334155',
                    500: '#475569',
                }
            },
            fontFamily: {
                'cairo': ['Cairo', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 6s ease-in-out infinite',
                'gradient-x': 'gradient-x 8s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'gradient-x': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                }
            }
        }
    }
}
// Loading Screen
window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    loading.style.opacity = '0';
    setTimeout(() => {
        loading.style.display = 'none';
    }, 500);
});

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
});

// Particles.js Config
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#06b6d4"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#06b6d4",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Comment Form
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('useremail').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && comment) {
        const now = new Date();
        const commentItem = document.createElement('div');
        commentItem.classList.add('bg-dark-700', 'p-6', 'rounded-lg', 'border', 'border-dark-600', 'animate__animated', 'animate__fadeInUp');
        commentItem.innerHTML = `
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-user text-primary-400"></i>
              </div>
              <div>
                <h4 class="font-bold text-white">${name}</h4>
                ${email ? `<small class="text-primary-400">${email}</small>` : ''}
              </div>
            </div>
            <small class="text-gray-500">${now.toLocaleString('ar-EG')}</small>
          </div>
          <p class="text-gray-300">${comment}</p>
          <div class="flex justify-end mt-4">
            <button class="text-gray-500 hover:text-primary-400 text-sm delete-comment">
              <i class="fas fa-trash mr-1"></i> حذف
            </button>
          </div>
        `;

        commentsList.prepend(commentItem);
        commentForm.reset();

        // Add delete functionality
        const deleteBtn = commentItem.querySelector('.delete-comment');
        deleteBtn.addEventListener('click', () => {
            commentItem.classList.add('animate__fadeOut');
            setTimeout(() => {
                commentItem.remove();
            }, 500);
        });

        // Scroll to the new comment
        setTimeout(() => {
            commentItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
});

// Animated Counter
const counters = document.querySelectorAll('.animate-count');
const speed = 200;

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Start counting when section is in view
const statsSection = document.querySelector('.bg-gradient-to-r');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(statsSection);

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> جاري الإرسال...';

    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> تم الإرسال بنجاح';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            contactForm.reset();
        }, 2000);
    }, 1500);
});