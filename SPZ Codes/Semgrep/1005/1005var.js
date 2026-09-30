/* #1005 | Semgrep | Demo — Left Form Over UI | V1 (VARIANT) */

(function () {
  "use strict";

  /* ===== Config ===== */
  const CONFIG = {
    experiment: "1005",
    bodyClass: "spz_1005_v1",
    expAttr: "data-spz-exp",
    urlMatch: "/contact/demo", // run only on the demo page
    anchorSelector: ".marketo-form", // control wrapper we inject after
    formSelector: "#mktoForm_1544", // real Marketo form (kept for validation/submit)
    formId: "mktoForm_1544",
    ctaClass: "spz-1005-hero-cta", // numbered, section-scoped CTA class
    waitTimeoutMs: 15000,
    debug: false
  };

  /* ===== Content (copy / assets / per-field data) ===== */
  const CONTENT = {
    logoUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786356241/semgrep/1005/group_3712.svg",
    logoHref: "/",
    logoAlt: "Semgrep",
    heading: "Get a demo",
    g2: {
      logo: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786356241/semgrep/1005/g2-logo.svg",
      stars: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786356241/semgrep/1005/rating-stars.svg",
      score: "4.6",
      reviews: "(55 reviews)"
    },
    // background dashboard screenshot per breakpoint (V1 set)
    bg: {
      alt: "demo bg",
      d2560: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/semgrep/1005/v1_-_2560_f_auto.webp",
      d1920: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/semgrep/1005/v1_-_1920_f_auto.webp",
      d1440: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/semgrep/1005/v1_-_1440_f_auto.webp",
      t768: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/semgrep/1005/v1_-_768_f_auto.webp",
      m360: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/semgrep/1005/v1_-_360_f_auto.webp"
    },
    // field id -> mockup label + column order (drives the 2-col floating-label layout)
    fields: [
      { id: "FirstName", order: 1, label: "First name" },
      { id: "LastName", order: 2, label: "Last name" },
      { id: "Email", order: 3, label: "Email" },
      { id: "Company", order: 4, label: "Company" },
      { id: "Phone", order: 5, label: "Phone (optional)" },
      { id: "Product_Interest__c", order: 6, label: "Product interest", isSelect: true }
    ],
    disclaimer: {
      text: "Your privacy matters to us. By submitting this form, you agree to our ",
      linkText: "Privacy Policy",
      linkHref: "/legal/privacy/"
    }
  };

  /* ===== Helpers ===== */

  // Namespaced logger — silent unless CONFIG.debug is flipped on.
  const log = (...args) => {
    if (CONFIG.debug) console.log("[SPZ-1005]", ...args);
  };

  // URL gate for this experiment.
  const isTargetUrl = () => location.pathname.indexOf(CONFIG.urlMatch) !== -1;

  const getLiveForm = (fallback) => document.getElementById(CONFIG.formId) || fallback || document.querySelector(CONFIG.formSelector);

  const findField = (form, id) => document.getElementById(id) || (form && (form.querySelector('[id="' + id + '"]') || form.querySelector('[name="' + id + '"]')));

  // Same breakpoint order as <picture> sources so preload matches what the browser will paint.
  const heroImageSrc = () => {
    const w = window.innerWidth;
    if (w <= 767.98) return CONTENT.bg.m360;
    if (w <= 1023.98) return CONTENT.bg.t768;
    if (w <= 1440) return CONTENT.bg.d1440;
    if (w <= 1920) return CONTENT.bg.d1920;
    return CONTENT.bg.d2560;
  };

  // Start the LCP image while we wait for Marketo — section inject used to delay this.
  const preloadHeroImage = () => {
    if (document.getElementById("spz-1005-hero-preload")) return;
    const link = document.createElement("link");
    link.id = "spz-1005-hero-preload";
    link.rel = "preload";
    link.as = "image";
    link.href = heroImageSrc();
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
  };

  // Avoid a render-blocking @import. Skip if Inter is already on the page.
  const ensureInterFont = () => {
    if (document.getElementById("spz-1005-inter")) return;
    if (document.querySelector('link[href*="fonts.googleapis.com"][href*="Inter"]')) return;
    try {
      if (document.fonts && document.fonts.check("16px Inter")) return;
    } catch (e) {
      /* fonts.check can throw on some browsers — fall through and load */
    }
    const link = document.createElement("link");
    link.id = "spz-1005-inter";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  };

  // Resolve when a selector exists (Marketo renders the form async).
  // rAF-throttle so Marketo's many mutations only check once per frame.
  const waitForElement = (selector, timeoutMs) =>
    new Promise((resolve) => {
      const lookup = () => (selector === CONFIG.formSelector ? getLiveForm() : document.querySelector(selector));
      const existing = lookup();
      if (existing) {
        resolve(existing);
        return;
      }
      let scheduled = false;
      const root = document.body || document.documentElement;
      const observer = new MutationObserver(() => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          scheduled = false;
          const found = lookup();
          if (found) {
            observer.disconnect();
            resolve(found);
          }
        });
      });
      observer.observe(root, { childList: true, subtree: true });
      window.setTimeout(() => {
        observer.disconnect();
        resolve(lookup());
      }, timeoutMs);
    });

  /* ===== HTML builders ===== */

  // Responsive background image (desktop = full-screen backdrop, tablet/mobile = stacked block).
  const pictureHTML = () => `
            <picture class="spz-hero-bg">
              <source media="(max-width: 767.98px)" srcset="${CONTENT.bg.m360}">
              <source media="(max-width: 1023.98px)" srcset="${CONTENT.bg.t768}">
              <source media="(max-width: 1440px)" srcset="${CONTENT.bg.d1440}">
              <source media="(max-width: 1920px)" srcset="${CONTENT.bg.d1920}">
              <img src="${CONTENT.bg.d2560}" alt="${CONTENT.bg.alt}" title="${CONTENT.bg.alt}" decoding="async" fetchpriority="high">
            </picture>`;

  // G2 rating row (logo + stars + score/reviews).
  const g2HTML = () => `
            <div class="spz-hero-g2">
              <img class="spz-hero-g2-logo" src="${CONTENT.g2.logo}" alt="G2" width="32" height="32" decoding="async" fetchpriority="low">
              <img class="spz-hero-g2-stars" src="${CONTENT.g2.stars}" alt="4.6 out of 5 stars" width="98" height="18" decoding="async" fetchpriority="low">
              <span class="spz-hero-g2-rating">
                <span class="spz-hero-g2-score">${CONTENT.g2.score}</span>
                <span class="spz-hero-g2-reviews">${CONTENT.g2.reviews}</span>
              </span>
            </div>`;

  // Full section scaffold. The Marketo form is moved into .spz-hero-mount after injection.
  const sectionHTML = () => `
            <section class="spz-hero-section" data-spz-exp="1005">
              <div class="spz-hero-panel">
                <a class="spz-hero-logo" href="${CONTENT.logoHref}" aria-label="${CONTENT.logoAlt}">
                  <img src="${CONTENT.logoUrl}" alt="${CONTENT.logoAlt}" width="198" height="30" decoding="async">
                </a>
                <div class="spz-hero-content">
                  <div class="spz-hero-head">
                    <h1 class="spz-hero-title">${CONTENT.heading}</h1>
                    ${g2HTML()}
                  </div>
                  <div class="spz-hero-formwrap">
                    <div class="spz-hero-mount"></div>
                    <p class="spz-hero-disclaimer">${CONTENT.disclaimer.text}<a href="${CONTENT.disclaimer.linkHref}" target="_blank" rel="noopener">${CONTENT.disclaimer.linkText}</a></p>
                  </div>
                </div>
              </div>
              ${pictureHTML()}
            </section>`;

  /* ===== Behaviour / wiring ===== */

  // True for text/select/textarea fields that get a floating label (not checkboxes).
  const isFloatingField = (field) => !!field && field.classList && field.classList.contains("mktoField") && field.type !== "checkbox" && field.type !== "hidden";

  // Resolve the element that should receive .spz-active (wrap, else column).
  const getFloatingWrap = (field) => field.closest(".mktoFieldWrap") || field.closest(".mktoFieldDescriptor") || field.closest(".mktoFormCol");

  // Keep .spz-active in sync with value (autofill / typed text).
  const syncFloatingActive = (field) => {
    const wrap = isFloatingField(field) && getFloatingWrap(field);
    if (!wrap) return;
    wrap.classList.toggle("spz-active", String(field.value || "").trim() !== "");
  };

  const syncAllFloating = (form) => {
    const nodes = form.querySelectorAll("input.mktoField, select.mktoField, textarea.mktoField");
    for (let i = 0; i < nodes.length; i++) syncFloatingActive(nodes[i]);
  };

  /* Wire floating labels via delegation on the form element itself.
           Marketo renders (and may re-render) fields AFTER we relocate the form, so per-field
           listeners can land on stale inputs and never fire — delegating on the persistent
           form keeps every label animating. focusin/focusout/input/change all bubble. */
  const wireFloatingLabels = (form) => {
    if (!form || form.dataset.spzFloatWired === "1") return;
    form.dataset.spzFloatWired = "1";

    form.addEventListener("focusin", (event) => {
      const wrap = isFloatingField(event.target) && getFloatingWrap(event.target);
      if (wrap) wrap.classList.add("spz-active");
    });

    form.addEventListener("focusout", (event) => {
      const wrap = isFloatingField(event.target) && getFloatingWrap(event.target);
      if (!wrap) return;
      if (String(event.target.value || "").trim() === "") {
        wrap.classList.remove("spz-active");
      }
    });

    const onFieldValue = (event) => {
      if (isFloatingField(event.target)) syncFloatingActive(event.target);
    };
    form.addEventListener("input", onFieldValue);
    form.addEventListener("change", onFieldValue);
  };

  // Apply mockup labels and floating-label behaviour to each field.
  const decorateFields = (form) => {
    if (form.dataset.spzFieldsDecorated === "1") {
      wireFloatingLabels(form);
      return;
    }

    let allFound = true;
    for (let i = 0; i < CONTENT.fields.length; i++) {
      const field = CONTENT.fields[i];
      const input = findField(form, field.id);
      if (!input) {
        allFound = false;
        log("field missing —", field.id);
        continue;
      }
      const col = input.closest(".mktoFieldDescriptor") || input.closest(".mktoFormCol");
      const wrap = input.closest(".mktoFieldWrap") || col;
      const labelEl = (wrap && wrap.querySelector(".mktoLabel")) || (col && col.querySelector(".mktoLabel"));
      if (col) col.classList.add("spz-field-col");
      if (labelEl) labelEl.textContent = field.label;
      if (field.isSelect && wrap) {
        wrap.classList.add("spz-active"); // select always has a value
      }
    }

    if (allFound) form.dataset.spzFieldsDecorated = "1";
    wireFloatingLabels(form);
  };

  // Resolve a field's Marketo column node.
  const getFieldCol = (form, id) => {
    const input = findField(form, id);
    return input && (input.closest(".mktoFieldDescriptor") || input.closest(".mktoFormCol"));
  };

  // Move fields in the DOM so tab order matches the visual 2-col layout
  // (CSS order does NOT affect keyboard tabbing).
  // Desired: First/Last → Email/Company → Phone/Product → opt-in → Submit
  const reorderFormFields = (form) => {
    if (!form) return;

    const optIn = form.querySelector('input[name="formOptIn"]');
    // Already fully ordered (including opt-in) — skip a second expensive DOM pass.
    if (form.dataset.spzReordered === "1" && optIn && form.querySelector(".spz-field-row")) return;

    // Marketo sometimes sets tabindex > 0 which fights DOM order — normalize.
    const tabbable = form.querySelectorAll("input, select, textarea, button, a");
    for (let i = 0; i < tabbable.length; i++) {
      if (tabbable[i].tabIndex > 0) tabbable[i].tabIndex = 0;
    }

    const pairs = [
      ["FirstName", "LastName"],
      ["Email", "Company"],
      ["Phone", "Product_Interest__c"]
    ];

    const orderedNodes = [];
    const staleRows = [];

    for (let p = 0; p < pairs.length; p++) {
      const ids = pairs[p];
      const cols = [];
      for (let i = 0; i < ids.length; i++) {
        const col = getFieldCol(form, ids[i]);
        if (col) cols.push(col);
      }
      if (!cols.length) continue;

      for (let i = 0; i < cols.length; i++) {
        const oldRow = cols[i].closest(".mktoFormRow");
        if (oldRow && staleRows.indexOf(oldRow) === -1) staleRows.push(oldRow);
      }

      const row = document.createElement("div");
      row.className = "mktoFormRow spz-field-row";
      for (let i = 0; i < cols.length; i++) row.appendChild(cols[i]);
      orderedNodes.push(row);
    }

    const optInCol = optIn && (optIn.closest(".mktoFieldDescriptor") || optIn.closest(".mktoFormCol"));
    const optInRow = optIn && optIn.closest(".mktoFormRow");
    const buttonRow = form.querySelector(".mktoButtonRow");

    if (optInCol) optInCol.classList.add("spz-optin-col");
    if (optInRow) orderedNodes.push(optInRow);
    if (buttonRow) orderedNodes.push(buttonRow);

    // Batch appends into one reflow. New rows are detached until this append —
    // do NOT skip those or the field columns vanish from the form.
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < orderedNodes.length; i++) {
      if (orderedNodes[i]) fragment.appendChild(orderedNodes[i]);
    }
    form.appendChild(fragment);

    // Drop emptied leftover rows from the old Marketo layout (not our new rows).
    for (let i = 0; i < staleRows.length; i++) {
      const row = staleRows[i];
      if (!row.isConnected || orderedNodes.indexOf(row) !== -1) continue;
      if (!row.querySelector(".mktoFormCol, .mktoFieldDescriptor, .mktoButton")) {
        row.remove();
      }
    }

    if (optIn) form.dataset.spzReordered = "1";
  };

  // Mark the opt-in checkbox column so CSS can lay it out full-width.
  // Blur on uncheck so the custom checkbox does not stay in a focused look after click.
  const decorateOptIn = (form) => {
    const checkbox = form.querySelector('input[name="formOptIn"]');
    if (!checkbox) return;
    const col = checkbox.closest(".mktoFieldDescriptor") || checkbox.closest(".mktoFormCol");
    if (col) col.classList.add("spz-optin-col");
    if (checkbox.dataset.spzOptInBlur !== "1") {
      checkbox.dataset.spzOptInBlur = "1";
      checkbox.addEventListener("change", () => {
        if (!checkbox.checked) checkbox.blur();
      });
    }
  };

  // Block native HTML form navigation. Marketo submits via AJAX; if its handler errors
  // (e.g. on an unknown field), the browser otherwise does a full page refresh.
  const guardNativeSubmit = (form) => {
    if (!form || form.dataset.spzSubmitGuard === "1") return;
    form.dataset.spzSubmitGuard = "1";
    form.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
      },
      true
    );
  };

  // Tag the submit button with the numbered CTA class.
  const decorateButton = (form) => {
    const button = form.querySelector(".mktoButton");
    if (button) button.classList.add(CONFIG.ctaClass);
  };

  // Run all form decorators in order (safe to call again after Marketo finishes rendering).
  const enhanceForm = (form) => {
    if (!form) return;
    form.classList.add("spz-hero-form");
    guardNativeSubmit(form);
    decorateFields(form);
    decorateOptIn(form);
    reorderFormFields(form); // DOM move so tab order matches visual layout
    decorateButton(form);
    syncAllFloating(form);
    log("form enhanced");
  };

  // When opt-in + submit exist, finish layout. Observer (not 100ms poll) watches the form only.
  const whenFormComplete = (form, onComplete) => {
    let done = false;
    const tryComplete = () => {
      if (done) return;
      const liveForm = getLiveForm(form);
      if (!(liveForm && liveForm.querySelector('input[name="formOptIn"]') && liveForm.querySelector(".mktoButton"))) return;
      done = true;
      observer.disconnect();
      onComplete(liveForm);
    };

    const observer = new MutationObserver(tryComplete);
    observer.observe(form, { childList: true, subtree: true });
    tryComplete(); // MutationObserver does not fire for nodes already present
    window.setTimeout(() => observer.disconnect(), CONFIG.waitTimeoutMs);
  };

  // Build the scaffold, relocate the real Marketo form into it, then style it.
  const injectSection = (form) => {
    document.body.classList.add(CONFIG.bodyClass);
    // Append on body so the original page can skip paint under the fixed overlay.
    document.body.insertAdjacentHTML("beforeend", sectionHTML());
    // Tag only nodes that already exist — later body children (e.g. Marketo/reCAPTCHA) stay visible.
    const bodyKids = document.body.children;
    for (let i = 0; i < bodyKids.length; i++) {
      if (!bodyKids[i].classList.contains("spz-hero-section")) {
        bodyKids[i].setAttribute("data-spz-underlay", "1");
      }
    }
    const mount = document.querySelector(".spz-hero-mount");
    if (!mount) {
      log("mount missing — abort");
      return;
    }
    mount.appendChild(form); // move the live form so Marketo validation/submit keep working

    // Enhance immediately, then again on MktoForms2.whenReady in case fields render later.
    enhanceForm(form);
    if (window.MktoForms2 && typeof window.MktoForms2.whenReady === "function") {
      window.MktoForms2.whenReady(() => {
        const liveForm = getLiveForm(form);
        if (liveForm) enhanceForm(liveForm);
      });
    }

    whenFormComplete(form, (liveForm) => {
      decorateOptIn(liveForm);
      reorderFormFields(liveForm);
    });

    log("injected & form relocated");
  };

  /* ===== Init ===== */
  const init = () => {
    log("script start", location.href);
    if (!isTargetUrl()) {
      log("URL check failed", location.href);
      return;
    }
    log("URL check passed", location.href);
    if (document.querySelector('[data-spz-exp="1005"]')) {
      log("already injected — skip");
      return;
    }
    ensureInterFont();
    preloadHeroImage();
    log("waiting for form", CONFIG.formSelector);
    waitForElement(CONFIG.formSelector, CONFIG.waitTimeoutMs).then((form) => {
      if (!form) {
        log("form not found within timeout — abort");
        return;
      }
      log("form found");
      injectSection(form);
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

/* ===== Downfunnel tracking (variant) ===== */
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = true; // true / false / 'both'
  const expName = "1005"; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `spz_1005_variant`; //variantName should be _variant, _true_control etc.
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
