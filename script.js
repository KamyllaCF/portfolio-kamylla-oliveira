// Seleção dos elementos principais utilizados na interação do site
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Alternância entre tema claro e escuro usando JavaScript
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀️";
  }
});

// Menu responsivo para dispositivos móveis
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fecha o menu ao clicar em algum link no mobile
const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Função simples para validar o formato do e-mail
function validarEmail(email) {
  const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padraoEmail.test(email);
}

// Validação obrigatória do formulário de contato e simulação de envio
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  formMessage.classList.remove("success", "error");

  if (nome === "" || email === "" || mensagem === "") {
    formMessage.textContent = "Por favor, preencha todos os campos.";
    formMessage.classList.add("error");
    return;
  }

  if (!validarEmail(email)) {
    formMessage.textContent = "Por favor, informe um e-mail válido.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.textContent = "Mensagem enviada com sucesso!";
  formMessage.classList.add("success");

  // Limpa os campos após a simulação do envio
  contactForm.reset();
});
