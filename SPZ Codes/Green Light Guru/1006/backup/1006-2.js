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
        'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782397104/greenlightguru/1006/frame_427319841.svg',
        'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782397103/greenlightguru/1006/frame_427319840.svg'
      ],
      mediaDesktop:
        'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1006/img-container_1.png',
      mediaTablet:
        'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1006/img-container_2.png',
      mediaMobile:
        'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1006/img-container.png',
      closeIcon:
        'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782397125/greenlightguru/1006/frame.svg'
    },
    bullets: [
      {
        lead: 'Medical QMS.',
        rest: ' Automate training, CAPA, approvals, and more. Full audit trails. Track docs. FDA & ISO compliant.',
        alt: 'Medical QMS'
      },
      {
        lead: 'Clinical Trials.',
        rest: ' Secure EDC platform. Drag-and-drop eCRFs. Mobile surveys. Compliant eConsent. Ad hoc data capture.',
        alt: 'Clinical Trials'
      },
      {
        lead: 'Design & Dev.',
        rest: ' Generate a full DHF. Sync designs with inputs, outputs, reviews, etc. ISO 14971-compliant risk management.',
        alt: 'Design & Dev'
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
              <h1 class="spz-1006-hero-title">Cut time to market<br>by <span class="spz-1006-hero-accent">35%.</span> Simplify medical device development.</h1>
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
              <img src="${CONFIG.assets.mediaDesktop}" alt="Greenlight Guru product interface" width="625" height="609">
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
    document.body.style.top = `-${lockedScrollY}px`;
    overlay.classList.add('spz-1006-modal-open');
    document.body.classList.add('spz-1006-no-scroll');
  };

  const closeModal = () => {
    const overlay = document.querySelector('.spz-1006-modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('spz-1006-modal-open');
    document.body.classList.remove('spz-1006-no-scroll');
    document.body.style.top = '';
    window.scrollTo(0, lockedScrollY);
  };

  const wireModalEvents = () => {
    const overlay = document.querySelector('.spz-1006-modal-overlay');
    const closeButton = document.querySelector('.spz-1006-modal-close');
    if (closeButton) closeButton.addEventListener('click', closeModal);
    if (overlay) {
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) closeModal();
      });
    }
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
  });

  waitForElement(CONFIG.selectors.injectionTarget, init);
})();