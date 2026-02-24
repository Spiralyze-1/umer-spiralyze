function spz1006() {
  if (!document.querySelector('body').classList.contains('spz_1006_v1')) {
    document.querySelector('body').classList.add('spz_1006_v1');
    // Footer code
    document.querySelector('button#hs_show_banner_button')?.removeAttribute('style');
    document.querySelector('.demo_form').classList.add('spz-form-outer');
    document.querySelector('.demo_form .heroRight').classList.add('spz-form-wrap', 'hero_section', 'spz_form');
    document.querySelector('.demo_form .heroRight .hero-form-wrapper').classList.add('the-form');
    document.querySelector('.demo_form .heroRight.spz_form').insertAdjacentHTML('afterbegin', `
        <div class="form-section">
          <div class="spz-company-logo"><a href="https://canoeintelligence.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1752679650/canoeintelligence/1006/logo.svg" alt="logo"/></a></div>
        </div>
        `);
    document.querySelector('.demo_form .heroRight.spz_form').insertAdjacentHTML('beforeend', `
       <div class="logo_list">
          <ul>
            <li>
              <div class="logo_main">
                <picture>
                  <!-- <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890296/canoeintelligence/1003/blackstone-logo_1.svg"> -->
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/1006/blackstone-logo_webp.webp" width="86" alt="blackstone">
                </picture>
              </div>
            </li>
            <li>
              <div class="logo_main">
                <picture>
                  <!-- <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890297/canoeintelligence/1003/icon_7.svg"> -->
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1752679310/canoeintelligence/1006/icon.svg" alt="cambridge associates">
                </picture>
              </div>
            </li>
            <li>
              <div class="logo_main">
                <picture>
                  <!-- <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890296/canoeintelligence/1003/icon_6.svg"> -->
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1752679311/canoeintelligence/1006/icon_1.svg" alt="hamilton lane">
                </picture>
              </div>
            </li>
            <li>
              <div class="logo_main">
                <picture>
                  <!-- <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/prime-quadrant-logo_1.svg"> -->
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1752679310/canoeintelligence/1006/prime-quadrant-logo.svg" alt="prime quadrant">
                </picture>
              </div>
            </li>
            <li>
              <div class="logo_main">
                <picture>
                  <!-- <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/provenio-capital_idj2lhoel1_1-1_1.svg"> -->
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1752679310/canoeintelligence/1006/provenio-capital_idj2lhoel1_1-1.svg" alt="provenio capital">
                </picture>
              </div>
            </li>
            <li>
              <div class="logo_main">
                <picture>
                  <!-- <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1748890295/canoeintelligence/1003/swancap-logo_1.svg"> -->
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1752679310/canoeintelligence/1006/swancap-logo.svg" alt="swancap">
                </picture>
              </div>
            </li>
          </ul>
        </div>
        `);

    document.querySelector('.hero_section .spz-triage-wrap .question-item.question-2 .answers-wrap .answer-item:nth-child(4) .answer-text').innerHTML = `Optimize Workflows <br> & Ops`;
    document.querySelector('.hero_section .spz-triage-wrap .question-item.question-2 .answers-wrap .answer-item:nth-child(5) .answer-text').innerHTML = `Get Insights <br> & Analysis`;
    // Function to wait for elements to be available
    function waitForElements(selectors, callback, maxAttempts = 50, interval = 100) {
      let attempts = 0;

      function checkElements() {
        const allFound = selectors.every(selector => {
          const element = document.querySelector(selector);
          return element !== null;
        });

        if (allFound) {
          callback();
        } else {
          attempts++;
          if (attempts < maxAttempts) {
            setTimeout(checkElements, interval);
          } else {
            console.warn('Some elements were not found after maximum attempts:', selectors);
          }
        }
      }

      checkElements();
    }

    // Wait for all required elements before executing
    const fieldsToHide = ['.spz_form select[name="company_type"]', '.spz_form select[name="country_region_2"]', '.spz_form select[name="job_function_2"]', '.spz_form select[name="state_region_2"]'];
    const requiredInputs = ['.spz_form input[name="firstname"]', '.spz_form input[name="lastname"]', '.spz_form input[name="email"]', '.spz_form input[name="company"]'];
    // Only wait for required fields (state_region_2 is optional)
    const requiredFieldsToHide = ['.spz_form select[name="company_type"]', '.spz_form select[name="country_region_2"]', '.spz_form select[name="job_function_2"]'];
    const allRequiredSelectors = [...requiredFieldsToHide, ...requiredInputs];

    waitForElements(allRequiredSelectors, () => {
      // Function to check if all required fields are filled and show hidden fields
      function checkAndShowFields() {
        const firstName = document.querySelector('.spz_form input[name="firstname"]')?.value || '';
        const lastName = document.querySelector('.spz_form input[name="lastname"]')?.value || '';
        const email = document.querySelector('.spz_form input[name="email"]')?.value || '';
        const name = document.querySelector('.spz_form input[name="company"]')?.value || '';

        // Check if all required fields are filled
        if (firstName !== '' && lastName !== '' && email !== '' && name !== '') {
          // Select the elements to unhide
          const fieldsToShow = ['.spz_form select[name="company_type"]', '.spz_form select[name="country_region_2"]', '.spz_form select[name="job_function_2"]', '.spz_form select[name="state_region_2"]'];

          fieldsToShow.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
              const fieldWrap = element.closest('.hs-form-field');
              if (fieldWrap && fieldWrap.classList.contains('hide')) {
                fieldWrap.classList.remove('hide');
              }
            }
          });
        }
      }

      // Hide the fields (check if each exists)
      fieldsToHide.forEach(selector => { 
        const element = document.querySelector(selector);
        if (element) {
          const fieldWrap = element.closest('.hs-form-field');
          if (fieldWrap) {
            fieldWrap.classList.add('hide');
          }
        }
      });

      // Check on load if fields already have values
      checkAndShowFields();

      // Add event listeners to inputs
      document.querySelectorAll('.spz_form .hs-form-field input').forEach(input => {
        input.addEventListener('keyup', checkAndShowFields);
      });

      // Function to format select option text
      function formatSelectOption(select) {
        const firstOption = select.options[0];

        if (firstOption) {
          let text = firstOption.text;

          // Remove all *
          text = text.replace(/\*/g, '').trim();

          // Convert to sentence case
          text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

          firstOption.text = text;
        }
      }

      // Update select option text for existing selects
      document.querySelectorAll('.hs-form-field select').forEach(select => {
        formatSelectOption(select);
      });

      // Watch for dynamically added select fields
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            // Check if the added node is a select field
            if (node.nodeType === 1) {
              // Check if the node itself is a select
              if (node.tagName === 'SELECT' && node.closest('.hs-form-field')) {
                formatSelectOption(node);
              }
              // Check for select fields within the added node
              const selects = node.querySelectorAll ? node.querySelectorAll('.hs-form-field select') : [];
              selects.forEach(select => {
                formatSelectOption(select);
              });
            }
          });
        });
      });

      // Start observing the form for changes
      const formContainer = document.querySelector('.spz_form') || document.querySelector('.hs-form-field');
      if (formContainer) {
        observer.observe(formContainer, {
          childList: true,
          subtree: true
        });
      }
    });

  }
}

spz1006();


// If you face any issues, please switch to the named-function version of this code and use that instead.
(function() {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
  
  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = true; // true / false / 'both'
  const expName = '1006'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `#` + expName + `_spz_var`; //variantName should be _spz_var, _spz_control etc.
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