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
          'https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/1006/img-container_1.png',
        mediaTablet:
          'https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/1006/img-container_2.png',
        mediaMobile:
          'https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/1006/img-container.png',
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
    const applyTracking = () => {
      const { experimentName, variantValue, clientDomain, squeezePage } = CONFIG.tracking;
  
      const setCookie = (name, value, days) => {
        let expires = '';
        if (days) {
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = '; expires=' + date.toUTCString();
        }
        document.cookie =
          name + '=' + (value || '') + expires + ';domain=' + clientDomain + ';path=/';
      };
  
      const getCookie = (name) => {
        const nameEQ = name + '=';
        const parts = document.cookie.split(';');
        for (let index = 0; index < parts.length; index += 1) {
          let part = parts[index];
          while (part.charAt(0) === ' ') part = part.substring(1, part.length);
          if (part.indexOf(nameEQ) === 0) return part.substring(nameEQ.length, part.length);
        }
        return null;
      };
  
      const writeCookies = (currentName, currentValue) => {
        const existingName = getCookie('ExperimentName');
        const existingValue = getCookie('ExperimentValue');
        const existingNameList = existingName ? existingName.split(',') : [];
  
        if (!existingName) {
          setCookie('ExperimentName', currentName, 1);
          setCookie('ExperimentValue', currentValue, 1);
        } else if (existingNameList.indexOf(currentName) === -1) {
          setCookie('ExperimentName', existingName + ',' + currentName, 1);
          setCookie('ExperimentValue', existingValue + ',' + currentValue, 1);
        } else {
          const names = existingName.split(',');
          const values = existingValue.split(',');
          values[names.indexOf(currentName)] = currentValue;
          setCookie('ExperimentName', names.join(','), 1);
          setCookie('ExperimentValue', values.join(','), 1);
        }
      };
  
      if (squeezePage === true) {
        window.squeezePageValue = variantValue;
      } else if (squeezePage === false) {
        writeCookies(experimentName, variantValue);
      } else if (squeezePage === 'both') {
        writeCookies(experimentName, variantValue);
        window.squeezePageValue = variantValue;
      }
    };
  
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
                <source media="(max-width: 599.98px)" srcset="${CONFIG.assets.mediaMobile}">
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
          field.classList.remove('focus', 'typing');
          field.querySelectorAll('.hs-error-msgs').forEach((node) => node.remove());
        }
      }
      overlay.classList.add('spz-1006-modal-open');
      document.body.classList.add('spz-1006-no-scroll');
    };
  
    const closeModal = () => {
      const overlay = document.querySelector('.spz-1006-modal-overlay');
      if (!overlay) return;
      overlay.classList.remove('spz-1006-modal-open');
      document.body.classList.remove('spz-1006-no-scroll');
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
        formHost.appendChild(form);
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
      form.querySelectorAll('select').forEach((select) => {
        select.addEventListener('change', () => window.setTimeout(clearDisabledOptions, 30));
      });
  
      /* Floating-label state handling */
      const refreshField = (element) => {
        const field = element.closest('.hs-form-field');
        if (!field) return;
        const hasValue = element.value != null && String(element.value).trim() !== '';
        if (hasValue) {
          field.classList.add('focus');
        } else {
          field.classList.remove('focus', 'typing');
        }
      };
      const floatingInputs = form.querySelectorAll('input.hs-input, select.hs-input');
      floatingInputs.forEach((element) => {
        element.addEventListener('focus', () => {
          const field = element.closest('.hs-form-field');
          if (field) field.classList.add('focus', 'typing');
        });
        element.addEventListener('blur', () => refreshField(element));
        element.addEventListener('input', () => refreshField(element));
        element.addEventListener('change', () => refreshField(element));
        refreshField(element);
      });
  
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
        debugger;
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
      applyTracking();
    });
  
    waitForElement(CONFIG.selectors.injectionTarget, init);
  })();