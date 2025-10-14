//MENU HAMBURGUER
const menu = document.querySelector('.menu');
const openBtn = document.getElementById('menuToggle');
const closeBtn = document.querySelector('.btnClose');
const menuLinks = document.querySelectorAll('.menu-link');

//OPEN MENU
openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

//CLOSE MENU
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});

//CLOSE ON CLICK IN LINK
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  });
});


//CARROSEL DOS PROJETOS (SWIPER)
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  //pagination bullets
  pagination: {
    el: '.swiper-pagination',
  },

  //SETAS
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

//ANIMATION OF METRICS COUTING
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

//EFEITO DE APARECER AO ROLAR
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

//FUNCTION SEND WHATSAPP
function enviarWhatsApp(event){
  event.preventDefault(); // Impede o envio tradicional do formulário

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Estou vindo do seu portfólio! %0Me chamo ${nome}. %0${mensagem}`;
  const numero = "5515988036921"; // Substitua pelo seu número com DDD e código do país
  const url = `https://api.whatsapp.com/send?phone=${5515988036921}&text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}