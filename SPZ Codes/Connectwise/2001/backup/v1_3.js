console.log('SPZ 2001 V1');
console.log('+++ 1');

if (document.body){
  document.body.classList.add('spz_2001_init');
}

function waitForForm(selector, callback, maxWait = 5000) {
   const interval = 100;
   let elapsed = 0;
   const timer = setInterval(() => {
      if (document.querySelector(selector)) {
         clearInterval(timer);
         callback();
      } else if (elapsed >= maxWait) {
         clearInterval(timer);
         console.warn('Form not found after waiting:', selector);
      }
      elapsed += interval;
   }, interval);
}

function spz2001() {
  if (!document.querySelector('body').classList.contains('spz_2001_v')) {
    document.querySelector('body').classList.add('spz_2001_v');
    // DEVELOPER - STEP 2 of 3 - Edit all page content and assets here
    var template_content = {

      // ── LEFT SIDE ──────────────────────────────────────────────
      eyebrow: 'IT &amp; SECURITY MANAGEMENT SOFTWARE',
      headline: 'Streamline MSP &amp; IT ops.',
      headlineHighlight: 'Boost growth &amp; efficiency.',

      bullets: [
        { bold: 'Management:', text: 'Track tickets, projects, SLAs, policies, and billing. Quote new clients in minutes. Boost efficiency.' },
        { bold: 'Operations:', text: 'Automate threat detection, alerts, patching, and back up. Boost compliance. Access devices remotely.' },
        { bold: 'Reporting:', text: 'Measure utilization, margins, technician efficiency, and service performance. Generate reports. Optimize services.' }
      ],

      // ── RIGHT SIDE ─────────────────────────────────────────────
      logoSrc: '//res.cloudinary.com/spiralyze/image/upload/v1771491402/connectwise/2001/logo-headline.svg',
      logoAlt: 'ConnectWise',
      logoHref: 'javascript:void(0);',

      formHeading: 'Watch Demo',

      socialProofText: 'Trusted by',
      socialProofHighlight: '100,000+',
      socialProofSuffix: 'MSP and IT professionals',

      logos: [
        { src: '//res.cloudinary.com/spiralyze/image/upload/f_auto/connectwise/2001/logo_1.webp', alt: 'Kinetics Group' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/f_auto/connectwise/2001/logo.webp', alt: 'GoodSuite' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/f_auto/connectwise/2001/logo_3.webp', alt: 'ited' },
        { src: '//res.cloudinary.com/spiralyze/image/upload/f_auto/connectwise/2001/logo_2.webp', alt: 'TechMD' }
      ],

      // Phone field code
      phoneCode: '+1'
    };

    // DEVELOPER - STEP 3 of 3 - Set form selector
    var template_formUniqueSelector = "#mktoForm_1227";

    // Initialize
      // if (!checkFormSubmission()) {
      //    addSplitScreen(template_formUniqueSelector, template_content);
      // }
      // Replace your current initialization block with:
      waitForForm(template_formUniqueSelector, () => {
         if (!checkFormSubmission()) {
            addSplitScreen(template_formUniqueSelector, template_content);
         }
      });

  }
}

