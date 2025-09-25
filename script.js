// Page content
const pages = {
    'index.html': `
        <section class="page home-page">
            <div class="container">
                <section class="hero">
                    <div class="hero-content">
                        <h1 class="hero-title">Hi, I'm Alex Johnson</h1>
                        <h2 class="hero-subtitle">Full Stack Developer</h2>
                        <p class="hero-description">I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's bring your ideas to life!</p>
                        <div class="hero-buttons">
                            <a href="#projects" class="btn">View My Work</a>
                            <a href="contact.html" class="btn btn-outline">Get In Touch</a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Developer Portrait">
                    </div>
                </section>

                <section class="skills" id="skills">
                    <h2 class="section-title">My Skills</h2>
                    <p class="section-subtitle">I specialize in building modern web applications using the latest technologies</p>
                    <div class="skills-grid">
                        <div class="skill-card">
                            <div class="skill-icon">
                                <i class="fab fa-js-square"></i>
                            </div>
                            <h3 class="skill-title">JavaScript</h3>
                            <p>Advanced knowledge of ES6+, React, Node.js, and modern JavaScript frameworks.</p>
                        </div>
                        <div class="skill-card">
                            <div class="skill-icon">
                                <i class="fab fa-python"></i>
                            </div>
                            <h3 class="skill-title">Python</h3>
                            <p>Experience with Django, Flask, data analysis, and automation scripting.</p>
                        </div>
                        <div class="skill-card">
                            <div class="skill-icon">
                                <i class="fas fa-database"></i>
                            </div>
                            <h3 class="skill-title">Database Design</h3>
                            <p>Proficient in SQL, MongoDB, and designing efficient database architectures.</p>
                        </div>
                        <div class="skill-card">
                            <div class="skill-icon">
                                <i class="fas fa-cloud"></i>
                            </div>
                            <h3 class="skill-title">Cloud Services</h3>
                            <p>Deployment and management on AWS, Azure, and other cloud platforms.</p>
                        </div>
                    </div>
                </section>

                <section class="projects" id="projects">
                    <h2 class="section-title">Featured Projects</h2>
                    <p class="section-subtitle">Here are some of my recent projects that I'm proud of</p>
                    <div class="slider-container">
                        <div class="slider" id="project-slider">
                            <div class="slide">
                                <div class="slide-content">
                                    <div class="slide-image">
                                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" alt="E-commerce Platform">
                                    </div>
                                    <div class="slide-text">
                                        <h3 class="slide-title">E-commerce Platform</h3>
                                        <p class="slide-description">A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.</p>
                                        <a href="#" class="btn">View Project</a>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div class="slide-content">
                                    <div class="slide-image">
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Task Management App">
                                    </div>
                                    <div class="slide-text">
                                        <h3 class="slide-title">Task Management App</h3>
                                        <p class="slide-description">A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                                        <a href="#" class="btn">View Project</a>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div class="slide-content">
                                    <div class="slide-image">
                                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Weather Dashboard">
                                    </div>
                                    <div class="slide-text">
                                        <h3 class="slide-title">Weather Dashboard</h3>
                                        <p class="slide-description">A responsive weather application that displays current conditions and forecasts using data from a third-party API with interactive charts.</p>
                                        <a href="#" class="btn">View Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-nav" id="slider-nav">
                            <span class="slider-dot active" data-index="0"></span>
                            <span class="slider-dot" data-index="1"></span>
                            <span class="slider-dot" data-index="2"></span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    `,
    'about.html': `
        <section class="page about-page">
            <div class="container">
                <h2 class="section-title">About Me</h2>
                <p class="section-subtitle">Learn more about my background, experience, and passion for technology</p>
                
                <div class="about-content">
                    <div class="about-image">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" alt="About Me">
                    </div>
                    <div class="about-text">
                        <h3 class="about-title">My Journey in Tech</h3>
                        <p class="about-description">I'm a passionate software developer with over 5 years of experience creating digital solutions for businesses of all sizes. My journey began with a Computer Science degree, but my real education started when I began building real-world applications.</p>
                        <p class="about-description">I believe in writing clean, efficient code and creating user experiences that are both beautiful and functional. When I'm not coding, you can find me contributing to open-source projects, attending tech meetups, or exploring new frameworks and technologies.</p>
                        <p class="about-description">My approach to development is collaborative and user-focused. I work closely with clients to understand their needs and deliver solutions that exceed expectations.</p>
                        <a href="contact.html" class="btn">Let's Work Together</a>
                    </div>
                </div>
                
                <div class="timeline-section">
                    <h3 class="section-title" style="font-size: 2rem; margin-top: 4rem;">My Experience</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <div class="timeline-date">2021 - Present</div>
                                <h4>Senior Full Stack Developer</h4>
                                <p>TechSolutions Inc.</p>
                                <p>Leading development of enterprise web applications, mentoring junior developers, and implementing agile methodologies.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <div class="timeline-date">2019 - 2021</div>
                                <h4>Frontend Developer</h4>
                                <p>Digital Innovations Agency</p>
                                <p>Developed responsive web applications using React, Vue.js, and modern CSS frameworks for various clients.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <div class="timeline-date">2017 - 2019</div>
                                <h4>Junior Web Developer</h4>
                                <p>StartUp Ventures</p>
                                <p>Built and maintained company websites, implemented new features, and optimized web performance.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <div class="timeline-date">2013 - 2017</div>
                                <h4>B.S. in Computer Science</h4>
                                <p>University of Technology</p>
                                <p>Graduated with honors, focusing on software engineering, algorithms, and human-computer interaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    'contact.html': `
        <section class="page contact-page">
            <div class="container">
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-subtitle">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
                
                <div class="contact-content">
                    <div class="contact-info">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>alex.johnson@example.com</p>
                            </div>
                        </div>
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div>
                                <h3>Availability</h3>
                                <p>Mon - Fri: 9AM - 6PM PST</p>
                            </div>
                        </div>
                    </div>
                    
                    <form class="contact-form" id="contact-form">
                        <div class="form-group">
                            <label for="name" class="form-label">Your Name</label>
                            <input type="text" id="name" class="form-input" required>
                            <div class="error" id="name-error">Please enter your name</div>
                        </div>
                        <div class="form-group">
                            <label for="email" class="form-label">Your Email</label>
                            <input type="email" id="email" class="form-input" required>
                            <div class="error" id="email-error">Please enter a valid email address</div>
                        </div>
                        <div class="form-group">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" id="subject" class="form-input" required>
                            <div class="error" id="subject-error">Please enter a subject</div>
                        </div>
                        <div class="form-group">
                            <label for="message" class="form-label">Your Message</label>
                            <textarea id="message" class="form-textarea" required></textarea>
                            <div class="error" id="message-error">Please enter your message</div>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    `
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set active page based on URL
    const path = window.location.pathname.split('/').pop() || 'index.html';
    setActivePage(path);
    
    // Initialize navigation
    initNavigation();
    
    // Initialize project slider if on home page
    if (path === 'index.html') {
        initProjectSlider();
    }
    
    // Initialize form validation if on contact page
    if (path === 'contact.html') {
        initFormValidation();
    }
});

// Set active page content
function setActivePage(page) {
    const mainContent = document.getElementById('main-content');
    
    if (pages[page]) {
        mainContent.innerHTML = pages[page];
        
        // Update active navigation link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === page) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Initialize project slider
function initProjectSlider() {
    const slider = document.getElementById('project-slider');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    
    if (!slider) return;
    
    // Function to show slide
    function showSlide(index) {
        if (index < 0) index = dots.length - 1;
        if (index >= dots.length) index = 0;
        
        slider.style.transform = `translateX(-${index * 100}%)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Add click events to dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
        });
    });
    
    // Auto-advance slides
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Initialize form validation
function initFormValidation() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (!name.value.trim()) {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Validate subject
        const subject = document.getElementById('subject');
        const subjectError = document.getElementById('subject-error');
        if (!subject.value.trim()) {
            subjectError.style.display = 'block';
            isValid = false;
        } else {
            subjectError.style.display = 'none';
        }
        
        // Validate message
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (!message.value.trim()) {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }
        
        // If form is valid, show success message
        if (isValid) {
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }
    });
}