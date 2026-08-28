/* ============================================================
 * Spiralyze A/B Test — #1006 | Greenlight Guru | Home
 * SPZ Baseline Hero + sliding "Get a demo" form modal (VARIANT)
 * ============================================================ */

(function () {
  'use strict';
  /* ---------------------------------------------------------
   * Config
   * ------------------------------------------------------- */
  const CONFIG = {
    bodyClass: 'spz_1006_v',
    selectors: {
      injectionTarget: 'main > span > div:first-child',
      hubspotForm: '.hs-form-private'
    },
    tracking: {
      experimentName: '1006',
      // TODO: add variant tracking value (e.g. 'SPZ_#1006_variant')
      variantValue: '',
      clientDomain: '.greenlight.guru',
      squeezePage: 'both' // true | false | 'both' — page has form + set cookie
    },
    assets: {
      rating:
        'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782397111/greenlightguru/1006/g2_stars_rating.svg',
      bulletIcons: [
        'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782397106/greenlightguru/1006/frame_427319842.svg',
        'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782397103/greenlightguru/1006/frame_427319840.svg',
        'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782397104/greenlightguru/1006/frame_427319841.svg'
      ],
      mediaDesktop:
        'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1006/ui-desktop.png',
      mediaTablet:
        'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1006/ui-tablet.png',
      mediaMobile:
        'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1006/ui-mobile.png',
      closeIcon:
        'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782397125/greenlightguru/1006/frame.svg'
    },
    bullets: [
      {
        lead: 'Medical device QMS.',
        rest: ' Automate training, CAPA, approvals, and more. Full audit trails. Track docs. FDA & ISO compliant.',
        alt: 'Medical device QMS'
      },
      {
        lead: 'Design and development.',
        rest: ' Generate a full DHF. Sync designs with inputs, outputs, reviews, etc. ISO 14971-compliant risk management.',
        alt: 'Design and development'
      },
      {
        lead: 'Clinical data management.',
        rest: ' Secure EDC platform. Drag-and-drop eCRFs. Mobile surveys. Compliant eConsent. Ad hoc data capture.',
        alt: 'Clinical data management'
      }
    ]
  };

  /* ---------------------------------------------------------
   * Utilities
   * ------------------------------------------------------- */
  const isHomepage = () => {
    const path = window.location.pathname.replace(/\/+$/, '');
    return path === '';
  };

  const waitForElement = (selector, callback, timeout = 15000) => {
    const existing = document.querySelector(selector);
    if (existing) {
      callback(existing);
      return;
    }
    const observer = new MutationObserver(() => {
      const found = document.querySelector(selector);
      if (found) {
        observer.disconnect();
        callback(found);
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    if (timeout) {
      window.setTimeout(() => observer.disconnect(), timeout);
    }
  };

  /* ---------------------------------------------------------
   * DEV: Tracking (cookie + hidden field) — change this to follow client's
   * ------------------------------------------------------- */
  (function () {
    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

    // Set the value of squeezePage variable as per your requirement:
    // true: if you are using squeeze page (If page has form)
    // false: if you are not using squeeze page (If page does not have form)
    // 'both': if you want to set cookie as well as hidden field value (If page has form and you also want to set cookie).

    const squeezePage = 'both'; // true / false / 'both'
    const expName = '1006'; //experiment name should be 1001, 1002, 1003 etc.
    const variantName = `spz_#` + expName + `_variant`; //variantName should be _variant, _true_control etc.
    const clientDomain = '.greenlight.guru'; //domain should be .spiralyze.com


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

  /* ---------------------------------------------------------
   * Markup builders (template literals only)
   * ------------------------------------------------------- */
  const bulletHTML = (bullet, index) => `
    <li class="spz-1006-hero-bullet">
      <img class="spz-1006-hero-bullet-icon" src="${CONFIG.assets.bulletIcons[index]}" alt="${bullet.alt}" aria-hidden="true" width="24" height="24">
      <p class="spz-1006-hero-bullet-text"><strong>${bullet.lead}</strong>${bullet.rest}</p>
    </li>`;

  const heroHTML = () => `
    <section class="spz-1006-hero spz-1006-section">
      <div class="spz-1006-hero-inner">
        <div class="spz-1006-hero-inner-row">
          <div class="spz-1006-hero-content">
            <div class="spz-1006-hero-heading">
              <img class="spz-1006-hero-rating" src="${CONFIG.assets.rating}" alt="Capterra rating 4.7 out of 5" width="255" height="26">
              <h1 class="spz-1006-hero-title"> <span class="spz-1006-hero-accent">50%</span> less time spent on audit prep. Streamline quality management, design & dev, and clinical trials.</h1>
            </div>
            <ul class="spz-1006-hero-bullets">
              ${CONFIG.bullets.map(bulletHTML).join('')}
            </ul>
            <form class="spz-1006-hero-form" novalidate>
              <input type="email" class="spz-1006-hero-input" placeholder="Work email" aria-label="Work email" autocomplete="email">
              <button type="submit" class="spz-1006-hero-cta">Get a Demo</button>
            </form>
          </div>
          <div class="spz-1006-hero-media">
            <picture class="spz-1006-hero-picture">
              <source media="(max-width: 767.98px)" srcset="${CONFIG.assets.mediaMobile}">
              <source media="(max-width: 1023.98px)" srcset="${CONFIG.assets.mediaTablet}">
              <img src="${CONFIG.assets.mediaDesktop}" alt="1006_UI" width="625" height="609">
            </picture>
          </div>
        </div>
      </div>
    </section>`;

  const modalHTML = () => `
    <div class="spz-1006-modal-overlay" role="dialog" aria-modal="true" aria-label="Get a demo">
      <div class="spz-1006-modal" data-step="1">
        <button type="button" class="spz-1006-modal-close" aria-label="Close">
          <img src="${CONFIG.assets.closeIcon}" alt="close icon" aria-hidden="true">
        </button>
        <h2 class="spz-1006-modal-title">Get a demo</h2>
        <div class="spz-1006-modal-formhost"></div>
      </div>
    </div>`;

  /* ---------------------------------------------------------
   * Modal open / close
   * ------------------------------------------------------- */
  let lockedScrollY = 0;
  let htmlClassObserver = null;

  const openModal = (prefillEmail) => {
    const overlay = document.querySelector('.spz-1006-modal-overlay');
    if (!overlay) return;
    const emailInput = document.querySelector('.spz-1006-modal .hs_email input');
    if (emailInput) {
      const field = emailInput.closest('.hs-form-field');
      if (prefillEmail) {
        emailInput.value = prefillEmail;
        emailInput.dispatchEvent(new Event('input', { bubbles: true }));
        if (field) field.classList.add('focus');
      } else if (field) {
        /* Hero email empty: open cleanly, never surface a validation error */
        // field.classList.remove('focus', 'typing');
        // field.querySelectorAll('.hs-error-msgs').forEach((node) => node.remove());
      }
    }
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    const html = document.documentElement;
    const htmlClasses = html.className;
    document.body.style.top = `-${lockedScrollY}px`;
    overlay.classList.add('spz-1006-modal-open');
    document.body.classList.add('spz-1006-no-scroll');
    html.className = htmlClasses;
    htmlClassObserver = new MutationObserver(() => {
      if (html.className !== htmlClasses) html.className = htmlClasses;
    });
    htmlClassObserver.observe(html, { attributes: true, attributeFilter: ['class'] });
  };

  const closeModal = () => {
    const overlay = document.querySelector('.spz-1006-modal-overlay');
    if (!overlay) return;
    if (htmlClassObserver) {
      htmlClassObserver.disconnect();
      htmlClassObserver = null;
    }
    overlay.classList.remove('spz-1006-modal-open');
    document.body.classList.remove('spz-1006-no-scroll');
    document.body.style.top = '';
    window.scrollTo(0, lockedScrollY);
  };

  const wireModalEvents = () => {
    // const overlay = document.querySelector('.spz-1006-modal-overlay');
    const closeButton = document.querySelector('.spz-1006-modal-close');
    if (closeButton) closeButton.addEventListener('click', closeModal);
    // if (overlay) {
    //   overlay.addEventListener('click', (event) => {
    //     if (event.target === overlay) closeModal();
    //   });
    // }
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
  };

  const wireHeroEvents = () => {
    const heroForm = document.querySelector('.spz-1006-hero-form');
    const heroInput = document.querySelector('.spz-1006-hero-input');
    if (!heroForm) return;
    heroForm.addEventListener('submit', (event) => {
      event.preventDefault();
      openModal(heroInput ? heroInput.value.trim() : '');
    });
  };

  /* ---------------------------------------------------------
   * HubSpot form: relocate into modal, reorder, style-hooks, steps
   * ------------------------------------------------------- */
  const setupForm = (form) => {
    if (form.dataset.spz1006Ready === '1') return;
    form.dataset.spz1006Ready = '1';

    const formHost = document.querySelector('.spz-1006-modal-formhost');
    if (formHost && form.parentElement !== formHost) {
      formHost.appendChild(document.querySelector('.op-wrapper.op-layout-1'));
    }

    const fieldsetOf = (selector) => {
      const element = form.querySelector(selector);
      return element ? element.closest('fieldset') : null;
    };

    const emailFieldset = fieldsetOf('.hs_email');
    const nameFieldset = fieldsetOf('.hs_firstname');
    const phoneFieldset = fieldsetOf('.hs_phone');
    const companyFieldset = fieldsetOf('.hs_company');
    const orgFieldset = fieldsetOf('.hs_what_describes_your_organization_best_');
    const softwareFieldset = fieldsetOf('.hs_demo_product_dropdown');
    const legalElement = form.querySelector('.legal-consent-container');
    const legalFieldset = legalElement ? legalElement.closest('fieldset') : null;
    const submitWrap = form.querySelector('.hs_submit');

    /* Group the country dropdown into the phone fieldset -> 2-column row */
    const countryField = form.querySelector('.hs_dropdown_country');
    if (phoneFieldset && countryField) {
      const countryWrap = countryField.closest('.hs-dependent-field') || countryField;
      const countryOriginalFieldset = countryField.closest('fieldset');
      phoneFieldset.appendChild(countryWrap);
      phoneFieldset.classList.remove('form-columns-1');
      phoneFieldset.classList.add('form-columns-2');
      if (
        countryOriginalFieldset &&
        countryOriginalFieldset !== phoneFieldset &&
        !countryOriginalFieldset.querySelector('.hs-form-field')
      ) {
        countryOriginalFieldset.remove();
      }
    }

    /* Visual order: email, name(2), phone+country(2), company, org, software, legal */
    [
      emailFieldset,
      nameFieldset,
      phoneFieldset,
      companyFieldset,
      orgFieldset,
      softwareFieldset,
      legalFieldset
    ].forEach((fieldset) => {
      if (fieldset && submitWrap) form.insertBefore(fieldset, submitWrap);
    });

    /* Fields only revealed on step 2 */
    [phoneFieldset, companyFieldset, orgFieldset, softwareFieldset].forEach((fieldset) => {
      if (fieldset) fieldset.classList.add('spz-1006-hidden-step');
    });

    /* Relabel to match design */
    const relabel = (selector, text) => {
      const label = form.querySelector(selector + ' label span:first-child');
      if (label) label.textContent = text;
    };
    relabel('.hs_phone', 'Phone');
    relabel('.hs_company', 'Company Name');
    relabel('.hs_what_describes_your_organization_best_', 'Organization Type');
    relabel('.hs_demo_product_dropdown', 'Choose Software for Demo');
    relabel('.hs_dropdown_country', 'Country');

    /* Empty out disabled placeholder options so floating labels act as placeholders */
    const clearDisabledOptions = () => {
      form.querySelectorAll('select option[disabled]').forEach((option) => {
        option.textContent = '';
      });
    };

    clearDisabledOptions();

    /* Floating-label state handling — delegated so HubSpot-injected fields
       (e.g. .hs_us_state after country select) also get focus/typing */
    const isFloatingInput = (element) =>
      element &&
      element.matches &&
      element.matches('input.hs-input, select.hs-input') &&
      element.type !== 'hidden' &&
      element.type !== 'submit';

    const refreshField = (element) => {
      const field = element.closest('.hs-form-field');
      if (!field) return;
      const hasValue = element.value != null && String(element.value).trim() !== '';
      if (hasValue) {
        field.classList.add('focus');
        field.classList.remove('typing');
      } else {
        field.classList.remove('focus', 'typing');
      }
    };

    const refreshAllFloatingFields = () => {
      form.querySelectorAll('input.hs-input, select.hs-input').forEach((element) => {
        if (isFloatingInput(element)) refreshField(element);
      });
    };

    form.addEventListener(
      'focus',
      (event) => {
        if (!isFloatingInput(event.target)) return;
        const field = event.target.closest('.hs-form-field');
        if (field) field.classList.add('focus', 'typing');
      },
      true
    );
    form.addEventListener(
      'blur',
      (event) => {
        if (!isFloatingInput(event.target)) return;
        refreshField(event.target);
      },
      true
    );
    form.addEventListener('input', (event) => {
      if (!isFloatingInput(event.target)) return;
      refreshField(event.target);
    });
    form.addEventListener('change', (event) => {
      if (event.target && event.target.matches && event.target.matches('select')) {
        window.setTimeout(() => {
          clearDisabledOptions();
          refreshAllFloatingFields();
        }, 50);
      }
      if (!isFloatingInput(event.target)) return;
      refreshField(event.target);
    });

    refreshAllFloatingFields();

    const formObserver = new MutationObserver(() => {
      clearDisabledOptions();
      refreshAllFloatingFields();
    });
    formObserver.observe(form, { childList: true, subtree: true });

    /* Auto-advance to step 2 as soon as the shown step-1 fields are filled
       (email + first name + last name), without needing a submit click */
    const maybeAdvanceToStepTwo = () => {
      const modal = document.querySelector('.spz-1006-modal');
      if (!modal || modal.getAttribute('data-step') === '2') return;
      const emailInput = form.querySelector('.hs_email input');
      const firstInput = form.querySelector('.hs_firstname input');
      const lastInput = form.querySelector('.hs_lastname input');
      const stepOneInputs = [emailInput, firstInput, lastInput].filter(Boolean);
      const allComplete =
        stepOneInputs.length === 3 &&
        stepOneInputs.every((input) => {
          const value = input.value != null ? String(input.value).trim() : '';
          return value !== '' && input.checkValidity();
        });
      if (allComplete) modal.setAttribute('data-step', '2');
    };

    [
      form.querySelector('.hs_email input'),
      form.querySelector('.hs_firstname input'),
      form.querySelector('.hs_lastname input')
    ]
      .filter(Boolean)
      .forEach((input) => {
        input.addEventListener('input', maybeAdvanceToStepTwo);
        input.addEventListener('change', maybeAdvanceToStepTwo);
        input.addEventListener('blur', maybeAdvanceToStepTwo);
      });

    /* Custom submit button controlling the 2-step flow */
    const handleModalSubmit = () => {
      const modal = document.querySelector('.spz-1006-modal');
      if (!modal) return;
      if (modal.getAttribute('data-step') !== '2') {
        const emailInput = form.querySelector('.hs_email input');
        const firstInput = form.querySelector('.hs_firstname input');
        const lastInput = form.querySelector('.hs_lastname input');
        const stepOneInputs = [emailInput, firstInput, lastInput].filter(Boolean);
        const invalidInput = stepOneInputs.find((input) => !input.checkValidity());
        if (invalidInput) {
          invalidInput.reportValidity();
          return;
        }
        modal.setAttribute('data-step', '2');
      } else {
        const nativeSubmit = form.querySelector('.hs_submit input[type="submit"]');
        if (nativeSubmit) nativeSubmit.click();
      }
    };

    const submitContainer = (submitWrap && submitWrap.querySelector('.actions')) || submitWrap;
    if (submitContainer && !form.querySelector('.spz-1006-modal-submit')) {
      const submitButton = document.createElement('button');
      submitButton.type = 'button';
      submitButton.className = 'spz-1006-modal-submit';
      submitButton.textContent = 'Submit';
      submitContainer.appendChild(submitButton);
      submitButton.addEventListener('click', handleModalSubmit);
    }

    const nativeSubmit = form.querySelector('.hs_submit input[type="submit"], .hs_submit input.hs-button');
    if (nativeSubmit) {
      nativeSubmit.value = 'Submit';
      nativeSubmit.classList.add('spz1006_v');
      const submitLabelObserver = new MutationObserver(() => {
        if (nativeSubmit.value !== 'Submit') nativeSubmit.value = 'Submit';
      });
      submitLabelObserver.observe(nativeSubmit, { attributes: true, attributeFilter: ['value'] });

      nativeSubmit.addEventListener('click', () => {
        const formHost = document.querySelector('.spz-1006-modal-formhost');
        if (!formHost) return;
        const successObserver = new MutationObserver(() => {
          if (formHost.querySelector('.submitted-message')) {
            successObserver.disconnect();
            closeModal();
          }
        });
        successObserver.observe(formHost, { childList: true, subtree: true });
      });
    }
  };

  /* ---------------------------------------------------------
   * Init
   * ------------------------------------------------------- */
  const init = (target) => {
    if (document.querySelector('.spz-1006-section')) return; // duplicate-injection guard
    target.innerHTML = heroHTML(); // replaceHTML — swap existing hero for the new one
    if (!document.querySelector('.spz-1006-modal-overlay')) {
      document.body.insertAdjacentHTML('beforeend', modalHTML());
    }
    wireModalEvents();
    wireHeroEvents();
    waitForElement(CONFIG.selectors.hubspotForm, setupForm);
  };

  if (!isHomepage()) return;

  waitForElement('body', (body) => {
    body.classList.add(CONFIG.bodyClass);
    init1003();
  });

  waitForElement(CONFIG.selectors.injectionTarget, init);

  //browser detection
  let userAgent = navigator.userAgent;
  let browser;
  if (userAgent.match(/edg/i)) {
    browser = "edge";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browser = "firefox";
  } else if (userAgent.match(/opr\//i)) {
    browser = "opera";
  } else if (userAgent.match(/chrome|chromium|crios/i)) {
    browser = "chrome";
  } else if (userAgent.match(/safari/i)) {
    browser = "safari";
  } else {
    //alert("Other browser");
  }
  document.querySelector('body').classList.add(browser);
})();

function init1003(){
  const bodyInterval1003 = setInterval(function () {
    if (document.querySelector("body")) {
      clearInterval(bodyInterval1003)
      const loadJS = (url, implementationCode, location) => {
        var scriptTag = document.createElement('script');
        scriptTag.src = url;

        scriptTag.onload = implementationCode;
        scriptTag.onreadystatechange = implementationCode;

        location.appendChild(scriptTag);
      };

      document.querySelector(' .u4m-content-cards').insertAdjacentHTML("beforebegin", `
        <div class="section-1-1003">
          <div class="wrapper-1003">
            <div class="title">Key Features</div>
            <div class="carousel-section">
              <div class="text">
                <div class="child active" data-index="1">
                  <div class="bar"><div class="line"></div></div>
                  <div class="carousel-title">
                    <span>Design and development</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Digitally manage your DDF with built-in traceability between design inputs, outputs, verifications, and product risk controls.</p>
                    <div class="button-wrapper">
                      <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Design and development" class="spz1003_design_development_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                    </div>
                    <div class="mobile-image">
                      <picture>
                      <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_13.webp">
                      <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-1.jpg" alt="Design and development" width="689" height="491">
                    </picture> 
                    </div>
                  </div>
                </div>
                <div class="child" data-index="2">
                  <div class="bar"><div class="line"></div></div>
                  <div class="carousel-title">
                    <span>Compliance and risk management</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Track and manage operational risk across your QMS – from regulatory requirements to audit readiness and CAPA trends.</p>
                    <div class="button-wrapper">
                      <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Compliance and risk management" class="spz1003_compliance_risk_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                    </div>
                    <div class="mobile-image">
                      <picture>
                      <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_17.webp">
                      <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-2.jpg"" alt="Compliance and risk management" width="689" height="491">
                    </picture> 
                    </div>
                  </div>
                </div>
                <div class="child" data-index="3">
                  <div class="bar"><div class="line"></div></div>
                  <div class="carousel-title">
                    <span>Documents and training management</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Control documents, changes, and training in one place – with automated routing, audit trails, and role-based access.</p>
                    <div class="button-wrapper">
                      <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Documents and training management" class="spz1003_document_training_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                    </div>
                      <div class="mobile-image">
                      <picture>
                        <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_12.webp">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-3.jpg" alt="Documents and training management" width="689" height="491">
                      </picture> 
                      </div>
                  </div>
                </div>
                <div class="child" data-index="4">
                  <div class="bar"><div class="line"></div></div>
                  <div class="carousel-title">
                    <span>Post-market quality events</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Log, track, and resolve quality events in a connected system that links CAPAs, training, and documentation.</p>
                    <div class="button-wrapper">
                      <a tabindex="-1"href="https://www.greenlight.guru/medical-device-software-demo" data-section="Post-market quality events" class="spz1003_quality_processes_events_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                    </div>
                      <div class="mobile-image">
                        <picture>
                        <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_16.webp">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-4.jpg" alt="Post-market quality events" width="689" height="491">
                      </picture> 
                    </div>
                  </div>
                </div>
                <div class="child" data-index="5">
                  <div class="bar"><div class="line"></div></div>
                  <div class="carousel-title">
                    <span>Clinical data management</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Capture compliant, audit-ready clinical data across every phase of your study - from first-in-human to post-market.</p>
                    <div class="button-wrapper">
                      <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Clinical data management" class="spz1003_clinical_data_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                    </div>
                      <div class="mobile-image">
                        <picture>
                        <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_15.webp">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-5.jpg" alt="Clinical data management" width="689" height="491">
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="child" data-index="6">
                  <div class="bar"><div class="line"></div></div>
                  <div class="carousel-title">
                    <span>AI built for medtech</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Automatically research across your QMS, summarize docs, draft change orders, verify requirements, and more.</p>
                    <div class="button-wrapper">
                      <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="AI built for medtech" class="spz1003_clinical_data_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                    </div>
                      <div class="mobile-image">
                        <picture>
                        <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-mobile-6.jpg">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-6.jpg" alt="AI built for medtech" width="689" height="491">
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="child" data-index="7">
                  <div class="bar"><div class="line"></div></div>
                  <div class="carousel-title">
                    <span>Software development and traceability</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="content">
                    <p>Manage IEC 62304, trace requirements to code commits and test results so compliance builds alongside development, not after it.</p>
                    <div class="button-wrapper">
                      <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Software development and traceability" class="spz1003_clinical_data_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                    </div>
                      <div class="mobile-image">
                        <picture>
                        <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-mobile-7.png">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_19.png" alt="Software development and traceability" width="689" height="491">
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div class="image">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-1.jpg" class="reference" alt="Design and development" width="776" height="553">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-1.jpg" class="hero active" data-index="1" alt="Design and development" width="776" height="553">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-2.jpg" class="hero" data-index="2" alt="Compliance and risk management" width="776" height="553">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-3.jpg" class="hero" data-index="3" alt="Documents and training management" width="776" height="553">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-4.jpg" class="hero" data-index="4" alt="Post-market quality events" width="776" height="553">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-5.jpg" class="hero" data-index="5" alt="Clinical data management" width="776" height="553">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-6.jpg" class="hero" data-index="6" alt="AI built for medtech" width="776" height="553">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_18.png" class="hero" data-index="7" alt="Software development and traceability" width="776" height="553">
              </div>
            </div>
          </div>
        </div>
      `)
      loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1759817061/greenlightguru/script/smooth-scroll.min.js', function () { }, document.body);

      const carouselTimer = 8000;
      let time = carouselTimer;
      let carouselInterval;
      let i = 0;
      let mouseLeaveTimeout;
      let initialPlay = true;
      const isSectionInView = (section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.top < window.innerHeight && // Section's top is visible in the viewport
          rect.bottom > 0 && // Section's bottom is visible in the viewport
          rect.left < window.innerWidth && // Section's left side is visible in the viewport
          rect.right > 0 // Section's right side is visible in the viewport
        );
      }
      const isSectionTopAt50Percent = (section) => {
        const rect = section.getBoundingClientRect();
        const halfScreen = window.innerHeight / 2;
        return rect.top <= halfScreen && rect.bottom > 0;
      };
      const closedCarouselAnimation = (curActiveElement) => {
        const curHeight = document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').offsetHeight;
        document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').classList.remove("active")
        document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').removeAttribute("style")
        const afterHeight = document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').offsetHeight;
        document.querySelector(' .section-1-1003 .carousel-section .hero[data-index="' + curActiveElement + '"]').classList.remove("active")
        document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').style.height = curHeight + "px"
        // adding tabindex to current button
        document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').querySelector('.button-wrapper a').setAttribute("tabindex", "-1");
        setTimeout(function () {
          document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').style.height = afterHeight + "px"
        }, 1)
        setTimeout(function () {
          document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').removeAttribute("style")
        }, 501)
      }
      const playNextCarousel = () => {
        const curActiveElement = parseInt(document.querySelector(' .section-1-1003 .carousel-section .text .active').getAttribute("data-index"));
        // to add animation when closed
        closedCarouselAnimation(curActiveElement)

        if (curActiveElement < 7) {
          nextActive = curActiveElement + 1;
        } else {
          nextActive = 1;
        }
        document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + nextActive + '"]').classList.add("active")
        document.querySelector(' .section-1-1003 .carousel-section .hero[data-index="' + nextActive + '"]').classList.add("active")
        playCarousel()

      }
      const adjustContentHeight = () => {
        const curActiveElementIndex = document.querySelector(' .section-1-1003 .carousel-section .text .active').getAttribute("data-index");
        const curActiveElement = document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElementIndex + '"]');
        const fullHeight = curActiveElement.offsetHeight;
        curActiveElement.classList.remove("active")
        const prevHeight = curActiveElement.offsetHeight
        curActiveElement.classList.add("active")
        curActiveElement.style.height = prevHeight + "px";
        setTimeout(function () {
          curActiveElement.style.height = fullHeight + "px";
        }, 1)
        // removing tabindex from current button
        curActiveElement.querySelector('.button-wrapper a').removeAttribute("tabindex");

      }

      const setHeightOnResize = () => {
        const curActiveElementIndex = document.querySelector(' .section-1-1003 .carousel-section .text .active').getAttribute("data-index");
        const curActiveElement = document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElementIndex + '"]');
        const prevHeight = curActiveElement.offsetHeight
        curActiveElement.removeAttribute("style")
        const fullHeight = curActiveElement.offsetHeight;
        curActiveElement.style.height = prevHeight + "px";
        setTimeout(function () {
          curActiveElement.style.height = fullHeight + "px";
        }, 1)
      }
      const playCarousel = () => {
        const curActiveElement = document.querySelector(' .section-1-1003 .carousel-section .text .active').getAttribute("data-index");
        document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line').style.opacity = 1;
        if (initialPlay == false) {
          adjustContentHeight();
        }
        initialPlay = false;
        carouselInterval = setInterval(function () {
          document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line').style.width = "" + ((i / time) * 100) + "%";
          // reach end
          if (i > time) {
            clearInterval(carouselInterval)
            document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line').style.opacity = 0;
            document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line').style.width = "0px";
            i = 0;
            playNextCarousel()
          }
          i += 200;
        }, 200)
      }

      //event listener 
      document.querySelector(' .section-1-1003 .carousel-section').addEventListener('mouseenter', function () {
        if (!navigator.maxTouchPoints) {
          clearInterval(carouselInterval);
          clearTimeout(mouseLeaveTimeout)
        }
      });

      document.querySelector(' .section-1-1003 .carousel-section').addEventListener('mouseleave', function () {
        if (!navigator.maxTouchPoints && !document.querySelector(' .section-1-1003 .clicked')) {
          mouseLeaveTimeout = setTimeout(function () {
            if (document.querySelector(' .section-1-1003 .carousel-section .child.clicked')) {
              document.querySelector(' .section-1-1003 .carousel-section .child.clicked .bar .line').style.opacity = 0;
              document.querySelector(' .section-1-1003 .carousel-section .child.clicked .bar .line').style.width = "0px";
              document.querySelector(' .section-1-1003 .carousel-section .child.clicked').classList.remove("clicked")
              i = 0;
              playNextCarousel()
            } else {
              playCarousel();
            }
          }, 1000)
        }
      });

      document.querySelector(' .section-1-1003 .carousel-section .text').addEventListener('click', function (e) {
        if (e.target.closest(".carousel-title") && !e.target.closest(".clicked")) {
          clearInterval(carouselInterval);
          //remove active
          const curActiveElement = document.querySelector(' .section-1-1003 .carousel-section .text .active').getAttribute("data-index");
          document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line').style.opacity = 0;
          if (e.target.closest(".child").getAttribute("data-index") != curActiveElement) {
            document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line').style.width = "0px";
          }
          document.querySelector(' .section-1-1003 .carousel-section .child[data-index="' + curActiveElement + '"]').classList.remove("clicked");

          // to add animation when closed
          if (curActiveElement != e.target.closest('.child').getAttribute("data-index")) {
            closedCarouselAnimation(curActiveElement)
          }

          // add active
          e.target.closest(".child").classList.add("clicked", "active")
          e.target.closest(".child").querySelector('.bar .line').style.opacity = 1;
          e.target.closest(".child").querySelector('.bar .line').style.width = "100%";
          document.querySelector(' .section-1-1003 .carousel-section .hero[data-index="' + e.target.closest(".child").getAttribute("data-index") + '"]').classList.add("active")
          if (curActiveElement != e.target.closest('.active').getAttribute("data-index")) {
            adjustContentHeight();
          }

          // auto scroll on mobile
          if (window.matchMedia("(max-width: 1024.98px)").matches && document.querySelector(' .section-1-1003 .carousel-section .child.clicked')) {
            document.querySelector(' .section-1-1003 .carousel-section').classList.add("mobile-clicked")
            setTimeout(function () {
              document.querySelector(' .section-1-1003 .carousel-section.mobile-clicked').classList.remove("mobile-clicked")
            }, 1003)
            let headerHeight = document.querySelector(' header').offsetHeight;
            setTimeout(function () {
              let scroll = new SmoothScroll();
              scroll.animateScroll(document.querySelector(' .section-1-1003 .carousel-section .text .active').getBoundingClientRect().y + scrollY - headerHeight, null, {
                easing: 'easeOutQuad',
                speed: 500,
                speedAsDuration: true,
              });
            }, 502)
          }
        }
      });
      document.querySelector("body").addEventListener("click", function (e) {
        if (!e.target.closest(' .section-1-1003 .carousel-section') && navigator.maxTouchPoints && document.querySelector(' .section-1-1003 .carousel-section .child.clicked') && !document.querySelector(' .section-1-1003 .clicked')) {
          document.querySelector(' .section-1-1003 .carousel-section .child.clicked .bar .line').style.opacity = 0;
          document.querySelector(' .section-1-1003 .carousel-section .child.clicked .bar .line').style.width = "0px";
          document.querySelector(' .section-1-1003 .carousel-section .child.clicked').classList.remove("clicked")
          i = 0;
          playNextCarousel()
        }
      })

      // 1. Debounce helper
      const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(null, args);
          }, delay);
        };
      };

      // 2. State management
      let lastWidth = window.innerWidth;
      let isExecuting = false;
      const targetSelector = 'body'; // You can change this to a specific container for better performance

      // 3. Resize logic
      const handleResize = (entries) => {
        if (isExecuting) return;

        const newWidth = entries[0].contentRect.width;

        // Only trigger if the width has changed significantly (ignoring sub-pixel noise)
        if (Math.round(newWidth) !== Math.round(lastWidth)) {
          isExecuting = true;
          lastWidth = newWidth;

          // Execute your function
          setHeightOnResize();

          // Unlock after the transition/delay period
          setTimeout(() => { isExecuting = false; }, 100);
        }
      };

      // 4. Wrap and observe
      const debouncedResize = debounce(handleResize, 100);
      const observer = new ResizeObserver(debouncedResize);
      const targetElement = document.querySelector(targetSelector);

      if (targetElement) {
        observer.observe(targetElement);
      }

      window.addEventListener('scroll', function () {
        if (!document.querySelector('.mobile-clicked') && !document.querySelector(' .section-1-1003 .clicked')) {
          if (isSectionInView(document.querySelector(' .section-1-1003 .carousel-section')) && isSectionTopAt50Percent(document.querySelector(' .section-1-1003'))) {
            if (!document.querySelector(' .section-1-1003 .carousel-section.in-view')) {
              document.querySelector(' .section-1-1003 .carousel-section').classList.add("in-view")
              if (document.querySelector(' .section-1-1003 .carousel-section .child.clicked')) {
                document.querySelector(' .section-1-1003 .carousel-section .child.clicked .bar .line').style.opacity = 0;
                document.querySelector(' .section-1-1003 .carousel-section .child.clicked .bar .line').style.width = "0px";
                document.querySelector(' .section-1-1003 .carousel-section .child.clicked').classList.remove("clicked")
                i = 0;
                playNextCarousel()
              } else {
                playCarousel();
              }
            }

          } if (!isSectionInView(document.querySelector(' .section-1-1003 .carousel-section'))) {
            clearInterval(carouselInterval);
            clearTimeout(mouseLeaveTimeout)
            document.querySelector(' .section-1-1003 .carousel-section').classList.remove("in-view")
          }
        }
      });
      window.dispatchEvent(new Event('scroll'));
      let calculateHeightIndex = 0;
      const calculateHeightInterval = setInterval(function () {
        setHeightOnResize();
        calculateHeightIndex++;
        if (calculateHeightIndex > 40) {
          clearInterval(calculateHeightInterval);
        }
      }, 100)
    }
    setTimeout(function () {
      clearInterval(bodyInterval1003)
    }, 7000)
  }, 20)
}

