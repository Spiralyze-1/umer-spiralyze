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
const loadJS_SPZ = (url, implementationCode, location) => {
  var scriptTag = document.createElement("script");
  scriptTag.src = url;
  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;
  location.appendChild(scriptTag);
};

const lottieAnimationURL = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.js";
function heroBannerChanges() {
  document.querySelector('.logos-container > .tabs-wrapper').insertAdjacentHTML('afterend', `
<div class="title-wrapper spz-slider-tittle">
  <div class="title spacing-sm heading-accent-color-green-3 block" data-block-name="title" data-block-status="loaded">
    <div>
      <div data-align="center">
        <h2>A single platform where everything works together</h2>
        <p>BambooHR saves you time and effort so you can focus on what matters most—growing your people, improving the
          employee experience, and taking your business forward.</p>
      </div>
    </div>
  </div>
</div>
<div class="spz-slider-wrapper">
  <div class="spz_sliderList">
    <ul>
      <li>
        <div class="spz_slider_data">
          <div class="spz_slider_content">
            <h3>HR Data & Reporting</h3>
            <div class="tags">
              <ul>
                <li>
                  <span>Employee Records</span>
                </li>
                <li>
                  <span>Automated Reporting</span>
                </li>
                <li>
                  <span>Mobile App</span>
                </li>
              </ul>
            </div>
            <p>BambooHR is your one-stop shop for data management, with instant, pre-built reports, automated workflows, and in-depth analytics to back you up and keep you moving.</p>
            <div class="default-content-wrapper">
              <p class="button-container">
                <a href="#" title="Get a Demo" class="button accent spz_13018_v1" data-path="/fragments/modals/demo-side-by-side" data-url="https://www.bamboohr.com/fragments/modals/demo-side-by-side" data-modal="#demo-side-by-side-modal" data-qa="cta-action">Get a Demo</a>
              </p>
            </div>
          </div>
          <div class="spz_slider_image"> 
            <dotlottie-player
              src="https://res.cloudinary.com/spiralyze/raw/upload/v1782288868/bamboohr/13018/animations/1_HR_Data_Reporting_Image_Desktop.lottie"
              background="transparent"
              speed="1">
            </dotlottie-player>
          </div>
        </div>
      </li>
      <li>
        <div class="spz_slider_data">
          <div class="spz_slider_content">
            <h3>Hiring & Onboarding</h3>
            <div class="tags">
              <ul>
                <li>
                  <span>Applicant Tracking</span>
                </li>
                <li>
                  <span>Candidate Experience</span>
                </li>
                <li>
                  <span>Onboarding Taks</span>
                </li>
              </ul>
            </div>
            <p>Find, hire, and onboard the best talent quickly. With the powerful BambooHR applicant tracking system and proactive onboarding tasks, you can create a compelling candidate experience and better first days for new hires.</p>
            <div class="default-content-wrapper">
              <p class="button-container">
                <a href="#" title="Get a Demo" class="button accent spz_13018_v1" data-path="/fragments/modals/demo-side-by-side" data-url="https://www.bamboohr.com/fragments/modals/demo-side-by-side" data-modal="#demo-side-by-side-modal" data-qa="cta-action">Get a Demo</a>
              </p>
            </div>
          </div>
          <div class="spz_slider_image">
            <dotlottie-player
              src="https://res.cloudinary.com/spiralyze/raw/upload/v1782290093/bamboohr/13018/animations/2_Hiring_Onboarding_Desktop.lottie"
              background="transparent"
              speed="1">
            </dotlottie-player>
          </div>
        </div>
      </li>
      <li>
        <div class="spz_slider_data">
          <div class="spz_slider_content">
            <h3>Payroll, Time & Benefits</h3>
            <div class="tags">
              <ul>
                <li>
                  <span>Time Tracking</span>
                </li>
                <li>
                  <span>Benefits Enrollment</span>
                </li>
                <li>
                  <span>Payroll Automation</span>
                </li>
              </ul>
            </div>
            <p>Track hours and manage multi-rate pay, simplify time off requests, streamline benefits enrollment, and run payroll all from a single platform. No more data double entry or manual approval processes—just easy, accurate payroll for you and your employees.</p>
            <div class="default-content-wrapper">
              <p class="button-container">
                <a href="#" title="Get a Demo" class="button accent spz_13018_v1" data-path="/fragments/modals/demo-side-by-side" data-url="https://www.bamboohr.com/fragments/modals/demo-side-by-side" data-modal="#demo-side-by-side-modal" data-qa="cta-action">Get a Demo</a>
              </p>
            </div>
          </div>
          <div class="spz_slider_image">
            <dotlottie-player
              src="https://res.cloudinary.com/spiralyze/raw/upload/v1782290092/bamboohr/13018/animations/3_Payroll_Time_Benefits_img_Desktop.lottie"
              background="transparent"
              speed="1">
            </dotlottie-player>
          </div>
        </div>
      </li>
      <li>
        <div class="spz_slider_data">
          <div class="spz_slider_content">
            <h3>Employee Experience & Performance</h3>
            <div class="tags">
              <ul>
                <li>
                  <span>Employee Satisfaction</span>
                </li>
                <li>
                  <span>Performance Growth</span>
                </li>
                <li>
                  <span>Recognition & Awards</span>
                </li>
              </ul>
            </div>
            <p>Build the kind of workplace where your people know you’re invested in their happiness and development. Get the tools you need to gather feedback, strengthen employee satisfaction, and grow your people.</p>
            <div class="default-content-wrapper">
              <p class="button-container">
                <a href="#" title="Get a Demo" class="button accent spz_13018_v1" data-path="/fragments/modals/demo-side-by-side" data-url="https://www.bamboohr.com/fragments/modals/demo-side-by-side" data-modal="#demo-side-by-side-modal" data-qa="cta-action">Get a Demo</a>
              </p>
            </div>
          </div>
          <div class="spz_slider_image">
            <dotlottie-player
              src="https://res.cloudinary.com/spiralyze/raw/upload/v1782290092/bamboohr/13018/animations/4_Employee_Experience_Performance_Desktop.lottie"
              background="transparent"
              speed="1">
            </dotlottie-player>
          </div>
        </div>
      </li>
      <li>
        <div class="spz_slider_data">
          <div class="spz_slider_content"> 
            <h3>Compensation</h3>
            <div class="tags">
              <ul>
                <li>
                  <span>Compensation Planning</span>
                </li>
                <li>
                  <span>Benchmarking Data</span>
                </li>
                <li>
                  <span>Streamlined Approvals</span>
                </li>
              </ul>
            </div>
            <p>Take the lead on compensation strategy with access to trusted benchmarking data and advanced planning tools. Create salary bands, streamline approvals, communicate total rewards, and ensure fair pay—all within one easy-to-use platform.</p>
            <div class="default-content-wrapper">
              <p class="button-container">
                <a href="#" title="Get a Demo" class="button accent spz_13018_v1" data-path="/fragments/modals/demo-side-by-side" data-url="https://www.bamboohr.com/fragments/modals/demo-side-by-side" data-modal="#demo-side-by-side-modal" data-qa="cta-action">Get a Demo</a>
              </p>
            </div>
          </div>
          <div class="spz_slider_image">
            <dotlottie-player
              src="https://res.cloudinary.com/spiralyze/raw/upload/v1782290092/bamboohr/13018/animations/5_Compensation_img_Desktop.lottie"
              background="transparent"
              speed="1">
            </dotlottie-player>
          </div>
        </div>
      </li> 
    </ul>
  </div>
</div>
		`);
}

