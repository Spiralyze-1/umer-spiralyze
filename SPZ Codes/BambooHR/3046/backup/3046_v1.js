console.log('Executing V1 3046');
const EXECUTION_START_TIME = new Date();

function logExecutionTime(message) {
	const executionTime = new Date() - EXECUTION_START_TIME;
	console.log(`${message} - Execution time: ${executionTime}ms`);
}

function addRemoveToArrayPrototype() {
	Array.prototype.remove = function () {
		var what, a = arguments, L = a.length, ax;
		while (L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
				this.splice(ax, 1);
			}
		}
		return this;
	};
}

function trackingCode() {
	(function () {
		//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

		// Set the value of the squeezePage variable as needed:
		// true  – if you are using a squeeze page (i.e., the page contains a form)
		// false – if you are not using a squeeze page (i.e., the page does not contain a form)
		// 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

		const squeezePage = true; // true / false / 'both'
		const expName = '3046'; //experiment name should be 1001, 1002, 1003 etc.
		const variantName = '#' + expName + `_variant`; //variantName should be variant_, true_control_ etc.
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
	}());
}

const STEP_1_CHECKBOX_VALUES = [];

// Left-side product screenshot ("BambooHR AI Dashboard")
const PRODUCT_IMAGE = {
	'1440': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/desktop_image_f_auto_1.png',
	'768': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/tablet_image_f_auto.png',
	'360': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/mobile_image_f_auto.png',
};

// G2 / Capterra review badge
const REVIEWS_IMAGE = {
	desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788256272/bamboohr/3046/reviews_desktop.svg',
	mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788256272/bamboohr/3046/reviews_mobile.svg',
};

// Right-side partner logo wall ("BambooHR Partner Logo's"). Tablet/mobile swap per step so the wall fits the modal height.
const LOGO_WALL_IMAGE = {
	desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/desktop_image_f_auto.png',
	tablet: {
		'1': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/tablet_image_-_step_1_f_auto_1.png',
		'2': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/tablet_image_-_step_2_f_auto.png',
		'3': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/tablet_image_-_step_3_f_auto.png',
	},
	mobile: {
		'1': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/mobile_image_-_step_1_f_auto.png',
		'2': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/mobile_image_-_step_2_f_auto.png',
		'3': 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/3046/mobile_image_-_step_3_f_auto.png',
	},
};

function renderFormStepOneHTML() {
	function renderButtonHTML(text, imageUrl, altText) {
		return `
            <button class="spz__button" data-key="${altText}">
                <img src="${imageUrl}" alt="${altText}">
                <span>${text}</span>
            </button>
        `;
	}
	return `
        <div class="spz__step_1_container">
            ${renderButtonHTML('Hiring &<br>Onboarding', 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774948778/bamboohr/3038/hiring__onboarding_70x70.svg', 'Hiring & Onboarding')}
            ${renderButtonHTML('HR Data &<br>Reporting', 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774948778/bamboohr/3038/hr_data__reporting_70x70.svg', 'HR Data & Reporting')}
            ${renderButtonHTML('Payroll<br>& Time', 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774948778/bamboohr/3038/payroll__time_70x70.svg', 'Payroll & Time')}
            ${renderButtonHTML('Benefits<br>Administration', 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774948778/bamboohr/3038/benefits_70x70.svg', 'Benefits Administration')}
            ${renderButtonHTML('Employee <br>Experience', 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774948778/bamboohr/3038/employee_experience_70x70.svg', 'Employee Experience')}
            ${renderButtonHTML('Performance<br>Management', 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774948778/bamboohr/3038/performance_70x70.svg', 'Performance Management')}
        </div>
        
    `;
}

// Swap the tablet/mobile partner-logo wall so it matches the current step's modal height (desktop wall is fixed).
function updateLogoWall(stepNumber) {
	const tabletSource = document.querySelector('.spz_3046_v1 .spz__logos_wall .spz__logos_tablet');
	const mobileImage = document.querySelector('.spz_3046_v1 .spz__logos_wall .spz__logos_mobile');
	if (tabletSource) tabletSource.srcset = LOGO_WALL_IMAGE.tablet[stepNumber];
	if (mobileImage) mobileImage.src = LOGO_WALL_IMAGE.mobile[stepNumber];
}

