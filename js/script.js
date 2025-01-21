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

    // Si on arrive en bas de la page, on affiche le footer
    if (scrollPosition >= documentHeight - 10) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled'); // Applique l'effet de changement de couleur
    } else {
        nav.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('section'); // Toutes les sections
const navLinks = document.querySelectorAll('nav ul li a'); // Tous les liens du menu

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Parcourt les sections pour trouver celle qui est visible
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Met à jour les classes actives des liens
    navLinks.forEach((link) => {
        link.classList.remove('active'); // Retire la classe active de tous les liens
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); // Ajoute la classe active au lien correspondant
        }
    });
});

// Récupère le bouton "Retour en haut"
const scrollToTopButton = document.getElementById("scrollToTop");

// Affiche ou masque le bouton en fonction de la position du scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Quand on a scrollé de 300px
        scrollToTopButton.style.display = 'block'; // Affiche le bouton
    } else {
        scrollToTopButton.style.display = 'none'; // Cache le bouton
    }
});

// Ajoute l'événement de clic pour faire défiler la page vers le haut
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défile doucement vers le haut
});5


// Sélectionner l'élément du curseur
const cursor = document.getElementById("custom-cursor");

window.addEventListener("mousemove", (e) => {
  // Positionner la tâche en suivant la souris
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  // Calculer la vitesse de la souris et ajuster la taille de la tâche
  const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2);
  const size = Math.min(40, 20 + speed * 0.5); // Ajustez ces valeurs pour l'effet souhaité
  cursor.style.width = `${size}px`;
  cursor.style.height = `${size}px`;
});