// Add split screen content
function addSplitScreen(formSelector, template_content) {
  var c = template_content;

  var bulletsHTML = '';
  for (var i = 0; i < c.bullets.length; i++) {
    bulletsHTML += `<li class="spz-bullet-item">
      <span class="spz-bullet-icon"></span>
      <p><strong>${c.bullets[i].bold}</strong> ${c.bullets[i].text}</p>
    </li>`;
  }

  var logosHTML = '';
  for (var j = 0; j < c.logos.length; j++) {
    logosHTML += `<img src="${c.logos[j].src}" alt="${c.logos[j].alt}" />`;
  }

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="spz-split-wrap">
      <div class="spz-feature-side">
        <div class="spz-feature-sideInner">
          <div class="spz-feature-content">
            <p class="spz-eyebrow">${c.eyebrow}</p>
            <h2 class="spz-headline">${c.headline} <span class="spz-highlight">${c.headlineHighlight}</span></h2>
            <ul class="spz-bullets">${bulletsHTML}</ul>
          </div>
        </div>
      </div>
      <div class="spz-form-side">
        <div class="spz-form-sideInner">
          <div class="spz-form-inner">
            <a href="https://www.connectwise.com/" class="spz-logo-link">
              <img src="${c.logoSrc}" alt="${c.logoAlt}" class="connectwise-logo" />
            </a>
            <div class="spz-form-content-wrap">
              <h1 class="spz-form-heading">${c.formHeading}</h1>
              <div class="spz-form-wrap"></div>
            </div>
            <div class="spz-social-proof">
              <p class="spz-social-proof-text">${c.socialProofText} <span class="spz-highlight-bar">${c.socialProofHighlight}</span> ${c.socialProofSuffix}</p>
              <div class="spz-logos">${logosHTML}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  if(window.location.pathname.indexOf('/platform/rmm/demo') === 0){
    document.querySelector('body').classList.add('spz_2001_rmmDemo');
    document.querySelector('.spz-feature-content .spz-eyebrow').textContent = 'REMOTE MONITORING AND MANAGEMENT (RMM) SOFTWARE';
    document.querySelector('.spz-feature-content .spz-headline').innerHTML = 'Streamline work by managing IT remotely';
    document.querySelector('.spz-feature-content .spz-bullets li:first-child p').innerHTML = `<strong>Endpoints and networks:</strong>  Automate patching. Access devices remotely. Get prioritized alerts & remediate. Manage networks.`;
    document.querySelector('.spz-feature-content .spz-bullets li:nth-child(2) p').innerHTML = `<strong>Automations:</strong>   Automate remediation & maintenance with pre-built tasks. Disk cleanup, configuration, accounts, etc. Custom scripts. `;
    document.querySelector('.spz-feature-content .spz-bullets li:last-child p').innerHTML = `<strong>Expert services:</strong>   Leverage our dedicated techs to augment <br> project work, help desk services, or network ops. 24/7/365.`;
  } else if(window.location.pathname.indexOf('/platform/psa/demo') === 0){
    document.querySelector('body').classList.add('spz_2001_psaDemo');
    document.querySelector('.spz-feature-content .spz-eyebrow').textContent = 'PROFESSIONAL SERVICES AUTOMATION (PSA) SOFTWARE';
    document.querySelector('.spz-feature-content .spz-headline').innerHTML = 'Streamline MSP client management';
    document.querySelector('.spz-feature-content .spz-bullets li:first-child p').innerHTML = `<strong>Clients:</strong> Track billable and non-billable time. Manage projects. Automate billing. Streamline sales & turn more leads into clients.`;
    document.querySelector('.spz-feature-content .spz-bullets li:nth-child(2) p').innerHTML = `<strong>Ticketing:</strong>  Create tickets from support requests. Assign techs. Flag high-priority tickets. See resolution steps & generate communications. `;
    document.querySelector('.spz-feature-content .spz-bullets li:last-child p').innerHTML = `<strong>Reporting: </strong> Track productivity, service performance, ticketing efficiency, inventory and asset costs, etc. Optimize ops. Cut costs.`;
  }
  // Get form
  var formEl = document.querySelector(formSelector);
  if (!formEl) {
    var wrap = document.querySelector('.spz-form-wrap');
    if (wrap) wrap.innerHTML = '<div class="spz-form-error">Form not found. Update template_formUniqueSelector in STEP 3.</div>';
    return;
  }

  // Wait until form inputs load
  var formLoaded = setInterval(function () {
    if (formEl.querySelectorAll('input').length > 0) {
      clearInterval(formLoaded);
      var wrap = document.querySelector('.spz-form-wrap');
      if (wrap) wrap.appendChild(formEl);
      initFormBehaviors(formEl);
      formEl.addEventListener('submit', function () {
        sessionStorage.setItem('spz_split_submitted', 'true');
      });

      // Fix industry placeholder option
      var industryEmptyOption = document.querySelector("#mKTOIndustry option[value='']");
      var submitButtom = document.querySelector("#mktoForm_1227 .mktoButton");
      if (industryEmptyOption) industryEmptyOption.textContent = '';
      if (submitButtom) {
        submitButtom.classList.add('spz2001_v');
        submitButtom.textContent = 'Instant Access';
      }

    }
  }, 50);
}

