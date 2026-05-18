var SPLIDE_CDN_BASE = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/';
var SPLIDE_CSS_URL = SPLIDE_CDN_BASE + 'css/splide.min.css';
var SPLIDE_JS_URL = SPLIDE_CDN_BASE + 'js/splide.min.js';
var SPLIDE_AUTOSCROLL_JS_URL = 'https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js';

function ensureSplideCss(onCssReady) {
	var existing = document.querySelector('link[data-spz-splide-css]');
	if (existing) {
		if (onCssReady) onCssReady();
		return;
	}
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = SPLIDE_CSS_URL;
	link.setAttribute('data-spz-splide-css', '1');
	link.onload = function () {
		if (onCssReady) onCssReady();
	};
	link.onerror = function () {
		if (onCssReady) onCssReady();
	};
	document.head.appendChild(link);
}

function ensureSplideCoreJs(onReady) {
	if (typeof Splide !== 'undefined') {
		if (onReady) onReady();
		return;
	}
	var existing = document.querySelector('script[data-spz-splide-core-js]');
	if (existing) {
		function done() {
			if (onReady) onReady();
		}
		if (typeof Splide !== 'undefined') done();
		else existing.addEventListener('load', done);
		return;
	}
	var el = document.createElement('script');
	el.src = SPLIDE_JS_URL;
	el.setAttribute('data-spz-splide-core-js', '1');
	el.onload = function () {
		if (onReady) onReady();
	};
	document.body.appendChild(el);
}

function ensureSplideAutoScroll(onReady) {
	if (window.splide && window.splide.Extensions && window.splide.Extensions.AutoScroll) {
		if (onReady) onReady();
		return;
	}
	var existing = document.querySelector('script[data-spz-splide-autoscroll-js]');
	if (existing) {
		function done() {
			if (onReady) onReady();
		}
		if (window.splide && window.splide.Extensions && window.splide.Extensions.AutoScroll) done();
		else existing.addEventListener('load', done);
		return;
	}
	var el = document.createElement('script');
	el.src = SPLIDE_AUTOSCROLL_JS_URL;
	el.setAttribute('data-spz-splide-autoscroll-js', '1');
	el.onload = function () {
		if (onReady) onReady();
	};
	document.body.appendChild(el);
}

/**
 * Splide AutoScroll moves a fixed number of pixels per requestAnimationFrame tick.
 * On 90–120 Hz displays (often more noticeable in Firefox), that reads as much faster
 * than on 60 Hz. Sample rAF for a short window and scale speed vs a 60fps reference.
 */
function estimateRafRateForAutoScroll(callback) {
	var frames = 0;
	var start = 0;
	function tick(now) {
		if (!start) start = now;
		frames++;
		if (now - start < 480) {
			requestAnimationFrame(tick);
		} else {
			var elapsedSec = (now - start) / 1000;
			var fps = elapsedSec > 0 ? Math.round(frames / elapsedSec) : 60;
			callback(fps);
		}
	}
	requestAnimationFrame(tick);
}

function setupSplide() {
	ensureSplideCss(function () {
		ensureSplideCoreJs(function () {
			ensureSplideAutoScroll(function () {
				estimateRafRateForAutoScroll(function (measuredFps) {
					var refFps = 60;
					var clampedFps = Math.min(Math.max(measuredFps, 48), 125);
					var scale = refFps / clampedFps;
					var slider = new Splide('.spz_6009_v .spz__client_logos__slider.splide', {
						type: 'loop',
						autoWidth: true,
						gap: '72px',
						pagination: false,
						arrows: false,
						drag: false,
						speed: 8000,
						easing: 'linear',
						autoPlay: false,
						autoScroll: {
							speed: 1.2 * scale,
							pauseOnHover: false,
							pauseOnFocus: false,
						},
						breakpoints: {
							1200: {
								gap: '72px',
								autoScroll: {
									speed: 0.6 * scale,
								},
							},
							767: {
								gap: '32px',
								autoScroll: {
									speed: 0.6 * scale,
								},
							}
						}
					});
					slider.mount(window.splide && window.splide.Extensions ? window.splide.Extensions : undefined);
				});
			});
		});
	});
}

function modifyControl() {
	const heroSection = document.querySelector('.spz_6009_v section#formjumplink');
	if (heroSection) {
		heroSection.classList.add('spz__hidden');
		if (heroSection.nextElementSibling) {
			heroSection.nextElementSibling.classList.add('spz__hidden');
		}
	}

	const testimonialsSection = document.querySelector('.spz_6009_v section.testimonial-div div._3-column-testimonial');
	if (testimonialsSection) {
		Array.from(testimonialsSection.children).forEach(child => {
			const clientInfoSection = child.querySelector('.uui-testimonial13_client');
			if (clientInfoSection) {
				clientInfoSection.insertAdjacentHTML('afterbegin', `
									<img src="https://res.cloudinary.com/spiralyze/image/upload/v1759741791/bill/4010/icon-quote.svg" alt="Quote" />
							`);
			}
		});
	}

	const controlFooter = document.querySelector('.spz_6009_v > .footer-minimal');
	if (controlFooter) {
		controlFooter.previousElementSibling.previousElementSibling.classList.add('spz__hidden');
		controlFooter.previousElementSibling.classList.add('spz__hidden');
		const observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				!controlFooter.previousElementSibling.classList.contains('spz__hidden') && controlFooter.previousElementSibling.classList.add('spz__hidden');
			});
		});
		observer.observe(controlFooter.previousElementSibling, { childList: false, subtree: false, attributes: true });

		const footerDisclaimer = controlFooter.querySelector('.footer_content .footer-bottom-wrapper .fs-footer-legal .text-disclaimer-2.text-aligned-left');
		if (footerDisclaimer) {
			footerDisclaimer.innerHTML = footerDisclaimer.innerHTML.replace(/&nbsp;/g, ' ');
			footerDisclaimer.innerHTML = footerDisclaimer.innerHTML.replace(/<br>/g, '<br><br class="hide-desktop">');
		}
	}
}

