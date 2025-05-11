
let carouselIndex = 0;
function moveCarousel(direction) {
  const track = document.getElementById('carouselTrack');
  const itemWidth = track.querySelector('.carousel-item').offsetWidth + 20;
  const visibleItems = Math.floor(track.parentElement.offsetWidth / itemWidth);
  const maxIndex = track.children.length - visibleItems;
  carouselIndex = Math.max(0, Math.min(carouselIndex + direction, maxIndex));
  track.style.transform = `translateX(-${carouselIndex * itemWidth}px)`;
}

function calcularDias(fechaInicio) {
  const inicio = new Date(fechaInicio);
  const ahora = new Date();
  const ms = ahora - inicio;
  const dias = Math.floor(ms / (1000 * 60 * 60 * 24));
  const semanas = Math.floor(dias / 7);
  const meses = Math.floor(dias / 30.44);
  const años = Math.floor(dias / 365.25);

  document.getElementById("dias").innerHTML =
    "Días: " + dias.toLocaleString() + " días";
  document.getElementById("semanas").innerHTML =
    "Semanas: " + semanas.toLocaleString() + " semanas";
  document.getElementById("meses").innerHTML =
    "Meses: " + meses.toLocaleString() + " meses";
  document.getElementById("años").innerHTML =
    "Años: " + años.toLocaleString() + " años";
}

calcularDias("2007-01-01");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll("section").forEach(section => observer.observe(section));
