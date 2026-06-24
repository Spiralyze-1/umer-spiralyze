// #8005 | BILL | Home LP | Qualifying Questions

// ========== CONFIG ==========
let testId = '8005',
	testType = 'v1',
	testClass = 'spz_' + testId + '_' + testType,
	ctaClass = 'spz' + testId + '_' + testType;

// ========== QQ CONFIG ==========
const QQ_CONFIG = {
	sessionKeys: {
		q1: 'spz_8005_q1',
		q2: 'spz_8005_q2',
		submitted: 'spz_8005_submitted'
	},
	q1: {
		prompt: 'What product(s) are you interested in?',
		type: 'multi',
		tiles: [
			{
				id: 'bill_entry',
				label: 'Bill entry',
				icon: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781864850/bill/8005/iconbill-pay_1.svg`,
				alt: 'Bill entry',
				formValue: 'bill_entry'
			},
			{
				id: 'approvals',
				label: 'Approvals',
				icon: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781864850/bill/8005/iconapprovals_1.svg`,
				alt: 'Approvals',
				formValue: 'approvals'
			},
			{
				id: 'customer_payments',
				label: 'Customer payments',
				icon: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781864850/bill/8005/iconpayment-verified_1.svg`,
				alt: 'Customer payments',
				formValue: 'customer_payments'
			},
			{
				id: 'receipt_chasing',
				label: 'Receipt chasing',
				icon: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781864850/bill/8005/iconreceipt_1.svg`,
				alt: 'Receipt chasing',
				formValue: 'receipt_chasing'
			},
			{
				id: 'reconciliation',
				label: 'Reconciliation',
				icon: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781864850/bill/8005/iconsyncing_1.svg`,
				alt: 'Reconciliation',
				formValue: 'reconciliation'
			},
			{
				id: 'other',
				label: 'Other',
				icon: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781864850/bill/8005/iconmore_1.svg`,
				alt: 'Other',
				formValue: 'other'
			}
		]
	},
	q2: {
		prompt: 'What type of business are you?',
		type: 'single',
		tiles: [
			{
				id: 'direct',
				title: 'Small / Midsize Business',
				subtitle: 'Financial operations for one business or entity',
				icon: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781864851/bill/8005/iconsmall-business_1.svg`, 
				alt: 'Small or Midsize Business',
				formValue: 'direct'
			},
			{
				id: 'console', 
				title: 'Accounting Firm', 
				subtitle: 'Accounting services for multiple clients', 
				icon: `https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781864850/bill/8005/iconestimate_1.svg`,
				alt: 'Accounting Firm', 
				formValue: 'console'
			}
		]
	},
	errorText: 'Please select one of the options to proceed.',
	assets: {
		backArrow: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'%3E%3Cpath d='M10 5.33332H0.666632M5.33335 9.99999L0.666632 5.33332L5.33335 0.666656' stroke='%23024DBD' stroke-width='1.33334' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
	}
};

// ========== STATE ==========
let formSetupDone = false;

function applyStoredAnswers() {
	const q1Value = sessionStorage.getItem(QQ_CONFIG.sessionKeys.q1);
	const q2Value = sessionStorage.getItem(QQ_CONFIG.sessionKeys.q2);

	if (q1Value) {
		let productInput = document.querySelector('form.form-wrapper input[name="productInterest"]');
		if (!productInput) {
			productInput = document.createElement('input');
			productInput.type = 'hidden';
			productInput.name = 'productInterest';
			const formEl = document.querySelector('form.form-wrapper');
			if (formEl) formEl.appendChild(productInput);
		}
		productInput.value = q1Value;
	}

	if (q2Value) {
		const signupType = document.querySelector('select#signupType');
		if (signupType) {
			signupType.value = q2Value;
			signupType.dispatchEvent(new Event('change', { bubbles: true }));
		}
	}

	document.body.classList.remove('spz-qq-direct', 'spz-qq-console');
	if (q2Value === 'direct') {
		document.body.classList.add('spz-qq-direct');
	} else if (q2Value === 'console') {
		document.body.classList.add('spz-qq-console');
	}
}

// ========== MAIN ==========
function loadTestCode8005() {
	if (!window.location.pathname.includes('/lp/home')) return;
	if (document.body.classList.contains(testClass)) return;
	document.body.classList.add(testClass);
	localStorage.setItem('bdcAbTest14', '8005-v1');

	// Post-submit bypass: skip QQ, go straight to form
	if (sessionStorage.getItem(QQ_CONFIG.sessionKeys.submitted)) {
		document.body.classList.add('spz-qq-bypass');
		initFormSetup();
		applyStoredAnswers();
		return;
	}

	// QQ flow
	const formEl = document.querySelector('form.form-wrapper');
	if (!formEl) return;
	initQualifyingQuestions(formEl);
}

// ========== FORM SETUP (adapted from #8001) ==========
function initFormSetup() {
	if (formSetupDone) return;
	formSetupDone = true;

	// Wrap inputs in .form-field-wrap and add floating labels
	document.querySelectorAll('input[placeholder], select:not(#signupType)').forEach(function (inputEl) {
		let wrapper = document.createElement('div');
		wrapper.className = 'form-field-wrap';
		inputEl.parentNode.insertBefore(wrapper, inputEl);
		wrapper.appendChild(inputEl);
		inputEl.insertAdjacentHTML('afterend', '<label for="' + inputEl.id + '">' + inputEl.placeholder + '</label>');
	});

	// Rearrange: email after lastName
	const emailField = document.querySelector('.spz_8005_v1 form.form-wrapper[data-name="Direct Signup Form Small"] input#email');
	const companyName = document.querySelector('.spz_8005_v1 form.form-wrapper[data-name="Direct Signup Form Small"] input#name');
	if (companyName && emailField) {
		const emailParent = emailField.parentNode;
		const companyParent = companyName.parentNode;
		emailParent.insertAdjacentElement('afterend', companyParent);
	}

	// Move lastName into first row
	document.querySelector('#firstName').closest('.form-field-columns').insertAdjacentElement('beforeend', document.querySelector('#lastName').closest('.form-field-wrap'));

	// Rename labels
	if (document.querySelector('form.form-wrapper #numberOfEmployees + label')) {
		document.querySelector('form.form-wrapper #numberOfEmployees + label').innerHTML = document.querySelector('#numberOfEmployees + label').innerHTML.replace('Number Of', 'Number of');
	}
	if (document.querySelector('form.form-wrapper #signupType + label')) {
		document.querySelector('form.form-wrapper #signupType + label').innerHTML = 'Business Type';
	}
	if (document.querySelector('.spz_8005_v1 .section_form-content form.form-wrapper #accountingSoftware + label')) {
		document.querySelector('.spz_8005_v1 .section_form-content form.form-wrapper #accountingSoftware + label').innerHTML = 'Your accounting software?';
	}

	// Floating label state management
	setTimeout(function () {
		const allInput = document.querySelectorAll('form input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="hidden"]), form select');
		function labelChange(e) {
			if (!e) return;
			let formFieldWrap = e.closest('.form-field-wrap') || e.closest('.form-options') || e.closest('.form-fields-hide');
			if (!formFieldWrap) return;
			if (e.value === '' || e.value == null) {
				formFieldWrap.classList.remove('hasValue');
			} else {
				formFieldWrap.classList.add('hasValue');
			}
		}
		allInput.forEach(function (e) {
			e.addEventListener('blur', () => { labelChange(e); }, true);
			e.addEventListener('change', () => { labelChange(e); }, true);
			labelChange(e);
		});
	}, 100);

	// Form validation
	function initFormValidation() {
		const formWrapper = document.querySelector('.section_form-content .form-signup');
		if (!formWrapper) return false;

		const firstNameInput = formWrapper.querySelector('input#firstName');
		const lastNameInput = formWrapper.querySelector('input#lastName');
		const emailInput = formWrapper.querySelector('input#email');
		const nameInput = formWrapper.querySelector('input#name');
		const submitButton = formWrapper.querySelector('a.button.is-form-small.w-button');

		if (!firstNameInput || !lastNameInput || !emailInput || !nameInput || !submitButton) return false;

		function isEmailValid(email) {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
			return emailPattern.test(email);
		}

		function areAllFieldsFilledAndValid() {
			const firstName = firstNameInput.value.trim();
			const lastName = lastNameInput.value.trim();
			const email = emailInput.value.trim();
			const name = nameInput.value.trim();
			return firstName !== '' && lastName !== '' && email !== '' && name !== '' && isEmailValid(email);
		}

		function addRedBorderToEmptyFields() {
			const fields = [
				{ input: firstNameInput, value: firstNameInput.value.trim() },
				{ input: lastNameInput, value: lastNameInput.value.trim() },
				{ input: emailInput, value: emailInput.value.trim() },
				{ input: nameInput, value: nameInput.value.trim() }
			];
			fields.forEach(field => {
				if (field.value === '') {
					field.input.classList.add('red_border');
				} else {
					field.input.classList.remove('red_border');
				}
			});
		}

		function triggerHTML5Validation() {
			addRedBorderToEmptyFields();
			if (firstNameInput.value.trim() === '') { firstNameInput.reportValidity(); return false; }
			if (lastNameInput.value.trim() === '') { lastNameInput.reportValidity(); return false; }
			if (emailInput.value.trim() === '') { emailInput.reportValidity(); return false; }
			if (nameInput.value.trim() === '') { nameInput.reportValidity(); return false; }
			return true;
		}

		window.addEventListener('resize', function () {
			const accountingSoftwareField = document.querySelectorAll('.spz_8005_v1 form.form-wrapper #accountingSoftwareContainer label[for="accountingSoftware"]');
			accountingSoftwareField.forEach(function (ele) {
				if (window.innerWidth >= 767) {
					ele.textContent = 'Which accounting software do you use?';
				} else {
					ele.textContent = 'Your accounting software?';
				}
			});
		});

		submitButton.addEventListener('click', function (e) {
			const email = emailInput.value.trim();
			if (!areAllFieldsFilledAndValid()) {
				e.preventDefault();
				e.stopPropagation();
				triggerHTML5Validation();
				if (!isEmailValid(email) && email.includes('@')) {
					if (typeof showError === 'function') {
						showError('Valid email required.');
					}
				}
				return false;
			}
		});

		[firstNameInput, lastNameInput, emailInput, nameInput].forEach(input => {
			input.addEventListener('input', function () {
				if (this.value.trim() !== '') {
					this.classList.remove('red_border');
				}
				const email = emailInput.value.trim();
				if (!isEmailValid(email) && email.includes('@')) {
					if (typeof showError === 'function') {
						showError('Valid email required.');
					}
				} else if (typeof removeError === 'function') {
					removeError();
				}
			});
		});

		return true;
	}

	// Init form validation with retries
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initFormValidation);
	} else {
		initFormValidation();
	}
	setTimeout(initFormValidation, 500);
	setTimeout(initFormValidation, 1500);
	setTimeout(initFormValidation, 3000);

	// signupType label
	document.querySelectorAll('.spz_8005_v1 form.form-wrapper .form-fields-hide select#signupType').forEach(function (select) {
		select.insertAdjacentHTML('afterend', '<label for="businessType">Business Type</label> ');
	});

	// CTA text
	document.querySelectorAll('.spz_8005_v1 .section_form-content form.form-wrapper a.button').forEach(function (ele) {
		ele.textContent = 'Get Started';
	});

	// Disclaimer apostrophe fix
	document.querySelectorAll('.spz_8005_v1 .section_form-content form.form-wrapper .button-disclaimer').forEach((el) => {
		el.childNodes.forEach((node) => {
			if (node.nodeType === Node.TEXT_NODE) {
				node.textContent = node.textContent.replace(/BILL's/g, "BILL\u2019s");
			}
		});
	});
	if(	document.querySelector('.spz_8005_v1 #accountingSoftwareContainer option:first-child')){
		document.querySelector('.spz_8005_v1 #accountingSoftwareContainer option:first-child').textContent = '';
	}

	// numberOfEmployees digit-only filter
	document.getElementById('numberOfEmployees').addEventListener('input', function () {
		this.value = this.value.replace(/\D/g, '');
	});

	setTimeout(() => {
		const email = document.querySelector('#email').value;
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
		const emailValid = emailPattern.test(email);

		if (!emailValid && email.includes('@')) {
			showError('Valid email required.');
		}

		const accountingSoftwareField = document.querySelectorAll('.spz_8005_v1 form.form-wrapper #accountingSoftwareContainer label[for="accountingSoftware"]');
		accountingSoftwareField.forEach(function (ele) {
			if (window.innerWidth >= 767) {
				ele.textContent = 'Which accounting software do you use?';
			} else {
				ele.textContent = 'Your accounting software?';
			}
		});
	}, 10);

	// Rearrange field positions
	document.querySelector('#lastName').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#email').closest('.form-field-wrap'));
	document.querySelector('#email').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#name').closest('.form-field-wrap'));
	document.querySelector('#phone').closest('.form-field-wrap').insertAdjacentElement('afterend', document.querySelector('#numberOfEmployees').closest('.form-field-wrap'));
	document.querySelector('#phone + label').textContent = 'Phone Number';

	// Select arrows
	for (let x = 0; x < document.querySelectorAll('form.form-wrapper select').length; x++) {
		document.querySelectorAll('form.form-wrapper select')[x].parentNode.insertAdjacentHTML('beforeend', '<div class="arrow"></div>');
	}

	// Submit button class
	if (document.querySelector('#directSignup .button-signup-2')) {
		document.querySelector('#directSignup .button-signup-2').classList.add('spz-submitcta-8005', 'spz_8005_v1');
		document.querySelectorAll('#directSignup .button-signup-2').forEach(function (button) {
			button.value = 'Get Started';
		});
	}

	// MS Dynamics wrapper class
	document.querySelectorAll('select#msDynamicsOption').forEach(function (ele) {
		ele.parentElement.classList.add('msDynamicsOption_wrapper');
	});

	// Move MS Dynamics dropdown outside accounting container
	const selectBoxInterval = setInterval(function () {
		const msOptions = document.querySelector('.spz_8005_v1 .signup-direct form.form-wrapper #accountingSoftwareContainer .form-field-wrap.msDynamicsOption_wrapper');
		const accountingContainer = document.querySelector('.spz_8005_v1 .signup-direct form.form-wrapper #accountingSoftwareContainer');
		if (msOptions && accountingContainer) {
			clearInterval(selectBoxInterval);
			accountingContainer.insertAdjacentElement('afterend', msOptions);
			document.querySelector('.spz_8005_v1 .signup-direct form.form-wrapper #msDynamicsOption + label').innerHTML = 'Select your MS Dynamics solution:';
		}
	}, 50);

	if (document.querySelector('.spz_8005_v1 form.form-wrapper #msDynamicsOption + label')) {
		document.querySelector('.spz_8005_v1 form.form-wrapper #msDynamicsOption + label').innerHTML = 'Select your MS Dynamics solution:';
	}

	const msDynamicsOptionWrappers = document.querySelectorAll('.spz_8005_v1 .section_form-content form.form-wrapper .form-field-wrap.msDynamicsOption_wrapper');
	msDynamicsOptionWrappers.forEach(function (msDynamicsOptionWrapper) {
		const parentWrapper = msDynamicsOptionWrapper.parentNode;
		parentWrapper.parentNode.insertBefore(msDynamicsOptionWrapper, parentWrapper.nextSibling);
	});

	document.querySelectorAll('.spz_8005_v1 .section_form-content form.form-wrapper .form-field-wrap.msDynamicsOption_wrapper select#msDynamicsOption').forEach(function (ele) {
		ele.querySelector('option:first-child').setAttribute('disabled', 'disabled');
	});

	// Hide signupType (set via qualifying questions)
	const signupTypeEl = document.querySelector('#signupType');
	if (signupTypeEl) {
		const signupTypeParent = signupTypeEl.closest('.form-options');
		if (signupTypeParent) {
			signupTypeParent.classList.add('hide');
		}
	}

	// Email blur validation
	document.querySelector('#email').addEventListener('blur', function () {
		const email = this.value;
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
		const emailValid = emailPattern.test(email);
		if (!emailValid && email !== '') {
			showError('Valid email required.');
		} else {
			removeError();
		}
	});

	formChanges8005();

	function showError(message) {
		let errorMsg = document.querySelector('.error-message');
		const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#spz-clip-err)"><path d="M7.99967 5.33334V8.00001M7.99967 10.6667H8.00634M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31811 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31811 14.6663 8.00001Z" stroke="#FF0F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="spz-clip-err"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>`;
		const svgShapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none"><path d="M0 6L12 6L7.41421 1.41421C6.63317 0.633165 5.36684 0.633166 4.58579 1.41421L0 6Z" fill="#FFF3ED"></path></svg>`;
		if (!errorMsg) {
			errorMsg = document.createElement('div');
			errorMsg.className = 'error-message';
			errorMsg.innerHTML = `${svgIcon} <span>${message}</span> ${svgShapIcon}`;
			document.querySelector('#email').after(errorMsg);
		}
	}

	function removeError() {
		const email = document.querySelector('#email').value;
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
		const emailValid = emailPattern.test(email);
		if (emailValid) {
			const errorMsg = document.querySelector('.error-message');
			if (errorMsg) {
				errorMsg.remove();
			}
		}
	}

	// Submit success observer — flag sessionStorage so next page load skips QQ
	const formDone = document.querySelector('.w-form-done');
	if (formDone) {
		const submitObserver = new MutationObserver(function () {
			const display = window.getComputedStyle(formDone).display;
			if (display !== 'none') {
				sessionStorage.setItem(QQ_CONFIG.sessionKeys.submitted, 'true');
			}
		});
		submitObserver.observe(formDone, { attributes: true, childList: true, subtree: true });
	}
}

// ========== FORM CHANGES ==========
function formChanges8005() {
	const sectionH2 = document.querySelector('.section_form-content h2');
	if (sectionH2) {
		sectionH2.innerHTML = 'Start using <span class="span-orange">BILL</span> today';
	}
	const formH2 = document.querySelector('form.form-wrapper h2.heading-style-h4');
	if (formH2) {
		formH2.innerHTML = 'Start using <span class="span-orange">BILL</span> today';
	}
	const formCTA = document.querySelector('.spz_8005_v1 .section_form-content form.form-wrapper a.button');
	if (formCTA) {
		formCTA.textContent = 'Get Started';
	}
}

// ========== QQ HTML BUILDER ==========
function buildQQHTML() {
	const checkSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

	const q1Tiles = QQ_CONFIG.q1.tiles.map(tile =>
		`<button type="button" class="spz-qq-tile" data-tile-id="${tile.id}" data-form-value="${tile.formValue}">
            <span class="spz-qq-tile-selector"><span class="spz-qq-check">${checkSVG}</span></span>
            <span class="spz-qq-tile-icon"><img src="${tile.icon}" alt="${tile.alt}"></span>
            <span class="spz-qq-tile-label">${tile.label}</span>
        </button>`
	).join('');

	const q2Tiles = QQ_CONFIG.q2.tiles.map(tile =>
		`<button type="button" class="spz-qq-tile" data-tile-id="${tile.id}" data-form-value="${tile.formValue}">
            <span class="spz-qq-tile-selector is-radio"><span class="spz-qq-check">${checkSVG}</span></span>
            <span class="spz-qq-tile-icon"><img src="${tile.icon}" alt="${tile.alt}"></span>
            <div class="spz-qq-tile-copy">
                <span class="spz-qq-tile-title">${tile.title}</span>
                <span class="spz-qq-tile-subtitle">${tile.subtitle}</span>
            </div>
        </button>`
	).join('');

	return `<div class="spz-qq-wrap">
        <div class="spz-qq-step" data-step="1">
            <div class="spz-qq-stepper">
                <span class="spz-qq-dot is-active"></span>
                <span class="spz-qq-dot"></span>
                <span class="spz-qq-dot"></span>
            </div>
            <h2 class="spz-qq-heading">Start using <span class="span-orange">BILL</span> today</h2>
            <p class="spz-qq-prompt">${QQ_CONFIG.q1.prompt}</p>
            <div class="spz-qq-tiles">
                ${q1Tiles}
            </div>
            <button type="button" class="spz-qq-next ${ctaClass}">Next <span>\u2192</span></button>
            <p class="spz-qq-error"></p>
        </div>
        <div class="spz-qq-step" data-step="2">
            <a class="spz-qq-back" href="javascript:void(0)"><img src="${QQ_CONFIG.assets.backArrow}" alt="Back"> <span>Back</span></a>
            <div class="spz-qq-stepper">
                <span class="spz-qq-dot"></span>
                <span class="spz-qq-dot is-active"></span>
                <span class="spz-qq-dot"></span>
            </div>
            <h2 class="spz-qq-heading">Start using <span class="span-orange">BILL</span> today</h2>
            <p class="spz-qq-prompt">${QQ_CONFIG.q2.prompt}</p>
            <div class="spz-qq-tiles spz-qq-tiles-single">
                ${q2Tiles}
            </div>
            <button type="button" class="spz-qq-next ${ctaClass}">Next <span>\u2192</span></button>
            <p class="spz-qq-error"></p>
        </div>
    </div>`;
}

// ========== QQ STEP ENGINE ==========
function initQualifyingQuestions(formEl) {
	// Inject QQ HTML as first child of form
	formEl.insertAdjacentHTML('afterbegin', buildQQHTML());

	// Inject step-3 header (back link + stepper) before form fields
	const formFieldCols = formEl.querySelector('.form-field-columns');
	if (formFieldCols) {
		formFieldCols.insertAdjacentHTML('beforebegin',
			`<div class="spz-qq-step3-header">
                <a class="spz-qq-back" href="javascript:void(0)"><img src="${QQ_CONFIG.assets.backArrow}" alt="Back"> <span>Back</span></a>
                <div class="spz-qq-stepper">
                    <span class="spz-qq-dot"></span>
                    <span class="spz-qq-dot"></span>
                    <span class="spz-qq-dot is-active"></span>
                </div>
            </div>`
		);
	}

	// Move form title after step-3 header (Back → Stepper → Title → Fields)
	const step3Header = formEl.querySelector('.spz-qq-step3-header');
	const formH2 = formEl.querySelector('h2.heading-style-h4');
	if (step3Header && formH2) {
		step3Header.insertAdjacentElement('afterend', formH2);
	}

	// Start on step 1
	document.body.classList.add('spz-qq-step-1');

	const qqWrap = formEl.querySelector('.spz-qq-wrap');
	if (!qqWrap) return;

	// Restore any previous selections from sessionStorage
	restoreSelections();

	// Direct click listeners on tiles (avoids event delegation issues with Webflow forms)
	qqWrap.querySelectorAll('.spz-qq-tile').forEach(function (tile) {
		tile.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			const step = tile.closest('.spz-qq-step');
			const stepNum = parseInt(step.getAttribute('data-step'));
			const stepConfig = stepNum === 1 ? QQ_CONFIG.q1 : QQ_CONFIG.q2;

			if (stepConfig.type === 'multi') {
				tile.classList.toggle('is-selected');
			} else {
				step.querySelectorAll('.spz-qq-tile').forEach(function (t) { t.classList.remove('is-selected'); });
				tile.classList.add('is-selected');
			}

			const errorEl = step.querySelector('.spz-qq-error');
			if (errorEl) {
				errorEl.textContent = '';
				errorEl.classList.remove('is-visible');
			}
		});
	});

	// Direct click listeners on Next buttons
	qqWrap.querySelectorAll('.spz-qq-next').forEach(function (nextBtn) {
		nextBtn.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			const step = nextBtn.closest('.spz-qq-step');
			const stepNum = parseInt(step.getAttribute('data-step'));
			const selectedTiles = step.querySelectorAll('.spz-qq-tile.is-selected');
			const errorEl = step.querySelector('.spz-qq-error');

			if (selectedTiles.length === 0) {
				if (errorEl) {
					errorEl.textContent = QQ_CONFIG.errorText;
					errorEl.classList.add('is-visible');
				}
				return;
			}

			if (errorEl) {
				errorEl.textContent = '';
				errorEl.classList.remove('is-visible');
			}

			const values = Array.from(selectedTiles).map(function (t) { return t.getAttribute('data-form-value'); });
			const key = stepNum === 1 ? QQ_CONFIG.sessionKeys.q1 : QQ_CONFIG.sessionKeys.q2;
			sessionStorage.setItem(key, values.join(','));

			goToStep(stepNum + 1);
		});
	});

	// Direct click listeners on Back buttons inside QQ wrap
	qqWrap.querySelectorAll('.spz-qq-back').forEach(function (backBtn) {
		backBtn.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			const step = backBtn.closest('.spz-qq-step');
			const stepNum = parseInt(step.getAttribute('data-step'));
			goToStep(stepNum - 1);
		});
	});

	// Step 3 back link (outside QQ wrap, inside form)
	const step3Back = formEl.querySelector('.spz-qq-step3-header .spz-qq-back');
	if (step3Back) {
		step3Back.addEventListener('click', function (e) {
			e.preventDefault();
			goToStep(2);
		});
	}

	function goToStep(n) {
		document.body.classList.remove('spz-qq-step-1', 'spz-qq-step-2', 'spz-qq-step-3');
		document.body.classList.add('spz-qq-step-' + n);

		if (n === 3) {
			initFormSetup();
			applyQQAnswersToForm();
		}
	}

	function applyQQAnswersToForm() {
		applyStoredAnswers();
	}

	function restoreSelections() {
		const q1Raw = sessionStorage.getItem(QQ_CONFIG.sessionKeys.q1);
		if (q1Raw) {
			var q1Values = q1Raw;
			try { var parsed = JSON.parse(q1Raw); if (Array.isArray(parsed)) q1Values = parsed.join(','); } catch (e) { }
			q1Values.split(',').forEach(function (v) {
				v = v.trim();
				if (!v) return;
				var tile = qqWrap.querySelector('.spz-qq-step[data-step="1"] .spz-qq-tile[data-form-value="' + v + '"]');
				if (tile) tile.classList.add('is-selected');
			});
		}

		const q2Raw = sessionStorage.getItem(QQ_CONFIG.sessionKeys.q2);
		if (q2Raw) {
			var q2Value = q2Raw;
			try { var parsed2 = JSON.parse(q2Raw); if (Array.isArray(parsed2)) q2Value = parsed2[0]; } catch (e) { }
			q2Value = q2Value.trim();
			if (q2Value) {
				var tile = qqWrap.querySelector('.spz-qq-step[data-step="2"] .spz-qq-tile[data-form-value="' + q2Value + '"]');
				if (tile) tile.classList.add('is-selected');
			}
		}
	}
}

// ========== INIT ==========
let checkCondition8005 = setInterval(function () {
	if (document.querySelectorAll('body').length > 0) {
		clearInterval(checkCondition8005);
		loadTestCode8005();
		localStorage.setItem('bdcAbTest14','8005-v1');
		
		if (!document.referrer.includes('bill.com/lp/home')) {
			document.querySelectorAll('.' + testClass + ' form.form-wrapper .form-field-columns .form-field-wrap input').forEach(function (input) {
				input.value = '';
				const wrap = input.closest('.form-field-wrap');
				if (wrap) wrap.classList.remove('hasValue');
			});
		}
	}
}, 100);