function injectHtml() {
	const mountPoint = document.body;
	const sliderData = [
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-blackstone.svg', alt: 'Blackstone' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-kiwico.svg', alt: 'Kiwico' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-wag.svg', alt: 'Wag' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-qualtrics.svg', alt: 'Qualtrics' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-bakertily.svg', alt: 'Bakertilly' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-bearrobotics.svg', alt: 'Bearrobotics' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-noom.svg', alt: 'Noom' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-utah_jass.svg', alt: 'Utah Jazz' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-bare_bones.svg', alt: 'Bare Bones' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-chatbooks.svg', alt: 'Chatbooks' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-cuts.svg', alt: 'Cuts' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-marine_layer.svg', alt: 'Marine Layer' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-quicken.svg', alt: 'Quicken' },
		{ src: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/logo-cla.svg', alt: 'CLA' },
	];
	mountPoint.children[0].insertAdjacentHTML('afterend', `
		<section class="spz_heroSection">
			<div class="spz_header">
				<div class="container-largeold">
					<div class="spz_headerInner">
						<div class="header_left">
							<div class="logo">
								<a href="https://www.bill.com/">
									<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/primary_logo.svg" alt="Bill logo">
								</a>
							</div>
							<div class="spz_reviews">
								<i><img src="//res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/g2_logo.svg" alt="G2 logo"></i>
								<small>
									<strong>
										<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/rating--4-5.svg" alt="review stars">
										<b>4.5</b>
									</strong>
									<span>3900+ Reviews</span>
								</small>
							</div>
						</div>
						<div class="header_right">
							<a href="#formjumplink" class="spz_btn spz_btn_primary spz6009_v nav_cta">Get Started</a>
						</div>
					</div>
				</div>
			</div>
			<div class="spz__hero-section">
					<div class="container-largeold">
							<div class="spz__hero-section__wrapper">
									<div class="spz__hero-section__content">
											<div class="spz__hero-section__content__title">
													<h3>BILL Divvy Card</h3>
													<h1>Get business credit and corporate cards.  <span>Approval in minutes.</span></h1>
													<p>Apply online with no effect on your credit rating. <br> Get approved for $1K - 5M<sup>1</sup>. Up to 3.64% cash back or 7x rewards, No fees.</p>
											</div>
											<div class="spz__hero-section__content__email-cta">
													<form class="spz__email-cta__form">
															<div class="spz__input-wrap">
																	<input type="text" placeholder="Work email" name="email" autocomplete="false">
																	<label class="spz__input-label" for="email">Work email</label>
															</div>
															<button class="main_cta spz6009_v" type="submit">Get Started</button>
													</form>
											</div>
											<div class="spz__hero-section__content__disclaimer">
													<p>By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank">Terms of Service</a> and acknowledge our <a href="/privacy" target="_blank">Privacy Notice</a>.</p>
													<p>The BILL Divvy Card may be issued by one of Divvy Pay, LLC's <a href="https://www.bill.com/legal/bank-partners">bank partners</a>. The BILL Divvy Card is not a deposit product. For your specific lender, see your Card Agreement. This is not a deposit product.</p>
													<p><sup>1</sup> Credit lines and the advertised range are not guaranteed and will be determined upon application approval.</p>
											</div>
									</div>
									<div class="spz__hero-section__images">
											<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6009/ui-image.webp" loading="eager" alt="BILL Divvy Card" class="homehero_img">
									</div>
							</div>
					</div>
			</div>
			<div class="spz__client_logos__section">
					<div class="container-largeold">
							<div class="spz__client_logos__wrapper">
									<h2 class="spz__client_logos__title">Trusted by 100,000+ businesses</h2>
									<div class="spz__client_logos__slider splide">
											<div class="spz__client_logos__slider__track splide__track">
													<div class="spz__client_logos__slider__list splide__list">
															${sliderData.map(data => `
																	<div class="spz__client_logos__slider__slide splide__slide">
																			<img src="${data.src}" alt="${data.alt}">
																	</div>
															`).join('')}
													</div>
											</div>
									</div>
							</div>
					</div>
			</div>
		</section>
		<section class="spz-feature-cards">
			<div class="container-large">
					<h2>Features</h2>
					<div class="slider-arrows">
						<div class="spz-feature-splide-prev" role="button" tabindex="0" aria-label="Previous features"></div>
						<div class="spz-feature-splide-next" role="button" tabindex="0" aria-label="Next features"></div>
					</div>
			</div>
			<div id="spz-2022-features-slider-mount" class="spz-features-slider-mount" aria-busy="true" style="min-height:420px"></div>
			<div class="mobileSlideBtn"><a href="javascript:void(0)" class="show_moreSlides">Show more</a></div>
			<div class="new_footnotes">
				<ul>
					<li>
						<sup>1</sup> Credit lines and the advertised range are not guaranteed and will be determined upon application approval.
					</li>
					<li>
						The BILL Divvy Card may be issued by one of Divvy Pay, LLC's bank partners. The BILL Divvy Card is not a deposit product. For your specific lender, see your Card Agreement. This is not a deposit product.
					</li>
				</ul>
			</div>
			<div class="spz_ctaOuter">
				<a href="#formjumplink" class="spz_btn spz_btn_primary spz6009_v">Get Started</a>
			</div>
		</section>
		<section class="spz_billCards">
			<div class="container-largeold">
				<div class="spz_billCardInner">
					<div class="bill_cardHeading">
						<h2>BILL Divvy Corporate Card vs. other corporate cards</h2>
					</div>
					<div class="bill_cardTable">
						<div class="table_row">
							<div class="table_cell table_head"></div>
							<div class="table_cell table_head">
								<span><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/primary_logo.svg" alt="Bill logo"></span>
							</div>
							<div class="table_cell table_head"><strong>Others</strong></div>
						</div>
						<div class="table_row">
							<div class="table_cell table_data">Annual fees</div>
							<div class="table_cell table_data">None</div>
							<div class="table_cell table_data">Annual & monthly fees</div>
						</div>
						<div class="table_row">
							<div class="table_cell table_data">Flexible rewards<sup>†</sup></div>
							<div class="table_cell table_data"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/icon-check.svg" alt="Check icon"></div>
							<div class="table_cell table_data">Set rewards</div>
						</div>
						<div class="table_row">
							<div class="table_cell table_data">Built-in expense management</div>
							<div class="table_cell table_data"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/icon-check.svg" alt="Check icon"></div>
							<div class="table_cell table_data">Requires third-party tools</div>
						</div>
						<div class="table_row">
							<div class="table_cell table_data">Virtual cards</div>
							<div class="table_cell table_data"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/icon-check.svg" alt="Check icon"></div>
							<div class="table_cell table_data"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/icon-check.svg" alt="Check icon"></div>
						</div>
						<div class="table_row">
							<div class="table_cell table_data">Full admin control </div>
							<div class="table_cell table_data"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/icon-check.svg" alt="Check icon"></div>
							<div class="table_cell table_data">No admin control</div>
						</div>
						<div class="table_row">
							<div class="table_cell table_data">Unlimited cards</div>
							<div class="table_cell table_data"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/icon-check.svg" alt="Check icon"></div>
							<div class="table_cell table_data">Set number of cards</div>
						</div>
						<div class="table_row">
							<div class="table_cell table_data">Budget & spend controls</div>
							<div class="table_cell table_data"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/icon-check.svg" alt="Check icon"></div>
							<div class="table_cell table_data">No built-in spend controls</div>
						</div>
						<div class="table_row">
							<div class="table_cell table_data"></div>
							<div class="table_cell table_data"></div>
							<div class="table_cell table_data"></div>
						</div>
					</div>
					<div class="table_bottom">
						<p>The BILL Divvy Card may be issued by one of Divvy Pay, LLC’s bank partners. The BILL Divvy Card is not a deposit product. For your specific lender, see your Card Agreement.</p>
						<p><sup>† </sup> Terms Apply. For more information on the rewards program, <a href="https://www.bill.com/product/rewards">check out our rewards page</a>  →</p>
					</div>
					<div class="spz_ctaOuter">
						<a href="#formjumplink" class="spz_btn spz_btn_primary spz6009_v">Get Started</a>
					</div>
				</div>
			</div>
		</section>
		<section class="spz_testimonial">
			<div class="container-largeold">
				<div class="spz_testimonialInner">
					<div class="spz_testimonialData">
						<h2>$400K<span>earned <br> in rewards</span></h2>
						<p>“We’re able to recycle our rewards directly back into creative marketing and outside agencies. Plus we get visibility into spend without combing through receipts.”</p>
						<h4>Dylan Jacob, Founder and CEO</h4>
						<h4>BrüMate</h4>
						<a href="https://www.bill.com/case-study/brumate" class="spz_btn spz_btn_primary spz6009_v">Read Story</a>
						<strong>
							<img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1776771844/bill/6009/brumate-logo.svg" alt="BrüMate logo">
						</strong>
					</div>
				</div>
			</div>
		</section>
	`);
}

function injectGetStarted() {
	const controlFooter = document.querySelector('.spz_6009_v > .footer-minimal');
	if (controlFooter) {
		controlFooter.previousElementSibling.insertAdjacentHTML('beforebegin', `
					<div class="spz__get-started_section">
							<div class="container-largeold">
									<div class="spz__get-started_section__wrapper">
											<h2>Get the funding you need in minutes</h2>
											<div class="spz__hero-section__content__email-cta">
													<form class="spz__email-cta__form">
															<div class="spz__input-wrap">
																	<input type="text" placeholder="Work Email" name="email" autocomplete="false">
																	<label class="spz__input-label" for="email">Work Email</label>
															</div>
															<button class="spz6009_v" type="submit">Get Started</button>
													</form>
											</div>
											<div class="spz__hero-section__content__disclaimer">
												<p>By continuing, you agree to BILL's <a href="/legal/terms-of-service" target="_blank">Terms of Service</a> and acknowledge our <a href="/privacy" target="_blank">Privacy Notice</a>.</p>
											</div>
									</div>
							</div>
					</div>
					<footer class="footer_black">
							<div class="wrapper">
									<div class="left">
											<div class="first">
													<strong>AP &amp; AR:</strong>
													<a href="/legal/terms-of-service">Terms of Service</a>
													<a href="/privacy">Privacy Notice</a>
											</div>
											<div class="second">
													<strong>Spend &amp; Expense:</strong>
													<a href="/legal/spend-expense-terms-of-service">Terms of Service</a>
													<a href="/privacy">Privacy Notice</a>
											</div>
									</div>
									<div class="right">
											<a href="/legal">Legal</a>
											<a href="/legal/authorizations">Licenses and Authorizations</a>
											<a href="/acceptable-use-policy">Acceptable Use Policy</a>
											<a href="/legal/website-terms-of-use">Website Terms of Use</a>
											<a href="/legal/network-rules">BILL Network Rules</a>
											<a href="/legal/accessibility-statement">Accessibility Statement</a>
											<a href="/privacy/do-not-sell-my-personal-information">Do Not Sell My Personal Information</a>
									</div>
							</div>
					</footer>
			`);
	}

}

function injectForm() {
	//DEVELOPER - STEP 2 of 5 - This adds content inside the box.
	const formElements = {
		customHTMLBefore: `
			${ /*This html goes is inserted before the form */''}
				<div class="close-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<g opacity="0.5">
							<path d="M10.0001 11.0606L4.03039 17.0303L2.96973 15.9696L8.9394 9.99993L2.96974 4.03026L4.0304 2.9696L10.0001 8.93927L15.9697 2.9696L17.0304 4.03026L11.0607 9.99993L17.0304 15.9696L15.9697 17.0303L10.0001 11.0606Z" fill="#584F4B"/>
						</g>
					</svg>				
				</div>
			`,
		customHTMLAfter: ``,
	};

	//DEVELOPER - STEP 3 of 5 - This adds the form. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
	const formUniqueSelector = ".form-signup" //<--- form uqniue selector goes here. e.g.

	//form code
	const formLoaded = setInterval(() => {
		if (document.querySelector(formUniqueSelector) && document.querySelectorAll(`${formUniqueSelector} input`).length > 0) {
			clearInterval(formLoaded);
			addForm(formElements, formUniqueSelector);
			setupModal();
			const updatedFormInterval = setInterval(() => {
				if (document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form')) {
					clearInterval(updatedFormInterval);
					if(document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form .header-stack-form h2')){
						document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form .header-stack-form h2').innerHTML = 'Sign up for free';
					}

					//adding wrapper
					for (let i = 0; i < document.querySelectorAll('.spz_6009_v .popup-wrapper .spz-form-wrap form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v .popup-wrapper .spz-form-wrap form select').length; i++) {
						let target = document.querySelectorAll('.spz_6009_v .popup-wrapper .spz-form-wrap form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v .popup-wrapper .spz-form-wrap form select')[i];
						let wrapper = document.createElement('div');
						wrapper.classList.add('spz-input-wrapper', document.querySelectorAll('.spz_6009_v .popup-wrapper .spz-form-wrap form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v .popup-wrapper .spz-form-wrap form select')[i].getAttribute("id"));
						target.parentNode.insertBefore(wrapper, target);
						wrapper.appendChild(target);
					}
					//adding label & error
					for (let i = 0; i < document.querySelectorAll('.spz_6009_v form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v form select').length; i++) {
						let label = document.querySelectorAll('.spz_6009_v form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v form select')[i].getAttribute("placeholder") == "Number Of Employees" ? "Number of Employees" : document.querySelectorAll('.spz_6009_v form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v form select')[i].getAttribute("placeholder")
						if (!label && document.querySelectorAll('.spz_6009_v form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v form select')[i].querySelector('option')) {
							label = document.querySelectorAll('.spz_6009_v form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v form select')[i].querySelector('option').textContent;
						}
						document.querySelectorAll('.spz_6009_v form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v form select')[i].insertAdjacentHTML("afterend", `
													<label for="${document.querySelectorAll('.spz_6009_v form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]),.spz_6009_v form select')[i].getAttribute("id")}">${label}</label> 
											`)
					}
					//select arrow
					for (let x = 0; x < document.querySelectorAll('.spz_6009_v .popup-wrapper .spz-form-wrap form select').length; x++) {
						document.querySelectorAll('.spz_6009_v .popup-wrapper .spz-form-wrap form select')[x].parentNode.insertAdjacentHTML("beforeend", `
													<div class="arrow"></div>  
											`);
					}

					//input even listerer
					const allInput = document.querySelectorAll('.spz_6009_v .popup-wrapper .spz-form-wrap form input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]), .spz_6009_v .popup-wrapper .spz-form-wrap form select');
					function labelChange(e) {
						if (e.value == '' || e.value == null) {
							e.closest(".spz-input-wrapper").classList.remove("hasValue");
						} else if (e.value != '' || e.value != null) {
							e.closest(".spz-input-wrapper").classList.add("hasValue");
						}
					}
					allInput.forEach(function (e) {
						e.addEventListener('blur', () => {
							labelChange(e);
						}, true);
						e.addEventListener('change', () => {
							labelChange(e);
						}, true);
						labelChange(e);
					})
					 
					 if(document.querySelector('#se-form-button')) {
						document.querySelector('#se-form-button').value = 'Start Application';
					 }

					// rearrange input fields
					document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form .spz-input-wrapper.firstName').insertAdjacentElement('afterend', document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form .spz-input-wrapper.lastName'));
					// document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form .spz-input-wrapper.name').insertAdjacentElement('beforebegin', document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form .spz-input-wrapper.email'));
					document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form .spz-input-wrapper.phone').insertAdjacentElement('beforebegin', document.querySelector('.spz_6009_v .popup-wrapper .spz-form-wrap form .spz-input-wrapper.name'));
					document.querySelectorAll('.spz_6009_v .popup-wrapper .spz-form-wrap form .form-field-columns').forEach(column => {
						if (column.children.length === 0) {
							column.remove();
						}
					});

					document.getElementById('numberOfEmployees').addEventListener('input', function (e) {
						// Replace any non-digit character with an empty string
						this.value = this.value.replace(/\D/g, '');
					});

					const form = document.querySelector('.spz_6009_v .spz-form-wrap .the-form form');
					if (form) {
						const observer = new MutationObserver(function (mutations) {
							mutations.forEach(function (mutation) {
								const brModal = form.parentElement.querySelector('#br-invite-dialog')
								const acModal = form.parentElement.querySelector('#ac-flag-dialog')
								if (brModal) {
									form.closest('.spz-form-wrap').insertAdjacentElement('afterend', brModal);
									observer.disconnect();
								}
								if (acModal) {
									form.closest('.spz-form-wrap').insertAdjacentElement('afterend', acModal);
									observer.disconnect();
								}
							});
						});

						observer.observe(form.parentElement, { childList: true, subtree: true });
					}

					function accountingSoftwareLabel() {
						const accountingSoftware = document.querySelector('.spz_6009_v .spz-form-wrap #accountingSoftwareContainer #accountingSoftware');
						if (accountingSoftware) {
							if (window.innerWidth < 768) accountingSoftware.closest('.spz-input-wrapper').querySelector('label').textContent = 'Your accounting software?';
							else accountingSoftware.closest('.spz-input-wrapper').querySelector('label').textContent = 'Which accounting software do you use?';
						}
					}

					accountingSoftwareLabel();
					window.addEventListener('resize', accountingSoftwareLabel);
				}
			}, 10);

		}
	});

	/***********************************
	************************************
	DO NOT TOUCH
	BEYOND THIS LINE
	******************************
	************************/


	// This is the code to generate the form over UI section do no edit it
	function addForm(formData, formSelector) {
		const formTemplate = `
					<div class="popup-wrapper"> 
						<div class="spz-form-wrap">
							<div class="form-section">
								${formData.customHTMLBefore.replace(/\s/g, "").length !== 0
				? formData.customHTMLBefore
				: ""
			}
								</div>
								<div class="the-form"></div>
								${formData.customHTMLAfter.replace(/\s/g, "").length !== 0
				? formData.customHTMLAfter
				: ""
			}
							</div>
						</div>
					</div>
						`;
		document.body.insertAdjacentHTML(
			"beforeend",
			formTemplate
		); /*Insert spz-form-wrap before closing body tag*/
		if (!document.querySelector(formSelector)) {
			document
				.querySelector(".spz-form-wrap .the-form")
				.insertAdjacentHTML(
					"beforeend",
					"<div style='color:red;'>Add proper form selector in code to load form</div>"
				);
		} else {
			const formLoaded = setInterval(() => {
				if (
					document.querySelector(formSelector) &&
					document.querySelectorAll(`${formSelector} input`).length > 0
				) {
					clearInterval(formLoaded);
					document
						.querySelector(".spz-form-wrap .the-form")
						.appendChild(
							document.querySelector(formSelector)
						);

					/*Apply form to spz form wrapper*/
				}
			});
		}

	}
}

