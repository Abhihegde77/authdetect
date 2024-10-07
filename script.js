document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const infoSection = document.querySelector('.info');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            infoSection.style.opacity = '1';
            infoSection.style.transform = 'translateY(0)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            infoSection.style.opacity = '0';
            infoSection.style.transform = 'translateY(20px)';
        }
    });

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});