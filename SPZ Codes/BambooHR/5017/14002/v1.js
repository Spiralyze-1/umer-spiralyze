const bodyInterval14002 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz_14003_v1')) {
      clearInterval(bodyInterval14002)
      document.querySelector('body').classList.add("spz_14003_v1")

      document.querySelector('main>.form-container').insertAdjacentHTML('afterend', `
    <div class="spz_hero">
      <div class="auto_container">
        <div class="spz_heroInner">
          <div class="hero_main">
            <div class="hero_imageContainer">
              <div class="form_container">
                <div class="form"></div>
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
                  document.querySelector('.form_container .form-col-container > p:nth-of-type(1) strong').innerHTML = "Get BambooHR <br>Plans and Pricing";
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


                  document.querySelector('.spz_14003_v1 .form_container .form .mktoForm .mktoFormRow.email-parent label#LblEmail').textContent = `Email Address*`;

                  document.querySelector('.spz_14003_v1 .form_container .form .mktoButton').textContent = `Get Pricing`;

                  /*
                  document.querySelector('.mktoPlaceholderDisclaimer__c').closest('.mktoFormRow').classList.add('disclaimer-parent-1',"privacy-policy")
                  document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-1',"privacy-policy")
                  document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-2',"privacy-policy")
                  document.querySelector('#LblDisclaimer__c').closest('.mktoFormRow').classList.add('disclaimer-parent-2',"privacy-policy")
                  */
                  document.querySelector('.form_container .mktoButton').textContent = "Submit"
                  document.querySelector('.form_container .mktoButton').classList.add("spz14003_v1")
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
          const link = e.target.closest('a[title="Get Quote"], a[title="Get a Free Price Quote"]');
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
          const expName = '14002'; //experiment name should be #1001, #1002, #1003 etc.
          const variantName = `#` + expName + `_Variant1`; //variantName should be _TrueControl, _Variant etc.
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

function handleForm() {
  if (document.querySelectorAll('.spz_custom_overlay').length === 0) {
      document.querySelector('body.spz14002_v1').insertAdjacentHTML('afterbegin', `<div class="spz_custom_overlay"></div>`);
  }
  if (document.querySelectorAll('body.spz14002_v1 .form_container .close_icon').length === 0) {
      document.querySelector('body.spz14002_v1 .form_container').insertAdjacentHTML('afterbegin', `<div class="close_icon"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<path d="M13.8758 4.62549L4.62524 13.876M13.8758 13.876L4.62524 4.62549" stroke="#95918F" stroke-width="1.54176" stroke-linecap="round"/>
</svg></div>`);
  }

  const formBtnInterval = setInterval(function () {
      if (document.querySelectorAll('body.spz14002_v1 .form_container .form .mktoButton').length > 0) {
          clearInterval(formBtnInterval);
          document.querySelector('body.spz14002_v1 .form_container .form .mktoButton').textContent = `Get Pricing`;
      }

      document.querySelectorAll('.spz14002_v1 .form_container .form select').forEach(function (ele) {
          ele.addEventListener('change', function () {
              var row = this.closest('.mktoFormRow');
              if (row) {
                  row.classList.add('has-value');
              }
          });
      });

      const phoneParent = document.querySelector('.spz_14003_v1 .form_container .form .phone-parent');
      const countryParent = document.querySelector('.spz_14003_v1 .form_container .form .country-parent');
      if (phoneParent && countryParent) {
          countryParent.insertAdjacentElement('afterend', phoneParent);
      }

      const buttonElem = document.querySelector('.spz_14003_v1 .form_container .form .mktoButtonRow');
      if (buttonElem) {
          phoneParent.insertAdjacentElement('afterend', buttonElem);
      }

      // Remove tabindex from all form inputs first to reset
      setTimeout(function () {
          const form = document.getElementById('mktoForm_1240');
          // const allInputs = form.querySelectorAll('input, select, textarea');

          if (form) {
              const allInputs = form.querySelectorAll('input, select, textarea');
              allInputs.forEach(input => {
                  input.removeAttribute('tabindex');
                  console.log('tabindex removed');
              });


              // allInputs.forEach(input => {
              //     input.removeAttribute('tabindex');
              //     console.log('tabindex removed');
              // });

              // Now set tabindex based on visual order
              const formRows = form.querySelectorAll('.mktoFormRow');
              let tabIndexCounter = 1;

              // Create an array of rows with their computed order
              const rowsWithOrder = Array.from(formRows).map(row => ({
                  element: row,
                  order: parseInt(window.getComputedStyle(row).order) || 0
              }));

              // Sort by order property
              rowsWithOrder.sort((a, b) => a.order - b.order);

              // Apply tabindex based on sorted order
              rowsWithOrder.forEach(row => {
                  const input = row.element.querySelector('input, select, textarea');
                  if (input) {
                      input.setAttribute('tabindex', tabIndexCounter++);
                  }
              });
          }


          document.querySelectorAll('.spz14002_v1 .form_container .form select').forEach(function (select) {
              const selectVal = select.value;
              if (selectVal !== '') {
                  select.closest('.mktoFormRow').classList.add('has-value');
                  if (select.previousElementSibling.classList.contains('focus')) {
                      select.previousElementSibling.classList.remove('focus');
                  }
              }
          });


          const spzBtnInterval = setInterval(function () {
              const btn = document.querySelector('.spz14002_v1 .form_container .form .mktoButton');

              if (btn) {
                  btn.textContent = 'Get Pricing';
                  clearInterval(spzBtnInterval); // stop once found
              }
          }, 200); // runs every 200ms

      }, 400);

  }, 100);

}

function tableSectionChanges() {

  // Select the elements
  const titleContainer = document.querySelector('.spz_14003_v1 .spz_hero + .section.title-container');
  const tableElem = document.querySelector('body.spz14002_v1 .package-comparison.table-container');

  // Create the new wrapper div
  const wrapper = document.createElement('div');
  wrapper.className = 'spz_new_heroBanner';

  // Insert the wrapper before the first element
  titleContainer.parentNode.insertBefore(wrapper, titleContainer);

  // Move both elements inside the wrapper
  wrapper.appendChild(titleContainer);
  wrapper.appendChild(tableElem);

  document.querySelector('body.spz14002_v1 .spz_new_heroBanner .section.title-container h2').textContent = 'Get BambooHR plans and pricing';
  document.querySelector('body.spz14002_v1 .spz_new_heroBanner .section.title-container p').textContent = ' Starting at just $10/mo per employee';

  // Create new buttons
  const tableBtnInterval = setInterval(() => {
      if (document.querySelectorAll('.package-comparison .table-wrapper .table.comparison th p.button-container strong .button.accent').length > 0) {
          clearInterval(tableBtnInterval);
          document.querySelectorAll('.package-comparison .table-wrapper .table.comparison th p.button-container strong .button.accent').forEach(function (ele) {
              const next = ele.nextElementSibling;
              if (!next || !next.classList.contains('custom_pricing_btn')) {
                  ele.insertAdjacentHTML('afterend', `<div class="custom_pricing_btn">Get Pricing</div>`);
              }
          });
      }
  }, 100);

  const tableSubTitleInterval = setInterval(() => {
      if (document.querySelectorAll('.package-comparison .table-wrapper .table table thead th h2').length > 2) {
          clearInterval(tableSubTitleInterval);
          document.querySelectorAll('.package-comparison .table-wrapper .table table thead th h2').forEach(function (tableHeading) {
              const descriptions = {
                  'Core': 'For small businesses',
                  'Pro': 'For medium-sized businesses',
                  'Elite': 'For large businesses'
              };

              const tableTitle = tableHeading.textContent.trim();
              const newDescription = descriptions[tableTitle];

              if (newDescription) {
                  const next = tableHeading.nextElementSibling;
                  if (next?.tagName.toLowerCase() === 'p') {
                      next.textContent = newDescription;
                  }
              }

          });
      }
  }, 100);

  // Remove tooltip class from all TD
  document.querySelectorAll('body.spz14002_v1 .package-comparison .table-wrapper .table table tbody tr td').forEach(function (tableData) {
      if (tableData.classList.contains('has-popup-data')) {
          tableData.classList.remove('has-popup-data');
      }

      // Chnage Check icon
      const checkIcon = tableData.querySelector('span.icon');
      const iconInterval = setInterval(function () {
          if (checkIcon) {
              clearInterval(iconInterval);
              checkIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M8.75 0C7.01942 0 5.32769 0.513179 3.88876 1.47464C2.44983 2.4361 1.32832 3.80267 0.666058 5.40152C0.00379123 7.00037 -0.169488 8.75971 0.168133 10.457C0.505753 12.1544 1.33911 13.7135 2.56282 14.9372C3.78653 16.1609 5.34563 16.9942 7.04296 17.3319C8.7403 17.6695 10.4996 17.4962 12.0985 16.8339C13.6973 16.1717 15.0639 15.0502 16.0254 13.6112C16.9868 12.1723 17.5 10.4806 17.5 8.75C17.5 6.42936 16.5781 4.20376 14.9372 2.56282C13.2962 0.921872 11.0706 0 8.75 0ZM7.5 12.2442L4.375 9.11925L5.36913 8.125L7.5 10.2558L12.1313 5.625L13.1286 6.61619L7.5 12.2442Z" fill="#2E7918"/>
        </svg>`
          }
      }, 100);
  });

  // Moving table list points in table 1
  const tablePoint2 = document.querySelector('body.spz14002_v1 .package-comparison.table-container .table-wrapper:first-child table tbody tr:nth-child(2)');
  const tablePoint5 = document.querySelector('body.spz14002_v1 .package-comparison.table-container .table-wrapper:first-child table tbody tr:nth-child(5)');

  if (tablePoint2 && tablePoint5) {
      tablePoint5.insertAdjacentElement('afterend', tablePoint2);
  }

  document.querySelectorAll('body.spz14002_v1 .package-comparison .table-wrapper tbody .icon-wrapper__text strong').forEach(function (ele) {
      const text = ele.textContent.trim();

      if (text === 'AI Assistant') {
          ele.textContent = 'Basic AI Assistant';
      } else if (text.includes('Compliance Intelligence')) {
          ele.textContent = 'Compliance Training: 1 Course';
      } else if (text.includes('Upgraded AI Assistant')) {
          ele.textContent = 'Enhanced AI Assistant';
      }
  });


  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
      // âœ… Code that should only run in Safari
      console.log("This code runs only in Safari!");

      const heroBannerInterval = setInterval(function () {
          const initializedSections = document.querySelectorAll(
              '.spz_new_heroBanner > [data-section-status="initialized"]'
          );

          if (initializedSections.length > 0) {
              initializedSections.forEach(section => {
                  section.setAttribute('data-section-status', 'loaded');
              });
              clearInterval(heroBannerInterval); // stop once all are updated
          }
      }, 200); // run every 200ms until condition is met
  }



}

function addOnSolutionChanges() {
  document.querySelector('body.spz14002_v1 .title-container.cards-container h2#add-on-solutions').textContent = 'Add on Solutions';
  document.querySelector('body.spz14002_v1 .title-container.cards-container .cards-wrapper .card h3#employer-of-record-powered-by-remote').innerHTML = `Employer of Record <span>(powered by Remote)</span>`;
  // document.querySelector('body.spz14002_v1 .title-container.cards-container .title-wrapper .title.green-cta [data-align="center"]').innerHTML = `Bundle & Save! <strong>Get a 15% discount</strong> when you combine Payroll and Benefits Administration with any plan.*`;
  // if (document.querySelectorAll('.custom_quote_btn').length === 0) {
  //     document.querySelector('body.spz14002_v1 .title-container.cards-container .title-wrapper .red-cta.block a.button.accent').insertAdjacentHTML('afterend', `<span class="custom_quote_btn">Get Quote</span>`);
  // }
}



function clickEvents() {
  // Delegate clicks for dynamically added .custom_pricing_btn
  document.addEventListener('click', function (e) {
      if (e.target.classList.contains('custom_pricing_btn') || e.target.classList.contains('custom_quote_btn')) {
          document.body.classList.add('spz_show_form');
      }
  });

  // Delegate clicks for the close icon inside .form_container
  document.addEventListener('click', function (e) {
      if (e.target.closest('.form_container .close_icon')) {
          document.body.classList.remove('spz_show_form');
      }
  });

  const redBlockCTAInterval = setInterval(function () {
      const redBlockCTA = document.querySelector('body.spz14002_v1 .title-container.cards-container .title-wrapper .red-cta.block a.button.accent');
      if (redBlockCTA) {
          clearInterval(redBlockCTAInterval);
          redBlockCTA.addEventListener('click', function (e) {
              e.preventDefault();
              document.body.classList.add('spz_show_form');
          });
      }
  }, 100);
}

const bodyNewInterval4002 = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz14002_v1')) {
      clearInterval(bodyNewInterval4002);
      document.querySelector('body').classList.add("spz14002_v1");

      const formInterval14002 = setInterval(function () {
          if (document.querySelectorAll('.form_container').length > 0) {
              clearInterval(formInterval14002);
              handleForm();
              setTimeout(() => {
                  tableSectionChanges();
                  addOnSolutionChanges();
              }, 600);
              clickEvents();
          }
      }, 100);
  }
}, 10);