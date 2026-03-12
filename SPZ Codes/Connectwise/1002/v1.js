console.log('+++ 1');

if (document.body) {
  document.body.classList.add('spz_1002_init');
}

function waitForForm(selector, callback, maxWait = 5000) {
  const interval = 100;
  let elapsed = 0;
  const timer = setInterval(() => {
    if (document.querySelector(selector)) {
      clearInterval(timer);
      callback();
    } else if (elapsed >= maxWait) {
      clearInterval(timer);
      console.warn('Form not found after waiting:', selector);
    }
    elapsed += interval;
  }, interval);
}

function spz1002() {
  if (!document.querySelector('body').classList.contains('spz_1002_v')) {
    document.querySelector('body').classList.add('spz_1002_v');

    (function () {
      'use strict';

      const DEMO_URL = 'https://www.connectwise.com/platform/demo';
      const CTRL_SEL = '#video';
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
        </section>
        <div class="marquee-wrapper background--black">
<div class="">
    <div class="module__container module__container--full-width">
    </div>
</div>

<div class="marquee-scroller">
  <div class="padding-top-div">
    <div class="marquee--inner">
      <span>
        <!---START of first block of logos--->
        <div class="logo-wrapper">
          <img class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/corkatdatasolutions-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/globalassets/media/logos/client-logos/a-h/duke-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/san-it-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/swarovski-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/allcovered-logo-white-600x600.png" data-ot-ignore="">
        </div>
    <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/bic-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/decisiondigital-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/honeywell-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/mangano-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/integris-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/panasonic-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/sourcepass-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <!---END of first block of logos--->

        <!---START of second block of logos. Copy all code between comments in first block and replace all code in this second blocl--->
        <div class="logo-wrapper">
          <img class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/corkatdatasolutions-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/globalassets/media/logos/client-logos/a-h/duke-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/san-it-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/swarovski-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/allcovered-logo-white-600x600.png" data-ot-ignore="">
        </div>
    <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/bic-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/decisiondigital-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/honeywell-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/mangano-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/integris-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/panasonic-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/sourcepass-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <!---END of second block of logos--->

        

        <!---START of third block of logos. Copy all code between comments in first block and replace all code in this third blocl--->
        <div class="logo-wrapper">
          <img class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/corkatdatasolutions-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/globalassets/media/logos/client-logos/a-h/duke-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/san-it-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/swarovski-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/allcovered-logo-white-600x600.png" data-ot-ignore="">
        </div>
    <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/bic-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/decisiondigital-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/honeywell-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/mangano-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/integris-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/panasonic-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/sourcepass-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <!---END of third block of logos--->

<!---START of fourthblock of logos. Copy all code between comments in first block and replace all code in this third blocl--->
        <div class="logo-wrapper">
          <img class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/corkatdatasolutions-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/globalassets/media/logos/client-logos/a-h/duke-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/san-it-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/swarovski-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/allcovered-logo-white-600x600.png" data-ot-ignore="">
        </div>
    <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/bic-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/decisiondigital-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/honeywell-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/mangano-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/integris-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/panasonic-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <div class="logo-wrapper">
          <img loading="lazy" class="optanon-category-C0002-C0004 img-size-marquee" src="https://www.connectwise.com/contentassets/3e3f823bc8bb4a0aa7df8a223211a557/sourcepass-logo-white-600x600.png" data-ot-ignore="">
        </div>
        <!---END of fourth block of logos--->
        </span>
      </div>
    </div>
  </div>
</div>
        
        
        
        `;

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


    // DEVELOPER - STEP 3 of 3 - Set form selector
    // var template_formUniqueSelector = "#mktoForm_1227";

    // // Initialize
    // // if (!checkFormSubmission()) {
    // //    addSplitScreen(template_formUniqueSelector, template_content);
    // // }
    // // Replace your current initialization block with:
    // waitForForm(template_formUniqueSelector, () => {
    //   if (!checkFormSubmission()) {
    //     addSplitScreen(template_formUniqueSelector, template_content);
    //   }
    // });

  }
}

// Check submission
// function checkFormSubmission() {
//   if (sessionStorage.getItem('spz_split_submitted') === 'true') {
//     document.body.className += ' spz-form-submitted';
//     return true;
//   }
//   return false;
// }

// (function () {

//   if (!document.body) return; // 🚨 Prevent crash

//   var nodes = document.body.childNodes;

//   for (var i = nodes.length - 1; i >= 0; i--) {
//     var node = nodes[i];

//     if (node.nodeType === 3) {
//       var value = node.nodeValue;

//       if (/^[\s;]+$/.test(value)) {
//         document.body.removeChild(node);
//       }
//     }
//   }

// })();

// Body interval
var bodyInterval1002 = setInterval(function () {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval1002);
    spz1002();
  }
}, 100);

// If you face any issues, please switch to the named-function version of this code and use that instead.
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = true; // true / false / 'both'
  const expName = '1002'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `spz_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
  const clientDomain = '.connectwise.com'; //domain should be .connectwise.com


  /***********************************
  ************************************
  DO NOT TOUCH
  BEYOND THIS LINE
  ******************************
  ******************************/
  const formHiddenValue = variantName;
  if (squeezePage === true) {
    window.squeezePageValue = formHiddenValue;
  } else if (squeezePage === false) {
    hiddenValue(expName, variantName);
  } else if (squeezePage === 'both') {
    hiddenValue(expName, variantName);
    window.squeezePageValue = formHiddenValue;
  }
  function hiddenValue(currentExperimentName, currentExperimentValue) {
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    var ExistingExperimentName = getCookie('ExperimentName');
    var ExistingExperimentValue = getCookie('ExperimentValue');
    var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(',') : [];

    if (!ExistingExperimentName) {
      setCookie('ExperimentName', currentExperimentName, 1);
      setCookie('ExperimentValue', currentExperimentValue, 1);
    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {
      setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
      setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);
    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {
      var existingNames = ExistingExperimentName.split(',');
      var existingValues = ExistingExperimentValue.split(',');
      var index = existingNames.indexOf(currentExperimentName);
      existingValues[index] = currentExperimentValue;
      setCookie('ExperimentName', existingNames.join(','), 1);
      setCookie('ExperimentValue', existingValues.join(','), 1);
    }
  }
}());