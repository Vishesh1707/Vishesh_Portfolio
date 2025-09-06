document.addEventListener('DOMContentLoaded', () => {
    // Select the hamburger icon and the list of menu items
    const hamburger = document.querySelector('.hamburger-icon');
    const navItems = document.querySelector('.mobile-nav-items');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the menu items
        navItems.classList.toggle('active');
    });

    // Code for smooth scrolling and header styles goes here
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a class to the header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
