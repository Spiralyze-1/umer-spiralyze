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
	var spz5001MarqueeDeb = null;
	var spz5001MarqueeRo = null;
	function spz5001MarqueeSync() {
		var track = document.querySelector('.spz_logosSlider .animate-marquee');
		if (!track) return;
		var mq = window.matchMedia('(max-width: 1023.98px)');
		if (!mq.matches) {
			track.style.removeProperty('--spz5001-loop');
			track.style.removeProperty('animation');
			track.style.removeProperty('-webkit-animation');
			delete track.dataset.spz5001LoopPx;
			delete track.dataset.spz5001MarqueeArmed;
			return;
		}
		var cells = track.querySelectorAll(':scope > .box-content');
		if (cells.length < 12) return;
		var w = cells[6].offsetLeft - cells[0].offsetLeft;
		if (!(w > 0)) return;
		var armed = track.dataset.spz5001MarqueeArmed === '1';
		var prev = armed && track.dataset.spz5001LoopPx ? parseFloat(track.dataset.spz5001LoopPx, 10) : null;
		/* Avoid animation:none restarts when width already stable (stops load/RO/resize “jerks”). */
		if (prev !== null && Math.abs(w - prev) < 2) {
			return;
		}
		/* Only hard-reset transform when we must change loop distance after marquee was already running. */
		if (armed && prev !== null && Math.abs(w - prev) >= 2) {
			track.style.animation = 'none';
			track.style.webkitAnimation = 'none';
			void track.offsetWidth;
		}
		track.dataset.spz5001LoopPx = String(w);
		track.style.setProperty('--spz5001-loop', w + 'px');
		var anim = 'spz5001-marquee-px 40s linear infinite';
		track.style.animation = anim;
		track.style.webkitAnimation = anim;
		track.dataset.spz5001MarqueeArmed = '1';
	}
	function spz5001MarqueeBind() {
		clearTimeout(spz5001MarqueeDeb);
		spz5001MarqueeDeb = setTimeout(function () {
			var track = document.querySelector('.spz_logosSlider .animate-marquee');
			if (!track) return;
			var mq = window.matchMedia('(max-width: 1023.98px)');
			if (!mq.matches) {
				spz5001MarqueeSync();
				return;
			}
			var imgs = track.querySelectorAll('img');
			var waitImgs = Promise.all(
				Array.prototype.map.call(imgs, function (img) {
					if (img.complete) return Promise.resolve();
					return new Promise(function (resolve) {
						img.addEventListener('load', resolve, { once: true });
						img.addEventListener('error', resolve, { once: true });
					});
				})
			);
			var waitFonts =
				document.fonts && document.fonts.ready
					? document.fonts.ready.catch(function () { })
					: Promise.resolve();
			Promise.all([waitImgs, waitFonts]).then(function () {
				requestAnimationFrame(function () {
					requestAnimationFrame(spz5001MarqueeSync);
				});
			});
		}, 120);
	}
	function spz5001MarqueeObserveShell() {
		if (spz5001MarqueeRo) return;
		var shell = document.querySelector('.spz_logosSlider > .relative');
		if (!shell) return;
		try {
			spz5001MarqueeRo = new ResizeObserver(function () {
				spz5001MarqueeBind();
			});
			spz5001MarqueeRo.observe(shell);
		} catch (e) { }
	}
	(function spz5001MarqueeMq() {
		var mql = window.matchMedia && window.matchMedia('(max-width: 1023.98px)');
		if (!mql) return;
		function onMq() {
			spz5001MarqueeBind();
		}
		if (mql.addEventListener) mql.addEventListener('change', onMq);
		else if (mql.addListener) mql.addListener(onMq);
		if (!window.spz5001MarqueeResizeHooked) {
			window.spz5001MarqueeResizeHooked = true;
			window.addEventListener('resize', spz5001MarqueeBind, { passive: true });
		}
	})();
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
											<p><strong>Capacity planning.</strong> Plan schedules by dragging-and-dropping issues. Auto-assign resources based on skills, availability, etc.</p>
										</li>
										<li>
											<p><strong>Time tracking.</strong> Log billable and non-billable hours. Track CapEx and OpEx. Generate suggested time entries with AI. </p>
										</li>
										<li>
											<p><strong>Reporting.</strong> Monitor costs, revenue, billing, budgets etc. Generate audit-ready reports. Optimize resources. Stay compliant.</p>
										</li>
									</ul>
									<div class="spz__hero-section__content__email-cta">
										<form class="spz__email-cta__form">
											<div class="spz__input-wrap">
												<input class="spz_hero_email" id="spz_hero_email_field" type="email" placeholder="Email" name="email" autocomplete="false">
												<label class="spz__input-label" for="email">Email</label>
											</div>
											<button class="main_cta spz6009_v" id="spz_hero_email_submit" type="submit">
												Get Started Free
												<div class="arrow"></div>
											</button>
										</form>
									</div>
									<div class="md:col-span-2 spz_detail">
										<details class="group mb-4">
											<summary class="flex cursor-pointer items-center text-sm underline">Disclaimer
												<span class="ml-2">
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
														<path d="M14.1827 8.06655L15 8.88459L10.5459 13.3403C10.4745 13.4121 10.3896 13.4691 10.2962 13.508C10.2027 13.5469 10.1024 13.5669 10.0012 13.5669C9.8999 13.5669 9.79965 13.5469 9.70616 13.508C9.61268 13.4691 9.52781 13.4121 9.45644 13.3403L5 8.88459L5.81727 8.06732L10 12.2493L14.1827 8.06655Z" fill="#1D1D1B"></path>
													</svg>
												</span>
											</summary>
											<div id="186896615" class="[&amp;_a]:underline [&amp;_a]:hover:no-underline">
												<p style="padding-bottom:20px;">
													<span style="font-size: 12px;">
														Tempo needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our 
														<span style="font-size: 12px;">
															<a href="https://www.tempo.io/privacy-policy" rel="nofollow" style="color:#9664fe;" target="_blank">Privacy Notice</a>.
														</span>
													</span>
												</p>
											</div>
										</details>
									</div>
								</div>
								<div class="spz_heroRight">
									<picture>
										<source media="(max-width: 1399PX)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/5002/768_ui_4.webp" type="image/webp">
										<source media="(max-width: 1023PX)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/5002/768_ui_4.webp" type="image/webp">
										<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/5002/360_ui_4.webp" type="image/webp">
										<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/5002/1440_ui_5.webp" title="project collections" alt="project collections">
									</picture>
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
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263837/tempo/5002/logo_airbnb_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263839/tempo/5002/logo_airbnb_3.svg" alt="airbnb logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263838/tempo/5002/logo_airbus_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263840/tempo/5002/logo_airbus_3.svg" alt="airbus logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263838/tempo/5002/logo_netflix_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263840/tempo/5002/logo_netflix_3.svg" alt="netflix logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263837/tempo/5002/logo_cisco_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263839/tempo/5002/logo_cisco_3.svg" alt="cisco logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263837/tempo/5002/logo_slack_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263839/tempo/5002/logo_slack_3.svg" alt="slack logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263838/tempo/5002/logo_oracle_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263840/tempo/5002/logo_oracle_3.svg" alt="oracle logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263837/tempo/5002/logo_airbnb_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263839/tempo/5002/logo_airbnb_3.svg" alt="airbnb logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263838/tempo/5002/logo_airbus_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263840/tempo/5002/logo_airbus_3.svg" alt="airbus logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263838/tempo/5002/logo_netflix_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263840/tempo/5002/logo_netflix_3.svg" alt="netflix logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263837/tempo/5002/logo_cisco_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263839/tempo/5002/logo_cisco_3.svg" alt="cisco logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263837/tempo/5002/logo_slack_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263839/tempo/5002/logo_slack_3.svg" alt="slack logo">
													</picture>
												</div>
											</div>
											<div class="box-content shrink-0 pr-8 md:pr-20" aria-hidden="false">
												<div class="spz_logoMain">
													<picture>
														<source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263838/tempo/5002/logo_oracle_2.svg" type="image/webp">
														<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779263840/tempo/5002/logo_oracle_3.svg" alt="oracle logo">
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
		document.body.insertAdjacentHTML('beforeend', `
			<div class="popup-wrapper"> 
				<div class="spz-form-wrap">
					<div class="form-section">
						<div class="close-button">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
								<g opacity="0.3">
									<path d="M8.53341 25.3332L6.66675 23.4665L14.1334 15.9998L6.66675 8.53317L8.53341 6.6665L16.0001 14.1332L23.4667 6.6665L25.3334 8.53317L17.8667 15.9998L25.3334 23.4665L23.4667 25.3332L16.0001 17.8665L8.53341 25.3332Z" fill="#1D1D1B"></path>
								</g>
							</svg>			
						</div>
						<div class="spz_form"></div>
					</div>
				</div>
			</div>
		`);
		function smoothScrollAndWait(targetY, callback) {
			// If already at target position, execute immediately
			if (window.scrollY === targetY) {
				callback();
				return;
			}
			let scrollTimeout;
			const scrollHandler = () => {
				clearTimeout(scrollTimeout);
				scrollTimeout = setTimeout(() => {
					window.removeEventListener('scroll', scrollHandler);
					callback();
				}, 50);
			};
			window.addEventListener('scroll', scrollHandler);
			window.scrollTo({ top: targetY, behavior: 'smooth' });
		}
		document.querySelectorAll('.spz__email-cta__form').forEach(form => {
			form.addEventListener('submit', function (e) {
				e.preventDefault();
				this.querySelector('input[name="email"]').blur();
				smoothScrollAndWait(0, () => {
					document.querySelector('.popup-wrapper').classList.add('show');
					document.querySelector('html').classList.add('scroll-hidden');
					const email = form.querySelector('input[name="email"]').value;
					if (email) {
						var emailField = document.querySelector('.popup-wrapper form input[name="company_email"]');
						emailField.value = email;
						emailField.focus();
						emailField.blur();
						var flexCol = emailField.closest('.flex-col');
						if (flexCol) flexCol.classList.add('filled');
					}
				});
			});
		});
		document.querySelector('.spz_5002_v .popup-wrapper .close-button').addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector('.spz_5002_v .popup-wrapper').classList.remove('show');
			document.querySelector('html').classList.remove('scroll-hidden', 'scroll-hidden-2');
		});
		document.querySelectorAll('a[href^="https://www.tempo.io/collections/project"]').forEach(function (link) {
			link.href = 'javascript:void(0);';
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const formSection = document.querySelector('.spz_hero');
				if (formSection) {
					document.querySelector('.popup-wrapper').classList.add('show');
					document.querySelector('html').classList.add('scroll-hidden-2');
				}
			});
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
		const BASE = 'body.spz_5002_v #form-collection-save';
		const aside = $(BASE);
		if (!aside) return; // Exit early if base element doesn't exist
		// const rightInner = $('.spz_form', aside);
		// if (!rightInner) return;
		// ── 3. Move form div after logo ───────────────────────────────────
		const formDiv = $(`${BASE}`);
		if (formDiv && !document.querySelector('.spz_form #form-collection-save')) {
			$('.spz_form').insertAdjacentElement('afterbegin', formDiv);
		}
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
		// document.querySelector('.spz__hero-section__content__email-cta').insertAdjacentElement('afterend', document.querySelector('.spz_form div:has(> details)'));
		document.querySelectorAll('.spz__hero-section__content__email-cta form .spz__input-wrap input').forEach(function (input) {
			function toggleClass() {
				input.classList.toggle('has-value', input.value.trim() !== '');
			}
			input.addEventListener('input', toggleClass);
			input.addEventListener('blur', toggleClass);
			toggleClass();
		});
		if (document.querySelector('.spz_form details summary span')) {
			document.querySelector('.spz_form details summary span').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M14.1827 8.06655L15 8.88459L10.5459 13.3403C10.4745 13.4121 10.3896 13.4691 10.2962 13.508C10.2027 13.5469 10.1024 13.5669 10.0012 13.5669C9.8999 13.5669 9.79965 13.5469 9.70616 13.508C9.61268 13.4691 9.52781 13.4121 9.45644 13.3403L5 8.88459L5.81727 8.06732L10 12.2493L14.1827 8.06655Z" fill="#1D1D1B"></path>
				</svg>`;
		}
		// ── 11. Disclaimer ────────────────────────────────────────────────
		// const submitBtnUpdated = $('.spz_main_wrapper aside#formsignup .spz_5002_v_submit_btn');
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
	function init5001() {
		document.body.classList.add('spz_5002_v');
		// document.querySelector('body.spz_5002_v main section > div').classList.add('spz_main_wrapper');
		if (!document.querySelector('.spz_hero')) {
			spzHero();
			spz5001MarqueeObserveShell();
			spz5001MarqueeBind();
			window.addEventListener('load', spz5001MarqueeBind);
			waitForElement("#form-collection-save form", () => {
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
				const expName = '5002'; //experiment name should be 1001, 1002, 1003 etc.
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
			document.body.classList.remove('spz_5002_v');
			if (document.querySelector('.popup-wrapper')) {
				document.querySelector('.popup-wrapper').remove();
			}
			if (document.querySelector('.spz_hero')) {
				document.querySelector('.spz_hero').remove();
			}
			const utmContentField = document.querySelector('input[name="utm_content"]');
			if (utmContentField) {
				utmContentField.value = utmContentField.value
					.replace('spz_5002_variant', '')
					.replace(/,{2,}/g, ',')
					.replace(/^,|,$/g, '')
					.trim();
			}
		}
		waitForProjectPage();
	});
	waitForProjectPage();
})();