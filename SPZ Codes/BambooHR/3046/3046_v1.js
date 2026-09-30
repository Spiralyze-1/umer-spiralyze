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
                    <img src="${REVIEWS_IMAGE.mobile}" alt="BambooHR Reviews">
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
		setTimeout(() => {
			if (formContainer.querySelector('.bento-steps')) {
				formContainer.querySelector('.bento-steps').insertAdjacentElement('beforebegin', formContainer.querySelector('.bento-logo'));
				formContainer.querySelector('.bento-tiles .bento-tile:nth-child(3) .bento-tile-label').innerHTML = `Payroll <br> & Time`;

				formContainer.querySelector('.bento-next').addEventListener("click", function () {
					if(formContainer.querySelector('.form-col-container.bento.bento-step1')){
						updateLogoWall('1');
					} else if(formContainer.querySelector('.form-col-container.bento.bento-step2')){
						updateLogoWall('2');
					} else if (formContainer.querySelector('.form-col-container.bento.bento-step3')){
						updateLogoWall('3');
					}
				});
			}
		}, 500);

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