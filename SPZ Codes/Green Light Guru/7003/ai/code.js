/* #7003 | Greenlight Guru | Resource Thank You | Form Center-Aligned (sliding) */
(function () {
  "use strict";

  /* ============ CONFIG ============ */
  const CONFIG = {
    testId: "7003",
    bodyClass: "spz_7003_v",
    section: "spz-7003-section",
    url: "/ty-resources",
    injectSelector: "main>span>div:first-child",
    injectPosition: "afterend",
    formWrapper: ".form-wrapper",
    storagePrefix: "spz7003_",
    domain: ".greenlight.guru",
    inputSel: "input.hs-input, select.hs-input, textarea.hs-input",
    submitText: "SUBMIT",
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
    hs_demo_product_dropdown: "Choose Software for Demo"
  };

  const ERROR_MESSAGES = {
    email: "Please enter a valid email.",
    firstname: "Please enter your first name.",
    lastname: "Please enter your last name.",
    dropdown_country: "Please select your country.",
    company: "Please enter your company name.",
    what_describes_your_organization_best_: "Please select your organization type.",
    demo_product_dropdown: "Please select an option."
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
            <source media="(max-width: 767.98px)" srcset="${A}background.png">
            <source media="(max-width: 1023.98px)" srcset="${A}background_1.png">
            <source media="(min-width: 1920px)" srcset="${A}background_5.png">
            <img src="${A}background_3.png" alt="" aria-hidden="true">
          </picture>
          <div class="spz-7003-content">
            <div class="spz-7003-head">
              <div class="spz-7003-thanks">
                <img class="spz-7003-thanks-icon" src="${ICON}" alt="" aria-hidden="true">
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
              ${LOGOS.map(function (l) { return `<img src="${A}${l[0]}.png" alt="" aria-hidden="true">`; }).join("")}
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
    /* down-funnel squeeze value (read by client form integration) */
    window.squeezePageValue = CONFIG.track.value;
    /* HiddenFieldName / HiddenFieldValue parallel cookie lists */
    const names = getCookie("HiddenFieldName");
    const vals = getCookie("HiddenFieldValue");
    const nameList = names ? names.split(",") : [];
    const valList = vals ? vals.split(",") : [];
    const idx = nameList.indexOf(CONFIG.track.name);
    if (idx === -1) {
      nameList.push(CONFIG.track.name);
      valList.push(CONFIG.track.value);
    } else {
      valList[idx] = CONFIG.track.value;
    }
    setCookie("HiddenFieldName", nameList.join(","), 1);
    setCookie("HiddenFieldValue", valList.join(","), 1);
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

  /* ============ VALIDATION ============ */
  function isFieldValid(field) {
    const val = (field.value || "").trim();
    if (field.hasAttribute("required") && !val) return false;
    if (field.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return false;
    return true;
  }
  function validateField(field) {
    const wrap = field.closest(".hs-form-field");
    if (!wrap) return true;
    if (isFieldValid(field)) {
      wrap.classList.remove("spz-invalid");
      const m = wrap.querySelector(":scope > .spz-error-msg");
      if (m) m.remove();
      return true;
    }
    wrap.classList.add("spz-invalid");
    let m = wrap.querySelector(":scope > .spz-error-msg");
    if (!m) {
      m = document.createElement("p");
      m.className = "spz-error-msg";
      m.setAttribute("role", "alert");
      wrap.appendChild(m);
    }
    m.textContent = ERROR_MESSAGES[field.name] || "This field is required.";
    return false;
  }

  /* ============ SLIDING FORM ============ */
  function readVal(form, name) {
    const f = form.querySelector('[name="' + name + '"]');
    return f ? (f.value || "").trim() : "";
  }
  function maybeExpand(form) {
    if (form.classList.contains("spz-7003-expanded")) return;
    const email = readVal(form, "email");
    const fn = readVal(form, "firstname");
    const ln = readVal(form, "lastname");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email && emailOk && fn && ln) form.classList.add("spz-7003-expanded");
  }
  function bindExpand(form) {
    if (boundOnce(form, "Expand")) {
      ["email", "firstname", "lastname"].forEach(function (n) {
        const f = form.querySelector('[name="' + n + '"]');
        if (!f) return;
        const h = function () { maybeExpand(form); };
        f.addEventListener("input", h);
        f.addEventListener("change", h);
        f.addEventListener("blur", h);
      });
    }
    maybeExpand(form);
  }

  /* ============ SESSION STORAGE PREFILL ============ */
  function getStore() {
    try { return window.sessionStorage; } catch (e) { return null; }
  }
  function prefillFromStorage(form) {
    setTimeout(function () {
      const store = getStore();
      if (!store) { maybeExpand(form); return; }
      const entries = [];
      for (let i = 0; i < store.length; i++) {
        const key = store.key(i);
        if (key && key.indexOf(CONFIG.storagePrefix) === 0) {
          entries.push([key.substring(CONFIG.storagePrefix.length), store.getItem(key)]);
        }
      }
      entries.forEach(function (pair) {
        const name = pair[0];
        const val = pair[1];
        if (!val) return;
        form.querySelectorAll('[name="' + name + '"]').forEach(function (f) {
          if (f.tagName === "SELECT") {
            const has = Array.prototype.some.call(f.options, function (o) { return o.value === val; });
            if (f.value !== val && has) {
              f.value = val;
              ["input", "change", "blur"].forEach(function (ev) { f.dispatchEvent(new Event(ev, { bubbles: true })); });
            }
          } else if (!f.value) {
            f.value = val;
            ["input", "change", "blur"].forEach(function (ev) { f.dispatchEvent(new Event(ev, { bubbles: true })); });
          }
        });
      });
      maybeExpand(form);
    }, 600);
  }

  /* ============ FORM ENHANCE ============ */
  function enhanceForm(form) {
    const apply = function () {
      /* Submit label + hide alt button */
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

      /* State + validation + storage save */
      form.querySelectorAll(CONFIG.inputSel).forEach(function (f) {
        const wrap = f.closest(".hs-form-field");
        if (!wrap) return;

        if (boundOnce(f, "State")) {
          const sync = function () {
            const filled = !!(f.value && String(f.value).trim().length);
            if (filled || wrap.classList.contains("hs_phone")) wrap.classList.add("spz-filled");
            else wrap.classList.remove("spz-filled");
          };
          f.addEventListener("focus", function () { wrap.classList.add("spz-focused"); });
          f.addEventListener("blur", function () { wrap.classList.remove("spz-focused"); sync(); });
          f.addEventListener("input", sync);
          f.addEventListener("change", sync);
          sync();
        }

        if (boundOnce(f, "Valid")) {
          const onTouched = function () { if (f.dataset.spz7003Touched === "1") validateField(f); };
          f.addEventListener("focus", function () { f.dataset.spz7003Touched = "1"; });
          f.addEventListener("blur", onTouched);
          f.addEventListener("change", onTouched);
          f.addEventListener("input", function () {
            if (wrap.classList.contains("spz-invalid") && isFieldValid(f)) validateField(f);
          });
        }

        if (f.name && boundOnce(f, "Store")) {
          const save = function () {
            if (f.value) {
              const store = getStore();
              if (store) {
                try { store.setItem(CONFIG.storagePrefix + f.name, f.value); } catch (e) { }
              }
            }
          };
          f.addEventListener("input", save);
          f.addEventListener("change", save);
          f.addEventListener("blur", save);
        }
      });

      bindExpand(form);

      if (boundOnce(form, "Submit")) {
        form.addEventListener("submit", function (e) {
          let firstBad = null;
          form.querySelectorAll(CONFIG.inputSel).forEach(function (f) {
            if (!f.name) return; /* skip intl-phone internals */
            const wrap = f.closest(".hs-form-field");
            if (!wrap || wrap.offsetParent === null) return; /* skip hidden / collapsed step 2 */
            f.dataset.spz7003Touched = "1";
            if (!validateField(f) && !firstBad) firstBad = f;
          });
          if (firstBad) {
            e.preventDefault();
            e.stopPropagation();
            firstBad.focus();
          }
        }, true);
      }
    };

    apply();
    prefillFromStorage(form);
    const mo = new MutationObserver(debounce(apply, 150));
    mo.observe(form, { childList: true, subtree: true });
  }

  /* ============ INIT ============ */
  function init() {
    if (location.pathname.indexOf(CONFIG.url) === -1) return;
    if (document.querySelector("." + CONFIG.section)) return;
    applyTracking();
    waitForElement(CONFIG.injectSelector)
      .then(function (ctrl) {
        if (document.querySelector("." + CONFIG.section)) return;
        document.body.classList.add(CONFIG.bodyClass);
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