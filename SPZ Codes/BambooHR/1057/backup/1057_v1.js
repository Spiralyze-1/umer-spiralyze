// #1057 | BambooHR | Homepage | AI Section (redesign) — Features Accordion (VARIANT)

(function () {
  'use strict';

  /* ===== Config ===== */
  const CONFIG = {
    debug: false,
    experiment: '1057',
    bodyClass: 'spz_1057_v',
    rootAttribute: 'data-spz-exp',
    urlPath: '/',
    sectionsSelector: '#main-content > .section', // 3rd one is the injection anchor
    targetIndex: 3, // ".section[3]" -> zero-based index 2
    controlHiddenClass: 'spz-ai-control-hidden',
    waitTimeout: 15000,
    progressKeyframe: 'spz-ai-progress', // keep in sync with code.css (8s linear)
    learnMoreUrl: 'https://www.bamboohr.com/platform/ai',
    demoFallbackUrl: 'https://www.bamboohr.com/signup/',
    lottieScriptUrl: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.0/lottie.min.js'
  };

  // Namespaced logger — flip CONFIG.debug to reveal the full lifecycle
  const log = (...args) => { if (CONFIG.debug) console.log('[SPZ-1057]', ...args); };

  /* ===== Content ===== */
  const ASSETS = {
    badge: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1057/bambii_ai.png',
    bg: {
      mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1057/360_bg.png',
      tablet: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1057/768_bg.png',
      desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1057/1440_bg.png',
      wide: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/1057/1920_bg.png'
    },
    // Lottie placeholder JSONs (raw) — swap these for the final animations when ready
    lottieBase: 'https://res.cloudinary.com/spiralyze/raw/upload/bamboohr/1057/animations/'
  };

  const CONTENT = {
    headingDesktop: 'AI-powered HR operations',
    demoCtaText: 'Get a Demo',
    learnCtaText: 'Learn more',
    features: [
      {
        title: 'Instant answers to HR questions',
        description: 'Ask complex questions about your workforce. Get answers, charts, and reports in seconds. See recommendations on what to analyze next.',
        lottie: ASSETS.lottieBase + 'Instant_answers_to_HR_questions-card_1.json',
        lottieMobile: ASSETS.lottieBase + 'Instant_answers_to_HR_questions_card_mob.json'
      },
      {
        title: 'Automated routine admin',
        description: 'AI auto-generates schedules. Send recognition, anniversary, and other company messages. Automate payroll reminders. And more.',
        lottie: ASSETS.lottieBase + 'Automated_routine_admin-card_1.json',
        lottieMobile: ASSETS.lottieBase + 'Automated-routine-admin-card_mob.json'
      },
      {
        title: 'Workforce performance monitoring',
        description: 'Flag performance inconsistencies and unusual patterns. Spot potential burnout and turnover. Get next step recommendations.',
        lottie: ASSETS.lottieBase + 'Workforce_performance_monitoring-card_1.json',
        lottieMobile: ASSETS.lottieBase + 'Workforce_performance_monitoring_card_mob.json'
      },
      {
        title: 'Tech stack integrations',
        description: "Integrate Bamboo AI into Claude, ChatGPT, and Slack. Approve time-off, send review reminders, and ask who's out from your existing tools.",
        lottie: ASSETS.lottieBase + 'Tech_stack_integrations-card_1.json',
        lottieMobile: ASSETS.lottieBase + 'Tech_stack_integrations_card_mob.json'
      }
    ]
  };

  /* ===== Helpers ===== */

  // Resolve the Nth matching ".section" child, then run the observer callback
  const waitForTarget = (callback) => {
    const resolve = () => {
      const sections = document.querySelectorAll(CONFIG.sectionsSelector);
      if (sections.length > CONFIG.targetIndex) {
        callback(sections[CONFIG.targetIndex]);
        return true;
      }
      return false;
    };
    if (resolve()) return;
    log('waiting for injection anchor');
    const observer = new MutationObserver(() => { if (resolve()) observer.disconnect(); });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    // Fail-safe: stop watching after the timeout so we never leak an observer
    setTimeout(() => observer.disconnect(), CONFIG.waitTimeout);
  };

  // Find the site's existing "Get a Demo" trigger (so our CTA opens the same modal)
  const findExistingDemoTrigger = () => {
    const ownSelector = `[${CONFIG.rootAttribute}="${CONFIG.experiment}"]`;
    const candidates = document.querySelectorAll('a, button');
    for (const candidate of candidates) {
      if (candidate.closest(ownSelector)) continue;
      const label = (candidate.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      if (label.includes('get a demo') || label.includes('free demo') || label === 'demo') return candidate;
    }
    return null;
  };

  // Load bodymovin once, then run the callback when it is ready
  const loadLottieLibrary = (onReady) => {
    if (window.lottie) { onReady(); return; }
    const existing = document.querySelector('script[data-spz-1057-lottie]');
    if (existing) { existing.addEventListener('load', onReady); return; }
    const script = document.createElement('script');
    script.src = CONFIG.lottieScriptUrl;
    script.setAttribute('data-spz-1057-lottie', '');
    script.addEventListener('load', onReady);
    document.head.appendChild(script);
  };

  // Mobile breakpoint matches the section CSS (max-width: 767.98px)
  const mobileMedia = window.matchMedia('(max-width: 767.98px)');

  // Desktop path by default; mobile devices use the dedicated lottieMobile JSON
  const lottiePathFor = (container) => (
    mobileMedia.matches && container.dataset.lottieMobile
      ? container.dataset.lottieMobile
      : container.dataset.lottie
  );

  // Mount each feature's Lottie animation (auto-play + loop, as the media is never clickable)
  const initLottieAnimations = (root) => {
    const containers = root.querySelectorAll('.spz-ai-media-inner[data-lottie]');
    if (!containers.length) return;
    loadLottieLibrary(() => {
      if (!window.lottie) { log('lottie library unavailable'); return; }

      const mount = (container) => {
        const path = lottiePathFor(container);
        if (container.dataset.lottieActive === path && container._spzLottie) return;
        if (container._spzLottie) {
          container._spzLottie.destroy();
          container._spzLottie = null;
          container.innerHTML = '';
        }
        container.dataset.lottieActive = path;
        container._spzLottie = window.lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path
        });
      };

      containers.forEach(mount);
      const onBreakpoint = () => containers.forEach(mount);
      if (mobileMedia.addEventListener) mobileMedia.addEventListener('change', onBreakpoint);
      else mobileMedia.addListener(onBreakpoint);
    });
  };

  /* ===== HTML builders ===== */

  // Plus / minus / progress-ring glyphs that swap per accordion state
  const plusIconHTML = `
    <span class="spz-ai-icon-plus">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9.25" stroke="rgba(255,255,255,0.4)"></circle>
        <path d="M10 6v8M6 10h8" stroke="#FFFFFF" stroke-linecap="round"></path>
      </svg>
    </span>`;

  const minusIconHTML = `
    <span class="spz-ai-icon-minus">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9.25" stroke="rgba(255,255,255,0.4)"></circle>
        <path d="M6 10h8" stroke="#FFFFFF" stroke-linecap="round"></path>
      </svg>
    </span>`;

  const ringIconHTML = `
    <span class="spz-ai-icon-ring">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle class="spz-ai-ring-track" cx="10" cy="10" r="9"></circle>
        <circle class="spz-ai-ring-fill" cx="10" cy="10" r="9"></circle>
      </svg>
    </span>`;

  // One accordion feature: clickable header + its (non-clickable) animated media panel
  const featureItemHTML = (feature, index) => `
    <div class="spz-ai-item${index === 0 ? ' is-open' : ''}" data-index="${index}">
      <button class="spz-ai-head" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span class="spz-ai-icon">
          ${plusIconHTML}
          ${ringIconHTML}
          ${minusIconHTML}
        </span>
        <span class="spz-ai-text">
          <span class="spz-ai-title">${feature.title}</span>
          <span class="spz-ai-desc">${feature.description}</span>
        </span>
      </button>
      <div class="spz-ai-media" aria-hidden="true">
        <div class="spz-ai-media-inner" data-lottie="${feature.lottie}" data-lottie-mobile="${feature.lottieMobile}" role="img" aria-label="${feature.title}"></div>
      </div>
    </div>`;

  // Responsive background painting (desktop-first <picture>)
  const backgroundHTML = () => `
    <picture class="spz-ai-bg" aria-hidden="true">
      <source media="(max-width: 767.98px)" srcset="${ASSETS.bg.mobile}">
      <source media="(max-width: 1023.98px)" srcset="${ASSETS.bg.tablet}">
      <source media="(min-width: 1920px)" srcset="${ASSETS.bg.wide}">
      <img src="${ASSETS.bg.desktop}" alt="AI scetion background" loading="lazy">
    </picture>`;

  // The whole injected section
  const sectionHTML = () => `
    <div class="spz-ai-section" ${CONFIG.rootAttribute}="${CONFIG.experiment}">
      ${backgroundHTML()}
      <div class="spz-ai-inner">
        <div class="spz-ai-heading">
          <img class="spz-ai-badge" src="${ASSETS.badge}" alt="Bamboo AI" width="143" height="32" loading="lazy">
          <h2 class="spz-ai-title-wrap">
            <span class="spz-ai-title-desktop">${CONTENT.headingDesktop}</span>
          </h2>
        </div>
        <div class="spz-ai-body">
          <div class="spz-ai-list">
            ${CONTENT.features.map(featureItemHTML).join('')}
          </div>
        </div>
        <div class="spz-ai-ctas">
          <p class="button-container"><a href="javascript:void(0)" title="Get a Demo" class="accent spz-ai-cta-demo spz-1057-ai-demo-cta" data-path="/fragments/modals/demo" data-url="https://www.bamboohr.com/fragments/modals/demo" data-modal="#demo-modal" data-qa="cta-action">${CONTENT.demoCtaText}</a></p>
          <a class="spz-ai-cta-learn spz-1057-ai-learn-cta" href="${CONFIG.learnMoreUrl}">${CONTENT.learnCtaText}</a>
        </div>
      </div>
    </div>`;

  /* ===== Behavior ===== */

  // Primary CTA -> open the site's existing demo modal in the same tab (fallback: navigate)
  const openDemoModal = (event) => {
    event.preventDefault();
    const existing = findExistingDemoTrigger();
    if (existing) { log('demo trigger clicked'); existing.click(); return; }
    log('demo trigger not found, navigating to fallback');
    window.location.href = CONFIG.demoFallbackUrl;
  };

  // Wire the CTAs (Learn more is a plain anchor, so only the demo button needs JS)
  const bindCtas = (section) => {
    const demoButton = section.querySelector('.spz-1057-ai-demo-cta');
    if (demoButton) demoButton.addEventListener('click', openDemoModal);
  };

  // Accordion + progress-bar controller
  const createAccordion = (section) => {
    const list = section.querySelector('.spz-ai-list');
    const items = Array.from(section.querySelectorAll('.spz-ai-item'));
    const state = { activeIndex: 0, isPlaying: false, isLocked: false };
    const canHover = window.matchMedia('(hover: hover)').matches;

    // Expand one feature, collapse the others (only 1 open at a time)
    const openFeature = (index) => {
      state.activeIndex = index;
      items.forEach((item, i) => {
        const isOpen = i === index;
        item.classList.toggle('is-open', isOpen);
        const head = item.querySelector('.spz-ai-head');
        if (head) head.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      log('open feature', index);
    };

    // Start the auto-advance progress bar (triggered by scroll position)
    const startProgress = () => {
      if (state.isLocked || state.isPlaying) return;
      state.isPlaying = true;
      section.classList.add('is-playing');
      log('progress started');
    };

    // Move to the next feature when a progress cycle completes
    const advance = () => {
      if (!state.isPlaying || state.isLocked) return;
      openFeature((state.activeIndex + 1) % items.length);
    };

    // Begin the bar once the section crosses the vertical center of the viewport
    const handleScroll = () => {
      if (state.isLocked || state.isPlaying) return;
      if (section.getBoundingClientRect().top <= window.innerHeight / 2) {
        startProgress();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Any click/tap takes manual control: stop + hide the bar for the whole page view
    const lockProgress = () => {
      state.isLocked = true;
      state.isPlaying = false;
      section.classList.remove('is-playing', 'is-paused');
      section.classList.add('is-locked');
      window.removeEventListener('scroll', handleScroll);
      log('progress locked');
    };

    // Expand whichever feature was clicked, then lock the progress bar
    const handleClick = (event) => {
      const item = event.target.closest('.spz-ai-item');
      if (!item || !list.contains(item)) return;
      openFeature(items.indexOf(item));
      lockProgress();
    };

    // Desktop-only: pause on hover, resume on leave
    const handleEnter = () => { if (state.isPlaying && !state.isLocked) section.classList.add('is-paused'); };
    const handleLeave = () => { section.classList.remove('is-paused'); };

    // The ring's CSS animation ending means a cycle finished -> advance
    const handleAnimationEnd = (event) => {
      if (event.animationName === CONFIG.progressKeyframe) advance();
    };

    list.addEventListener('click', handleClick);
    section.addEventListener('animationend', handleAnimationEnd);
    if (canHover) {
      items.forEach((item) => {
        item.addEventListener('mouseenter', handleEnter);
        item.addEventListener('mouseleave', handleLeave);
      });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // handle the case where it is already past center on load
  };

  /* ===== Inject + init ===== */

  // Hide the control section and drop our accordion in as a sibling
  const injectExperiment = (controlSection) => {
    if (document.querySelector(`[${CONFIG.rootAttribute}="${CONFIG.experiment}"]`)) {
      log('skip: section already present');
      return;
    }
    document.body.classList.add(CONFIG.bodyClass);
    controlSection.classList.add(CONFIG.controlHiddenClass);
    controlSection.insertAdjacentHTML('afterend', sectionHTML());
    const section = document.querySelector(`[${CONFIG.rootAttribute}="${CONFIG.experiment}"]`);
    if (!section) { log('inject failed'); return; }
    log('injected');
    createAccordion(section);
    // bindCtas(section);
    initLottieAnimations(section);
  };

  // Entry point: URL gate -> duplicate guard -> wait for anchor -> inject
  const init = () => {
    log('script start', location.href);
    if (window.location.pathname !== CONFIG.urlPath) { log('URL check failed', location.href); return; }
    log('URL check passed', location.href);
    if (document.querySelector(`[${CONFIG.rootAttribute}="${CONFIG.experiment}"]`)) { log('guard: existing section'); return; }
    waitForTarget(injectExperiment);
  };

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

    document.querySelector('.spz-ai-section').insertAdjacentHTML('afterend', `<div class="spz-ai-outer"></div>`);
    document.querySelector('.spz-ai-outer').appendChild(document.querySelector('.spz-ai-section'));
})();

/* ===== Downfunnel tracking (variant) ===== */
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = 'both'; // true / false / 'both'
  const expName = '1057'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `#1057_variant`; //variantName should be _variant, _true_control etc.
  const clientDomain = '.bamboohr.com'; //domain should be .spiralyze.com


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