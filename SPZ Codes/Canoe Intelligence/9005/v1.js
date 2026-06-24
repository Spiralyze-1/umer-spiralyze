

function spz9005() {
  const loadJS = (url, implementationCode, location) => {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
  };
  const gb_load_css = (path) => {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.media = 'all';
    css.href = path;

    document.getElementsByTagName('head')[0].appendChild(css);
  }
  gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");

  if (!document.querySelector('body').classList.contains('spz_9005')) {
    clearInterval(bodyInterval3001);
    document.querySelector('body').classList.add('spz_9005', 'small-form');


    document.querySelector('.spz__compass-hero').insertAdjacentHTML('afterend', `
<section class="spz_hero">
  <div class="spz_hero__container">
    <nav class="spz_hero__navbar">
      <div class="spz_hero__navbar-inner">
        <div class="spz_hero__navbar-side">
          <picture>
            <source media="(max-width: 767.98px)"
              srcset="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-element-mobile.svg">
            <img
              src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-element.svg"
              alt="navbar curve" class="spz_hero__navbar-element">
          </picture>
        </div>
        <div class="spz_hero__navbar-links">
          <a href="https://canoeintelligence.com/canoe-compass-london-2026-hardcode/" class="spz_hero__nav-link">
            Home
            <img
              src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-arrow.svg"
              alt="arrow" class="spz_hero__nav-arrow">
          </a>
          <a href="https://canoeintelligence.com/canoe-compass-london-2026-speakers-hardcode/"
            class="spz_hero__nav-link">
            Speakers
            <img
              src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-arrow.svg"
              alt="arrow" class="spz_hero__nav-arrow">
          </a>
          <a href="#" class="spz_hero__nav-link spz_hero__nav-link--active">
            Resources
            <img
              src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-arrow.svg"
              alt="arrow" class="spz_hero__nav-arrow">
          </a>
        </div>
        <div class="spz_hero__navbar-side spz_hero__navbar-side--right">
          <picture>
            <source media="(max-width: 767.98px)"
              srcset="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-element-mobile.svg">
            <img
              src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/nav-element.svg"
              alt="navbar curve" class="spz_hero__navbar-element">
          </picture>
        </div>
      </div>
    </nav>

    <div class="spz_hero__content">
      <div class="spz_hero__logo">
        <div class="spz_hero__logo-blur">
        </div>
        <div class="spz_hero__logo-grp">
          <img src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/microsite/logo-grp.svg"
            alt="Logo Canoe Compass">
        </div>
      </div>

      <div class="spz__compass-hero__logistics">
        <span>Tuesday, July 7, 2026</span>
        <picture>
          <source media="(max-width: 767.98px)"
            data-srcset="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/spz_compass_star_pink_large.svg"
            srcset="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/spz_compass_star_pink_large.svg">
          <img
            src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/spz_compass_star_pink_small.svg"
            alt="Logistics Separator" class="perfmatters-lazy entered pmloaded"
            data-src="https://canoeintelligence.com/wp-content/themes/canoeintelligence/assets/img/spz_compass_star_pink_small.svg"
            data-ll-status="loaded">
        </picture>
        <span>The Conduit, London</span>
      </div>

    </div>
  </div>
</section>

<section class="spz_resources_section">
  <div class="auto_container">
    <div class="spz_resources_heading">
      <h2>Resources</h2>
      <p>Explore our curated resources below:</p>
    </div>
    <div class="slider_main">
      <div class="splide resources_slider">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_9.webp"
                      alt="The VIP INdex">
                  </picture>
                  <span>RESEARCH</span>
                </div>
                <div class="slider_dataMain">
                  <h3>Canoe 2025 Hedge Fund Report: The VIP Index.</h3>
                  <p>The Canoe Hedge Fund VIP Index was built to answer a question traditional databases cannot: how
                    have the largest, most established hedge funds actually performed?</p>
                  <a href="https://canoeintelligence.com/canoe-2025-hedge-fund-report-the-vip-index/">READ MORE</a>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_2.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_14.webp"
                      alt="Hedge Fund Returns Across Strategies">
                  </picture>
                  <span>RESEARCH</span>
                </div>
                <div class="slider_dataMain">
                  <h3>Canoe 2025 Hedge Fund Report: Hedge Fund Returns Across Strategies.</h3>
                  <p>Drawing from 10.3 million data points from over 330K+ hedge fund documents, our inaugrural Hedge
                    Fund Performance Report shows you an inside look n the actual returns experienced by allocators.
                  </p>
                  <a href="https://canoeintelligence.com/canoe-2025-hedge-fund-report-returns-across-strategies/">READ
                    MORE</a>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_1.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_15.webp"
                      alt="Turning alternative investment">
                  </picture>
                  <span>insights</span>
                </div>
                <div class="slider_dataMain">
                  <h3>Turning alternative investment data into a strategic asset.</h3>
                  <p>Our CSO, Mike Muniz, recaps his recent conversation with Mark Wickersham and reflects how the way
                    firms manage alts data is no longer a back-office function</p>
                  <a href="https://canoeintelligence.com/turning-alternative-investment-data-into-a-strategic-asset/">READ
                    MORE</a>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_6.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_16.webp"
                      alt="Canoe Intelligence and Bloomberg">
                  </picture>
                  <span>in the news</span>
                </div>
                <div class="slider_dataMain">
                  <h3>Canoe Intelligence and Bloomberg launch integration for automated private fund data delivery</h3>
                  <p>Institutional Asset Manager shares the news about the Canoe x Bloomberg partnnership.</p>
                  <a
                    href="https://canoeintelligence.com/canoe-intelligence-and-bloomberg-launch-integration-to-automate-private-fund-data-delivery-supporting-a-total-portfolio-view/">READ
                    MORE</a>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_4.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_11.webp"
                      alt="Linzi Gay">
                  </picture>
                  <span>insights</span>
                </div>
                <div class="slider_dataMain">
                  <h3>From Data to Direction: AI-powered transparency improves confidence in alternatives.</h3>
                  <p>Featuring Frances Brian, Account Executive EMEA, sharing how Agentic AI will forever change how
                    alternative investors extract data, build LP trust, and achieve real-time portfolio transparency.
                  </p>
                  <a
                    href="https://canoeintelligence.com/from-data-to-direction-ai-powered-transparency-improves-confidence-in-alternatives/">READ
                    MORE</a>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_8.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_17.webp"
                      alt="how canoe intelligence is automating the alts world">
                  </picture>
                  <span>insights</span>
                </div>
                <div class="slider_dataMain">
                  <h3>The end of a PDF era: how canoe intelligence is automating the alts world.</h3>
                  <p>Mike Muniz, Chief Strategy Officer, looks into the future of investing in private markets with a
                    sneak peak of what he thinks is the future of PDFs. </p>
                  <a
                    href="https://canoeintelligence.com/the-end-of-the-pdf-era-how-canoe-intelligence-is-automating-the-alts-world/">READ
                    MORE</a>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_7.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_10.webp"
                      alt="Linzi Gay">
                  </picture>
                  <span>insights</span>
                </div>
                <div class="slider_dataMain">
                  <h3>Are we asking enough of AI in alternatives.</h3>
                  <p>AI can be more than just a productivity tool; it can transform your alts operations for the “100x
                    payoff”.</p>
                  <a href="https://canoeintelligence.com/are-we-asking-enough-of-ai-in-alternatives/">READ MORE</a>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_5.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_12.webp"
                      alt="What changes when your alts AI model updates?">
                  </picture>
                  <span>insights</span>
                </div>
                <div class="slider_dataMain">
                  <h3>Why “new and improved” isn’t always better: What changes when your alts AI model updates?</h3>
                  <p>Learn why getting quick productivity gains might actually ruin your workflow, leading to data loss
                    or inaccuracies. </p>
                  <a
                    href="https://canoeintelligence.com/why-new-and-improved-isnt-always-better-what-changes-when-your-alts-ai-model-updates/">READ
                    MORE</a>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="slider_data">
                <div class="slider_image">
                  <picture>
                    <source media="(max-width:767px)"
                      srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_3.webp">
                    <img
                      src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/9005/img_13.webp"
                      alt="Wealth managers">
                  </picture>
                  <span>insights</span>
                </div>
                <div class="slider_dataMain">
                  <h3>Wealth managers find evergreen growth in infrastructure built for scale.</h3>
                  <p>Featuring Oliver Wedlake, Senior Director of EMEA, sharing his latest insights on how wealth
                    managers can find evergreen growth through infrastructure and technology.</p>
                  <a
                    href="https://canoeintelligence.com/wealth-managers-find-evergreen-growth-in-infrastructure-built-for-scale/">READ
                    MORE</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    `);
    
    document.querySelector('.spz__compass__contact__actions a:nth-child(2)').classList.remove('secondary');

    loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {

      const slider = new Splide(".resources_slider", {
        type: "loop",
        rewind: true,
        start: 1,
        focus: "center",
        perPage: 3,
        perMove: 1,
        clones: 4,
        gap: "33.5px",
        breakpoints: {
          1023: {
            perPage: 1.10854,
            perMove: 1,
            gap: "16.4px",
          },
          767: {
            perPage: 1,
            perMove: 1,
            gap: "18px",
          },
        },
        autoWidth: false,
        arrows: true,
        pagination: true,
        autoplay: false,
        autoplaySpeed: 2000,
        interval: 5000,
        speed: 1000,
        easing: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        drag: true,
        direction: 'ltr',
      });

      // function stopAutoplay() {
      //   userInteracted = true;
      //   slider.Components.Autoplay.pause();
      // }

      // Observer to detect when `.resources_slider` is in view
      // var observer = new IntersectionObserver(
      //   function (entries) {
      //     entries.forEach(entry => {
      //       if (entry.isIntersecting) {
      //         slider.Components.Autoplay.play();
      //       } else {
      //         slider.Components.Autoplay.pause();
      //       }
      //     });
      //   },
      //   { threshold: 0.1 }
      // );

      // observer.observe(document.querySelector('.resources_slider'));

      // var updateResourcesSlideScale = function () {
      //   if (!slider.Components || !slider.Components.Slides) return;
      //   slider.Components.Slides.forEach(function (Slide) {
      //     var slideEl = Slide.slide;
      //     if (!slideEl) return;
      //     var card = slideEl.querySelector('.slider_data');
      //     if (card) {
      //       card.style.removeProperty('transform');
      //       card.style.removeProperty('transform-origin');
      //       card.style.removeProperty('transition');
      //     }
      //     var isActive = typeof Slide.isActive === 'function'
      //       ? Slide.isActive()
      //       : slideEl.classList.contains('is-active');
      //     var nextTransform = isActive ? 'scale(1)' : 'scale(0.95)';
      //     if (slideEl.style.transform === nextTransform) return;
      //     slideEl.style.transformOrigin = 'center center';
      //     slideEl.style.transition = 'transform 0.4s ease';
      //     slideEl.style.transform = nextTransform;
      //   });
      // };

      // slider.on('mounted', function () {
      //   requestAnimationFrame(updateResourcesSlideScale);
      // });
      // slider.on('active', function () {
      //   requestAnimationFrame(updateResourcesSlideScale);
      // });
      // slider.on('moved', function () {
      //   requestAnimationFrame(updateResourcesSlideScale);
      // });

      slider.mount();

      var syncSliderParagraphClampTimer;
      var syncSliderParagraphClamp = function () {
        clearTimeout(syncSliderParagraphClampTimer);
        syncSliderParagraphClampTimer = setTimeout(function () {
          document.querySelectorAll('.slider_dataMain p').forEach(function (p) {
            p.style.removeProperty('height');
            p.style.removeProperty('max-height');
            p.style.removeProperty('-webkit-line-clamp');
            p.style.removeProperty('line-clamp');
            p.style.removeProperty('flex-grow');
          });
          requestAnimationFrame(function () {
            document.querySelectorAll('.slider_dataMain p').forEach(function (p) {
              var lineHeight = parseFloat(getComputedStyle(p).lineHeight) || 23.94;
              var boxHeight = p.clientHeight;
              if (boxHeight <= 0) return;
              var lines = Math.max(1, Math.floor(boxHeight / lineHeight));
              var maxHeight = Math.round(lines * lineHeight * 100) / 100;
              var nextClamp = String(lines);
              var nextMaxHeight = maxHeight + 'px';
              if (
                p.style.webkitLineClamp === nextClamp &&
                p.style.lineClamp === nextClamp &&
                p.style.maxHeight === nextMaxHeight
              ) {
                return;
              }
              p.style.setProperty('-webkit-line-clamp', nextClamp);
              p.style.setProperty('line-clamp', nextClamp);
              p.style.setProperty('max-height', nextMaxHeight);
            });
          });
        }, 50);
      };
      var sliderParagraphClampObserver = new ResizeObserver(syncSliderParagraphClamp);
      document.querySelectorAll('.slider_dataMain').forEach(function (main) {
        sliderParagraphClampObserver.observe(main);
      });
      requestAnimationFrame(syncSliderParagraphClamp);
      window.addEventListener('resize', syncSliderParagraphClamp);
      window.addEventListener('load', syncSliderParagraphClamp);
      slider.on('mounted moved', syncSliderParagraphClamp);


      // Add drag event listeners to stop autoplay when user drags
      // slider.on('drag', function () {
      //   stopAutoplay();
      // });

      // slider.on('dragged', function () {
      //   stopAutoplay();
      // });

      // window.addEventListener("load", function () {
      //   if (localStorage.getItem("scrollToSlider") === "true") {
      //     const section = document.querySelector(".slider_wrapper");
      //     if (section) {
      //       section.scrollIntoView({ behavior: "smooth", block: "start" });
      //     }
      //     localStorage.removeItem("scrollToSlider");
      //   }
      // });

    }, document.body);

  }
  setTimeout(function () {
    clearInterval(bodyInterval3001);
  }, 5000)
}
const bodyInterval3001 = setInterval(spz9005, 10);


(function () {

  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
  const expName = '9005'; //experiment name should be #1001, #1002, #1003 etc.
  const variantName = `#` + expName + `_spz_var`; //variantName should be _V1, _V2, _TC etc.
  const clientDomain = '.canoeintelligence.com'; //domain should be .spiralyze.com

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
