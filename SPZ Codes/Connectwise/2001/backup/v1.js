function spz2001() {
  if (!document.querySelector('body').classList.contains('spz_2001_v')) {
    document.querySelector('body').classList.add('spz_2001_v');

    //DEVELOPER - STEP 1 of 3 - Put your asana task URL here
    const asana_URL = `https://app.asana.com/1/77217210692853/project/1212015714361211/task/1213098295414072`

    //DEVELOPER - STEP 2 of 3 - Edit all page content and assets here
    const template_content = {

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
      logoHref: '//www.connectwise.com/',

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

      // ── PHONE FIELD ────────────────────────────────────────────
      phoneCode: '+1'
    }

    //DEVELOPER - STEP 3 of 3 - Set form selector (inspect the control form element)
    const template_formUniqueSelector = "#mktoForm_1227"

    // Initialize
    if (!checkFormSubmission()) {
      addSplitScreen(template_formUniqueSelector);
    }


    function addSplitScreen(formSelector) {
      const c = template_content;

      const bulletsHTML = c.bullets.map(b => `
		<li class="spz-bullet-item">
			<span class="spz-bullet-icon"></span>
			<p><strong>${b.bold}</strong> ${b.text}</p>
		</li>`).join('');

      const logosHTML = c.logos.map(l => `<img src="${l.src}" alt="${l.alt}" />`).join('');

      document.body.insertAdjacentHTML('afterbegin', `
		<div class="spz-split-wrap">

			<!-- LEFT: Feature Side -->
			<div class="spz-feature-side">
				<div class="spz-feature-sideInner">
          <div class="spz-feature-content">
            <p class="spz-eyebrow">${c.eyebrow}</p>
            <h2 class="spz-headline">${c.headline} <span class="spz-highlight">${c.headlineHighlight}</span></h2>
            <ul class="spz-bullets">${bulletsHTML}</ul>
          </div>
        </div>
			</div>

			<!-- RIGHT: Form Side -->
			<div class="spz-form-side">
				<div class="spz-form-inner">
					<a href="${c.logoHref}" class="spz-logo-link">
						<img src="${c.logoSrc}" alt="${c.logoAlt}" class="connectwise-logo" />
					</a>
					<div class="spz-form-content-wrap">
						<h1 class="spz-form-heading">${c.formHeading}</h1>
						<div class="spz-form-wrap"></div>
					</div>
					<div class="spz-social-proof">
						<p class="spz-social-proof-text">
							${c.socialProofText} <span class="spz-highlight-bar">${c.socialProofHighlight}</span> ${c.socialProofSuffix}
						</p>
						<div class="spz-logos">${logosHTML}</div>
					</div>
				</div>
			</div>

		</div>
	`);

      // Sync logo href from the live page if a ConnectWise link exists there
      const liveLogo = document.querySelector('a[href*="connectwise.com"]:not(.spz-logo-link)');
      if (liveLogo) document.querySelector('.spz-logo-link').href = liveLogo.href;

      const formEl = document.querySelector(formSelector);
      if (!formEl) {
        document.querySelector('.spz-form-wrap').innerHTML = `<div class="spz-form-error">Form not found. Update template_formUniqueSelector in STEP 3.</div>`;
        return;
      }

      const formLoaded = setInterval(() => {
        if (formEl.querySelectorAll('input').length > 0) {
          clearInterval(formLoaded);
          document.querySelector('.spz-form-wrap').appendChild(formEl);
          initFormBehaviors(formEl);
          formEl.addEventListener('submit', () => sessionStorage.setItem('spz_split_submitted', 'true'));
          if(document.querySelector("#mKTOIndustry optiom[value='']")){
            document.querySelector("#mKTOIndustry optiom[value='']").textContent = '';
          }
        }
      }, 50);
    }


    // ── Shared helper: wire up floating label on any field ───────────────────────
    // Adds spz-field-wrap to the wrap, appends the label span, and attaches events.
    function attachFloatLabel(wrap, field, labelText) {
      wrap.classList.add('spz-field-wrap');

      const label = document.createElement('span');
      label.className = 'spz-float-label';
      label.textContent = labelText;
      wrap.appendChild(label);

      const isSelect = field.tagName === 'SELECT';
      if (!isSelect) field.setAttribute('placeholder', ' ');

      const sync = () => wrap.classList.toggle('spz-has-value', isSelect ? !!field.value : field.value.trim().length > 0);
      field.addEventListener('focus', () => { wrap.classList.add('spz-active'); sync(); });
      field.addEventListener('blur', () => { wrap.classList.remove('spz-active'); sync(); });
      field.addEventListener(isSelect ? 'change' : 'input', sync);
      sync();
    }

    // Extract visible label text from a field wrap, stripping trailing : and *
    function getLabelText(wrap, fallback) {
      const label = wrap.querySelector('.mktoLabel, label');
      return label ? label.textContent.replace(/[*:\s]+$/, '').trim() : fallback;
    }


    // ── Form behaviour orchestrator ──────────────────────────────────────────────
    function initFormBehaviors(formEl) {
      wrapFormRows(formEl);
      initFloatingLabels(formEl);
      initPhoneField(formEl);
      initIndustrySelect(formEl);
      initExpandableHowField(formEl);
      initCheckboxLabel(formEl);
      restyleDisclaimer(formEl);
      watchValidationState(formEl);
    }

    // Pair single-column mktoFormRows into 2-column wrappers matching Figma layout
    function wrapFormRows(formEl) {
      [
        ['FirstName', 'LastName'],
        ['Email', 'Company'],
        ['Phone', 'mKTOIndustry']
      ].forEach(([id1, id2]) => {
        const r1 = formEl.querySelector(`#${id1}`)?.closest('.mktoFormRow');
        const r2 = formEl.querySelector(`#${id2}`)?.closest('.mktoFormRow');
        if (!r1 || !r2 || r1 === r2) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'spz-form-row-pair';
        r1.parentNode.insertBefore(wrapper, r1);
        wrapper.append(r1, r2);
      });
    }

    // Floating labels for all standard text / email inputs
    function initFloatingLabels(formEl) {
      formEl.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
        const wrap = input.closest('.mktoFieldWrap') || input.parentElement;
        attachFloatLabel(wrap, input, getLabelText(wrap, input.getAttribute('placeholder') || ''));
      });
    }

    // Phone field: inject flag + country code prefix, then attach floating label
    function initPhoneField(formEl) {
      const input = formEl.querySelector('input[type="tel"], input[id*="Phone"], input[name*="Phone"]');
      if (!input) return;

      const wrap = input.closest('.mktoFieldWrap') || input.parentElement;
      wrap.classList.add('spz-phone-wrap');

      // input.insertAdjacentHTML('beforebegin', `
      //   <div class="spz-phone-prefix">
      //     ${template_content.phoneFlagSrc}
      //     <span>${template_content.phoneCode}</span>
      //     <span class="spz-chevron">&#9660;</span>
      //   </div>
      // `);

      attachFloatLabel(wrap, input, getLabelText(wrap, 'Phone Number'));
    }

    // Industry select: clear built-in placeholder option, then attach floating label
    function initIndustrySelect(formEl) {
      const select = formEl.querySelector('select[id*="Industry"], select[name*="Industry"]');
      if (!select) return;

      const wrap = select.closest('.mktoFieldWrap') || select.parentElement;

      const placeholderOpt = select.querySelector('option[value=""]');
      if (placeholderOpt) placeholderOpt.textContent = '';

      attachFloatLabel(wrap, select, getLabelText(wrap, 'Industry'));
    }

    // "How did you hear about us?" — floating label + collapsible row
    function initExpandableHowField(formEl) {
      const field = formEl.querySelector('#howdidyouhearaboutus, textarea[name="howdidyouhearaboutus"]');
      if (!field) return;

      const row = field.closest('.mktoFormRow');
      if (!row) return;
      row.classList.add('spz-how-field-wrap');

      // Floating label on the textarea
      const wrap = field.closest('.mktoFieldWrap') || field.parentElement;
      if (wrap) {
        wrap.classList.add('spz-textarea-wrap');
        attachFloatLabel(wrap, field, 'How did you hear about us?');
      }

      // Expand / collapse trigger button
      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'spz-how-trigger';
      trigger.innerHTML = `<span class="spz-how-trigger-icon" aria-hidden="true"></span><span>How did you hear about us?</span>`;
      row.parentNode.insertBefore(trigger, row);

      trigger.addEventListener('click', () => {
        const expanded = row.classList.toggle('spz-expanded');
        trigger.classList.toggle('spz-expanded', expanded);
      });
    }

    // Checkbox: apply flex row class to the checkbox + label container
    function initCheckboxLabel(formEl) {
      formEl.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        const list = checkbox.closest('.mktoCheckboxList, .mktoLogicalField') || checkbox.parentElement;
        if (list) list.classList.add('spz-checkbox-row');
        const label = list?.querySelector('label.checkbox-label, label.mktoHtmlText');
        if (label) label.classList.add('spz-checkbox-label');
      });
    }

    // Disclaimer: move its mktoFormRow to after the submit button (matches Figma order)
    function restyleDisclaimer(formEl) {
      formEl.querySelectorAll('.mktoHtmlText, .mktoPrivacyText').forEach(el => {
        if (/privacy|terms|submitting/i.test(el.textContent)) {
          el.classList.add('spz-disclaimer');
          const row = el.closest('.mktoFormRow');
          const btnRow = formEl.querySelector('.mktoButtonRow');
          if (row && btnRow && row !== btnRow) {
            btnRow.after(row);
            row.classList.add('spz-disclaimer-row');
          }
        }
      });
    }

    // Mirror Marketo's mktoInvalid class onto our spz-invalid for CSS-driven error states
    function watchValidationState(formEl) {
      const syncInvalid = (field) => {
        const wrap = field.closest('.spz-field-wrap');
        if (!wrap) return;
        const invalid = field.classList.contains('mktoInvalid');
        wrap.classList.toggle('spz-invalid', invalid);
        if (invalid) wrap.classList.remove('spz-active');
      };

      const observer = new MutationObserver(mutations =>
        mutations.forEach(({ target }) => syncInvalid(target))
      );

      formEl.querySelectorAll('input, select').forEach(field => {
        observer.observe(field, { attributes: true, attributeFilter: ['class'] });
        const clearOnInput = () => { if (field.value.trim()) field.closest('.spz-field-wrap')?.classList.remove('spz-invalid'); };
        field.addEventListener('input', clearOnInput);
        field.addEventListener('change', clearOnInput);
      });
    }

    // Check if form was already submitted this session
    function checkFormSubmission() {
      if (sessionStorage.getItem('spz_split_submitted') === 'true') {
        document.body.classList.add('spz-form-submitted');
        return true;
      }
      return false;
    }


  }
}

spz2001();

var bodyInterval2001 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval2001);
    spz2001();
  }
}, 100);

// If you face any issues, please switch to the named-function version of this code and use that instead.
(function() {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
  
  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = false; // true / false / 'both'
  const expName = '2001'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `SPZ_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
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