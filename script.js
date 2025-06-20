document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const intro = document.getElementById("intro-animation");
    const main = document.getElementById("main-content");

    intro.classList.add("fade-out");

    // Espera o fade-out terminar (1s)
    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
    }, 1000);
  }, 2000); // Tempo que a intro aparece antes de sumir
});

const typedElement = document.querySelector('#typed');

if (typedElement) {
  const typed = new Typed('#typed', {
    strings: ['Eficaz.', 'Seguro.', 'Veloz.'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
  });
}

  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
var myObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aparecer");
    } else {
      entry.target.classList.remove("aparecer");
    }
  });
});

var elementos = document.querySelectorAll(".sumir, .sumir-1");

elementos.forEach(element => {
  myObserver.observe(element);
});



let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}
const mainImage = document.getElementById('main-image');
    const thumbs = document.querySelectorAll('.thumbs img');
    const leftBtn = document.querySelector('.arrow.left');
    const rightBtn = document.querySelector('.arrow.right');
    const modal = document.getElementById('image-modal');
    const zoomedImg = document.getElementById('zoomed-img');

    let currentIndex = 0;
    const images = Array.from(thumbs).map(img => img.src);

    function updateMainImage(index) {
      mainImage.src = images[index];
      thumbs.forEach(t => t.classList.remove('active'));
      thumbs[index].classList.add('active');
      currentIndex = index;
    }

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => updateMainImage(i));
    });

    leftBtn.addEventListener('click', () => {
      updateMainImage((currentIndex - 1 + images.length) % images.length);
    });

    rightBtn.addEventListener('click', () => {
      updateMainImage((currentIndex + 1) % images.length);
    });

    mainImage.addEventListener('click', () => {
      zoomedImg.src = images[currentIndex];
      modal.style.display = 'flex';
    });

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });