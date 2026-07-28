(function () {
  const bodyInterval11019 = setInterval(function () {
    if (document.querySelector('body') && !document.querySelector('.spz_11019_v')) {
      clearInterval(bodyInterval11019)
      const squeezePage = false; // true / false / 'both'
      const expName = '11019'; //experiment name should be 1001, 1002, 1003 etc.
      const variantName = `#` + expName + `_variant`; //variantName should be variant_, true_control_ etc.
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
      
      document.querySelector('body').classList.add("spz_11019_v");

      // hero section
      function heroBannerChanges() {
        document.querySelector('main#base > div:first-child').classList.add('spz_hero_banner', 'spz-11019-section1');
        document.querySelector('.form-container.spz_hero_banner').insertAdjacentHTML('afterbegin', `<video class="hero-bg-video" autoplay="" muted="" loop="" playsinline="" preload="auto"><source src="https://res.cloudinary.com/spiralyze/video/upload/v1770798186/bamboohr/11012/Background_Hero.mp4" type="video/mp4"></video>`);

        const pathname = window.location.pathname;
        const cleanPath = pathname.replace(/^\/pl-pages\//, '').replace(/^\//, '');

        // Add the cleaned path as a class to the body
        if (cleanPath) {
          document.body.classList.add(cleanPath);
        }

        if (pathname === '/pl-pages/hr-time-tracking') {
          if (document.querySelector('.spz_hero_banner h1')) {
            document.querySelector('.spz_hero_banner h1').innerHTML = `Employee Time and  <span>Attendance Tracking</span>`;
          }
        }

        // Form Changes Started
        const formInterval11012 = setInterval(function () {
          if (document.querySelector('.form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoButtonRow')) {
            clearInterval(formInterval11012);
            document.querySelectorAll('.form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoFormRow input, .form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoFormRow select[name="Country"]').forEach(function (ele) {
              ele.closest('.mktoFormRow').classList.add('form-input-width50');
            });
          }
        }, 100);
      }
      heroBannerChanges();

      document.querySelector('body main').insertAdjacentHTML("afterbegin", `
        <div class="spz-11019-header">
          <div class="wrapper">
            <a href="https://www.bamboohr.com/" class="spz11019_v logo">
              <picture>
                <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1777627787/bamboohr/11017/logo-mobile.svg" media="(max-width: 767.98px)">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1777627787/bamboohr/11017/logo-desktop.svg" alt="Logo" width="161" height="400">
              </picture>
            </a>
            <a href="https://app.bamboohr.com/login/" class="spz11019_v login-button" >Log In</a>
          </div>
        </div>

        <div class="spz-11019-section2">
          <div class="wrapper">
            <div class="title">Join over 34,000+ businesses that trust BambooHR</span></div>
            <div class="static-logo">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/MasterClassLogo-desktop.png" alt="MasterClass Logo" width="178" height="48">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/BitcoinLogo-desktop.png" alt="Bitcoin Logo" width="106" height="22">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/StanceLogo-desktop.png" alt="Stance Logo" width="113.5" height="24">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/younglivingLogo-desktop.png" alt="Young Living Logo" width="154" height="46">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779271543/bamboohr/11017/revereLogo-desktop.svg" alt="Revere Health Logo" width="173" height="45">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/ziprecruiterLogo-desktop.png" alt="ZipRecruiter Logo" width="130" height="33">
            </div>
            <div class="dynamic-logo">
              <section class="splide splide11019-section2">
                <div class="splide__track">
                  <ul class="splide__list">
                    <li class="splide__slide">
                      <div class="img-wrapper">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277456/bamboohr/11017/MasterClassLogo-mobile.svg" alt="MasterClass Logo" width="150" height="40">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277456/bamboohr/11017/BitcoinLogo-mobile.svg" alt="Bitcoin Logo" width="96" height="20">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277456/bamboohr/11017/StanceLogo-mobile.svg" alt="Stance Logo" width="100" height="22">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277456/bamboohr/11017/younglivingLogo-mobile.svg" alt="Young Living Logo" width="137" height="41">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779276441/bamboohr/11017/revereLogo-mobile.svg" alt="Revere Health Logo" width="155" height="41">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277455/bamboohr/11017/ziprecruiterLogo-mobile.svg" alt="ZipRecruiter Logo" width="114" height="29">
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="img-wrapper">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277456/bamboohr/11017/MasterClassLogo-mobile.svg" alt="MasterClass Logo" width="150" height="40">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277456/bamboohr/11017/BitcoinLogo-mobile.svg" alt="Bitcoin Logo" width="96" height="20">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277456/bamboohr/11017/StanceLogo-mobile.svg" alt="Stance Logo" width="100" height="22">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277456/bamboohr/11017/younglivingLogo-mobile.svg" alt="Young Living Logo" width="137" height="41">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779276441/bamboohr/11017/revereLogo-mobile.svg" alt="Revere Health Logo" width="155" height="41">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1779277455/bamboohr/11017/ziprecruiterLogo-mobile.svg" alt="ZipRecruiter Logo" width="114" height="29">
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="spz-11019-section3">
          <div class="wrapper">
            <div class="small-card-title">Why choose BambooHR® Time & Attendance?</div>
            <div class="small-card-section">
              <div class="card">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1777872227/bamboohr/11017/Checklist.svg" width="48" height="48" alt="Easy review & approval">
                <div class="title">Easy review & approval</div>
                <div class="description">Review and approve timesheets with just a few clicks. Stay informed with automatic reminders.</div>
              </div>
              <div class="card">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1777872227/bamboohr/11017/person-database.svg" width="48" height="48" alt="No more double entry">
                <div class="title">No more double entry</div>
                <div class="description">Sync hours worked, PTO, sick leave, and holiday pay with BambooHR® Payroll, automatically.</div>
              </div>
              <div class="card">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1777872227/bamboohr/11017/calendar-clock.svg" width="48" height="48" alt="Easy, flexible tracking">
                <div class="title">Easy, flexible tracking</div>
                <div class="description">Help employees track their time more accurately with web, mobile, and physical time clocks.</div>
              </div>
              <div class="card">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1777872227/bamboohr/11017/Padlock.svg " width="48" height="48" alt="Fully compliant">
                <div class="title">Fully compliant</div>
                <div class="description">Stay compliant with automatic overtime and PTO tracking.</div>
              </div>
            </div>
            <div class="big-card-wrapper">
              <div class="big-card-title">Automate time and attendance, and transform your workflows</div>
              <div class="big-card-section">
                <div class="card right-image">
                  <div class="image">
                    <img loading="lazy" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/time__attendance_image.webp" width="560" height="456" alt="Track Time Without the Manual Work">
                  </div>
                  <div class="text">
                    <div class="eyebrow">TIME & ATTENDANCE</div>
                    <div class="title">Track Time Without the Manual Work</div>
                    <div class="description">Give your team an easy way to clock in, track hours, and submit timesheets—without chasing down corrections. Real-time tracking keeps everyone aligned from the start.</div>
                    <button class="spz11019_v spz_demo_btn">Book a Demo</button>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                    <img loading="lazy" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/payroll-ready_accuracy_image.webp" width="560" height="456" alt="Turn Hours Into Accurate Payroll">
                  </div>
                  <div class="text">
                    <div class="eyebrow">PAYROLL-READY ACCURACY</div>
                    <div class="title">Turn Hours Into Accurate Payroll</div>
                    <div class="description">Automatically calculate hours, overtime, and totals so payroll runs smoothly. With built-in approvals and clean data, you can reduce errors and stay on schedule.</div>
                    <button class="spz11019_v spz_demo_btn">Book a Demo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="spz-11019-section4">
          <div class="wrapper">
            <div class="left">
              <div class="eyebrow">BambooHR TIME TRACKING TOOLS</div>
              <div class="title">Everything you need to easily track hours and PTO</div>
              <div class="description">From clock-in to payroll, keep every hour accounted for with tools designed to save time and reduce errors.</div>
              <button class="spz11019_v spz_demo_btn">Book a Demo</button>
            </div>
            <div class="right">
              <div class="title">Time Tracking</div>
              <ul>
                <li>Employee timesheets</li>
                <li>Project tracking</li>
                <li>Geolocation</li>
                <li>Automated approval workflows</li>
                <li>Shift differentials</li>
                <li>Automatic overtime calculations for all 50 US states</li>
                <li>Automatic Payroll sync</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="spz-11019-section5">
          <div class="wrapper">
            <div class="big-card-section">
              <div class="card">
                <div class="image">
                  <img loading="lazy" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/time_off_image.webp" width="560" height="456" alt="Make Time-Off Requests Simple">
                </div>
                <div class="text">
                  <div class="eyebrow">TIME OFF</div>
                  <div class="title">Make Time-Off Requests Simple</div>
                  <div class="description">Let employees request time off in seconds while you track balances and approvals in one place. No more back-and-forth emails or manual tracking.</div>
                  <button class="spz11019_v spz_demo_btn">Book a Demo</button>
                </div>
              </div>
              <div class="card right-image">
                <div class="image">
                  <img loading="lazy" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/policies__visibility_image.webp" width="560" height="456" alt="Stay Aligned on Time Off">
                </div>
                <div class="text">
                  <div class="eyebrow">POLICIES & VISIBILITY</div>
                  <div class="title">Stay Aligned on Time Off</div>
                  <div class="description">Automatically track accruals, enforce policies, and give everyone visibility into who’s out. Plan ahead with confidence and avoid coverage gaps.</div>
                  <button class="spz11019_v spz_demo_btn">Book a Demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="spz-11019-section6">
          <div class="wrapper">
            <div class="left">
              <div class="eyebrow">BambooHR TIME-OFF MANAGEMENT</div>
              <div class="title">Everything You Need to Manage Time Off</div>
              <div class="description">Simplify policies, approvals, and tracking so your team always knows what’s available—and what’s approved.</div>
              <button class="spz11019_v spz_demo_btn">Book a Demo</button>
            </div>
            <div class="right">
              <div class="title">Time Off</div>
              <ul>
                <li>Time-off requests & approvals</li>
                <li>Leave tracking</li>
                <li>Time-off calculator</li>
                <li>Who’s Out calendar</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="spz-11019-section7">
          <div class="wrapper">
            <div class="title">Hear from our customers</div>
            <div class="review-wrapper">
              <div class="g2-review">
                <div class="top">
                  <img loading="lazy" src="https://res.cloudinary.com/spiralyze/image/upload/v1777965846/bamboohr/11017/G2-Logo.svg" width="56" height="56" alt="G2 Logo">
                </div>
                <div class="bottom">
                  <img loading="lazy" src="https://res.cloudinary.com/spiralyze/image/upload/v1777965845/bamboohr/11017/Stars.svg" width="128" height="24" alt="Star Logo">
                  <div class="text"><strong>4.4</strong><span>(2,969 reviews)</span></div>
                </div>
              </div>
              <div class="customer-review">
                <section class="splide splide11019-section7">
                  <div class="splide__track">
                    <ul class="splide__list">
                      <li class="splide__slide">
                        <div class="card">
                          <div class="top">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1777187273/bamboohr/11017/stars_only_reviews_summary.svg" width="96" height="18" alt="Star Logo"> 
                            <div class="quote">Core HR functions are now centralized and accessible reducing the administrative burden.</div>
                          </div>
                          <div class="bottom">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/melissa_e.webp" width="64" height="64" alt="Melissa E.">
                            <div class="profile-info">
                              <div class="name">Melissa E.</div>
                              <div class="position">Director of Safety and Risk Management</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="card">
                          <div class="top">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1777187273/bamboohr/11017/stars_only_reviews_summary.svg" width="96" height="18" alt="Star Logo"> 
                            <div class="quote">Streamlines our processes and makes our HR operations more efficient and cohesive.</div>
                          </div>
                          <div class="bottom">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/skye_mcdonald.webp" width="64" height="64" alt="Skye M.">
                            <div class="profile-info">
                              <div class="name">Skye M.</div>
                              <div class="position">HR Generalist, ABI Attachments</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="card">
                          <div class="top">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1777187273/bamboohr/11017/stars_only_reviews_summary.svg" width="96" height="18" alt="Star Logo"> 
                            <div class="quote">BambooHR has given me more time to do the more important things!</div>
                          </div>
                          <div class="bottom">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/jocelyn_edmonds.webp" width="64" height="64" alt="Jocelyn E."> 
                            <div class="profile-info">
                              <div class="name">Jocelyn E.</div>
                              <div class="position">HR Director, 2Great Pediatric Therapy</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="card">
                          <div class="top">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1777187273/bamboohr/11017/stars_only_reviews_summary.svg" width="96" height="18" alt="Star Logo"> 
                            <div class="quote">Out of all the HRIS systems, BambooHR is the easiest to connect with—it's simple, user-friendly, and a breeze to troubleshoot.</div>
                          </div>
                          <div class="bottom">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/christina_f.webp" width="64" height="64" alt="Christina F.">
                            <div class="profile-info">
                              <div class="name">Christina F.</div>
                              <div class="position">Product Support Specialist at Culture Amp</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="card">
                          <div class="top">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1777971696/bamboohr/11017/stars45.svg" width="96" height="18" alt="Star Logo"> 
                            <div class="quote">BambooHR has significantly improved our HR processes, making them more efficient and user-friendly.</div>
                          </div>
                          <div class="bottom">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/julia_r.webp" width="64" height="64" alt="Julia R.">
                            <div class="profile-info">
                              <div class="name">Julia R.</div>
                              <div class="position">Senior People & Culture Manager at Aklamio</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="splide__slide">
                        <div class="card">
                          <div class="top">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1777971696/bamboohr/11017/stars45.svg" width="96" height="18" alt="Star Logo"> 
                            <div class="quote">Easy to set up, implement, and use for both Admins and End Users, with responsive support and accessible training materials.</div>
                          </div>
                          <div class="bottom">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11017/deb_l.webp" width="64" height="64" alt="Deb L.">
                            <div class="profile-info">
                              <div class="name">Deb L.</div>
                              <div class="position">Administration Lead at STS Cymetryc</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
            <button class="spz11019_v spz_demo_btn">Book a Demo</button>
          </div>
        </div>
        <div class="spz-11019-section8">
          <div class="wrapper">
            <div class="title">
              <span>Frequently Asked Questions</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="69" height="66" viewBox="0 0 69 66" fill="none">
                <mask id="mask0_29317_1253" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-1" y="-1" width="70" height="67">
                  <path d="M23.0115 -0.000592299L68.5601 24.2539L45.5484 65.6491L-0.000156141 41.3946L23.0115 -0.000592299Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_29317_1253)">
                  <path d="M11.5086 21.8133C12.8592 19.8351 14.731 18.2386 16.4983 16.6479C18.2138 15.0723 20.2166 13.5266 21.9926 12.0069C24.8041 9.66623 27.6255 7.31659 30.5334 5.08875C31.2951 4.43905 32.5967 4.75361 32.96 5.6711C33.1209 5.99808 33.1065 6.81381 33.1563 7.11484C33.4027 8.7982 33.3239 10.8147 33.0384 12.5697C32.2153 18.8937 29.2814 25.0308 24.256 29.1927L22.1673 30.9624C17.8626 34.557 12.6629 38.9717 8.62582 42.1457C7.50713 42.9081 5.92889 42.0582 5.90899 40.7747L5.85406 40.3006C5.44774 39.3129 5.56126 36.8085 5.80088 35.3271C6.20492 30.4079 8.1522 25.5248 11.5086 21.8133ZM30.7579 16.4377C31.7508 13.3322 31.8459 10.0277 31.3585 6.82475C31.3312 6.84801 31.2821 6.89288 31.2821 6.89288L30.6297 7.45882C25.9339 11.5313 20.7687 15.8318 16.1456 19.626C12.9796 22.7433 10.1802 26.3208 8.61221 30.4782C7.78707 33.6117 7.07008 37.3232 7.6492 40.717C9.41513 39.3197 11.6788 37.3308 13.396 35.8128C15.7185 33.7182 18.0437 31.6533 20.528 29.5974C23.1913 27.4711 25.709 25.1207 27.8426 22.4806C29.2819 20.7247 30.1126 18.588 30.7596 16.4434L30.7579 16.4377Z" fill="#599D15"/>
                  <path d="M10.5526 42.9498C15.1272 38.2969 22.4647 35.2619 29.0507 35.1063C31.3621 35.0453 33.7096 35.3535 35.9253 35.8378C37.3765 36.0048 39.5219 36.338 41.1779 36.6662C44.6686 37.3656 48.1502 38.2636 51.5631 39.2244C51.9117 39.3438 52.4532 39.4287 52.8295 39.5155C54.0574 39.7719 55.6779 40.0858 56.7338 40.4257L57.1477 40.523C57.6784 40.5927 58.2636 41.0415 58.4072 41.5817C58.5924 42.1252 58.3946 42.7676 57.9639 43.1345L57.6516 43.4272C55.5829 45.3779 53.2419 47.0369 50.7281 48.3909C47.7083 49.9866 44.419 51.1122 41.0231 51.6226C39.291 51.8739 37.6146 52.2683 35.8144 51.9391C32.9221 51.8992 29.3225 51.0139 26.2556 50.403C25.2121 50.188 24.1772 49.9492 23.1398 49.7234L23.1256 49.749C23.1033 49.7371 23.0847 49.7271 23.0623 49.7153L23.0102 49.6875C21.5349 49.3468 20.0617 49.0023 18.5932 48.6321C15.9811 47.9841 12.1692 47.0379 9.59733 46.4303C8.71335 46.3193 8.28192 45.1857 8.871 44.534C9.42763 43.9928 9.99064 43.4834 10.5506 42.9535L10.5526 42.9498ZM20.2327 38.5217C16.6989 40.0093 13.3827 42.0339 11.0573 44.9931C17.9169 46.5589 25.0476 48.5483 31.9133 49.999C36.4435 50.4948 41.1822 50.477 45.4972 48.9037C48.3228 47.8483 50.9683 46.3704 53.342 44.5395C54.2204 43.8621 55.0629 43.1276 55.8668 42.3585C50.3052 41.1573 44.4549 39.8592 38.942 38.5704C32.8662 37.157 26.2489 36.6051 20.2307 38.5254L20.2327 38.5217Z" fill="#599D15"/>
                </g>
              </svg>
            </div>
            <div class="carousel-wrapper">
              <div class="child active" data-index="1">
                <div class="carousel-title">
                  <span>What's included in BambooHR Time & Attendance?</span><div class="arrow"></div>
                </div>
                <div class="carousel-content">
                BambooHR Time & Attendance combines Time Off and Time Tracking to help employees track hours and request leave while giving managers fast, reliable approvals. Key features include employee timesheets, project tracking, geolocation, automated approval workflows, shift differentials, automatic overtime calculations, a Who's Out calendar, a PTO calculator, and desktop and mobile access with automatic payroll sync.
                </div>
              </div>
              <div class="child" data-index="2">
                <div class="carousel-title">
                  <span>How do employees track time and request time off?</span><div class="arrow"></div>
                </div>
                <div class="carousel-content">
                Employees can <a tabindex="-1" href="https://www.bamboohr.com/platform/time-and-attendance/time-tracking" title="clock in from anywhere">clock in from anywhere</a>, <a tabindex="-1" href="https://www.bamboohr.com/platform/time-and-attendance/time-off" title="submit time-off requests">submit time-off requests</a>, and view balances through a simple self-service experience on desktop or the <a tabindex="-1" href="https://www.bamboohr.com/platform/hr-data-and-reporting/mobile-app" title="BambooHR® Mobile app">BambooHR® Mobile app</a>. They can edit hours and assign time to projects, while managers review and approve in just a few clicks. Automatic reminders help keep everything on schedule.
                </div>
              </div>
              <div class="child" data-index="3">
                <div class="carousel-title">
                  <span>Can BambooHR automate overtime and support shift differentials?</span><div class="arrow"></div>
                </div>
                <div class="carousel-content">
                Yes. BambooHR includes automatic overtime calculations for all 50 US states and supports shift differentials. These capabilities help reduce manual work and errors, and they support consistent, compliant time calculations alongside automatic PTO tracking.
                </div>
              </div>
              <div class="child" data-index="4">
                <div class="carousel-title">
                  <span>How do approvals and reminders work for timesheets and time off?</span><div class="arrow"></div>
                </div>
                <div class="carousel-content">
                Managers can review and approve timesheets and time-off requests with just a few clicks, supported by automated approval workflows. Automatic reminders keep employees and managers on track, helping you move from submission to approval quickly and consistently.
                </div>
              </div>
              <div class="child" data-index="5">
                <div class="carousel-title">
                  <span>How does BambooHR connect time data with payroll?</span><div class="arrow"></div>
                </div>
                <div class="carousel-content">
                Hours worked, PTO, sick leave, and holiday pay sync automatically with BambooHR Payroll to prevent double entry and improve accuracy. If you don't use BambooHR Payroll, you can export timesheet data for processing in your current payroll system.
                </div>
              </div>
              <div class="child" data-index="6">
                <div class="carousel-title">
                  <span>Is Time Off included in all BambooHR plans?</span><div class="arrow"></div>
                </div>
                <div class="carousel-content">
                Yes. Time-off management is included in every BambooHR plan, so you can track holidays, sick days, PTO, and parental leave without extra purchases. You'll also get tools like a PTO calculator and the Who's Out calendar for clear visibility.
                </div>
              </div>
              <div class="child" data-index="7">
                <div class="carousel-title">
                  <span>What visibility do admins and managers have into employees' time and projects?</span><div class="arrow"></div>
                </div>
                <div class="carousel-content">
                Admins can quickly see how and where employees are spending their time. BambooHR provides clear timesheets and project tracking, so managers can review, approve, and align work with priorities—helping HR catch and prevent errors before they reach payroll.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="spz-11019-section9">
          <div class="wrapper">
            <div class="footer-wrapper desktop">
              <div class="left">
                <div class="links">
                  <div class="top">
                    <a class="spz11019_v" href="https://www.bamboohr.com/site-map">Site Map</a>
                    <a class="spz11019_v" href="/legal/security">Security</a>
                    <a class="spz11019_v" href="/legal/">Legal</a>
                    <a class="spz11019_v" href="/legal/">Privacy</a>
                    <a class="spz11019_v" id="cookie-preferences">Cookie Preferences</a>
                    <a class="spz11019_v" href="https://www.bamboohr.com/faq">FAQ</a>
                    <a class="spz11019_v" href="https://www.bamboohr.com/exp/refer-friend">Refer a Friend, Earn $200</a>
                  </div>
                  <div class="bottom">
                    <a class="spz11019_v" href="/legal/">Rewards Program Terms</a>  
                    <a class="spz11019_v" href="/legal/bamboohr-modern-slavery-statement.pdf">Modern Slavery Statement</a>  
                    <a class="spz11019_v" href="/legal/bamboohr-anti-bribery-statement.pdf">Anti-Bribery Statement</a>  
                    <a class="spz11019_v" href="https://documentation.bamboohr.com/docs/getting-started">API</a>  
                  </div>
                  <a class="donot">
                    Do not Sell or Share my Personal Information.
                  </a>
                </div>
              </div>
              <div class="right">
                <div class="social-media">
                  <div>
                  <a class="spz11019_v" href="https://www.facebook.com/bamboohr/">
                    <svg class="fb" xmlns="http://www.w3.org/2000/svg" width="11" height="21" viewBox="0 0 11 21" fill="none">
                      <g clip-path="url(#clip0_28991_5306)">
                        <path d="M6.41138 22.5004H2.13698V12.4554H0V8.99306H2.13698V6.91484C2.13698 4.09067 3.34282 2.41113 6.76904 2.41113H9.62222V5.87343H7.83947C6.50552 5.87343 6.41696 6.35736 6.41696 7.26003L6.41138 8.99306H9.64286L9.26455 12.4554H6.41138V22.5004Z" fill="currentColor"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_28991_5306">
                          <rect width="10.5" height="21" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  </div>
                  <div>
                  <a class="spz11019_v" href="https://x.com/bamboohr/">
                    <svg class="tw" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M15.6831 0H18.7365L12.0656 7.62474L19.9136 18H13.7685L8.95572 11.7073L3.44867 18H0.393177L7.52843 9.84464L0 0H6.30075L10.6513 5.75161L15.6831 0ZM14.6113 16.1722H16.3034L5.38146 1.73182H3.5659L14.6113 16.1722Z" fill="currentColor"/>
                    </svg>
                  </a>
                  </div>
                  <div>
                  <a class="spz11019_v" href="https://www.instagram.com/bamboohr/">
                    <svg class="ig" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_28991_5312)">
                        <path d="M9.24105 1.0166C11.7508 1.0166 12.0655 1.02724 13.0511 1.07221C14.0348 1.11711 14.7065 1.27331 15.2943 1.50176C15.902 1.73793 16.4174 2.05391 16.9311 2.56765C17.4448 3.08139 17.7608 3.59674 17.997 4.20442C18.2254 4.79226 18.3816 5.46399 18.4265 6.44763C18.4715 7.43325 18.4821 7.74795 18.4821 10.2577C18.4821 12.7674 18.4715 13.0821 18.4265 14.0678C18.3816 15.0514 18.2254 15.7231 17.997 16.311C17.7608 16.9186 17.4448 17.434 16.9311 17.9477C16.4174 18.4615 15.902 18.7775 15.2943 19.0136C14.7065 19.2421 14.0348 19.3983 13.0511 19.4432C12.0655 19.4881 11.7508 19.4987 9.24105 19.4987C6.73131 19.4987 6.41665 19.4881 5.43099 19.4432C4.44735 19.3983 3.77562 19.2421 3.18778 19.0136C2.5801 18.7775 2.06475 18.4615 1.55101 17.9477C1.03727 17.434 0.721288 16.9186 0.485126 16.311C0.256667 15.7231 0.100473 15.0514 0.055574 14.0678C0.0106012 13.0821 0 12.7674 0 10.2577C0 7.74795 0.0106012 7.43325 0.055574 6.44763C0.100473 5.46399 0.256667 4.79226 0.485126 4.20442C0.721288 3.59674 1.03727 3.08139 1.55101 2.56765C2.06475 2.05391 2.5801 1.73793 3.18778 1.50176C3.77562 1.27331 4.44735 1.11711 5.43099 1.07221C6.41665 1.02724 6.73131 1.0166 9.24105 1.0166ZM9.24105 2.68169C6.77357 2.68169 6.48132 2.69108 5.50685 2.73554C4.60589 2.77666 4.11658 2.92721 3.79095 3.05373C3.3596 3.22137 3.05173 3.42165 2.72837 3.74501C2.40501 4.06836 2.20473 4.37624 2.03713 4.80755C1.91057 5.13322 1.76003 5.62253 1.71891 6.52352C1.67445 7.49796 1.66506 7.79021 1.66506 10.2577C1.66506 12.7252 1.67445 13.0174 1.71891 13.9919C1.76003 14.8929 1.91057 15.3822 2.03713 15.7078C2.20473 16.1391 2.40501 16.447 2.72837 16.7704C3.05173 17.0937 3.3596 17.294 3.79095 17.4616C4.11658 17.5882 4.60589 17.7387 5.50689 17.7798C6.48117 17.8243 6.77342 17.8337 9.24105 17.8337C11.7087 17.8337 12.0009 17.8243 12.9752 17.7798C13.8762 17.7387 14.3655 17.5882 14.6912 17.4616C15.1225 17.294 15.4304 17.0937 15.7537 16.7704C16.0771 16.447 16.2774 16.1391 16.445 15.7078C16.5715 15.3822 16.7221 14.8929 16.7632 13.9919C16.8077 13.0174 16.8171 12.7252 16.8171 10.2577C16.8171 7.79021 16.8077 7.49796 16.7632 6.52349C16.7221 5.62253 16.5715 5.13322 16.445 4.80755C16.2774 4.37624 16.0771 4.06836 15.7537 3.74501C15.4304 3.42165 15.1225 3.22137 14.6912 3.05373C14.3655 2.92721 13.8762 2.77666 12.9752 2.73554C12.0008 2.69108 11.7085 2.68169 9.24105 2.68169ZM9.24197 5.28306C11.9899 5.28306 14.2175 7.51068 14.2175 10.2586C14.2175 13.0065 11.9899 15.2341 9.24197 15.2341C6.49408 15.2341 4.26646 13.0065 4.26646 10.2586C4.26646 7.51068 6.49408 5.28306 9.24197 5.28306ZM9.24197 13.4883C11.0257 13.4883 12.4717 12.0423 12.4717 10.2586C12.4717 8.47486 11.0257 7.02884 9.24197 7.02884C7.45826 7.02884 6.01224 8.47486 6.01224 10.2586C6.01224 12.0423 7.45826 13.4883 9.24197 13.4883ZM15.0172 4.96982C15.0172 5.58227 14.5208 6.07877 13.9083 6.07877C13.2959 6.07877 12.7994 5.58227 12.7994 4.96982C12.7994 4.35737 13.2959 3.86091 13.9083 3.86091C14.5208 3.86091 15.0172 4.35737 15.0172 4.96982Z" fill="currentColor"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_28991_5312">
                          <rect width="19.5" height="19.5" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  </div>
                  <div>
                  <a class="spz11019_v" href="https://www.linkedin.com/company/bamboohr/">
                    <svg class="linkedin" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <g clip-path="url(#clip0_28991_5316)">
                        <path d="M20.0893 22.5004H15.9275V15.9753C15.9275 14.4186 15.9002 12.4167 13.764 12.4167C11.5973 12.4167 11.2675 14.1132 11.2675 15.8636V22.5004H7.10964V9.08153H11.0999V10.9163H11.1568C11.7119 9.86104 13.0709 8.74879 15.0964 8.74879C19.3104 8.74879 20.0893 11.5271 20.0893 15.1411V22.5004ZM2.41536 7.24834C1.07826 7.24834 0 6.16499 0 4.82935C0 3.49449 1.07826 2.41113 2.41536 2.41113C3.74701 2.41113 4.82838 3.49449 4.82838 4.82935C4.82838 6.16499 3.74701 7.24834 2.41536 7.24834ZM0.331352 22.5004V9.08153H4.49781V22.5004H0.331352Z" fill="currentColor"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_28991_5316">
                          <rect width="21" height="21" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  </div>
                  <div>
                  <a class="spz11019_v" href="https://www.youtube.com/user/bamboohr/">
                    <svg class="yt" xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                      <path d="M8.03637 10.4464L8.03572 4.01786L13.6607 7.24323L8.03637 10.4464ZM20.6839 3.29344C20.6839 3.29344 20.4796 1.79765 19.8534 1.13897C19.0589 0.274057 18.1683 0.269987 17.7602 0.219789C14.8365 -1.11759e-07 10.451 0 10.451 0H10.4419C10.4419 0 6.05632 -1.11759e-07 3.13262 0.219789C2.72391 0.269987 1.834 0.274057 1.03877 1.13897C0.412634 1.79765 0.208929 3.29344 0.208929 3.29344C0.208929 3.29344 0 5.05039 0 6.80667V8.45373C0 10.2107 0.208929 11.967 0.208929 11.967C0.208929 11.967 0.412634 13.4627 1.03877 14.1214C1.834 14.9863 2.87799 14.9592 3.34286 15.0494C5.01429 15.2163 10.4464 15.2679 10.4464 15.2679C10.4464 15.2679 14.8365 15.2611 17.7602 15.0413C18.1683 14.9904 19.0589 14.9863 19.8534 14.1214C20.4796 13.4627 20.6839 11.967 20.6839 11.967C20.6839 11.967 20.8929 10.2107 20.8929 8.45373V6.80667C20.8929 5.05039 20.6839 3.29344 20.6839 3.29344Z" fill="currentColor"/>
                    </svg>
                  </a>
                  </div>
                </div>
                <div class="copyright">
                  © 2026 Bamboo HR LLC. All Rights Reserved. BambooHR® is a registered trademark of Bamboo HR LLC
                </div>
              </div>
            </div>
            <div class="footer-wrapper tablet">
              <div class="copy">
                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="20" viewBox="0 0 129 20" fill="none">
                  <path d="M17.9841 6.1775C15.6425 6.1775 14.3892 6.97943 13.5097 7.85277L13.2706 8.10544V0.000976562H11.2478V13.0928C11.2478 17.0393 14.2903 19.5 17.7807 19.5C21.6257 19.5 24.539 16.5422 24.539 12.7413C24.539 9.21221 21.502 6.1775 17.9841 6.1775ZM17.7807 17.627C15.233 17.627 13.0755 15.6194 13.0755 12.9308C13.0755 10.2393 14.8922 8.03129 17.8247 8.03129C20.7572 8.03129 22.4832 10.4014 22.4832 12.8813C22.486 15.581 20.6583 17.627 17.7807 17.627Z" fill="white"/>
                  <path d="M36.8411 8.39361H36.8136C35.9534 7.38021 34.6287 6.18555 32.364 6.18555C28.6427 6.18555 25.8311 8.96485 25.8311 12.8152C25.8311 16.8716 28.8515 19.4998 32.2321 19.4998C34.3401 19.4998 35.8764 18.4864 36.7861 17.3934H36.8384V19.0577H38.8942V6.60024H36.8384V8.39361H36.8411ZM32.3915 17.6296C29.3517 17.6296 27.8841 15.1826 27.8841 12.8152C27.8841 10.4479 29.3517 8.02834 32.4437 8.02834C34.865 8.02834 36.8466 9.95902 36.8466 12.8921C36.8466 15.6714 34.7084 17.6296 32.3915 17.6296Z" fill="white"/>
                  <path d="M55.0218 6.18555C52.8616 6.18555 51.3527 7.51203 50.7289 8.75887C50.2067 7.30331 48.6208 6.18555 46.6695 6.18555C45.0562 6.18555 43.7809 7.04515 42.9482 8.16017H42.8959V6.60024H40.8374V19.0577H42.8959V12.1396C42.8959 9.53883 44.2234 8.03109 46.3039 8.03109C48.1509 8.03109 49.2695 9.59101 49.2695 11.6453V19.0577H51.3527V12.1396C51.3527 9.27793 52.9935 8.03109 54.736 8.03109C56.844 8.03109 57.729 9.72009 57.729 11.6453V19.0577H59.7848V11.8018C59.7848 8.13545 57.8334 6.18555 55.0218 6.18555Z" fill="white"/>
                  <path d="M82.6479 6.18555C78.8991 6.18555 75.9858 8.96485 75.9858 12.8152C75.9858 16.5859 78.8744 19.4998 82.6479 19.4998C86.4984 19.4998 89.31 16.4843 89.31 12.8152C89.31 9.04449 86.5259 6.18555 82.6479 6.18555ZM82.6479 17.6268C80.2541 17.6268 78.1186 15.6247 78.1186 12.8152C78.1186 10.0579 79.993 8.03109 82.6479 8.03109C85.3798 8.03109 87.1745 10.1897 87.1745 12.8152C87.1773 15.5451 85.2754 17.6268 82.6479 17.6268Z" fill="white"/>
                  <path d="M68.1396 6.17716C65.798 6.17716 64.5447 6.97909 63.6652 7.85243L63.4261 8.10509V0.975586H61.4033V13.0925C61.4033 17.0389 64.4458 19.4997 67.9362 19.4997C71.7812 19.4997 74.6945 16.5419 74.6945 12.7409C74.6918 9.21187 71.6548 6.17716 68.1396 6.17716ZM67.9362 17.6267C65.3885 17.6267 63.231 15.6191 63.231 12.9304C63.231 10.239 65.0477 8.03094 67.9802 8.03094C70.9127 8.03094 72.6387 10.401 72.6387 12.881C72.6415 15.5806 70.8138 17.6267 67.9362 17.6267Z" fill="white"/>
                  <path d="M113.532 11.9175H106.903V6.60059H105.386V19.058H106.903V13.3044H113.532V19.058H115.049V6.60059H113.532V11.9175Z" fill="white"/>
                  <path d="M125.138 10.2532C125.138 8.53676 124.022 6.60059 120.917 6.60059H117.313V19.058H118.831V13.8537H120.496L124.259 19.058H126.18L122.25 13.7054C123.822 13.395 125.138 12.0246 125.138 10.2532ZM118.831 12.464V7.99024H121.079C122.689 7.99024 123.566 8.79491 123.566 10.256C123.566 11.4616 122.744 12.4668 121.095 12.4668H118.831V12.464Z" fill="white"/>
                  <path d="M128.885 7.05888C128.808 6.88312 128.703 6.72932 128.569 6.60024C128.437 6.47117 128.283 6.36955 128.107 6.2954C127.931 6.22125 127.741 6.18555 127.544 6.18555C127.343 6.18555 127.156 6.22125 126.977 6.2954C126.799 6.36955 126.645 6.47117 126.51 6.60024C126.375 6.72932 126.271 6.88312 126.194 7.05888C126.117 7.23465 126.079 7.42689 126.079 7.63012C126.079 7.83885 126.117 8.03384 126.194 8.21235C126.271 8.39086 126.378 8.54466 126.51 8.67373C126.645 8.80556 126.799 8.90717 126.977 8.97858C127.156 9.04998 127.343 9.08843 127.544 9.08843C127.744 9.08843 127.931 9.05273 128.107 8.97858C128.283 8.90717 128.437 8.80556 128.569 8.67373C128.701 8.54191 128.805 8.38811 128.885 8.21235C128.962 8.03384 129 7.84159 129 7.63012C129.003 7.42689 128.964 7.2374 128.885 7.05888ZM128.646 8.12721C128.585 8.27826 128.5 8.41008 128.393 8.52268C128.286 8.63254 128.159 8.72042 128.013 8.78633C127.868 8.8495 127.711 8.88246 127.544 8.88246C127.373 8.88246 127.214 8.8495 127.068 8.78633C126.922 8.72317 126.793 8.63528 126.686 8.52268C126.579 8.41008 126.494 8.28101 126.433 8.12721C126.373 7.97616 126.342 7.81138 126.342 7.63287C126.342 7.45985 126.373 7.29782 126.433 7.14677C126.494 6.99572 126.579 6.86664 126.686 6.75679C126.793 6.64693 126.92 6.55905 127.068 6.49588C127.214 6.43272 127.373 6.39976 127.544 6.39976C127.711 6.39976 127.868 6.42997 128.013 6.49588C128.159 6.55905 128.286 6.64693 128.393 6.75679C128.5 6.86664 128.585 6.99846 128.646 7.14677C128.706 7.29782 128.736 7.45985 128.736 7.63287C128.739 7.81138 128.709 7.97616 128.646 8.12721Z" fill="white"/>
                  <path d="M128.098 7.61086C128.183 7.53948 128.227 7.42693 128.227 7.27594C128.227 7.11397 128.178 6.99044 128.081 6.91083C127.985 6.83122 127.834 6.79004 127.634 6.79004H126.977V8.48932H127.241V7.7591H127.521L127.983 8.48932H128.266L127.779 7.73988C127.908 7.72341 128.013 7.68223 128.098 7.61086ZM127.516 7.54223H127.238V7.00142H127.587C127.631 7.00142 127.675 7.00416 127.722 7.0124C127.768 7.01789 127.807 7.03162 127.842 7.04809C127.878 7.0673 127.906 7.09201 127.928 7.12495C127.95 7.1579 127.961 7.20457 127.961 7.25947C127.961 7.3281 127.95 7.38026 127.925 7.41595C127.9 7.45438 127.867 7.48183 127.826 7.4983C127.785 7.51752 127.738 7.5285 127.683 7.53124C127.631 7.53948 127.576 7.54223 127.516 7.54223Z" fill="white"/>
                  <path d="M97.2671 6.18555C93.5183 6.18555 90.605 8.96485 90.605 12.8152C90.605 16.5859 93.4935 19.4998 97.2671 19.4998C101.118 19.4998 103.929 16.4843 103.929 12.8152C103.929 9.04449 101.145 6.18555 97.2671 6.18555ZM97.2671 17.6268C94.8732 17.6268 92.7377 15.6247 92.7377 12.8152C92.7377 10.0579 94.6121 8.03109 97.2671 8.03109C99.999 8.03109 101.794 10.1897 101.794 12.8152C101.796 15.5451 99.8945 17.6268 97.2671 17.6268Z" fill="white"/>
                  <path d="M4.83036 0.000961809C4.81387 -0.00453088 4.80563 0.0146931 4.81662 0.0284248C6.89165 2.36831 8.39502 5.19979 9.14808 7.01512C8.19714 5.99623 7.29017 4.93614 6.27327 4.23033C4.21197 2.79399 2.03525 2.08269 0.0179318 1.81355C0.00144142 1.8108 -0.006804 1.83277 0.00693795 1.84376C4.94854 5.80398 3.79697 7.87473 10.2474 8.69314C10.2584 8.69588 10.2694 8.68215 10.2639 8.67117C9.31024 5.73533 8.99967 3.55748 7.38087 1.82728C6.86967 1.2835 5.36905 0.187713 4.83036 0.000961809Z" fill="white"/>
                </svg>
                <div class="text">
                  © 2026 Bamboo HR LLC. All Rights Reserved. BambooHR® is a registered trademark of Bamboo HR LLC
                </div>
              </div>
              <div class="links">
                <div class="top">
                  <a class="spz11019_v" href="https://www.bamboohr.com/site-map">Site Map</a>
                  <a class="spz11019_v" href="/legal/security">Security</a>
                  <a class="spz11019_v" href="/legal/">Legal</a>
                  <a class="spz11019_v" href="/legal/">Privacy</a>
                  <a class="spz11019_v" id="cookie-preferences">Cookie Preferences</a>
                  <a class="spz11019_v" href="https://www.bamboohr.com/ca/legal/rewards-program-terms">Rewards Program Terms</a>
                  </div>
                </div>
                <div class="donot">
                  Do not Sell or Share my Personal Information.
                </div>
          </div>
        </div>
      `)

      document.querySelector('.spz-11019-header').insertAdjacentElement('afterend', document.querySelector('.spz_hero_banner'));

      document.querySelector('.spz_hero_banner > .spacer-wrapper').insertAdjacentHTML('afterend', `
        <div class="tabs-wrapper">
          <div class="border"></div>
          <div class="tabs">
            <div class="tab" data-index="1">Time & Attendance</div>
            <div class="line"></div>
            <div class="tab" data-index="2">Time Tracking Tools</div>
            <div class="line"></div>
            <div class="tab" data-index="3">Time Off</div>
            <div class="line"></div>
            <div class="tab" data-index="4">Time-Off Management</div>
          </div>
          <div class="border"></div>
        </div>
          <div class="tabs-wrapper-mobile">
          <div class="border"></div>
          <div class="dropdown-content">
            <div class="top-text">Jump to: <span class="selection">Select section</span><span class="arrow"></span></div>
          </div>
          <div class="border"></div>
          <div class="dropdown-choices">
            <div class="tab" data-index="1"><span>Time & Attendance</span></div>
            <div class="tab" data-index="2"><span>Time Tracking Tools</span></div>
            <div class="tab" data-index="3"><span>Time Off</span></div>
            <div class="tab" data-index="4"><span>Time-Off Management</span></div>
          </div>
        </div>
      `);


      // form modification
      // const formInterval = setInterval(function () {
      //   if (document.querySelector('.form-col-container') && document.querySelector('.bhrForm__partnerDisclaimer') && document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow.form-input-width50')) {
      //     clearInterval(formInterval)
      //     document.querySelector('.spz_11019_v .form-container .form-col-container').insertAdjacentHTML("afterbegin", `<button class="spz11019_v close-button"></button>`)
      //     document.querySelector('#LblEmail').closest('.mktoFormRow').classList.add('form-input-width50');
      //     document.querySelector('#LblCountry').closest('.mktoFormRow').classList.add('form-input-width50');
      //     if (document.querySelector('.bhrForm__partnerDisclaimer').parentNode.parentNode.classList.contains("form-checkbox-flex")) {
      //       document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy")
      //       document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy")
      //     } else {
      //       document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy")
      //       document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy")
      //     }
      //   }
      // }, 20)

      // footer link
      const footerLinkInterval = setInterval(function () {
        if (document.querySelector('footer .legal a')) {
          clearInterval(footerLinkInterval)
          document.querySelector('.spz-11019-section9 .links .donot').setAttribute('href', document.querySelector('footer .legal a').getAttribute('href'))
        }
      }, 60)

      // event listener click
      document.addEventListener('click', function (e) {
        if (e.target.matches('.spz_demo_btn')) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
        if (e.target.closest('.spz-11019-section1 .tabs-wrapper-mobile .dropdown-content')) {
          document.querySelector('.spz-11019-section1 .tabs-wrapper-mobile').classList.toggle('open')
        } else {
          document.querySelector('.spz-11019-section1 .tabs-wrapper-mobile').classList.remove('open')
        }
        if (e.target.closest('.spz-11019-section1 .tabs-wrapper-mobile .dropdown-choices .tab')) {
          if (document.querySelector('.spz-11019-section1 .tabs-wrapper-mobile .dropdown-choices .tab.selected')) {
            document.querySelector('.spz-11019-section1 .tabs-wrapper-mobile .dropdown-choices .tab.selected').classList.remove('selected')
          }
          e.target.closest('.spz-11019-section1 .tabs-wrapper-mobile .dropdown-choices .tab').classList.add('selected')
          document.querySelector('.spz-11019-section1 .tabs-wrapper-mobile .dropdown-content .top-text .selection').textContent = e.target.closest('.spz-11019-section1 .tabs-wrapper-mobile .dropdown-choices .tab').querySelector('span').textContent
        }
        if (e.target.closest('.spz-11019-section9 #cookie-preferences')) {
          document.querySelector('#teconsent a').click()
        }
        const tab = e.target.closest('.spz-11019-section1 .tabs .tab, .spz-11019-section1 .dropdown-choices .tab');
        if (tab) {
          const targetElements = [
            '.spz-11019-section3',
            '.spz-11019-section4',
            '.spz-11019-section5',
            '.spz-11019-section6',
          ];

          // Get index from data attribute and convert to 0-based index
          const index = parseInt(tab.getAttribute("data-index"), 10) - 1;
          const targetEl = document.querySelector(targetElements[index]);

          if (targetEl) {
            let headerOffset = 0;
            if (window.matchMedia("(min-width: 1199.98px)").matches) {
              headerOffset = document.querySelector('.spz-11019-section1 .tabs-wrapper').offsetHeight;
            } else {
              headerOffset = document.querySelector('.spz-11019-section1 .tabs-wrapper-mobile').offsetHeight;
            }
            const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      })

      // splide
      loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
        var splide11019_2 = new Splide('.splide11019-section2', {
          type: 'loop',
          autoWidth: true,
          arrows: false,
          pagination: false,
          focus: 'center',
          drag: false,
          speed: 150000,
          easing: 'linear',
          autoplay: true,
          interval: 0,
          pauseOnHover: false,
          pauseOnFocus: false,
        });
        var splide11019_7 = new Splide('.splide11019-section7', {
          type: 'loop',
          pagination: false,
          interval: 4000,
          easing: 'linear',
          autoplay: true,
          perPage: 3,
          gap: '10px',
          breakpoints: {
            1279.98: {
              perPage: 2,
            },
            767.98: {
              perPage: 1,
              pagination: true,
              arrows: false,
            },
          },
        });
        setTimeout(function () {
          splide11019_2.mount();
          splide11019_7.mount();
          window.dispatchEvent(new Event('resize'));
        }, 200)
      }, document.body);
      // sticky tabs
      const initStickyElement = (selector) => {
        const tabsElement = document.querySelector(selector);

        if (tabsElement) {
          let stickyTrigger = 0;

          // Function to calculate the trigger point
          const calculateTrigger = () => {
            // Temporarily remove class to get the natural original position
            const isFixed = tabsElement.classList.contains('is-fixed');
            tabsElement.classList.remove('is-fixed');

            // Get absolute distance from top of document
            stickyTrigger = tabsElement.getBoundingClientRect().top + window.scrollY;

            // Put the class back if it was already sticky
            if (isFixed) tabsElement.classList.add('is-fixed');
          };

          const toggleSticky = () => {
            if (window.scrollY >= stickyTrigger) {
              tabsElement.classList.add('is-fixed');
            } else {
              tabsElement.classList.remove('is-fixed');
            }
          };

          // Initial calculation
          calculateTrigger();

          // Event Listeners
          window.addEventListener('scroll', toggleSticky);
          window.addEventListener('resize', () => {
            calculateTrigger();
            toggleSticky();
          });

          // Handle dynamic loading/layout shifts
          const untilLoadedInterval = setInterval(() => {
            calculateTrigger();
            toggleSticky();
          }, 100); // 100ms is usually plenty for performance

          window.addEventListener('load', () => {
            calculateTrigger();
            toggleSticky();
            clearInterval(untilLoadedInterval);
            setTimeout(function () {
              calculateTrigger();
              toggleSticky();
            }, 1000)
          });
          setTimeout(function () {
            clearInterval(untilLoadedInterval);
          }, 4000)
        }
      };

      // --- Initialize for both elements ---
      initStickyElement('.spz-11019-section1 .tabs-wrapper');
      initStickyElement('.spz-11019-section1 .tabs-wrapper-mobile');

      // carousel FAQ
      const closedCarouselAnimation = (curActiveElement) => {
        const curHeight = document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"]').offsetHeight;
        document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"]').classList.remove("active")
        document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"]').removeAttribute("style")
        const afterHeight = document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"]').offsetHeight;
        document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"]').style.height = curHeight + "px"
        setTimeout(function () {
          document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"]').style.height = afterHeight + "px"
        }, 1)
        setTimeout(function () {
          document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"]').removeAttribute("style")
        }, 501)
      }
      const adjustContentHeight = () => {
        const curActiveElementIndex = document.querySelector('.spz-11019-section8 .carousel-wrapper .child.active').getAttribute("data-index");
        const curActiveElement = document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElementIndex + '"]');
        const fullHeight = curActiveElement.offsetHeight;
        curActiveElement.classList.remove("active")
        const prevHeight = curActiveElement.offsetHeight
        curActiveElement.classList.add("active")
        curActiveElement.style.height = prevHeight + "px";
        setTimeout(function () {
          curActiveElement.style.height = fullHeight + "px";
        }, 1)
      }
      const setHeightOnResize = () => {
        const curActiveElementIndex = document.querySelector('.spz-11019-section8 .carousel-wrapper .child.active').getAttribute("data-index");
        const curActiveElement = document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElementIndex + '"]');
        curActiveElement.removeAttribute("style")
        const fullHeight = curActiveElement.offsetHeight;
        curActiveElement.style.height = fullHeight + "px";
      }
      document.querySelector('.spz-11019-section8 .carousel-wrapper').addEventListener('click', function (e) {
        if (e.target.closest(".carousel-title") && !e.target.closest(".clicked")) {
          //remove active
          const curActiveElement = document.querySelector('.spz-11019-section8 .carousel-wrapper .child.active').getAttribute("data-index");
          document.querySelector('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"]').classList.remove("clicked");

          // to add animation when closed
          if (curActiveElement != e.target.closest('.child').getAttribute("data-index")) {
            // add tab index
            // remove  tabindex in  a ahref
            const allAHref = document.querySelectorAll('.spz-11019-section8 .carousel-wrapper .child[data-index="' + curActiveElement + '"] .carousel-content a');
            for (let i = 0; i < allAHref.length; i++) {
              allAHref[i].setAttribute("tabindex", "-1");
            }
            closedCarouselAnimation(curActiveElement)
          }

          // add active
          e.target.closest(".child").classList.add("clicked", "active")
          if (curActiveElement != e.target.closest('.active').getAttribute("data-index")) {
            // remove  tabindex in  a ahref
            const allAHref = document.querySelectorAll('.spz-11019-section8 .carousel-wrapper .child.active .carousel-content a[tabindex="-1"]');
            for (let i = 0; i < allAHref.length; i++) {
              allAHref[i].removeAttribute("tabindex");
            }
            adjustContentHeight();
          }

          // auto scroll on mobile
          if (window.matchMedia("(max-width: 1199.98px)").matches && document.querySelector('.spz-11019-section8 .carousel-wrapper .child.clicked')) {
            setTimeout(function () {
              const targetEl = e.target.closest(".child");
              if (targetEl) {
                // 1. Get the distance from the top of the viewport
                const elementTop = targetEl.getBoundingClientRect().top;

                // 2. Get the current scroll position of the window
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

                // 3. (Optional) Define an offset for a sticky header (e.g., 80px)
                let headerOffset = 0;
                if (!window.matchMedia("(min-width: 1199.98px)").matches) {
                  headerOffset = document.querySelector('.spz-11019-section1 .tabs-wrapper-mobile').offsetHeight;
                }
                // 4. Calculate the final position
                const targetPosition = elementTop + currentScroll - headerOffset;

                // 5. Perform the scroll
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              }
            }, 502)
          }
        }
      });
      window.addEventListener("resize", function () {
        setHeightOnResize()
      })
      // Handle dynamic loading/layout shifts
      const untilLoadedInterval = setInterval(() => {
        setHeightOnResize()
      }, 100); // 100ms is usually plenty for performance

      window.addEventListener('load', () => {
        setHeightOnResize()
        clearInterval(untilLoadedInterval);
      });
      setTimeout(function () {
        clearInterval(untilLoadedInterval);
      }, 4000)
    }
  }, 10)
  setTimeout(function () {
    clearInterval(bodyInterval11019)
  }, 7000)
})();