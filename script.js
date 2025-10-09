const menu = document.querySelector('.menu');
const openBtn = document.getElementById('menuToggle');
const closeBtn = document.querySelector('.btnClose');
const menuLinks = document.querySelectorAll('.menu-link');

// Abrir menu
openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

// Fechar menu
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});

// Fechar ao clicar em qualquer link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  });
});


new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  //pagination bullets
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive Breakpoints
  breakpoints: {
    0:{
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    },
  }
});

const counters = document.querySelectorAll('.metric h3');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');

      function animateMetrics() {
        const current = +counter.innerText.replace('+', '');

        if (current < target) {
          const increment = target / 200;
          const newValue = Math.min(current + increment, target);
          counter.innerText = "+" + Math.ceil(newValue);
          setTimeout(animateMetrics, 10);
        } else {
          counter.innerText = "+" + target;
        }
      }

      animateMetrics();
      observer.unobserve(counter); // impede que a animação repita ao rolar novamente
    }
  });
}, { threshold: 0.6 }); // 60% visível

counters.forEach(counter => observer.observe(counter));

// ===== EFEITO DE APARECER AO ROLAR =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', revealOnScroll);
