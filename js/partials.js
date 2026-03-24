/* ============================================================
   CAPITAL UPFITTERS — PHASE 2 — SHARED PARTIALS
   Injects nav + footer into every page
   ============================================================ */

(function() {
  'use strict';

  const NAV_HTML = `
  <div id="announce-bar">
    ⚡ Same-week appointments available — call <a href="tel:3016564100">(301) 656-4100</a> or <a href="quote.html">get a quote in 60 seconds</a>
    <button id="announce-dismiss" aria-label="Dismiss">✕</button>
  </div>
  <nav id="nav" role="navigation" aria-label="Main navigation">
    <div class="container nav-inner">
      <a href="index.html" class="nav-logo" aria-label="Capital Upfitters Home">
        <div class="nav-logo-mark">CU</div>
        <div>
          <span class="nav-logo-text">Capital Upfitters</span>
          <span class="nav-logo-sub">Rockville, MD · Since 1989</span>
        </div>
      </a>

      <div class="nav-links" role="menubar">
        <div class="nav-dropdown">
          <a href="services.html" role="menuitem" aria-haspopup="true">Services</a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="services/bedliner.html" role="menuitem">🛡 Patriot Liner Bedliner</a>
            <a href="services/ceramic-coating.html" role="menuitem">✨ Ceramic Coating</a>
            <a href="services/hitches.html" role="menuitem">🔗 Hitches &amp; Towing</a>
            <a href="services/tonneau-covers.html" role="menuitem">📦 Tonneau Covers</a>
            <a href="services/running-boards.html" role="menuitem">🚗 Running Boards</a>
            <a href="services/undercoating.html" role="menuitem">🔧 Undercoating</a>
          </div>
        </div>
        <a href="fleet.html">Fleet</a>
        <a href="dealer.html">Dealers</a>
        <a href="commercial-coatings.html">Commercial</a>
        <a href="gallery.html">Gallery</a>
        <div class="nav-dropdown">
          <a href="#" role="menuitem" aria-haspopup="true">Locations</a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="locations/rockville-md.html" role="menuitem">📍 Rockville, MD</a>
            <a href="locations/bethesda-md.html" role="menuitem">📍 Bethesda, MD</a>
            <a href="locations/silver-spring-md.html" role="menuitem">📍 Silver Spring, MD</a>
            <a href="locations/gaithersburg-md.html" role="menuitem">📍 Gaithersburg, MD</a>
          </div>
        </div>
        <a href="contact.html">Contact</a>
      </div>

      <div class="nav-cta">
        <a href="tel:3016564100" class="nav-phone" aria-label="Call us">
          📞 <span>(301) 656-4100</span>
        </a>
        <a href="quote.html" class="btn btn-primary btn-sm">Get Quote</a>
      </div>

      <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div id="mobile-menu" role="menu" aria-label="Mobile navigation">
      <span class="mobile-divider">Services</span>
      <a href="services/bedliner.html">Patriot Liner Bedliner</a>
      <a href="services/ceramic-coating.html">Ceramic Coating</a>
      <a href="services/hitches.html">Hitches &amp; Towing</a>
      <a href="services/tonneau-covers.html">Tonneau Covers</a>
      <a href="services/running-boards.html">Running Boards</a>
      <a href="services/undercoating.html">Undercoating</a>
      <span class="mobile-divider">Business</span>
      <a href="fleet.html">Fleet &amp; Commercial</a>
      <a href="dealer.html">Dealer Program</a>
      <a href="commercial-coatings.html">Capital Protective Coatings</a>
      <span class="mobile-divider">Explore</span>
      <a href="gallery.html">Portfolio Gallery</a>
      <a href="services.html">All Services</a>
      <a href="contact.html">Contact Us</a>
      <a href="quote.html" style="color:var(--amber);font-weight:700">→ Get a Free Quote</a>
    </div>
  </nav>`;

  const FOOTER_HTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-logo">
            <div class="nav-logo-mark">CU</div>
            <div>
              <span class="nav-logo-text">Capital Upfitters</span>
              <span class="nav-logo-sub">Rockville, MD · Since 1989</span>
            </div>
          </div>
          <p>Rockville's premier truck and fleet customization shop. Spray-on bedliners, ceramic coatings, hitches, tonneau covers, and full fleet upfitting. Serving the DC Metro area for 35+ years.</p>
          <div style="display:flex;gap:12px;margin-top:8px">
            <a href="tel:3016564100" style="color:rgba(255,255,255,0.55);font-size:0.85rem;transition:color 120px">(301) 656-4100</a>
            <span style="color:rgba(255,255,255,0.2)">·</span>
            <a href="mailto:info@capitalupfitters.com" style="color:rgba(255,255,255,0.55);font-size:0.85rem">info@capitalupfitters.com</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <a href="services/bedliner.html">Patriot Liner Bedliner</a>
          <a href="services/ceramic-coating.html">Ceramic Coating</a>
          <a href="services/hitches.html">Hitches &amp; Towing</a>
          <a href="services/tonneau-covers.html">Tonneau Covers</a>
          <a href="services/running-boards.html">Running Boards</a>
          <a href="services/undercoating.html">Undercoating</a>
        </div>
        <div class="footer-col">
          <h5>Business</h5>
          <a href="fleet.html">Fleet Program</a>
          <a href="dealer.html">Dealer Program</a>
          <a href="commercial-coatings.html">Commercial Coatings</a>
          <a href="https://upfit-portal-58190af9.base44.app" target="_blank" rel="noopener">Upfit Portal ↗</a>
          <a href="gallery.html">Portfolio</a>
        </div>
        <div class="footer-col">
          <h5>Locations</h5>
          <a href="locations/rockville-md.html">Rockville, MD</a>
          <a href="locations/bethesda-md.html">Bethesda, MD</a>
          <a href="locations/silver-spring-md.html">Silver Spring, MD</a>
          <a href="locations/gaithersburg-md.html">Gaithersburg, MD</a>
          <a href="contact.html">Contact &amp; Hours</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Capital Upfitters LLC · 1401 Rockville Pike, Rockville, MD 20852</p>
        <div class="footer-legal">
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms</a>
          <a href="sitemap.xml">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating CTAs -->
  <div id="float-cta" aria-label="Quick contact">
    <a href="tel:3016564100" class="float-btn float-call" aria-label="Call us now">📞 Call Now</a>
    <a href="quote.html" class="float-btn float-quote" aria-label="Get a free quote">Get Free Quote</a>
  </div>

  <!-- Lightbox -->
  <div id="lightbox" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:999;align-items:center;justify-content:center;flex-direction:column;gap:16px" role="dialog" aria-label="Image lightbox">
    <button id="lb-close" style="position:absolute;top:20px;right:24px;color:white;font-size:2rem;background:none;border:none;cursor:pointer;opacity:0.7" aria-label="Close lightbox">✕</button>
    <img id="lb-img" src="" alt="" style="max-width:90vw;max-height:80vh;border-radius:12px;object-fit:contain">
    <p id="lb-caption" style="color:rgba(255,255,255,0.6);font-size:0.85rem"></p>
  </div>`;

  // Inject on DOM ready
  function inject() {
    const navSlot = document.getElementById('nav-slot');
    const footerSlot = document.getElementById('footer-slot');
    if (navSlot) navSlot.outerHTML = NAV_HTML;
    if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
