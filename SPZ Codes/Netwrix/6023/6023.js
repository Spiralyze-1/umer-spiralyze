const GLOBAL_BODY_CLASS = 'spz_6012_v';

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
            url: 'https://netwrix.com/en/products/auditor/',
            title: 'Auditor <span class="spz__no-wrap">In-Browser Demo</span>',
            heading: 'See Auditor in action',
            key: 'auditor-page',
        },
        {
            url: 'https://netwrix.com/en/products/access-analyzer/',
            title: 'Access Analyzer <span class="spz__no-wrap">In-Browser Demo</span>',
            heading: 'See Access Analyzer in action',
            key: 'access-analyzer-page',
        },
        {
            url: 'https://netwrix.com/en/products/endpoint-protector/',
            title: 'Endpoint Protector <span class="spz__no-wrap">In-Browser Demo</span>',
            heading: 'See Endpoint Protector in action',
            key: 'endpoint-protector-page',
        },
        {
            url: 'https://netwrix.com/en/products/privilege-secure/',
            title: 'Privilege Secure <span class="spz__no-wrap">In-Browser Demo</span>',
            heading: 'See Privilege Secure in action',
            key: 'privilege-secure-page',
        },
        {
            url: 'https://netwrix.com/en/products/identity-manager/',
            title: 'Identity Manager <span class="spz__no-wrap">In-Browser Demo</span>',
            heading: 'See Identity Manager in action',
            key: 'identity-manager-page',
        },
        {
            url: 'https://netwrix.com/en/products/data-classification/',
            title: 'Data Classification <span class="spz__no-wrap">In-Browser Demo</span>',
            heading: 'See Data Classification in action',
            key: 'data-classification-page',
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

    document.querySelectorAll('h2.c--layout-a__title').forEach(function (h2Title) {
        const miniTitleText = h2Title.textContent;
        if (miniTitleText === 'Capabilities') {
            h2Title.closest('section').classList.add('spz_6012_target');
            if (document.querySelectorAll('.spz_tour_on_Page').length === 0) {
                h2Title.closest('section').insertAdjacentHTML('beforebegin', `<section class="spz_tour_on_Page">
                    <h2 class="spz_tour_onPage_title">${heading}</h2>
                    <button class="spz_form_trigger_button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M30.2286 16.0698L4.12695 31.1396V1L30.2286 16.0698Z" fill="#5851DB" ></path>
                        </svg>
                        <span class="spz_btn">See in-browser demo</span>
                    </button>
                    <div class="spz_form_wrapper">
                        <div class="spz_form_wrapper_inner hide">
                            <h2 class="spz_form1310_title">${title}</h2>
                            <form class="mktoForm spz_form1310" id="mktoForm_1310"></form>
                        </div>
                    </div>
                    </section>`);
            }
        }
    });

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


    const newBtnInterval = setInterval(function () {
        if (document.querySelectorAll('body.spz_6012_v .spz_form_trigger_button').length > 0) {
            clearInterval(newBtnInterval);
            document.querySelector('body.spz_6012_v .spz_form_trigger_button').addEventListener('click', function (e) {
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

                setHiddenField();

                // Move email field below the first & last name
                const moveFieldsInterval = setInterval(function () {
                    if (document.querySelector('form.spz_form1310 [data-wrapper="Email"] + [data-wrapper="FirstName LastName"]')) {
                        clearInterval(moveFieldsInterval);
                        const emailField = document.querySelector('form.spz_form1310 [data-wrapper="Email"]');
                        const firstLastName = document.querySelector('form.spz_form1310 [data-wrapper="FirstName LastName"]');

                        if (emailField && firstLastName) {
                            emailField.insertAdjacentElement('beforebegin', firstLastName);
                            emailField.querySelector('input').setAttribute('placeholder', 'Work Email');
                            firstLastName.querySelector('[data-wrapper="FirstName"] input').setAttribute('placeholder', 'First Name');
                            firstLastName.querySelector('[data-wrapper="LastName"] input').setAttribute('placeholder', 'Last Name');
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

                form.onSubmit(() => {
                    if (undefined && undefined != undefined && undefined != 'undefined') {
                        form.addHiddenFields({ "Product__c": undefined })
                    } else if ('Netwrix Auditor' && 'Netwrix Auditor' != undefined && 'Netwrix Auditor' != 'undefined') {
                        form.addHiddenFields({ "Product__c": 'Netwrix Auditor' })
                    } else if ('Netwrix Data Classification' && 'Netwrix Data Classification' != undefined && 'Netwrix Data Classification' != 'undefined') {
                        form.addHiddenFields({ "Product__c": 'Netwrix Data Classification' })
                    } else if ('Endpoint Management' && 'Endpoint Management' != undefined && 'Endpoint Management' != 'undefined') {
                        form.addHiddenFields({ "Product__c": 'Endpoint Management' })
                    } else if ('Netwrix Access Analyzer' && 'Netwrix Access Analyzer' != undefined && 'Netwrix Access Analyzer' != 'undefined') {
                        form.addHiddenFields({ "Product__c": 'Netwrix Access Analyzer' })
                    } else if ('Netwrix Privilege Secure' && 'Netwrix Privilege Secure' != undefined && 'Netwrix Privilege Secure' != 'undefined') {
                        form.addHiddenFields({ "Product__c": 'Netwrix Privilege Secure' })
                    } else if ('Netwrix Identity Manager' && 'Netwrix Identity Manager' != undefined && 'Netwrix Identity Manager' != 'undefined') {
                        form.addHiddenFields({ "Product__c": 'Netwrix Identity Manager' })
                    }

                    if ("Comprehensive IT Audit Software | Netwrix" && "Comprehensive IT Audit Software | Netwrix" != undefined && "Comprehensive IT Audit Software | Netwrix" != 'undefined') {
                        form.addHiddenFields({ "pageTitle": "Comprehensive IT Audit Software | Netwrix" })
                    } else if ("Data Classification Software | Netwrix " && "Data Classification Software | Netwrix " != undefined && "Data Classification Software | Netwrix " != 'undefined') {
                        form.addHiddenFields({ "pageTitle": "Data Classification Software | Netwrix " })
                    } else if ("Endpoint DLP Solution | Netwrix" && "Endpoint DLP Solution | Netwrix" != undefined && "Endpoint DLP Solution | Netwrix" != 'undefined') {
                        form.addHiddenFields({ "pageTitle": "Endpoint DLP Solution | Netwrix" })
                    } else if ("Data Protection Software | Netwrix" && "Data Protection Software | Netwrix" != undefined && "Data Protection Software | Netwrix" != 'undefined') {
                        form.addHiddenFields({ "pageTitle": "Data Protection Software | Netwrix" })
                    } else if ("Privileged Access Management (PAM) Software | Netwrix" && "Privileged Access Management (PAM) Software | Netwrix" != undefined && "Privileged Access Management (PAM) Software | Netwrix" != 'undefined') {
                        form.addHiddenFields({ "pageTitle": "Privileged Access Management (PAM) Software | Netwrix" })
                    } else if ("Identity Governance & Administration (IGA) Solutions | Netwrix" && "Identity Governance & Administration (IGA) Solutions | Netwrix" != undefined && "Identity Governance & Administration (IGA) Solutions | Netwrix" != 'undefined') {
                        form.addHiddenFields({ "pageTitle": "Identity Governance & Administration (IGA) Solutions | Netwrix" })
                    }

                    if (undefined && undefined != undefined && undefined != 'undefined') {
                        form.addHiddenFields({ temporaryDownloadLink: undefined })
                    }
                })

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
                        'endpoint-protector': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/915984f1-ed5c-4d87-af6e-2f7814c4bedf?valid=856c0746-01f8-44a5-a697-c6df1af054bf&isEmbedded=true"></iframe>',

                        'access-analyzer': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/a19626c9-bdf8-4562-824e-f613b446a356?valid=d33b110b-430b-4856-9de1-9cfc29fa8203&isEmbedded=true"></iframe>',

                        'identity-manager': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/usercube-overview?valid=87ad68fa-b836-4e44-9abc-2d12f4306d68&isEmbedded=true"></iframe>',

                        'data-classification': '<iframe allowfullscreen="" style="display: block; position: absolute; min-height: 100%; min-width: 100%; padding: 0; margin: 0;" frameborder="0" scrolling="no" id="tourial-desktop-iframe" src="https://netwrix.tourial.com/eec1d96e-1e3f-4638-8ada-d2b3b869ad73?valid=7bd8a890-5d38-48cb-be79-10f255610cb0&isEmbedded=true"></iframe>'
                    };

                    // Check current page and handle accordingly
                    const currentPath = window.location.pathname;
                    let showIframe = false;
                    let iframeHTML = '';

                    // Check if current page should show iframe
                    if (currentPath.includes('/products/endpoint-protector/')) {
                        showIframe = true;
                        iframeHTML = iframeConfigs['endpoint-protector'];
                    } else if (currentPath.includes('/products/access-analyzer/')) {
                        showIframe = true;
                        iframeHTML = iframeConfigs['access-analyzer'];
                    } else if (currentPath.includes('/products/identity-manager/')) {
                        showIframe = true;
                        iframeHTML = iframeConfigs['identity-manager'];
                    } else if (currentPath.includes('/products/data-classification/')) {
                        showIframe = true;
                        iframeHTML = iframeConfigs['data-classification'];
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

                        // Hide the form wrapper
                        const formWrapper = document.querySelector('.spz_form_wrapper');
                        if (formWrapper) {
                            formWrapper.style.display = 'none';
                        }

                        // Hide the title
                        const tourTitle = document.querySelector('.spz_tour_onPage_title');
                        if (tourTitle) {
                            tourTitle.style.display = 'none';
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
                        if ('https://netwrix.com/en/products/auditor/all-demos/?valid=5b78e096-d50b-4595-b3af-00046012389e') {
                            window.location.href = 'https://netwrix.com/en/products/auditor/all-demos/?valid=5b78e096-d50b-4595-b3af-00046012389e'
                        } else if ('https://netwrix.com/en/products/data-classification/online-demo/?valid=7a2c79a2-37fe-4e51-a208-e3b1b24364be') {
                            window.location.href = 'https://netwrix.com/en/products/data-classification/online-demo/?valid=7a2c79a2-37fe-4e51-a208-e3b1b24364be'
                        } else if ('https://netwrix.com/en/products/endpoint-protector/online-demo/?valid=14a5a37e-9069-490c-a485-450b843f08b9') {
                            window.location.href = 'https://netwrix.com/en/products/endpoint-protector/online-demo/?valid=14a5a37e-9069-490c-a485-450b843f08b9'
                        } else if ('https://netwrix.com/en/products/access-analyzer/online-demo/?valid=14a5a37e-9069-490c-a485-450b843f08b9') {
                            window.location.href = 'https://netwrix.com/en/products/access-analyzer/online-demo/?valid=14a5a37e-9069-490c-a485-450b843f08b9'
                        } else if ('https://netwrix.com/en/products/privilege-secure/all-demos/?valid=d9c5d442-66da-4159-a81b-d2777b44cbf6') {
                            window.location.href = 'https://netwrix.com/en/products/privilege-secure/all-demos/?valid=d9c5d442-66da-4159-a81b-d2777b44cbf6'
                        } else if ('https://netwrix.com/en/products/identity-manager/online-demo/?valid=5d651048-646e-4004-8176-59539daea46e') {
                            window.location.href = 'https://netwrix.com/en/products/identity-manager/online-demo/?valid=5d651048-646e-4004-8176-59539daea46e'
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
    const expName = '6023'; //experiment name should be 1001, 1002, 1003 etc.
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
        if (!document.body.classList.contains('spz_6012_spa_observed')) document.body.classList.add('spz_6012_spa_observed');
        const currentPageData = getPageData();
        if (currentPageData) {
            injectVariant6012(currentPageData);
        } else {
            if (document.body.classList.contains(GLOBAL_BODY_CLASS)) {
                document.body.classList.remove(GLOBAL_BODY_CLASS);
                document.body.classList.remove(injectBrowserClass());
            }
        }
    });
    if (!document.body.classList.contains(`spz_6012_spa_observed`)) {
        spaObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });
        document.body.classList.add(`spz_6012_spa_observed`);
    }
});