function setupModal() {
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

	function trigger(el, eventType) {
		if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
			el[eventType]();
		} else {
			const event =
				typeof eventType === 'string'
					? new Event(eventType, { bubbles: true })
					: eventType;
			el.dispatchEvent(event);
		}
	}
	document.querySelectorAll('.spz_6009_v .spz__email-cta__form').forEach(form => {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			const email = form.querySelector('input[name="email"]').value;
			if (email) {
				document.querySelector('.spz_6009_v .popup-wrapper form input[name="email"]').value = email;
				trigger(document.querySelector('.spz_6009_v .popup-wrapper form input[name="email"]'), 'change')
			}
			this.querySelector('input[name="email"]').blur();
			smoothScrollAndWait(0, () => {
				document.querySelector('.popup-wrapper').classList.add('show');
				document.querySelector('html').classList.add('scroll-hidden');
			});
		});
	});

	document.querySelectorAll('.spz_6009_v a[href="#formjumplink"]').forEach(anchor => {
		anchor.href = 'javascript:;';
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScrollAndWait(0, () => {
				document.querySelector('.spz_6009_v .popup-wrapper').classList.add('show');
				document.querySelector('html').classList.add('scroll-hidden');
			});
		});
	});

	document.querySelector('.spz_6009_v .popup-wrapper .close-button').addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector('.spz_6009_v .popup-wrapper').classList.remove('show');
		document.querySelector('html').classList.remove('scroll-hidden');
	});
	window.addEventListener('click', function (e) {
		if (e.target.classList.contains('show_moreSlides')) {
			document.querySelector('.spz-features-slider-mount').classList.add('show_more');
		}
	});
}

