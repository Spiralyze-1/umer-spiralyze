// Time difference calculation
let Time1 = new Date().getTime() / 1000;
console.log('Time 1 > ' + Time1);



function spz1001() {
  if (!document.querySelector('body').classList.contains('spz_1001_v')) {
    document.querySelector('body').classList.add('spz_1001_v');


    let Time2 = new Date().getTime() / 1000;
    console.log('Time 2 > ' + Time2);

    let timeDifference = Time2 - Time1;
    console.log('Time difference > ' + timeDifference + ' seconds');
    // Time difference calculation over

    // Put your test code here
    downFunnelCode();
    document.querySelector('main section h1').textContent = 'Get a free trial';

    // add input/select parent div class with loop.
    function addFormGroups() {
      document.querySelectorAll(
        'main section form input[type="text"], main section form input[type="email"], main section form input[type="tel"], main section form select'
      ).forEach(div => {
        if (div.name === 'phone_number') {
          div.parentElement.parentElement.classList.add('form_group', 'phone_group');
        } else {
          div.parentElement.classList.add('form_group');
        }
      });
    }

    addFormGroups();

    // All input and select elements within the form are now referenced above.
    const yourNameInput = document.querySelector('main section form input[name="name"]');
    const companyInput = document.querySelector('main section form input[name="company"]');
    const emailInput = document.querySelector('main section form input[name="email"]');
    const languageInput = document.querySelector('main section form select[name="locale"]');
    const countryInput = document.querySelector('main section form select[name="country"]');
    const hdyfuInput = document.querySelector('main section form select[name="hdyfu"]');
    const phoneNumberInput = document.querySelector('main section form input[name="phone_number"]');
    const checkboxInput = document.querySelectorAll('main section form input[type="checkbox"]');

    // set label for inputs
    yourNameInput.previousElementSibling.textContent = 'Your name';
    companyInput.previousElementSibling.textContent = 'Company';
    emailInput.previousElementSibling.textContent = 'Work email';
    hdyfuInput.querySelector('option[value=""]').textContent = '';
    languageInput.closest('select').previousElementSibling.textContent = 'Language';
    countryInput.closest('select').previousElementSibling.textContent = 'Country';
    hdyfuInput.closest('select').previousElementSibling.textContent = 'How did you find us?';

    // rearrange fields
    emailInput.closest('.form_group').after(countryInput.closest('.form_group'));
    phoneNumberInput.closest('.form_group').after(hdyfuInput.closest('.form_group'));

    // Insert the "Region to store data?" field before the language input field
    languageInput.closest('.form_group').insertAdjacentHTML('beforebegin', `
            <div class="flex flex-col space-y-1.5 form_group">
                <label class="font-semibold">Region to store data?</label>
                <select class="bg-chevron-down bg-gray-50 bg-no-repeat bg-right px-3.5 py-2.5 border border-gray-300 rounded-lg text-gray-900 appearance-none cursor-pointer" name="region">
                    <option value="eu-c1" selected>EU</option>
                    <option value="eu-w2">UK</option>
                    <option value="ap-se2">AU</option>
                    <option value="ca-c1">Canada</option>
                    <option value="us-w1">US (West)</option>
                    <option value="us-e2">US (East)</option>
                </select>
            </div>
        `);

    document.addEventListener('change', function (e) {
      if (e.target.matches('select[name="region"]')) {
        const radio = document.querySelector(`button[role="radio"][value="${e.target.value}"]`);
        if (radio) {
          radio.click();
        }
      }

      if (e.target.matches('select[name="country"]')) {
        setTimeout(() => {
          document.querySelector('main section form input[name="phone_number"]').closest('.form_group').after(document.querySelector('main section form select[name="hdyfu"]').closest('.form_group'));
        }, 10);
      }
    });

    // Update checkbox group styling and text
    checkboxInput.forEach(checkbox => {
      checkbox.closest('label').parentElement.classList.add('checkbox_group');

      if (checkbox.parentElement.nextElementSibling &&
        checkbox.parentElement.nextElementSibling.tagName === 'P' &&
        checkbox.parentElement.nextElementSibling.innerText.includes('We will send you a welcome email')
      ) {
        checkbox.parentElement.nextElementSibling.innerText = 'I want to receive email marketing from Sign In App (optional).';
      }
    });

    // Update credit card text styling
    const ccText = document.querySelector('main section form button[type="submit"] + p');
    if (ccText) {
      ccText.innerText = 'No credit card required.  ';
      ccText.classList.add('ccText');
    }

    // form input focus and typing handling
    const inputSelector = 'main form .form_group input, main form .form_group select';

    function updateAll() {
      document.querySelectorAll(inputSelector).forEach(input => {
        const formGroup = input.closest('.form_group');

        if (input.value === '' || input.value == null)
          formGroup.classList.remove('focus', 'typing');
        else
          formGroup.classList.add('focus');
        formGroup.classList.remove('typing');
      });
    }

    updateAll();

    document.addEventListener('focusin', e => {
      if (e.target.matches(inputSelector)) {
        e.target.closest('.form_group').classList.add('focus', 'typing');
      }
    });

    document.addEventListener('focusout', e => {
      if (e.target.matches(inputSelector)) {
        updateAll();
      }
    });

    document.addEventListener('change', e => {
      if (e.target.matches(inputSelector)) {
        updateAll();
        addFormGroups();
      }
      if (e.target.getAttribute('name') === 'country') {
        const phoneInput = document.querySelector('.phone_group input');
        if (phoneInput) {
          phoneInput.dispatchEvent(new Event('focusin', { bubbles: true }));
        }
      }
    });

    // add warning for empty required fields
    document.querySelector('div[role="radiogroup"]').insertAdjacentHTML('afterend', '<p class="country-warning">*Please make sure you select the correct region. Once an account is created this cannot be changed.</p>');
  }
}

const formSelector = 'main section form button[type="submit"]';

waitForElement(formSelector)
  .then(() => {
    if (typeof spz1001 === "function") {
      setTimeout(() => {
        spz1001();
      }, 100);
    }
  })
  .catch((error) => {
    console.error(error);
  });

function waitForElement(selector, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        clearInterval(interval);
        resolve(elements[0]);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector}`));
    }, timeout);
  });
}


function downFunnelCode() {

  // If you face any issues, please switch to the named-function version of this code and use that instead.
  (function () {
    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

    // Set the value of the squeezePage variable as needed:
    // true  – if you are using a squeeze page (i.e., the page contains a form)
    // false – if you are not using a squeeze page (i.e., the page does not contain a form)
    // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

    const squeezePage = true; // true / false / 'both'
    const expName = '1001'; //experiment name should be 1001, 1002, 1003 etc.
    const variantName = `#` + expName + `_variant`; //variantName should be _variant, _true_control etc.
    const clientDomain = '.signinapp.com'; //domain should be .spiralyze.com


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
}