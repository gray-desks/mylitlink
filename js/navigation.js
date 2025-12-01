document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const siteNav = document.querySelector('.site-nav');
    const navLinks = document.querySelectorAll('.site-nav a');
    const body = document.body;

    if (!hamburgerBtn || !siteNav) return;

    // Toggle Menu
    hamburgerBtn.addEventListener('click', () => {
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        toggleMenu(!isExpanded);
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (siteNav.classList.contains('is-active') &&
            !siteNav.contains(e.target) &&
            !hamburgerBtn.contains(e.target)) {
            toggleMenu(false);
        }
    });

    let scrollPosition = 0;

    function toggleMenu(show) {
        hamburgerBtn.setAttribute('aria-expanded', show);
        if (show) {
            scrollPosition = window.scrollY;
            hamburgerBtn.classList.add('is-active');
            siteNav.classList.add('is-active');

            // Robust scroll lock for mobile
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition}px`;
            body.style.width = '100%';
            body.style.overflowY = 'scroll'; // Prevent layout shift
        } else {
            hamburgerBtn.classList.remove('is-active');
            siteNav.classList.remove('is-active');

            // Restore scroll
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            body.style.overflowY = '';
            window.scrollTo(0, scrollPosition);
        }
    }
});
