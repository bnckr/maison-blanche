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

const people = {
  junior: {
    name: "Wilson Júnior",
    text: "Profissional com trajetória marcada por técnica, cuidado e atenção aos detalhes. Sua experiência valoriza cortes, estilos e transformações pensadas para realçar a identidade de cada cliente.",
    cardPosition: "card-right"
  },
  blanche: {
    name: "Blanche Leite",
    text: "Com olhar sensível e atendimento acolhedor, Blanche une sofisticação, cuidado e experiência para oferecer uma vivência única dentro do Maison Blanche.",
    cardPosition: "card-left"
  }
};

const buttons = document.querySelectorAll(".about-person");
const card = document.getElementById("aboutCard");
const aboutName = document.getElementById("aboutName");
const aboutText = document.getElementById("aboutText");

function activatePerson(personKey) {
  const person = people[personKey];

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.person === personKey);
  });

  aboutName.textContent = person.name;
  aboutText.textContent = person.text;

  card.classList.remove("card-left", "card-right");
  card.classList.add(person.cardPosition, "visible");
}

function resetAbout() {
  buttons.forEach((button) => button.classList.remove("active"));
  card.classList.remove("visible", "card-left", "card-right");
}

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    activatePerson(button.dataset.person);
  });

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    activatePerson(button.dataset.person);
  });
});

card.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  resetAbout();
});
