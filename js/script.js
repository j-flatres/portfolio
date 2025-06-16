window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});


window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

  
    if (scrollPosition >= documentHeight - 10) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled'); 
    } else {
        nav.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let currentSection = '';

  
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

  
    navLinks.forEach((link) => {
        link.classList.remove('active'); 
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); 
        }
    });
});


const scrollToTopButton = document.getElementById("scrollToTop");


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});


scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});5



const cursor = document.getElementById("custom-cursor");

window.addEventListener("mousemove", (e) => {

  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;


  const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2);
  const size = Math.min(40, 20 + speed * 0.5);
  cursor.style.width = `${size}px`;
  cursor.style.height = `${size}px`;
});

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}

function toggleMenu() {
  const menu = document.getElementById("main-menu");
  menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#main-menu a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("main-menu");
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  });
});