// Floating label helper
function attachFloatLabel(wrap, field, labelText) {
  wrap.className += ' spz-field-wrap';
  var label = document.createElement('span');
  label.className = 'spz-float-label';
  label.textContent = labelText;
  wrap.appendChild(label);

  var isSelect = field.tagName === 'SELECT';
  if (!isSelect) field.setAttribute('placeholder', ' ');

  var sync = function () {
    var value = isSelect ? field.value : field.value.trim();
    if (value.length > 0) wrap.classList.add('spz-has-value');
    else wrap.classList.remove('spz-has-value');
  };

  field.addEventListener('focus', function () { wrap.classList.add('spz-active'); sync(); });
  field.addEventListener('blur', function () { wrap.classList.remove('spz-active'); sync(); });
  field.addEventListener(isSelect ? 'change' : 'input', sync);
  sync();
}

function getLabelText(wrap, fallback) {
  var label = wrap.querySelector('.mktoLabel, label');
  return label ? label.textContent.replace(/[*:\s]+$/, '').trim() : fallback;
}

// Form orchestrator
function initFormBehaviors(formEl) {
  setTimeout(() => {
    wrapFormRows(formEl);
    initFloatingLabels(formEl);
    initPhoneField(formEl);
    initIndustrySelect(formEl);
    initExpandableHowField(formEl);
    initCheckboxLabel(formEl);
    restyleDisclaimer(formEl);
    watchValidationState(formEl);
  }, 150);
}

// Wrap form rows into pairs
function wrapFormRows(formEl) {
  var pairs = [
    ['FirstName', 'LastName'],
    ['Email', 'Company'],
    ['Phone', 'mKTOIndustry']
  ];

  for (var i = 0; i < pairs.length; i++) {
    var id1 = pairs[i][0];
    var id2 = pairs[i][1];
    var elem1 = formEl.querySelector('#' + id1);
    var elem2 = formEl.querySelector('#' + id2);

    var r1 = elem1 ? elem1.closest('.mktoFormRow') : null;
    var r2 = elem2 ? elem2.closest('.mktoFormRow') : null;
    if (!r1 || !r2 || r1 === r2) continue;

    var wrapper = document.createElement('div');
    wrapper.className = 'spz-form-row-pair';
    r1.parentNode.insertBefore(wrapper, r1);
    wrapper.appendChild(r1);
    wrapper.appendChild(r2);
  }
}

// Floating labels
function initFloatingLabels(formEl) {
  var inputs = formEl.querySelectorAll('input[type="text"], input[type="email"]');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var wrap = input.closest('.mktoFieldWrap') || input.parentElement;
    attachFloatLabel(wrap, input, getLabelText(wrap, input.getAttribute('placeholder') || ''));
  }
}

// Phone field
function initPhoneField(formEl) {
  var input = formEl.querySelector('input[type="tel"], input[id*="Phone"], input[name*="Phone"]');
  if (!input) return;
  var wrap = input.closest('.mktoFieldWrap') || input.parentElement;
  wrap.className += ' spz-phone-wrap';
  attachFloatLabel(wrap, input, getLabelText(wrap, 'Phone Number'));
}

// Industry select
function initIndustrySelect(formEl) {
  var select = formEl.querySelector('select[id*="Industry"], select[name*="Industry"]');
  if (!select) return;
  var wrap = select.closest('.mktoFieldWrap') || select.parentElement;
  var placeholderOpt = select.querySelector('option[value=""]');
  if (placeholderOpt) placeholderOpt.textContent = '';
  attachFloatLabel(wrap, select, getLabelText(wrap, 'Industry'));
}

