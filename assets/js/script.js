// ==== Menú hamburguesa ====
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");
if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// ==== Animaciones en scroll ====
const reveals = document.querySelectorAll("section, .card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
