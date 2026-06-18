document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar & Scroll Effects
    const header = document.getElementById('header');
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else if (isHomePage) {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 2. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 3. Search and Filter Logic (Destinations Page)
    const searchInput = document.getElementById('destinationSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const destinationCards = document.querySelectorAll('#destinations-grid .card');

    if (searchInput) {
        const filterDestinations = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

            destinationCards.forEach(card => {
                const name = card.dataset.name.toLowerCase();
                const category = card.dataset.category;
                
                const matchesSearch = name.includes(searchTerm);
                const matchesCategory = activeCategory === 'All' || category === activeCategory;

                if (matchesSearch && matchesCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        searchInput.addEventListener('input', filterDestinations);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterDestinations();
            });
        });
    }

    // 4. Form Validation Logic
    const validateForm = (formId, successId) => {
        const form = document.getElementById(formId);
        const successMsg = document.getElementById(successId);

        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            
            inputs.forEach(input => {
                const group = input.parentElement;
                
                if (!input.value.trim()) {
                    group.classList.add('error');
                    isValid = false;
                } else if (input.type === 'email' && !validateEmail(input.value)) {
                    group.classList.add('error');
                    isValid = false;
                } else {
                    group.classList.remove('error');
                }
            });

            if (isValid) {
                form.style.display = 'none';
                successMsg.style.display = 'block';
                
                // Optional: Log data or send to a real endpoint in the future
                console.log(`Form ${formId} submitted successfully!`);
            }
        });
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    validateForm('tripPlannerForm', 'plannerSuccess');
    validateForm('contactForm', 'contactSuccess');
});
