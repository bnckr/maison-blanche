const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    menuToggle.textContent = navMenu.classList.contains("open") ? "×" : "☰";
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.textContent = "☰";
    });
  });
}

const palavrasDestaque = [
  "Excelente",
  "excelente",
  "Maravilhosos",
  "profissionais",
  "recomendo",
  "Super indico",
  "atendimento",
  "caprichosos",
  "competentes",
  "acolhedor",
];

function destacarTexto(texto) {
  let textoFinal = texto;

  palavrasDestaque.forEach((palavra) => {
    const regex = new RegExp(`(${palavra})`, "gi");
    textoFinal = textoFinal.replace(regex, "<mark>$1</mark>");
  });

  return textoFinal;
}

function gerarEstrelas(nota) {
  return "★".repeat(nota);
}

fetch("../js/depoimentos.json")
  .then((response) => response.json())
  .then((depoimentos) => {
    const carousel = document.getElementById("testimonialsCarousel");

    if (!carousel) return;

    const listaDuplicada = [...depoimentos, ...depoimentos];

    listaDuplicada.forEach((item) => {
      const card = document.createElement("article");
      card.classList.add("testimonial-card");

      card.innerHTML = `
        <h3 class="testimonial-name">${item.nome}</h3>
        <p class="testimonial-text">“${destacarTexto(item.texto)}”</p>
        <div class="testimonial-stars">${gerarEstrelas(item.nota)}</div>
      `;

      carousel.appendChild(card);
    });
  });
