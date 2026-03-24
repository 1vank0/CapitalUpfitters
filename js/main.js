/* ============================================================
   CAPITAL UPFITTERS — PHASE 2 — GLOBAL JS
   ============================================================ */

(function() {
  'use strict';

  /* ---- MOBILE NAV ---- */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  /* ---- ANNOUNCE BAR DISMISS ---- */
  const announceBar = document.getElementById('announce-bar');
  const dismissBtn  = document.getElementById('announce-dismiss');
  if (dismissBtn && announceBar) {
    dismissBtn.addEventListener('click', () => {
      announceBar.style.display = 'none';
    });
  }

  /* ---- ACCORDION ---- */
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      // Close all in same group
      const group = item.closest('.accordion');
      if (group) group.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- TABS ---- */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('[data-tabs]') || btn.closest('.tab-section');
      const target = btn.dataset.tab;
      if (!group || !target) return;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = group.querySelector(`.tab-panel[data-tab="${target}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  /* ---- SCROLL FADE IN ---- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  }

  /* ---- GALLERY FILTER ---- */
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (cat === 'all' || item.dataset.category === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ---- LIGHTBOX ---- */
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('#lb-img');
    const lbCaption = lightbox.querySelector('#lb-caption');
    const lbClose = lightbox.querySelector('#lb-close');

    document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
      item.addEventListener('click', () => {
        lbImg.src = item.dataset.src || '';
        if (lbCaption) lbCaption.textContent = item.dataset.label || '';
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
    function closeLb() {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }
    if (lbClose) lbClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
  }

  /* ---- QUOTE FORM INTAKE ---- */
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(quoteForm));
      const ref = 'CU-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-' + Math.floor(1000+Math.random()*9000);
      data.ref = ref;
      const endpoint = quoteForm.dataset.endpoint || null;
      if (endpoint) {
        fetch(endpoint, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) })
          .then(() => showFormSuccess(quoteForm, ref))
          .catch(() => fallbackEmail(data));
      } else {
        fallbackEmail(data);
      }
    });
  }

  function showFormSuccess(form, ref) {
    form.innerHTML = `
      <div style="text-align:center;padding:48px 24px">
        <div style="font-size:2rem;margin-bottom:16px">✓</div>
        <h3 style="margin-bottom:8px">Quote Request Received</h3>
        <p style="color:var(--text-secondary);margin-bottom:8px">We'll respond within 4 hours during business hours.</p>
        <p style="font-size:0.78rem;color:var(--text-tertiary)">Reference: <strong>${ref}</strong></p>
      </div>`;
  }

  function fallbackEmail(data) {
    const body = Object.entries(data).map(([k,v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:info@capitalupfitters.com?subject=Quote Request ${data.ref}&body=${encodeURIComponent(body)}`;
  }

  /* ---- ACTIVE NAV LINK ---- */
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('#nav .nav-links a, #mobile-menu a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (path === href || (href !== '/' && path.startsWith(href))) {
      a.classList.add('active');
    }
  });

  /* ---- SMOOTH SCROLL for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
