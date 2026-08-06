
function waitForElement(cssSelector, callback) {
  var interval;
  var timeout;

  var check = function () {
      try {
          var element = document.querySelector(cssSelector);
          if (element) {
              clearInterval(interval);
              clearTimeout(timeout);
              callback(element);
          }
      } catch (err) {
          console.log(err);
          clearInterval(interval);
          clearTimeout(timeout);
      }
  };

  interval = setInterval(check, 100); // poll every 100ms

  timeout = setTimeout(function () {
      clearInterval(interval);
  }, 20000);
}

function heroBannerChanges() {
  waitForElement('section#resource', function (heroSection) {
      if (heroSection.classList.contains('background--midnight-center')) {
          heroSection.classList.remove('background--midnight-center');
      }
  });
}

function formChanges() {
  waitForElement('.spz_3006_v #resource .form-container__form .mktoForm .mktoButton', function () {

    //   if (document.querySelectorAll('.spz_3006_v #resource .container>.row .col-5.col-md-12 > img').length === 0) {
    //       document.querySelector('.spz_3006_v #resource .container>.row .col-5.col-md-12').insertAdjacentHTML('afterbegin', `<picture>
    //           <source media="(max-width: 767px)"
    //               srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/connectwise/3006/background-mobile.webp">
    //           <source media="(max-width: 1024px)"
    //               srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/connectwise/3006/background-tablet.webp">
    //           <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/connectwise/3006/background-desktop.webp"
    //               alt="cw contact-sales">
    //           </picture>`);
    //   }

      document.querySelector('.spz_3006_v #resource .form-container__form .mktoForm .mktoButtonWrap.mktoSimple .mktoButton').classList.add('spz3006_track_v');

      if (document.querySelectorAll('.spz_3006_v #resource .form-container__form .spz_form_title').length === 0) {
          document.querySelector('.spz_3006_v #resource .form-container__form').insertAdjacentHTML('afterbegin', `
            <span class="form_logo">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1784767238/connectwise/3006/logo.svg" alt="Connecwise logo">
            </span>
            <h2 class="spz_form_title">Get Pricing</h2>
        `);
      }

      document.querySelectorAll('.spz_3006_v #resource .form-container__form form .mktoFormRow')
          .forEach(function (formField) {
              const inputElement = formField.querySelector('input, select, textarea');
              if (inputElement && inputElement.id && !inputElement.id.includes(' ')) {
                  const fieldID = inputElement.id.toLowerCase();
                  formField.classList.add(`spz_${fieldID}`);
              }

              const hasSpz = [...formField.classList].some(cls => cls.startsWith('spz_'));
              if (hasSpz && !formField.classList.contains('spz_email')) {
                  formField.classList.add('form-width-50');
              }

              const labelEl = formField.querySelector('label.uptext-label');
              if (labelEl) {
                  labelEl.textContent = labelEl.textContent.trim().replace(':', '');
              }
          });

      document.querySelectorAll('.spz_3006_v #resource .form-container__form .mktoFormRow .mktoFieldWrap > label').forEach(ele => {
          ele.textContent = ele.textContent.trim().replace(/[*:]/g, '');
      });

      MktoForms2.whenReady(function (mktoForm) {
          const visibleFields = document.querySelectorAll('.spz_3006_v #resource .form-container__form .mktoForm .spz_firstname input, .spz_3006_v #resource .form-container__form .mktoForm .spz_lastname input, .spz_3006_v #resource .form-container__form .mktoForm .spz_email input');
          const emailInput = document.querySelector('.spz_3006_v #resource .form-container__form .mktoForm .spz_email input');
          const form = document.querySelector('.spz_3006_v #resource .form-container__form .mktoForm');
          const parentElem = document.querySelector('.spz_3006_v #resource');

          function isValidEmail(value) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
          }

          function checkAllFilled() {
              return [...visibleFields].every(f => {
                  if (f === emailInput) {
                      return isValidEmail(f.value);
                  }
                  return f.value.trim() !== '';
              });
          }

          visibleFields.forEach(function (input) {
              input.addEventListener('input', function () {
                  const allFilled = checkAllFilled();
                  if (allFilled) {
                      form.classList.add('show_fields');
                      parentElem.classList.add('form_expanded');
                  } else {
                      parentElem.classList.remove('form_expanded');
                  }
              });
          });

          mktoForm.onValidate(function () {
              const allFilled = checkAllFilled();
              if (allFilled) {
                  form.classList.add('show_fields');
                  parentElem.classList.remove('form_expanded');
              }
          });
      });
  });

  // Moving disclaimer to bottom
  waitForElement('.spz_3006_v #resource .form-container__form .mktoFormRow.mktoFormRowLogical', function (checkbox) {
      const disclaimer = checkbox.nextElementSibling;
      const formBtn = document.querySelector('.spz_3006_v #resource .form-container__form .mktoForm .mktoButtonRow');
      if (disclaimer && formBtn && checkbox) {
          formBtn.insertAdjacentElement('afterend', disclaimer);
      }
      document.querySelector('.spz_3006_v #resource .form-container__form .mktoForm .mktoButtonRow~.mktoFormRow .mktoFieldWrap .mktoHtmlText').innerHTML = `By submitting this form, you agree to our <a href="https://www.connectwise.com/privacy-policy" target="_blank">Privacy Policy</a>`;
  });
}


const bodyObserver = new MutationObserver(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_3006_v')) {
      bodyObserver.disconnect();
      document.querySelector('body').classList.add('spz_3006_v');

      waitForElement('#resource .form-container__form .mktoForm .mktoButtonWrap.mktoSimple .mktoButton', function () {
          console.log('inside waitForElement +++ ');
          heroBannerChanges();
          formChanges();
          console.log('all function executed');
      });

      // Add class on Safari
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      if (isSafari) {
          // ✅ Code that should only run in Safari
          console.log("This code runs only in Safari!");
          document.querySelector('body').classList.add('spz_3006_v_safari');
      }

      // remove ; from the DOM
      setTimeout(function () {
          document.body.childNodes.forEach(function (node) {
              if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === ';') {
                  node.remove();
              }
          });
      }, 100);
  }
});

bodyObserver.observe(document.documentElement, { childList: true, subtree: true });

// Run on resize
window.addEventListener('resize', adjustResourceLayout);


// If you face any issues, please switch to the named-function version of this code and use that instead.
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = true; // true / false / 'both'
  const expName = '3006'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `spz_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
  const clientDomain = '.connectwise.com'; //domain should be .connectwise.com


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