function setUniformHeights(selector) {
	const elements = document.querySelectorAll(selector);
	if (!elements.length) return;

	let maxHeight = 0;

	// Reset heights before recalculating
	elements.forEach(el => {
		el.style.height = 'auto';
	});

	// Find max height
	elements.forEach(el => {
		const elHeight = el.offsetHeight;
		if (elHeight > maxHeight) maxHeight = elHeight;
	});

	// Apply max height to all
	elements.forEach(el => {
		el.style.height = `${maxHeight}px`;
	});
}

function applyCardTextHeights() {
	requestAnimationFrame(() => {
		// setTimeout(() => {
		// 	setUniformHeights('.features-card-slider .splide__list .card-text h4');
		// 	setUniformHeights('.features-card-slider .splide__list .card-text p');
		// }, 10);
	});
}

function applyUniformCardHeights() {
	requestAnimationFrame(() => {
		// setTimeout(() => {
		// 	setUniformHeights('.features-card-slider .splide__list .feature-card');
		// }, 10);
	});
}

// Wait until elements are present
const sliderInterval = setInterval(() => {
	const cards = document.querySelectorAll('.features-card-slider .splide__list .card-text p');
	if (cards.length === 6) {
		clearInterval(sliderInterval);
		setTimeout(applyCardTextHeights, 300);
		setTimeout(applyUniformCardHeights, 350);
	}
}, 50);

