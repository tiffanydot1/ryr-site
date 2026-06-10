document.addEventListener("DOMContentLoaded", function() {

  var flashHTML = '<div class="flash-bar" id="flash-bar" role="banner"><div class="flash-bar-inner"><span class="flash-bar-text"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Flash Sale \u2014 Done-For-You Services Starting at $97 \u00a0\u00b7\u00a0 Ends Friday June 13 at 12PM ET \u00a0\u00b7\u00a0 Limited Slots</span><a href="/promotions.html" class="flash-bar-cta">SEE OFFERS</a><button class="flash-bar-close" aria-label="Dismiss banner" onclick="document.getElementById(\'flash-bar\').style.display=\'none\'"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div></div>';

  var navHTML = '<nav class="navbar" role="navigation" aria-label="Main navigation"><div class="nav-inner"><a href="/" class="nav-logo" aria-label="Reclaim Your Revenue home"><span class="nav-logo-text">RECLAIM YOUR REVENUE</span></a><ul class="nav-links" role="list"><li><a href="/#services">Services</a></li><li><a href="/comeback-campaign.html">Comeback Campaign</a></li><li><a href="/clarity-session.html">Clarity Session</a></li><li><a href="/portfolio.html">Portfolio</a></li></ul><div class="nav-right"><button class="voice-agent-btn" aria-label="Talk to our team via voice agent" id="vapi-trigger"><img src="/public/images/voice-agent-icon.png" alt="Voice agent" width="22" height="22" style="object-fit:contain;"><span class="voice-pulse" aria-hidden="true"></span></button><a href="https://square.link/u/y79NwlKX" class="btn btn-nav">Book a Call</a><button class="hamburger" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button></div></div><div class="mobile-menu" id="mobile-menu" aria-hidden="true"><ul role="list"><li><a href="/#services">Services</a></li><li><a href="/comeback-campaign.html">Comeback Campaign</a></li><li><a href="/clarity-session.html">Clarity Session</a></li><li><a href="/portfolio.html">Portfolio</a></li></ul><a href="https://square.link/u/y79NwlKX" class="btn btn-accent">Book a Call</a></div></nav>';

  var footerHTML = '<footer class="footer" role="contentinfo"><div class="footer-inner container"><div class="footer-brand"><img src="/public/images/submark-dark.png" alt="Reclaim Your Revenue" class="footer-logo" width="52" height="52" loading="lazy"><p class="footer-tagline">Revenue optimization and monetization agency.</p><p class="footer-desc">We help businesses and entrepreneurs identify, package, and activate the revenue they already own.</p></div><div class="footer-col"><h4>Navigate</h4><ul role="list"><li><a href="/#services">Services</a></li><li><a href="/comeback-campaign.html">Comeback Campaign</a></li><li><a href="/clarity-session.html">Clarity Session</a></li><li><a href="/portfolio.html">Portfolio</a></li><li><a href="/promotions.html">Current Promotions</a></li></ul></div><div class="footer-col"><h4>Services</h4><ul role="list"><li><a href="/#services">The Growth Foundation</a></li><li><a href="/comeback-campaign.html">Revenue Recovery System</a></li><li><a href="/digital-asset-suite.html">Digital Asset Suite</a></li><li><a href="/clarity-session.html">Revenue Clarity Session</a></li></ul></div><div class="footer-col"><h4>Legal</h4><ul role="list"><li><a href="/pages/privacy.html">Privacy Policy</a></li><li><a href="/pages/terms.html">Terms of Service</a></li><li><a href="/pages/refund.html">Refund Policy</a></li><li><a href="/pages/accessibility.html">Accessibility</a></li></ul></div></div><div class="footer-bottom"><div class="container footer-bottom-inner"><p>\u00a9 2026 Reclaim Your Revenue. All Rights Reserved. \u00a0|\u00a0 Site designed by Reclaim Your Revenue.</p><div class="footer-legal"><a href="/pages/privacy.html">Privacy</a><a href="/pages/terms.html">Terms</a><a href="/pages/refund.html">Refund</a><a href="/pages/accessibility.html">Accessibility</a></div></div></div></footer>';

  var vapiHTML = '<div class="vapi-widget" id="vapi-widget"><div class="vapi-card" id="vapi-card" hidden><div class="vapi-card-header"><div class="vapi-avatar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg></div><div><p class="vapi-name">Revenue Team</p><p class="vapi-status">Available Now</p></div><button class="vapi-close" id="vapi-close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div><p class="vapi-copy">Talk to our team right now. We will answer your questions and help you figure out where to start.</p><button class="btn btn-accent vapi-start" id="vapi-start">Start Conversation</button><a href="sms:+13148649196" class="vapi-text-link">Prefer to text?</a></div><button class="vapi-pill" id="vapi-pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg><span class="vapi-pill-pulse"></span></button></div>';

  // Inject flash + nav at the very TOP of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('afterbegin', flashHTML);

  // Inject footer + vapi at the BOTTOM of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  document.body.insertAdjacentHTML('beforeend', vapiHTML);

  // Flash bar deadline check
  if (new Date() > new Date('2026-06-13T16:00:00Z')) {
    var bar = document.getElementById('flash-bar');
    if (bar) bar.style.display = 'none';
  }

  // Mobile menu
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      var isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Vapi widget
  var vapiPill = document.getElementById('vapi-pill');
  var vapiCard = document.getElementById('vapi-card');
  var vapiClose = document.getElementById('vapi-close');
  var vapiTrigger = document.getElementById('vapi-trigger');

  function openVapi() { if (vapiCard) vapiCard.hidden = false; }
  function closeVapi() { if (vapiCard) vapiCard.hidden = true; }

  if (vapiPill) vapiPill.addEventListener('click', openVapi);
  if (vapiTrigger) vapiTrigger.addEventListener('click', openVapi);
  if (vapiClose) vapiClose.addEventListener('click', closeVapi);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && vapiCard && !vapiCard.hidden) closeVapi();
  });

  document.getElementById('vapi-start') && document.getElementById('vapi-start').addEventListener('click', function() {
    // REPLACE WITH REAL VAPI INTEGRATION
    // var vapi = new Vapi({ apiKey: 'YOUR_KEY', assistantId: 'YOUR_ID' });
    // vapi.start();
    var btn = document.getElementById('vapi-start');
    btn.textContent = 'Connecting...';
    btn.disabled = true;
  });

});
