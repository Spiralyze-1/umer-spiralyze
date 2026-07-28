/* #3002 | Canoe Intelligence | Solutions | Email Plus CTA - AI Check (VARIANT) */
(function () {
  'use strict';

  /* ===== Config ===== */
  const CONFIG = {
    experiment: '3002',
    bodyClass: 'spz_3002_v',
    guardAttr: 'data-spz-exp',
    demoUrl: 'https://canoeintelligence.com/demo-request/',
    demoPopup: {
      id: 8300,
      sourcePath: '/solutions/canoe-intelligence/',
      formSelector: '#demo-request-form'
    },
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
      uiDesktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/ui-comp_6.png',
      uiMobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/ui-comp-mobile_4.png',
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
      uiMobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/graphic.png',
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

  let demoPopupLoadPromise = null;

  const extractPopupMarkup = (html, popupId) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const wrapper = doc.getElementById('sg-popup-content-wrapper-' + popupId);
    if (!wrapper) return null;
    const container = wrapper.closest('[class*="sgpb-main-popup-data-container"]');
    return (container || wrapper).outerHTML;
  };

  const injectMarkup = (markup) => {
    const host = document.createElement('div');
    host.innerHTML = markup;
    const scripts = Array.from(host.querySelectorAll('script'));
    scripts.forEach((script) => script.remove());
    while (host.firstChild) document.body.appendChild(host.firstChild);
    scripts.forEach((oldScript) => {
      const script = document.createElement('script');
      Array.from(oldScript.attributes).forEach((attr) => script.setAttribute(attr.name, attr.value));
      script.textContent = oldScript.textContent;
      document.body.appendChild(script);
    });
  };

  const ensureDemoPopup = () => {
    const popupId = CONFIG.demoPopup.id;
    if (document.getElementById('sg-popup-content-wrapper-' + popupId)) {
      return Promise.resolve(true);
    }
    if (demoPopupLoadPromise) return demoPopupLoadPromise;

    demoPopupLoadPromise = fetch(CONFIG.demoPopup.sourcePath, { credentials: 'same-origin' })
      .then((response) => response.text())
      .then((html) => {
        const markup = extractPopupMarkup(html, popupId);
        if (!markup) throw new Error('Demo popup markup not found');
        injectMarkup(markup);
        log('demo popup injected', popupId);
        return true;
      })
      .catch((error) => {
        demoPopupLoadPromise = null;
        log('ensureDemoPopup failed', error);
        return false;
      });

    return demoPopupLoadPromise;
  };

  const openDemoPopup = () => {
    ensureDemoPopup().then((ready) => {
      if (!ready) return;
      setTimeout(() => {
        const popupId = CONFIG.demoPopup.id;
        if (window.SGPBPopup && window.jQuery) {
          const popupObj = SGPBPopup.createPopupObjById(popupId);
          if (popupObj) {
            popupObj.customEvent = 'Click';
            popupObj.prepareOpen();
            return;
          }
        }
        const trigger = document.querySelector('a[href="#sg-popup-id-' + popupId + '"]');
        if (trigger) trigger.click();
      }, 0);
    });
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
            <img src="${page.uiDesktop}" alt="${page.uiAlt}">
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
      ensureDemoPopup();
    });
  };



  // demo form js
  const waitForForm = setInterval(() => {
    const hubspotForm = document.querySelector('.hbspt-form form');

    if (hubspotForm && hubspotForm.querySelector('input')) {
      clearInterval(waitForForm);
      adjustHubspotFormLayout();
    }

  }, 300);
  setTimeout(() => { clearInterval(waitForForm); }, 10000);

  function adjustHubspotFormLayout() {
    const hubspotForm = document.querySelector('.hbspt-form form');

    const consent = hubspotForm.querySelector('.legal-consent-container');
    const submit = hubspotForm.querySelector('.hs_submit');

    if (consent && submit) {
      submit.insertAdjacentElement('afterend', consent);
    }

    /*const selects = document.querySelectorAll('.hbspt-form select');
        if (selects.length) {
        console.log('selects found', selects);
        selects.forEach(select => {
            const firstOption = select.querySelector('option');
            if (firstOption) {
            firstOption.textContent = ''; // remove text
            }
        });
    }*/




    // Wait for HubSpot form to appear
    const waiter = setInterval(() => {
      const formEl = document.querySelector('.hbspt-form form');
      if (!formEl) return;
      clearInterval(waiter);

      const formWrapper = document.querySelector('.hbspt-form');
      if (!formWrapper) return;

      // All relevant fields
      const fieldSelector = `
            input[name="firstname"],
            input[name="lastname"],
            input[name="email"],
            input[name="company"],
            select[name="company_type"],
            select[name="country_region_2"],
            select[name="job_function_2"]
            `;

      // Helper: update .active based on value
      function updateActiveState(field) {
        const wrapper = field.closest('.hs-form-field');
        if (!wrapper) return;
        if (field.value && field.value.trim() !== '') {
          wrapper.classList.add('active');
        } else {
          wrapper.classList.remove('active');
        }
      }

      // Focus handling using delegation
      formEl.addEventListener('focusin', (e) => {
        const field = e.target;
        if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement)) return;
        const wrapper = field.closest('.hs-form-field');
        if (wrapper) wrapper.classList.add('focus');
      });

      formEl.addEventListener('focusout', (e) => {
        const field = e.target;
        if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement)) return;
        const wrapper = field.closest('.hs-form-field');
        if (wrapper) wrapper.classList.remove('focus');
        updateActiveState(field);
      });

      // Input/change -> update .active
      formEl.addEventListener('input', (e) => {
        const field = e.target;
        if (field.matches(fieldSelector)) updateActiveState(field);
      }, true);

      formEl.addEventListener('change', (e) => {
        const field = e.target;
        if (field.matches(fieldSelector)) updateActiveState(field);
      }, true);


      // Efficient MutationObserver: only watch inputs/selects for error classes
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type !== 'attributes' || m.attributeName !== 'class') continue;
          const target = m.target;
          if (
            !(target instanceof HTMLInputElement) &&
            !(target instanceof HTMLSelectElement)
          )
            continue;

          const field = target;
          const wrapper = field.closest('.hs-form-field');
          if (!wrapper) continue;

          const hasError =
            field.classList.contains('error') ||
            field.classList.contains('hs-error');
          if (hasError) wrapper.classList.add('invalid');
          else wrapper.classList.remove('invalid');

          updateActiveState(field);
        }
      });

      observer.observe(formEl, {
        subtree: true,
        attributes: true,
        attributeFilter: ['class'],
      });

      // Initialize state for prefilled fields
      formEl.querySelectorAll(fieldSelector).forEach((f) => {
        updateActiveState(f);
        const wrapper = f.closest('.hs-form-field');
        if (!wrapper) return;
        if (f.classList.contains('error') || f.classList.contains('hs-error')) {
          wrapper.classList.add('invalid');
        }
      });

      // Fix: handle autofill delay
      setTimeout(() => {
        formEl.querySelectorAll(fieldSelector).forEach(updateActiveState);
      }, 150);

      // Chrome autofill detection via animationstart
      formEl.addEventListener('animationstart', function (e) {
        if (e.animationName === 'onAutoFillStart' || e.animationName === 'onAutoFillCancel') {
          setTimeout(() => {
            formEl.querySelectorAll(fieldSelector).forEach(updateActiveState);
          }, 50);
        }
      });

      console.log('✅ HubSpot form styling script initialized');
    }, 300);


    document.querySelectorAll('#demo-request-form .hs-form-field input').forEach(input => {
      input.addEventListener('keyup', function () {
        const firstName = document.querySelector('#demo-request-form .hs-form-field input[name="firstname"]').value;
        const lastName = document.querySelector('#demo-request-form .hs-form-field input[name="lastname"]').value;
        const email = document.querySelector('#demo-request-form .hs-form-field input[name="email"]').value;
        const company = document.querySelector('#demo-request-form .hs-form-field input[name="company"]').value;

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const emailValid = emailPattern.test(email);

        // Check if all required fields are filled and email is valid
        if (firstName !== '' && lastName !== '' && email !== '' && company !== '') {
          document.querySelector('#demo-request-form .hbspt-form').classList.add('show-all-fields');
        }
      });
    });

    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.close-popup');
      if (!btn) return;

      // Find nearest popup wrapper
      const popup = btn.closest('.sgpb-popup-dialog-main-div-wrapper');
      if (!popup) return;

      // Find the close button inside that popup
      const closeBtn = popup.querySelector('.sgpb-popup-close-button-2');
      if (closeBtn) {
        closeBtn.click();
      } else {
        console.warn('No .sgpb-popup-close-button-2 found in popup');
      }
    });


    //oberve form for state field
    const observeForm = new MutationObserver(() => {
      if (document.querySelector('select[name="state_region_2"]') && !document.querySelector('.hbspt-form').classList.contains('has-state-field')) {
        document.querySelector('.hbspt-form').classList.add('has-state-field');
        /*document.querySelector('select[name="state_region_2"] option').textContent = '';*/
        if (document.querySelector('select[name="state_region_2"]').value) {
          document.querySelector('select[name="state_region_2"]').closest('.hs-form-field').classList.add('active');
        }
      }
      else if (!document.querySelector('select[name="state_region_2"]') && document.querySelector('.hbspt-form').classList.contains('has-state-field')) {
        document.querySelector('.hbspt-form').classList.remove('has-state-field');
      }
    });

    // Start observing the target node for configured mutations
    observeForm.observe(document.querySelector('.hbspt-form'), { attributes: true, childList: true, subtree: true });

  }





  /* ===== Brochure form ===== */
  function spz3002Body() {
    return document.body || null;
  }

  function spz3002IsVariantActive() {
    var body = spz3002Body();
    return !!(body && body.classList.contains("spz_3002_v"));
  }
  var SPZ3002_POPUP_TRACKED_SELECT_FIELDS = {
    field_6_5: 1,
    field_15_5: 1,
    field_4_5: 1,
    field_15_25: 1,
    field_4_24: 1,
    field_6_22: 1
  };

  function spz3002SelectHasValueWrapper(selectEl) {
    return (selectEl && selectEl.closest && selectEl.closest(".gfield--input-type-select")) || (selectEl && selectEl.closest && selectEl.closest(".gfield"));
  }

  /** Sync select .has-value (GF AJAX replaces nodes; delegated change + periodic sync survives re-render.) */
  function spz3002SyncSelectHasValueClass(selectEl) {
    if (!selectEl || selectEl.tagName !== "SELECT" || !spz3002IsVariantActive()) return false;
    if (!selectEl.closest("#sgpb-popup-dialog-main-div")) return false;
    var gfield = selectEl.closest(".gfield");
    if (!gfield || !gfield.id || !SPZ3002_POPUP_TRACKED_SELECT_FIELDS[gfield.id]) return false;
    var wrapper = spz3002SelectHasValueWrapper(selectEl);
    if (!wrapper) return true;
    if (selectEl.value && String(selectEl.value).length > 0) {
      wrapper.classList.add("has-value");
    } else {
      wrapper.classList.remove("has-value");
    }
    return true;
  }

  function handleSelectHasValueClass() {
    var modal = document.querySelector("#sgpb-popup-dialog-main-div");
    if (!modal || !spz3002IsVariantActive()) return;
    modal.querySelectorAll(".gfield select").forEach(function (sel) {
      spz3002SyncSelectHasValueClass(sel);
    });
  }
  function handleErrorState() {
    const selectors = [
      '#sgpb-popup-dialog-main-div .sgpb-main-html-content-wrapper form .ginput_container input[aria-describedby*="validation_message"]',
      '#sgpb-popup-dialog-main-div .sgpb-main-html-content-wrapper form #field_6_5 select[aria-describedby*="validation_message"]',
      '#sgpb-popup-dialog-main-div .sgpb-main-html-content-wrapper form #field_15_5 select[aria-describedby*="validation_message"]'
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((ele) => {
        const gfield = ele.closest(".gfield");
        if (gfield) {
          gfield.classList.add("spz_custom_error");
        }
      });
    });
  }

  var SPZ3002_POPUP_FILLED_INPUT_SELECTOR = '.spz_3002_v .ginput_container input[type="text"], .spz_3002_v .ginput_container input[type="email"], .spz_3002_v .ginput_container input[type="tel"]';

  function spz3002PopupFilledInputMatches(el) {
    return !!(el && el.matches && el.matches(SPZ3002_POPUP_FILLED_INPUT_SELECTOR));
  }

  function updateSpz3002PopupFilledState() {
    document.querySelectorAll(SPZ3002_POPUP_FILLED_INPUT_SELECTOR).forEach(function (input) {
      const gfield = input.closest(".gfield");
      if (gfield) {
        if (input.value.trim() !== "") {
          gfield.classList.add("spz_input_filled");
        } else {
          gfield.classList.remove("spz_input_filled");
        }
      }
    });
  }

  /** Brochure / demo controls in SG popup (CSS floated labels expect `.active` / `.focused` on `.gfield`). */
  function spz3002BrochureModalControlMatches(el) {
    if (!el || !el.closest || !spz3002IsVariantActive()) return false;
    if (!el.closest("#sgpb-popup-dialog-main-div")) return false;
    var g = el.closest(".gfield.gfield_visibility_visible");
    if (!g) return false;
    var t = el.tagName;
    if (t === "TEXTAREA" || t === "SELECT") return true;
    if (t !== "INPUT") return false;
    var ty = (el.type || "text").toLowerCase();
    return ty === "text" || ty === "email" || ty === "tel" || ty === "number" || ty === "";
  }

  /** Same behaviour as demo `labelChange` in 3002.js */
  function spz3002BrochureGfieldLabelState(controlEl) {
    if (!spz3002BrochureModalControlMatches(controlEl)) return;
    var field = controlEl.closest(".gfield");
    if (!field) return;

    field.classList.remove("spz_input_focus");

    var has = controlEl.tagName === "SELECT" ? !!(controlEl.value && String(controlEl.value).trim() !== "") : !!(controlEl.value && String(controlEl.value).trim() !== "");

    if (!has) {
      field.classList.remove("active", "focused");
    } else {
      field.classList.add("active");
      field.classList.remove("focused");
    }

    if (controlEl.tagName === "INPUT" || controlEl.tagName === "TEXTAREA") {
      if (has) field.classList.add("spz_input_filled");
      else field.classList.remove("spz_input_filled");
    }
  }

  function spz3002SyncBrochureFloatingLabels(modalRoot) {
    var modal = modalRoot || document.querySelector("#sgpb-popup-dialog-main-div");
    if (!modal) return;
    modal.querySelectorAll(".gfield.gfield_visibility_visible input, .gfield.gfield_visibility_visible select, .gfield.gfield_visibility_visible textarea").forEach(function (el) {
      spz3002BrochureGfieldLabelState(el);
    });
  }

  function spz3002BrochurePopupShell() {
    if (!spz3002IsVariantActive()) return null;
    var popupDivs = document.querySelectorAll(".spz_3002_v #sgpb-popup-dialog-main-div-wrapper > div");
    var brochureMark =
      ".sgpb-popup-builder-content-6998, #sg-popup-content-wrapper-6998, " + "#sg-popup-content-wrapper-6999, #sg-popup-content-wrapper-7500, " + "form#gform_6, form#gform_4, form#gform_15";
    var i;
    for (i = popupDivs.length - 1; i >= 0; i--) {
      if (popupDivs[i].querySelector(brochureMark)) return popupDivs[i];
    }
    if (popupDivs.length > 1) return popupDivs[1];
    if (popupDivs.length === 1) return popupDivs[0];
    return null;
  }

  /** After demo (6993) opens first, brochure markup often lives in the 2nd wrapper div — not the first #sgpb-popup-dialog-main-div. */
  function spz3002BrochurePopupRoot() {
    var shell = spz3002BrochurePopupShell();
    if (shell) return shell.querySelector("#sgpb-popup-dialog-main-div") || shell;
    return document.querySelector("#sgpb-popup-dialog-main-div");
  }

  function spz3002IsVisibleEl(el) {
    if (!el || !el.getBoundingClientRect) return false;
    var rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return false;
    var cs = window.getComputedStyle(el);
    return cs.display !== "none" && cs.visibility !== "hidden" && parseFloat(cs.opacity || "1") > 0;
  }

  /** Reordering `.gfield` nodes while selects are open destroys native & enhanced dropdowns — skip until safe. */
  function spz3002PopupShouldDeferFieldReorder(modal) {
    modal = spz3002BrochurePopupRoot() || modal || document.querySelector("#sgpb-popup-dialog-main-div");
    if (!modal) return false;

    var ae = document.activeElement;
    if (ae && modal.contains(ae) && ae.matches("select")) return true;

    var openInScope = modal.querySelectorAll('.chosen-with-drop, .chosen-container-active, .select2-container--open, .choices.is-open, [aria-expanded="true"][role="combobox"]');
    for (var i = 0; i < openInScope.length; i++) {
      if (spz3002IsVisibleEl(openInScope[i])) return true;
    }

    return false;
  }

  function spz3002PopupIs6998Brochure(modal) {
    modal = modal || spz3002BrochurePopupRoot();
    if (!modal) return false;
    return !!modal.querySelector(".sgpb-popup-builder-content-6998, #sg-popup-content-wrapper-6998");
  }

  function spz3002GformFieldIndex(form, fieldEl) {
    if (!form || !fieldEl) return -1;
    var container = form.querySelector(".gform_fields") || form;
    var nodes = container.querySelectorAll(":scope > .gfield");
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] === fieldEl) return i;
    }
    return -1;
  }

  /** True when popup 6998 / gform_6 still needs reorder (fields missing or wrong DOM order). */
  function spz3002Gform6FieldOrderPending(modal) {
    modal = modal || spz3002BrochurePopupRoot();
    if (!modal || !spz3002PopupIs6998Brochure(modal)) return false;
    var form = modal.querySelector("form#gform_6");
    if (!form) return false;

    var email = form.querySelector(".gfield--type-email");
    var lastName = form.querySelector("#field_6_16");
    var companyType = form.querySelector("#field_6_5");
    var job = form.querySelector("#field_6_22");
    if (!email || !lastName || !companyType || !job) return true;

    var lastIdx = spz3002GformFieldIndex(form, lastName);
    var emailIdx = spz3002GformFieldIndex(form, email);
    var coIdx = spz3002GformFieldIndex(form, companyType);
    var jobIdx = spz3002GformFieldIndex(form, job);
    if (lastIdx < 0 || emailIdx < 0 || coIdx < 0 || jobIdx < 0) return true;

    return !(emailIdx > lastIdx && jobIdx > coIdx);
  }

  /** Apply field reorder when no control/dropdown is active; retry so GF AJAX + timers do not clash with the user. */
  function spz3002MaybeApplyFieldReorder(modal, attempt) {
    modal = spz3002BrochurePopupRoot() || modal;
    if (!modal) return;
    if (!modal.querySelector("form#gform_6, form#gform_4, form#gform_15")) return;
    var n = attempt != null ? attempt : 0;
    var MAX_ATTEMPTS = 80;
    if (spz3002PopupShouldDeferFieldReorder(modal)) {
      if (n < MAX_ATTEMPTS)
        window.setTimeout(function () {
          spz3002MaybeApplyFieldReorder(modal, n + 1);
        }, 150);
      return;
    }
    brochureApplyFieldOrderInPopup(modal);
    handleSelectHasValueClass();
    spz3002SyncBrochureFloatingLabels(modal);

    if (spz3002Gform6FieldOrderPending(modal) && n < MAX_ATTEMPTS) {
      window.setTimeout(function () {
        spz3002MaybeApplyFieldReorder(modal, n + 1);
      }, 150);
    }
  }

  function ensureBrochurePopupChrome() {
    var targetDiv = spz3002BrochurePopupShell();
    if (!targetDiv) return;
    const gformTitle = targetDiv.querySelector(".gform_title");
    if (gformTitle) gformTitle.innerHTML = "Download the Canoe Brochure";
    if (!targetDiv.querySelector(".spz_close_icon")) {
      targetDiv.insertAdjacentHTML(
        "afterbegin",
        '<div class="spz_close_icon">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">' +
          '<path d="M15.8337 4.16675L4.16699 15.8334M15.8337 15.8334L4.16699 4.16675" ' +
          'stroke="#293054" stroke-opacity="0.5" stroke-width="1.5" ' +
          'stroke-linecap="round" stroke-linejoin="round"></path>' +
          "</svg>" +
          "</div>"
      );
    }
  }

  /** SG popup gravity root (variant scoped). */
  function spz3002PopupGravityModalRoot() {
    if (!spz3002IsVariantActive()) return null;
    return document.querySelector("#sgpb-popup-dialog-main-div");
  }

  /**
   * Gravity form inside the popup. After AJAX, `.sgpb-main-html-content-wrapper` may be absent;
   * fallback to any `form[id^="gform_"]` under the modal.
   */
  function spz3002GravityFormInPopup(modalRoot) {
    if (!modalRoot) return null;
    return (
      modalRoot.querySelector('.sgpb-main-html-content-wrapper form[id^="gform_"]') || modalRoot.querySelector(".sgpb-main-html-content-wrapper form") || modalRoot.querySelector('form[id^="gform_"]')
    );
  }

  function spz3002GravityFormByNumInPopup(modalRoot, num) {
    if (!modalRoot) return null;
    var id = typeof num === "string" ? num : String(num);
    return modalRoot.querySelector("form#gform_" + id);
  }

  function brochureReorderBrochureEmailColumns(modalRoot) {
    if (!modalRoot) return;
    [
      { id: "6", companySel: "#field_6_16" },
      { id: "4", companySel: "#field_4_16" },
      { id: "15", companySel: "#field_15_16" }
    ].forEach(function (cfg) {
      var fel = spz3002GravityFormByNumInPopup(modalRoot, cfg.id);
      if (!fel) return;
      var email = fel.querySelector(".gfield--type-email");
      var companyField = fel.querySelector(cfg.companySel + ".gfield--type-text") || fel.querySelector(cfg.companySel);
      if (!email || !companyField) return;
      companyField.after(email);
      var validationMessage = email.querySelector(".validation_message");
      if (validationMessage) {
        validationMessage.innerHTML = validationMessage.innerHTML.replace("The email address entered is invalid, please check the formatting (e.g. email@domain.com).", "Invalid email format.");
      }
    });
  }

  /** Legacy wrapper-based reorder when popup builder fragment IDs survive (safe to run with direct form reorder). */
  function brochureReorderBrochureEmailColumnsLegacy(modalRoot) {
    if (!modalRoot) return;
    [
      [".sgpb-popup-builder-content-6998, #sg-popup-content-wrapper-6998", "#gform_6", "#field_6_16"],
      ["#sg-popup-content-wrapper-6999", "#gform_4", "#field_4_16"],
      ["#sg-popup-content-wrapper-7500", "#gform_15", "#field_15_16"]
    ].forEach(function (parts) {
      var wrapper = parts[0];
      var formSel = parts[1];
      var companySel = parts[2];
      if (!modalRoot.querySelector(wrapper)) return;
      var fel = modalRoot.querySelector(formSel);
      if (!fel) return;
      var email = fel.querySelector(".gfield--type-email");
      var companyField = fel.querySelector(companySel + ".gfield--type-text") || fel.querySelector(companySel);
      if (!email || !companyField) return;
      companyField.after(email);
      var validationMessage = email.querySelector(".validation_message");
      if (validationMessage) {
        validationMessage.innerHTML = validationMessage.innerHTML.replace("The email address entered is invalid, please check the formatting (e.g. email@domain.com).", "Invalid email format.");
      }
    });
  }

  /**
   * FIELD ORDER ONLY — GF often finishes markup after gform_post_render; debugger delays hide that race.
   * Rerun cheaply whenever the popup subtree changes (debounced).
   */
  function spz3002ReorderEmailAfterLastName(form, lastNameSel) {
    if (!form) return;
    var emailField = form.querySelector(".gfield--type-email") || form.querySelector('[id$="_2"]');
    var lastNameField = form.querySelector(lastNameSel || '[id$="_16"]');
    if (emailField && lastNameField) lastNameField.after(emailField);
  }

  function brochureApplyFieldOrderInPopup(modal) {
    modal = spz3002BrochurePopupRoot() || modal;
    if (!modal) return;

    var gf6 = modal.querySelector(".sgpb-main-html-content-wrapper form#gform_6") || modal.querySelector("form#gform_6");
    var gf4 = modal.querySelector(".sgpb-main-html-content-wrapper form#gform_4") || modal.querySelector("form#gform_4");
    var gf15 = modal.querySelector(".sgpb-main-html-content-wrapper form#gform_15") || modal.querySelector("form#gform_15");

    spz3002ReorderEmailAfterLastName(gf6, "#field_6_16");
    spz3002ReorderEmailAfterLastName(gf4, "#field_4_16");
    spz3002ReorderEmailAfterLastName(gf15, "#field_15_16");

    if (gf15) {
      var companyName = gf15.querySelector('[id="field_15_17"]');
      var companyType = gf15.querySelector('[id="field_15_5"]');
      if (companyName && companyType) companyName.after(companyType);
    }

    if (gf6) {
      var giJob = gf6.querySelector("#field_6_22");
      var giCo = gf6.querySelector("#field_6_5");
      if (giJob && giCo) giCo.insertAdjacentElement("afterend", giJob);
    }

    if (gf15) {
      var connJob = gf15.querySelector("#field_15_25");
      var connCo = gf15.querySelector("#field_15_5");
      if (connJob && connCo) connCo.insertAdjacentElement("afterend", connJob);
    }

    if (gf4) {
      var assetJob = gf4.querySelector("#field_4_24");
      var assetCo = gf4.querySelector("#field_4_5");
      if (assetJob && assetCo) assetCo.insertAdjacentElement("afterend", assetJob);
    }

    brochureReorderBrochureEmailColumns(modal);
    brochureReorderBrochureEmailColumnsLegacy(modal);
  }

  function spz3002PollBrochureFieldOrderUntilDone() {
    var attempts = 0;
    var MAX = 100;
    var timer = window.setInterval(function () {
      attempts += 1;
      var modal = spz3002BrochurePopupRoot();
      if (!modal || !modal.querySelector("form#gform_6")) {
        if (attempts >= MAX) window.clearInterval(timer);
        return;
      }
      if (!spz3002PopupShouldDeferFieldReorder(modal)) {
        brochureApplyFieldOrderInPopup(modal);
        handleSelectHasValueClass();
        spz3002SyncBrochureFloatingLabels(modal);
      }
      if (!spz3002Gform6FieldOrderPending(modal) || attempts >= MAX) {
        window.clearInterval(timer);
      }
    }, 200);
  }

  /** GF AJAX may repaint after our reorder; rerun enhancements over a longer tail than a single frame. */
  function brochureScheduleDomEnhancementPasses() {
    var delays = [0, 32, 100, 200, 380, 700, 1200, 2000, 3500];
    delays.forEach(function (ms) {
      window.setTimeout(function () {
        brochureFormDomEnhancements();
        updateSpz3002PopupFilledState();
      }, ms);
    });
  }


  function spz3002EnsurePopupFieldOrderObserver() {
    if (window.__SPZ3002_FIELD_ORDER_OBS__) return;
    window.__SPZ3002_FIELD_ORDER_OBS__ = true;

    var debounceTimer = null;
    var DEBOUNCE_MS = 160;

    function applyReorderAfterStableFrame() {
      if (!spz3002IsVariantActive()) return;
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          var modal = spz3002BrochurePopupRoot();
          if (!modal || !modal.querySelector('form[id^="gform_"]')) return;
          spz3002MaybeApplyFieldReorder(modal);
        });
      });
    }

    function scheduleReorder() {
      if (!spz3002IsVariantActive()) return;
      if (debounceTimer) window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(function () {
        debounceTimer = null;
        applyReorderAfterStableFrame();
      }, DEBOUNCE_MS);
    }

    function observePopupModal(popupModal) {
      if (!popupModal || popupModal.__spz3002FieldOrderSubtreeObs) return;
      popupModal.__spz3002FieldOrderSubtreeObs = true;
      try {
        var mo = new MutationObserver(function () {
          scheduleReorder();
        });
        mo.observe(popupModal, { childList: true, subtree: true });
      } catch (e) {}
    }

    try {
      var bootMo = new MutationObserver(function () {
        var wrapper = document.querySelector(".spz_3002_v #sgpb-popup-dialog-main-div-wrapper");
        if (wrapper) observePopupModal(wrapper);
        var m = spz3002BrochurePopupRoot();
        if (m) observePopupModal(m);
      });
      bootMo.observe(document.documentElement, { childList: true, subtree: true });
    } catch (e) {}

    var wrapperFirst = document.querySelector(".spz_3002_v #sgpb-popup-dialog-main-div-wrapper");
    if (wrapperFirst) observePopupModal(wrapperFirst);
    var first = spz3002BrochurePopupRoot();
    if (first) observePopupModal(first);
  }

  function brochureFormDelegatedListenersOnce() {
    if (window.__SPZ3002_BROCHURE_DELEGATES__) return;
    window.__SPZ3002_BROCHURE_DELEGATES__ = true;

    document.addEventListener("click", function (e) {
      const closeIcon = e.target.closest(".spz_close_icon");
      if (!closeIcon) return;
      const wrapper = closeIcon.parentElement;
      const closeImg = wrapper && wrapper.querySelector('img[title="Close"]');
      if (closeImg) closeImg.click();
    });

    document.addEventListener(
      "input",
      function (e) {
        if (!spz3002IsVariantActive()) return;
        var tgt = e.target;
        if (spz3002PopupFilledInputMatches(tgt)) updateSpz3002PopupFilledState();
        if (tgt && tgt.tagName === "SELECT" && tgt.closest("#sgpb-popup-dialog-main-div")) {
          spz3002SyncSelectHasValueClass(tgt);
        }
      },
      true
    );
    document.addEventListener(
      "change",
      function (e) {
        if (!spz3002IsVariantActive()) return;
        var tgt = e.target;
        if (spz3002BrochureModalControlMatches(tgt)) {
          spz3002BrochureGfieldLabelState(tgt);
        }
        if (spz3002PopupFilledInputMatches(tgt)) updateSpz3002PopupFilledState();
        if (tgt && tgt.tagName === "SELECT") spz3002SyncSelectHasValueClass(tgt);
      },
      true
    );

    document.addEventListener("animationstart", function (e) {
      if (e.animationName === "autofill-start") {
        updateSpz3002PopupFilledState();
      }
    });

    document.addEventListener("focusin", function (e) {
      if (!spz3002IsVariantActive()) return;
      var tgt = e.target;
      if (spz3002BrochureModalControlMatches(tgt)) {
        var gBo = tgt.closest(".gfield");
        if (gBo) gBo.classList.add("active", "focused", "spz_input_focus");
        return;
      }
      if (spz3002PopupFilledInputMatches(tgt)) {
        var gPl = tgt.closest(".gfield");
        if (gPl) gPl.classList.add("spz_input_focus");
      }
    });

    document.addEventListener("focusout", function (e) {
      if (!spz3002IsVariantActive()) return;
      var tgt = e.target;
      if (spz3002BrochureModalControlMatches(tgt)) {
        spz3002BrochureGfieldLabelState(tgt);
        if (tgt.tagName === "SELECT") spz3002SyncSelectHasValueClass(tgt);
        return;
      }
      if (spz3002PopupFilledInputMatches(tgt)) {
        const gfield = tgt.closest(".gfield");
        if (gfield) {
          gfield.classList.remove("spz_input_focus");
          if (tgt.value.trim() !== "") {
            gfield.classList.add("spz_input_filled");
          } else {
            gfield.classList.remove("spz_input_filled");
          }
        }
      } else if (tgt && tgt.tagName === "SELECT" && tgt.closest("#sgpb-popup-dialog-main-div")) {
        spz3002SyncSelectHasValueClass(tgt);
      }
    });
  }

  function isWhyCanoePage() {
    var body = spz3002Body();
    return window.location.pathname.includes("why-canoe-intelligence") || !!(body && body.classList.contains("why-canoe-intelligence"));
  }

  function isWhyCanoeInfoPage() {
    const normalizedPath = window.location.pathname.replace(/\/$/, "");
    return window.location.hostname === "info.canoeintelligence.com" && normalizedPath === "/why-canoe-intelligence";
  }

  function spz3002DemoCountrySelect() {
    return document.querySelector(".spz_3002_v .form_wrapper form#gform_3 #field_3_23 select") || document.querySelector(".spz_3002_v #sg-popup-content-wrapper-6993 form#gform_3 #field_3_23 select");
  }

  function spz3002DemoStateField() {
    return document.querySelector(".spz_3002_v .form_wrapper form#gform_3 #field_3_18") || document.querySelector(".spz_3002_v #sg-popup-content-wrapper-6993 form#gform_3 #field_3_18");
  }

  function spz3002DemoStateSelect() {
    const stateField = spz3002DemoStateField();
    return stateField ? stateField.querySelector("select") : null;
  }

  function updateStatePlaceholder() {
    if (isWhyCanoePage()) return;

    const stateSelect = spz3002DemoStateSelect();
    const firstOption = stateSelect ? stateSelect.querySelector("option:first-child") : null;
    if (firstOption && firstOption.textContent !== "State") {
      const stateContainer = spz3002DemoStateField();

      if (stateSelect && stateContainer && stateSelect.value !== "" && stateSelect.value !== "State") {
        stateContainer.classList.add("active");
      }

      firstOption.textContent = "State";
    }
  }

  function updateSelectState() {
    const countrySelect = spz3002DemoCountrySelect();

    if (countrySelect) {
      // Run once on page load (with slight delay to allow rendering)
      setTimeout(updateStatePlaceholder, 10);

      // Run again on change of country
      if (!countrySelect.dataset.spzCountryChangeBound) {
        countrySelect.dataset.spzCountryChangeBound = "1";
        countrySelect.addEventListener("change", function (event) {
          setTimeout(function () {
            if (event.target.value === "United States" && !isWhyCanoeInfoPage()) {
              const stateField = spz3002DemoStateField();
              const stateLabel = stateField?.querySelector("label");
              if (stateLabel) stateLabel.textContent = "State";
            }
          }, 100);

          const stateSelect = spz3002DemoStateSelect();
          const stateContainer = spz3002DemoStateField();
          if (stateSelect && stateContainer && stateSelect.value !== "" && stateSelect.value !== "State") {
            stateContainer.classList.add("active");
          }
          setTimeout(updateStatePlaceholder, 10);
        });
      }
    }
  }

  function brochureFormDomEnhancements() {
    var modal = spz3002BrochurePopupRoot();
    if (!modal) return;
    if (!modal.querySelector("form#gform_6, form#gform_4, form#gform_15")) return;

    ensureBrochurePopupChrome();
    updateSelectState();

    modal.querySelectorAll('form[id^="gform_"] .gfield label').forEach(function (label) {
      var labelText = label.textContent.trim().replace(/\*/g, "").replace(/\s+/g, "-").toLowerCase();

      var gf = label.closest(".gfield");
      if (gf) gf.classList.add(labelText);
    });

    spz3002SyncBrochureFloatingLabels(modal);
    spz3002MaybeApplyFieldReorder(modal);

    document
      .querySelectorAll(
        ".spz_3002_v #sgpb-popup-dialog-main-div:has(.sgpb-popup-builder-content-7500) h2.gform_title," +
          ".spz_3002_v #sgpb-popup-dialog-main-div:has(.sgpb-popup-builder-content-6998) h2.gform_title," +
          ".spz_3002_v #sgpb-popup-dialog-main-div:has(#sg-popup-content-wrapper-6999) h2.gform_title"
      )
      .forEach(function (ele) {
        ele.textContent = "Download the Canoe Brochure";
      });

    modal.querySelectorAll("#field_6_5 select option:first-child, #field_15_5 select option:first-child, #field_4_5 select option:first-child").forEach(function (ele) {
      ele.textContent = "Company Type*";
    });

    modal.querySelectorAll("#field_15_25 select option:first-child, #field_4_24 select option:first-child, #field_6_22 select option:first-child").forEach(function (option) {
      option.textContent = "Your Job Function*";
      let gfield = option.closest(".gfield");
      option.closest(".gfield").querySelector(".gfield_label").textContent = "Your Job Function*";
    });

    handleSelectHasValueClass();
    handleErrorState();
    updateSpz3002PopupFilledState();
    window.setTimeout(updateSpz3002PopupFilledState, 120);
    spz3002SyncBrochureFloatingLabels(modal);
    window.setTimeout(function () {
      spz3002SyncBrochureFloatingLabels(modal);
    }, 140);
  }

  function brochureFormChanges() {
    brochureFormDelegatedListenersOnce();
    brochureFormDomEnhancements();
    brochureScheduleDomEnhancementPasses();
    spz3002PollBrochureFieldOrderUntilDone();
    window.setTimeout(function () {
      var modal = spz3002BrochurePopupRoot();
      if (modal) spz3002MaybeApplyFieldReorder(modal, 0);
      brochureFormDomEnhancements();
      updateSpz3002PopupFilledState();
    }, 450);
  }

  function spz3002BindGformPostRender() {
    var attempts = 0;
    function attach() {
      if (!window.jQuery) {
        attempts += 1;
        if (attempts < 100) window.setTimeout(attach, 50);
        return;
      }
      window.jQuery(document).off("gform_post_render.spz3002");
      if (!window.__SPZ3002_JQUERY_SELECT_SYNC__) {
        window.__SPZ3002_JQUERY_SELECT_SYNC__ = true;
        window.jQuery(document).on("change.spz3002select", "#sgpb-popup-dialog-main-div select", function () {
          if (!spz3002IsVariantActive()) return;
          spz3002BrochureGfieldLabelState(this);
          spz3002SyncSelectHasValueClass(this);
        });
      }
      window.jQuery(document).on("gform_post_render.spz3002", function (_event, formId) {
        if (!spz3002IsVariantActive()) return;
        if (formId === 3) return;
        if ([4, 6, 15].indexOf(Number(formId)) === -1) return;
        var modal = spz3002BrochurePopupRoot();
        if (!modal || !modal.querySelector("form#gform_" + formId)) return;
        brochureFormDelegatedListenersOnce();
        brochureScheduleDomEnhancementPasses();
        spz3002PollBrochureFieldOrderUntilDone();
      });
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", attach);
    } else {
      attach();
    }
  }
  spz3002BindGformPostRender();
  spz3002EnsurePopupFieldOrderObserver();


  window.addEventListener('click', (e) => {
    const secondaryCta = e.target.closest('.spz-3002-hero-cta-secondary');
    if (secondaryCta) {
      e.preventDefault();
      const brochureBtn = document.querySelector('#row1 .btn.btn-aurora');
      if (brochureBtn) brochureBtn.click();
      setTimeout(function () {
        brochureFormChanges();
      }, 500);
    }
    const heroCta = e.target.closest('.spz-3002-hero-cta');
    if (heroCta) {
      e.preventDefault();
      openDemoPopup();
    }

    if (e.target.closest('.close-popup')) {
      e.preventDefault();
      document.querySelector('.sgpb-popup-close-button-2').click();
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