// Also run once on full page load (fallback)
window.addEventListener('load', function () {
	const cards = document.querySelectorAll('.features-card-slider .splide__list .card-text p');
	if (cards.length === 6) {
		clearInterval(sliderInterval);
		setTimeout(applyCardTextHeights, 300);
		setTimeout(applyUniformCardHeights, 350);
	}
});


(function alignFeatureSectionPadding() {
	var sliderContainer = document.querySelector('.spz-feature-cards .container-large');
	var footnotes = document.querySelector('.spz-feature-cards .new_footnotes');
	if (sliderContainer && footnotes) {
		footnotes.style.paddingLeft = sliderContainer.getBoundingClientRect().left + 'px';
	}
})();
var FEATURES_SPLIDE_HTML = `<div class="features-card-slider splide" id="spz-2022-features-splide" aria-label="Features carousel">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="feature-card">
          <div class="feature-card-image">
            <img
              src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6009/image-business_credit.webp"
              alt="Business credit" loading="lazy">
          </div>
          <div class="card-text">
            <h4>Business credit</h4>
            <p>Get approved for $1K - 5M<sup>1</sup>. Apply in minutes. No effect on your credit. Access funds fast. Boost company credit score.</p>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="feature-card">
          <div class="feature-card-image">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6009/image-company_cards.webp"
              alt="Company cards" loading="lazy">
          </div>
          <div class="card-text">
            <h4>Company cards</h4>
            <p>Get unlimited physical and virtual cards. Single- and multi-use. 7x rewards, cash back, and no annual fees.</p>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="feature-card">
          <div class="feature-card-image">
            <img
              src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6009/image-expense_tracking.webp"
              alt="Expense tracking" loading="lazy">
          </div>
          <div class="card-text">
            <h4>Expense tracking</h4>
            <p>Track all card transactions in one place. Manage reimbursements. Assign unique cards for each vendor. </p>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="feature-card">
          <div class="feature-card-image">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6009/image-spend_controls.webp"
              alt="Spend controls" loading="lazy">
          </div>
          <div class="card-text">
            <h4>Spend controls</h4>
            <p>Set spend limits for specific cards, individuals, vendors, etc. Get alerts for rogue spend. Advanced fraud protection. </p>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="feature-card">
          <div class="feature-card-image">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/6009/image-accounting_sync.webp"
              alt="2-way accounting sync" loading="lazy">
          </div>
          <div class="card-text">
            <h4>2-way accounting sync</h4>
            <p>Sync all transactions with accounting software. QuickBooks, NetSuite, Xero, and Sage Intacct, etc. Streamline accounting.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>`;

