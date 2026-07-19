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


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Me chamo ${nome}%0A
📞 Telefone: ${telefone}%0A
💬 Mensagem: ${mensagem}%0A
Gostaria de agendar um horário.`;

  const numero = "5515996047505";

  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, "_blank");
});