// Expandable "How did you hear"
function initExpandableHowField(formEl) {
  var field = formEl.querySelector('#howdidyouhearaboutus, textarea[name="howdidyouhearaboutus"]');
  if (!field) return;
  var row = field.closest('.mktoFormRow');
  if (!row || !row.parentNode) return;

  row.className += ' spz-how-field-wrap';
  var wrap = field.closest('.mktoFieldWrap') || field.parentElement;
  if (wrap) {
    wrap.className += ' spz-textarea-wrap';
    attachFloatLabel(wrap, field, 'How did you hear about us?');
  }

  var trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'spz-how-trigger';
  trigger.innerHTML = '<span class="spz-how-trigger-icon" aria-hidden="true"></span><span>How did you hear about us?</span>';
  row.parentNode.insertBefore(trigger, row);

  trigger.addEventListener('click', function () {
    var expanded = row.className.indexOf('spz-expanded') === -1;
    if (expanded) row.className += ' spz-expanded';
    else row.className = row.className.replace(/ spz-expanded/g, '');
    if (expanded) trigger.className += ' spz-expanded';
    else trigger.className = trigger.className.replace(/ spz-expanded/g, '');
  });
}

// Checkbox labels
function initCheckboxLabel(formEl) {
  var checkboxes = formEl.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var list = checkbox.closest('.mktoCheckboxList, .mktoLogicalField') || checkbox.parentElement;
    if (list) {
      list.className += ' spz-checkbox-row';
      var label = list.querySelector('label.checkbox-label, label.mktoHtmlText');
      if (label) label.className += ' spz-checkbox-label';
    }
  }
}

// Disclaimer
function restyleDisclaimer(formEl) {
  var els = formEl.querySelectorAll('.mktoHtmlText, .mktoPrivacyText');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    if (/privacy|terms|submitting/i.test(el.textContent)) {
      el.className += ' spz-disclaimer';
      var row = el.closest('.mktoFormRow');
      var btnRow = formEl.querySelector('.mktoButtonRow');
      if (row && btnRow && row !== btnRow) {
        btnRow.parentNode.insertBefore(row, btnRow.nextSibling);
        row.className += ' spz-disclaimer-row';
      }
    }
  }
}

// Validation state
function watchValidationState(formEl) {
  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var target = mutations[i].target;
      var wrap = target.closest('.spz-field-wrap');
      if (!wrap) continue;
      if (target.className.indexOf('mktoInvalid') !== -1) wrap.classList.add('spz-invalid');
      else wrap.classList.remove('spz-invalid');
    }
  });

  var fields = formEl.querySelectorAll('input, select');
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    observer.observe(field, { attributes: true, attributeFilter: ['class'] });

    (function (f) {
      var clearOnInput = function () {
        if (f.value && f.value.trim() !== '') {
          var wrap = f.closest('.spz-field-wrap');
          if (wrap) wrap.classList.remove('spz-invalid');
        }
      };
      f.addEventListener('input', clearOnInput);
      f.addEventListener('change', clearOnInput);
    })(field);
  }
}

// Check submission
function checkFormSubmission() {
  if (sessionStorage.getItem('spz_split_submitted') === 'true') {
    document.body.className += ' spz-form-submitted';
    return true;
  }
  return false;
}

(function () {

   if (!document.body) return; // 🚨 Prevent crash

   var nodes = document.body.childNodes;

   for (var i = nodes.length - 1; i >= 0; i--) {
      var node = nodes[i];

      if (node.nodeType === 3) {
         var value = node.nodeValue;

         if (/^[\s;]+$/.test(value)) {
            document.body.removeChild(node);
         }
      }
   }

})();

// Body interval
var bodyInterval2001 = setInterval(function () {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval2001);
    spz2001();
  }
}, 100);

// If you face any issues, please switch to the named-function version of this code and use that instead.
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = true; // true / false / 'both'
  const expName = '2001'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `spz_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
  const clientDomain = '.connectwise.com'; //domain should be .connectwise.com


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