const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const flechaIzquierda = document.querySelector(".controls button:first-child");
const flechaDerecha = document.querySelector(".controls button:last-child");
const puntosWrapper = document.querySelector(".puntos");
const puntos = document.querySelectorAll(".puntos span");

let slideIndex = 0;

puntos.forEach((punto, indice) => {
  punto.addEventListener("click", () => {
    slideIndex = indice;
    document.querySelector(".puntos .active").classList.remove("active");
    slider.style.transform = `translateX(${slideIndex * -20}%)`;
    punto.classList.add("active");
  });
});

flechaIzquierda.addEventListener("click", () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
  document.querySelector(".puntos .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
  puntosWrapper.children[slideIndex].classList.add("active");
});

flechaDerecha.addEventListener("click", () => {
  slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : slides.length - 1;
  document.querySelector(".puntos .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
  puntosWrapper.children[slideIndex].classList.add("active");
});
