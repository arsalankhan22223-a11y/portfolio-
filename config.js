// ==================== PORTFOLIO CONFIGURATION ====================
// Edit this file to customize your portfolio details

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Professional Freelancer",
        tagline: "Specialized in Web Development, Design & Digital Solutions",
        bio: "Welcome to my professional portfolio. I'm a skilled freelancer with extensive experience in creating web solutions, digital designs, and modern applications.",
        image: null // Add your profile image URL here
    },

    // Contact Information
    contact: {
        email: "contact@portfolio.com",
        phone: "+1 (234) 567-890",
        location: "Your City, Country",
        formEmail: "your-email@example.com" // Email where contact form submissions go
    },

    // Social Media Links
    social: {
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/arsalankhan22223-a11y",
        twitter: "https://x.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/"
    },

    // Skills
    skills: [
        "Web Development",
        "UI/UX Design",
        "HTML/CSS/JavaScript",
        "React",
        "Responsive Design",
        "Problem Solving"
    ],

    // Services
    services: [
        {
            icon: "fa-laptop-code",
            title: "Web Development",
            description: "Full-stack web development services for modern, responsive websites and web applications"
        },
        {
            icon: "fa-pencil-ruler",
            title: "UI/UX Design",
            description: "Creative and user-centered design solutions that enhance user experience"
        },
        {
            icon: "fa-mobile-alt",
            title: "Mobile Solutions",
            description: "Cross-platform mobile app development and responsive mobile design"
        },
        {
            icon: "fa-chart-bar",
            title: "Digital Strategy",
            description: "Data-driven strategies to boost your online presence and business growth"
        },
        {
            icon: "fa-bug",
            title: "Maintenance & Support",
            description: "Ongoing technical support and maintenance for your digital assets"
        },
        {
            icon: "fa-cogs",
            title: "Consulting",
            description: "Expert advice on technology solutions and digital transformation"
        }
    ],

    // Portfolio Projects
    projects: [
        {
            title: "E-Commerce Website",
            description: "Modern responsive e-commerce platform with secure payment integration",
            technologies: "React, Node.js, MongoDB",
            link: "#"
        },
        {
            title: "Mobile App Design",
            description: "User-friendly mobile app interface with intuitive navigation",
            technologies: "Figma, UI/UX",
            link: "#"
        },
        {
            title: "Analytics Dashboard",
            description: "Real-time data visualization and reporting dashboard",
            technologies: "React, Chart.js, SQL",
            link: "#"
        },
        {
            title: "Brand Identity",
            description: "Complete branding package including logo and visual guidelines",
            technologies: "Graphic Design, Branding",
            link: "#"
        },
        {
            title: "Custom Web App",
            description: "Tailored web application solution for business automation",
            technologies: "JavaScript, Python, PostgreSQL",
            link: "#"
        },
        {
            title: "SEO Optimization",
            description: "Comprehensive SEO strategy and implementation for better visibility",
            technologies: "SEO, Analytics",
            link: "#"
        }
    ],

    // Pricing
    pricing: {
        showPricing: true,
        currency: "USD",
        plans: [
            {
                name: "Starter",
                price: 500,
                duration: "project",
                features: [
                    "Basic website",
                    "3-5 pages",
                    "Mobile responsive",
                    "Basic SEO"
                ]
            },
            {
                name: "Professional",
                price: 2000,
                duration: "project",
                features: [
                    "Advanced website",
                    "10+ pages",
                    "E-commerce integration",
                    "SEO optimization",
                    "Analytics setup"
                ]
            },
            {
                name: "Enterprise",
                price: 5000,
                duration: "project",
                features: [
                    "Custom web application",
                    "Database integration",
                    "Advanced features",
                    "Full SEO & marketing",
                    "Ongoing support"
                ]
            }
        ]
    },

    // Theme Colors
    theme: {
        primary: "#007bff",
        secondary: "#0056b3",
        accent: "#ffc107",
        textDark: "#333",
        textLight: "#666",
        bgLight: "#f8f9fa",
        bgWhite: "#ffffff"
    },

    // Site Metadata
    siteMetadata: {
        title: "Professional Freelance Portfolio",
        description: "Showcase your freelance skills and get client inquiries through your professional portfolio",
        keywords: "freelancer, portfolio, web design, web development",
        author: "Your Name",
        url: "https://yourportfolio.com"
    },

    // Features
    features: {
        showBlog: false,
        showTestimonials: true,
        showPricing: true,
        showResume: true,
        resumeURL: "./resume.pdf"
    },

    // Form Settings
    form: {
        emailService: "formsubmit", // Options: "formsubmit", "emailjs", "custom"
        formsubmitEmail: "your-email@example.com",
        emailJsConfig: {
            serviceID: "YOUR_SERVICE_ID",
            templateID: "YOUR_TEMPLATE_ID",
            publicKey: "YOUR_PUBLIC_KEY"
        }
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

console.log("Portfolio configuration loaded successfully!");
