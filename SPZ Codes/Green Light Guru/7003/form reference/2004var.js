/* Spiralyze | Experiment #2004 | Greenlight Guru | Demo | Split Screen | VARIANT */
(function () {
  "use strict";

  /* ----------------------------------------------------------------------- */
  /* TRACKING CONFIG (user editable)                                          */
  /* ----------------------------------------------------------------------- */
  const squeezePage = true; // true | false | "both"
  const expName = "2004";
  const variantName = `SPZ_#` + expName + `_variant`; // _variant, _true_control, etc.

  /* ----------------------------------------------------------------------- */
  /* CONFIG                                                                   */
  /* ----------------------------------------------------------------------- */
  const config = {
    expName: expName,
    bodyClass: "spz_2004_v",
    guardClass: "spz-2004-section",
    revealBodyClass: "spz_2004_form_reveal",
    urlMatch: "/medical-device-software-demo",
    cookieDomain: ".greenlight.guru",
    homeUrl: "https://www.greenlight.guru/",
    formSelector: "main section.u4m-form .right .form",
    sessionKey: "revealForm2004",
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    assets: {
      uiDesktop: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/2004/frame_2055246738.png",
      uiMobile: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/2004/frame_2055246739.png",
      avatar: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/rectangle_349.png",
      safebeat: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/safebeat-logo-with-r-1024x240_1.png",
      brandLogo: "https://res.cloudinary.com/spiralyze/image/upload/v1755698584/greenlightguru/3002/logo-greenlight-guru.svg",
      iconTrusted: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781787692/greenlightguru/2004/frame.svg",
      iconQA: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781787694/greenlightguru/2004/frame_1.svg",
      iconWeeks: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1781787696/greenlightguru/2004/frame_2.svg"
    },
    logos: [
      { src: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/puzzle_hz_blackpng.png", alt: "Puzzle Medical Devices" },
      { src: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/mediview_blackpng.png", alt: "MediView" },
      { src: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/astrego_blackpng.png", alt: "Astrego Diagnostics" },
      { src: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/frame_244.png", alt: "Milliken" },
      { src: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/canterbury_blackpng.png", alt: "Canterbury Scientific" },
      { src: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/logo.png", alt: "GlucoSet" }
    ],
    /* Floating-label text per HubSpot field name — matches Figma full form
         (node 29180:11665). The design copy differs from the live HubSpot
         <label> spans, so these are forced. */
    fieldLabels: {
      email: "Work Email",
      firstname: "First Name",
      lastname: "Last Name",
      phone: "Phone",
      dropdown_country: "Country",
      company: "Company Name",
      what_describes_your_organization_best_: "Organization Type",
      demo_product_dropdown: "Choose Software for Demo",
      canadian_province: "Province",
      us_state: "State",
      are_you_planning_a_clinical_study__registry__or_a_survey_: "Are you planning a clinical study, registry, or a survey?",
      number_of_products_to_market: "Number of products to market",
      what_types_of_products_does_your_pharmaceutical_company_develop_: "What types of products does your pharmaceutical company develop?",
      what_is_your_role_at_your_academic_institution_: "What is your role at your academic institution?"
    }
  };

  /* ----------------------------------------------------------------------- */
  /* HELPERS                                                                  */
  /* ----------------------------------------------------------------------- */
  const urlMatches = () => location.pathname.indexOf(config.urlMatch) !== -1;

  const waitForElement = (selector, callback, timeout = 20000) => {
    const found = document.querySelector(selector);
    if (found) {
      callback(found);
      return;
    }
    let done = false;
    const obs = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el && !done) {
        done = true;
        obs.disconnect();
        callback(el);
      }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    if (timeout) {
      setTimeout(() => {
        if (!done) {
          done = true;
          obs.disconnect();
        }
      }, timeout);
    }
  };

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + ";domain=" + config.cookieDomain + ";path=/";
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  };

  /* ----------------------------------------------------------------------- */
  /* TRACKING (hidden field + cookies)                                        */
  /* ----------------------------------------------------------------------- */
  /***********************************
  ************************************
  DO NOT TOUCH
  BEYOND THIS LINE
  ******************************
  ************************/
  function hiddenValue(currentExperimentName, currentExperimentValue) {
    const existingNames = getCookie("ExperimentName");
    const existingValues = getCookie("ExperimentValue");
    const existingNameList = existingNames ? existingNames.split(",") : [];

    if (!existingNames) {
      setCookie("ExperimentName", currentExperimentName, 1);
      setCookie("ExperimentValue", currentExperimentValue, 1);
    } else if (existingNameList.length > 0 && existingNameList.indexOf(currentExperimentName) === -1) {
      setCookie("ExperimentName", existingNames + "," + currentExperimentName, 1);
      setCookie("ExperimentValue", existingValues + "," + currentExperimentValue, 1);
    } else if (existingNameList.length > 0 && existingNameList.indexOf(currentExperimentName) > -1) {
      const names = existingNames.split(",");
      const values = existingValues.split(",");
      const index = names.indexOf(currentExperimentName);
      values[index] = currentExperimentValue;
      setCookie("ExperimentName", names.join(","), 1);
      setCookie("ExperimentValue", values.join(","), 1);
    }
  }

  const track = () => {
    const formHiddenValue = variantName;
    if (squeezePage === true) {
      window.squeezePageValue = formHiddenValue;
    } else if (squeezePage === false) {
      hiddenValue(expName, variantName);
    } else if (squeezePage === "both") {
      hiddenValue(expName, variantName);
      window.squeezePageValue = formHiddenValue;
    }
  };

  /* ----------------------------------------------------------------------- */
  /* MARKUP                                                                   */
  /* ----------------------------------------------------------------------- */
  const buildLogosMarkup = () => {
    const one = config.logos.map((l) => `<div class="spz-2004-logos-slide"><img src="${l.src}" alt="${l.alt}"></div>`).join("");
    return one + one; /* duplicate for seamless marquee */
  };

  const sectionHTML = () => `
      <section class="hero-section spz-2004-section">
        <div class="spz-container">
          <div class="content-left">
            <div class="content-left-outer">
              <h1 class="hero-title">Cut time to market by 35%.<br> Accelerate medical device development.</h1>
              <div class="hero-ui-image">
                <picture>
                  <source media="(max-width:767.98px)" srcset="${config.assets.uiMobile}">
                  <img src="${config.assets.uiDesktop}" alt="Product UI composite showing quality review and AI summary">
                </picture>
              </div>
              <div class="hero-bottom">
                <div class="hero-stat">
                  <p class="stat-headline">Accelerated go-to-market time by 5 months!</p>
                  <p class="stat-subtext">Greenlight Guru lets us maintain quality throughout the device lifecycle.</p>
                </div>
                <div class="hero-testimonial">
                  <div class="testimonial-author">
                    <img src="${config.assets.avatar}" alt="Dr. Gabriel Georges" class="author-image">
                    <div class="author-info">
                      <p class="author-name">Dr. Gabriel Georges</p>
                      <p class="author-title">Co-Founder &amp; Chief Scientific Officer</p>
                    </div>
                  </div>
                  <div class="testimonial-logo">
                    <img src="${config.assets.safebeat}" alt="puzzle medical devices logo">
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="content-right">
            <div class="content-right-outer">
              <div class="logo">
                <a href="${config.homeUrl}" aria-label="Greenlight Guru home">
                  <img src="${config.assets.brandLogo}" alt="Greenlight Guru Logo">
                </a>
              </div>
              <div class="spz-form-outer">
                <div class="form-container">
                  <h2 class="form-heading">Get a Demo</h2>
                  <div class="spz_usp_box">
                    <ul>
                      <li><img src="${config.assets.iconTrusted}" alt="Trusted by 1,100+ medtech teams"><span>Trusted <br>by 1,100+ medtech teams</span></li>
                      <li><img src="${config.assets.iconQA}" alt="Built for QA, product, and clinical teams"><span>Built for QA, product, and clinical teams</span></li>
                      <li><img src="${config.assets.iconWeeks}" alt="Live in weeks, not quarters"><span>Live in weeks, not quarters</span></li>
                    </ul>
                  </div>
                  <div class="form-wrapper"></div>
                </div>
              </div>
              <section class="spz-2004-logos" aria-hidden="true">
                <div class="spz-2004-logos-track">${buildLogosMarkup()}</div>
              </section>
            </div>
          </div>
        </div>
      </section>`;

  /* ----------------------------------------------------------------------- */
  /* FORM PROCESSING                                                          */
  /* ----------------------------------------------------------------------- */
  /* Resolve the floating-label text for a control: Figma copy first
       (config.fieldLabels keyed by HubSpot field name), then the live span. */
  const fieldLabelText = (control, field) => {
    const name = (control.getAttribute("name") || "").trim();
    if (name && config.fieldLabels[name]) return config.fieldLabels[name];
    const span = field.querySelector(":scope > label > span");
    return span ? span.textContent.trim() : "";
  };

  const addFloatingLabels = (form) => {
    form.querySelectorAll(".hs-form-field").forEach((field) => {
      if (field.classList.contains("hs_phone")) return; /* handled separately */
      const control = field.querySelector('input.hs-input:not([type="hidden"]):not([type="checkbox"]):not([type="tel"]), select.hs-input:not([name=""])');
      if (!control) return;
      if (field.querySelector(".floating-label")) return;
      const text = fieldLabelText(control, field);
      if (!text) return;
      const lbl = document.createElement("label");
      lbl.className = "floating-label";
      lbl.textContent = text;
      control.insertAdjacentElement("afterend", lbl);
    });

    /* phone field – permanent floated label */
    const phone = form.querySelector(".hs_phone");
    if (phone && !phone.querySelector(".floating-label")) {
      const input = phone.querySelector(".input");
      if (input) {
        const lbl = document.createElement("label");
        lbl.className = "floating-label floating-label--phone";
        lbl.textContent = config.fieldLabels.phone || "Phone";
        input.insertAdjacentElement("afterbegin", lbl);
      }
    }
  };

  const blankSelectPlaceholders = (form) => {
    form.querySelectorAll("select.hs-input").forEach((sel) => {
      if (sel.closest(".hs-fieldtype-intl-phone")) return;
      const first = sel.querySelector("option:first-child");
      if (first && first.value === "" && first.textContent) first.textContent = "";
    });
  };

  const bindCountrySelect = (form) => {
    const select = form.querySelector(".hs-dependent-field .hs_dropdown_country select");
    if (!select) return;

    const hsForm = select.closest(".hs-form-private");
    if (!hsForm) return;

    const toggle = () => hsForm.classList.toggle("US-selected", select.value === "United States" || select.value === "Canada");

    toggle();
    if (!select.dataset.spzCountryBound) {
      select.dataset.spzCountryBound = "1";
      select.addEventListener("change", toggle);
    }
  };

  const bindFieldStates = (form) => {
    form.querySelectorAll('.hs-input:not([type="hidden"]):not([type="checkbox"])').forEach((field) => {
      const parent = field.closest(".input") || field.parentElement;
      const isSelect = field.tagName === "SELECT";
      const focusClass = isSelect ? "has-select-focus" : "has-input-focus";
      const valueClass = isSelect ? "has-select-value" : "has-input-value";
      const setVal = () => {
        if (field.value && String(field.value).trim() !== "") parent.classList.add(valueClass);
        else parent.classList.remove(valueClass);
      };
      if (!field.dataset.spzBound) {
        field.dataset.spzBound = "1";
        field.addEventListener("focus", () => parent.classList.add(focusClass));
        field.addEventListener("blur", () => {
          parent.classList.remove(focusClass);
          setVal();
        });
        field.addEventListener("change", setVal);
        field.addEventListener("input", setVal);
      }
      /* always re-evaluate so prefilled / autofilled values float the label */
      setVal();
    });
  };

  const revealForm = (form, email) => {
    form.classList.add("reveal-form");
    document.body.classList.add(config.revealBodyClass);
    try {
      sessionStorage.setItem(config.sessionKey, email || "");
    } catch (e) {}
    const emailInput = form.querySelector(".spz_email_field input");
    if (emailInput) emailInput.classList.remove("spz_input_error");
    const err = form.querySelector(".custom_spz_error_msg");
    if (err) err.remove();
  };

  const handleStep = (form) => {
    if (form.classList.contains("reveal-form")) {
      const submit = form.querySelector('input[type="submit"]');
      if (submit) submit.click();
      return;
    }
    const emailInput = form.querySelector(".spz_email_field input, .hs_email input");
    const email = emailInput ? emailInput.value.trim() : "";
    if (config.emailRegex.test(email)) {
      revealForm(form, email);
    } else if (emailInput) {
      emailInput.classList.add("spz_input_error");
      const hasHsError = emailInput.closest(".hs_email") && emailInput.closest(".hs_email").querySelector(".hs-error-msgs");
      if (!form.querySelector(".custom_spz_error_msg") && !hasHsError) {
        emailInput.insertAdjacentHTML("afterend", '<span class="custom_spz_error_msg">Please enter a valid email address.</span>');
      }
    }
  };

  /* Auto-reveal the full form once the three first-step inputs
       (email, first name, last name) are all filled & valid — no click needed. */
  const bindAutoReveal = (form) => {
    if (form.classList.contains("reveal-form")) return;
    const emailInput = form.querySelector(".spz_email_field input, .hs_email input");
    const firstInput = form.querySelector('[name="firstname"]');
    const lastInput = form.querySelector('[name="lastname"]');
    if (!emailInput || !firstInput || !lastInput) return;

    const check = () => {
      if (form.classList.contains("reveal-form")) return;
      const emailOk = config.emailRegex.test(emailInput.value.trim());
      const firstOk = firstInput.value.trim() !== "";
      const lastOk = lastInput.value.trim() !== "";
      if (emailOk && firstOk && lastOk) {
        revealForm(form, emailInput.value.trim());
      }
    };

    [emailInput, firstInput, lastInput].forEach((el) => {
      if (el.dataset.spzAutoReveal) return;
      el.dataset.spzAutoReveal = "1";
      el.addEventListener("input", check);
      el.addEventListener("change", check);
      el.addEventListener("blur", check);
    });

    /* evaluate immediately in case the fields are already prefilled */
    check();
  };

  const ensureControls = (form) => {
    const submit = form.querySelector('input[type="submit"]');
    if (submit && !form.querySelector(".dummy-cta")) {
      submit.insertAdjacentHTML("afterend", '<button type="button" class="dummy-cta spz-2004-cta">SUBMIT</button>');
      const cta = form.querySelector(".dummy-cta");
      if (cta) cta.addEventListener("click", () => handleStep(form));
    }
    const emailInput = form.querySelector(".spz_email_field input, .hs_email input");
    if (emailInput && !emailInput.dataset.spzEnter) {
      emailInput.dataset.spzEnter = "1";
      emailInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
          e.preventDefault();
          handleStep(form);
        }
      });
      emailInput.addEventListener("input", () => {
        emailInput.classList.remove("spz_input_error");
        const err = form.querySelector(".custom_spz_error_msg");
        if (err) err.remove();
      });
    }
  };

  const markAndRevealFieldset = (form) => {
    form.querySelectorAll("fieldset").forEach((fs) => {
      if (fs.querySelector(".hs_email") && !fs.classList.contains("spz_email_field")) {
        fs.classList.add("spz_email_field");
      } else if (fs.querySelector(".hs_phone")) {
        fs.classList.add("spz_phone_country_field");
      } else if (fs.querySelector(".hs_dropdown_country")) {
        fs.classList.add("spz_dropdown_country_field");
      }
    });

    /* DOM reorder runs once per move — repeating on every mutation re-triggers the
         reveal animation and makes the country field flicker while typing. */
    const firstNameRow = form.querySelector('[name="firstname"]')?.closest(".form-columns-2");
    const emailFieldset = form.querySelector('[name="email"]')?.closest(".form-columns-1");
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
  };

  const detectReturningUser = (form) => {
    const org = form.querySelector('[name="what_describes_your_organization_best_"]');
    const wrap = org ? org.closest(".hs-form-field") : null;
    if (wrap && getComputedStyle(wrap).display === "none") {
      form.classList.add("returning-user");
    } else {
      form.classList.remove("returning-user");
    }
  };

  const restoreSession = (form) => {
    let v = null;
    try {
      v = sessionStorage.getItem(config.sessionKey);
    } catch (e) {}
    if (v === null) return;
    const emailInput = form.querySelector(".spz_email_field input, .hs_email input");
    if (emailInput && v !== "") {
      emailInput.value = v;
      emailInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
    form.classList.add("reveal-form");
    document.body.classList.add(config.revealBodyClass);
  };

  const processForm = (form) => {
    let obs = null;
    const apply = () => {
      /* disconnect while we mutate so our own changes don't re-trigger the
           observer (that self-trigger was the infinite-loop / freeze bug) */
      if (obs) obs.disconnect();
      markAndRevealFieldset(form);
      addFloatingLabels(form);
      blankSelectPlaceholders(form);
      detectReturningUser(form);
      ensureControls(form);
      bindFieldStates(form);
      bindCountrySelect(form);
      bindAutoReveal(form);
      /* childList only — attribute changes from bindFieldStates (has-input-value
           etc.) were re-firing apply() on every keystroke in name fields */
      if (obs) obs.observe(form, { childList: true, subtree: true });
    };
    obs = new MutationObserver(() => apply());
    apply();
    restoreSession(form);
    /* extra sweeps to catch values HubSpot prefills asynchronously so their
         floating labels render floated instead of in the default state */
    setTimeout(apply, 600);
    setTimeout(apply, 1500);
  };

  const mountForm = () => {
    waitForElement(config.formSelector, (form) => {
      const wrapper = document.querySelector("." + config.guardClass + " .form-wrapper");
      if (wrapper && !wrapper.contains(form)) {
        wrapper.appendChild(form);
      }
      processForm(form);
    });
  };

  /* ----------------------------------------------------------------------- */
  /* BUILD                                                                    */
  /* ----------------------------------------------------------------------- */
  const build = () => {
    if (document.querySelector("." + config.guardClass)) return;
    document.body.insertAdjacentHTML("afterbegin", sectionHTML());
    document.body.classList.add(config.bodyClass);
    if (navigator.userAgent.toLowerCase().includes("firefox")) {
      document.body.classList.add("is-firefox");
    }
    track();
    mountForm();
  };

  /* ----------------------------------------------------------------------- */
  /* INIT + SPA                                                               */
  /* ----------------------------------------------------------------------- */
  const init = () => {
    if (!urlMatches()) return;
    waitForElement("body", () => build());
  };

  const hookHistory = () => {
    const fire = () => window.dispatchEvent(new Event("locationchange"));
    ["pushState", "replaceState"].forEach((type) => {
      const orig = history[type];
      history[type] = function () {
        const ret = orig.apply(this, arguments);
        fire();
        return ret;
      };
    });
    window.addEventListener("popstate", fire);
    window.addEventListener("locationchange", init);
  };

  hookHistory();
  init();
})();
