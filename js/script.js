// ── Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Generate floating particles
const container = document.getElementById('particles');
const count = 28;
for (let i = 0; i < count; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size     = Math.random() * 3 + 1;
  const left     = Math.random() * 100;
  const duration = Math.random() * 14 + 10;
  const delay    = Math.random() * 12;
  const drift    = (Math.random() - 0.5) * 120;
  p.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${left}%;
    animation-duration:${duration}s;
    animation-delay:-${delay}s;
    --drift:${drift}px;
    opacity:0;
  `;
  container.appendChild(p);
}

// ── Trailer play button
const wrapper = document.getElementById('trailerWrapper');
const thumb   = document.getElementById('trailerThumb');
const iframe  = document.getElementById('trailerIframe');
thumb.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/embed/xYcgQMxQwmk?autoplay=1&mute=1';
  wrapper.classList.add('playing');
});

// ── Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.cast-card, .review-card, .filmmaker-quote').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});