function executeExperiment() {
	logExecutionTime('V1 3046 experiment execution started');
	if (document.body.classList.contains('spz_3046_v1')) return;
	document.body.classList.add('spz-3028', 'spz-3027', 'spz_3046_v1');
	/**
	 * All code below is restructured version of True Control.
	 */
	// Add remove function to array prototype
	addRemoveToArrayPrototype();

	// execute content changes (left side: product image + social proof + copy)
	const contentContainer = document.querySelector('.spz_3046_v1 main#main-content div.section:first-child div.form-wrapper .content-col');
	if (contentContainer) {
		contentContainer.innerHTML = `
            <picture class="spz__product_image">
                <source media="(min-width: 1199.98px)" srcset="${PRODUCT_IMAGE['1440']}">
                <source media="(min-width: 767.98px)" srcset="${PRODUCT_IMAGE['768']}">
                <img src="${PRODUCT_IMAGE['360']}" alt="BambooHR AI Dashboard">
            </picture>
            <div class="spz__proof">
                <picture class="spz__reviews">
                    <source media="(min-width: 767.98px)" srcset="${REVIEWS_IMAGE.desktop}">
                    <img src="${REVIEWS_IMAGE.mobile}" alt="BambooHR Reviews" loading="lazy">
                </picture>
                <h2 class="spz__headline">Combine all your HR into one platform. Save time. <span>Reduce costs by 40%.</span></h2>
            </div>
        `;
	}

	// execute form changes (right side: white form modal over a static partner logo wall)
	const formContainer = document.querySelector('.spz_3046_v1 main#main-content div.section:first-child div.form-wrapper .form-col');
	if (formContainer) {
		// static, unclickable partner logo wall sits behind the modal (plain <img>, no link)
		formContainer.insertAdjacentHTML('afterbegin', `
            <picture class="spz__logos_wall">
                <source class="spz__logos_desktop" media="(min-width: 1199.98px)" srcset="${LOGO_WALL_IMAGE.desktop}">
                <source class="spz__logos_tablet" media="(min-width: 767.98px)" srcset="${LOGO_WALL_IMAGE.tablet['1']}">
                <img class="spz__logos_mobile" src="${LOGO_WALL_IMAGE.mobile['1']}" alt="BambooHR Partner Logo's">
            </picture>
        `);
		// logo + steps live INSIDE the white modal card (the form-col-container itself)
		formContainer.querySelector('.form-col-container').insertAdjacentHTML('afterbegin', `
            <div class="spz__steps">
                <div class="spz__step step_1"></div>
                <div class="border"></div>
                <div class="spz__step step_2"></div>
                <div class="border"></div>
                <div class="spz__step step_3"></div>
            </div>
        `);
		formContainer.querySelector('.form-col-container').insertAdjacentHTML('afterbegin', `
            <a href="https://www.bamboohr.com"><img class="spz__logo" src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774948778/bamboohr/3038/bamboohr_logo.svg" alt="BambooHR Logo"/></a>
        `);
		formContainer.querySelector('.form-col-container').classList.add('step1');

		const formLoadInterval = setInterval(() => {
			if (document.querySelector('.bhrForm__partnerDisclaimer') && document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow.form-input-width50')) {
				clearInterval(formLoadInterval);

				formContainer.querySelector('.form-col-container p strong').textContent = "GET A DEMO"
				formContainer.querySelector('.form-col-container p strong').insertAdjacentHTML("afterend", `<div class="subtitle">How can we help?</div><div class="lds-dual-ring"></div>`);
				formContainer.querySelector('.form-col-container .subtitle').insertAdjacentHTML('afterend', renderFormStepOneHTML());

				formContainer.querySelector('.mktoButton').insertAdjacentHTML("beforebegin", `
                    <div class="spz__next_cta spz-3046-nextcta">
                      <span>Next</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M12.0132 13L16 8M16 8L12.0132 3M16 8L0.999999 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                `);

				// handle tile selection
				formContainer.querySelector('.form-col-container .spz__step_1_container').addEventListener("click", function (e) {
					const button = e.target.closest("button.spz__button");
					if (button) {
						const key = button.dataset.key;
						if (button.classList.contains("active")) STEP_1_CHECKBOX_VALUES.remove(key);
						else STEP_1_CHECKBOX_VALUES.push(key);
						button.classList.toggle("active");
					}
				});

				formContainer.querySelector('.spz__next_cta.spz-3046-nextcta').addEventListener("click", function () {
					console.log('next cta clicked'); //TODO: remove this
					if (formContainer.querySelector('.form-col-container.step1')) {
						if (STEP_1_CHECKBOX_VALUES.length > 0) {
							localStorage.spzDemoFormStep1Values = JSON.stringify(STEP_1_CHECKBOX_VALUES);
						} else {
							localStorage.spzDemoFormStep1Values = "";
						}

						// move to step 2
						formContainer.querySelector('.form-col-container.step1').classList.remove("step1")
						formContainer.querySelector('.form-col-container').classList.add("step2")
						updateLogoWall(2)
						formContainer.querySelector('.form-col-container .subtitle').textContent = "How many employees do you have?"
						formContainer.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').classList.remove("hidden")
						formContainer.querySelector('.form-col-container .spz__step_1_container').classList.add("hidden")
						formContainer.querySelector('[name="Employees_Text__c"]').addEventListener("blur", function () {
							if (formContainer.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').querySelector("select").value != "") {
								if (formContainer.querySelector('.form-msg')) formContainer.querySelector('.form-msg').remove()
							} else {
								setTimeout(function () {
									if (typeof MktoForms2 !== 'undefined' && typeof $ !== 'undefined') {
										MktoForms2.allForms()[0].showErrorMessage("This field is required.", MktoForms2.$(document.querySelector('[name="Employees_Text__c"]')));
									}
								}, 100);
							}
						});
					} else if (formContainer.querySelector('.form-col-container.step2')) {
						if (document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').querySelector("select").value == "") {
							formContainer.querySelector('.mktoButton').click()
							setTimeout(function () {
								MktoForms2.allForms()[0].showErrorMessage("This field is required.", MktoForms2.$(document.querySelector('[name="Employees_Text__c"]')))
							}, 100);
							return;
						}

						//move to step 3
						formContainer.querySelector('.form-col-container.step2').classList.remove("step2")
						formContainer.querySelector('.form-col-container').classList.add("step3")
						updateLogoWall(3)
						formContainer.querySelector('.form-col-container .subtitle').textContent = "Great! Sounds like BambooHR will be a good fit for you."
						formContainer.querySelectorAll('.mktoFormRow.hidden').forEach((elmt) => {
							if (elmt.querySelector('.error')) {
								elmt.querySelector('.error').classList.remove("error")
							}
							if (elmt.querySelector('.mktoInvalid')) {
								elmt.querySelector('.mktoInvalid').classList.remove("mktoInvalid")
							}
							elmt.classList.remove("hidden")
						})
						document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').classList.add("hidden");
						formContainer.querySelector('.spz__next_cta').classList.add("hidden");
						formContainer.querySelector('.mktoButton').classList.remove("hidden");
					}
				});

				// check local storage for Q1 on page load
				if (localStorage.spzDemoFormStep1Values) {
					const storedValues = JSON.parse(localStorage.spzDemoFormStep1Values);
					if (storedValues.length > 0) {
						storedValues.forEach(value => {
							formContainer.querySelector(`.spz__button[data-key="${value}"]`).classList.add("active");
							STEP_1_CHECKBOX_VALUES.push(value);
						});
					}
				}

				document.querySelector('.spz_3046_v1 .lds-dual-ring').remove()
				document.querySelector('#LblEmail').childNodes[1].textContent = "Email";
				document.querySelector('.spz_3046_v1 main .form .mktoButton').textContent = "Get a Demo"
				document.querySelector('#LblEmail').closest('.mktoFormRow').classList.add('email-parent', 'width50', 'hidden')
				document.querySelector('#LblFirstName').closest('.mktoFormRow').classList.add('fname-parent', 'width50', 'hidden')
				document.querySelector('#LblLastName').closest('.mktoFormRow').classList.add('lname-parent', 'width50', 'hidden')
				document.querySelector('#LblPhone').closest('.mktoFormRow').classList.add('phone-parent', 'width50', 'hidden')
				document.querySelector('#LblTitle').closest('.mktoFormRow').classList.add('job-parent', 'width50', 'hidden')
				document.querySelector('#LblCompany').closest('.mktoFormRow').classList.add('company-parent', 'width50', 'hidden')
				document.querySelector('#LblCountry').closest('.mktoFormRow').classList.add('country-parent', 'hidden')
				document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').classList.add('employee_c-parent', 'hidden')
				document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').classList.remove("form-input-width50")
				document.querySelector('#LblCountry').closest('.mktoFormRow').classList.remove("form-input-width50")
				if (document.querySelector('.bhrForm__partnerDisclaimer').parentNode.parentNode.classList.contains("form-checkbox-flex")) {
					document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy", 'hidden')
					document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy", 'hidden')
				} else {
					document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy", 'hidden')
					document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy", 'hidden')
				}
				document.querySelector('.spz_3046_v1 main .form .mktoButton').classList.add("spz-3046-submit-cta", 'hidden')
				document.querySelector('[name="Employees_Text__c"]').tabIndex = 1;
				document.querySelector('[name="FirstName"]').tabIndex = 2;
				document.querySelector('[name="LastName"]').tabIndex = 3;
				document.querySelector('[name="Email"]').tabIndex = 4;
				document.querySelector('[name="Phone"]').tabIndex = 5;
				document.querySelector('[name="Title"]').tabIndex = 6;
				document.querySelector('[name="Company"]').tabIndex = 7;
				document.querySelector('[name="Country"]').tabIndex = 8;
			}
		}, 100);
	}

	trackingCode();
	logExecutionTime('V1 3046 experiment execution completed');
}

function main() {
	logExecutionTime('V1 3046 execution started');
	const interval = setInterval(() => {
		const isDocumentReady = document.querySelector('body') && document.querySelector('main .form.white-container .form-col .form-col-container');
		const isExperimentAlreadyExecuted = document.querySelector('.spz_3046_v1');
		if (isDocumentReady && !isExperimentAlreadyExecuted) {
			clearInterval(interval);
			executeExperiment();
			logExecutionTime('V1 3046 execution completed');
		}
	}, 100);
}

main();