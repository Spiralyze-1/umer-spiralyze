function waitForElement(cssSelector, callback) {
	var interval;
	var timeout;

	var check = function () {
		try {
			var element = document.querySelector(cssSelector);
			if (element) {
				clearInterval(interval);
				clearTimeout(timeout);
				callback(element);
			}
		} catch (err) {
			console.log(err);
			clearInterval(interval);
			clearTimeout(timeout);
		}
	};

	interval = setInterval(check, 100); // poll every 100ms

	timeout = setTimeout(function () {
		clearInterval(interval);
	}, 20000);
}

function heroBannerChanges() {
	document.querySelector('main#base > div:first-child').classList.add('spz_hero_banner');
	document.querySelector('.form-container.spz_hero_banner').insertAdjacentHTML('afterbegin', `
		<div class="hero-bg-video">
		</div>`);

	const pathname = window.location.pathname;
	const cleanPath = pathname.replace(/^\/pl-pages\//, '').replace(/^\//, '');

	// Add the cleaned path as a class to the body
	if (cleanPath) {
		document.body.classList.add(cleanPath);
	}

	if (document.querySelector('.spz_hero_banner .form-wrapper')) {
		document.querySelector('.spz_hero_banner .form-wrapper').insertAdjacentHTML('beforebegin', `
			<div class="hero_nav">
				<div class="auto_container">
					<div class="hero_navInner">
						<h3>Select YOUR Industry:</h3>
						<div class="hero_navData">
							<ul>
								<li>
									<span class="nav_item all">
										All            
									</span>
								</li>
								<li>
									<span class="nav_item construction">
										Construction            
									</span>
								</li>
								<li>
									<span class="nav_item education">
										Education            
									</span>
								</li>
								<li>
									<span class="nav_item finance">
										Finance            
									</span>
								</li>
								<li>
									<span class="nav_item healthcare">
										Healthcare            
									</span>
								</li>
								<li>
									<span class="nav_item manufacturing">
										Manufacturing            
									</span>
								</li>
								<li>
									<span class="nav_item non_profit">
										Nonprofit            
									</span>
								</li>
								<li>
									<span class="nav_item technology">
										Technology            
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			`);
	}


	if (document.querySelector('.spz_hero_banner h1')) {
		document.querySelector('.spz_hero_banner h1').innerHTML = `HR software so you can <span>focus on the people,<br> not the paperwork.</span>`;
		const heading = document.querySelector(
			'.spz_11015_v #base .section.quote-container .columns-wrapper.content-width-md h2#a-single-platform-where-everything-works-together'
		);

		if (heading) {
			heading.textContent = heading.textContent.replace('.', '');
		}

	}


	// Form Changes Started
	const formInterval11015 = setInterval(function () {
		if (document.querySelector('.form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoButtonRow')) {
			clearInterval(formInterval11015);
			document.querySelectorAll('.form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoFormRow input, .form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoFormRow select[name="Country"]').forEach(function (ele) {
				ele.closest('.mktoFormRow').classList.add('form-input-width50');
			});
		}
	}, 100);

	const heroNav = document.querySelector('.hero_nav');
	if (heroNav) {
		window.addEventListener('scroll', () => {
			heroNav?.classList.toggle('sticky', window.scrollY > 10);
		});
	}

}

function secondSectionChanges() {
	const pathname = window.location.pathname;

	// Configuration for each page
	const pageConfigs = {
		'/pl-pages/hr-software': {
			baseSelector: '.spz_11015_v #base .section.quote-container .columns-wrapper .columns.columns-2-cols',
			imageReplacements: [
				{
					id: '#hr-data--reporting',
					src: {
						desktop: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232190/bamboohr/11012/hr_data__reporting_image-desktop.webp',
						tablet: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232191/bamboohr/11012/hr_data__reporting_image-tablet.webp',
						mobile: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232189/bamboohr/11012/hr_data__reporting_image-mobile.webp',
					},
					alt: 'HR Data & Reporting'
				},
				{
					id: '#hiring--onboarding',
					src: {
						desktop: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232191/bamboohr/11012/hiring__onboarding-desktop.webp',
						tablet: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232192/bamboohr/11012/hiring__onboarding-tablet.webp',
						mobile: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232188/bamboohr/11012/hiring__onboarding-mobile.webp',
					},
					alt: 'Hiring & Onboarding'
				},
				{
					id: '#payroll-time--benefits',
					src: {
						desktop: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232190/bamboohr/11012/payroll_time__benefits-desktop.webp',
						tablet: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232191/bamboohr/11012/payroll_time__benefits-tablet.webp',
						mobile: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232187/bamboohr/11012/payroll_time__benefits-mobile.webp',
					},
					alt: 'Payroll Time & Benefits'
				},
				{
					id: '#employee-experience--performance',
					src: {
						desktop: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232191/bamboohr/11012/employee_experience__performance-desktop.webp',
						tablet: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232192/bamboohr/11012/employee_experience__performance-tablet.webp',
						mobile: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1773232187/bamboohr/11012/employee_experience__performance-mobile.webp',
					},
					alt: 'Employee Experience & Performance'
				}
			],
			integrationSection: {
				targetId: '#integration-marketplace',
				desktopSrc: '//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11012/integrations_desktop.webp',
				tabletSrc: '//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11012/integrations_tablet.webp',
				mobileSrc: '//res.cloudinary.com/spiralyze/image/upload/f_auto/v1770810601/bamboohr/11012/Integrations_Mobile.png',
				alt: 'integration marketplace'
			},
			quoteImage: {
				desktopSrc: '//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11012/natalie_snow_desktop.webp',
				mobileSrc: '//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11012/natalie_snow_mobile.webp',
				alt: 'natalie snow'
			}
		}
	};

	function getDeviceSrc(src) {
		const width = window.innerWidth;
		if (typeof src === 'string') return src; // fallback if only one src provided

		if (width <= 767) return src.mobile || src.desktop;
		if (width <= 1024) return src.tablet || src.desktop;
		return src.desktop;
	}

	// Check if current page is configured
	const currentConfig = pageConfigs[pathname];
	if (!currentConfig) return;

	// Get the base selector for the current page
	const baseSelector = currentConfig.baseSelector;

	const rightColImageInterval11015 = setInterval(function () {
		let imagesReplaced = false;

		if (currentConfig.imageReplacements && currentConfig.imageReplacements.length > 0) {
			for (const replacement of currentConfig.imageReplacements) {
				const imgCol = document.querySelector(`${baseSelector}:has(${replacement.id}) .column7.img-col`);
				if (imgCol && !imgCol.hasAttribute('data-spz-replaced')) {
					const resolvedSrc = getDeviceSrc(replacement.src); // â† pick correct src
					imgCol.innerHTML = `<img src="${resolvedSrc}" alt="${replacement.alt}">`;
					imgCol.setAttribute('data-spz-replaced', 'true');
					imagesReplaced = true;
				}
			}
		}

		window.addEventListener('resize', () => {
			for (const replacement of currentConfig.imageReplacements) {
				const img = document.querySelector(`${baseSelector}:has(${replacement.id}) .column7.img-col[data-spz-replaced] img`);
				if (img) {
					img.src = getDeviceSrc(replacement.src);
				}
			}
		});

		// Add demo buttons to all columns
		const columns = document.querySelectorAll(`${baseSelector} .column5.non-img-col`);
		columns.forEach(function (column) {
			if (!column.querySelector('.spz_demo_btn')) {
				column.insertAdjacentHTML('beforeend', `<span class="spz_demo_btn">Get a Demo</span>`);
			}
		});

		// Add integration section image if configured
		if (currentConfig.integrationSection) {
			const integrationTarget = document.querySelector(`${baseSelector} h3${currentConfig.integrationSection.targetId}`);
			if (integrationTarget && !document.querySelector(`${baseSelector}:has(${currentConfig.integrationSection.targetId}) img.new_icon_image`)) {
				integrationTarget.insertAdjacentHTML('afterend', `<picture>
                  <source media="(max-width: 767px)" srcset="${currentConfig.integrationSection.mobileSrc}">
                  <source media="(max-width: 1024px)" srcset="${currentConfig.integrationSection.tabletSrc}">
                  <img src="${currentConfig.integrationSection.desktopSrc}" alt="${currentConfig.integrationSection.alt}" class="new_icon_image">
              </picture>`);
			}
		}

		// Update quote container section image if configured
		if (currentConfig.quoteImage) {
			const quotePicture = document.querySelector('.spz_11015_v #base .section.quote-container .quote-wrapper picture');
			if (quotePicture && !quotePicture.hasAttribute('data-spz-replaced')) {
				quotePicture.innerHTML = `<source media="(max-width: 768px)" srcset="${currentConfig.quoteImage.mobileSrc}">
                  <img src="${currentConfig.quoteImage.desktopSrc}" alt="${currentConfig.quoteImage.alt}" loading="lazy">`;
				quotePicture.setAttribute('data-spz-replaced', 'true');
			}
		}

		// Clear interval when elements are found or modified
		if (imagesReplaced || columns.length > 0) {
			clearInterval(rightColImageInterval11015);
		}

	}, 100);
}

function awardSection() {
	if (document.querySelectorAll('.spz_award_section').length === 0) {
		document.querySelector('.spz_11015_v #base .awards-container.reviews-container').insertAdjacentHTML('afterend', `<section class="spz_award_section">
 <div class="container">
    <ul>
       <li>
          <picture>
             <source media="(max-width: 768px)"
                srcset="//res.cloudinary.com/spiralyze/image/upload/v1770812002/bamboohr/11012/G2___Mobile.png">
             <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11012/g2__desktop.webp"
                alt="G2 award">
          </picture>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1770232399/bamboohr/11012/stars_45.svg"
             alt="stars">
          <p>G2 / 4.5</p>
       </li>
       <li>
          <picture>
             <source media="(max-width: 768px)"
                srcset="//res.cloudinary.com/spiralyze/image/upload/v1770812002/bamboohr/11012/Capterra___Mobile.png">
             <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11012/capterra__desktop.webp"
                alt="capterra award">
          </picture>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1770232398/bamboohr/11012/stars_46.svg"
             alt="stars">
          <p>Capterra / 4.6</p>
       </li>
       <li>
          <picture>
             <source media="(max-width: 768px)"
                srcset="//res.cloudinary.com/spiralyze/image/upload/v1770812001/bamboohr/11012/Get_App___Mobile.png">
             <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11012/get_app__desktop.webp"
                alt="get app award">
          </picture>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1770232398/bamboohr/11012/stars_46.svg"
             alt="stars">
          <p>Get App / 4.6</p>
       </li>
       <li>
          <picture>
             <source media="(max-width: 768px)"
                srcset="//res.cloudinary.com/spiralyze/image/upload/v1770812001/bamboohr/11012/Software_Advice___Mobile.png">
             <img
                src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11012/software_advice__desktop.webp"
                alt="software advice award">
          </picture>
          <img src="//res.cloudinary.com/spiralyze/image/upload/v1770232399/bamboohr/11012/stars_45.svg"
             alt="stars">
          <p>Software Advice / 4.5</p>
       </li>
    </ul>
 </div>
</section>`)
	};
}


function footerChanges() {
	const footerInterval11015 = setInterval(function () {
		const brand = document.querySelector('.footer .links');
		const legal = document.querySelector('.footer .legal');

		if (brand && legal) {
			clearInterval(footerInterval11015);
			const wrapper = document.createElement('div');
			wrapper.className = 'footer_links';

			brand.parentNode.insertBefore(wrapper, brand);
			wrapper.appendChild(brand);
			wrapper.appendChild(legal);
		}

	}, 100);

	const footerLogoInterval = setInterval(function () {
		if (document.querySelectorAll('.spz_11015_v footer.footer-limited .brand .footer_logo').length === 0) {
			const brandElement = document.querySelector('.spz_11015_v footer.footer-limited .brand');

			if (brandElement) {
				brandElement.insertAdjacentHTML('afterbegin', `<div class="footer_logo"><svg xmlns="http://www.w3.org/2000/svg" width="129" height="20" viewBox="0 0 129 20" fill="none">
              <path d="M17.9841 6.1775C15.6425 6.1775 14.3892 6.97943 13.5097 7.85277L13.2706 8.10544V0.000976562H11.2478V13.0928C11.2478 17.0393 14.2903 19.5 17.7807 19.5C21.6257 19.5 24.539 16.5422 24.539 12.7413C24.539 9.21221 21.5021 6.1775 17.9841 6.1775ZM17.7807 17.627C15.233 17.627 13.0755 15.6194 13.0755 12.9308C13.0755 10.2393 14.8922 8.03129 17.8247 8.03129C20.7572 8.03129 22.4832 10.4014 22.4832 12.8813C22.486 15.581 20.6583 17.627 17.7807 17.627Z" fill="white"/>
              <path d="M36.8411 8.39361H36.8136C35.9534 7.38021 34.6287 6.18555 32.364 6.18555C28.6427 6.18555 25.8311 8.96485 25.8311 12.8152C25.8311 16.8716 28.8515 19.4998 32.2321 19.4998C34.3401 19.4998 35.8764 18.4864 36.7861 17.3934H36.8384V19.0577H38.8942V6.60024H36.8384V8.39361H36.8411ZM32.3915 17.6296C29.3517 17.6296 27.8841 15.1826 27.8841 12.8152C27.8841 10.4479 29.3517 8.02834 32.4437 8.02834C34.865 8.02834 36.8466 9.95902 36.8466 12.8921C36.8466 15.6714 34.7084 17.6296 32.3915 17.6296Z" fill="white"/>
              <path d="M55.0218 6.18555C52.8616 6.18555 51.3527 7.51203 50.7289 8.75887C50.2067 7.30331 48.6208 6.18555 46.6695 6.18555C45.0562 6.18555 43.7809 7.04515 42.9482 8.16017H42.8959V6.60024H40.8374V19.0577H42.8959V12.1396C42.8959 9.53883 44.2234 8.03109 46.3039 8.03109C48.1509 8.03109 49.2695 9.59101 49.2695 11.6453V19.0577H51.3527V12.1396C51.3527 9.27793 52.9935 8.03109 54.736 8.03109C56.844 8.03109 57.729 9.72009 57.729 11.6453V19.0577H59.7848V11.8018C59.7848 8.13545 57.8334 6.18555 55.0218 6.18555Z" fill="white"/>
              <path d="M82.6479 6.18555C78.8991 6.18555 75.9858 8.96485 75.9858 12.8152C75.9858 16.5859 78.8744 19.4998 82.6479 19.4998C86.4984 19.4998 89.31 16.4843 89.31 12.8152C89.31 9.04449 86.5259 6.18555 82.6479 6.18555ZM82.6479 17.6268C80.2541 17.6268 78.1186 15.6247 78.1186 12.8152C78.1186 10.0579 79.993 8.03109 82.6479 8.03109C85.3798 8.03109 87.1745 10.1897 87.1745 12.8152C87.1773 15.5451 85.2754 17.6268 82.6479 17.6268Z" fill="white"/>
              <path d="M68.1396 6.17716C65.798 6.17716 64.5447 6.97909 63.6652 7.85243L63.4261 8.10509V0.975586H61.4033V13.0925C61.4033 17.0389 64.4458 19.4997 67.9362 19.4997C71.7812 19.4997 74.6945 16.5419 74.6945 12.7409C74.6918 9.21187 71.6548 6.17716 68.1396 6.17716ZM67.9362 17.6267C65.3885 17.6267 63.231 15.6191 63.231 12.9304C63.231 10.239 65.0477 8.03094 67.9802 8.03094C70.9127 8.03094 72.6387 10.401 72.6387 12.881C72.6415 15.5806 70.8138 17.6267 67.9362 17.6267Z" fill="white"/>
              <path d="M113.532 11.9175H106.903V6.60059H105.386V19.058H106.903V13.3044H113.532V19.058H115.049V6.60059H113.532V11.9175Z" fill="white"/>
              <path d="M125.138 10.2532C125.138 8.53676 124.022 6.60059 120.917 6.60059H117.313V19.058H118.831V13.8537H120.496L124.259 19.058H126.18L122.25 13.7054C123.822 13.395 125.138 12.0246 125.138 10.2532ZM118.831 12.464V7.99024H121.079C122.689 7.99024 123.566 8.79491 123.566 10.256C123.566 11.4616 122.744 12.4668 121.095 12.4668H118.831V12.464Z" fill="white"/>
              <path d="M128.885 7.05888C128.808 6.88312 128.703 6.72932 128.569 6.60024C128.437 6.47117 128.283 6.36955 128.107 6.2954C127.931 6.22125 127.741 6.18555 127.544 6.18555C127.343 6.18555 127.156 6.22125 126.977 6.2954C126.799 6.36955 126.645 6.47117 126.51 6.60024C126.375 6.72932 126.271 6.88312 126.194 7.05888C126.117 7.23465 126.079 7.42689 126.079 7.63012C126.079 7.83885 126.117 8.03384 126.194 8.21235C126.271 8.39086 126.378 8.54466 126.51 8.67373C126.645 8.80556 126.799 8.90717 126.977 8.97858C127.156 9.04998 127.343 9.08843 127.544 9.08843C127.744 9.08843 127.931 9.05273 128.107 8.97858C128.283 8.90717 128.437 8.80556 128.569 8.67373C128.701 8.54191 128.805 8.38811 128.885 8.21235C128.962 8.03384 129 7.84159 129 7.63012C129.003 7.42689 128.964 7.2374 128.885 7.05888ZM128.646 8.12721C128.585 8.27826 128.5 8.41008 128.393 8.52268C128.286 8.63254 128.159 8.72042 128.013 8.78633C127.868 8.8495 127.711 8.88246 127.544 8.88246C127.373 8.88246 127.214 8.8495 127.068 8.78633C126.922 8.72317 126.793 8.63528 126.686 8.52268C126.579 8.41008 126.494 8.28101 126.433 8.12721C126.373 7.97616 126.342 7.81138 126.342 7.63287C126.342 7.45985 126.373 7.29782 126.433 7.14677C126.494 6.99572 126.579 6.86664 126.686 6.75679C126.793 6.64693 126.92 6.55905 127.068 6.49588C127.214 6.43272 127.373 6.39976 127.544 6.39976C127.711 6.39976 127.868 6.42997 128.013 6.49588C128.159 6.55905 128.286 6.64693 128.393 6.75679C128.5 6.86664 128.585 6.99846 128.646 7.14677C128.706 7.29782 128.736 7.45985 128.736 7.63287C128.739 7.81138 128.709 7.97616 128.646 8.12721Z" fill="white"/>
              <path d="M128.098 7.61086C128.183 7.53948 128.227 7.42693 128.227 7.27594C128.227 7.11397 128.178 6.99044 128.081 6.91083C127.985 6.83122 127.834 6.79004 127.634 6.79004H126.977V8.48932H127.241V7.7591H127.521L127.983 8.48932H128.266L127.779 7.73988C127.908 7.72341 128.013 7.68223 128.098 7.61086ZM127.516 7.54223H127.238V7.00142H127.587C127.631 7.00142 127.675 7.00416 127.722 7.0124C127.768 7.01789 127.807 7.03162 127.842 7.04809C127.878 7.0673 127.906 7.09201 127.928 7.12495C127.95 7.1579 127.961 7.20457 127.961 7.25947C127.961 7.3281 127.95 7.38026 127.925 7.41595C127.9 7.45438 127.867 7.48183 127.826 7.4983C127.785 7.51752 127.738 7.5285 127.683 7.53124C127.631 7.53948 127.576 7.54223 127.516 7.54223Z" fill="white"/>
              <path d="M97.2671 6.18555C93.5183 6.18555 90.605 8.96485 90.605 12.8152C90.605 16.5859 93.4935 19.4998 97.2671 19.4998C101.118 19.4998 103.929 16.4843 103.929 12.8152C103.929 9.04449 101.145 6.18555 97.2671 6.18555ZM97.2671 17.6268C94.8732 17.6268 92.7377 15.6247 92.7377 12.8152C92.7377 10.0579 94.6121 8.03109 97.2671 8.03109C99.999 8.03109 101.794 10.1897 101.794 12.8152C101.796 15.5451 99.8945 17.6268 97.2671 17.6268Z" fill="white"/>
              <path d="M4.83036 0.000961809C4.81387 -0.00453088 4.80563 0.0146931 4.81662 0.0284248C6.89165 2.36831 8.39502 5.19979 9.14808 7.01512C8.19714 5.99623 7.29017 4.93614 6.27327 4.23033C4.21197 2.79399 2.03525 2.08269 0.0179318 1.81355C0.00144142 1.8108 -0.006804 1.83277 0.00693795 1.84376C4.94854 5.80398 3.79697 7.87473 10.2474 8.69314C10.2584 8.69588 10.2694 8.68215 10.2639 8.67117C9.31024 5.73533 8.99967 3.55748 7.38087 1.82728C6.86967 1.2835 5.36905 0.187713 4.83036 0.000961809Z" fill="white"/>
              </svg></div>`);
				clearInterval(footerLogoInterval);
			}
		}
	}, 100);

}

// 11015 code

function popupHTML() {
	return `
<div class="spz_11015_popupOuter">
  <div class="spz_11015_overlay">
  </div>
  <div class="spz_11015_popup">
    <button class="close-btn" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 15L15 5M5 5L15 15" stroke="#95918F" stroke-width="1.25" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>

    <h1 class="modal-title" id="modal-title">Welcome to BambooHR</h1>
    <p class="modal-subtitle">Select your industry:</p>

    <div class="grid-wrapper">
      <div class="flex-row">

        <div class="card construction" data-industry="construction">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
              <path
                d="M39.5316 18.1318V22.7847C39.5316 26.9582 35.6426 32.1947 30.8886 33.9749C29.8423 34.364 28.9227 34.5585 28.0011 34.5585C27.0796 34.5585 26.156 34.364 25.1098 33.9749C20.3557 32.1947 16.4668 26.9582 16.4668 22.7847V18.1318"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14.7838 18.1318C13.8135 18.1318 13.0127 18.9217 13.0127 19.9022V21.0203C13.0127 22.8378 14.7273 23.8576 16.5626 23.9598"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M41.2251 18.1318C42.1935 18.1318 42.9865 18.9217 42.9865 19.9022V21.0203C42.9865 22.8378 41.2719 23.8576 39.4365 23.9598"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M26.1251 18.1314H14.7836C13.7822 18.1314 12.96 17.3062 12.96 16.2923C12.96 15.2784 13.7822 14.457 14.7836 14.457H41.2249C42.2264 14.457 43.0486 15.2823 43.0486 16.2923C43.0486 17.3022 42.2264 18.1314 41.2249 18.1314H29.8582"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M24.6348 14.4572L25.7181 1.74818C25.7648 1.20193 26.1623 0.75 26.7098 0.75H29.2914C29.8369 0.75 30.2344 1.20193 30.2811 1.74818L31.3547 14.4572"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M15.1689 14.4568C15.1689 8.12192 19.7398 2.81273 25.7194 1.71631M30.2766 1.71631C36.2639 2.8088 40.8367 8.11996 40.8367 14.4568"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42.415 55.7635V39.6846" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M28.001 54.9541V55.7637" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M28.001 50.8691H42.417" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M13.5811 55.7635V39.6846" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M28.001 46.6111V55.7636" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18.9644 50.8691H13.5811M27.999 50.8691H22.7618" stroke="#2E7918" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.6514 32.4993V36.9675" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M33.6511 36.9673L28.0009 46.6111L22.3506 36.9673" stroke="#2E7918" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M22.3492 36.9673C16.6677 38.4135 7.6351 40.3312 7.07202 47.3794L6.4992 54.5434C6.42127 55.5161 6.68235 55.7676 7.6916 55.7676L27.9994 55.7636L48.3073 55.7676C49.3126 55.7676 49.5776 55.5161 49.4997 54.5434L48.9249 47.3794C48.3618 40.3312 39.335 38.4135 33.6517 36.9673"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.3496 32.5029V36.9692" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M32.5005 38.9321C31.2029 39.5943 29.6559 39.9775 28.0017 39.9794C26.3436 39.9755 24.7966 39.5943 23.499 38.9321"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <span class="card-label">Construction</span>
        </div>

        <div class="card education" data-industry="education">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="56" viewBox="0 0 64 56" fill="none">
              <path d="M31.6641 5.85449V39.17" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M41.6667 36.957H37.2427C35.2342 36.957 33.2973 37.7139 31.8089 39.0845H31.5173C30.0288 37.7139 28.0892 36.957 26.0808 36.957H8.92383V3.78467H26.0808C27.1235 3.78467 28.1497 3.99108 29.1017 4.37639C30.0151 4.75069 30.8625 5.29288 31.5971 5.98644C31.5971 5.98644 31.7291 5.98919 31.7319 5.98644C33.2313 4.5718 35.1985 3.78742 37.2427 3.78742H54.4024V35.8589"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M59.0765 38.8092V6.0166H54.5039" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M8.7399 6.0166H4.24707V41.9329H27.0028C27.7787 43.7742 29.5753 45.0677 31.6663 45.0677C33.7572 45.0677 35.5483 43.7742 36.3214 41.9329H41.7552"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M37.4111 13.3538H49.2031" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M37.4111 19.6458H49.2031" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M37.4111 25.9373H49.2031" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M14.124 13.3538H25.9132" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M14.124 19.6458H25.9132" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M14.124 25.9373H25.9132" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M59.7534 41.7075L43.5264 30.1978V50.0962L47.5955 44.7349L51.4583 52.2154L56.8645 49.4302L52.999 41.9497L59.7534 41.7075Z"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <span class="card-label">Education</span>
        </div>

        <div class="card finance" data-industry="finance">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path
                d="M37.3562 55.1906C45.7595 55.1906 52.5717 48.3784 52.5717 39.9751C52.5717 31.5717 45.7595 24.7595 37.3562 24.7595C28.9528 24.7595 22.1406 31.5717 22.1406 39.9751C22.1406 48.3784 28.9528 55.1906 37.3562 55.1906Z"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M32.876 45.8711C33.7364 46.9976 35.2538 47.7447 36.9817 47.7447C39.6649 47.7447 41.8392 45.9405 41.8392 43.7176C41.8392 41.1802 39.4475 40.1231 37.3333 39.7021C35.4435 39.3274 33.3802 38.2865 33.3802 36.0613C33.3802 34.042 35.3556 32.4043 37.7913 32.4043C39.3388 32.4043 40.6989 33.0635 41.4853 34.0651"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M37.3564 50.546V47.731" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M37.3564 29.4065V32.3765" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M40.65 19.65V3.3334C40.65 1.9386 39.5212 0.809814 38.1265 0.809814H5.95132C4.55652 0.809814 3.42773 1.9386 3.42773 3.3334V49.5328C3.42773 50.9276 4.55652 52.0564 5.95132 52.0564H20.8939"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.4863 19.5227V14.0337H15.9398" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18.8838 21.9352V14.0337" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18.8838 14.0338V9.84937H22.3511" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M25.2822 19.5228V4.50391H31.6826V21.9354" stroke="#2E7918" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.9668 21.9353H33.2026" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M10.9663 27.8777H8.6416" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M22.0831 27.8777H14.5771" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M10.9663 36.5864H8.6416" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18.3313 36.5864H14.5771" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M10.9663 45.2952H8.6416" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M19.5179 45.2952H14.5771" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
          <span class="card-label">Finance</span>
        </div>

        <div class="card healthcare" data-industry="healthcare">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path
                d="M43.4383 41.1295C45.2173 38.4643 49.1905 36.9933 49.8914 33.6585C50.1169 32.5893 49.9048 31.3527 48.82 30.8504C47.253 30.1272 45.782 31.5692 44.6481 32.4576C43.099 33.6719 41.503 34.8728 39.7754 35.8214C38.2307 36.6696 36.387 36.8951 35.003 38.0379C33.9026 38.9464 33.6392 40.5335 33.4963 41.8817C33.2977 43.7411 33.7173 45.5223 33.1972 47.3638C32.9629 48.1942 34.2553 48.5491 34.4896 47.721C34.8713 46.3728 34.878 45.067 34.8155 43.6786C34.7575 42.4129 34.7597 40.8058 35.3847 39.654C36.1102 38.3214 37.9785 38.1027 39.253 37.5625C40.5276 37.0223 41.724 36.221 42.8892 35.4308C44.166 34.5647 45.3289 33.558 46.5767 32.654C47.2151 32.192 48.4807 31.5357 48.6414 32.7455C48.7129 33.2812 48.4651 33.8839 48.2084 34.3415C47.4785 35.6429 46.2017 36.5112 45.0812 37.4442C43.9606 38.3772 43.0588 39.2969 42.2843 40.4576C41.8044 41.1763 42.9629 41.8482 43.4405 41.1339L43.4383 41.1295Z"
                fill="#2E7918" />
              <path
                d="M42.7843 49.25C43.1169 47.7567 43.7732 46.5469 45.0008 45.6117C46.2285 44.6764 47.5433 44.0224 48.7352 43.1072C51.4004 41.0625 52.9205 38.1183 53.6482 34.8795C54.3848 31.6027 54.6995 27.7143 54.0924 24.3929C53.8915 23.2925 53.1705 22.3192 51.9406 22.4108C50.7107 22.5023 50.175 23.6652 49.9004 24.7367C49.4495 26.4956 49.5254 28.1809 49.5968 29.971C49.6325 30.8862 49.0388 31.8862 48.7084 32.7233C48.3781 33.5603 49.6861 33.8728 50.0008 33.0804C50.291 32.3483 50.675 31.605 50.8736 30.8416C51.0968 29.9844 50.8133 29.0157 50.8156 28.1407C50.8156 27.3192 50.9093 26.5067 51.0633 25.7009C51.1683 25.1563 51.5968 23.0067 52.5276 23.9353C53.07 24.4755 52.9049 26.0938 52.9361 26.7835C53.0343 28.8371 52.954 30.9331 52.6482 32.9666C52.0276 37.1005 50.3178 40.5224 46.7821 42.8617C45.6392 43.6183 44.3915 44.259 43.4049 45.2255C42.4183 46.192 41.8044 47.5112 41.4941 48.8974C41.3066 49.7367 42.5968 50.096 42.7866 49.2545L42.7843 49.25Z"
                fill="#2E7918" />
              <path
                d="M44.1861 50.7748C43.9963 51.8083 43.8937 52.9042 43.6079 53.9154C43.3066 54.9801 42.4874 54.6342 41.6771 54.4846L33.7843 53.0292C33.1637 52.9154 32.4651 52.8708 31.8624 52.6743C30.695 52.2926 31.5789 49.8752 31.7709 49.0158C32.012 47.9377 32.5834 47.9868 33.4807 48.152L37.1035 48.8194C38.6146 49.0984 40.128 49.3775 41.6392 49.6565C42.4606 49.8083 44.2575 49.7882 44.1615 50.9533C44.0901 51.8127 45.4316 51.8083 45.5008 50.9533C45.628 49.402 44.4495 48.8194 43.1637 48.5828L38.7664 47.7725L33.9651 46.8864C32.8691 46.6833 31.724 46.4199 30.9249 47.4645C30.5432 47.9623 30.4919 48.5828 30.3825 49.181C30.2419 49.9489 30.0722 50.7145 29.9584 51.4868C29.7508 52.8685 30.5521 53.7658 31.8535 54.0315C34.8468 54.6408 37.8646 55.1408 40.8691 55.6944C42.0097 55.9042 43.3892 56.3842 44.3312 55.4288C44.8914 54.8618 44.9405 54.0493 45.0767 53.3083C45.2129 52.5672 45.3446 51.8574 45.4785 51.1342C45.6347 50.2926 44.3423 49.931 44.1861 50.777V50.7748Z"
                fill="#2E7918" />
              <path
                d="M13.6286 40.4532C12.8541 39.2925 11.9032 38.3282 10.8318 37.4399C9.76032 36.5515 8.42327 35.6408 7.70452 34.3372C7.45229 33.8818 7.20006 33.2769 7.27148 32.7412C7.42104 31.6184 8.5572 32.0961 9.17327 32.5314C10.488 33.4577 11.6934 34.5224 13.0237 35.4265C14.1643 36.201 15.3094 36.9756 16.5818 37.5247C17.8541 38.0738 19.8027 38.2948 20.5304 39.6497C21.1532 40.8104 21.1554 42.4019 21.0996 43.6742C21.0393 45.0649 21.0438 46.364 21.4255 47.7166C21.6599 48.5448 22.9523 48.1921 22.7179 47.3595C22.2112 45.5693 22.5929 43.855 22.4367 42.0448C22.3228 40.7278 22.0728 39.0916 21.0594 38.1474C19.7447 36.922 17.8318 36.7211 16.2938 35.9019C14.5036 34.9488 12.8585 33.6988 11.2648 32.451C10.1532 31.5805 8.72014 30.1631 7.17327 30.8104C6.07506 31.2702 5.80497 32.451 6.00139 33.5291C6.62193 36.9399 10.68 38.4354 12.4746 41.1229C12.9501 41.8372 14.1108 41.1675 13.6309 40.4466L13.6286 40.4532Z"
                fill="#2E7918" />
              <path
                d="M14.4163 48.8928C14.106 47.5067 13.5301 46.2254 12.5055 45.221C11.481 44.2165 10.2712 43.6116 9.12831 42.8571C5.59483 40.5201 3.88277 37.0937 3.26224 32.962C2.95643 30.9286 2.87384 28.8326 2.97429 26.779C3.00554 26.1161 2.86715 24.4442 3.38277 23.9308C4.31581 23.0022 4.74438 25.1518 4.84706 25.6964C5.00108 26.5022 5.09259 27.317 5.09483 28.1361C5.09483 29.0111 4.81358 29.9799 5.03679 30.837C5.23545 31.6004 5.61938 32.3437 5.90956 33.0759C6.22206 33.8683 7.51893 33.5223 7.20197 32.7187C6.95197 32.087 6.64617 31.4576 6.44527 30.808C6.18635 29.9643 6.43634 29.0156 6.43411 28.1361C6.43411 27.3772 6.35152 26.6295 6.23099 25.8817C6.05465 24.7812 5.83813 23.2277 4.74884 22.6339C3.86268 22.1518 2.71313 22.4665 2.17742 23.3147C1.41179 24.529 1.61045 26.6161 1.59929 27.9821C1.58367 29.7634 1.70197 31.5558 1.96983 33.3169C2.47429 36.6228 3.68634 39.9509 6.18188 42.2768C7.47876 43.4866 9.03233 44.3169 10.4855 45.308C11.9386 46.2991 12.7444 47.5379 13.1261 49.2478C13.3136 50.0893 14.606 49.7321 14.4185 48.8906L14.4163 48.8928Z"
                fill="#2E7918" />
              <path
                d="M10.4345 51.1318C10.651 52.3081 10.68 53.759 11.1867 54.8505C11.785 56.1407 13.0439 56.0626 14.2046 55.8483C17.2716 55.2836 20.3363 54.7166 23.4033 54.1519C24.555 53.9398 25.7805 53.6809 25.9814 52.2746C26.0595 51.7344 25.8943 51.1675 25.7984 50.6385C25.6577 49.8751 25.5595 49.0871 25.3742 48.3327C25.0305 46.951 23.8832 46.5403 22.6019 46.7657C21.218 47.009 19.8363 47.2746 18.4546 47.5313L13.1376 48.5112C11.7537 48.7657 10.2671 49.1653 10.4144 50.9554C10.4836 51.8081 11.8251 51.8148 11.7537 50.9554C11.6644 49.8684 13.0126 49.8929 13.7872 49.7501L17.7202 49.0246C19.0528 48.7791 20.3832 48.5336 21.7158 48.288C22.468 48.1496 23.7336 47.6139 24.0684 48.6206C24.2046 49.0313 24.2336 49.5224 24.314 49.9465C24.4189 50.5157 24.6466 51.1786 24.6488 51.759C24.651 52.7679 23.6823 52.7434 22.9122 52.8862C20.2805 53.3706 17.651 53.8572 15.0193 54.3416C14.2381 54.4867 12.6867 55.1273 12.3341 54.0715C11.9814 53.0157 11.9234 51.8461 11.7269 50.7791C11.5707 49.9331 10.2805 50.2903 10.4345 51.1362V51.1318Z"
                fill="#2E7918" />
              <path
                d="M28.1333 33.4642C32.1333 32.0624 35.7516 29.6428 38.9949 26.9508C42.2382 24.2589 45.6802 20.7611 47.4034 16.6584C50.0373 10.395 46.9815 1.47985 39.7293 0.178506C35.1221 -0.647386 30.7181 1.70306 27.4815 4.81243H28.4279C25.477 1.97538 21.4882 -0.321494 17.2538 0.0378815C14.1534 0.301274 11.4458 1.96645 9.71588 4.54235C7.59311 7.70529 6.88775 11.9151 8.08195 15.5401C9.45695 19.7142 12.6244 23.1986 15.861 26.0513C17.8364 27.7923 19.9547 29.3861 22.2003 30.7589C23.2003 31.3705 24.227 31.9397 25.2851 32.4397C26.015 32.7856 27.1378 33.4888 27.9525 33.4888C28.8141 33.4888 28.8163 32.1495 27.9525 32.1495C27.7404 32.1495 27.1891 31.8258 26.986 31.741C26.5886 31.5758 26.198 31.3973 25.8096 31.2098C24.9681 30.8057 24.1489 30.3593 23.3453 29.8839C21.5864 28.8415 19.9056 27.6629 18.3163 26.3772C15.2203 23.8727 12.2293 20.9441 10.3342 17.4017C8.43909 13.8593 8.38105 10.2522 10.0105 6.73654C11.1846 4.20529 13.3186 2.20306 16.073 1.56467C20.3163 0.580292 24.5061 2.90842 27.4748 5.7611C27.7404 6.01556 28.1556 6.01556 28.4212 5.7611C31.1311 3.15618 34.7605 1.03342 38.6489 1.37493C41.4659 1.6227 43.8944 3.28788 45.3342 5.69413C47.198 8.80797 47.5976 12.6138 46.2382 15.9821C44.7382 19.6964 41.7784 22.779 38.7962 25.3615C35.5574 28.1673 31.8409 30.7432 27.7694 32.1696C26.9614 32.4531 27.3096 33.7477 28.1266 33.462L28.1333 33.4642Z"
                fill="#2E7918" />
              <path
                d="M35.5974 14.2567H30.6688L31.3384 14.9264V9.99557C31.3384 9.63396 31.0326 9.32593 30.6688 9.32593H25.2447C24.8831 9.32593 24.5751 9.63173 24.5751 9.99557V14.9264L25.2447 14.2567H20.3161C19.9545 14.2567 19.6465 14.5625 19.6465 14.9264V20.3505C19.6465 20.7121 19.9523 21.0201 20.3161 21.0201H25.2447L24.5751 20.3505V25.2813C24.5751 25.6429 24.8809 25.9509 25.2447 25.9509H30.6688C31.0304 25.9509 31.3384 25.6451 31.3384 25.2813V20.3505L30.6688 21.0201H35.5974C35.959 21.0201 36.267 20.7143 36.267 20.3505V14.9264C36.267 14.0648 34.9277 14.0625 34.9277 14.9264V20.3505L35.5974 19.6808H30.6688C30.3072 19.6808 29.9992 19.9866 29.9992 20.3505V25.2813L30.6688 24.6116H25.2447L25.9143 25.2813V20.3505C25.9143 19.9889 25.6085 19.6808 25.2447 19.6808H20.3161L20.9858 20.3505V14.9264L20.3161 15.596H25.2447C25.6063 15.596 25.9143 15.2902 25.9143 14.9264V9.99557L25.2447 10.6652H30.6688L29.9992 9.99557V14.9264C29.9992 15.288 30.305 15.596 30.6688 15.596H35.5974C36.459 15.596 36.4612 14.2567 35.5974 14.2567Z"
                fill="#2E7918" />
            </svg>
          </div>
          <span class="card-label">Healthcare</span>
        </div>

        <div class="card manufacturing" data-industry="manufacturing">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path
                d="M8.64746 25.3513V9.87754C8.64746 9.27502 9.13561 8.78687 9.73814 8.78687H46.2616C46.8641 8.78687 47.3523 9.27502 47.3523 9.87754V25.3513"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M16.3574 5.47607V3.54185C16.3574 2.94136 16.8415 2.45321 17.442 2.45117C17.442 2.45117 17.4461 2.45117 17.4481 2.45117H20.5138C21.1164 2.45117 21.6045 2.93932 21.6045 3.54185V5.47607"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M42.2659 29.6119V28.2434C42.2659 27.6409 41.7757 27.1527 41.1732 27.1548C41.0098 27.1548 40.8464 27.1916 40.6993 27.263L29.4331 32.7593C29.0593 32.9411 28.8203 33.3231 28.8203 33.7397V49.9488"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M28.8187 29.2873V28.2824C28.8208 27.6819 28.3367 27.1917 27.7362 27.1897C27.5606 27.1897 27.389 27.2305 27.2317 27.3102L15.2996 33.409C14.934 33.5949 14.7032 33.9707 14.7012 34.3812V49.9469"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14.7155 30.2696V28.3293C14.7155 27.7268 14.2274 27.2386 13.6248 27.2386C13.4431 27.2386 13.2633 27.2836 13.104 27.3714L1.67436 33.5682C1.32305 33.7582 1.10246 34.1279 1.10451 34.5282V52.459C1.10451 53.0616 1.59266 53.5497 2.19519 53.5497H53.8043C54.4068 53.5497 54.895 53.0616 54.895 52.459V28.3252C54.895 27.7227 54.4048 27.2345 53.8023 27.2366C53.6225 27.2366 53.4448 27.2815 53.2855 27.3673L42.6749 33.0842C42.3215 33.2762 42.103 33.6458 42.105 34.0462V49.138"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.80371 38.5681H14.7159" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M9.80371 43.3311H14.7159" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M9.80371 48.0923H14.7159" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M23.4961 38.5681H28.4062" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M23.4961 43.3311H28.4062" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M23.4961 48.0923H28.4062" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M36.8867 38.5681H41.8009" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M36.8867 43.3311H41.8009" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M36.8867 48.0923H41.8009" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M49.9805 38.5681H54.8946" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M49.9805 43.3311H54.8946" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M49.9805 48.0923H54.8946" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
          <span class="card-label">Manufacturing</span>
        </div>

        <div class="card non_profit" data-industry="nonprofit">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <g clip-path="url(#clip0_29048_13771)">
                <path
                  d="M28.996 21.3828L28.3373 22.1469L27.6787 21.3828C25.462 18.8079 21.522 18.6607 19.1182 21.0644C17.3094 22.8732 16.8717 25.6551 18.0755 27.9116C21.0683 33.5191 28.3373 37.9326 28.3373 37.9326C28.3373 37.9326 35.6044 33.5211 38.5991 27.9116C39.803 25.6551 39.3633 22.8732 37.5564 21.0644C35.1527 18.6607 31.2147 18.8079 28.996 21.3828Z"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M11.6259 33.475L13.3113 36.3006L14.8276 37.8149C15.5201 38.5074 15.8564 39.4068 15.8564 40.2983C15.8564 41.4106 15.3331 42.519 14.3202 43.2055L5.53091 34.1575C4.8444 33.4233 4.46235 32.4602 4.45837 31.4573L4.13402 23.3664C4.07233 21.7944 3.28633 20.3398 2.01082 19.4245L1.2666 18.8872"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M8.8786 25.0739L9.0955 31.4057C9.1353 32.5977 10.1282 33.5349 11.3202 33.509C12.5062 33.4832 13.4513 32.5121 13.4494 31.3261L13.4434 28.395C13.4414 27.2469 13.6464 26.1047 14.0901 25.0461C14.4761 24.1248 14.8661 22.7577 14.7308 21.1738C14.5478 19.0366 12.1181 17.0846 10.5163 15.5643L7.57324 12.7964"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M22.5245 11.6262L19.6988 13.3116L18.1845 14.8279C17.492 15.5203 16.5926 15.8566 15.7012 15.8566C14.5888 15.8566 13.4805 15.3333 12.7939 14.3204L21.8419 5.53116C22.5762 4.84465 23.5393 4.46259 24.5422 4.45861L32.633 4.13426C34.205 4.07257 35.6596 3.28657 36.575 2.01106L37.1122 1.26685"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M30.9278 8.87836L24.596 9.09525C23.4041 9.13505 22.4668 10.128 22.4927 11.3199C22.5186 12.5059 23.4896 13.4511 24.6756 13.4491L27.6067 13.4431C28.7549 13.4411 29.897 13.6461 30.9557 14.0898C31.877 14.4759 33.244 14.8659 34.828 14.7306C36.9651 14.5475 38.9172 12.1179 40.4374 10.516L43.2054 7.573"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M44.376 22.5247L42.6906 19.6991L41.1743 18.1848C40.4818 17.4923 40.1455 16.5929 40.1455 15.7014C40.1455 14.5891 40.6688 13.4807 41.6817 12.7942L50.471 21.8422C51.1575 22.5764 51.5396 23.5395 51.5435 24.5424L51.8679 32.6333C51.9296 34.2053 52.7156 35.6599 53.9911 36.5752L54.7353 37.1125"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M47.1218 30.9281L46.9049 24.5963C46.8651 23.4043 45.8722 22.4671 44.6802 22.493C43.4943 22.5188 42.5491 23.4899 42.5511 24.6759L42.557 27.6069C42.559 28.7551 42.3541 29.8973 41.9103 30.9559C41.5243 31.8772 41.1343 33.2443 41.2696 34.8282C41.4527 36.9653 43.8823 38.9174 45.4841 40.4377L48.4272 43.2056"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M33.4745 44.3757L36.3001 42.6903L37.8144 41.174C38.5069 40.4816 39.4063 40.1453 40.2978 40.1453C41.4102 40.1453 42.5185 40.6686 43.205 41.6815L34.157 50.4707C33.4228 51.1573 32.4597 51.5393 31.4568 51.5433L23.3659 51.8676C21.7939 51.9293 20.3393 52.7153 19.424 53.9908L18.8867 54.7351"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M25.0734 47.1216L31.4052 46.9047C32.5972 46.8649 33.5344 45.8719 33.5085 44.68C33.4827 43.494 32.5116 42.5488 31.3256 42.5508L28.3946 42.5568C27.2464 42.5588 26.1042 42.3538 25.0456 41.9101C24.1243 41.524 22.7572 41.134 21.1733 41.2693C19.0362 41.4524 17.0841 43.8821 15.5638 45.4839L12.7959 48.4269"
                  stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_29048_13771">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span class="card-label">Non Profit</span>
        </div>

      </div>

      <div class="flex-row-bottom">

        <div class="card technology" data-industry="technology">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path
                d="M40.5438 8.69531H48.4877C50.6633 8.69531 52.4349 10.4669 52.4349 12.6425V43.4024C52.4349 45.5874 50.6633 47.3589 48.4877 47.3589H7.51065C5.33502 47.3589 3.56348 45.5874 3.56348 43.4024V12.6425C3.56348 10.4669 5.33502 8.69531 7.51065 8.69531H15.4532"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.5515 54.6194H22.4473L23.8268 47.3579H32.172L33.5515 54.6194Z" stroke="#2E7918"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.7881 54.6191H37.2114" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M52.4366 40.9258H3.5625" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M26.7822 43.9683H29.2161" stroke="#2E7918" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M37.4413 16.3596C37.2138 17.256 36.8579 18.1044 36.3976 18.8844L38.2829 21.3785L35.4516 24.2165L32.9575 22.3245C32.1775 22.7848 31.3305 23.142 30.4327 23.3682L30.0085 26.4269L30.0018 26.4643V26.471H25.9918L25.5623 23.3695C24.6658 23.142 23.8175 22.7861 23.0374 22.3258L20.5433 24.2178L17.7054 21.3798L19.5974 18.8858C19.1371 18.1057 18.7798 17.2587 18.5537 16.3609L15.4521 15.9314V11.9213H15.4588L15.4963 11.9146L18.555 11.4905C18.7825 10.594 19.1384 9.74571 19.5987 8.96564L17.7067 6.47156L20.5447 3.6403L23.0388 5.52558C23.8188 5.06529 24.6658 4.70804 25.5636 4.48192L25.9931 1.38037H30.0032L30.4327 4.48192C31.3292 4.70938 32.1775 5.06529 32.9575 5.52558L35.4516 3.6403L38.2829 6.47156L36.3976 8.96564C36.8579 9.74571 37.2151 10.5927 37.4413 11.4905L40.5428 11.92V15.9301L37.4413 16.3596Z"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M28 18.772C30.6773 18.772 32.8477 16.6016 32.8477 13.9243C32.8477 11.247 30.6773 9.07666 28 9.07666C25.3227 9.07666 23.1523 11.247 23.1523 13.9243C23.1523 16.6016 25.3227 18.772 28 18.772Z"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <span class="card-label">Technology</span>
        </div>

        <div class="card" data-industry="other">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path
                d="M19.25 8.75H13.4167C10.8393 8.75 8.75 10.8393 8.75 13.4167V19.25C8.75 21.8273 10.8393 23.9167 13.4167 23.9167H19.25C21.8273 23.9167 23.9167 21.8273 23.9167 19.25V13.4167C23.9167 10.8393 21.8273 8.75 19.25 8.75Z"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M36.3676 8.90882C37.2428 8.03395 38.4295 7.54248 39.667 7.54248C40.9044 7.54248 42.0912 8.03395 42.9663 8.90882L47.0916 13.0342C47.9665 13.9093 48.458 15.0961 48.458 16.3335C48.458 17.5709 47.9665 18.7577 47.0916 19.6328L42.9663 23.7582C42.0912 24.633 40.9044 25.1245 39.667 25.1245C38.4295 25.1245 37.2428 24.633 36.3676 23.7582L32.2423 19.6328C31.3674 18.7577 30.876 17.5709 30.876 16.3335C30.876 15.0961 31.3674 13.9093 32.2423 13.0342L36.3676 8.90882Z"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M20.4167 32.0835H12.25C10.317 32.0835 8.75 33.6505 8.75 35.5835V43.7502C8.75 45.6832 10.317 47.2502 12.25 47.2502H20.4167C22.3497 47.2502 23.9167 45.6832 23.9167 43.7502V35.5835C23.9167 33.6505 22.3497 32.0835 20.4167 32.0835Z"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M42.583 32.0835H36.7497C34.1723 32.0835 32.083 34.1728 32.083 36.7502V42.5835C32.083 45.1608 34.1723 47.2502 36.7497 47.2502H42.583C45.1603 47.2502 47.2497 45.1608 47.2497 42.5835V36.7502C47.2497 34.1728 45.1603 32.0835 42.583 32.0835Z"
                stroke="#2E7918" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <span class="card-label">Other</span>
        </div>

      </div>
    </div>
  </div>
</div>
	`
}

var savedPopupScrollY = 0;
var POPUP_STORAGE_KEY = 'spz_11015_industry_selection';
var POPUP_HIDE_MS = 24 * 60 * 60 * 1000;

var industryNavMap = {
	construction: 'construction',
	education: 'education',
	finance: 'finance',
	healthcare: 'healthcare',
	manufacturing: 'manufacturing',
	nonprofit: 'non_profit',
	technology: 'technology',
	other: 'all'
};

function getStoredPopupState() {
	try {
		var stored = localStorage.getItem(POPUP_STORAGE_KEY);
		if (!stored) return null;
		var parsed = JSON.parse(stored);
		if (!parsed || !parsed.dismissedAt) {
			localStorage.removeItem(POPUP_STORAGE_KEY);
			return null;
		}
		if (Date.now() - parsed.dismissedAt > POPUP_HIDE_MS) {
			localStorage.removeItem(POPUP_STORAGE_KEY);
			return null;
		}
		return parsed;
	} catch (err) {
		return null;
	}
}

function saveIndustrySelection(industry) {
	localStorage.setItem(POPUP_STORAGE_KEY, JSON.stringify({
		industry: industry,
		dismissedAt: Date.now()
	}));
}

function savePopupDismissed() {
	localStorage.setItem(POPUP_STORAGE_KEY, JSON.stringify({
		dismissedAt: Date.now()
	}));
}

function getIndustryFromNavItem(navItem) {
	if (navItem.classList.contains('all')) return 'other';
	var industries = Object.keys(industryNavMap);
	for (var i = 0; i < industries.length; i++) {
		if (navItem.classList.contains(industryNavMap[industries[i]])) {
			return industries[i];
		}
	}
	return null;
}

function applyIndustryFromPopup(industry) {
	var navClass = industryNavMap[industry];
	if (!navClass) return;
	var navItem = document.querySelector('.hero_navData .nav_item.' + navClass);
	if (navItem) navItem.click();
}

function selectIndustryFromPopup(industry) {
	saveIndustrySelection(industry);
	applyIndustryFromPopup(industry);
	setPopupOpen(false);
}

function initPopupState() {
	var storedState = getStoredPopupState();
	if (storedState) {
		if (storedState.industry) {
			applyIndustryFromPopup(storedState.industry);
		}
		return;
	}
	setTimeout(function () {
		setPopupOpen(true);
	}, 1000);
}

function getFocusableInPopup() {
	var popup = document.querySelector('.spz_11015_popupOuter');
	if (!popup || popup.style.display === 'none') return [];
	var sel = 'a[href], area[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
	return Array.prototype.filter.call(popup.querySelectorAll(sel), function (el) {
		return el.offsetParent !== null || el === document.activeElement;
	});
}

function setupPopupFocusTrap() {
	if (setupPopupFocusTrap.initialized) return;
	setupPopupFocusTrap.initialized = true;

	document.addEventListener('focusin', function (e) {
		if (!document.body.classList.contains('spz_11015_popup_open')) return;
		var popup = document.querySelector('.spz_11015_popupOuter');
		if (!popup || !e.target || popup.contains(e.target)) return;
		var list = getFocusableInPopup();
		if (list.length) list[0].focus();
	}, true);

	document.addEventListener('keydown', function (e) {
		if (!document.body.classList.contains('spz_11015_popup_open') || e.key !== 'Tab') return;
		var popup = document.querySelector('.spz_11015_popupOuter');
		var list = getFocusableInPopup();
		if (!list.length) return;

		var first = list[0];
		var last = list[list.length - 1];
		var active = document.activeElement;

		if (!popup.contains(active)) {
			e.preventDefault();
			first.focus();
			return;
		}

		if (e.shiftKey && active === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && active === last) {
			e.preventDefault();
			first.focus();
		}
	});
}

function setPopupInert(node, isInert, excluded) {
	if (!node || excluded.indexOf(node) !== -1) return;
	if (excluded.some(function (item) { return item && node.contains(item); })) {
		Array.prototype.forEach.call(node.children, function (child) {
			setPopupInert(child, isInert, excluded);
		});
		return;
	}
	node.inert = isInert;
}

function applyPopupInert(isInert) {
	var popup = document.querySelector('.spz_11015_popupOuter');
	var consentBanner = document.querySelector('#consent-banner');
	var excluded = [popup, consentBanner];
	Array.prototype.forEach.call(document.body.children, function (child) {
		setPopupInert(child, isInert, excluded);
	});
}

function setPopupOpen(isOpen) {
	var popup = document.querySelector('.spz_11015_popupOuter');
	if (!popup) return;

	if (isOpen) {
		savedPopupScrollY = window.scrollY || window.pageYOffset || 0;
		document.body.style.top = '-' + savedPopupScrollY + 'px';
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';
		document.body.classList.add('spz_11015_popup_open');
		popup.style.display = 'flex';
		applyPopupInert(true);
		requestAnimationFrame(function () {
			var list = getFocusableInPopup();
			if (list.length) list[0].focus();
		});
	} else {
		document.body.classList.remove('spz_11015_popup_open');
		popup.style.display = 'none';
		applyPopupInert(false);
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.width = '';
		window.scrollTo(0, savedPopupScrollY);
	}
}

function injectPopup() {
	if (document.querySelector('.spz_11015_overlay')) return;
	document.body.insertAdjacentHTML('afterbegin', popupHTML());
	document.querySelector('.spz_11015_popupOuter').style.display = 'none';
	document.querySelectorAll('.spz_11015_popup .grid-wrapper .card').forEach(function (card) {
		card.setAttribute('tabindex', '0');
	});
	setupPopupFocusTrap();
}

function clickEvent() {
	document.addEventListener('click', function (event) {
		if (event.target.matches('.spz_demo_btn')) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
		const target = event.target;
		if (target.classList.contains('nav_item') && event.isTrusted) {
			var navIndustry = getIndustryFromNavItem(target);
			if (navIndustry) {
				saveIndustrySelection(navIndustry);
				if (document.body.classList.contains('spz_11015_popup_open')) {
					setPopupOpen(false);
				}
			}
		}
		if (target.classList.contains('nav_item') && !target.classList.contains('all')) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			document.body.classList.add('spz_industry_selected');
			document.querySelector('.form-col-container > p > strong').textContent = `Get a Demo`;
			// document.querySelector('.form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 button.mktoButton').innerHTML = `Submit`;
			document.querySelector('.quote-container .logos-wrapper + .spacer-wrapper + .columns-wrapper + .spacer-wrapper + .columns-wrapper + .spacer-wrapper + .columns-wrapper').insertAdjacentElement('afterend', document.querySelector('.quote-wrapper'));
		}
		if (target.classList.contains('nav_item') && target.classList.contains('construction')) {
			document.body.classList.add('construction');
			document.querySelector('main .form.has-content.grid-7-5 .content-col').innerHTML = `
				  <strong>Construction HR Software</strong>
					<h1 id="hr-software-so-you-can-focus-on-the-people-not-the-paperwork" data-testid="page-h1"><span>Automate HR</span> across <br> every job site </h1>
					<ul>
						<li><strong>Hiring.</strong> Post jobs. Track applicants. Streamline onboarding. Hire qualified workers 50% faster. Get all your sites fully staffed.</li>
						<li><strong>Payroll.</strong> Let employees track time via the app. Auto-adjust rates across roles, projects, and locations. </li>
						<li><strong>Compliance.</strong> Track certifications and training. Provide required compliance docs in the field. </li>
					</ul>
					<figure><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/construction_hr_software_1.webp" alt="Construction HR Software"></figure>
			`;
			document.querySelector('.form-col-container > p:nth-of-type(2)').innerHTML = `See how construction companies are <br> increasing workforce productivity.`;

			document.querySelector('.logos-wrapper').innerHTML = `
			<picture>
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_construction_mobile_1.webp">
				<source media="(max-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_construction_tablet_1.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_construction_desktop_1.webp" alt="Logos">
			</picture>
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper picture').innerHTML = `
				<source media="(max-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/heather_saxon__desktop.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/heather_saxon__desktop_1.webp" alt="Heather Saxon" loading="lazy">
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper .content').innerHTML = `
				<h3>Over $70k a year in time-savings on reporting alone</h3>
				<p>When people try to sell me on their HRIS, I’m like, ‘You guys will have to rip BambooHR out of my cold dead hands.’ Then I point out to them all the things that BambooHR can do that they can’t.”</p>
				<p class="byline">Heather Saxon | VP of Human Resources</p>
				<p class="byline">Rycon Construction</p>
			`;
		} else if (target.classList.contains('nav_item') && target.classList.contains('education')) {
			document.body.classList.add('education');
			document.querySelector('main .form.has-content.grid-7-5 .content-col').innerHTML = `
				  <strong>Education HR Software</strong>
					<h1 id="hr-software-so-you-can-focus-on-the-people-not-the-paperwork" data-testid="page-h1"><span>Automate HR</span> across <br> your institution </h1>
					<ul>
						<li><strong>Hiring.</strong> Post jobs. Track applicants. Send offer letters. Streamline onboarding. Hire top staff to provide the best education.</li>
						<li><strong>Management.</strong> Manage teachers, contractors, and support staff across locations. See substitute availability. Monitor performance. </li>
						<li><strong>Compliance.</strong> Track teacher certifications, licensing requirements, and training. Manage renewals. Get audit-ready reports. </li>
					</ul>
					<figure class="education"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/education_hr_software.webp" alt="Education HR Software"></figure>
			`;
			document.querySelector('.form-col-container > p:nth-of-type(2)').innerHTML = `See how education companies are <br> increasing institutional performance.`;

			document.querySelector('.logos-wrapper').innerHTML = `
			<picture>
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_education_mobile.webp">
				<source media="(max-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_education_tablet.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_education_desktop.webp" alt="Logos">
			</picture>
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper picture').innerHTML = `
				<source media="(max-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/angie_brinkley__desktop.webp   ">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/angie_brinkley__desktop_1.webp" alt="Angie Brinkley" loading="lazy">
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper .content').innerHTML = `
				<h3>50% less time to onboard employees</h3>
				<p>We're growing quickly, so having our processes automated is extremely helpful. The background checks, onboarding, and hiring make processes faster, which candidates appreciate.”</p>
				<p class="byline">Angie Brinkley | Human Resources Coordinator </p>
				<p class="byline">Stukent   </p>
			`;
		} else if (target.classList.contains('nav_item') && target.classList.contains('finance')) {
			document.body.classList.add('finance');
			document.querySelector('main .form.has-content.grid-7-5 .content-col').innerHTML = `
				  <strong>Finance HR Software</strong>
					<h1 id="hr-software-so-you-can-focus-on-the-people-not-the-paperwork" data-testid="page-h1"><span>Automate HR.</span> Drive <br>   efficiency & compliance  </h1>
					<ul>
						<li><strong>Hiring.</strong> Track applicants. Offer competitive compensation to attract top talent. Streamline onboarding with pre-built workflows. </li>
						<li><strong>Admin.</strong>  Track pay, bonuses, and benefits. Store employee data in one secure place. Set role-based approvals to reduce risk. </li>
						<li><strong>Compliance.</strong> Track accounting certifications. Manage records according to financial regulations. Generate audit-ready reports. </li>
					</ul>
					<figure class="finance"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/finance_hr_software.webp" alt="Finance HR Software"></figure>
			`;
			document.querySelector('.form-col-container > p:nth-of-type(2)').innerHTML = `See how finance companies are <br> reducing routine admin.`;

			document.querySelector('.logos-wrapper').innerHTML = `
			<picture>
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/wrap.webp">
				<source media="(max-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/wrap_1.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_finance.webp" alt="Logos">
			</picture>
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper picture').innerHTML = `
				<source media="(max-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/tawny_bartel__desktop.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/tawny_bartel__desktop_1.webp" alt="Tawny Bartel" loading="lazy">
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper .content').innerHTML = `
				<h3>98% reduced HR time</h3>
				<p>I have automations and workflows set up for everything. It's amazing because I can just set it and forget it. I don’t think anything compares to BambooHR—it’s not even close.”</p>
				<p class="byline">Tawny Bartel | President </p>
				<p class="byline">HOA Accounting Services  </p>
			`;
		} else if (target.classList.contains('nav_item') && target.classList.contains('healthcare')) {
			document.body.classList.add('healthcare');
			document.querySelector('main .form.has-content.grid-7-5 .content-col').innerHTML = `
				  <strong>Medical HR Software</strong>
					<h1 id="hr-software-so-you-can-focus-on-the-people-not-the-paperwork" data-testid="page-h1">Streamline healthcare <br> HR. <span>Reduce admin</span> </h1>
					<ul>
						<li><strong>Hiring.</strong> Post jobs with one click. Get pre-built onboarding packages. Fill critical positions faster.</li>
						<li><strong>Admin.</strong> Let clinical staff submit hours, request PTO, view benefits, and sign forms via the app. Reduce paperwork.</li>
						<li><strong>Compliance.</strong> Manage medical licenses and HIPAA training. Track specialty certifications. Renewal reminders.  </li>
					</ul>
					<figure class="healthcare"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/medical_hr_software_1.webp" alt="Healthcare HR Software"></figure>
			`;
			document.querySelector('.form-col-container > p:nth-of-type(2)').innerHTML = `See how healthcare companies are automating <br>  hiring, admin, and compliance. `;

			document.querySelector('.logos-wrapper').innerHTML = `
			<picture>
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_healthcare_mobile.webp">
				<source media="(max-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_healthcare_tablet.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/wrap_2.webp" alt="Logos">
			</picture>
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper picture').innerHTML = `
				<source media="(max-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/jacob_alsup__desktop.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/jacob_alsup__desktop_1.webp" alt="Jacob Alsup" loading="lazy">
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper .content').innerHTML = `
				<h3>Cut assessment time by 50%</h3>
				<p>I love being able to see all of the great data surrounding assessments and progress at a glance. [Before] It was so time consuming trying to pull this data from 20 different places.”</p>
				<p class="byline">Jacob Alsup | Director of Recruiting & Hiring</p>
				<p class="byline">Community Counseling Center  </p>
			`;
		} else if (target.classList.contains('nav_item') && target.classList.contains('manufacturing')) {
			document.body.classList.add('manufacturing');
			document.querySelector('main .form.has-content.grid-7-5 .content-col').innerHTML = `
				  <strong>Manufacturing HR Software</strong>
					<h1 id="hr-software-so-you-can-focus-on-the-people-not-the-paperwork" data-testid="page-h1"><span>Streamline HR </span> across <br> all your facilities </h1>
					<ul>
						<li><strong>Hiring.</strong> Post jobs. Track applicants. Streamline onboarding with checklists for specific roles. Get every facility fully staffed.</li>
						<li><strong>Time and payroll.</strong> Automate scheduling, time tracking, and rate adjustments. Run payroll faster. View attendance seasonal trends.</li>
						<li><strong>Compliance.</strong> Track certifications and renewals, incident reports, safety training, and OSHA requirements. Get reminders.  </li>
					</ul>
					<figure class="manufacturing"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/manufacturing_hr_software.webp" alt="Manufacturing HR Software"></figure>
			`;
			document.querySelector('.form-col-container > p:nth-of-type(2)').innerHTML = `See how manufacturing companies are <br> increasing production productivity.`;

			document.querySelector('.logos-wrapper').innerHTML = `
			<picture>
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_manufacturing_mobile_1.webp">
				<source media="(max-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_manufacturing_tablet_1.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_manufacturing_1.webp" alt="Logos">
			</picture>
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper picture').innerHTML = `
				<source media="(max-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/uriah_hansen__desktop.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/uriah_hansen__desktop_1.webp" alt="Uriah Hansen" loading="lazy">
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper .content').innerHTML = `
				<h3>90% faster payroll processing</h3>
				<p>Now I’m able to run payroll in just two hours on a Monday morning. BambooHR makes it so easy.”</p>
				<p class="byline">Uriah Hansen | Director of Human Resources</p>
				<p class="byline">Continental Manufacturing Chemist  </p>
			`;
		} else if (target.classList.contains('nav_item') && target.classList.contains('non_profit')) {
			document.body.classList.add('non_profit');
			document.querySelector('main .form.has-content.grid-7-5 .content-col').innerHTML = `
				  <strong>Nonprofit HR Software</strong>
					<h1 id="hr-software-so-you-can-focus-on-the-people-not-the-paperwork" data-testid="page-h1"><span>Automate nonprofit HR.</span>  <br> Reduce admin </h1>
					<ul>
						<li><strong>Hiring.</strong> Post jobs. Track applicants. Streamline onboarding. Hire volunteers and short-term staff whose skills align with your work.</li>
						<li><strong>Staff experience.</strong>  Monitor performance, engagement, and well-being using surveys. Identify top performers. Boost retention. </li>
						<li><strong>Compliance.</strong>  Track employee types, training, hours, benefits, and more. Meet union and compensation requirements. </li>
					</ul>
					<figure class="non_profit"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/nonprofit_hr_software.webp" alt="Nonprofit HR Software"></figure>
			`;
			document.querySelector('.form-col-container > p:nth-of-type(2)').innerHTML = `See how nonprofits are increasing <br>  productivity, while staying compliant.`;

			document.querySelector('.logos-wrapper').innerHTML = `
			<picture>
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_nonprofit_mobile_1.webp">
				<source media="(max-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_non_profit_tablet.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_nonprofit_hr_software.webp" alt="Logos">
			</picture>
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper picture').innerHTML = `
				<source media="(max-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/emily_white_hodge__desktop.webp ">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/emily_white_hodge__desktop_1.webp" alt="Emily White Hodge" loading="lazy">
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper .content').innerHTML = `
				<h3>37% reduced turnover</h3>
				<p>Last month our grant writer was asking me for a turnover rate, and I was able to give not just the rate, but also the narrative of how our turnover rate has gone down. That got us the grant.”</p>
				<p class="byline">Emily White Hodge | Director of HR and Operations</p>
				<p class="byline">New Moms  </p>
			`;
		} else if (target.classList.contains('nav_item') && target.classList.contains('technology')) {
			document.body.classList.add('technology');
			document.querySelector('main .form.has-content.grid-7-5 .content-col').innerHTML = `
				  <strong>Technology HR Software</strong>
					<h1 id="hr-software-so-you-can-focus-on-the-people-not-the-paperwork" data-testid="page-h1"><span>Automate HR.</span> Scale <br> teams. Reduce admin </h1>
					<ul>
						<li><strong>Hiring.</strong> Post jobs and track applicants. Streamline onboarding with pre-built checklists. Hire qualified workers faster. </li>
						<li><strong>Admin.</strong> Automate approvals and reminders. Monitor performance and engagement using surveys. Boost retention. </li>
						<li><strong>Data and reporting.</strong>  Sync with all your tech, including Microsoft, Google, and Okta. 40+ reports on PTO, retention, and more.  </li>
					</ul>
					<figure class="technology"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/technology_hr_software_1.webp" alt="Technology HR Software"></figure>
			`;
			document.querySelector('.form-col-container > p:nth-of-type(2)').innerHTML = `See how technology companies are <br>  hiring faster, saving time, and automating reporting.`;

			document.querySelector('.logos-wrapper').innerHTML = `
			<picture>
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_nonprofit_mobile_2.webp">
				<source media="(max-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_technology_tablet_1.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/logos_technology_1.webp" alt="Logos">
			</picture>
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper picture').innerHTML = `
				<source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/cristal_kelshaw__desktop.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bamboohr/11014/cristal_kelshaw__desktop_1.webp" alt="Cristal Kelshaw" loading="lazy">
			`;
			document.querySelector('#base .section.quote-container .quote-wrapper .content').innerHTML = `
				<h3>96% faster reporting</h3>
				<p>Helps me save time in my reporting process. The information is right there. A couple clicks, and it’s ready to go. It’s an <br> incredible time-saver for us.”</p>
				<p class="byline">Cristal Kelshaw | Head of People </p>
				<p class="byline">Anonyome Labs, Inc.</p>
			`;
		}
	});

	// 11015 click events

	document.querySelector('.spz_11015_popupOuter').addEventListener('click', (e) => {
		e.stopPropagation();
	});

	document.querySelector('.spz_11015_popupOuter button.close-btn').addEventListener('click', () => {
		savePopupDismissed();
		setPopupOpen(false);
	});

	document.querySelectorAll('.spz_11015_popup .grid-wrapper .card').forEach(function (tile) {
		tile.addEventListener('click', function () {
			tile.classList.add('selected');
			var industry = tile.getAttribute('data-industry');
			if (industry) selectIndustryFromPopup(industry);
		});
	});

}

function initTabsSectionHeight() {
	if (initTabsSectionHeight.initialized) return;

	var tabsSectionInterval = setInterval(function () {
		const tabChild = document.querySelectorAll('.spz_11015_v.onboarding .tabs-custom-wrapper .tabs-custom-content .child');

		if (tabChild.length === 4) {
			clearInterval(tabsSectionInterval);
			initTabsSectionHeight.initialized = true;

			const content = document.querySelector('.spz_11015_v.onboarding .tabs-custom-wrapper .tabs-custom-content');

			// Remove inline height from ALL children immediately
			tabChild.forEach(child => child.style.removeProperty('height'));

			const applyHeight = () => {
				const activeChild = content.querySelector('.child.active');
				if (activeChild) {
					// Remove inline height from ALL children on every switch
					tabChild.forEach(child => child.style.removeProperty('height'));
					content.style.height = activeChild.scrollHeight + 'px';
				}
			};

			const observer = new MutationObserver(applyHeight);

			if (content) {
				observer.observe(content, { subtree: true, attributeFilter: ['class'] });
				applyHeight();
			}
		}
	}, 100);
}

function init11015() {
	if (document.querySelector('body') && !document.querySelector('.spz_11015_v')) {
		document.querySelector('body').classList.add("spz_11015_v");
		heroBannerChanges();
		setTimeout(() => {
			secondSectionChanges();
			clickEvent();
			initPopupState();
		}, 100);
		awardSection();
		footerChanges();
		injectPopup();
		initTabsSectionHeight();
	}
}

waitForElement('main#base', function () {
	init11015();
});


(function () {
	//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

	// Set the value of the squeezePage variable as needed:
	// true  – if you are using a squeeze page (i.e., the page contains a form)
	// false – if you are not using a squeeze page (i.e., the page does not contain a form)
	// 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

	const squeezePage = true; // true / false / 'both'
	const expName = '11015'; //experiment name should be 1001, 1002, 1003 etc.
	const variantName = `#` + expName + `_variant`; //variantName should be _variant, _true_control etc.
	const clientDomain = '.bamboohr.com'; //domain should be .spiralyze.com

	console.log("squeezePage 11015", squeezePage);

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