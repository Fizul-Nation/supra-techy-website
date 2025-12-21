
        // // Theme Toggle
        // const themeToggle = document.getElementById('theme-toggle');
        // const body = document.body;
        // const icon = themeToggle.querySelector('i');

        // // Check for saved theme preference
        // const savedTheme = localStorage.getItem('theme');
        // if (savedTheme === 'dark') {
        //     body.classList.add('dark-mode');
        //     icon.classList.remove('fa-moon');
        //     icon.classList.add('fa-sun');
        // }

        // themeToggle.addEventListener('click', () => {
        //     body.classList.toggle('dark-mode');
            
        //     if (body.classList.contains('dark-mode')) {
        //         icon.classList.remove('fa-moon');
        //         icon.classList.add('fa-sun');
        //         localStorage.setItem('theme', 'dark');
        //     } else {
        //         icon.classList.remove('fa-sun');
        //         icon.classList.add('fa-moon');
        //         localStorage.setItem('theme', 'light');
        //     }
        // });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active Navigation Link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const headerHeight = document.querySelector('header').offsetHeight;
                
                if (window.scrollY >= (sectionTop - headerHeight - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Animate Elements on Scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.card, .service-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Initial setup for animation
        document.querySelectorAll('.card, .service-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Run animation on scroll
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on load
    