/* #3002 | Canoe Intelligence | Solutions | Email Plus CTA - AI Check (VARIANT) */
(function () {
  'use strict';

  /* ===== Config ===== */
  const CONFIG = {
    experiment: '3002',
    bodyClass: 'spz_3002_v',
    guardAttr: 'data-spz-exp',
    demoUrl: 'https://canoeintelligence.com/demo-request/',
    waitTimeoutMs: 15000,
    // Per-page control hooks: the hero element to hide and the section to inject before.
    pages: {
      tax: {
        hideSelector: '.hero-title3.dsg-right.orchid-circle.show-animate',
        anchorSelector: '.intro-cont.bg-style-dark.dark-bg'
      },
      pro: {
        hideSelector: '.hero-title3.dsg-right.grey-circle.show-animate',
        anchorSelector: '.intro-cont.bg-style-grey.grey-bg'
      }
    },
    carousel: {
      intervalMs: 5000,   // one testimonial every 5s
      longPressMs: 500,   // hold this long on a card to pause
      moveThresholdPx: 10 // pointer travel that counts as a swipe (not a tap)
    },
    debug: false
  };

  /* ===== Content (copy + assets — edit here, no logic below needs touching) ===== */
  const CONTENT = {
    tax: {
      pageClass: 'spz-page-tax',
      eyebrow: 'Canoe Tax',
      headline: 'Automate tax document workflows. Boost accuracy.',
      bullets: [
        { lead: 'Tax doc collection.', rest: ' Auto-collect K-1s, K-3s, 1099s, Form 8621, and other tax docs directly from investor portals and fund managers.' },
        { lead: 'Storage and tracking.', rest: ' Store in one place. Track received, missing, and late tax docs. Get alerts. Categorize by client, fund, entity, etc.' },
        { lead: 'Data and delivery.', rest: ' Extract and normalize 60+ critical data fields. Auto-deliver to downstream systems, accountants, and tax workflows.' }
      ],
      uiDesktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/ui-comp_5.png',
      uiMobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/ui-comp-mobile_3.png',
      uiAlt: 'CanoeTax'
    },
    pro: {
      pageClass: 'spz-page-pro',
      eyebrow: 'Canoe Pro',
      headline: 'White-glove support for every step of alts.',
      bullets: [
        { lead: 'Certified experts.', rest: ' Augment your team with our vetted experts and consultants. Alts data management, delivery, program creation, etc.' },
        { lead: 'Managed onboarding.', rest: ' We handle setup, workflow design, platform adoption, team training, and more. Speed up time-to-value.' },
        { lead: 'Tech integrations.', rest: ' Get partner tools. Easily validate and enrich data. Sync with Box, SharePoint, Google Drive, and more.' }
      ],
      uiDesktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero3-graphic_3.png',
      uiMobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/ui-comp-mobile_2.png',
      uiAlt: 'CanoePro'
    },
    ctas: {
      primary: { label: 'Get a Demo', className: 'spz-3002-hero-cta' },
      secondary: { label: 'Download Brochure', className: 'spz-3002-hero-cta-secondary' }
    },
    testimonialsHeading: 'Join 500+ investors &amp; advisors streamlining alts management.',
    testimonials: [
      {
        stat: '75%', label: 'less time spent on manual admin',
        quote: 'By automating our alternative investment reporting process, we are able to scale our firm, execute on data projects with more confidence.',
        name: 'Eric Stephenson', role: 'Director of Client Service & Ops, Align Impact',
        photo: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/image_3.webp'
      },
      {
        stat: '90%', label: 'of data processes automated',
        quote: 'We anticipate eliminating reporting errors, improving our time to analytics, and enabling us to service a greater number of clients.',
        name: 'Andrew Doman', role: 'Chief Operating Officer, Prime Quadrant',
        photo: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/image_4.webp'
      },
      {
        stat: '50%', label: 'faster document collection',
        quote: 'We’ve dramatically reduced operational inefficiencies and empowered our team with more time to support our Partner Advisors.',
        name: 'Matt Woodward', role: 'Head of Advisory Services, AdvicePeriod',
        photo: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/image_5.webp'
      }
    ]
  };

  // Inline SVGs kept as constants so the builders stay readable.
  const CHECK_ICON = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3.5 10.5l4 4 9-9" stroke="#293054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CHEVRON_LEFT = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 6l-6 6 6 6" stroke="#293054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CHEVRON_RIGHT = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="#293054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ===== Helpers ===== */
  // Namespaced logger — flip CONFIG.debug to reveal the full lifecycle.
  const log = (...args) => { if (CONFIG.debug) console.log('[SPZ-3002]', ...args); };

  // Returns the current page key ('tax' | 'pro') or null when off-target.
  const getCurrentPage = () => {
    const path = location.pathname;
    if (/\/canoe-tax\/?/i.test(path)) return 'tax';
    if (/\/canoe-pro\/?/i.test(path)) {
      document.body.classList.add('pro-page');
      return 'pro';
    }
    return null;
  };

  // True once THIS experiment's section is already on the page.
  const alreadyInjected = () => !!document.querySelector('[' + CONFIG.guardAttr + '="' + CONFIG.experiment + '"]');

  // Resolve the injection anchor, polling the DOM until it exists (or timing out).
  const waitForElement = (selector, callback) => {
    const found = document.querySelector(selector);
    if (found) { callback(found); return; }
    log('waiting for anchor', selector);
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (!element) return;
      observer.disconnect();
      clearTimeout(failSafe);
      callback(element);
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    // Fail-safe so we never observe forever if the anchor never renders.
    const failSafe = setTimeout(() => { observer.disconnect(); log('waitForElement timeout', selector); }, CONFIG.waitTimeoutMs);
  };

  /* ===== HTML builders ===== */
  // One hero bullet (bold lead-in + supporting copy).
  const bulletHTML = (item) => `
    <li class="spz-hero-bullet">
      <span class="spz-hero-bullet-text"><strong>${item.lead}</strong>${item.rest}</span>
    </li>`;

  // Both hero CTAs point at the demo request page in the same tab.
  const ctasHTML = () => `
    <div class="spz-hero-ctas">
      <a class="${CONTENT.ctas.primary.className}" href="javascript:void(0);">${CONTENT.ctas.primary.label}</a>
      <a class="${CONTENT.ctas.secondary.className}" href="javascript:void(0);">${CONTENT.ctas.secondary.label}</a>
    </div>`;

  const heroHTML = (page) => `
    <section class="spz-hero">
      <div class="spz-hero-inner">
        <div class="spz-hero-text">
          <div class="spz-hero-heading">
            <span class="spz-hero-eyebrow">${page.eyebrow}</span>
            <h1 class="spz-hero-title">${page.headline}</h1>
          </div>
          <ul class="spz-hero-bullets">
            ${page.bullets.map(bulletHTML).join('')}
          </ul>
          ${ctasHTML()}
        </div>
        <div class="spz-hero-visual">
          <span class="spz-hero-circles" aria-hidden="true"></span>
          <picture class="spz-hero-ui">
            <source media="(max-width: 767.98px)" srcset="${page.uiMobile}">
            <img src="${page.uiDesktop}" alt="${page.uiAlt}" loading="lazy">
          </picture>
        </div>
      </div>
    </section>`;

  const testimonialCardHTML = (item) => `
    <article class="spz-testi-card">
      <div class="spz-testi-card-inner">
        <div class="spz-testi-top">
          <div class="spz-testi-stat-row">
            <span class="spz-testi-stat">${item.stat}</span>
            <span class="spz-testi-stat-label">${item.label}</span>
          </div>
          <p class="spz-testi-quote">${item.quote}</p>
        </div>
        <div class="spz-testi-author">
          <img class="spz-testi-photo" src="${item.photo}" alt="${item.name}" loading="lazy">
          <span class="spz-testi-author-meta">
            <span class="spz-testi-name">${item.name}</span>
            <span class="spz-testi-role">${item.role}</span>
          </span>
        </div>
      </div>
    </article>`;

  const dotHTML = (item, index) => `
    <button type="button" class="spz-testi-dot${index === 0 ? ' is-active' : ''}" aria-label="Go to testimonial ${index + 1}"></button>`;

  const testimonialsHTML = () => `
    <section class="spz-testimonials" aria-roledescription="carousel">
      <div class="spz-testimonials-inner">
        <h2 class="spz-testimonials-heading">${CONTENT.testimonialsHeading}</h2>
        <div class="spz-testi-carousel">
          <div class="spz-testi-viewport">
            ${CONTENT.testimonials.map(testimonialCardHTML).join('')}
          </div>
        </div>
        <div class="spz-testi-dots">
          ${CONTENT.testimonials.map(dotHTML).join('')}
        </div>
      </div>
    </section>`;

  const rootHTML = (page) => `
    <div class="spz-solutions-section ${page.pageClass}" ${CONFIG.guardAttr}="${CONFIG.experiment}">
      ${heroHTML(page)}
      ${testimonialsHTML()}
    </div>`;

  /* ===== Behavior: testimonials carousel ===== */
  // Wires auto-scroll, arrows, dots, swipe, and the tap/long-press pause rules.
  // Carousel only runs below 1024px; desktop shows cards statically.
  const initCarousel = (root) => {
    const viewport = root.querySelector('.spz-testi-viewport');
    const testiSection = root.querySelector('.spz-testimonials');
    if (!viewport) return;

    const isCarouselViewport = () => window.innerWidth < 1024;
    if (!isCarouselViewport()) {
      const onResizeToCarousel = () => {
        if (!isCarouselViewport()) return;
        window.removeEventListener('resize', onResizeToCarousel);
        initCarousel(root);
      };
      window.addEventListener('resize', onResizeToCarousel);
      return;
    }
    if (viewport.dataset.spzCarouselReady === '1') return;
    viewport.dataset.spzCarouselReady = '1';

    const settings = CONFIG.carousel;
    const originals = Array.from(viewport.querySelectorAll('.spz-testi-card:not([aria-hidden="true"])'));
    const count = originals.length;
    if (!count) return;

    // Clone the full set once so forward scrolling can loop seamlessly.
    originals.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      viewport.appendChild(clone);
    });

    const prevBtn = root.querySelector('.spz-testi-arrow--prev');
    const nextBtn = root.querySelector('.spz-testi-arrow--next');
    const dots = Array.from(root.querySelectorAll('.spz-testi-dot'));

    let autoTimer = null;
    let paused = false;
    let scrollSource = 'none'; // 'auto' | 'gesture' | 'none' (user/native)

    // Distance (px) between two cards incl. gap — measured live so it stays right across breakpoints.
    const stepSize = () => {
      const cards = viewport.querySelectorAll('.spz-testi-card');
      if (cards.length < 2) return cards.length ? cards[0].getBoundingClientRect().width : 0;
      return cards[1].offsetLeft - cards[0].offsetLeft;
    };

    const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024;
    const dotCount = () => (isTablet() ? 2 : count);

    const activeIndex = () => {
      const step = stepSize();
      if (!step) return 0;
      const raw = Math.round(viewport.scrollLeft / step) % count;
      return isTablet() ? Math.min(raw, 1) : raw;
    };

    const updateDots = () => {
      const index = activeIndex();
      const visible = dotCount();
      dots.forEach((dot, i) => {
        if (i >= visible) return;
        dot.classList.toggle('is-active', i === index);
      });
    };

    // Instant (non-animated) shift used to wrap the loop without a visible flash.
    const jumpBy = (delta) => {
      viewport.classList.add('spz-instant');
      viewport.scrollLeft += delta;
      void viewport.offsetWidth; // force reflow so smooth behavior resumes cleanly
      viewport.classList.remove('spz-instant');
    };

    const goNext = () => {
      const step = stepSize();
      if (!step) return;
      viewport.scrollTo({ left: viewport.scrollLeft + step, behavior: 'smooth' });
    };
    const goPrev = () => {
      const step = stepSize();
      if (!step) return;
      if (viewport.scrollLeft < step) jumpBy(step * count);
      viewport.scrollTo({ left: viewport.scrollLeft - step, behavior: 'smooth' });
    };
    const goTo = (index) => {
      const step = stepSize();
      if (!step) return;
      viewport.scrollTo({ left: index * step, behavior: 'smooth' });
    };

    const goOneSlide = (direction) => {
      const step = stepSize();
      if (!step) return;
      scrollSource = 'gesture';
      if (direction > 0) goNext();
      else goPrev();
      setTimeout(() => { if (scrollSource === 'gesture') scrollSource = 'none'; }, 400);
    };

    const runAutoStep = () => {
      scrollSource = 'auto';
      const step = stepSize();
      if (!step) return;
      viewport.scrollLeft += step;
      setTimeout(() => { if (scrollSource === 'auto') scrollSource = 'none'; }, 100);
    };

    const startAuto = () => {
      if (paused || autoTimer || !isCarouselViewport()) return;
      autoTimer = setInterval(runAutoStep, settings.intervalMs);
      log('carousel auto-scroll started');
    };
    const stopAuto = (permanent) => {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
      if (permanent) { paused = true; log('carousel paused for page view'); }
    };

    // Wrap the loop + refresh dots once scrolling settles.
    let settleTimer = null;
    const onScroll = () => {
      if (!isCarouselViewport()) return;
      if (scrollSource === 'none') stopAuto(true);
      updateDots();
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const step = stepSize();
        if (!step) return;
        if (viewport.scrollLeft >= step * count - 1) jumpBy(-step * count);
        updateDots();
      }, 160);
    };
    viewport.addEventListener('scroll', onScroll, { passive: true });

    // Arrows / dots: manual navigation + permanent stop.
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(true); goNext(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(true); goPrev(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => {
      if (isTablet() && i >= 2) return;
      stopAuto(true);
      goTo(i);
    }));

    // Swipe: always one slide per gesture; any manual scroll pauses autoplay.
    let pointerStartX = 0;
    let pointerStartY = 0;
    let pointerStartScroll = 0;
    let pointerMoved = false;
    let longPressTimer = null;

    viewport.addEventListener('pointerdown', (event) => {
      if (!isCarouselViewport()) return;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
      pointerStartScroll = viewport.scrollLeft;
      pointerMoved = false;
      longPressTimer = setTimeout(() => stopAuto(true), settings.longPressMs);
    });

    viewport.addEventListener('touchmove', (event) => {
      if (!isCarouselViewport() || event.touches.length !== 1) return;
      const dx = event.touches[0].clientX - pointerStartX;
      const dy = event.touches[0].clientY - pointerStartY;
      if (Math.abs(dx) > settings.moveThresholdPx && Math.abs(dx) > Math.abs(dy)) {
        pointerMoved = true;
        stopAuto(true);
        clearTimeout(longPressTimer);
        event.preventDefault();
      }
    }, { passive: false });

    viewport.addEventListener('pointermove', (event) => {
      if (Math.abs(event.clientX - pointerStartX) > settings.moveThresholdPx) {
        pointerMoved = true;
        clearTimeout(longPressTimer);
        stopAuto(true);
      }
    });

    const endPointer = (event) => {
      clearTimeout(longPressTimer);
      const step = stepSize();
      if (!step) return;

      const swipeDelta = event.clientX - pointerStartX;

      if (!pointerMoved) {
        stopAuto(true);
        return;
      }

      stopAuto(true);

      if (Math.abs(swipeDelta) < settings.moveThresholdPx) {
        viewport.classList.add('spz-instant');
        viewport.scrollLeft = pointerStartScroll;
        viewport.classList.remove('spz-instant');
        return;
      }

      // Reset native momentum, then move exactly one slide from gesture start.
      viewport.classList.add('spz-instant');
      viewport.scrollLeft = pointerStartScroll;
      viewport.classList.remove('spz-instant');

      goOneSlide(swipeDelta < 0 ? 1 : -1);
    };
    viewport.addEventListener('pointerup', endPointer);
    viewport.addEventListener('pointercancel', () => clearTimeout(longPressTimer));

    // Keep card alignment after a viewport resize; stop carousel at ≥1024.
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!isCarouselViewport()) {
          stopAuto(false);
          viewport.scrollLeft = 0;
          return;
        }
        const step = stepSize();
        if (step) jumpBy(Math.round(viewport.scrollLeft / step) * step - viewport.scrollLeft);
      }, 150);
    });

    // Only start auto-scroll once the section enters the fold.
    if (testiSection && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) startAuto(); });
      }, { threshold: 0.25 });
      observer.observe(testiSection);
    } else {
      startAuto();
    }

    updateDots();
  };

  /* ===== Init ===== */
  const init = () => {
    log('script start', location.href);
    const key = getCurrentPage();
    if (!key) { log('URL check failed', location.href); return; }
    log('URL check passed', key);
    if (alreadyInjected()) { log('skip: already injected'); return; }

    const page = Object.assign({}, CONTENT[key], CONFIG.pages[key], { key });
    waitForElement(page.anchorSelector, (anchor) => {
      if (alreadyInjected()) { log('skip: injected during wait'); return; }
      anchor.insertAdjacentHTML('beforebegin', rootHTML(page));
      document.body.classList.add(CONFIG.bodyClass);
      log('injected before anchor', page.anchorSelector);
      const root = anchor.previousElementSibling;
      if (root) initCarousel(root);
    });
  };


  

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('spz-3002-hero-cta-secondary')) {
      document.querySelector('#row1 .btn.btn-aurora').click();
    }
    if (e.target.classList.contains('spz-3002-hero-cta')) {
      e.preventDefault();
      e.stopPropagation();
      const headerBtn = document.querySelector(
        '.middle-bar .nav-bar .btn-header button[name="Book a Meeting"]'
      );
      
      headerBtn.focus();

      setTimeout(() => {
        headerBtn.click();
      }, 100);
    }
  });
 

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());

/* ===== Down-funnel tracking (VARIANT) ===== */
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = false; // true / false / 'both'
  const expName = '3002'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = '#3002_spz_var'; //variantName should be _variant, _true_control etc.
  const clientDomain = '.canoeintelligence.com'; //domain should be .spiralyze.com


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