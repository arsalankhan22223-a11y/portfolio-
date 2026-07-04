// ==================== MOBILE MENU TOGGLE ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // Set social links from configuration and open them in a new tab
    const socialLinks = document.querySelectorAll('.social-links a');
    if (typeof portfolioConfig !== 'undefined') {
        socialLinks.forEach(link => {
            const platform = link.getAttribute('data-social');
            const url = portfolioConfig.social?.[platform];

            if (url) {
                link.href = url;
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu && navMenu.contains(event.target);
        const isClickOnHamburger = hamburger && hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu) {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });
});

// ==================== CONTACT FORM HANDLING ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            const budget = document.getElementById('budget').value;

            // Basic validation
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all required fields', 'error');
                return;
            }

            // Email validation
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            // Prepare the message
            const fullMessage = prepareEmailMessage(name, email, phone, subject, message, budget);

            // Send to email service (using EmailJS - you'll need to set this up)
            sendEmail(name, email, subject, fullMessage);
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function prepareEmailMessage(name, email, phone, subject, message, budget) {
        return `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Budget: ${budget || 'Not specified'}

Message:
${message}
        `;
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = type;
        formMessage.style.display = 'block';

        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    function sendEmail(name, email, subject, message) {
        // Method 1: Using FormSubmit.co (free, no setup required)
        sendViaFormSubmit(name, email, subject, message);
        
        // Method 2: Uncomment below to use EmailJS instead (requires setup)
        // sendViaEmailJS(name, email, subject, message);
    }

    function sendViaFormSubmit(name, email, subject, message) {
        // Create a hidden form and submit to FormSubmit
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://formsubmit.co/your-email@example.com'; // CHANGE THIS TO YOUR EMAIL
        form.style.display = 'none';

        const fields = {
            name: name,
            email: email,
            subject: subject,
            message: message,
            _captcha: 'false'
        };

        for (const key in fields) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = fields[key];
            form.appendChild(input);
        }

        document.body.appendChild(form);

        // Show processing message
        showMessage('Sending your message...', 'success');

        // Submit the form
        setTimeout(function() {
            form.submit();
            // Reset contact form after submission
            document.getElementById('contactForm').reset();
            showMessage('Message sent successfully! I will get back to you soon.', 'success');
            document.body.removeChild(form);
        }, 500);
    }

    function sendViaEmailJS(name, email, subject, message) {
        // This requires EmailJS library and setup
        // Uncomment emailjs library in HTML first
        
        /*
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            to_email: 'your-email@example.com',
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('Message sent successfully! I will get back to you soon.', 'success');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            showMessage('Error sending message. Please try again later.', 'error');
        });
        */
    }
});

// ==================== SMOOTH SCROLLING ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe portfolio items
document.querySelectorAll('.portfolio-item, .service-card').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// ==================== FORM STYLING ENHANCEMENTS ==================== 
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ==================== NAVBAR SCROLL EFFECT ==================== 
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop;
});

// ==================== PERFORMANCE: Lazy Loading Images ==================== 
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

console.log('Portfolio website loaded successfully!');
