function spz1005() {
  if (!document.querySelector('body').classList.contains('spz_1005_v')) {
    document.querySelector('body').classList.add('spz_1005_v');


    document.querySelectorAll('.question-heading').forEach(function (heading, index) {
      if (index === 0) {
        heading.innerHTML = 'What kind of investment professional are you?';
        heading.insertAdjacentHTML('beforebegin', '<small>Get a demo</small>');
      } else if (index === 1) {
        heading.innerHTML = `What would you like <br> to accomplish?`;
        heading.insertAdjacentHTML('beforebegin', '<small>Answer 2 quick questions to personalize your demo</small>');
      }
    });

    // document.querySelector('.hero_section h1').insertAdjacentHTML('beforebegin', logoHTML);
    // document.querySelector('.hero_section .questions-wrap').insertAdjacentHTML('afterbegin', logoHTML);
    // document.querySelector('.hero_section .form_bg').insertAdjacentHTML('afterbegin', logoHTML);

    document.querySelector('.spz_1005_v .hero_section ul li:nth-child(1)').innerHTML = document.querySelector('.spz_1005_v .hero_section ul li:nth-child(1)').innerHTML.replace('500+ portals', '3000+ portals');

    document.querySelector('.spz_1005_v .hero_section ul li:nth-child(2)').innerHTML = `<strong>Transform raw data.</strong> Extract crucial datapoints & manage cap calls, distributions, fund metrics and more with AI.`;

    document.querySelectorAll('.next-question').forEach(function (btn) {
      btn.classList.add('spz1005_v');
    });

    // review slider

    document.querySelector('.heroLeft .hero-list').insertAdjacentHTML('afterend', `
      <div class="demo-slider-wrap">
        <div class="review_slider splide">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <div class="demo-card">
                            <h3 class="arrow-down">75%</h3>
                            <p>Less time <br> managing alts</p>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/1005/Align-Impact-2x.png" alt="Align Impact logo" width="89">
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="demo-card">
                            <h3>90%</h3>
                            <p>Processes <br> automated</p>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_svg/canoeintelligence/1005/icon.svg" alt="Prime Quadrant logo" width="113">
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="demo-card">
                            <h3 class="arrow-down">65%</h3>
                            <p>Less time spent <br> on reporting</p>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_svg/canoeintelligence/1005/Corient-logo.svg" alt="Corient logo" width="57">
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

          var isMobile = window.innerWidth <= 320;
          var perPage = isMobile ? 2 : 3;
          var shouldSlide = slideCount > perPage;

          var splide = new Splide(".review_slider", {
            perPage: perPage,
            gap: '12px',
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
              320: {
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

    var getBtn = setInterval(() => {
      if (document.querySelector('.form_wrapper .hbspt-form form .hs-button')) {
        clearInterval(getBtn);

        if (document.querySelector('label[id*="label-job_function_2"] span:first-child')) {
          document.querySelector('label[id*="label-job_function_2"] span:first-child').textContent = 'Your job function';
        }

        if (document.querySelector('.hbspt-form form select[name="job_function_2"] option[disabled]')) {
          document.querySelector('.hbspt-form form select[name="job_function_2"] option[disabled]').textContent = 'Your job function';
        }

        document.querySelector('.form_wrapper .hbspt-form form .hs-button').classList.add('spz1005_v');

        document.querySelector('label[id*="label-company_type"] span:first-child').textContent = 'Company type';
        document.querySelector('select[id*="company_type"] option[disabled]').textContent = 'Company type';

        const selectBox = '.form_wrapper .hbspt-form form select';
        function updateSelectFirstOption() {
          const selects = document.querySelectorAll(selectBox);
          if (!selects.length) return;

          selects.forEach(function (select) {
            if (select.options && select.options.length) {
              select.options[0].text = select.options[0].text.replace('*', '');
            }
          });
        }
        updateSelectFirstOption();

        document.addEventListener('change', function (e) {
          if (e.target && e.target.matches(selectBox)) {
            updateSelectFirstOption();
          }
        });
      }
    }, 100);


    // change height of the page to fit the sticky bar
    var i = 0;
    var checkAlert = setInterval(() => {
      if (document.querySelectorAll('#hs-web-interactives-top-anchor div[id*="hs-overlay-cta"]').length > 0) {
        clearInterval(checkAlert);
        console.log('stickyBar height is ' + document.querySelectorAll('#hs-web-interactives-top-anchor div[id*="hs-overlay-cta"]')[0].clientHeight);
        var height = document.querySelectorAll('#hs-web-interactives-top-anchor div[id*="hs-overlay-cta"]')[0].clientHeight;
        document.querySelector('#page').style.minHeight = 'calc(100vh - ' + height + 'px)';
      }
      if (i > 100) {
        clearInterval(checkAlert);
      }
      i++;
    }, 100);

    // Hidden field code
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
  }
}

spz1005();
