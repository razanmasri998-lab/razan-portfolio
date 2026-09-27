/* ===========================
   main.js ā€” Portfolio (Arabisch)
   =========================== */

/* --- Navigations-Scroll-Schatten --- */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* --- Aktiver Nav-Link beim Scrollen --- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

/* --- Sanftes Scrollen fĆ¼r Nav-Links --- */
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* --- Scroll-Einblendanimation (Intersection Observer) --- */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => observer.observe(section));

/* --- Projektkarten mit verzĆ¶gerter Animation --- */
const cards = document.querySelectorAll('.project-card');

cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});

/* --- FĆ¤higkeits-Badges mit gestaffelter Animation --- */
const badges = document.querySelectorAll('.skill-badge');

const badgeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        badges.forEach((badge, i) => {
          setTimeout(() => {
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0) scale(1)';
          }, i * 60);
        });
        badgeObserver.disconnect();
      }
    });
  },
  { threshold: 0.2 }
);

badges.forEach(badge => {
  badge.style.opacity = '0';
  badge.style.transform = 'translateY(12px) scale(0.95)';
  badge.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
});

const skillsSection = document.getElementById('skills');
if (skillsSection) badgeObserver.observe(skillsSection);

/* --- Aktives Jahr im Footer --- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
// Typewriter-Effekt für id="typed"
document.addEventListener('DOMContentLoaded', () => {

  const el   = document.getElementById('typed');
  const text = el.getAttribute('data-text');
  let   i    = 0;

  // Cursor-Style
  el.style.borderRight = '3px solid #7c3aed';
  el.style.paddingRight = '4px';
  el.style.whiteSpace = 'nowrap';
  el.style.overflow = 'hidden';

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    } else {
      // Cursor blinken lassen nach Ende
      el.style.animation = 'blink 0.8s step-end infinite';
    }
  }

  // CSS für Cursor-Blinken
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      0%, 100% { border-color: #7c3aed; }
      50%       { border-color: transparent; }
    }
  `;
  document.head.appendChild(style);

  type();

});
// ===========================
// projects.js
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.project-card');

  // Gestaffelte Einblend-Animation per Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = [...cards].indexOf(card);
        setTimeout(() => card.classList.add('visible'), index * 100);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));

  // Externe Link-Buttons
  document.querySelectorAll('.ext-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.closest('.project-card').dataset.url;
      if (url) window.open(url, '_blank');
    });
  });

});