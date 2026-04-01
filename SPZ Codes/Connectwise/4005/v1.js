// #4005 | ConnectWise | Trial | Left Form over UI

// ============ CONFIG ============
// DEV 1/4. Test identity
const asana_URL = `https://app.asana.com/1/77217210692853/project/1212015714361211/task/1213540894683074`;
let testId = '4005',
  testType = 'v',
  testClass = 'spz_' + testId + '_' + testType,
  ctaClass = 'spz' + testId + '_' + testType;

// DEV 2/4. Selector + URL
const template_url = `/platform/rmm/trial`;
const template_selector = `main .form-container__form`;

// DEV 3/4. Content
const template_content = {
  formTitle: 'RMM Free trial'
};

// DEV 4/4. Assets (full Cloudinary URLs)
const assets = {
  logo: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774576184/connectwise/4005/logo.svg`
};

// ============ DOWNFUNNEL TRACKING ============
(function () {
  const squeezePage = true;
  const expName = '4005';
  const variantName = `spz_` + expName + `_variant`;
  const clientDomain = '.connectwise.com';

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

// ============ INIT ============
function waitForElement(selector, timeout) {
  timeout = timeout || 10000;
  return new Promise(function (resolve, reject) {
    var interval = setInterval(function () {
      var el = document.querySelector(selector);
      if (el) { clearInterval(interval); resolve(el); }
    }, 100);
    setTimeout(function () { clearInterval(interval); reject(); }, timeout);
  });
}

function init() {
  if (!window.location.pathname.includes(template_url)) return;
  if (document.body.classList.contains(testClass)) return;

  waitForElement(template_selector).then(function () {
    if (document.body.classList.contains(testClass)) return;
    document.body.classList.add(testClass);

    // Update heading text
    document.querySelector("main .form-container__form .heading-title").innerHTML = template_content.formTitle;

    // Logo insertion — not clickable per spec (span, not <a>)
    document.querySelector("main .form-container__form").insertAdjacentHTML('afterbegin', `
            <span class="spz-logo-wrap"><img src="${assets.logo}" width="221" height="36" alt="ConnectWise Logo"></span>
        `);
    document.querySelector("main .form-container__form .heading-title").insertAdjacentHTML('afterend', ` <div class="lds-dual-ring"></div>`);

    document.body.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes(';')) {
        node.nodeValue = node.nodeValue.replace(';', '');
      }
    });

    var checkFormLoaded = setInterval(function () {
      if (MktoForms2 && document.querySelectorAll('.mktoButton').length > 0) {
        clearInterval(checkFormLoaded);

        document.querySelector('.lds-dual-ring').remove();
        if (document.querySelector('main .form-container__form .mktoForm')) {
          document.querySelector('main .form-container__form .mktoForm').classList.add('has_loader');
        }

        MktoForms2.whenReady(function () {
          if (!document.querySelector('.spz_4005_form_loaded')) {
            // Remove colons from labels and trim whitespace
            document.querySelectorAll('main .form-container__form .mktoForm .mktoFormRow label.uptext-label').forEach(label => {
              label.innerText = label.innerText.replace(':', '').trim();
            });

            // Move the HTML text below the button
            if (document.querySelector('.mktoButtonRow') && document.querySelector('div.mktoHtmlText')) {
              document.querySelector('.mktoButtonRow').after(document.querySelector('div.mktoHtmlText').closest('.mktoFormRow'));
            }

            if (document.querySelector('div.mktoHtmlText')) {
              document.querySelector('div.mktoHtmlText').innerHTML = document.querySelector('div.mktoHtmlText').innerHTML.replace('our&nbsp;', 'our ').trim();
            }

            // Text area expansion code
            const hearField = document.querySelector('#howdidyouhearaboutus');
            if (hearField) {
              hearField.removeAttribute('placeholder');
              hearField.closest('.mktoFormRow').insertAdjacentHTML('beforebegin', `<a href="javascript:;" id="expandTextarea">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 9.7485H9.75V13.4985C9.75 13.6974 9.67098 13.8882 9.53033 14.0288C9.38968 14.1695 9.19891 14.2485 9 14.2485C8.80109 14.2485 8.61032 14.1695 8.46967 14.0288C8.32902 13.8882 8.25 13.6974 8.25 13.4985V9.7485H4.5C4.30109 9.7485 4.11032 9.66949 3.96967 9.52883C3.82902 9.38818 3.75 9.19742 3.75 8.9985C3.75 8.79959 3.82902 8.60883 3.96967 8.46817C4.11032 8.32752 4.30109 8.2485 4.5 8.2485H8.25V4.4985C8.25 4.29959 8.32902 4.10883 8.46967 3.96817C8.61032 3.82752 8.80109 3.7485 9 3.7485C9.19891 3.7485 9.38968 3.82752 9.53033 3.96817C9.67098 4.10883 9.75 4.29959 9.75 4.4985V8.2485H13.5C13.6989 8.2485 13.8897 8.32752 14.0303 8.46817C14.171 8.60883 14.25 8.79959 14.25 8.9985C14.25 9.19742 14.171 9.38818 14.0303 9.52883C13.8897 9.66949 13.6989 9.7485 13.5 9.7485Z" fill="currentColor"/></svg>
                            How did you hear about us?</a>`);

              hearField.insertAdjacentHTML('beforebegin', `<label for="howdidyouhearaboutus" id="Lblhowdidyouhearaboutus" class="uptext-label">How did you hear about us?</label>`);
            }

            // Industry field label addition
            const industryField = document.querySelector('#mKTOIndustry');
            if (industryField) {
              industryField.insertAdjacentHTML('beforebegin', `<label for="mKTOIndustry" id="LblmKTOIndustry" class="uptext-label">Industry</label>`);
              industryField.querySelector('option[value=""]').textContent = '';
            }

            // Button text and class
            if (document.querySelector('.mktoButtonRow .mktoButton')) {
              document.querySelector('.mktoButtonRow .mktoButton').classList.add(ctaClass);
              document.querySelector('.mktoButtonRow .mktoButton').innerHTML = `Submit`;
            }

            // Text area expansion click handler
            document.addEventListener('click', function (e) {
              if (e.target && e.target.closest('#expandTextarea')) {
                e.target.closest('#expandTextarea').style.display = 'none';
                document.querySelector('#howdidyouhearaboutus').closest('.mktoFormRow').style.display = 'block';
                document.querySelector('#howdidyouhearaboutus').focus();
              }
            });

            // Focus event logic
            document.querySelectorAll('.mktoField:not([type="checkbox"])').forEach(field => {
              field.addEventListener("focus", function () {
                if (this.closest(".mktoFieldWrap")) {
                  this.closest(".mktoFieldWrap").classList.add("focused", "typing");
                }
              });

              field.addEventListener("blur", function () {
                const row = this.closest(".mktoFieldWrap");
                const value = this.value;
                if (row) {
                  if (!value) {
                    row.classList.remove("focused", "typing");
                  } else {
                    row.classList.add("focused");
                    row.classList.remove("typing");
                  }
                }
              });
            });

            // Add loaded class to prevent re-running
            document.querySelector("main .form-container__form").classList.add('spz_4005_form_loaded');
            document.querySelector('main .form-container__form .mktoForm').classList.remove('has_loader');
          }
        });
      }
    }, 100);
  }).catch(function () { });
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : (init(), setTimeout(init, 1000), setTimeout(init, 2000));