var featureSliderInsetStartPx = 0;
var featureSliderInsetAtMoveStartPx = 0;
var featureSliderInsetComplete = false;
var featureSliderListEl = null;
var featureSliderListZeroTx = 0;
var featureSliderPaddingRaf = null;
var featureSliderLastPaddingPx = null;

function getSplideListTranslateX(list) {
	if (!list) return 0;
	var style = window.getComputedStyle(list).transform;
	if (!style || style === 'none') return 0;
	var m = style.match(/matrix(?:3d)?\(([^)]+)\)/);
	if (!m) return 0;
	var v = m[1].split(',').map(function (s) {
		return parseFloat(s.trim());
	});
	if (v.length === 16) return v[12];
	if (v.length === 6) return v[4];
	return 0;
}

function syncFeatureSliderInsetFromListMotion() {
	if (featureSliderInsetComplete || !featureSliderListEl || !featureSliderInsetAtMoveStartPx) return;
	var tx = getSplideListTranslateX(featureSliderListEl);
	var movedLeft = featureSliderListZeroTx - tx;
	if (movedLeft < 0) movedLeft = 0;
	var nextPx = Math.max(0, featureSliderInsetAtMoveStartPx - movedLeft);
	if (featureSliderLastPaddingPx !== null && nextPx > featureSliderLastPaddingPx + 0.5) return;
	featureSliderLastPaddingPx = nextPx;
	var sliderEl = document.querySelector('.features-card-slider');
	if (!sliderEl) return;
	if (nextPx <= 0.5) {
		sliderEl.style.paddingLeft = '';
		featureSliderInsetComplete = true;
	} else {
		sliderEl.style.paddingLeft = nextPx + 'px';
	}
}