function initScrollLottieAnimations() {
  var players = document.querySelectorAll('.spz_13018_v dotlottie-player');
  if (!players.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || entry.target.dataset.spzPlayed) return;

      var player = entry.target;

      function playOnce() {
        if (player.dataset.spzPlayed) return;
        player.dataset.spzPlayed = 'true';
        observer.unobserve(player);
        if (typeof player.play === 'function') {
          player.play();
        }
      }

      if (player.getState && player.getState().currentState === 'ready') {
        playOnce();
      } else {
        player.addEventListener('ready', playOnce, { once: true });
      }
    });
  }, {
    threshold: 0.35
  });

  players.forEach(function (player) {
    observer.observe(player);
  });
}

// function initScrollLineFill() {
//   var sliderList = document.querySelector('.spz_13018_v .spz_sliderList');
//   if (!sliderList) return;

//   var ul = sliderList.querySelector('ul');
//   if (!ul) return;

//   var ticking = false;

//   ul.querySelectorAll(':scope > li').forEach(function (li) {
//     if (!li.querySelector('.spz-line-fill')) {
//       li.insertAdjacentHTML('afterbegin',
//         '<span class="spz-line-below" aria-hidden="true"></span>' +
//         '<span class="spz-line-fill" aria-hidden="true"></span>' +
//         '<span class="spz-line-fill-below" aria-hidden="true"></span>'
//       );
//     }
//   });

//   function updateLineFill() {
//     var rect = sliderList.getBoundingClientRect();
//     var viewportHeight = window.innerHeight;
//     var totalScrollDistance = rect.height + viewportHeight;
//     var scrolled = viewportHeight - rect.top;
//     var progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
//     var fillLineY = progress * ul.offsetHeight;
//     var isMobile = window.matchMedia('(max-width: 767.98px)').matches;

