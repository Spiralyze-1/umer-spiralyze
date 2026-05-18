const GLOBAL_BODY_CLASS = 'spz_13003_v';
const SPZ_PAGE_VALUE_KEY = 'spz-page-value';

function waitForElement(selector, timeout = 5000, interval = 100) {
	return new Promise((resolve, reject) => {
		const element = document.querySelector(selector);
		if (element) {
			resolve(element);
			return;
		}

		const timerInstance = setTimeout(() => {
			clearInterval(intervalInstance);
			reject(new Error(`Element "${selector}" not found within ${timeout}ms`));
		}, timeout);

		const intervalInstance = setInterval(() => {
			const el = document.querySelector(selector);
			if (el) {
				clearInterval(intervalInstance);
				clearTimeout(timerInstance);
				resolve(el);
			}
		}, interval);
	});
}

function injectBrowserClass() {
	let userAgent = navigator.userAgent;
	if (userAgent.match(/edg/i)) return "edge";
	if (userAgent.match(/firefox|fxios/i)) return "firefox";
	if (userAgent.match(/opr\//i)) return "opera";
	if (userAgent.match(/chrome|chromium|crios/i)) return "chrome";
	if (userAgent.match(/safari/i)) return "safari";
	return 'unknown';
}

function getPageData() {
	const data = [
		{
			url: 'https://netwrix.com/en/demo-thank-you/',
			key: '1secure-msps-page',
		},
		{
			url: 'https://netwrix.com/en/products/1secure-msps/',
			key: '1secure-msps-page',
		},
		{
			url: 'https://netwrix.com/en/products/change-tracker/',
			key: 'change-tracker-page',
		},
		{
			url: 'https://netwrix.com/en/products/endpoint-protector/',
			key: 'endpoint-protector-page',
		},
		{
			url: 'https://netwrix.com/en/products/identity-manager/',
			key: 'identity-manager-page',
		},
		{
			url: 'https://netwrix.com/en/products/identity-recovery-software/',
			key: 'identity-recovery-page',
		},
		{
			url: 'https://netwrix.com/en/products/password-secure/',
			key: 'password-secure-page',
		},
		{
			url: 'https://netwrix.com/en/products/platform-governance/',
			key: 'platform-governance-page',
		},
		{
			url: 'https://netwrix.com/en/products/threat-manager/',
			key: 'threat-manager-page',
		},
		{
			url: 'https://netwrix.com/en/products/threat-prevention/',
			key: 'threat-prevention-page',
		},
	];
	return data.find(item => window.location.href.includes(item.url));
}

function injectVariant6012(currentPageData) {
	if (document.body.classList.contains(GLOBAL_BODY_CLASS)) return;
	if (!currentPageData) return;
	const { key, title, heading } = currentPageData;
	document.body.classList.add(GLOBAL_BODY_CLASS);
	document.body.classList.add(injectBrowserClass());
	document.body.classList.add(`spz_${key}`);

	if (document.querySelector('.c--hero-b')) {
		document.querySelector('.c--hero-b').classList.add('spz_6012_target');
		document.querySelector('.c--hero-b').insertAdjacentHTML('afterend', `<section class="spz_tour_on_Page">
			<h2 class="spz_tour_onPage_title">Your personalized demo is on the way!</h2>
			<p class="spz_tour_onPage_subTitle">Thank you for requesting a demo! We can’t wait to show you how Netwrix can level up your <br> security. Stay tuned for an email from our rep. In the meantime, explore an interactive tour of the product.</p>
			<button class="spz_form_trigger_button spz13003_v">
					<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
							<path d="M30.2286 16.0698L4.12695 31.1396V1L30.2286 16.0698Z" fill="#5851DB" ></path>
					</svg>
					<span class="spz_btn">See In-Browser Demo</span>
			</button>
			<div class="spz_form_wrapper">
					<div class="spz_form_wrapper_inner hide">
							<h2 class="spz_form1310_title">Launch  In-Browser Demo</h2>
							<form class="mktoForm spz_form1310" id="mktoForm_1310"></form>
					</div>
			</div>
			</section>`);
	}

	document.querySelectorAll('button.c--layout-c__wrapper__ft__item, button.c--hero-e__wrapper__content__list-group__item').forEach(function (ele) {
		const buttonText = ele.textContent;
		if (buttonText.includes('in-browser')) {
			// Clone the element to remove all event listeners
			const newEle = ele.cloneNode(true);
			ele.parentNode.replaceChild(newEle, ele);

			// Remove any inline event attributes that cloneNode(true) may have copied
			newEle.removeAttribute('onclick');
			newEle.removeAttribute('onmousedown');
			newEle.removeAttribute('onmouseup');

			const buttonAttribute = setInterval(function () {
				if (newEle.getAttribute('data-modal-content')) {
					clearInterval(buttonAttribute);
					['data-modal-content', 'data-modal-open'].map(attr => newEle.removeAttribute(attr));
					console.log('data-modal-content removed');
				}
			}, 50);

			// Add new click handler
			newEle.addEventListener('click', function (e) {
				e.preventDefault();
				e.stopImmediatePropagation();

				const targetSection = document.querySelector('.spz_tour_on_Page');
				if (targetSection) {
					const triggerButton = document.querySelector('button.spz_form_trigger_button');
					if (triggerButton) {
						triggerButton.click();
					}

					const headerHeight = document.querySelector('header.c--header-a').getBoundingClientRect().height;
					// Get the position of the section
					const elementPosition = targetSection.getBoundingClientRect().top;
					const offsetPosition = elementPosition + window.pageYOffset - headerHeight + 60;

					// Function to scroll with retry logic
					function scrollToPosition(targetPosition, retries = 3) {
						window.scrollTo({
							top: targetPosition,
							behavior: 'smooth'
						});

						// Check if scroll actually happened after animation
						setTimeout(() => {
							const currentPosition = window.scrollY || window.pageYOffset;
							const difference = Math.abs(currentPosition - targetPosition);

							// If we're not close enough and have retries left
							if (difference > 100 && retries > 0) {
								console.log(`Scroll incomplete. Retrying... (${retries} attempts left)`);
								scrollToPosition(targetPosition, retries - 1);
							}
						}, 500); // Wait for smooth scroll to complete
					}

					// Scroll to the adjusted position
					setTimeout(function () {
						scrollToPosition(offsetPosition);
					}, 100);
				}
			});
		}
	});

	function updateCardsTitle(){
		if(document.querySelector('.spz_tour_on_Page + section .f--container .f--row')){
			document.querySelector('.spz_tour_on_Page + section .f--container .f--row .f--col-4:first-child .c--card-s .c--card-s__subtitle').innerHTML = `Check out our guides and <br> resources while you <br> wait.`
			document.querySelector('.spz_tour_on_Page + section .f--container .f--row .f--col-4:nth-child(2) .c--card-s .c--card-s__subtitle').innerHTML = `Explore real results from real <br> customers using <br> Netwirx.`
			document.querySelector('.spz_tour_on_Page + section .f--container .f--row .f--col-4:last-child .c--card-s .c--card-s__subtitle').innerHTML = `Learn more about who we are <br> and why we do <br> what we do.`
		}
	}
	updateCardsTitle();

	const newBtnInterval = setInterval(function () {
		if (document.querySelectorAll('body.spz_13003_v .spz_form_trigger_button').length > 0) {
			clearInterval(newBtnInterval);
			document.querySelector('body.spz_13003_v .spz_form_trigger_button').addEventListener('click', function (e) {
				e.currentTarget.classList.add('hide');
				e.currentTarget.nextElementSibling.querySelector('.spz_form_wrapper_inner').classList.remove('hide');
			});

			// Manually loading the mkto form because it is not exist in the DOM
			if (typeof MktoForms2 === 'undefined' && !document.querySelector('script[src*="mktoForms2"]')) {
				const script = document.createElement('script');
				script.src = '//lp.netwrix.com/js/forms2/js/forms2.min.js';
				script.async = true;
				document.head.appendChild(script);
			}
		}
	}, 50);


	var formLoadInterval = setInterval(() => {
		if (typeof MktoForms2 !== 'undefined' && document.querySelectorAll('.spz_form_wrapper_inner form.spz_form1310.spz_form_addition_completed').length === 0) {
			console.log('targetSectionInterval ___ 2');
			clearInterval(formLoadInterval);

			MktoForms2.loadForm("//lp.netwrix.com", "130-MAN-089", 1310, async (form) => {
				// Your form ready logic here
				console.log('Form is ready!');

				// Move email field below the first & last name
				const moveFieldsInterval = setInterval(function () {
					if (document.querySelector('form.spz_form1310 [data-wrapper="Email"] + [data-wrapper="FirstName LastName"]')) {
						clearInterval(moveFieldsInterval);
						const emailField = document.querySelector('form.spz_form1310 [data-wrapper="Email"]');
						const firstLastName = document.querySelector('form.spz_form1310 [data-wrapper="FirstName LastName"]');

						if (emailField && firstLastName) {
							emailField.insertAdjacentElement('beforebegin', firstLastName);
						}
						
						if(document.querySelector('form.spz_form1310 #privacy')){
							document.querySelector('form.spz_form1310 #privacy').innerHTML = `We care about the security of your data. Read our <a href="https://netwrix.com/en/legal/privacy-policy/" target="_blank" id="">Privacy Policy.</a>`
						}

						// Move privacy policy below the button
						const buttomRow = document.querySelector('form.spz_form1310 .mktoButtonRow');
						const privacyPolicy = document.querySelector('.spz_form_wrapper_inner form.spz_form1310 .mktoFieldWrap #privacy').closest('.mktoFormRow');

						if (buttomRow && privacyPolicy) {
							privacyPolicy.insertAdjacentElement('beforebegin', buttomRow);
						}
					}
				}, 400);

				const formButton = document.querySelector('form.spz_form1310 .mktoButtonWrap.mktoSimple .mktoButton');
				if (formButton) {
					formButton.textContent = 'Instant Access';
				}

				document.querySelector('.spz_form_wrapper_inner form.spz_form1310').classList.add('spz_form_addition_completed');



				form.setValues({ Language: 'null' });

				const preFilledEmail = localStorage.getItem('userEmail');
				const preFilledFirstName = localStorage.getItem('userFirstName');
				const preFilledLastName = localStorage.getItem('userLastName');

				if (preFilledEmail) {
					form.setValues({ Email: preFilledEmail });
				}
				if (preFilledFirstName) {
					form.setValues({ FirstName: preFilledFirstName });
				}
				if (preFilledLastName) {
					form.setValues({ LastName: preFilledLastName });
				}


				// This is only for subscription center, prefill all values
				if (undefined) {
					form.setValues(undefined)
				}

				MktoForms2.whenReady(function (form) {
					if (typeof window.translateForm === 'function') {
						window.translateForm(form);
					}


					var ref = document.referrer || '';
					if (ref) {
						var a = document.createElement('a');
						a.href = ref;
						ref = a.hostname.replace(/^www./, '');
					}

					form.addHiddenFields({ "Last_Referrer__c": ref || "direct" });
					if(document.querySelector('.mktoButtonWrap button')){
						document.querySelector('.mktoButtonWrap button').classList.add('spz13003_v');
					}

				})


				form.onValidate(() => {
					const values = form.getValues();
					const email = values.Email?.toLowerCase().trim();
					const competitorDomains = ["@stealthbits.com", "@strongpoint.io", "@imanami.com", "@matseo.de", "@cososys.com", "@cososys.de", "@endpointprotector.de", "@endpointprotector.com", "@usercube.com", "@policypak.com", "@pingcastle.com"];
					const isCompetitor =
						competitorDomains.includes(email) ||
						competitorDomains.some(domain => email.endsWith(domain));
					// List of competitor domains
					if (isCompetitor) {
						form.submittable(false);
						form.showErrorMessage("This email address is not allowed", form.getFormElem().find("#Email"));
						return false;
					} else {
						form.submittable(true);
					}
				})
					;

				form.onSuccess(() => {
					const values = form.getValues()

					localStorage.setItem('userEmail', values.Email);
					if (values.FirstName) localStorage.setItem('userFirstName', values.FirstName)
					if (values.LastName) localStorage.setItem('userLastName', values.LastName)


					const formElement = form.getFormElem()[0];
					if (values.Unsubscribed == 'yes') {
						formElement.innerHTML = '<p class="c--form-success-a">undefined</p>';

					} else {
						formElement.innerHTML = '<p class="c--form-success-a">You are in! Explore Netwrix for yourself to see how you can start securing your data from the source.</p>';
					}


					window.dataLayer.push({
						"event": "mkto.form.success",
						"mkto.form.id": form.getId(),
						"mkto.form.values": values,
					});

					// Define iframe configurations for specific pages
					const iframeConfigs = {
						'1secure-msps': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/7c050249-8301-4cf9-ac21-d37e1251fec5?&isEmbedded=true"></iframe>',

						'endpoint-protector': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/915984f1-ed5c-4d87-af6e-2f7814c4bedf?valid=856c0746-01f8-44a5-a697-c6df1af054bf&isEmbedded=true"></iframe>',

						'identity-manager': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/usercube-overview?valid=87ad68fa-b836-4e44-9abc-2d12f4306d68&isEmbedded=true"></iframe>',

						'identity-recovery-software': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/5e20990f-58ac-4a74-9b8e-84824d3e0986?valid=0ad5a323-e269-43b4-83db-4cf44212c50b&isEmbedded=true"></iframe>',

						'password-secure': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/36f664de-0098-43f6-9c6b-1ec6867e0033?valid=cb460eca-d324-4f5a-8e0b-4c964a92ccba&isEmbedded=true"></iframe>',

						'platform-governance': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/bc2f791c-8ed7-48aa-a92e-63a0700f9ce9?valid=3a7f019a-1d79-4996-ad04-2b3034a6afc5&isEmbedded=true"></iframe>',

						'threat-manager': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/5fbe5d7b-77da-448b-aa4e-6e6db55b0360?valid=1400af10-1d40-4c70-a5bf-7263724ff11a&isEmbedded=true"></iframe>',

						'threat-prevention': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/b4adfdaa-5927-41ef-b763-33a145354db1?valid=0ee9779b-6878-4eed-9ad7-d8878106ce3c&isEmbedded=true"></iframe>'
					};

					// Check current page and handle accordingly
					const currentPath = window.location.pathname;
					let showIframe = false;
					let iframeHTML = '';

					// Check if current page should show iframe
					if (document.body.classList.contains('spz_1secure-msps-page')) {
						showIframe = true;
						iframeHTML = iframeConfigs['1secure-msps'];
					} else if (document.body.classList.contains('spz_endpoint-protector-page')) {
						showIframe = true;
						iframeHTML = iframeConfigs['endpoint-protector'];
					} else if (document.body.classList.contains('spz_identity-manager-page')) {
						showIframe = true;
						iframeHTML = iframeConfigs['identity-manager'];
					} else if (document.body.classList.contains('spz_identity-recovery-page')) {
						showIframe = true;
						iframeHTML = iframeConfigs['identity-recovery-software'];
					} else if (document.body.classList.contains('spz_password-secure-page')) {
						showIframe = true;
						iframeHTML = iframeConfigs['password-secure'];
					} else if (document.body.classList.contains('spz_platform-governance-page')) {
						showIframe = true;
						iframeHTML = iframeConfigs['platform-governance'];
					} else if (document.body.classList.contains('spz_threat-manager-page')) {
						showIframe = true;
						iframeHTML = iframeConfigs['threat-manager'];
					} else if (document.body.classList.contains('spz_threat-prevention-page')) {
						showIframe = true;
						iframeHTML = iframeConfigs['threat-prevention'];
					}

					// Handle iframe display or redirect
					if (showIframe) {
						// Show iframe instead of redirecting (desktop only)
						const formParent = formElement.parentElement;

						if (document.querySelector(".js--demo-form") && document.querySelector(".js--demo")) {
							document.querySelector(".js--demo-form")?.classList.add("u--display-none");
							document.querySelector(".js--demo")?.classList.remove("u--display-none");
							document.querySelector(".js--demo-footer")?.classList.add("u--display-none");
						}

						const previousElementSibling = formParent?.previousElementSibling;
						if (previousElementSibling?.classList.contains('js--form-title')) {
							previousElementSibling.classList.add('u--display-none');
						}


						// Insert iframe into the spz_tour_on_Page section
						const tourSection = document.querySelector('.spz_tour_on_Page');
						if (tourSection) {
							// Add class to indicate iframe is active
							tourSection.classList.add('spz_iframe_active');

							// Create a container for the iframe (visible on desktop only)
							const iframeContainer = document.createElement('div');
							iframeContainer.className = 'spz_iframe_container';
							iframeContainer.style.cssText = 'position: relative; width: 100%; height: 100%;';
							iframeContainer.innerHTML = iframeHTML;

							// Create mobile message container (visible on mobile/tablet only)
							const mobileMessage = document.createElement('div');
							mobileMessage.className = 'spz_mobile_message u--display-none u--display-tablets-none';
							mobileMessage.style.cssText = 'display: none; text-align: center; padding: 40px 20px;';
							mobileMessage.innerHTML = `
										            <div style="background-color: #6C63FF; color: white; padding: 40px 20px; font-family: Hubot Sans,HubotSans-fallback,Courier New,monospace;">
										                <h3 style="font-size: 24px;font-weight: 400; line-height: 1.25;">Move to desktop for a better experience</h3>
										            </div>
										        `;

							// Add CSS for responsive behavior
							const style = document.createElement('style');
							style.textContent = `
										            @media (max-width: 810px) {
										                .spz_iframe_container {
										                    display: none !important;
										                }
										                .spz_mobile_message {
										                    display: block !important;
										                }
										            }
										            @media (min-width: 811px) {
										                .spz_iframe_container {
										                    display: block !important;
																				max-width: 1330px;
																				margin: auto;
										                }
										                .spz_mobile_message {
										                    display: none !important;
										                }
										            }
										        `;
							document.head.appendChild(style);

							// Append both containers to the tour section
							tourSection.appendChild(iframeContainer);
							tourSection.appendChild(mobileMessage);
						}

					} else {
						// Handle redirects for other pages (auditor and privilege-secure)
						if (document.querySelector('body.spz_13003_v.spz_change-tracker-page')) {
							window.location.href = 'https://netwrix.com/en/products/change-tracker/all-demos/'
						}

						const formParent = formElement.parentElement;
						if (document.querySelector(".js--demo-form") && document.querySelector(".js--demo")) {
							document.querySelector(".js--demo-form")?.classList.add("u--display-none");
							document.querySelector(".js--demo")?.classList.remove("u--display-none");
							document.querySelector(".js--demo-footer")?.classList.add("u--display-none");
						}

						const previousElementSibling = formParent?.previousElementSibling;
						if (previousElementSibling?.classList.contains('js--form-title')) {
							previousElementSibling.classList.add('u--display-none');
						}
					}

					return false;
				});
			});
		}
	}, 100);


	//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

	// Set the value of the squeezePage variable as needed:
	// true  – if you are using a squeeze page (i.e., the page contains a form)
	// false – if you are not using a squeeze page (i.e., the page does not contain a form)
	// 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

	const squeezePage = true; // true / false / 'both'
	const expName = '13003'; //experiment name should be 1001, 1002, 1003 etc.
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

}

waitForElement('body').then(element => {
	// check and inject the variant if the SPA changes the url 
	const spaObserver = new MutationObserver((mutations) => {
		if (!document.body.classList.contains('spz_13003_spa_observed')) document.body.classList.add('spz_13003_spa_observed');
		const currentPageData = getPageData();
		if (currentPageData) {
			const isDemoThankYou = currentPageData.url.includes('demo-thank-you');
			if (!isDemoThankYou) {
				localStorage.setItem(SPZ_PAGE_VALUE_KEY, currentPageData.key);
				return;
			}
			const storedPageKey = localStorage.getItem(SPZ_PAGE_VALUE_KEY);
			if (storedPageKey) {
				document.body.classList.add(`spz_${storedPageKey}`);
				injectVariant6012(Object.assign({}, currentPageData, { key: storedPageKey }));
			}
		} else {
			if (document.body.classList.contains(GLOBAL_BODY_CLASS)) {
				document.body.classList.remove(GLOBAL_BODY_CLASS);
				document.body.classList.remove(injectBrowserClass());
			}
		}
	});
	if (!document.body.classList.contains(`spz_13003_spa_observed`)) {
		spaObserver.observe(document.body, {
			childList: true,
			subtree: true,
		});
		document.body.classList.add(`spz_13003_spa_observed`);
	}
});
