// Carrossel
let currentIndex = 0;
const persons = document.querySelectorAll('.carrossel_integrantes .integrantes');
const totalPersons = persons.length;
const visiblePersons = 3;

function moveCarousel(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalPersons - visiblePersons;
  } else if (currentIndex >= totalPersons - visiblePersons + 1) {
    currentIndex = 0;
  }

  const newTransform = `translateX(-${(currentIndex * 100) / visiblePersons}%)`;
  document.querySelector('.carrossel_integrantes').style.transform = newTransform;
}

//Animação Entrada Carrossel
document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carrossel');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(carouselContainer);
});

//Animação De Entradas 
document.addEventListener('DOMContentLoaded', () => {
  const animationElements = document.querySelectorAll('.app .app_imagem, .app .app_conteudo, .pilares .coluna .conteudo h1, .pilares .coluna .conteudo p, .pilares .coluna .conteudo img, .titulo_depoimentos h1, .titulo_mascotes h1, .depoimentos .bloco, .depoimentos .bloco p, .safebite, .sobre, .depoimentos .bloco h2, .depoimentos .foto, .mascotes .bloco, .mascotes .bloco p, .mascotes .bloco h2, .mascotes .foto');

  const onScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    animationElements.forEach(element => {
      const positionTop = element.getBoundingClientRect().top + scrollTop;

      if (positionTop < windowHeight + scrollTop) {
        element.classList.add('show-on-scroll');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
});



//ARRUMAR SEMANTICA: SHIFT + ALT + F