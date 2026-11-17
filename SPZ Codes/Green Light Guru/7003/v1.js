/* #7003 | Greenlight Guru | Resource Thank You | Form Center-Aligned (sliding) */
(function () {
    "use strict";

    /* ============ CONFIG ============ */
    const CONFIG = {
        testId: "7003",
        bodyClass: "spz_7003_v",
        revealBodyClass: "spz_7003_form_reveal",
        section: "spz-7003-section",
        url: ["/ty-resources", "/2025-qms-webinar-thank-you-ty-page"],
        injectSelector: "main>span>div:first-child",
        injectPosition: "afterend",
        formWrapper: ".form-wrapper",
        domain: ".greenlight.guru",
        inputSel: "input.hs-input, select.hs-input, textarea.hs-input",
        submitText: "SUBMIT",
        emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        track: { name: "spz_7003", value: "spz_7003_variant" }
    };

    const FIELD_LABELS = {
        hs_email: "Work Email",
        hs_firstname: "First Name",
        hs_lastname: "Last Name",
        hs_phone: "Phone",
        hs_dropdown_country: "Country",
        hs_company: "Company Name",
        hs_what_describes_your_organization_best_: "Organization Type",
        hs_demo_product_dropdown: "Choose Software for Demo",
        hs_canadian_province: "Province",
        hs_us_state: "State",
        hs_are_you_planning_a_clinical_study__registry__or_a_survey_: "Are you planning a clinical study, registry, or a survey?",
        hs_number_of_products_to_market: "Number of products to market",
        hs_what_types_of_products_does_your_pharmaceutical_company_develop_: "What types of products does your pharmaceutical company develop?",
        hs_what_is_your_role_at_your_academic_institution_: "What is your role at your academic institution?"
    };

    const ERROR_MESSAGES = {
        email: "Please enter a valid email address."
    };

    const A = "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/7003/";
    const ICON = "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1782477406/greenlightguru/7003/heading_3.svg";

    const LOGOS = [
        ["logo-1", "Canterbury Scientific"],
        ["logo-2", "MediView"],
        ["logo-3", "Sonavex"],
        ["logo-4", "Astrego Diagnostics"],
        ["logo-5", "C2Dx"],
        ["logo-6", "Milliken"],
        ["logo-7", "Zyris"],
        ["logo-8", "GlucoSet"],
        ["logo-9", "EndoWave"],
        ["logo-10", "PhotoniCare"],
        ["logo-11", "Puzzle Medical Devices"]
    ];

    const SECTION_HTML = `
        <section class="spz-7003-section" data-spz-page="ty-resources">
          <div class="spz-7003-hero">
            <picture class="spz-7003-bg">
              <source media="(max-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/7003/background_webp_3.webp">
              <source media="(max-width: 1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/7003/background_webp_2.webp">
              <source media="(min-width: 1620px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/7003/background_webp.webp">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/7003/background_webp_1.webp" alt="" aria-hidden="true">
            </picture>
            <div class="spz-7003-content">
              <div class="spz-7003-head">
                <div class="spz-7003-thanks">
                  <img class="spz-7003-thanks-icon" src="${ICON}" alt="Envelope icon" aria-hidden="true">
                  <span class="spz-7003-thanks-text">Thank you! Check your inbox for the material you requested</span>
                </div>
                <div class="spz-7003-headings">
                  <h2 class="spz-7003-title">Looking to learn more?</h2>
                  <p class="spz-7003-subtitle">See how to improve speed and compliance across the entire medical device lifecycle.</p>
                </div>
              </div>
              <div class="spz-7003-form-wrap"></div>
            </div>
          </div>
          <div class="spz-7003-logos">
            <p class="spz-7003-logos-title">1,100+ of the world&rsquo;s leading MedTech companies trust Greenlight Guru</p>
            <div class="spz-7003-logos-track">
              <div class="spz-7003-logos-marquee">
                ${LOGOS.map(function (l) { return `<img src="${A}${l[0]}.png" alt="${l[1]}">`; }).join("")}
                ${LOGOS.map(function (l) { return `<img src="${A}${l[0]}.png" alt="${l[1]}" aria-hidden="true">`; }).join("")}
              </div>
            </div>
          </div>
        </section>`;

    /* ============ COOKIE / TRACKING ============ */
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const d = new Date();
            d.setTime(d.getTime() + days * 864e5);
            expires = "; expires=" + d.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; domain=" + CONFIG.domain + "; path=/";
    }
    function getCookie(name) {
        const parts = document.cookie.split(";");
        for (let i = 0; i < parts.length; i++) {
            const c = parts[i].replace(/^\s+/, "");
            if (c.indexOf(name + "=") === 0) return c.substring(name.length + 1);
        }
        return null;
    }
    function applyTracking() {
        (function () {
            //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

            // Set the value of squeezePage variable as per your requirement:
            // true: if you are using squeeze page (If page has form)
            // false: if you are not using squeeze page (If page does not have form)
            // 'both': if you want to set cookie as well as hidden field value (If page has form and you also want to set cookie).

            const squeezePage = true; // true / false / 'both'
            const expName = '7008'; //experiment name should be 1001, 1002, 1003 etc.
            const variantName = `spz_#` + expName + `_true_control`; //variantName should be _variant, _true_control etc.
            const clientDomain = '.greenlight.guru'; //domain should be .spiralyze.com


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

    /* ============ HELPERS ============ */
    function waitForElement(selector, timeout) {
        timeout = timeout || 15000;
        return new Promise(function (resolve, reject) {
            const existing = document.querySelector(selector);
            if (existing) return resolve(existing);
            const obs = new MutationObserver(function () {
                const el = document.querySelector(selector);
                if (el) {
                    obs.disconnect();
                    resolve(el);
                }
            });
            obs.observe(document.documentElement, { childList: true, subtree: true });
            setTimeout(function () {
                obs.disconnect();
                reject(new Error("timeout: " + selector));
            }, timeout);
        });
    }
    function boundOnce(el, key) {
        const k = "spz7003" + key;
        if (el.dataset[k] === "1") return false;
        el.dataset[k] = "1";
        return true;
    }
    function debounce(fn, delay) {
        let t;
        return function () {
            const args = arguments;
            clearTimeout(t);
            t = setTimeout(function () { fn.apply(null, args); }, delay || 150);
        };
    }

    /* ============ VALIDATION (email only — other fields use HubSpot control validation) ============ */
    function getEmailInput(form) {
        return form.querySelector(".spz_email_field input, .hs_email input, [name=\"email\"]");
    }

    function clearEmailStepError(form) {
        const emailInput = getEmailInput(form);
        if (!emailInput) return;
        const wrap = emailInput.closest(".hs-form-field");
        if (!wrap) return;
        wrap.classList.remove("spz-invalid");
        const m = wrap.querySelector(":scope > .spz-error-msg");
        if (m) m.remove();
    }

    function showEmailStepError(form) {
        const emailInput = getEmailInput(form);
        if (!emailInput) return;
        const wrap = emailInput.closest(".hs-form-field");
        if (!wrap) return;
        const hasHsError = wrap.querySelector(".hs-error-msgs");
        if (hasHsError) return;
        wrap.classList.add("spz-invalid");
        let m = wrap.querySelector(":scope > .spz-error-msg");
        if (!m) {
            m = document.createElement("p");
            m.className = "spz-error-msg";
            m.setAttribute("role", "alert");
            wrap.appendChild(m);
        }
        m.textContent = ERROR_MESSAGES.email;
    }

    /* ============ FORM REVEAL + SUBMIT (2004 pattern) ============ */
    function clearStep2HubSpotErrors(form) {
        form.querySelectorAll("fieldset.form-columns-1:not(.spz_email_field) .hs-error-msgs").forEach(function (el) {
            el.remove();
        });
    }

    function revealForm(form) {
        form.classList.add("spz-7003-expanded");
        document.body.classList.add(CONFIG.revealBodyClass);
        clearEmailStepError(form);
        clearStep2HubSpotErrors(form);
    }

    /* Block native HubSpot submit before reveal — Enter in name fields otherwise
       validates hidden step-2 fields and surfaces errors when the form expands */
    function bindSubmitRoute(form) {
        if (!boundOnce(form, "SubmitRoute")) return;
        form.addEventListener("submit", function (e) {
            if (form.classList.contains("spz-7003-expanded")) return;
            e.preventDefault();
            e.stopImmediatePropagation();
            handleStep(form);
        }, true);
    }

    function bindEnterOnNames(form) {
        ["firstname", "lastname"].forEach(function (name) {
            const input = form.querySelector('[name="' + name + '"]');
            if (!input || input.dataset.spzNameEnter === "1") return;
            input.dataset.spzNameEnter = "1";
            input.addEventListener("keydown", function (e) {
                if (e.key !== "Enter" && e.keyCode !== 13) return;
                if (form.classList.contains("spz-7003-expanded")) return;
                e.preventDefault();
                handleStep(form);
            });
        });
    }

    /* Dummy CTA always visible; programmatically clicks hidden native submit when expanded */
    function handleStep(form) {
        if (form.classList.contains("spz-7003-expanded")) {
            const submit = form.querySelector('input[type="submit"]');
            if (submit) submit.click();
            return;
        }
        const emailInput = getEmailInput(form);
        const email = emailInput ? emailInput.value.trim() : "";
        if (CONFIG.emailRegex.test(email)) {
            revealForm(form);
        } else if (emailInput) {
            showEmailStepError(form);
        }
    }

    function bindAutoReveal(form) {
        if (form.classList.contains("spz-7003-expanded")) return;
        const emailInput = getEmailInput(form);
        const firstInput = form.querySelector('[name="firstname"]');
        const lastInput = form.querySelector('[name="lastname"]');
        if (!emailInput || !firstInput || !lastInput) return;

        const check = function () {
            if (form.classList.contains("spz-7003-expanded")) return;
            const emailOk = CONFIG.emailRegex.test(emailInput.value.trim());
            const firstOk = firstInput.value.trim() !== "";
            const lastOk = lastInput.value.trim() !== "";
            if (emailOk && firstOk && lastOk) {
                revealForm(form);
            }
        };

        [emailInput, firstInput, lastInput].forEach(function (el) {
            if (el.dataset.spzAutoReveal === "1") return;
            el.dataset.spzAutoReveal = "1";
            el.addEventListener("input", check);
            el.addEventListener("change", check);
            el.addEventListener("blur", check);
        });
        check();
    }

    function ensureControls(form) {
        const submit = form.querySelector('input[type="submit"]');
        if (submit && !form.querySelector(".spz-7003-dummy-cta")) {
            submit.insertAdjacentHTML("afterend", '<button type="button" class="spz-7003-dummy-cta">' + CONFIG.submitText + "</button>");
            const cta = form.querySelector(".spz-7003-dummy-cta");
            if (cta) cta.addEventListener("click", function () { handleStep(form); });
        }

        const emailInput = getEmailInput(form);
        if (emailInput && !emailInput.dataset.spzEnter) {
            emailInput.dataset.spzEnter = "1";
            emailInput.addEventListener("keypress", function (e) {
                if (e.key === "Enter" || e.keyCode === 13) {
                    e.preventDefault();
                    handleStep(form);
                }
            });
            emailInput.addEventListener("input", function () { clearEmailStepError(form); });
        }
    }

    function markAndRevealFieldset(form) {
        form.querySelectorAll("fieldset").forEach(function (fs) {
            if (fs.querySelector(".hs_email") && !fs.classList.contains("spz_email_field")) {
                fs.classList.add("spz_email_field");
            } else if (fs.querySelector(".hs_phone")) {
                fs.classList.add("spz_phone_country_field");
            } else if (fs.querySelector(".hs_dropdown_country")) {
                fs.classList.add("spz_dropdown_country_field");
            }
        });

        const firstNameRow = form.querySelector('[name="firstname"]') && form.querySelector('[name="firstname"]').closest(".form-columns-2");
        const emailFieldset = form.querySelector('[name="email"]') && form.querySelector('[name="email"]').closest(".form-columns-1");
        if (!form.dataset.spzEmailLayoutDone && firstNameRow && emailFieldset && firstNameRow.previousElementSibling !== emailFieldset) {
            firstNameRow.insertAdjacentElement("beforebegin", emailFieldset);
            form.dataset.spzEmailLayoutDone = "1";
        }

        const countryFieldset = form.querySelector(".spz_dropdown_country_field");
        const phoneFieldset = form.querySelector(".spz_phone_country_field");
        if (!form.dataset.spzCountryLayoutDone && countryFieldset && phoneFieldset && phoneFieldset.nextElementSibling !== countryFieldset) {
            phoneFieldset.insertAdjacentElement("afterend", countryFieldset);
            form.dataset.spzCountryLayoutDone = "1";
        }
    }

    function blankSelectPlaceholders(form) {
        form.querySelectorAll("select.hs-input").forEach(function (sel) {
            if (sel.closest(".hs-fieldtype-intl-phone")) return;
            const first = sel.querySelector("option:first-child");
            if (first && first.value === "" && first.textContent) first.textContent = "";
        });
    }

    function bindCountrySelect(form) {
        const select = form.querySelector(".hs-dependent-field .hs_dropdown_country select, .hs_dropdown_country select");
        if (!select) return;
        const hsForm = select.closest(".hs-form-private");
        if (!hsForm) return;
        const toggle = function () {
            hsForm.classList.toggle("US-selected", select.value === "United States" || select.value === "Canada");
        };
        toggle();
        if (!select.dataset.spzCountryBound) {
            select.dataset.spzCountryBound = "1";
            select.addEventListener("change", toggle);
        }
    }

    function detectReturningUser(form) {
        const org = form.querySelector('[name="what_describes_your_organization_best_"]');
        const wrap = org ? org.closest(".hs-form-field") : null;
        if (wrap && getComputedStyle(wrap).display === "none") {
            form.classList.add("returning-user");
        } else {
            form.classList.remove("returning-user");
        }
    }

    function enhanceForm(form) {
        let obs = null;
        const apply = function () {
            if (obs) obs.disconnect();

            markAndRevealFieldset(form);
            blankSelectPlaceholders(form);
            detectReturningUser(form);
            ensureControls(form);
            bindCountrySelect(form);

            /* Submit label */
            const submit = form.querySelector('.hs_submit input.hs-button[type="submit"]') || form.querySelector(".hs_submit input.hs-button");
            if (submit && submit.value !== CONFIG.submitText) submit.value = CONFIG.submitText;

            /* Floating labels */
            Object.keys(FIELD_LABELS).forEach(function (cls) {
                const wrap = form.querySelector("." + cls);
                if (!wrap) return;
                const input = wrap.querySelector(CONFIG.inputSel);
                if (input && input.tagName !== "SELECT" && input.hasAttribute("placeholder")) input.setAttribute("placeholder", "");
                if (wrap.querySelector(":scope > .spz-float-label")) return;
                const lbl = document.createElement("span");
                lbl.className = "spz-float-label";
                lbl.setAttribute("aria-hidden", "true");
                lbl.textContent = FIELD_LABELS[cls];
                wrap.appendChild(lbl);
            });

            /* Floating label state — sync() re-runs every apply() so async HubSpot /
               phone-country prefill removes is-placeholder and shows selected text */
            form.querySelectorAll(CONFIG.inputSel).forEach(function (f) {
                const wrap = f.closest(".hs-form-field");
                if (!wrap) return;

                const sync = function () {
                    const filled = !!(f.value && String(f.value).trim().length);
                    if (filled || wrap.classList.contains("hs_phone")) {
                        wrap.classList.add("spz-filled");
                        if (f.tagName === "SELECT") f.classList.remove("is-placeholder");
                    } else {
                        wrap.classList.remove("spz-filled");
                    }
                };

                if (boundOnce(f, "State")) {
                    f.addEventListener("focus", function () { wrap.classList.add("spz-focused"); });
                    f.addEventListener("blur", function () { wrap.classList.remove("spz-focused"); sync(); });
                    f.addEventListener("input", sync);
                    f.addEventListener("change", sync);
                }
                sync();
            });

            bindAutoReveal(form);
            bindSubmitRoute(form);
            bindEnterOnNames(form);

            

            if (obs) obs.observe(form, { childList: true, subtree: true });
        };

        obs = new MutationObserver(function () { apply(); });
        apply();
        setTimeout(apply, 600);
        setTimeout(() => {
            apply();
            const phoneFieldSelect = form.querySelector(".hs-fieldtype-intl-phone select");
            const countryFieldSelect = form.querySelector("select[name='dropdown_country']");
            if(phoneFieldSelect) {
                phoneFieldSelect.dispatchEvent(new Event("change"));
                setTimeout(() => {
                    countryFieldSelect.dispatchEvent(new Event("input"));
                }, 300);
            }
        }, 1500);
    }

    /* ============ INIT ============ */
    function init() {
        if (!CONFIG.url.some(function (path) { return location.pathname.indexOf(path) !== -1; })) return;
        if (document.querySelector("." + CONFIG.section)) return;
        applyTracking();
        waitForElement(CONFIG.injectSelector)
            .then(function (ctrl) {
                if (document.querySelector("." + CONFIG.section)) return;
                document.body.classList.add(CONFIG.bodyClass);
                if (location.pathname.indexOf("/2025-qms-webinar-thank-you-ty-page") !== -1) {
                    document.body.classList.add("spz_webinar_ty");
                    CONFIG.formWrapper = ".form-wrap";
                    document.querySelector('.form-wrap').classList.add("form-wrapper");
                    document.querySelector('.form-wrapper > .heading').textContent = "Get a Demo";
                }
                ctrl.insertAdjacentHTML(CONFIG.injectPosition, SECTION_HTML);
                waitForElement(CONFIG.formWrapper)
                    .then(function (fw) {
                        const target = document.querySelector(".spz-7003-form-wrap");
                        if (target && !target.contains(fw)) target.appendChild(fw);
                        ctrl.classList.add("spz-7003-control-hidden");
                        waitForElement(".spz-7003-form-wrap .hs-form-private")
                            .then(enhanceForm)
                            .catch(function () { });
                    })
                    .catch(function () { });
            })
            .catch(function () { });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();