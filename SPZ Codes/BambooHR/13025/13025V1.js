/* #13025 | BambooHR | Branded Landing Pages | Match Ad Copy (VARIANT) */

(function () {
  'use strict';

  /* ===== Config ===== */
  // Every selector, id, timing and tunable lives here â€” no magic values in the logic below.
  const CONFIG = {
    debug: false,
    experimentNumber: '13025',
    variantBodyClass: 'spz_13025_v',
    urlPath: '/pl-pages/bamboohr-software-basics',
    adParam: 'adid',                                              // matched case-insensitively against the UTM AdID
    headingSelector: '.columns.heading-color-white h1',
    subheadingSelector: '.columns.heading-color-white p:not(.button-container)',
    markerAttribute: 'data-spz-exp',                             // duplicate-injection guard hook
    rotateIntervalMs: 3000,                                      // AD2: swap headline every 3s
    rotateDurationMs: 500,                                       // must match the CSS transition duration
    waitTimeoutMs: 10000
  };

  // Namespaced logger â€” flip CONFIG.debug to reveal the full lifecycle in the console.
  const log = (...args) => { if (CONFIG.debug) console.log('[SPZ-13025]', ...args); };

  /* ===== Content ===== */
  // All per-ad copy keyed by UTM AdID. A dev can edit text/words here without touching any logic.
  const CONTENT = {
    // AD1 â€” Variant 1 "Cut HR Costs 40%" (static)
    '768768358462': {
      variantLabel: 'v1',
      headingHTML: `Reduce 80% of Routine Admin. <br><span class="spz-hero-accent">Cut HR Costs 40%</span>`,
      subheading: 'Create job posts in minutes. Auto-assign onboarding tasks. Automate payroll calculations. Streamline benefits enrollment. Consolidate employee data and generate reports. Scale HR operations.'
    },
    // AD2 â€” Variant 2 "Hiring and Onboarding" (animated headline, cycles every 3s)
    '710408408312': {
      variantLabel: 'v2',
      animated: true,
      headingLead: 'All-in-One HR Software',
      rotatingWords: [
        'Hiring and Onboarding',
        'Data and Reporting',
        'Time Tracking',
        'Payroll',
        'Benefits Enrollment',
        'Performance Management',
        'Compensation'
      ],
      subheading: 'Simplify and automate all routine HR from hire to retire.<br> Save 20 hours/week. Reduce costs 40%.'
    },
    // AD3 â€” Variant 3 "Automate HR Operations" (static, with eyebrow)
    '768723021783': {
      variantLabel: 'v3',
      eyebrow: 'All-in-One HR Platform',
      headingHTML: `Automate HR Operations. <span class="spz-hero-accent">Eliminate Repetitive Admin</span>`,
      subheading: 'Filter candidates. Auto-assign onboarding tasks. Run payroll faster with automated calculations. Streamline benefits enrollment and performance reviews. Generate reports in 1 click.'
    },
    // AD4 â€” Variant 4 "All-in-One HR Platform" (static)
    '768723021780': {
      variantLabel: 'v4',
      headingHTML: `<span class="spz-hero-accent">Reduce 80% of Routine Admin</span> With All-in-One HR Platform`,
      subheading: 'Create job posts in minutes. Auto-assign onboarding tasks. Automate time and payroll calculations. Streamline benefits enrollment. Consolidate employee data and generate reports. Scale HR operations.'
    }
  };

  /* ===== Helpers ===== */

  // True when we are on the branded landing page path.
  const isTargetUrl = () => window.location.pathname.includes(CONFIG.urlPath);

  // Reads the UTM AdID from the query string, matching the key case-insensitively.
  const getAdId = () => {
    const params = new URLSearchParams(window.location.search);
    for (const [key, value] of params.entries()) {
      if (key.toLowerCase() === CONFIG.adParam) return value;
    }
    return null;
  };

  // Duplicate-injection guard â€” scoped to THIS experiment only.
  const isAlreadyInjected = () => !!document.querySelector(`[${CONFIG.markerAttribute}="${CONFIG.experimentNumber}"]`);

  // Resolve once the selector exists (or after a fail-safe timeout) via MutationObserver.
  const waitForElement = (selector, timeout = CONFIG.waitTimeoutMs) => new Promise((resolve) => {
    const existing = document.querySelector(selector);
    if (existing) { resolve(existing); return; }
    const observer = new MutationObserver(() => {
      const found = document.querySelector(selector);
      if (!found) return;
      observer.disconnect();
      resolve(found);
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    // Fail-safe: stop observing and resolve with whatever exists so we never hang.
    setTimeout(() => {
      observer.disconnect();
      resolve(document.querySelector(selector));
    }, timeout);
  });

  /* ===== HTML builders ===== */

  // Static headline with a green accent span (Variants 1 & 4).
  const staticHeadingHTML = (variant) => variant.headingHTML;

  // Variant 3: uppercase eyebrow block sits above the static headline.
  const eyebrowHeadingHTML = (variant) => `
    <span class="spz-hero-eyebrow">${variant.eyebrow}</span>${variant.headingHTML}`;

  // Variant 2: white lead line + a clipping wrapper holding the single rotating green word.
  const animatedHeadingHTML = (variant) => `
    ${variant.headingLead}
    <span class="spz-hero-rotate"><span class="spz-hero-accent spz-hero-rotate-word">${variant.rotatingWords[0]}</span></span>`;

  // Picks the right headline builder for the matched variant.
  const buildHeadingHTML = (variant) => {
    if (variant.animated) return animatedHeadingHTML(variant);
    if (variant.eyebrow) return eyebrowHeadingHTML(variant);
    return staticHeadingHTML(variant);
  };

  /* ===== Behavior ===== */

  // Measure natural height of the rotate wrapper for a given word (at rest).
  // Restores prior inline height so CSS transitions can still run afterward.
  const measureRotateHeight = (rotateWrap, wordElement, text) => {
    const prevText = wordElement.textContent;
    const prevClass = wordElement.className;
    const prevHeight = rotateWrap.style.height;
    wordElement.className = 'spz-hero-accent spz-hero-rotate-word';
    wordElement.textContent = text;
    rotateWrap.style.height = 'auto';
    const height = rotateWrap.offsetHeight;
    wordElement.textContent = prevText;
    wordElement.className = prevClass;
    rotateWrap.style.height = prevHeight;
    return height;
  };

  // Swaps the rotating word: current word slides up & fades out, next enters from below.
  // Also animates .spz-hero-rotate height when copy wraps 1-line â†” 2-line.
  const swapRotatingWord = (wordElement, nextWord) => {
    const rotateWrap = wordElement.closest('.spz-hero-rotate');
    const fromHeight = rotateWrap ? rotateWrap.offsetHeight : 0;
    const toHeight = rotateWrap
      ? measureRotateHeight(rotateWrap, wordElement, nextWord)
      : 0;

    wordElement.classList.add('spz-hero-rotate-out');
    setTimeout(() => {
      wordElement.textContent = nextWord;
      wordElement.classList.remove('spz-hero-rotate-out');
      wordElement.classList.add('spz-hero-rotate-in');   // jump below with no transition

      if (rotateWrap && fromHeight !== toHeight) {
        rotateWrap.style.height = fromHeight + 'px';
        void rotateWrap.offsetHeight;                   // lock start height
        rotateWrap.style.height = toHeight + 'px';       // CSS transitions to next line count
      }

      void wordElement.offsetWidth;                       // force reflow so the jump registers
      wordElement.classList.remove('spz-hero-rotate-in'); // release -> animates back to rest
    }, CONFIG.rotateDurationMs);
  };

  // Starts the AD2 headline cycle on a fixed interval.
  // Also keeps .spz-hero-rotate height in sync on window resize (1â†”2 line wrap).
  const startHeadingRotation = (variant) => {
    const wordElement = document.querySelector('.spz-hero-rotate-word');
    if (!wordElement) return;
    const rotateWrap = wordElement.closest('.spz-hero-rotate');
    if (!rotateWrap) return;

    const syncRotateHeight = (animate) => {
      const fromHeight = rotateWrap.offsetHeight;
      const nextHeight = measureRotateHeight(rotateWrap, wordElement, wordElement.textContent);
      if (fromHeight === nextHeight) {
        rotateWrap.style.height = nextHeight + 'px';
        return;
      }
      if (!animate) {
        rotateWrap.style.transition = 'none';
        rotateWrap.style.height = nextHeight + 'px';
        void rotateWrap.offsetHeight;
        rotateWrap.style.transition = '';
        return;
      }
      rotateWrap.style.height = fromHeight + 'px';
      void rotateWrap.offsetHeight;
      rotateWrap.style.height = nextHeight + 'px';
    };

    // Pin starting height so the first 1â†”2 line swap can transition from a known value.
    syncRotateHeight(false);

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => syncRotateHeight(true), 100);
    });

    let activeIndex = 0;
    setInterval(() => {
      activeIndex = (activeIndex + 1) % variant.rotatingWords.length;
      swapRotatingWord(wordElement, variant.rotatingWords[activeIndex]);
    }, CONFIG.rotateIntervalMs);
    log('headline rotation started', variant.rotatingWords.length, 'words');
  };

  // Replaces the subheading copy (first non-button paragraph).
  const renderSubheading = (variant) => {
    const paragraph = document.querySelector(CONFIG.subheadingSelector);
    if (!paragraph) { log('subheading not found â€” skipped'); return; }
    paragraph.innerHTML = variant.subheading;
  };

  // Applies the matched variant: swap headline + subheading, mark the node, wire animation.
  const applyVariant = (variant, headingElement) => {
    if (isAlreadyInjected()) { log('re-check: already injected â€” skip'); return; }
    document.body.classList.add(CONFIG.variantBodyClass, CONFIG.variantBodyClass + variant.variantLabel.slice(1));
    headingElement.innerHTML = buildHeadingHTML(variant);
    renderSubheading(variant);
    headingElement.setAttribute(CONFIG.markerAttribute, CONFIG.experimentNumber);
    if (variant.animated) startHeadingRotation(variant);
    log('injected', variant.variantLabel);
  };

  /* ===== Init ===== */

  const init = () => {
    log('script start', window.location.href);
    if (!isTargetUrl()) { log('URL check failed', window.location.pathname); return; }

    const adId = getAdId();
    const variant = adId ? CONTENT[adId] : null;
    if (!variant) { log('AdID not a target ad â€” control shown', adId); return; }
    if (isAlreadyInjected()) { log('already injected â€” skip'); return; }

    log('URL + AdID matched', adId, variant.variantLabel);
    waitForElement(CONFIG.headingSelector)
      .then((headingElement) => {
        if (!headingElement) { log('heading anchor not found â€” timeout'); return; }
        applyVariant(variant, headingElement);
      });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Fail-safe retries in case the hero renders late (guarded by the duplicate check).
  setTimeout(init, 1000);
  setTimeout(init, 2000);

})();

/* ===== Downfunnel tracking (variant) ===== */
(function() {
    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

    // Set the value of the squeezePage variable as needed:
    // true  â€“ if you are using a squeeze page (i.e., the page contains a form)
    // false â€“ if you are not using a squeeze page (i.e., the page does not contain a form)
    // 'both' â€“ if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

    const squeezePage = 'both'; // true / false / 'both'
  const expName = '13025'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName =`#`+ expName+ `_variant`  ; //variantName should be variant_, true_control_ etc.
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