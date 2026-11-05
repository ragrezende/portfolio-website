// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Alternância de tema, lembrada no navegador
const toggle = document.getElementById('themeToggle');
try {
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
} catch {
  // armazenamento indisponível (por exemplo, navegação privada): fica no tema padrão
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  try {
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  } catch {
    // sem armazenamento: a escolha vale só nesta visita
  }
});

// Rolagem suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const alvo = document.querySelector(a.getAttribute('href'));
    if (!alvo) return;
    e.preventDefault();
    alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
