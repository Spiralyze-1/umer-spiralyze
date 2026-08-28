// Variation Code
(function() {
    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    
    // Set the value of squeezePage variable as per your requirement:
    // true: if you are using squeeze page (If page has form)
    // false: if you are not using squeeze page (If page does not have form)
    // 'both': if you want to set cookie as well as hidden field value (If page has form and you also want to set cookie).
    
    const squeezePage = 'both'; // true / false / 'both'
    const expName = '1003'; //experiment name should be 1001, 1002, 1003 etc.
    const variantName = `SPZ_#` + expName + `_true_control`; //variantName should be _variant, _true_control etc.
    const clientDomain = '.greenlight.guru'; //domain should be .spiralyze.com


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

function waitForElement(cssSelector, callback) {
  var stop,
    elementCached,
    timeout,
    check = function () {
      try {
        elementCached = document.querySelector(cssSelector)

        if (stop) return

        if (elementCached) {
          callback(elementCached)
          clearTimeout(timeout)
        } else {
          window.requestAnimationFrame(check)
        }
      } catch (err) {
        console.log(err)
      }
    }

  window.requestAnimationFrame(check)

  timeout = setTimeout(function () {
    stop = true
  }, 5000)
}

//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
const expName = '#1002 | Greenlight Guru | Home | Bento' //experiment name should be #1001, #1002, #1003 etc.
const variantName = '#1002_variant1' //variantName should be _V1, _V2, _TC etc.
const clientDomain = '.greenlight.guru' //domain should be .spiralyze.com

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/

waitForElement('body', (docBody) => {
  if (window.location.pathname === '/') {
    docBody.classList.add('spz_1001_v')
    // hiddenValue('#1001 | Greenlight Guru | Home | Hero Tiles', 'SPZ_#1001_variant')

    //DEV 1/5. Put your asana task URL here
    const asana_URL = `https://app.asana.com/1/77217210692853/project/1207357422483610/task/1210926691579563?focus=true`
    //DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
    const template_heroSelector = `.home_page .content-wrap`
    //DEV 3/5. Choose where you redesigned hero section should appear accroding to control hero section row #4
    const template_position = 'beforebegin' //"beforebegin", "beforeend", "afterend"
    //DEV 4/5. Fill hero content object values. See comments inside for details
    const template_heroContent = {
      //[3] Hero heading https://share.cleanshot.com/phmyLc70
      contentHeading: 'QMS and EDC for Medical Devices',
      contentSubHeading: 'Cut time to market by 35%. <br />Simplify medical device development.',
      //[5] Tiles section
      tiles: {
        // Tiles section heading
        tilesHeading: `How can we help?`,
        tilesItems: [
          {
            tileItem: 1,
            tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1755066266/greenlightguru/1001/icon-quality_management_1.svg`,
            imageAlt: `Quality Management`,
            tileHeading: `Quality Management`,
          },
          {
            tileItem: 2,
            tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1754488398/greenlightguru/1001/icon-document_storage.svg`,
            imageAlt: `Document & Change Management`,
            tileHeading: `Document & Change Management`,
          },
          {
            tileItem: 3,
            tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1754488398/greenlightguru/1001/icon-design__development.svg`,
            imageAlt: `Design Controls & Risk`,
            tileHeading: `Design Controls & Risk`,
          },
          {
            tileItem: 4,
            tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1754488398/greenlightguru/1001/icon-compliance_risk__audits.svg`,
            imageAlt: `Compliance & Audit Readiness`,
            tileHeading: `Compliance & Audit Readiness`,
          },
          {
            tileItem: 5,
            tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1754488398/greenlightguru/1001/icon-employee_training.svg`,
            imageAlt: `Clinical Data Management`,
            tileHeading: `Clinical Data Management`,
          },
          {
            tileItem: 6,
            tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1754488398/greenlightguru/1001/icon-clinical_trial_management.svg`,
            imageAlt: `Post-Market Surveillance`,
            tileHeading: `Post-Market Surveillance`,
          },
          {
            tileItem: 7,
            tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1754488398/greenlightguru/1001/icon-post-market_data_capture.svg`,
            imageAlt: `Employee Training`,
            tileHeading: `Employee Training`,
          },
        ],
      },
      //[6] Hero CTA
      heroCTA: {
        CTAText: 'Get a Demo',
        CTAHref: 'https://www.greenlight.guru/medical-device-software-demo',
      },
    }
    const template_additionalSection = {
      //[7] Interface image after the hero section https://share.cleanshot.com/SR5ZgNQ1
      interfaceImage: [
        {
          breakPoint: 1441,
          url: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1001/ui.webp',
        },
        {
          breakPoint: 1025,
          url: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1001/ui.webp',
        },
        {
          breakPoint: 769,
          url: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1001/ui.webp',
        },
        {
          breakPoint: 361,
          url: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1001/ui.webp',
        },
        {
          breakPoint: 320,
          url: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1001/ui.webp',
        },
      ],
    }
    /***********************************
        ************************************
        DO NOT TOUCH
        BEYOND THIS LINE
        ******************************
        ************************/
    // function addHero(formData, whereToPut, template_heroSelector, template_additionalSection) {
    //   const formTemplate = `
    //       <div class="spz-bg-wrap">
    //           <div class="content-section">
    //                 ${formData.contentHeading.replace(/\s/g, '').length !== 0 ? `<p class="content-heading">${formData.contentHeading}</p>` : ''}
    //             ${formData.contentHeading.replace(/\s/g, '').length !== 0 ? `<h1 class="content-subheading">${formData.contentSubHeading}</h1>` : ''}
    //               </div>
    //               ${formData.tiles.length !== 0
    //       ? `<div class="tiles-wrap">
    //                       <div class="tiles-heading">${formData.tiles.tilesHeading}</div>
    //                       <div class="tiles-items">
    //                         ${formData.tiles.tilesItems
    //         .map((item) => {
    //           return `<div class="tile-item" tileItem=${item.tileItem}>
    //                             <img src="${item.tileImageURL}" class="tile-image" alt="${item.imageAlt}"/>
    //                             <div class="wrap-tile-info">
    //                               <div class="tile-heading">${item.tileHeading}</div>
    //                             </div>
    //                           </div>`
    //         })
    //         .join('')}
    //                       </div>
    //                     </div>`
    //       : ``
    //     }
    //                 ${typeof formData.heroCTA !== 'undefined'
    //       ? `<div class="hero-cta-wrap">
    //                       <input type="email" id="spz-email" placeholder="Work Email"/>
    //                       <a href=${formData.heroCTA.CTAHref} class="hero-cta">${formData.heroCTA.CTAText}</a>
    //                     </div>`
    //       : ''
    //     }
    //             ${typeof template_additionalSection.interfaceImage !== 'undefined'
    //       ? `<div class="interface-image-wrap">
    //               <picture>
    //                     ${template_additionalSection.interfaceImage
    //         .map((item) => `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`)
    //         .join('')}
    //                     <img src="${template_additionalSection.interfaceImage[0].url}" alt="Greenlight Dashboard" title="Greenlight Dashboard"  />
    //                   </picture>
    //             </div>
    //             `
    //       : ``
    //     }
    //       </div>`
    //   waitForElement(`${template_heroSelector}`, () => {
    //     document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate)

    //     /* document.querySelector('#spz-email').addEventListener('focus', () => {
    //     document.querySelector('#spz-email').parentElement.classList.add('focus')
    //   })

    //   document.querySelector('#spz-email').addEventListener('keypress', (event) => {
    //     document.querySelector('#spz-email').parentElement.classList.add('focus')
    //     if (event.key === 'Enter') {
    //       localStorage.setItem('spz-1001-email', document.querySelector('#spz-email').value)
    //       document.querySelector('.hero-cta').click()
    //     }
    //   }) */

    //     const emailInput = document.querySelector('#spz-email')
    //     const emailParent = emailInput.parentElement

    //     // Add focus class when focused
    //     emailInput.addEventListener('focus', () => {
    //       emailParent.classList.add('focus')
    //     })

    //     // Add focus class on keypress and handle Enter
    //     emailInput.addEventListener('keypress', (event) => {
    //       emailParent.classList.add('focus')
    //       if (event.key === 'Enter') {
    //         localStorage.setItem('spz-1001-email', emailInput.value)
    //         document.querySelector('.hero-cta').click()
    //       }
    //     })

    //     // Add/remove has-value class based on content
    //     emailInput.addEventListener('input', () => {
    //       if (emailInput.value.trim() !== '') {
    //         emailParent.classList.add('has-value')
    //       } else {
    //         emailParent.classList.remove('has-value')
    //       }
    //     })

    //     document.querySelector('#spz-email').addEventListener('blur', () => {
    //       document.querySelector('#spz-email').parentElement.classList.remove('focus')
    //       if (document.querySelector('#spz-email').value.length > 0) {
    //         document.querySelector('#spz-email').parentElement.classList.add('filled')
    //       } else {
    //         document.querySelector('#spz-email').parentElement.classList.remove('filled')
    //       }
    //     })

    //     document.querySelector('.hero-cta').addEventListener('mousedown', () => {
    //       localStorage.setItem('spz-1001-email', document.querySelector('#spz-email').value)
    //     })
    //     document.querySelector('.hero-cta').addEventListener('touchstart', () => {
    //       localStorage.setItem('spz-1001-email', document.querySelector('#spz-email').value)
    //     })

    //     const tiles = document.querySelectorAll('.tiles-items .tile-item')

    //     // Load active tiles from localStorage
    //     const activeTiles = JSON.parse(localStorage.getItem('activeTiles')) || []

    //     tiles.forEach((item, index) => {
    //       if (activeTiles.includes(index)) {
    //         item.classList.add('active') // Restore active state
    //       }

    //       item.addEventListener('click', (e) => {
    //         e.stopPropagation()

    //         let targetTile = e.target
    //         if (!targetTile.classList.contains('tile-item')) {
    //           targetTile = targetTile.closest('.tile-item') // Get the closest tile item
    //         }

    //         targetTile.classList.toggle('active')

    //         // Update localStorage
    //         updateLocalStorage()
    //       })
    //     })

    //     function updateLocalStorage() {
    //       const activeIndices = []
    //       tiles.forEach((tile, index) => {
    //         if (tile.classList.contains('active')) {
    //           activeIndices.push(index)
    //         }
    //       })
    //       localStorage.setItem('activeTiles', JSON.stringify(activeIndices))
    //     }

    //     // Chnage percentage number
    //     const observer = new MutationObserver((mutations) => {
    //       if (
    //         document.querySelector('#spz-email') &&
    //         document.querySelector('#spz-email').value.length > 0 &&
    //         !document.querySelector('#spz-email').parentElement.classList.contains('filled')
    //       ) {
    //         document.querySelector('#spz-email').parentElement.classList.add('filled')
    //       }
    //     })

    //     // Start observing changes in the body
    //     observer.observe(document.body, {
    //       subtree: true,
    //       childList: true,
    //       characterData: true,
    //     })
    //   })
    // }
    // addHero(
    //   template_heroContent, //object with the data
    //   template_position, //any value you pass using insertAdjacentHTML
    //   template_heroSelector,
    //   template_additionalSection
    // )
  } else if (window.location.pathname === '/medical-device-software-demo') {
    waitForElement('#hsForm_ed3e533e-40c2-419f-ba0d-003c771ea176_5783', () => {
      const savedEmail = localStorage.getItem('spz-1001-email')
      if (savedEmail) {
        const emailInput = document.querySelector('input[name="email"]')
        if (emailInput) {
          emailInput.value = savedEmail
          // emailInput.dispatchEvent(new Event('input', { bubbles: true }))
          emailInput.closest('.spz-input-wrap')?.classList.add('has-value')
        }
      }
    })
  }
});


waitForElement('body', (docBody) => {
    if (window.location.pathname === '/') {
        docBody.classList.add('spz_1002_v');

        document.querySelectorAll("section.u4m-cards .u4m-cards-wrap .inner .intro .eyebrow.gradient").forEach(function (heading) {
            const sectionHeading = heading.textContent.trim();
            if (sectionHeading === "Maximize Efficiency") {
                heading.closest("section").classList.add("spz_1002__hide");
            }
        });

        
        function addNewSection(targetSection) {
        if (targetSection) {
                targetSection.insertAdjacentHTML('afterend', `<section class="spz_1002__solution">
                    <div class="container">
                        <h2>Key Features</h2>
                        <div class="spz_1002_card_outer">
                            <div class="spz_card card_light_green big-card">
                                <div class="spz_card_textOuter">
                                    <h5 class="spz_card_title">Design and development</h5>
                                    <p class="spz_card_para">Digitally manage your DHF with built-in traceability between design inputs, outputs, verifications, and product risk controls.</p>
                                    <a href="/design-control-software">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_27335_8058)">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H10V6.5H0V8.5Z" fill="#9756FF"></path>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.504L14 7.50199L8 0.5V14.504Z" fill="#9756FF"></path>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_27335_8058">
                                            <rect width="14" height="14" fill="white" transform="translate(0 0.5)"></rect>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </a>
                                </div>
                                <div class="spz_imgOuter">
                                <picture>
                                    <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_01_mobile.webp" type="image/webp">
                                    <source media="(max-width:1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_01_tablet.webp" type="image/webp">
                                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/design__dev_7.webp" alt="compliance risk image">
                                </picture>
                                </div>
                            </div>
                            <div class="spz_card card_light_green small-card">
                                <div class="spz_card_textOuter">
                                    <h5 class="spz_card_title">Compliance and risk management</h5>
                                    <p class="spz_card_para">Track and manage operational risk across your QMS – from regulatory requirements to audit readiness and CAPA trends.</p>
                                    <a href="/medical-device-audit">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_27335_8058)">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H10V6.5H0V8.5Z" fill="#9756FF"></path>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.504L14 7.50199L8 0.5V14.504Z" fill="#9756FF"></path>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_27335_8058">
                                            <rect width="14" height="14" fill="white" transform="translate(0 0.5)"></rect>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </a>
                                </div>
                                <div class="spz_imgOuter">
                                <picture>
                                    <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_02_mobile.webp" type="image/webp">
                                    <source media="(max-width:1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_02_tablet.webp" type="image/webp">
                                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/compliance_and_risk_management.webp" alt="quality management image">
                                </picture>
                                </div>
                            </div>
                            <div class="spz_card card_light_green small-card">
                                <div class="spz_card_textOuter">
                                    <h5 class="spz_card_title">Documents and training management</h5>
                                    <p class="spz_card_para">Control documents, changes, and training in one place – with automated routing, audit trails, and role-based access.</p>
                                    <a href="/document-management-software">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_27335_8058)">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H10V6.5H0V8.5Z" fill="#9756FF"></path>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.504L14 7.50199L8 0.5V14.504Z" fill="#9756FF"></path>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_27335_8058">
                                            <rect width="14" height="14" fill="white" transform="translate(0 0.5)"></rect>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </a>
                                </div>
                                <div class="spz_imgOuter">
                                <picture>
                                    <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_03_mobile.webp" type="image/webp">
                                    <source media="(max-width:1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_03_tablet.webp" type="image/webp">
                                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/documents_and_training_management.webp" alt="document management image">
                                </picture>
                                </div>
                            </div>
                            <div class="spz_card card_light_green big-card">
                                <div class="spz_card_textOuter">
                                    <h5 class="spz_card_title">Quality processes and events</h5>
                                    <p class="spz_card_para">Log, track, and resolve quality events in a connected system that links CAPAs, training, and documentation.</p>
                                    <a href="/quality-management-software">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_27335_8058)">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H10V6.5H0V8.5Z" fill="#9756FF"></path>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.504L14 7.50199L8 0.5V14.504Z" fill="#9756FF"></path>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_27335_8058">
                                            <rect width="14" height="14" fill="white" transform="translate(0 0.5)"></rect>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </a>
                                </div>
                                <div class="spz_imgOuter">
                                <picture>
                                    <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_04_mobile.webp" type="image/webp">
                                    <source media="(max-width:1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_04_tablet.webp" type="image/webp">
                                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/quality_processes_and_events.webp" alt="design dev image">
                                </picture>
                                </div>
                            </div>
                            <div class="spz_card card_light_green big-card">
                                <div class="spz_card_textOuter">
                                    <h5 class="spz_card_title">Clinical data management</h5>
                                    <p class="spz_card_para">Capture compliant, audit-ready clinical data across every phase of your study - from first-in-human to post-market.</p>
                                    <a href="/clinical-electronic-data-capture-software">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_27335_8058)">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H10V6.5H0V8.5Z" fill="#9756FF"></path>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.504L14 7.50199L8 0.5V14.504Z" fill="#9756FF"></path>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_27335_8058">
                                            <rect width="14" height="14" fill="white" transform="translate(0 0.5)"></rect>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </a>
                                </div>
                                <div class="spz_imgOuter">
                                <picture>
                                    <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_05_mobile.webp" type="image/webp">
                                    <source media="(max-width:1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/image_05_tablet.webp" type="image/webp">
                                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/clinical_data_management.webp" alt="clinical trials post market research image">
                                </picture>
                                </div>
                            </div>
                            <div class="spz_card card_light_green small-card author_card">
                                <div class="blue_quote">
                                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1755775532/greenlightguru/1002/quote.svg" alt="quote icon">
                                </div>
                                <h5>“Lets us bring safer, higher-quality devices to success while maintaining a quality culture throughout the device lifecycle.”</h5>
                                <div class="author-info-outer">
                                    <div class="author_image">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1002/avatar_1.webp" alt="author image">
                                    </div>
                                    <div class="author_info">
                                        <p class="author_name">Dr. Gabriel Georges</p>
                                        <p class="author_designation">Co-Founder & Chief Scientific Officer<br>Puzzle Medical</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="spz_1002_cta_outer">
                            <a href="/contact-sales-multi-product" class="blue_btn">Contact Sales</a>
                            <a href="/medical-device-software-demo" class="white_btn">Get a Demo</a>
                        </div>
                    </div>
                </section>`);
            }	else {
                console.warn("⚠️ Target section not found!");
            }
        }
        
        waitForElement('.spz_1002__hide', () => {
            const targetSection = document.querySelector(".spz_1002__hide");
            if (targetSection) {
                addNewSection(targetSection);
            }
        });

        waitForElement('.spz_1002__solution', () => {
            document.querySelector('.spz_1002__solution').closest('div.hs_cos_wrapper').previousElementSibling.querySelector('.hero-text h3 > div').textContent = 'Greenlight Guru helps medical device companies stay organized and compliant throughout the product lifecycle—iterating, growing, and improving patient outcomes.';
            document.querySelector('.spz_1002__solution').parentElement.nextElementSibling.classList.add('spz_hide_section');
        });
    }
});