//     if (isMobile) {
//       var fillPct = ul.offsetHeight ? (fillLineY / ul.offsetHeight) * 100 : 0;
//       var ulTop = ul.getBoundingClientRect().top;
//       ul.style.setProperty('--ul-line-fill', fillPct.toFixed(2) + '%');

//       ul.querySelectorAll(':scope > li').forEach(function (li) {
//         var h3 = li.querySelector('.spz_slider_content h3');
//         if (!h3) return;

//         var leafCenterY = h3.getBoundingClientRect().top - ulTop + 10;
//         var leafHalf = 36.65;
//         var leafStart = leafCenterY - leafHalf;
//         var leafProgress = Math.max(0, Math.min(1, (fillLineY - leafStart) / (leafHalf * 2)));

//         h3.style.setProperty('--leaf-opacity', (0.5 + leafProgress * 0.5).toFixed(3));
//         h3.style.setProperty('--leaf-scale', (0.5 + leafProgress * 0.5).toFixed(3));
//         h3.style.setProperty('--leaf-rotate', (leafProgress * 4).toFixed(2) + 'deg');
//       });
//     } else {
//       ul.style.removeProperty('--ul-line-fill');

//       ul.querySelectorAll(':scope > li h3').forEach(function (h3) {
//         h3.style.removeProperty('--leaf-opacity');
//         h3.style.removeProperty('--leaf-scale');
//         h3.style.removeProperty('--leaf-rotate');
//       });

//       ul.querySelectorAll(':scope > li').forEach(function (li) {
//         var liTop = li.offsetTop;
//         var liHeight = li.offsetHeight;
//         var filledInLi = Math.max(0, Math.min(liHeight, fillLineY - liTop));
//         var leafHalf = parseFloat(getComputedStyle(li).getPropertyValue('--leaf-half')) || 36;
//         var topHeight = liHeight / 2 - leafHalf;
//         var bottomStart = liHeight / 2 + leafHalf;
//         var bottomHeight = liHeight - bottomStart;
//         var topFillPct = topHeight ? Math.max(0, Math.min(100, (filledInLi / topHeight) * 100)) : 0;
//         var bottomFilled = Math.max(0, filledInLi - bottomStart);
//         var bottomFillPct = bottomHeight ? Math.max(0, Math.min(100, (bottomFilled / bottomHeight) * 100)) : 0;
//         var leafProgress = liHeight ? Math.max(0, Math.min(1, filledInLi / liHeight)) : 0;

//         li.style.setProperty('--li-line-fill-top', topFillPct.toFixed(2) + '%');
//         li.style.setProperty('--li-line-fill-bottom', bottomFillPct.toFixed(2) + '%');
//         li.style.setProperty('--leaf-opacity', (0.5 + leafProgress * 0.5).toFixed(3));
//         li.style.setProperty('--leaf-scale', (0.5 + leafProgress * 0.5).toFixed(3));
//         li.style.setProperty('--leaf-rotate', (leafProgress * 4).toFixed(2) + 'deg');
//       });
//     }

//     ticking = false;
//   }

//   function onScroll() {
//     if (!ticking) {
//       ticking = true;
//       requestAnimationFrame(updateLineFill);
//     }
//   }

//   window.addEventListener('scroll', onScroll, { passive: true });
//   window.addEventListener('resize', onScroll, { passive: true });
//   updateLineFill();
// }

function clickEvent() {
  document.addEventListener('click', function (event) {
    if (event.target.matches('.spz_demo_btn')) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  });
}

function init13018() {
  if (document.querySelector('body') && !document.querySelector('.spz_13018_v')) {
    document.querySelector('body').classList.add("spz_13018_v");

    function runExperiment() {
      heroBannerChanges();
      initScrollLottieAnimations();
      // initScrollLineFill();

      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

      // Set the value of the squeezePage variable as needed:
      // true  – if you are using a squeeze page (i.e., the page contains a form)
      // false – if you are not using a squeeze page (i.e., the page does not contain a form)
      // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

      const squeezePage = true; // true / false / 'both'
      const expName = '13018'; //experiment name should be 1001, 1002, 1003 etc.
      const variantName = `#` + expName + `_variant`; //variantName should be _variant, _true_control etc.
      const clientDomain = '.bamboohr.com'; //domain should be .spiralyze.com


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

    if (customElements.get('dotlottie-player')) {
      runExperiment();
    } else {
      loadJS_SPZ(lottieAnimationURL, runExperiment, document.body);
    }
  }
}

waitForElement('main', function () {
  init13018();
});