function waitForElement(cssSelector, callback) {
	var stop,
		elementCached,
		timeout,
		check = function () {
			try {
				elementCached = document.querySelector(cssSelector);
				if (stop) return;
				if (elementCached) {
					callback(elementCached);
					clearTimeout(timeout);
				} else {
					window.requestAnimationFrame(check);
				}
			} catch (err) {
				console.log(err);
			}
		};
	window.requestAnimationFrame(check);
	timeout = setTimeout(function () {
		stop = true;
	}, 5000);
}
(function () {
	const _pushState = history.pushState;
	const _replaceState = history.replaceState;
	history.pushState = function () {
		_pushState.apply(history, arguments);
		window.dispatchEvent(new Event("spz:locationchange"));
	};
	history.replaceState = function () {
		_replaceState.apply(history, arguments);
		window.dispatchEvent(new Event("spz:locationchange"));
	};
	window.addEventListener("popstate", function () {
		window.dispatchEvent(new Event("spz:locationchange"));
	});
	function waitForProjectPage() {
		// Condition 1: URL must match
		if (!window.location.pathname.includes("/collections/project")) return;
		function checkAndInit() {
			const h1 = document.querySelector("section.max-w-container h1");
			if (!h1 || h1.textContent.trim() !== "Project Collection") return false;
			init5001();
			return true;
		}
		// ✅ Try immediately first (handles SPA back-navigation case)
		if (checkAndInit()) return;
		// ✅ Fallback: observe for DOM changes (handles initial page load case)
		const observer = new MutationObserver(function () {
			if (checkAndInit()) {
				observer.disconnect();
			}
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}


	function spzHero() {
		document.querySelector('main>section:nth-of-type(1)').insertAdjacentHTML('afterend', `
			<section class="spz_hero">
				<div class="spz_heroInner">
					<div class="auto_container">
						<div class="spz_herInner">
							<div class="spz_heroMain">
								<div class="spz_heroLeft">
									<h4>Project Collection</h4>
									<h1>Streamline Jira <strong>Project Management</strong></h1>
									<ul>
										<li>
											<p><strong>Capacity planning.</strong> Plan schedules by dragging-and-dropping issues. Auto-assign
												resources based on skills, availability, etc.</p>
										</li>
										<li>
											<p><strong>Time tracking.</strong> Log billable and non-billable hours. Track CapEx and OpEx. Generate
												suggested time entries with AI. </p>
										</li>
										<li>
											<p><strong>Reporting.</strong> Monitor costs, revenue, billing, budgets etc. Generate audit-ready reports.
												Optimize resources. Stay compliant.</p>
										</li>
									</ul>
								</div>
								<div class="spz_heroRight">
									<div class="spz_form">

									</div>
								</div>
							</div>
							<div class="spz_logos">
								<h3>Trusted by 30,000+ global companies</h3>
								<div class="spz_logosSlider">
									<div class="relative mt-10 w-full overflow-x-hidden grayscale md:mt-0">
										<div class="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-white/0 md:w-24"></div>
										<div class="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-white/0 md:w-24"></div>
										<div class="flex w-max animate-marquee will-change-transform">
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974686/tempo/5001/logo_airbnb-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974632/tempo/5001/logo_airbnb-desktop-and-tablet_1.svg" alt="airbnb logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974694/tempo/5001/logo_airbus-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974643/tempo/5001/logo_airbus-desktop-and-tablet_2.svg" alt="airbus logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974702/tempo/5001/logo_netflix-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974651/tempo/5001/logo_netflix-desktop-and-tablet_1.svg" alt="netflix logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974712/tempo/5001/logo_cisco-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974658/tempo/5001/logo_cisco-desktop-and-tablet.svg" alt="cisco logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974719/tempo/5001/logo_slack-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974667/tempo/5001/logo_slack-desktop-and-tablet.svg" alt="slack logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974728/tempo/5001/logo_oracle-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974674/tempo/5001/logo_oracle-desktop-and-tablet.svg" alt="oracle logo">
													</picture>
												</div>
											</div>
											
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974686/tempo/5001/logo_airbnb-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974632/tempo/5001/logo_airbnb-desktop-and-tablet_1.svg" alt="airbnb logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974694/tempo/5001/logo_airbus-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974643/tempo/5001/logo_airbus-desktop-and-tablet_2.svg" alt="airbus logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974702/tempo/5001/logo_netflix-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974651/tempo/5001/logo_netflix-desktop-and-tablet_1.svg" alt="netflix logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974712/tempo/5001/logo_cisco-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974658/tempo/5001/logo_cisco-desktop-and-tablet.svg" alt="cisco logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974719/tempo/5001/logo_slack-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974667/tempo/5001/logo_slack-desktop-and-tablet.svg" alt="slack logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974728/tempo/5001/logo_oracle-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974674/tempo/5001/logo_oracle-desktop-and-tablet.svg" alt="oracle logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974686/tempo/5001/logo_airbnb-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974632/tempo/5001/logo_airbnb-desktop-and-tablet_1.svg" alt="airbnb logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974694/tempo/5001/logo_airbus-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974643/tempo/5001/logo_airbus-desktop-and-tablet_2.svg" alt="airbus logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974702/tempo/5001/logo_netflix-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974651/tempo/5001/logo_netflix-desktop-and-tablet_1.svg" alt="netflix logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974712/tempo/5001/logo_cisco-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974658/tempo/5001/logo_cisco-desktop-and-tablet.svg" alt="cisco logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974719/tempo/5001/logo_slack-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974667/tempo/5001/logo_slack-desktop-and-tablet.svg" alt="slack logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974728/tempo/5001/logo_oracle-mobile.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1774974674/tempo/5001/logo_oracle-desktop-and-tablet.svg" alt="oracle logo">
													</picture>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</section>
		`);
		document.querySelector('a[href="https://www.tempo.io/collections/project#form-collection-save"]').href = '#form-collection-save';
		document.querySelector('a[href="#form-collection-save"]').addEventListener('click', function (e) {
			e.preventDefault();
			const formSection = document.querySelector('#form-collection-save');
			if (formSection) {
				formSection.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}



	// ============================================================
	//  All FUNCTIONS — define here
	// ============================================================
	function formElemChanges() {
		// Helper: safe single element selector
		const $ = (selector, context = document) => context.querySelector(selector);
		// Helper: safe multi element selector
		const $$ = (selector, context = document) => context.querySelectorAll(selector);
		const BASE = 'body.spz_5001_v #form-collection-save';
		const aside = $(BASE);
		if (!aside) return; // Exit early if base element doesn't exist

		// const rightInner = $('.spz_form', aside);
		// if (!rightInner) return;

		// ── 3. Move form div after logo ───────────────────────────────────
		const formDiv = $(`${BASE}`);
		if (formDiv) $('.spz_form').insertAdjacentElement('afterbegin', formDiv);
		// ── 4. Update form title ──────────────────────────────────────────
		const formHeader = $(`.spz_form header`);
		if (formHeader) formHeader.textContent = 'Get Started Free';
		// ── 5. Clear phone input value ────────────────────────────────────
		const phoneInput = $(`.spz_form .phone-input-container .PhoneInputInput`);
		if (phoneInput) {
			setTimeout(() => {
				phoneInput.value = '';
			}, 1000); // Wait for any potential scripts to set the value
		}
		// ── 6. Clear first option of company size dropdown ────────────────
		// const firstOption = $('aside#formsignup .flex-col > select[name="company_size__employees"] option:first-child');
		// if (firstOption) firstOption.textContent = '';
		const select = $('.spz_form .flex-col > select[name="company_size__employees"]');
		if (select) {
			const firstOption = select.querySelector('option:first-child');
			if (firstOption) {
				firstOption.textContent = '';
				firstOption.value = '';
				// Force Firefox to re-render
				select.value = '';
				select.dispatchEvent(new Event('change'));
			}
		}
		// ── 7. Clean up labels ────────────────────────────────────────────
		$$('.spz_form .form-field-label').forEach(label => {
			label.textContent = label.textContent.replace(/\s*\(required\)/gi, '').trim();
			if (label.textContent.includes('Company Size')) {
				label.textContent = 'Company Size';
			} else if (label.textContent.includes('Phone')) {
				label.textContent = 'Phone number';
			}
			// Normalize: capitalize first word only, lowercase the rest
			label.textContent = label.textContent
				.split(' ')
				.map((word, index) =>
					index === 0
						? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
						: word.toLowerCase()
				)
				.join(' ');
		});
		// ── 8. Focus / filled class handlers ─────────────────────────────
		$$(`.spz_form .flex-col > input,
            .spz_form .flex-col > select, 
            .spz_form .phone-input-container input`).forEach(field => {
			const flexCol = field.closest('.flex-col');
			if (!flexCol) return;
			field.addEventListener('focus', () => flexCol.classList.add('focused'));
			field.addEventListener('blur', () => {
				flexCol.classList.remove('focused');
				flexCol.classList.toggle('filled', field.value.trim() !== '');
			});
		});
		// ── 9. Dropdown arrow ─────────────────────────────────────────────
		const selectTag = $('.spz_form .flex-col > select');
		if (selectTag && !$('.spz_form .flex-col > .arrow')) {
			selectTag.insertAdjacentHTML('afterend', `
              <div class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                      <path d="M11.91 8.24491e-05L12.97 1.06108L7.193 6.84008C7.10043 6.93324 6.99036 7.00717 
                      6.86911 7.05761C6.74786 7.10806 6.61783 7.13403 6.4865 7.13403C6.35517 7.13403 6.22514 
                      7.10806 6.10389 7.05761C5.98264 7.00717 5.87257 6.93324 5.78 6.84008L-2.65457e-07 
                      1.06108L1.06 0.00108285L6.485 5.42508L11.91 8.24491e-05Z" fill="#1D1D1B"></path>
                  </svg>
              </div>
          `);
		}
		// ── 10. Submit button ─────────────────────────────────────────────
		const submitBtn = $('.spz_form button.btn-primary');
		if (submitBtn) {
			submitBtn.textContent = 'Submit';
			submitBtn.classList.add('spz5001_v', 'spz_submit_btn');
		}

		document.querySelector('input[name="company_email"]').closest('.form-field-cell').insertAdjacentElement('afterend', document.querySelector('input[name="company_name"]').closest('.form-field-cell'));

		// hide fields on start
		const fieldsToHide = ['input[name="job_title"]', 'select[name="company_size__employees"]', 'input[name="phone"]'];
		fieldsToHide.forEach(selector => {
			if (document.querySelector(selector)) {
				document.querySelector(selector).closest('.form-field-cell').classList.add('hide');
			}
		});

		document.querySelectorAll('.spz_form .relative.flex-col > input').forEach(input => {
			input.addEventListener('keyup', function () {
				const firstName = document.querySelector('input[name="first"]').value;
				const lastName = document.querySelector('input[name="last"]').value;
				const email = document.querySelector('input[name="company_email"]').value;
				const name = document.querySelector('input[name="company_name"]').value;
				// Validate email format
				const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
				const emailValid = emailPattern.test(email);

				// Check if all required fields are filled and email is valid
				if (firstName !== '' && lastName !== '' && email !== '' && name !== '' && emailValid) {
					// Select the elements to unhide
					const fieldsToShow = ['input[name="job_title"]', 'select[name="company_size__employees"]', 'input[name="phone"]'];

					fieldsToShow.forEach(selector => {
						if (document.querySelector(selector)) {
							const fieldWrap = document.querySelector(selector).closest('.form-field-cell');
							if (fieldWrap.classList.contains('hide')) {
								fieldWrap.classList.remove('hide');
								document.querySelector('.spz_form').classList.add('formProgressive');
							}
						}
					});
					removeError(); // Remove error if all conditions are met
				} else if (!emailValid && email.includes('@')) {
					// If email format is incorrect after user has typed "@"
					showError('Valid email required.');
				}
			});
		});

		document.querySelector('input[name="company_email"]').addEventListener('blur', function () {
			validateEmail();
		});


		// ── 11. Disclaimer ────────────────────────────────────────────────
		// const submitBtnUpdated = $('.spz_main_wrapper aside#formsignup .spz_5001_v_submit_btn');
		// if (submitBtnUpdated && !$('.spz_disclaimer')) {
		//     submitBtnUpdated.parentElement.insertAdjacentHTML('afterend', `
		//     <div class="spz_disclaimer">
		//         By submitting this form, you agree that your data will be processed 
		//         in accordance with our 
		//         <a href="https://www.tempo.io/privacy-policy" target="_blank">privacy notice</a>.
		//     </div>
		// `);
		// }

	}

	function validateEmail() {
		const email = document.querySelector('input[name="company_email"]').value;
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
		const emailValid = emailPattern.test(email);

		if (!emailValid && email !== '') {
			// If the email is invalid, keep showing the error
			showError('Valid email required.');
		} else {
			removeError();
		}
	}

	function showError(message) {
		let errorMsg = document.querySelector('.spz-error-message');
		const svgIcon = `
			<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 8v4"></path>
				<path d="M12 16h.01"></path>
			</svg>`;

		if (!errorMsg) {
			errorMsg = document.createElement('div');
			errorMsg.className = 'spz-error-message';
			errorMsg.innerHTML = `${svgIcon} <span>${message}</span>`;
			document.querySelector('input[name="company_email"]').after(errorMsg);
		}
	}

	function removeError() {
		const email = document.querySelector('input[name="company_email"]').value;
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
		const emailValid = emailPattern.test(email);

		// Only remove error if the email is valid
		if (emailValid) {
			const errorMsg = document.querySelector('.spz-error-message');
			if (errorMsg) {
				errorMsg.remove();
			}
		}
	}

	function init5001() {
		document.body.classList.add('spz_5001_v');
		// document.querySelector('body.spz_5001_v main section > div').classList.add('spz_main_wrapper');
		if (!document.querySelector('.spz_hero')) {
			spzHero();

			waitForElement("#form-collection-save form.w-full", (spzForm) => {
				formElemChanges();
			});
			const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			if (isSafari) {
				document.body.classList.add('is-safari');
			}
			// If you face any issues, please switch to the named-function version of this code and use that instead.
			(function () {
				//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

				// Set the value of the squeezePage variable as needed:
				// true  – if you are using a squeeze page (i.e., the page contains a form)
				// false – if you are not using a squeeze page (i.e., the page does not contain a form)
				// 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

				const squeezePage = true; // true / false / 'both'
				const expName = '5001'; //experiment name should be 1001, 1002, 1003 etc.
				const variantName = `spz_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
				const clientDomain = '.tempo.io'; //domain should be .spiralyze.com


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
	// ============================================================
	// Listen for route changes and re-run your check
	window.addEventListener("spz:locationchange", function () {
		// ✅ If not demo page, remove your classes from body
		if (!window.location.pathname.includes("/collections/project")) {
			document.body.classList.remove('spz_5001_v');
		}
		waitForProjectPage();
	});

	function spz5001ScrollPageToTop() {
		window.scrollTo(0, 0);
		var scrollRoot = document.scrollingElement || document.documentElement;
		if (scrollRoot) {
			scrollRoot.scrollTop = 0;
			scrollRoot.scrollLeft = 0;
		}
		if (document.body) {
			document.body.scrollTop = 0;
			document.body.scrollLeft = 0;
		}
		var topHeader = document.querySelector('.top-header');
		if (topHeader) {
			topHeader.scrollTop = 0;
			topHeader.scrollLeft = 0;
		}
		var mainInTop = document.querySelector('.top-header main');
		if (mainInTop) {
			mainInTop.scrollTop = 0;
			mainInTop.scrollLeft = 0;
		}
	}

	var mobileScrollLock = setInterval(function () {
		spz5001ScrollPageToTop();
	}, 420);

	setTimeout(function () {
		clearInterval(mobileScrollLock);
	}, 3000);

	waitForProjectPage();
})();