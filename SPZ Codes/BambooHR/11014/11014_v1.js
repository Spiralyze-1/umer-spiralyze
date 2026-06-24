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
			'.spz_11014_v #base .section.quote-container .columns-wrapper.content-width-md h2#a-single-platform-where-everything-works-together'
		);

		if (heading) {
			heading.textContent = heading.textContent.replace('.', '');
		}

	}


	// Form Changes Started
	const formInterval11014 = setInterval(function () {
		if (document.querySelector('.form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoButtonRow')) {
			clearInterval(formInterval11014);
			document.querySelectorAll('.form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoFormRow input, .form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 .mktoFormRow select[name="Country"]').forEach(function (ele) {
				ele.closest('.mktoFormRow').classList.add('form-input-width50');
			});
		}
	}, 100);


	window.addEventListener('click', function () {
		const target = event.target;
		if (target.classList.contains('nav_item') && !target.classList.contains('all')) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			document.body.classList.add('spz_industry_selected');
			document.querySelector('.form-col-container > p > strong').textContent = `Get a Demo`;
			document.querySelector('.form-container.spz_hero_banner .form-wrapper form#mktoForm_1240 button.mktoButton').innerHTML = `Submit`;
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

	const heroNav = document.querySelector('.hero_nav');
	if(heroNav){
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
			baseSelector: '.spz_11014_v #base .section.quote-container .columns-wrapper .columns.columns-2-cols',
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

	const rightColImageInterval11014 = setInterval(function () {
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
			const quotePicture = document.querySelector('.spz_11014_v #base .section.quote-container .quote-wrapper picture');
			if (quotePicture && !quotePicture.hasAttribute('data-spz-replaced')) {
				quotePicture.innerHTML = `<source media="(max-width: 768px)" srcset="${currentConfig.quoteImage.mobileSrc}">
                  <img src="${currentConfig.quoteImage.desktopSrc}" alt="${currentConfig.quoteImage.alt}" loading="lazy">`;
				quotePicture.setAttribute('data-spz-replaced', 'true');
			}
		}

		// Clear interval when elements are found or modified
		if (imagesReplaced || columns.length > 0) {
			clearInterval(rightColImageInterval11014);
		}

	}, 100);
}

function awardSection() {
	if (document.querySelectorAll('.spz_award_section').length === 0) {
		document.querySelector('.spz_11014_v #base .awards-container.reviews-container').insertAdjacentHTML('afterend', `<section class="spz_award_section">
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
	const footerInterval11014 = setInterval(function () {
		const brand = document.querySelector('.footer .links');
		const legal = document.querySelector('.footer .legal');

		if (brand && legal) {
			clearInterval(footerInterval11014);
			const wrapper = document.createElement('div');
			wrapper.className = 'footer_links';

			brand.parentNode.insertBefore(wrapper, brand);
			wrapper.appendChild(brand);
			wrapper.appendChild(legal);
		}

	}, 100);

	const footerLogoInterval = setInterval(function () {
		if (document.querySelectorAll('.spz_11014_v footer.footer-limited .brand .footer_logo').length === 0) {
			const brandElement = document.querySelector('.spz_11014_v footer.footer-limited .brand');

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

function clickEvent() {
	document.addEventListener('click', function (event) {
		if (event.target.matches('.spz_demo_btn')) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	});
}

const tabSectionInterval = setInterval(function () {
	const tabChild = document.querySelectorAll('.spz_11014_v.onboarding .tabs-custom-wrapper .tabs-custom-content .child');

	if (tabChild.length === 4) {
		clearInterval(tabSectionInterval);

		const content = document.querySelector('.spz_11014_v.onboarding .tabs-custom-wrapper .tabs-custom-content');

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

const bodyInterval11014 = setInterval(function () {
	if (document.querySelector('body') && !document.querySelector('.spz_11014_v')) {
		clearInterval(bodyInterval11014)
		document.querySelector('body').classList.add("spz_11014_v");
		heroBannerChanges();
		setTimeout(() => {
			secondSectionChanges();
			clickEvent();
		}, 100);
		awardSection();
		footerChanges();


		const expName = '#11014'; //experiment name should be #1001, #1002, #1003 etc.
		const variantName = expName + `_variant`; //variantName should be _V1, _V2, _TC etc.
		const clientDomain = '.bamboohr.com'; //domain should be .bamboohr.com

		hiddenValue(expName, variantName);

		/***********************************
		************************************
		DO NOT TOUCH
		BEYOND THIS LINE
		******************************
		************************/
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
}, 10);