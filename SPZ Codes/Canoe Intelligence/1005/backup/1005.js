function spz1005() {
  if (!document.querySelector('body').classList.contains('spz_1005_v1')) {
    document.querySelector('body').classList.add('spz_1005_v1');

    document.querySelectorAll('.next-question').forEach(function (btn) {
      if (btn) {
        btn.classList.add('spz1005_v1');
      }
    });

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
      <div class="demo-slider-wrap">
        <div class="review_slider splide">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <div class="demo-card">
                            <h3 class="arrow-down">75%</h3>
                            <p>Less time <br> managing alts</p>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/1005/Align-Impact-2x.png" alt="Align Impact logo" width="101">
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="demo-card">
                            <h3>90%</h3>
                            <p>Processes <br> automated</p>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_svg/canoeintelligence/1005/icon.svg" alt="Prime Quadrant logo" width="126">
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="demo-card">
                            <h3 class="arrow-down">65%</h3>
                            <p>Less time spent <br> on reporting</p>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_svg/canoeintelligence/1005/Corient-logo.svg" alt="Corient logo" width="69">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `);

    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';
    document.head.appendChild(link);

    function getScript(source, callback) {
      var el = document.createElement("script");
      el.onload = callback;
      el.src = source;
      document.body.appendChild(el);
    }

    function loadSlider() {
      // Load Splide first
      getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js", function () {

        // Load AutoScroll extension
        getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js", function () {

          var sliderEl = document.querySelector(".review_slider");
          var slides = sliderEl.querySelectorAll(".splide__slide");
          var slideCount = slides.length;

          var isMobile = window.innerWidth <= 479;
          var perPage = isMobile ? 2 : 3;
          var shouldSlide = slideCount > perPage;

          var splide = new Splide(".review_slider", {
            perPage: perPage,
            gap: '16px',
            arrows: false,
            pagination: false,
            type: shouldSlide ? 'loop' : 'slide',
            drag: false, // allow swipe always

            autoScroll: isMobile && shouldSlide ? {
              speed: 0.2, // 🔥 very slow continuous scroll
              pauseOnHover: true,
              pauseOnFocus: true,
            } : false,

            breakpoints: {
              479: {
                perPage: 2,
                drag: true, // allow swipe always
                infinite: shouldSlide, // only loop if more slides than perPage
                gap: '12px',
                autoWidth: true,
                padding: {
                  left: '20px', // Creates the left offset
                },
              }
            }
          });

          // Pause auto scroll on interaction (click / touch)
          sliderEl.addEventListener('touchstart', function () {
            if (splide.Components.AutoScroll) {
              splide.Components.AutoScroll.pause();
            }
          });

          sliderEl.addEventListener('mousedown', function () {
            if (splide.Components.AutoScroll) {
              splide.Components.AutoScroll.pause();
            }
          });

          splide.mount(window.splide.Extensions);

          // Resize if viewport changed
          if (window.matchMedia("(min-width: 480px)").matches) {
            console.log('spz Desktop')

            window.addEventListener('resize', function (event) {
              if (window.matchMedia("(max-width: 479.98px)").matches) {
                location.reload();
              }
            }, true);
          } else {
            if (window.matchMedia("(max-width: 479.98px)").matches) {
              console.log('spz Mobile');
            }

            window.addEventListener('resize', function (event) {
              if (window.matchMedia("(min-width: 480px)").matches) {
                location.reload();
              }
            }, true);
          }
          // Resize if viewport changed

        });
      });
    }

    loadSlider();

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

      document.querySelector('.form_wrapper .hbspt-form form .hs-button').classList.add('spz1005_v1');

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

spz1005();


// If you face any issues, please switch to the named-function version of this code and use that instead.
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = true; // true / false / 'both'
  const expName = '1005'; //experiment name should be 1001, 1002, 1003 etc.
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
