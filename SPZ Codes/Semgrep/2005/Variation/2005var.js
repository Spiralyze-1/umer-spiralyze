/* #2005 | Semgrep | Contact — Triage (VARIANT) */
(function () {
  "use strict";

  /* ===== Config ===== (every selector / class / tunable lives here) */
  const CONFIG = {
    debug: false,
    experiment: "2005",
    urlMatch: "/contact-us",
    formSelector: "#mktoForm_1122",
    rootAttribute: "data-spz-exp",
    rootClass: "spz-contact-section",
    formMountClass: "spz-form-mount",
    bodyClass: "spz_2005_v",
    stepTwoClass: "spz-step-2", // toggled on the root to reveal the form
    heroCtaClass: "spz-2005-hero-cta",
    backCtaClass: "spz-2005-form-back",
    submitCtaClass: "spz-2005-form-cta",
    storagePrefix: "spz2005_", // session key prefix for field retention
    waitTimeoutMs: 15000
  };

  /* ===== Assets ===== (Cloudinary manifest + Figma-exported illustrations) */
  const ASSETS = {
    logo: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786958546/semgrep/2005/semgrep-logo.svg",
    grid: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786958547/semgrep/2005/grid_v1.svg",
    chat: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786958546/semgrep/2005/chatcircledots.svg",
    arrow: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786958547/semgrep/2005/arrow-right.svg",
    iconSales: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786958546/semgrep/2005/reiconmoney-recive.svg",
    iconPartner: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786958547/semgrep/2005/handshake.svg",
    iconMedia: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786958547/semgrep/2005/megaphone.svg",
    iconJobs: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786958547/semgrep/2005/suitcase.svg",
    // Composed dashboard/reviews illustrations exported from Figma (no Cloudinary equivalent).
    dashboardDesktop: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/436f10c9-0b69-437d-ace2-1e8b14ced50a",
    dashboardMobile: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cddcb6b0-8630-4e3c-a627-dedb1ceaa42b",
    reviews: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/314a29d8-6bba-47b1-85a8-8526a1f39a88"
  };

  /* ===== Content ===== (all copy / data — change text here, never in logic) */
  const CONTENT = {
    logoHref: "https://semgrep.dev/",
    privacyUrl: "/legal/privacy",
    contactTitle: "Contact us",
    backLabel: "Back",
    reviewsAlt: "Rated 4.6 out of 5 from 55 reviews",
    privacyNote: "Your privacy matters to us. By submitting this form, you agree to our",
    privacyLinkText: "Privacy Policy",
    copyright: "© 2026 Semgrep, Inc. Semgrep is a registered trademark of Semgrep, Inc.",
    footerLinks: [
      { label: "Website terms", url: "/legal/terms" },
      { label: "Privacy", url: "/legal/privacy" }
    ],
    // Left promo card — its heading in Step 2 when the green CTA is used.
    demoCard: {
      title: "Get a demo & pricing",
      subtitle: "See how to catch and fix code issues before they ship.",
      button: "Get a demo & pricing",
      heading: "Get a demo & pricing"
    },
    // Right column tiles — each carries the Step 2 heading it switches to.
    tiles: [
      { icon: ASSETS.iconSales, title: "Sales inquiry", heading: "Sales inquiry", desc: "Learn about our solutions and ROI timelines. Get answers to questions." },
      { icon: ASSETS.iconPartner, title: "Partner inquiry", heading: "Partner inquiry", desc: "Join the Spark Partner Alliance, our global partner network." },
      { icon: ASSETS.iconMedia, title: "Media/Press inquiry", heading: "Media/Press inquiry", desc: "Request an interview or ask us a specific question." },
      { icon: ASSETS.iconJobs, title: "Jobs & careers", heading: "Jobs & careers", desc: "Interested in joining our team? See our current job openings." }
    ],
    optinLabel: "Opt-in to receive email from Semgrep",
    // Marketo field id -> placeholder shown in the redesigned form.
    placeholders: {
      FirstName: "First name",
      LastName: "Last name",
      Email: "Email",
      Company: "Company",
      Phone: "Phone (optional)",
      Quick_Notes__c: "+ Add a note"
    },
    // DOM order for the relocated form rows (also drives tab order). First + Last
    // share ONE Marketo row (CSS splits it into two columns); the rest auto-flow
    // into the 2-column grid: Email|Company, Phone|Note, then opt-in, then submit.
    rowOrder: [
      { selector: "#FirstName", className: "spz-row--name" },
      { selector: "#Email", className: "spz-row--email" },
      { selector: "#Company", className: "spz-row--company" },
      { selector: "#Phone", className: "spz-row--phone" },
      { selector: "#Quick_Notes__c", className: "spz-row--note" },
      { selector: '[name="formOptIn"]', className: "spz-row--optin" }
    ],
    assets: ASSETS
  };

  /* ===== Helpers ===== */

  // Namespaced logger — flip CONFIG.debug to reveal the full lifecycle.
  const log = (...args) => {
    if (CONFIG.debug) console.log("[SPZ-2005]", ...args);
  };

  // URL gate — only run on the contact page.
  const onUrlMatch = () => location.pathname.indexOf(CONFIG.urlMatch) !== -1;

  // Resolve when the selector exists (MutationObserver + fail-safe timeout).
  const waitForElement = (selector) =>
    new Promise((resolve) => {
      const existing = document.querySelector(selector);
      if (existing) {
        resolve(existing);
        return;
      }
      const observer = new MutationObserver(() => {
        const found = document.querySelector(selector);
        if (found) {
          observer.disconnect();
          resolve(found);
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
      // fail-safe so we never leak an observer if the form never renders
      window.setTimeout(() => {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }, CONFIG.waitTimeoutMs);
    });

  // Climb to the body-level ancestor so the injected root becomes a direct <body> child.
  const findTopLevelAnchor = (element) => {
    let current = element;
    while (current.parentElement && current.parentElement !== document.body) {
      current = current.parentElement;
    }
    return current;
  };

  // Persist a single field value to sessionStorage (private-mode safe).
  const saveFieldValue = (key, value) => {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (error) {
      /* storage unavailable — retention is best-effort */
    }
  };

  /* ===== HTML builders ===== */

  // One right-column tile (whole tile is the click target -> Step 2).
  const tileHTML = (tile) => `
              <button type="button" class="spz-tile" data-heading="${tile.heading}">
                <span class="spz-tile-row">
                  <img class="spz-tile-icon" src="${tile.icon}" alt="" aria-hidden="true">
                  <span class="spz-tile-title">${tile.title}</span>
                  <img class="spz-tile-arrow" src="${CONTENT.assets.arrow}" alt="" aria-hidden="true">
                </span>
                <span class="spz-tile-desc">${tile.desc}</span>
              </button>`;

  // Left promo card — only the green CTA button switches to Step 2.
  const ctaCardHTML = () => `
              <div class="spz-hero-cta-card">
                <div class="spz-hero-cta-head">
                  <div class="spz-hero-cta-titlerow">
                    <img class="spz-hero-cta-icon" src="${CONTENT.assets.chat}" alt="" aria-hidden="true">
                    <h2 class="spz-hero-cta-title">${CONTENT.demoCard.title}</h2>
                  </div>
                  <p class="spz-hero-cta-sub">${CONTENT.demoCard.subtitle}</p>
                </div>
                <button type="button" class="${CONFIG.heroCtaClass}" data-heading="${CONTENT.demoCard.heading}">
                  <span>${CONTENT.demoCard.button}</span>
                  <img src="${CONTENT.assets.arrow}" alt="" aria-hidden="true">
                </button>
                <div class="spz-hero-cta-visual">
                  <picture>
                    <source media="(max-width: 767.98px)" srcset="${CONTENT.assets.dashboardMobile}">
                    <img src="${CONTENT.assets.dashboardDesktop}" alt="Semgrep product dashboard">
                  </picture>
                </div>
              </div>`;

  // Step 1: logo, "Contact us" heading, promo card + 4 tiles.
  const stepOneHTML = () => `
          <section class="spz-step spz-step1">
            <a class="spz-step1-logo" href="${CONTENT.logoHref}">
              <img src="${CONTENT.assets.logo}" alt="Semgrep">
            </a>
            <div class="spz-step1-body">
              <h1 class="spz-step1-title">${CONTENT.contactTitle}</h1>
              <div class="spz-step1-grid">
                ${ctaCardHTML()}
                <div class="spz-tiles">
                  ${CONTENT.tiles.map(tileHTML).join("")}
                </div>
              </div>
            </div>
          </section>`;

  // Step 2: back + centered logo, then the form card (title is set dynamically).
  const stepTwoHTML = () => `
          <section class="spz-step spz-step2">
            <div class="spz-step2-header">
              <button type="button" class="${CONFIG.backCtaClass}">
                <img class="spz-back-arrow" src="${CONTENT.assets.arrow}" alt="" aria-hidden="true">
                <span>${CONTENT.backLabel}</span>
              </button>
              <a class="spz-step2-logo" href="${CONTENT.logoHref}">
                <img src="${CONTENT.assets.logo}" alt="Semgrep">
              </a>
              <span class="spz-step2-spacer" aria-hidden="true"></span>
            </div>
            <div class="spz-form-card">
              <div class="spz-form-head">
                <h2 class="spz-form-title">${CONTENT.demoCard.heading}</h2>
                <img class="spz-form-reviews" src="${CONTENT.assets.reviews}" alt="${CONTENT.reviewsAlt}">
              </div>
              <div class="${CONFIG.formMountClass}"></div>
              <p class="spz-form-privacy">${CONTENT.privacyNote} <a href="${CONTENT.privacyUrl}">${CONTENT.privacyLinkText}</a></p>
            </div>
          </section>`;

  const footerLinkHTML = (link) => `<a href="${link.url}">${link.label}</a>`;

  // Shared footer: copyright left, terms/privacy right.
  const footerHTML = () => `
          <footer class="spz-contact-footer">
            <div class="spz-contact-footer-inner">
              <p class="spz-contact-copy">${CONTENT.copyright}</p>
              <div class="spz-contact-footer-links">
                ${CONTENT.footerLinks.map(footerLinkHTML).join("")}
              </div>
            </div>
          </footer>`;

  // Full injected shell (grid backdrop + both steps + footer).
  const wrapperHTML = () => `
        <div class="${CONFIG.rootClass}" ${CONFIG.rootAttribute}="${CONFIG.experiment}">
          <img class="spz-contact-grid" src="${CONTENT.assets.grid}" alt="" aria-hidden="true">
          <main class="spz-contact-main">
            ${stepOneHTML()}
            ${stepTwoHTML()}
          </main>
          ${footerHTML()}
        </div>`;

  /* ===== Form relocation & restyle ===== */

  // Move the live Marketo form into the Step 2 card so validation/submission stay intact.
  const relocateForm = (form) => {
    const mount = document.querySelector("." + CONFIG.formMountClass);
    if (mount) mount.appendChild(form);
  };

  // Swap Marketo labels for the redesigned placeholders (labels themselves hidden via CSS).
  const applyPlaceholders = (form) => {
    Object.keys(CONTENT.placeholders).forEach((id) => {
      const field = form.querySelector("#" + id);
      if (field) field.setAttribute("placeholder", CONTENT.placeholders[id]);
    });
  };

  // Rewrite the opt-in copy and pre-check it once (mockup shows it checked by default).
  const setOptinLabel = (form) => {
    const optinLabel = form.querySelector(".mktoCheckboxList label");
    if (optinLabel && optinLabel.textContent.trim() !== CONTENT.optinLabel) {
      optinLabel.textContent = CONTENT.optinLabel;
    }
    const optin = form.querySelector('[name="formOptIn"]');
    if (optin && !optin.dataset.spzInit) {
      optin.checked = true;
      optin.dataset.spzInit = "1";
    }
  };

  // Tag rows for the grid, physically reorder to match the mockup (keeps tab order),
  // and hide any leftover Marketo rows (reason dropdown, hidden fields, etc.).
  const arrangeRows = (form) => {
    const orderedRows = [];

    CONTENT.rowOrder.forEach(({ selector, className }) => {
      const field = form.querySelector(selector);
      if (!field) return;
      const row = field.closest(".mktoFormRow");
      if (!row) return;
      row.classList.add("spz-row", className);
      orderedRows.push(row);
    });

    form.querySelectorAll(".mktoFormRow").forEach((row) => {
      if (!row.classList.contains("spz-row")) row.classList.add("spz-row--hidden");
    });

    // Only rewrite the DOM when order actually differs (avoids observer loops).
    const buttonRow = form.querySelector(".mktoButtonRow");
    const hiddenRows = Array.from(form.querySelectorAll(".mktoFormRow.spz-row--hidden"));
    const desired = orderedRows.concat(buttonRow ? [buttonRow] : [], hiddenRows);
    const current = Array.from(form.children).filter((el) => desired.indexOf(el) !== -1);
    const needsReorder = desired.length !== current.length || desired.some((el, i) => el !== current[i]);

    if (needsReorder) desired.forEach((row) => form.appendChild(row));
  };

  // Give the submit button its own numbered CTA class for styling/tracking.
  const styleSubmit = (form) => {
    const button = form.querySelector(".mktoButton");
    if (button) button.classList.add(CONFIG.submitCtaClass);
  };

  // Restore saved values and bind per-field save (retains input within the session).
  const syncFieldPersistence = (form) => {
    form.querySelectorAll(".mktoField").forEach((field) => {
      if (field.type === "checkbox" || field.type === "hidden" || !field.name) return;
      const key = CONFIG.storagePrefix + field.name;
      const saved = window.sessionStorage ? window.sessionStorage.getItem(key) : null;
      if (saved && !field.value) field.value = saved;

      if (field.dataset.spzPersist) return;
      field.dataset.spzPersist = "1";
      field.addEventListener("input", () => saveFieldValue(key, field.value));
    });
  };

  // Apply the full redesign pass to the relocated form.
  const configureForm = (form) => {
    applyPlaceholders(form);
    setOptinLabel(form);
    arrangeRows(form);
    styleSubmit(form);
    syncFieldPersistence(form);
  };

  // Marketo re-renders can wipe our classes/placeholders — re-apply on childList
  // changes, debounced and self-disconnecting so our own writes don't loop.
  const keepFormConfigured = (form) => {
    let scheduled = null;
    let applying = false;

    const observer = new MutationObserver(() => {
      if (applying) return;
      if (scheduled) window.clearTimeout(scheduled);
      scheduled = window.setTimeout(() => {
        scheduled = null;
        applying = true;
        observer.disconnect();
        try {
          configureForm(form);
        } finally {
          applying = false;
          observer.observe(form, { childList: true, subtree: true });
        }
      }, 50);
    });

    observer.observe(form, { childList: true, subtree: true });
  };

  /* ===== Behaviour ===== */

  // Switch between Step 1 and Step 2, updating the dynamic form heading.
  const showStep = (step, heading) => {
    const root = document.querySelector("[" + CONFIG.rootAttribute + '="' + CONFIG.experiment + '"]');
    if (!root) return;
    if (heading) {
      const title = root.querySelector(".spz-form-title");
      if (title) title.textContent = heading;
    }
    root.classList.toggle(CONFIG.stepTwoClass, step === 2);
    window.scrollTo({ top: 0 });
    log("step ->", step, heading || "");
  };

  // Wire the promo CTA, the four tiles, and the back button.
  const wireInteractions = (root) => {
    const demoCta = root.querySelector("." + CONFIG.heroCtaClass);
    if (demoCta) demoCta.addEventListener("click", () => showStep(2, demoCta.dataset.heading));

    root.querySelectorAll(".spz-tile").forEach((tile) => {
      tile.addEventListener("click", () => showStep(2, tile.dataset.heading));
    });

    const back = root.querySelector("." + CONFIG.backCtaClass);
    if (back) back.addEventListener("click", () => showStep(1));
  };

  // Hide the control page, inject the shell, relocate + restyle the real form, wire steps.
  const executeTest = (form) => {
    if (document.querySelector("[" + CONFIG.rootAttribute + '="' + CONFIG.experiment + '"]')) {
      log("skip — already injected");
      return;
    }
    document.body.classList.add(CONFIG.bodyClass);
    const anchor = findTopLevelAnchor(form);
    log("injection anchor", anchor);
    anchor.insertAdjacentHTML("afterend", wrapperHTML());
    const root = document.querySelector("[" + CONFIG.rootAttribute + '="' + CONFIG.experiment + '"]');
    relocateForm(form);
    configureForm(form);
    keepFormConfigured(form);
    wireInteractions(root);
    log("injected");
  };

  const init = () => {
    log("start", location.href);
    if (!onUrlMatch()) {
      log("url no match — bail", location.href);
      return;
    }
    log("url match — waiting for form");
    waitForElement(CONFIG.formSelector).then((form) => {
      if (!form) {
        log("form not found within timeout");
        return;
      }
      log("form found");
      executeTest(form);
    });
  };

  init();
})();

/* ===== Tracking (downfunnel template — variant) ===== */
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = true; // true / false / 'both'
  const expName = "2005"; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `spz_2005_variant`; //variantName should be _variant, _true_control etc.
  const clientDomain = ".semgrep.dev"; //domain should be .spiralyze.com

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
  } else if (squeezePage === "both") {
    hiddenValue(expName, variantName);
    window.squeezePageValue = formHiddenValue;
  }
  function hiddenValue(currentExperimentName, currentExperimentValue) {
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    var ExistingExperimentName = getCookie("ExperimentName");
    var ExistingExperimentValue = getCookie("ExperimentValue");
    var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(",") : [];

    if (!ExistingExperimentName) {
      setCookie("ExperimentName", currentExperimentName, 1);
      setCookie("ExperimentValue", currentExperimentValue, 1);
    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {
      setCookie("ExperimentName", ExistingExperimentName + "," + currentExperimentName, 1);
      setCookie("ExperimentValue", ExistingExperimentValue + "," + currentExperimentValue, 1);
    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {
      var existingNames = ExistingExperimentName.split(",");
      var existingValues = ExistingExperimentValue.split(",");
      var index = existingNames.indexOf(currentExperimentName);
      existingValues[index] = currentExperimentValue;
      setCookie("ExperimentName", existingNames.join(","), 1);
      setCookie("ExperimentValue", existingValues.join(","), 1);
    }
  }
})();
