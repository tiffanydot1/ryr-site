// ─── MOBILE MENU ───
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.setAttribute('aria-hidden', String(isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}

// ─── VAPI WIDGET ───
const vapiPill = document.getElementById('vapi-pill');
const vapiCard = document.getElementById('vapi-card');
const vapiClose = document.getElementById('vapi-close');
const vapiTrigger = document.getElementById('vapi-trigger');
const vapiCta = document.getElementById('vapi-cta');

function openVapi() {
  if (vapiCard) {
    vapiCard.hidden = false;
    vapiCard.querySelector('button')?.focus();
  }
}

function closeVapi() {
  if (vapiCard) {
    vapiCard.hidden = true;
    vapiPill?.focus();
  }
}

if (vapiPill) vapiPill.addEventListener('click', openVapi);
if (vapiTrigger) vapiTrigger.addEventListener('click', openVapi);
if (vapiCta) vapiCta.addEventListener('click', openVapi);
if (vapiClose) vapiClose.addEventListener('click', closeVapi);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && vapiCard && !vapiCard.hidden) closeVapi();
});

document.getElementById('vapi-start')?.addEventListener('click', () => {
  // VAPI INTEGRATION PLACEHOLDER
  // Replace this with your actual Vapi initialization:
  // import Vapi from "https://cdn.jsdelivr.net/npm/@vapi-ai/web/dist/vapi.esm.js";
  // const vapi = new Vapi({ apiKey: "YOUR_VAPI_API_KEY", assistantId: "YOUR_ASSISTANT_ID" });
  // vapi.start();
  console.log('Vapi agent start — replace with real integration');
  const btn = document.getElementById('vapi-start');
  if (btn) {
    btn.textContent = 'Connecting...';
    btn.disabled = true;
  }
});

// ─── FLASH BAR TIMER ───
function getDeadline() {
  // Friday June 13 2026 at 12:00 PM Eastern (16:00 UTC)
  return new Date('2026-06-13T16:00:00Z');
}

function updateTimer() {
  const now = new Date();
  const diff = Math.max(0, getDeadline() - now);
  if (diff === 0) {
    const bar = document.getElementById('flash-bar');
    if (bar) bar.style.display = 'none';
    return;
  }
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const pad = n => String(n).padStart(2, '0');
  const timerEl = document.getElementById('flash-timer');
  if (timerEl) timerEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
}

const timerEl = document.getElementById('flash-timer');
if (timerEl) {
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ─── SCROLL NAV ACTIVE STATE ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => observer.observe(s));
}
