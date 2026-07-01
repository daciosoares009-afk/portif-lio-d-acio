// Ano dinâmico no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Fecha o menu mobile ao clicar em um link
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Formulário de contato (exemplo simples — depois conecte a um backend ou serviço como Formspree/EmailJS)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  // Por enquanto só mostra no console — troque por uma chamada de API ou serviço de e-mail
  console.log('Mensagem recebida:', { name, email, message });

  alert('Mensagem enviada! Em breve essa parte será conectada a um e-mail real.');
  contactForm.reset();
});