(function () {
  'use strict';

  const DEMO_URL = 'https://www.connectwise.com/platform/demo';
  const CTRL_SEL = '.hero.hero--tall';
  const STORAGE_KEY = 'spz-1002-email';

  const SVG_CHECK_ON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0ZM6.22222 12.4444L1.77778 8.17094L3.02222 6.97436L6.22222 10.0513L12.9778 3.55556L14.2222 4.75214L6.22222 12.4444Z" fill="#C5E655"/></svg>`;

  const HTML = `
    <section class="spz-hero-1002">
      <div class="spz-content-1002">
        <p class="spz-eyebrow-1002">IT &amp; SECURITY MANAGEMENT SOFTWARE</p>
        <h1 class="spz-heading-1002">
          <span class="spz-h1-white-1002">Streamline and scale ops.</span>
          <span class="spz-h1-lime-1002">Boost efficiency. Drive growth.</span>
        </h1>
        <p class="spz-subhead-1002">How can we help?</p>
        <div class="spz-tiles-1002" role="group" aria-label="Select areas of interest">
          <div class="spz-tile-1002 spz1002_v" data-value="client-management" role="checkbox" aria-checked="false" tabindex="0">
            <span class="spz-chk-wrap-1002"><span class="spz-chk-off-1002"></span><span class="spz-chk-on-1002">${SVG_CHECK_ON}</span></span>
            <span class="spz-icon-1002"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1772621495/connectwise/1002/client_management.svg" alt="" aria-hidden="true" loading="lazy"></span>
            <span class="spz-label-1002">Client management</span>
          </div>
          <div class="spz-tile-1002 spz1002_v" data-value="ticketing" role="checkbox" aria-checked="false" tabindex="0">
            <span class="spz-chk-wrap-1002"><span class="spz-chk-off-1002"></span><span class="spz-chk-on-1002">${SVG_CHECK_ON}</span></span>
            <span class="spz-icon-1002"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1772621495/connectwise/1002/ticketing.svg" alt="" aria-hidden="true" loading="lazy"></span>
            <span class="spz-label-1002">Ticketing</span>
          </div>
          <div class="spz-tile-1002 spz1002_v" data-value="remote-access" role="checkbox" aria-checked="false" tabindex="0">
            <span class="spz-chk-wrap-1002"><span class="spz-chk-off-1002"></span><span class="spz-chk-on-1002">${SVG_CHECK_ON}</span></span>
            <span class="spz-icon-1002"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1772621495/connectwise/1002/remote_access.svg" alt="" aria-hidden="true" loading="lazy"></span>
            <span class="spz-label-1002">Remote access</span>
          </div>
          <div class="spz-tile-1002 spz1002_v" data-value="backup-recovery" role="checkbox" aria-checked="false" tabindex="0">
            <span class="spz-chk-wrap-1002"><span class="spz-chk-off-1002"></span><span class="spz-chk-on-1002">${SVG_CHECK_ON}</span></span>
            <span class="spz-icon-1002"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1772621495/connectwise/1002/backup__recovery.svg" alt="" aria-hidden="true" loading="lazy"></span>
            <span class="spz-label-1002">Backup &amp; Recovery</span>
          </div>
          <div class="spz-tile-1002 spz1002_v" data-value="cybersecurity" role="checkbox" aria-checked="false" tabindex="0">
            <span class="spz-chk-wrap-1002"><span class="spz-chk-off-1002"></span><span class="spz-chk-on-1002">${SVG_CHECK_ON}</span></span>
            <span class="spz-icon-1002"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1772621495/connectwise/1002/cybersecurity.svg" alt="" aria-hidden="true" loading="lazy"></span>
            <span class="spz-label-1002">Cybersecurity</span>
          </div>
          <div class="spz-tile-1002 spz1002_v" data-value="patching" role="checkbox" aria-checked="false" tabindex="0">
            <span class="spz-chk-wrap-1002"><span class="spz-chk-off-1002"></span><span class="spz-chk-on-1002">${SVG_CHECK_ON}</span></span>
            <span class="spz-icon-1002"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1772621495/connectwise/1002/patching.svg" alt="" aria-hidden="true" loading="lazy"></span>
            <span class="spz-label-1002">Patching</span>
          </div>
          <div class="spz-tile-1002 spz1002_v" data-value="reporting" role="checkbox" aria-checked="false" tabindex="0">
            <span class="spz-chk-wrap-1002"><span class="spz-chk-off-1002"></span><span class="spz-chk-on-1002">${SVG_CHECK_ON}</span></span>
            <span class="spz-icon-1002"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1772621495/connectwise/1002/reporting.svg" alt="" aria-hidden="true" loading="lazy"></span>
            <span class="spz-label-1002">Reporting</span>
          </div>
          <div class="spz-tile-1002 spz1002_v" data-value="proposals-billing" role="checkbox" aria-checked="false" tabindex="0">
            <span class="spz-chk-wrap-1002"><span class="spz-chk-off-1002"></span><span class="spz-chk-on-1002">${SVG_CHECK_ON}</span></span>
            <span class="spz-icon-1002"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1772621495/connectwise/1002/proposals__billing.svg" alt="" aria-hidden="true" loading="lazy"></span>
            <span class="spz-label-1002">Proposals &amp; Billing</span>
          </div>
        </div>
        <div class="spz-cta-area-1002">
          <input type="email" class="spz-email-1002" placeholder="Email" autocomplete="email" aria-label="Work email">
          <a href="${DEMO_URL}" class="spz-cta-btn-1002 spz1002_v">Watch a demo</a>
        </div>
      </div>
      <div class="spz-dash-1002">
        <picture>
          <source media="(max-width: 600px)"  srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/v1772621214/connectwise/1002/ui_mobile.webp">
          <source media="(max-width: 1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/v1772621215/connectwise/1002/ui_tablet.webp">
          <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/v1772621215/connectwise/1002/ui_desktop.webp" alt="hero tiles image" title="hero tiles image" class="spz-dash-img-1002" loading="lazy">
        </picture>
      </div>
    </section>`;

  /* ── Storage helpers ── */
  function getEmail() {
    try { return sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY) || ''; } catch { return ''; }
  }

  function saveEmail(email) {
    try {
      const v = email.trim();
      sessionStorage.setItem(STORAGE_KEY, v);
      localStorage.setItem(STORAGE_KEY, v);
    } catch { }
  }

  /* ── Tile interactions ── */
  function bindTiles() {
    document.querySelectorAll('.spz-tile-1002').forEach(tile => {
      tile.addEventListener('click', () => toggleTile(tile));
      tile.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTile(tile); }
      });
    });
  }

  function toggleTile(tile) {
    const active = tile.classList.toggle('active');
    tile.setAttribute('aria-checked', active ? 'true' : 'false');
  }

  /* ── Email & CTA ── */
  function bindCTA() {
    const emailInput = document.querySelector('.spz-email-1002');
    const ctaBtn = document.querySelector('.spz-cta-btn-1002');

    const urlEmail = new URLSearchParams(location.search).get('email');
    const prefill = urlEmail || getEmail();

    if (prefill && emailInput) {
      emailInput.value = prefill;
      if (urlEmail) saveEmail(urlEmail);
    }

    if (emailInput) {
      emailInput.addEventListener('input', () => {
        if (emailInput.value.trim()) saveEmail(emailInput.value.trim());
      });
    }

    if (ctaBtn) {
      ctaBtn.addEventListener('click', e => {
        e.preventDefault();
        const email = emailInput ? emailInput.value.trim() : '';
        if (email) saveEmail(email);
        const url = new URL(DEMO_URL);
        if (email) url.searchParams.set('email', email);
        window.location.href = url.toString();
      });
    }
  }

  /* ── Populate email on demo page ── */
  function populateDemoEmail() {
    const email = new URLSearchParams(location.search).get('email') || getEmail();
    if (!email) return;
    saveEmail(email);

    const selectors = ['#Email', 'input[type="email"]', 'input[name*="email" i]', 'input[id*="email" i]'];

    function tryPopulate() {
      selectors.forEach(sel => {
        const field = document.querySelector(sel);
        if (field && !field.value) {
          field.value = email;
          field.dispatchEvent(new Event('input', { bubbles: true }));
          field.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    }

    tryPopulate();
    setTimeout(tryPopulate, 500);
    setTimeout(tryPopulate, 1500);
  }

  /* ── Main init ── */
  function init() {
    if (/\/platform\/demo/.test(location.pathname)) {
      populateDemoEmail();
      return;
    }

    const ctrl = document.querySelector(CTRL_SEL);
    if (!ctrl || document.querySelector('.spz-hero-1002')) return;

    document.body.classList.add('spz_1002_v');
    ctrl.setAttribute('data-spz-ctrl', '');
    ctrl.insertAdjacentHTML('beforebegin', HTML);

    bindTiles();
    bindCTA();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
    setTimeout(init, 1000);
    setTimeout(init, 2000);
  }
})();
