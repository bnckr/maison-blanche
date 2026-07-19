const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.textContent = navMenu.classList.contains('open') ? '×' : '☰';
  });
}

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });

revealElements.forEach((el) => observer.observe(el));
