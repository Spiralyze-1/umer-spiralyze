(function () {

  /* ----------------------------- Config ----------------------------- */
  const CONFIG = {
    bodyClass: 'spz_4001_v',
    sectionClass: 'spz-4001-section',
    injectSelector: '.mint-component.hero',
    injectPosition: 'afterend',
    ctaDemoUrl: 'https://semgrep.dev/contact/demo/',
    ctaTryUrl: 'https://semgrep.dev/signup',
    tracking: {
      assignmentField: 'cRO1',
      assignmentValue: 'spz_4001_variant',
      tilesField: 'cRO2'
    }
  };

  const ASSETS = {
    icons: {
      assistant: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781874036/semgrep/4001/assistant.svg',
      shield: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781874036/semgrep/4001/shield_1.svg',
      secrets: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781874036/semgrep/4001/secrets_1.svg',
      vibe: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781874036/semgrep/4001/vibe-code-icon_1.svg',
      cloud: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781874036/semgrep/4001/cloud_1.svg',
      zap: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781874036/semgrep/4001/zap_1.svg'
    },
    g2Logo: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781874036/semgrep/4001/g2-logo.svg',
    stars: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781874036/semgrep/4001/rating-stars.svg',
    uiDesktop: 'https://res.cloudinary.com/spiralyze/image/upload/semgrep/4001/ui_hero_desktop.png',
    uiTablet: 'https://res.cloudinary.com/spiralyze/image/upload/semgrep/4001/ui_hero_tablet.png',
    uiMobile: 'https://res.cloudinary.com/spiralyze/image/upload/semgrep/4001/ui_hero_mobile.png',
    logosDesktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782133877/semgrep/4001/logos_desktop_1.svg',
    logosTablet: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782133877/semgrep/4001/logos_tablet_1.svg',
    logosMobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782133877/semgrep/4001/mobile_logos_1.svg'
  };

  const TILES = [
    { label: 'SAST & complex code issues', icon: ASSETS.icons.assistant },
    { label: 'Dependencies upgrades and reachability', icon: ASSETS.icons.shield },
    { label: 'Secrets detection', icon: ASSETS.icons.secrets },
    { label: 'AI triage and remediation', icon: ASSETS.icons.vibe },
    { label: 'Secure AI-generated code', icon: ASSETS.icons.cloud },
    { label: 'Embed into dev workflows', icon: ASSETS.icons.zap }
  ];

  const state = { assignment: CONFIG.tracking.assignmentValue, tiles: '' };

  /* ----------------------------- Helpers ----------------------------- */
  const isTargetUrl = () =>
    /(^|\.)semgrep\.dev$/.test(location.hostname) &&
    (location.pathname === '/' || location.pathname === '');

  const setCookie = (name, value, days) => {
    const d = new Date();
    d.setTime(d.getTime() + (days || 365) * 864e5);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/';
  };

  const waitForElement = (selector, cb) => {
    const found = document.querySelector(selector);
    if (found) { cb(found); return; }
    const obs = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) { obs.disconnect(); cb(el); }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  };

  /* ----------------------------- Tracking ---------------------------- */
  const fillHiddenFields = () => {
    const map = {};
    map[CONFIG.tracking.assignmentField] = state.assignment;
    map[CONFIG.tracking.tilesField] = state.tiles;
    Object.keys(map).forEach((name) => {
      document.querySelectorAll('input[name="' + name + '"]').forEach((inp) => {
        if (inp.value !== map[name]) inp.value = map[name];
      });
    });
  };

  let scheduled = false;
  const scheduleFill = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; fillHiddenFields(); });
  };

  let fieldObserver = null;
  const startFieldObserver = () => {
    if (fieldObserver) return;
    fieldObserver = new MutationObserver(scheduleFill);
    fieldObserver.observe(document.documentElement, { childList: true, subtree: true });
  };

  const setAssignmentTracking = () => {
    setCookie(CONFIG.tracking.assignmentField, state.assignment);
    setCookie('HiddenFieldName', CONFIG.tracking.assignmentField);
    setCookie('HiddenFieldValue', state.assignment);
    fillHiddenFields();
    startFieldObserver();
  };

  const updateTileTracking = (section) => {
    const selected = Array.prototype.slice
      .call(section.querySelectorAll('.spz-4001-card.is-selected'))
      .map((el) => el.getAttribute('data-tile'));
    state.tiles = selected.join(', ');
    setCookie(CONFIG.tracking.tilesField, state.tiles);
    fillHiddenFields();
  };

  /* ----------------------------- Markup ------------------------------ */
  const checkSvg =
    '<svg class="spz-4001-check" width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">' +
    '<path d="M1 4L4.4 7L11 1" stroke="#232928" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const buildTiles = () =>
    TILES.map((t) =>
      '<button type="button" class="spz-4001-card" data-tile="' + t.label + '" aria-pressed="false">' +
        '<span class="spz-4001-checkbox">' + checkSvg + '</span>' +
        '<img class="spz-4001-card-icon" src="' + t.icon + '" alt="" aria-hidden="true">' +
        '<span class="spz-4001-card-label">' + t.label + '</span>' +
      '</button>'
    ).join('');

  const buildHTML = () =>
    '<section class="spz-4001-section">' +
      '<div class="spz-4001-hero-inner">' +
        '<div class="spz-4001-top">' +
          '<div class="spz-4001-title">' +
            '<div class="spz-4001-title-group">' +
              '<div class="spz-4001-g2">' +
                '<img class="spz-4001-g2-logo" src="' + ASSETS.g2Logo + '" alt="G2">' +
                '<img class="spz-4001-stars" src="' + ASSETS.stars + '" alt="4.6 star rating">' +
                '<span class="spz-4001-rating"><b>4.6</b><span class="spz-4001-reviews">(55 reviews)</span></span>' +
              '</div>' +
              '<h1 class="spz-4001-heading">Ship Secure Code Faster.<br>98% Fewer False Positives.</h1>' +
            '</div>' +
            '<p class="spz-4001-subtitle">How can we help?</p>' +
          '</div>' +
          '<div class="spz-4001-tiles">' + buildTiles() + '</div>' +
          '<div class="spz-4001-cta-block">' +
            '<a class="spz-4001-cta spz-4001-cta--demo" href="' + CONFIG.ctaDemoUrl + '">Get a demo<span class="spz-4001-cta-arrow" aria-hidden="true">&#8594;</span></a>' +
            '<a class="spz-4001-cta spz-4001-cta--try" href="' + CONFIG.ctaTryUrl + '">Try for free</a>' +
          '</div>' +
        '</div>' +
        '<div class="spz-4001-ui">' +
          '<picture>' +
            '<source media="(max-width:767.98px)" srcset="' + ASSETS.uiMobile + '">' +
            '<source media="(max-width:1023.98px)" srcset="' + ASSETS.uiTablet + '">' +
            '<img src="' + ASSETS.uiDesktop + '" alt="sg home" title="sg home">' +
          '</picture>' +
        '</div>' +
      '</div>' +
    '</section>' +
    '<section class="spz-4001-logos">' +
      '<p class="spz-4001-logos-title">Trusted by Leading Engineer Teams</p>' +
      '<picture class="spz-4001-logos-img">' +
        '<source media="(max-width:767.98px)" srcset="' + ASSETS.logosMobile + '">' +
        '<source media="(max-width:1023.98px)" srcset="' + ASSETS.logosTablet + '">' +
        '<img src="' + ASSETS.logosDesktop + '" alt="Trusted by leading engineer teams">' +
      '</picture>' +
    '</section>';

  /* ---------------------------- Behaviour ---------------------------- */
  const bindTiles = (section) => {
    section.querySelectorAll('.spz-4001-card').forEach((card) => {
      card.addEventListener('click', () => {
        const selected = card.classList.toggle('is-selected');
        card.setAttribute('aria-pressed', selected ? 'true' : 'false');
        updateTileTracking(section);
      });
    });
  };

  /* ----------------------------- Inject ------------------------------ */
  const inject = () => {
    if (!isTargetUrl() || !document.body) return;
    document.body.classList.add(CONFIG.bodyClass);
    setAssignmentTracking();
    if (document.querySelector('.' + CONFIG.sectionClass)) return; // duplicate guard
    waitForElement(CONFIG.injectSelector, (target) => {
      if (document.querySelector('.' + CONFIG.sectionClass)) return;
      target.insertAdjacentHTML(CONFIG.injectPosition, buildHTML());
      const section = document.querySelector('.' + CONFIG.sectionClass);
      if (section) bindTiles(section);
    });
  };

  const cleanup = () => {
    if (document.body) document.body.classList.remove(CONFIG.bodyClass);
    document.querySelectorAll('.spz-4001-section, .spz-4001-logos').forEach((el) => el.remove());
  };

  const onLocationChange = () => {
    if (isTargetUrl()) inject();
    else cleanup();
  };

  /* --------------------------- SPA support --------------------------- */
  const initSpa = () => {
    const fire = () => window.dispatchEvent(new Event('locationchange'));
    ['pushState', 'replaceState'].forEach((m) => {
      const orig = history[m];
      history[m] = function () {
        const r = orig.apply(this, arguments);
        fire();
        return r;
      };
    });
    window.addEventListener('popstate', fire);
    window.addEventListener('locationchange', onLocationChange);
  };

  const start = () => {
    initSpa();
    inject();
  };

  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();