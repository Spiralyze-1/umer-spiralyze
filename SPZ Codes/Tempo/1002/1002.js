(function () {
  const _pushState = history.pushState;
  const _replaceState = history.replaceState;
  history.pushState = function () {
    _pushState.apply(history, arguments);
    window.dispatchEvent(new Event("spz:locationchange"));
  };
  history.replaceState = function () {
    _replaceState.apply(history, arguments);
    window.dispatchEvent(new Event("spz:locationchange"));
  };
  window.addEventListener("popstate", function () {
    window.dispatchEvent(new Event("spz:locationchange"));
  });
  function waitForDemoPage() {
    // Condition 1: URL must match
    if (!window.location.pathname.includes("/demo")) return;
    function checkAndInit() {
      const h1 = document.querySelector("article h1");
      if (!h1 || h1.textContent.trim() !== "Request a demo") return false;
      init1002();
      return true;
    }
    // ✅ Try immediately first (handles SPA back-navigation case)
    if (checkAndInit()) return;
    // ✅ Fallback: observe for DOM changes (handles initial page load case)
    const observer = new MutationObserver(function () {
      if (checkAndInit()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
  // ============================================================
  //  All FUNCTIONS — define here
  // ============================================================
  function formElemChanges() {
    // Helper: safe single element selector
    const $ = (selector, context = document) => context.querySelector(selector);
    // Helper: safe multi element selector
    const $$ = (selector, context = document) => context.querySelectorAll(selector);
    const BASE = 'body.spz_1002_v .spz_main_wrapper aside#formsignup';
    const aside = $(BASE);
    if (!aside) return; // Exit early if base element doesn't exist
    // ── 1. form_wrapper_inner ────────────────────────────────────────────
    if (!$('.form_wrapper_inner', aside)) {
      aside.insertAdjacentHTML('afterbegin', `<div class="form_wrapper_inner"></div>`);
    }
    const rightInner = $('.form_wrapper_inner', aside);
    if (!rightInner) return;
    // ── 2. Logo ───────────────────────────────────────────────────────────
    if (!$('.spz_main_logo', rightInner)) {
      rightInner.insertAdjacentHTML('afterbegin', `
          <div class="spz_main_logo">
              <picture>
                  <source media="(max-width: 767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1773133522/tempo/1002/tempo_logo_small.svg">
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1773241272/tempo/1001/logo_desktop.svg"
                      alt="Tempo logo">
              </picture>
          </div>
      `);
      // ── 3. Move form div after logo ───────────────────────────────────
      const formDiv = $(`${BASE} > div.relative`);
      const logo = $('.spz_main_logo', rightInner);
      if (formDiv && logo) logo.insertAdjacentElement('afterend', formDiv);
      // ── 4. Update form title ──────────────────────────────────────────
      const formHeader = $(`${BASE} form header`);
      if (formHeader) formHeader.textContent = 'Get a Demo';
      // ── 5. Clear phone input value ────────────────────────────────────
      const phoneInput = $(`.spz_main_wrapper aside#formsignup .phone-input-container .PhoneInputInput`);
      if (phoneInput) phoneInput.value = '';
      // ── 6. Clear first option of company size dropdown ────────────────
      // const firstOption = $('aside#formsignup .flex-col > select[name="company_size__employees"] option:first-child');
      // if (firstOption) firstOption.textContent = '';
      const select = $('aside#formsignup .flex-col > select[name="company_size__employees"]');
      if (select) {
        const firstOption = select.querySelector('option:first-child');
        if (firstOption) {
          firstOption.textContent = '';
          firstOption.value = '';
          // Force Firefox to re-render
          select.value = '';
          select.dispatchEvent(new Event('change'));
        }
      }
      // ── 7. Clean up labels ────────────────────────────────────────────
      $$('.spz_main_wrapper aside#formsignup .form-field-label').forEach(label => {
        label.textContent = label.textContent.replace(/\s*\(required\)/gi, '').trim();
        if (label.textContent.includes('Company Size')) {
          label.textContent = 'Company Size';
        } else if (label.textContent.includes('Phone')) {
          label.textContent = 'Phone number';
        }
        // Normalize: capitalize first word only, lowercase the rest
        label.textContent = label.textContent
          .split(' ')
          .map((word, index) =>
            index === 0
              ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              : word.toLowerCase()
          )
          .join(' ');
      });
      // ── 8. Focus / filled class handlers ─────────────────────────────
      $$(`.spz_main_wrapper aside#formsignup .flex-col > input,
          .spz_main_wrapper aside#formsignup .flex-col > select, 
          .spz_main_wrapper aside#formsignup .phone-input-container input`).forEach(field => {
        const flexCol = field.closest('.flex-col');
        if (!flexCol) return;
        field.addEventListener('focus', () => flexCol.classList.add('focused'));
        field.addEventListener('blur', () => {
          flexCol.classList.remove('focused');
          flexCol.classList.toggle('filled', field.value.trim() !== '');
        });
      });
      // ── 9. Dropdown arrow ─────────────────────────────────────────────
      const selectTag = $('.spz_main_wrapper aside#formsignup .flex-col > select');
      if (selectTag && !$('.spz_main_wrapper aside#formsignup .flex-col > .arrow')) {
        selectTag.insertAdjacentHTML('afterend', `
              <div class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                      <path d="M11.91 8.24491e-05L12.97 1.06108L7.193 6.84008C7.10043 6.93324 6.99036 7.00717 
                      6.86911 7.05761C6.74786 7.10806 6.61783 7.13403 6.4865 7.13403C6.35517 7.13403 6.22514 
                      7.10806 6.10389 7.05761C5.98264 7.00717 5.87257 6.93324 5.78 6.84008L-2.65457e-07 
                      1.06108L1.06 0.00108285L6.485 5.42508L11.91 8.24491e-05Z" fill="#1D1D1B"></path>
                  </svg>
              </div>
          `);
      }
      // ── 10. Submit button ─────────────────────────────────────────────
      const submitBtn = $('.spz_main_wrapper aside#formsignup button.btn-primary');
      if (submitBtn) {
        submitBtn.textContent = 'Submit';
        submitBtn.classList.add('spz_1002_v_submit_btn');
      }
      // ── 11. Disclaimer ────────────────────────────────────────────────
      // const submitBtnUpdated = $('.spz_main_wrapper aside#formsignup .spz_1002_v_submit_btn');
      // if (submitBtnUpdated && !$('.spz_disclaimer')) {
      //     submitBtnUpdated.parentElement.insertAdjacentHTML('afterend', `
      //     <div class="spz_disclaimer">
      //         By submitting this form, you agree that your data will be processed 
      //         in accordance with our 
      //         <a href="https://www.tempo.io/privacy-policy" target="_blank">privacy notice</a>.
      //     </div>
      // `);
      // }
    }
  }
  function init1002() {
    document.body.classList.add('spz_1002_v');
    document.querySelector('body.spz_1002_v main section > div').classList.add('spz_main_wrapper');
    formElemChanges();
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      document.body.classList.add('is-safari');
    }
    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    // Set the value of the squeezePage variable as needed:
    // true  – if you are using a squeeze page (i.e., the page contains a form)
    // false – if you are not using a squeeze page (i.e., the page does not contain a form)
    // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)
    const squeezePage = 'both'; // true / false / 'both'
    const expName = '1002'; //experiment name should be 1001, 1002, 1003 etc.
    const variantName = `spz_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
    const clientDomain = '.tempo.io'; //domain should be .spiralyze.com
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
  }
  // ============================================================
  // Listen for route changes and re-run your check
  window.addEventListener("spz:locationchange", function () {
    // ✅ If not demo page, remove your classes from body
    if (!window.location.pathname.includes("/demo")) {
      document.body.classList.remove('spz_1002_v');
    }
    waitForDemoPage();
  });
  window.addEventListener('load', () => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  });
  waitForDemoPage();
})();