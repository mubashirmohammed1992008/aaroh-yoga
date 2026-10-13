const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}));
document.querySelectorAll('.choose-program').forEach((button) => button.addEventListener('click', () => {
  const select = document.querySelector('#program');
  const desired = button.dataset.program;
  if (select && [...select.options].some((option) => option.value === desired || option.textContent === desired)) select.value = desired;
  else if (select) select.selectedIndex = 0;
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  window.setTimeout(() => document.querySelector('#name')?.focus({ preventScroll: true }), 550);
}));
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); currentObserver.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.program-card, .price-card, .faq-list details').forEach((item) => { item.classList.add('fade-in'); observer.observe(item); });
}


