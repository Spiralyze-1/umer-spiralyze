function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_1024_tc')) {
    document.querySelector('body').classList.add('spz_1024_tc');

    document.querySelector('main>section:nth-of-type(3)').insertAdjacentHTML('afterend', `
      <div class="spz__integrations-section c--border-a">
        <div class="f--container">
            <div class="spz__integrations-section__inner">
                <div class="spz__integrations-section__content">
                    <h6 class="spz__integrations-section__content__subtitle">Featured Integrations</h6>
                    <h2 class="spz__integrations-section__content__title">Your entire <br class="hide-mobile"> environment: covered</h2>
                    <p class="spz__integrations-section__content__description">Detect risks across your tech stack, including endpoints, cloud, Kubernetes, SaaS, SIEM, and networks.</p>
                    <div class="spz__integrations-section__content__ctas">
                        <button class="spz__integrations-section__content__cta__button c--hero-a__ft-items__content__wrapper__btn spz1024_v1 primary get_a_demo">Get a demo</button>
                        <a href="https://netwrix.com/en/integrations/" class="spz__integrations-section__content__cta__button c--hero-a__ft-items__content__wrapper__btn spz1024_v1 secondary">Learn more</a>
                    </div>
                </div>
                <div class="spz__integrations-section__image">
                    <picture>
                      <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1025/logos-mobile_3.webp" media="(max-width: 767.98px)">
                      <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1025/logo-tablet_2.webp" media="(max-width: 1249.98px)">
                      <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1025/logos-1920_2.webp" media="(min-width: 1650px)">
                      <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1025/logos-desktop_1.webp" alt="Netwrix Integrations">
                    </picture>
                </div>
            </div>
        </div>
      </div>
      `);


    const heroSection = document.querySelector("body > main > section.c--hero-a");
    if (heroSection) {
        heroSection.classList.add('spz__hero');

        const contentWrapper = heroSection.querySelector(".c--hero-a__ft-items__content");

        if (contentWrapper) {
            contentWrapper.classList.add('spz__hero__content-wrapper');

            const imageColumn = contentWrapper.children[1];

            if (imageColumn) {
                imageColumn.classList.add('spz__hero__image-column');
            }

            const image = document.createElement('img');
            image.src = 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1021/main_image_4x_1.webp';
            image.alt = 'Netwrix Hero Image';
            image.classList.add('spz__hero__image');
            imageColumn.insertAdjacentElement('afterbegin', image);

            imageColumn.classList.remove('f--col-4', 'f--col-tabletm-12', 'f--offset-2', 'f--offset-tabletl-0');
            imageColumn.classList.add('f--col-6', 'f--col-tabletm-12', 'f--offset-0');

            imageColumn.querySelector('div.c--hero-a__ft-items__content__item.js--stacked-cards').classList.add('f--col-8', 'f--col-tabletl-12', 'f--col-tabletm-12', 'f--offset-4', 'f--offset-tabletl-0', 'spz__cards-wrapper');
        }

    }

    window.addEventListener('click', function (e) {
      if (e.target.classList.contains('get_a_demo')) {
        const heroCTA = document.querySelector('.c--hero-a__ft-items__content__wrapper button.c--hero-a__ft-items__content__wrapper__btn.js--modal-btn');
        if (heroCTA) {
          heroCTA.click();
        }
      }
    });


    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '1024';
    //variantName should be _V1, _V2, _TC etc.
    const variantName = `control_` + expName;

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
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

      if (!ExistingExperimentName) {

        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);

      } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

      } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');

        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;

        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
      }
    }
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body main >.c--hero-a").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);

