localStorage.setItem('bdcAbTest11','12001-v1');

function spz12001() {
    if (!document.querySelector('body').classList.contains('spz_12001_v')) {
        document.querySelector('body').classList.add('spz_12001_v');
        document.querySelector('body').classList.add('spz_12001_v1');

        // Slider code
        const loadJS =(url, implementationCode, location)=>{
            var scriptTag = document.createElement('script');
            scriptTag.src = url;
            scriptTag.onload = implementationCode;
            scriptTag.onreadystatechange = implementationCode;
            location.appendChild(scriptTag);
        };

        const gb_load_css=(path)=> {
            let css = document.createElement('link');
            css.rel = 'stylesheet';
            css.media = 'all';
            css.href = path;
            document.getElementsByTagName('head')[0].appendChild(css);
        }

        gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");

        document.querySelector('#formjumplink').insertAdjacentHTML('afterend', `
            <section class="hero_wrapper">
                <header>
                    <div class="container-large w-container">
                        <div class="wrapper">
                            <div class="left">
                                <a href="/">
                                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1770640010/bill/11007/primary_logo.svg"
                                        alt="BILL Logo" width="49" height="32">
                                </a>
                                <div class="border"></div>
                                <div class="rating">
                                    <div>
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1773678432/bill/11007/g2_logosvg.svg"
                                            width="32" height="32" alt="G2 Logo">
                                    </div>
                                    <div>
                                        <div class="rating-stars">
                                            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1773678432/bill/11007/rating--4-5_1.svg"
                                                alt="Rating Star Logo" width="80" height="16">
                                            <span>4.5</span>
                                        </div>
                                        <div class="rating-text">3900+ Reviews</div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <a class="button w-button cta" href="javascript:;">Get Started</a>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="hero_section">
                    <div class="vertical-padding-large container-large w-container">
                        <div class="hero_background">
                            <div class="hero_content">
                                <div class="hero_left">
                                    <div class="eyeBroText">Online invoicing platform</div>
                                    <h1>Streamline every step of&nbsp;invoicing</h1>
                                    <ul>
                                        <li><strong>Invoice builder.</strong> Generate bulk invoices in minutes. Send via email. Auto-include contracts and customer documents.</li>
                                        <li><strong>Payments.</strong> Let clients pay via ACH, credit, wire, and more. Accept recurring payments. Automated reminders.</li>
                                        <li><strong>Integrations.</strong> Two-way sync with QuickBooks, QuickBooks Online, Xero, and Intacct. Avoid manual double-entry.</li>
                                    </ul>
                                </div>
                                <div class="hero_right">
                                </div>
                            </div>
                            <div class="hero_image_wrapper">
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/hero_image.webp" alt="Invoice Interface">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="logo-section">
                <div class="wrapper">
                    <div class="title">Trusted by 100,000+ businesses</div>
                    <div class="splide hero-slider">
                        <div class="splide__track">
                            <ul class="splide__list">
                                <li class="splide__slide">
                                    <div class="img-wrapper">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-blackstone.svg" alt="Blackstone Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-kiwico.svg" alt="KiwiCo Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-wag.svg" alt="Wag! Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-qualtrics.svg" alt="Qualtrics XM Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-bakertily.svg" alt="Baker Tilly Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-bearrobotics.svg" alt="Bear Robotics Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-noom.svg" alt="Noom Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-utah_jass.svg" alt="Utah Jazz Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-bare_bones.svg" alt="Bare Bones Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-chatbooks.svg" alt="Chatbooks Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-cuts.svg" alt="Cuts Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-marine_layer.svg" alt="Marine Layer Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-quicken.svg" alt="Quicken Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-cla.svg" alt="CLA Logo" width="100" height="40">
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="img-wrapper">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-blackstone.svg" alt="Blackstone Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-kiwico.svg" alt="KiwiCo Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-wag.svg" alt="Wag! Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-qualtrics.svg" alt="Qualtrics XM Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-bakertily.svg" alt="Baker Tilly Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-bearrobotics.svg" alt="Bear Robotics Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-noom.svg" alt="Noom Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-utah_jass.svg" alt="Utah Jazz Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-bare_bones.svg" alt="Bare Bones Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-chatbooks.svg" alt="Chatbooks Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-cuts.svg" alt="Cuts Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-marine_layer.svg" alt="Marine Layer Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-quicken.svg" alt="Quicken Logo" width="100" height="40">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo-cla.svg" alt="CLA Logo" width="100" height="40">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="features-section">
                <div class="vertical-padding-large container-large w-container">
                    <div class="title-wrapper">
                        <h2>Features</h2>
                        <p>All-in-one platform for creating, sending, and tracking invoices</p>
                    </div>
                    <div class="features-wrapper">
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <h3>Invoice builder</h3>
                                <p>Generate bulk invoices in minutes. Pre-built templates. Customize with your&nbsp;branding.</p>
                            </div>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/image-invoice_builder.webp" alt="Invoice Builder">
                        </div>
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <h3>Flexible delivery</h3>
                                <p>Deliver invoices via email. Send immediately or schedule a future&nbsp;date.</p>
                            </div>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/image-flexible_delivery.webp" alt="Flexible delivery">
                        </div>
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <h3>Tracking & visibility</h3>
                                <p>Track invoices and payment statuses in one dashboard. Filter and monitor&nbsp;receivables.</p>
                            </div>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/image-tracking_n_visibility.webp" alt="Tracking & visibility">
                        </div>
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <h3>Payments</h3>
                                <p>Let clients pay via ACH, credit, wire, and more. Accept recurring&nbsp;payments.</p>
                            </div>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/image-payments.webp" alt="Payments">
                        </div>
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <h3>Automated reminders</h3>
                                <p>Send clients automated payment reminders. Collect revenue faster. No forgotten&nbsp;invoices.</p>
                            </div>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/image-automated_reminders.webp" alt="Automated reminders">
                        </div>
                        <div class="feature-card">
                            <div class="feature-card-header">
                                <h3>2-way accounting sync</h3>
                                <p>Sync invoices with QuickBooks. QuickBooks Online, Xero, and Intacct. Avoid double-entry.</p>
                            </div>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/image-accounting_sync.webp" alt="2-way accounting sync">
                        </div>
                    </div>
                    <div class="expand-feature-card-wrapper">
                        <a href="javascript:;" class="expand-feature-card">Show more</a>
                    </div>
                    <div class="cta-wrapper">
                        <a href="javascript:;" class="button w-button cta">Get Started</a>
                    </div>
                </div>
            </section>
            <section class="bottom_form">
                <div class="vertical-padding-large container-large w-container">
                    <div class="title">Join over 100,000 businesses that trust BILL</div>
                    <div class="fake-email-form-wrapper">
                        <input class="fake-email-input spz_12001_footer_email" maxlength="256"  placeholder="Work Email" type="email" required="">
                        <button class="button w-button cta spz_12001_footer_cta">Get Started</button>
                    </div>
                    <div class="text-size-tiny">By continuing, you agree to BILL's <a href="https://www.bill.com/legal/terms-of-service">Terms of Service</a> and <a href="https://www.bill.com/privacy">Privacy Notice</a>.</div>
                    <div class="splide case-study-slider">
                        <div class="splide__track">
                            <ul class="splide__list">
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo__network.svg" alt="Network logo" width="92">
                                        <span>90%</span>
                                        <small>Reduced payment <br> processing time</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo__ccs.svg" alt="Chattanooga Christian School logo" width="35">
                                        <span>25%</span>
                                        <small>Less time spent <br> on Accounts Payable</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/logo__rubino.webp" alt="Rubino logo" width="89">
                                        <span>270+</span>
                                        <small>Hrs/mo saved on <br> invoice processing</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo__tower-28-beauty.svg" alt="Tower 28 Beauty logo" width="106">
                                        <span>40</span>
                                        <small>Hrs per week saved <br>on Accounts Payable</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo__promtet.svg" alt="Protomet logo" width="60">
                                        <span>80%</span>
                                        <small>Less time spent on <br> expense reporting</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/logo__maccounting.webp" alt="MAccounting logo" width="93">
                                        <span>40%</span>
                                        <small>Less time on <br>approvals</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/logo__fairwave.webp" alt="Fairwave logo" width="95">
                                        <span>2x</span>
                                        <small>Financial operations <br> efficiency</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo__jump.svg" alt="Jump logo" width="65">
                                        <span>75%</span>
                                        <small>Less time on <br> reimbursements</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo__renewal.svg" alt="Renewal logo" width="89">
                                        <span>70%</span>
                                        <small>Less time spent <br> on reconciliation</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo__ted.svg" alt="TED logo" width="50">
                                        <span>60%</span>
                                        <small>Less time on Accounts <br> Payable processing</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775122613/bill/12001/logo__mcc.svg" alt="MCC logo" width="49">
                                        <span>100</span>
                                        <small>Entities managed with <br> one AP clerk</small>
                                    </div>
                                </li>
                                <li class="splide__slide">
                                    <div class="case-study-item">
                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/12001/logo__supporting-strategies.webp" alt="Supporting Strategies logo" width="89">
                                        <span>50%</span>
                                        <small>Reduction in bill <br> payment time</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
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

        var formWrapper = document.querySelector('.form-signup').parentElement;
        document.querySelector('.hero_right').appendChild(formWrapper);

        document.querySelector('.form-signup form h2').textContent = 'Free Trial';
        document.querySelector('.form-signup form h2').insertAdjacentHTML('afterend', '<p class="text-align-center">Create & send invoices in seconds.</p>');

        // slider logic
        loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function(){
            loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js', function(){
                var logoSection = new Splide('.hero-slider', {
                    type   : 'loop',
                    autoWidth: true,
                    arrows: false,
                    pagination: false,
                    drag: false,
                    autoScroll: {
                        speed: 0.4, // adjust if needed
                        pauseOnHover: false,
                        pauseOnFocus: false,
                    },
                });

                var caseStudySection = new Splide('.case-study-slider', {
                    type: 'loop',
                    autoWidth: true,
                    arrows: false,
                    pagination: false,
                    drag: false,
                    autoScroll: {
                        speed: 0.4, // 👈 adjust this (0.5 - 2 is ideal)
                        pauseOnHover: false,
                        pauseOnFocus: false,
                    },
                });

                logoSection.mount(window.splide.Extensions);
                caseStudySection.mount(window.splide.Extensions);
            }, document.body);
        }, document.body);

        // Expand features section
        document.querySelector('.expand-feature-card').addEventListener('click', function() {
            const featuresWrapper = document.querySelector('.features-wrapper');
            featuresWrapper.classList.add('expanded');
            this.parentElement.style.display = 'none';
        });

        // sticky header logic
        window.addEventListener('scroll', function () {
            // header
            if (window.scrollY > 0) {
                if (!document.querySelector('header.sticky')) {
                    document.querySelector('header').classList.add('sticky')
                }
            } else {
                if (document.querySelector('header.sticky')) {
                    document.querySelector('header').classList.remove('sticky')
                }
            }
        });

        // form logic
        var getBtn = setInterval(() => {
            const form = document.querySelector('.form-signup form');

            if (form && form.querySelector('.submit-button')) {
                clearInterval(getBtn);

                // Button text change
                form.querySelector('.submit-button').setAttribute('value', 'Instant Access');
                form.querySelector('.submit-button').classList.remove('button-signup-2');
                form.querySelector('.submit-button').classList.add('button');

                // selectBox labels
                document.querySelector('select#signupType').insertAdjacentHTML('beforebegin',`<label>Business Type</label>`);
                document.querySelector('select#accountingSoftware').insertAdjacentHTML('beforebegin',`<label>Which accounting software do you use?</label>`);
                
                if(document.querySelector('#businessTypeContainer #signupType').value != 'direct') {
                    document.querySelector('select#accountingSoftware').parentElement.classList.add('hide');
                }

                // add Wrapper div to "#msDynamicsOption"
                const msDynamicsOption = document.querySelector('#msDynamicsOption');
                const wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add('form-option-fields');
                wrapperDiv.classList.add('form-dropdown');
                msDynamicsOption.parentNode.insertBefore(wrapperDiv, msDynamicsOption);
                wrapperDiv.appendChild(msDynamicsOption);
                msDynamicsOption.insertAdjacentHTML('beforeBegin', `<label>Select your MS Dynamics solution:</label>`);



                // Rearrange name and email fields
                document.querySelector('#email').closest('.form-field-columns').after(document.querySelector('#name').closest('.form-field-columns'));

                // Focus and blur event for form fields
                // Run below code on page load as well to accomodate autofill values and labels.

                const fields = form.querySelectorAll('.form-field, .select-field');

                fields.forEach(field => {
                    const label = field.getAttribute('placeholder');
                    if (label) {
                        const labelElement = document.createElement('label');
                        labelElement.textContent = label;
                        labelElement.setAttribute('for', field.id);

                        if (labelElement.textContent === 'Phone') {
                            labelElement.textContent = 'Phone Number';
                        }
                        if (labelElement.textContent === 'Number Of Employees') {
                            labelElement.textContent = 'Number of Employees';
                        }

                        field.parentNode.insertBefore(labelElement, field);
                        field.removeAttribute('placeholder');
                    }

                    function handleFieldState(el) {
                        const row = el.closest('.form-field-columns, .form-option-fields, .form-dropdown');
                        const value = el.value?.trim();

                        if (row) {
                            if (!value) {
                                row.classList.remove("focused", "typing");
                            } else {
                                row.classList.add("focused");
                                row.classList.remove("typing");
                            }
                        }
                    }

                    // Events
                    field.addEventListener("focus", function () {
                        const row = this.closest('.form-field-columns, .form-option-fields, .form-dropdown');
                        if (row) {
                            row.classList.add("focused", "typing");
                        }
                    });

                    field.addEventListener("blur", function () {
                        handleFieldState(this);
                    });

                    // ✅ Run on page load
                    handleFieldState(field);
                });
            }
        }, 100);

        // CTA button logic
        function scrollToForm() {
            const ctas = document.querySelectorAll('.cta');
            const target = document.querySelector('.hero_right');

            ctas.forEach(cta => {
                cta.addEventListener('click', function (e) {
                    e.preventDefault();

                    // 👉 Email handling
                    const emailInput = document.querySelector('.fake-email-input');
                    const email = emailInput ? emailInput.value.trim() : '';

                    if (email) {
                        const mainEmailInput = document.querySelector('.form-signup form #email');
                        if (mainEmailInput) {
                            mainEmailInput.value = email;
                            mainEmailInput.dispatchEvent(new Event('input', { bubbles: true }));
                            setTimeout(() => {
                                mainEmailInput.focus();
                            }, 800);
                        }
                    }

                    // 👉 Smooth scroll
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                });
            });


            // fake-email-input should trigger on enter key as well
            const fakeEmailInput = document.querySelector('.fake-email-input');
            if (fakeEmailInput) {
                fakeEmailInput.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter' && this.value.trim()) {
                        e.preventDefault();
                        const ctaButton = document.querySelector('.fake-email-form-wrapper .cta');
                        if (ctaButton) {
                            ctaButton.click();
                        }
                    }
                });
            }
        }

        scrollToForm();

        // Need to hide all div and section from '.footer_black' to the end of '.footer-minimal' using javascript.
        const footerBlack = document.querySelector('.footer_black');
        if (footerBlack) {
            let nextElement = footerBlack.nextElementSibling;

            while (nextElement && !nextElement.classList.contains('footer-minimal')) {
                nextElement.style.display = 'none';
                nextElement = nextElement.nextElementSibling;
            }

            // Optional: also hide the .footer-minimal itself
            if (nextElement && nextElement.classList.contains('footer-minimal')) {
                nextElement.style.display = 'none';
            }
        }
    }
}

spz12001();
