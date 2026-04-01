function waitForElement(cssSelector, callback, timeoutMs) {
  var deadline = Date.now() + (timeoutMs || 10000);
  function check() {
    var el = document.querySelector(cssSelector);
    if (el) {
      callback(el);
      return;
    }
    if (Date.now() > deadline) return;
    requestAnimationFrame(check);
  }
  check();
}

function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_1024_v1')) {
    document.querySelector('body').classList.add('spz_1024_v1');

    var arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <g clip-path="url(#clip0_122_1569)">
        <path d="M10 5L5.88739 10H4.12071L7.57878 5.80162H0V4.19839H7.57878L4.12071 0H5.88739L10 5Z" fill="#5851DB"></path>
      </g>
      <defs>
        <clipPath id="clip0_122_1569">
          <rect width="10" height="10" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>`;

    const content = [
      {
        imgTitle: "Data Security Posture Management",
        title: "Data Security Posture Management",
        desc: "Instantly assess your environment for security risks. Tag and secure critical files. Auto-prioritize system vulnerabilities and remediate. Streamline compliance.",
        link: "https://netwrix.com/en/platform/data-security/data-security-posture-management/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063307/netwrix/1024/img-container_14.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063308/netwrix/1024/img-container_15.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063309/netwrix/1024/img-container_16.webp",
          },
        ]
      },
      {
        imgTitle: "Data Discovery & Classification",
        title: "Data Discovery & Classification",
        desc: "Continuously scan and tag sensitive info across file shares, cloud platforms, apps, etc. Assess risk. Instantly relocate data and remove excess permissions.",
        link: "https://netwrix.com/en/platform/data-security/data-discovery-classification/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063300/netwrix/1024/img-container_7.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063342/netwrix/1024/img-container_30.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063297/netwrix/1024/img-container_4.webp",
          },
        ]
      },
      {
        imgTitle: "Data Access Governance",
        title: "Data Access Governance",
        desc: "Auto-revoke access rights based on risk level and security policies. Quarantine compromised users.",
        link: "https://netwrix.com/en/platform/data-security/data-access-governance/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/img-container_35.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/img-container_34.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/img-container_33.webp",
          },
        ]
      },
      {
        imgTitle: "Data Loss Prevention",
        title: "Data Loss Prevention",
        desc: "Monitor endpoints and enforce security policies. Block risky transfers. Lock down devices remotely.",
        link: "https://netwrix.com/en/platform/data-security/data-loss-prevention/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063296/netwrix/1024/img-container_3.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063318/netwrix/1024/img-container_19.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063299/netwrix/1024/img-container_6.webp",
          },
        ]
      },
      {
        imgTitle: "AI Governance",
        title: "AI Governance",
        desc: "Auto-classify private, regulated, and outdated data. Instantly hide from Copilot and LLMs. ",
        link: "https://netwrix.com/en/platform/data-security/ai-governance/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063338/netwrix/1024/img-container_26.webp ",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063320/netwrix/1024/img-container_21.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063327/netwrix/1024/img-container_25.webp",
          },
        ]
      }
    ]
    const IdentityContent = [
      {
        imgTitle: "Directory Security",
        title: "Directory Security",
        desc: "Streamline tasks across Entra ID and Active Directory environments. Access reviews, user management, password policy enforcement, group governance, etc.",
        link: "https://netwrix.com/en/platform/identity-security/directory-security/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063319/netwrix/1024/img-container_20.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063343/netwrix/1024/img-container_31.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063304/netwrix/1024/img-container_12.webp",
          },
        ]
      },
      {
        imgTitle: "Identity Threat Detection and Response",
        title: "Identity Threat Detection and Response",
        desc: "Continuously monitor for identity-based threats in real-time. Block risky AD changes. Shut down compromised accounts. Instantly rollback configurations.",
        link: "https://netwrix.com/en/platform/identity-security/identity-threat-detection-response/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063302/netwrix/1024/img-container_9.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063301/netwrix/1024/img-container_8.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063298/netwrix/1024/img-container_5.webp",
          },
        ]
      },
      {
        imgTitle: "Identity Governance & Administration",
        title: "Identity Governance & <br> Administration",
        desc: "Automate provisioning, access reviews, and policy enforcement. Revoke loose privileges with 1 click.",
        link: "https://netwrix.com/en/platform/identity-security/identity-governance-administration/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063340/netwrix/1024/img-container_28.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063322/netwrix/1024/img-container_23.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063317/netwrix/1024/img-container_18.webp",
          },
        ]
      },
      {
        imgTitle: "Privileged Access Management",
        title: "Privileged Access <br> Management",
        desc: "Auto-provision temporary users. Monitor session activity in real-time. Delete expired accounts.",
        link: "https://netwrix.com/en/platform/identity-security/privileged-access-management/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063339/netwrix/1024/img-container_27.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063310/netwrix/1024/img-container_17.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063304/netwrix/1024/img-container_11.webp",
          },
        ]
      },
      {
        imgTitle: "Identity Security Posture Management",
        title: "Identity Security Posture <br> Management",
        desc: "Identify AD/Entra ID misconfigurations. See how to remediate. Monitor security posture over time.",
        link: "https://netwrix.com/en/platform/identity-security/identity-security-posture-management/",
        image: [
          {
            breakPoint: 1024,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063321/netwrix/1024/img-container_22.webp",
          },
          {
            breakPoint: 768,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063341/netwrix/1024/img-container_29.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773063303/netwrix/1024/img-container_10.webp",
          },
        ]
      }
    ]

    document.querySelector('main>section:nth-of-type(2)').insertAdjacentHTML('afterend', `

      <div class="spz_tabsOuter">
        <div class="auto_container">
          <div class="tabs_inner">
            <div class="spz_tabs">
              <ul>
                <li>
                  <div class="tab_data">
                    <a href="javascript:void(0);" class="spz_data_tab active">Data Security</a>
                  </div>
                </li>
                <li>
                  <div class="tab_data">
                    <a href="javascript:void(0);" class="spz_identity_tab">Identity Security</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="spz_platformSection">
        <div class="auto_container">
          <div class="spz_platformInner">
            <div class="spz_platfromList">
              <ul class="data_securityTab active">
                ${content.map(item => `
                  <li>
                    <div class="spz_platformData">
                      <div class="spz_platformTop">
                        <picture>
                          ${item.image.map(img => `<source media="(min-width:${img.breakPoint}px)" srcset="${img.url}" ></source>`).join("")}
                          <img src="${item.image[1].url}" alt="${item.imgTitle} visualization" />
                        </picture>
                      </div>
                      <div class="spz_platformBottom">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <a href="${item.link}" slug="${item.title}" class="spz1024_v1">Learn more ${arrowIcon}</a>
                      </div>
                    </div>
                  </li>
                `).join("")}
              </ul>
              <ul class="identity_securityTab">
                ${IdentityContent.map(item => `
                  <li>
                    <div class="spz_platformData">
                      <div class="spz_platformTop">
                        <picture>
                          ${item.image.map(img => `<source media="(min-width:${img.breakPoint}px)" srcset="${img.url}" ></source>`).join("")}
                          <img src="${item.image[1].url}" alt="${item.imgTitle} visualization" />
                        </picture>
                      </div>
                      <div class="spz_platformBottom">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <a href="${item.link}" slug="${item.title}" class="spz1024_v1">Learn more ${arrowIcon}</a>
                      </div>
                    </div>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
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
      
    (function lockLayoutSectionImage() {
      var selector = 'main > section:nth-of-type(2) figure.c--layout-d__media-wrapper img';
      var targetSrc = '//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/image.webp';
      var targetResolved = new URL(targetSrc, location.href).href;
      var observeMs = 20000;

      function srcMatches(img) {
        try {
          return new URL(img.src, document.baseURI).href === targetResolved;
        } catch (e) {
          return false;
        }
      }

      waitForElement(selector, function (img) {
        var applying = false;

        function enforce() {
          if (!img.isConnected) return;
          if (applying || srcMatches(img)) return;
          applying = true;
          img.src = targetSrc;
          applying = false;
        }

        enforce();

        var mo;
        var stopTimer = setTimeout(function () {
          if (mo) mo.disconnect();
        }, observeMs);

        mo = new MutationObserver(function () {
          if (!img.isConnected) {
            clearTimeout(stopTimer);
            mo.disconnect();
            return;
          }
          enforce();
        });
        mo.observe(img, { attributes: true, attributeFilter: ['src'] });
      });
    })();

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
            document.querySelector('.c--hero-a__ft-items__content__title').innerHTML = 'Protect data. <br> Secure identities. <br> Safeguard AI.'    
        }

    }

    window.addEventListener('click', function (e) {
      if (e.target.classList.contains('spz_data_tab') && !e.target.classList.contains('active')) {
        e.target.classList.add('active');
        document.querySelector('.spz_identity_tab').classList.remove('active');
        document.querySelector('.data_securityTab').classList.add('active');
        document.querySelector('.identity_securityTab').classList.remove('active');
      } else if (e.target.classList.contains('spz_identity_tab') && !e.target.classList.contains('active')) {
        e.target.classList.add('active');
        document.querySelector('.spz_data_tab').classList.remove('active');
        document.querySelector('.data_securityTab').classList.remove('active');
        document.querySelector('.identity_securityTab').classList.add('active');
      }
      if (e.target.classList.contains('get_a_demo')) {
        const heroCTA = document.querySelector('.c--hero-a__ft-items__content__wrapper button.c--hero-a__ft-items__content__wrapper__btn.js--modal-btn');
        if (heroCTA) {
          heroCTA.click();
        }
      }
    });

    
    (function() {
      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
      
      // Set the value of the squeezePage variable as needed:
      // true  – if you are using a squeeze page (i.e., the page contains a form)
      // false – if you are not using a squeeze page (i.e., the page does not contain a form)
      // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

      const squeezePage = false; // true / false / 'both'
      const expName = '1024'; //experiment name should be 1001, 1002, 1003 etc.
      const variantName = `variant_` + expName; //variantName should be variant_, true_control_ etc.
      const clientDomain = '.netwrix.com'; //domain should be .spiralyze.com


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

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body main >.c--hero-a").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);
