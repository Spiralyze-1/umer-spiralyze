const bodyInterval13007 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_13007_v1')) {
    clearInterval(bodyInterval13007)
    document.querySelector('body').classList.add("spz_13007_v1")

    document.querySelector('#base').insertAdjacentHTML('afterbegin', `
      <div class="spz_hero">
        <video autoplay muted loop playsinline class="hero_rightAnimation">
          <source
            src="https://res.cloudinary.com/spiralyze/video/upload/v1756210732/bamboohr/13004/assets/Animations/Animation_1_Right.mp4"
            type="video/mp4" />
        </video>
        <video autoplay muted loop playsinline class="hero_leftAnimation">
          <source
            src="https://res.cloudinary.com/spiralyze/video/upload/v1756210732/bamboohr/13004/assets/Animations/Animation_1_Left.mp4"
            type="video/mp4" />
        </video>
        <div class="auto_container">
          <div class="spz_heroInner">
            <div class="spz_heroDetail">
              <h1>More Than an Alternative—BambooHR® Is an <span>Upgrade</span></h1>
            </div>
            <div class="hero_main">
              <div class="hero_imageContainer">
              
                <div class="form_container">
                  <div class="form"></div>
                </div>
                <!-- <div class="hero_imageMain">
                  <picture>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/13004/hr_data__reporting_9.webp"
                    class="blur" alt="Hero image">
                  </picture>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      `);

    // form modification
    const formInterval = setInterval(function () {
      if (document.querySelector('.bhrForm__partnerDisclaimer')) {
        if (window.location.href.includes('/pl-pages/bamboohr-software-basics')) {
          let waitforForm = setInterval(function () {
            if (document.querySelector('.form-wrapper .form-col .form-col-container')) {
              clearInterval(waitforForm);
              document.querySelector('.form_container .form').insertAdjacentElement("afterbegin", document.querySelector('.form-wrapper .form-col .form-col-container'))
              mainFormChanges();
            }
          }, 100)
        } else {
          document.querySelector('.form_container .form').insertAdjacentElement("afterbegin", document.querySelector('.form-wrapper .form-col'))
          clearInterval(formInterval)
          mainFormChanges();
        }
        function mainFormChanges() {
          document.querySelector('.form_container .form-col-container > p:nth-of-type(1) strong').textContent = "Get a Demo & Pricing";
          document.querySelector('#LblEmail').closest('.mktoFormRow').classList.add('width50', 'email-parent')
          document.querySelector('#LblEmail').textContent = "Email*";
          document.querySelector('#LblFirstName').closest('.mktoFormRow').classList.add('fname-parent')
          document.querySelector('#LblLastName').closest('.mktoFormRow').classList.add('lname-parent')
          document.querySelector('#LblPhone').closest('.mktoFormRow').classList.add('phone-parent')
          document.querySelector('#LblTitle').closest('.mktoFormRow').classList.add('job-parent', 'width50')
          document.querySelector('#LblCompany').closest('.mktoFormRow').classList.add('company-parent', 'width50')
          document.querySelector('#LblCountry').closest('.mktoFormRow').classList.add('country-parent', 'width50')
          document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').classList.add('employee_c-parent');
          setTimeout(() => {
            document.querySelector('[name="Phone"]').tabIndex = 4;
            document.querySelector('.job-parent input').tabIndex = 5;
            document.querySelector('.company-parent input').tabIndex = 6;
            document.querySelector('.employee_c-parent select').tabIndex = 7;
            document.querySelector('.country-parent select').tabIndex = 8;
            document.querySelector('.privacy-policy a').tabIndex = 9;
            document.querySelector('.form_container .mktoButton').tabIndex = 10;
          }, 500);
          if (document.querySelector('.bhrForm__partnerDisclaimer').parentNode.parentNode.classList.contains("form-checkbox-flex")) {
            document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy")
            document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy")
          } else {
            document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy")
            document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy")
          }
          /*
          document.querySelector('.mktoPlaceholderDisclaimer__c').closest('.mktoFormRow').classList.add('disclaimer-parent-1',"privacy-policy")
          document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-1',"privacy-policy")
          document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-2',"privacy-policy")
          document.querySelector('#LblDisclaimer__c').closest('.mktoFormRow').classList.add('disclaimer-parent-2',"privacy-policy")
          */
          document.querySelector('.form_container .mktoButton').textContent = "Submit"
          document.querySelector('.form_container .mktoButton').classList.add("spz13007_v1")
          document.querySelector('[name="FirstName"]').tabIndex = 1;
          document.querySelector('[name="LastName"]').tabIndex = 2;
          document.querySelector('[name="Email"]').tabIndex = 3;
          document.querySelector('[name="Title"]').tabIndex = 4;
          document.querySelector('[name="Company"]').tabIndex = 5;
          document.querySelector('[name="Employees_Text__c"]').tabIndex = 6;
          document.querySelector('[name="Phone"]').tabIndex = 7;
          document.querySelector('[name="Country"]').tabIndex = 8;
        }
      }
    }, 20)

    window.addEventListener('click', function (e) {
      const link = e.target.closest('a[title="Get My Demo"]');
      if (link) {
        e.preventDefault();
        const section = document.querySelector(".spz_hero");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });

    (function () {
      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      const expName = '13007'; //experiment name should be #1001, #1002, #1003 etc.
      const variantName = `#` + expName + `_Variant`; //variantName should be _TrueControl, _Variant etc.
      const clientDomain = '.bamboohr.com'; //domain should be .spiralyze.com

      hiddenValue(expName, variantName);

      /***********************************
      ************************************
      DO NOT TOUCH
      BEYOND THIS LINE
      ******************************
      ************************/
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

}, 10)