function startFeatureSliderInsetTracking() {
	if (featureSliderInsetComplete || !featureSliderListEl) return;
	featureSliderListZeroTx = getSplideListTranslateX(featureSliderListEl);
	featureSliderInsetAtMoveStartPx =
		featureSliderLastPaddingPx != null ? featureSliderLastPaddingPx : featureSliderInsetStartPx;
	function tick() {
		syncFeatureSliderInsetFromListMotion();
		if (!featureSliderInsetComplete) {
			featureSliderPaddingRaf = requestAnimationFrame(tick);
		} else {
			featureSliderPaddingRaf = null;
		}
	}
	if (featureSliderPaddingRaf) cancelAnimationFrame(featureSliderPaddingRaf);
	featureSliderPaddingRaf = requestAnimationFrame(tick);
}

function stopFeatureSliderInsetTracking() {
	if (featureSliderPaddingRaf) {
		cancelAnimationFrame(featureSliderPaddingRaf);
		featureSliderPaddingRaf = null;
	}
	syncFeatureSliderInsetFromListMotion();
}

function sliderSpace() {
	if (featureSliderInsetComplete) return;
	var sliderContainer = document.querySelector('.spz-feature-cards .container-large');
	var sliderEl = document.querySelector('.features-card-slider');
	var footnotes = document.querySelector('.spz-feature-cards .new_footnotes') || document.querySelector('.new_footnotes');
	if (sliderContainer && sliderEl) {
		var containerOffsetLeft = sliderContainer.getBoundingClientRect().left;
		sliderEl.style.paddingLeft = containerOffsetLeft + 'px';
		featureSliderInsetStartPx = containerOffsetLeft;
		featureSliderLastPaddingPx = containerOffsetLeft;
		if (footnotes) footnotes.style.paddingLeft = containerOffsetLeft + 'px';
	}
}

var featureSplideInitialized = false;
var featureSplideLoading = false;
var featureSplideAutoplayStoppedForSession = false;

window.addEventListener('pageshow', function (e) {
	if (!e.persisted) return;
	featureSplideAutoplayStoppedForSession = false;
	var section = document.querySelector('.spz-feature-cards');
	var s = window.spz2022FeatureSplide;
	if (section && s && s.Components && s.Components.Autoplay) {
		var r = section.getBoundingClientRect();
		var vh = window.innerHeight || document.documentElement.clientHeight;
		if (r.top < vh && r.bottom > 0) {
			s.Components.Autoplay.play();
		} else {
			s.Components.Autoplay.pause();
		}
	} else {
		resumeFeatureSplideAutoplay();
	}
});

function pauseFeatureSplideAutoplay() {
	var s = window.spz2022FeatureSplide;
	if (s && s.Components && s.Components.Autoplay) {
		s.Components.Autoplay.pause();
	}
}

function stopFeatureSplideAutoplayForSession() {
	featureSplideAutoplayStoppedForSession = true;
	pauseFeatureSplideAutoplay();
}

function resumeFeatureSplideAutoplay() {
	if (featureSplideAutoplayStoppedForSession) return;
	var s = window.spz2022FeatureSplide;
	if (s && s.Components && s.Components.Autoplay) {
		s.Components.Autoplay.play();
	}
}

function setupFeatureSplideWhenInView() {
	var mount = document.getElementById('spz-2022-features-slider-mount');
	if (!mount) {
		initFeatureSplide();
		return;
	}
	if (typeof IntersectionObserver === 'undefined') {
		initFeatureSplide();
		return;
	}
	var observer = new IntersectionObserver(
		function (entries) {
			for (var i = 0; i < entries.length; i++) {
				if (entries[i].isIntersecting) {
					observer.disconnect();
					initFeatureSplide();
					return;
				}
			}
		},
		{ root: null, rootMargin: '0px', threshold: 0 }
	);
	observer.observe(mount);
}

