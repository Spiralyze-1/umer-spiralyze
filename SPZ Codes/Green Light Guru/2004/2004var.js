/* Spiralyze | Experiment #2004 | Greenlight Guru | Demo | Split Screen | VARIANT */
(function () {
  "use strict";

  /* ----------------------------------------------------------------------- */
  /* TRACKING CONFIG (user editable)                                          */
  /* ----------------------------------------------------------------------- */
  const squeezePage = true; // true | false | "both"
  const expName = "2007";
  const variantName = `SPZ_#` + expName + `_true_control`; // _variant, _true_control, etc.

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
      avatar: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/rectangle_350.png",
      safebeat: "https://res.cloudinary.com/spiralyze/image/upload/greenlightguru/2004/image_5.png",
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
      number_of_products_to_market: "Number of Products in Market",
      what_types_of_products_does_your_pharmaceutical_company_develop_: "What types of products does your Pharmaceutical company develop?",
      what_is_your_role_at_your_academic_institution_: "What is your role at the Academic Institution?"
    }
  };

  /* Maps the intl-phone <select> value (ISO code) to the dropdown_country
       <select> value (full country name) so the two fields can stay in sync,
       mirroring the control behavior. */
  const COUNTRY_MAP = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    VG: "British Virgin Islands",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    BQ: "Caribbean Netherlands",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CO: "Colombia",
    KM: "Comoros",
    CD: "Congo, Democratic Republic of the",
    CG: "Congo, Republic of the",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: "Côte d'Ivoire",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    XK: "Kosovo",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macau",
    MK: "Macedonia, Republic of",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    MX: "Mexico",
    FM: "Micronesia, Federated States of",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    KP: "North Korea",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    BL: "Saint Barthélemy",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    KR: "South Korea",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "East Timor",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands",
    TV: "Tuvalu",
    VI: "U.S. Virgin Islands",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VA: "Vatican City",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe"
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
              <h1 class="hero-title">Streamline quality management, product development, and clinical data management</h1>
              <div class="hero-ui-image">
                <picture>
                  <source media="(max-width:767.98px)" srcset="${config.assets.uiMobile}">
                  <img src="${config.assets.uiDesktop}" alt="Product UI composite showing quality review and AI summary">
                </picture>
              </div>
              <div class="hero-bottom">
                <div class="hero-stat">
                  <p class="stat-headline">Greenlight Guru has been so valuable to us</p>
                  <p class="stat-subtext">“Partnering with Greenlight Guru provides you with a team that's on your side, who are all medical device industry pros and understand what companies like ours go through.”</p>
                </div>
                <div class="hero-testimonial">
                  <div class="testimonial-author">
                    <img src="${config.assets.avatar}" alt="Morris Sherwood" class="author-image">
                    <div class="author-info">
                      <p class="author-name">Morris Sherwood</p>
                      <p class="author-title">Co-Founder & Chief Scientific Officer</p>
                    </div>
                  </div>
                  <div class="testimonial-logo">
                    <img src="${config.assets.safebeat}" alt="zyris logo">
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
    const select = form.querySelector('select[name="dropdown_country"]');
    if (!select) return;

    const hsForm = select.closest(".hs-form-private");
    if (!hsForm) return;

    const inputWrap = select.closest(".input") || select.parentElement;
    if (inputWrap && !inputWrap.querySelector(".custom_arrow")) {
      select.insertAdjacentHTML("afterend", '<span class="custom_arrow"></span>');
    }

    const toggle = () => hsForm.classList.toggle("US-selected", select.value === "United States" || select.value === "Canada");

    toggle();
    if (!select.dataset.spzCountryBound) {
      select.dataset.spzCountryBound = "1";
      select.addEventListener("change", toggle);
    }
  };

  /* When the intl-phone country <select> (ISO value) changes, mirror it onto
       dropdown_country (full-name value). Country changes do not update phone. */
  const bindPhoneCountrySync = (form) => {
    const phoneSelect = form.querySelector(".hs_phone .hs-fieldtype-intl-phone select");
    const countrySelect = form.querySelector('select[name="dropdown_country"]');
    if (!phoneSelect || !countrySelect) return;

    if (!phoneSelect.dataset.spzPhoneCountrySync) {
      phoneSelect.dataset.spzPhoneCountrySync = "1";
      phoneSelect.addEventListener("change", () => {
        const name = COUNTRY_MAP[phoneSelect.value];
        if (!name || countrySelect.value === name) return;
        const opt = Array.from(countrySelect.options).find((o) => o.value === name);
        if (!opt) return;
        countrySelect.value = name;
        countrySelect.dispatchEvent(new Event("change", { bubbles: true }));
      });
    }
  };

  /* On load, prefill dropdown_country from the visitor's region. HubSpot
       geo-detects the region on the intl-phone <select> (this also reflects a
       VPN region) but does not populate dropdown_country, so we copy the
       geo-detected phone ISO into the country field. HubSpot resolves this
       asynchronously, so we poll briefly. We never override a value the user
       already picked, nor a country HubSpot itself prefilled. */
  const prefillCountryFromRegion = (form) => {
    if (form.dataset.spzCountryPrefillStarted) return;
    const phoneSelect = form.querySelector(".hs_phone .hs-fieldtype-intl-phone select");
    const countrySelect = form.querySelector('select[name="dropdown_country"]');
    if (!phoneSelect || !countrySelect) return;
    form.dataset.spzCountryPrefillStarted = "1";

    let attempts = 0;
    const maxAttempts = 75; /* 75 * 200ms = 15s */
    const timer = setInterval(() => {
      attempts++;
      /* stop if the country already has a value (user- or HubSpot-set) */
      if (countrySelect.value && countrySelect.value.trim() !== "") {
        clearInterval(timer);
        return;
      }
      const name = COUNTRY_MAP[phoneSelect.value];
      if (name) {
        const opt = Array.from(countrySelect.options).find((o) => o.value === name);
        if (opt) {
          countrySelect.value = name;
          countrySelect.dispatchEvent(new Event("change", { bubbles: true }));
          clearInterval(timer);
          return;
        }
      }
      if (attempts >= maxAttempts) clearInterval(timer);
    }, 200);
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

  const resetRevealState = (form) => {
    try {
      sessionStorage.removeItem(config.sessionKey);
    } catch (e) {}
    form.classList.remove("reveal-form");
    document.body.classList.remove(config.revealBodyClass);
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
      bindPhoneCountrySync(form);
      prefillCountryFromRegion(form);
      bindAutoReveal(form);
      /* childList only — attribute changes from bindFieldStates (has-input-value
           etc.) were re-firing apply() on every keystroke in name fields */
      if (obs) obs.observe(form, { childList: true, subtree: true });
    };
    obs = new MutationObserver(() => apply());
    apply();
    resetRevealState(form);
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

    if (navigator.userAgent.includes("Win")) {
      document.body.classList.add("os-windows");
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