function initFeatureSplide() {
	if (featureSplideInitialized || featureSplideLoading) return;
	featureSplideLoading = true;

	function loadSplideJsAndMount() {
		function mountSplide() {
			featureSplideLoading = false;
			var mount = document.getElementById('spz-2022-features-slider-mount');
			if (!mount || typeof Splide === 'undefined') {
				return;
			}
			if (featureSplideInitialized) return;

			mount.innerHTML = FEATURES_SPLIDE_HTML;
			mount.removeAttribute('aria-busy');
			mount.style.minHeight = '';

			sliderSpace();
			requestAnimationFrame(function () {
				sliderSpace();
			});

			var root = document.getElementById('spz-2022-features-splide');
			if (!root) return;

			var splide = new Splide(root, {
				type: 'loop',
				fixedWidth: 430,
				gap: 16,
				arrows: true,
				pagination: false,
				autoplay: true,
				interval: 4000,
				pauseOnHover: false,
				drag: true,
				flickPower: 200,
				breakpoints: {
					767: { gap: 8, focus: 'center' }
				}
			});

			splide.on('mounted', function () {
				featureSliderListEl = root.querySelector('.splide__list');
				root.querySelectorAll('.splide__arrow').forEach(function (arrow) {
					arrow.addEventListener('click', function () {
						stopFeatureSplideAutoplayForSession();
					});
				});
				if (splide.Components && splide.Components.Autoplay) {
					splide.Components.Autoplay.pause();
				}
				var featureSection = document.querySelector('.spz-feature-cards');
				if (featureSection && typeof IntersectionObserver !== 'undefined') {
					new IntersectionObserver(
						function (entries) {
							for (var j = 0; j < entries.length; j++) {
								if (entries[j].isIntersecting) {
									resumeFeatureSplideAutoplay();
								} else {
									pauseFeatureSplideAutoplay();
								}
							}
						},
						{ root: null, rootMargin: '0px', threshold: 0 }
					).observe(featureSection);
				} else {
					resumeFeatureSplideAutoplay();
				}
			});

			splide.on('move', startFeatureSliderInsetTracking);
			splide.on('moved', stopFeatureSliderInsetTracking);
			splide.on('scroll', syncFeatureSliderInsetFromListMotion);

			function splideMount(){
				if(window.innerWidth > 767) {
					splide.mount();
				}
			}

			window.addEventListener('resize', splideMount);
			splideMount();

			featureSplideInitialized = true;
			window.spz2022FeatureSplide = splide;

			var prevBtn = document.querySelector('.spz-feature-splide-prev');
			var nextBtn = document.querySelector('.spz-feature-splide-next');
			if (prevBtn) {
				prevBtn.addEventListener('click', function () {
					stopFeatureSplideAutoplayForSession();
					splide.go('<');
				});
			}
			if (nextBtn) {
				nextBtn.addEventListener('click', function () {
					stopFeatureSplideAutoplayForSession();
					splide.go('>');
				});
			}

			root.addEventListener('click', function (e) {
				if (featureSplideAutoplayStoppedForSession) return;
				var card = e.target.closest('.splide__slide .feature-card');
				if (card && root.contains(card)) {
					stopFeatureSplideAutoplayForSession();
				}
			});

			function syncHeightsAfterSplide() {
				setTimeout(applyCardTextHeights, 50);
				setTimeout(applyUniformCardHeights, 100);
			}
			splide.on('mounted moved updated', syncHeightsAfterSplide);
			syncHeightsAfterSplide();

			document.querySelectorAll('.feature-cta .spz-get-started, .features-card-slider .splide__list .feature-card a.spz-get-started, .spz-feature-cards .slider-arrows .spz-feature-splide-prev, .spz-feature-cards .slider-arrows .spz-feature-splide-next').forEach(function (button) {
				button.addEventListener('click', function () {
					setTimeout(() => {
						this.blur();
					}, 100);
				});
			});
		}

		ensureSplideCoreJs(mountSplide);
	}

	ensureSplideCss(loadSplideJsAndMount);
}

function setupHeroEmailCtaInputWrapClass() {
	document.querySelectorAll('.spz_6009_v .spz__hero-section__content__email-cta form .spz__input-wrap').forEach(function (wrap) {
		if (wrap.dataset.spzEmailCtaSynced) return;
		wrap.dataset.spzEmailCtaSynced = '1';
		var input = wrap.querySelector('input');
		if (!input || input.type === 'hidden' || input.type === 'submit' || input.type === 'button') return;
		function sync() {
			wrap.classList.toggle('has-value', input.value.trim() !== '');
		}
		input.addEventListener('input', sync);
		input.addEventListener('change', sync);
		input.addEventListener('blur', sync);
		sync();
	});
}

function setupScrollFixedHeader() {
	const body = document.body;
	const header = body.querySelector('.spz_header');
	if (!header) return;

	const SCROLL_THRESHOLD = 1;

	function updateHeaderHeightVar() {
		document.documentElement.style.setProperty('--spz-6009-header-h', header.offsetHeight + 'px');
	}

	function onScroll() {
		const y = window.scrollY || document.documentElement.scrollTop;
		body.classList.toggle('spz_6009_header_fixed', y > SCROLL_THRESHOLD);
	}

	updateHeaderHeightVar();
	onScroll();

	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', function () {
		updateHeaderHeightVar();
		onScroll();
	});
}

function setupBrowserDetection() {
	//browser detection
	let userAgent = navigator.userAgent;
	let browser = '';
	if (userAgent.match(/edg/i)) {
		browser = "edge";
	} else if (userAgent.match(/firefox|fxios/i)) {
		browser = "firefox";
	} else if (userAgent.match(/opr\//i)) {
		browser = "opera";
	} else if (userAgent.match(/chrome|chromium|crios/i)) {
		browser = "chrome";
	} else if (userAgent.match(/safari/i)) {
		browser = "safari";
	}
	document.querySelector('.spz_6009_v').classList.add(browser);
}


function inject6009() {
	if (document.body.classList.contains('spz_6009_v')) return;
	document.body.classList.add('spz_6009_v');

	localStorage.setItem('bdcAbTest12', '6009-v1');

	modifyControl();

	injectHtml();

	setupScrollFixedHeader();

	injectGetStarted();

	setupHeroEmailCtaInputWrapClass();

	injectForm();

	setupSplide();

	setupBrowserDetection();

	setupFeatureSplideWhenInView();
}

const bodyInterval6009 = setInterval(() => {
	if (document.querySelector('body') && !document.querySelector('.spz_6009_v') && document.body.children.length > 1) {
		clearInterval(bodyInterval6009);
		inject6009();
	}
}, 10);
