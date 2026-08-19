// #2033 | BILL | Home | Form Abandon Popup (Large) - VARIANT (converted from #2027 footer to modal)
//
// WHAT THIS DOES
// A personalized re-engagement experience for returning users who started a
// signup form and abandoned it. Same behaviour as #2027, but shown as a
// centered modal instead of a sticky footer.
//
// HIGH-LEVEL FLOW
//   1. TRACK   — while a user fills the target form, every field value is saved
//                to a cookie (spz-2033-v1-form-data, 30 days). This is what
//                marks the visitor as a "form abandoner".
//   2. TRIGGER — when that user returns within 30 days and spends 8s on a
//                bill.com URL, the modal slides in from the top.
//   3. CTA     — clicking the CTA sends them back to the page they last filled
//                the form on and pre-populates every field they'd completed.
//   4. CLOSE   — closing the modal (exit button only) suppresses it for 7 days.
//
// COOKIES (all scoped to bill.com)
//   spz-2033-v1-form-data  — JSON of the user's form entries + the page URL. 30d.
//   spz-2033-v1-closed     — set when the user closes the modal. Suppresses for 7d.
//   spz-2033-v1-submitted  — set on form submit. Stops the experience for 30d.
//
// BILL native localStorage
//   bdcUserData — written by the site when a form is submitted on any page.
//                 If present with identifying fields, do not run/show the modal.
//
// WHERE TO CONFIGURE (search for these):
//   stickyCtaSelector      — selector(s) for the page's sticky CTA to hide.
//   form#up-form, form#directSignup, form#wf-form-Console-Signup-Small, ... — the form selectors this test attaches to.
//   15000 / 7000 / 60 / 70  — the trigger delay + polling timings.

// Poll for <body>, then bootstrap the experience exactly once.
// The `!document.querySelector('spz_2033_v1')` guard is a belt-and-braces
// check against a (non-existent) <spz_2033_v1> element so init only runs once.
//
// Non-SPA + bfcache: Back can restore a stale snapshot (empty <body>, no scripts).
// pageshow reload below refreshes those cached pages so listeners/modal still run.

console.log("Variant 2033");

(function () {
  function normalizePath2033Early(path) {
    var normalized = (path || "").replace(/\/$/, "");
    return normalized || "/";
  }

  function getCookieEarly(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  function parseFormCookieEarly(raw) {
    try {
      return JSON.parse(decodeURIComponent(raw));
    } catch (e) {
      return JSON.parse(raw);
    }
  }

  function hasAbandonedFormDataEarly(data) {
    if (!data || typeof data !== "object") return false;
    return Object.keys(data).some(function (key) {
      if (key === "url" || key === "leftAt") return false;
      var val = data[key];
      return val !== "" && val != null && val !== false;
    });
  }

  function hasSubmittedBdcUserDataEarly() {
    try {
      var raw = localStorage.getItem("bdcUserData");
      if (!raw) return false;
      var data = JSON.parse(raw);
      return !!(data && typeof data === "object" && (data.email || data.firstName));
    } catch (e) {
      return false;
    }
  }

  function hasAbandonFormCookie2033() {
    if (getCookieEarly("spz-2033-v1-closed") || getCookieEarly("spz-2033-v1-submitted") || hasSubmittedBdcUserDataEarly()) return false;
    var raw = getCookieEarly("spz-2033-v1-form-data");
    if (!raw) return false;
    try {
      return hasAbandonedFormDataEarly(parseFormCookieEarly(raw));
    } catch (e2) {
      return false;
    }
  }

  function shouldReloadAfterBfcache2033() {
    if (!hasAbandonFormCookie2033()) return false;
    try {
      var formData = parseFormCookieEarly(getCookieEarly("spz-2033-v1-form-data"));
      return normalizePath2033Early(formData.url) !== normalizePath2033Early(window.location.pathname);
    } catch (e) {
      return false;
    }
  }

  function isPageStaleAfterBfcache2033() {
    var body = document.body;
    if (!body || body.children.length === 0) return true;
    if (!document.querySelector("main") && !document.querySelector(".main-wrapper") && body.children.length < 2) {
      return true;
    }
    return false;
  }

  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) return;
    if (isPageStaleAfterBfcache2033() || shouldReloadAfterBfcache2033()) {
      window.location.reload();
    }
  });

  window.addEventListener("pagehide", function () {
    if (!hasAbandonFormCookie2033()) return;
    try {
      var unloadFormData = parseFormCookieEarly(getCookieEarly("spz-2033-v1-form-data"));
      if (normalizePath2033Early(unloadFormData.url) === normalizePath2033Early(window.location.pathname)) {
        sessionStorage.setItem("spz-2033-v1-page-unload-same-form", "true");
      }
    } catch (e3) {}
  });
})();

const bodyInterval2033 = setInterval(function () {
  if (document.querySelector("body") && !document.querySelector("spz_2033_v1")) {
    clearInterval(bodyInterval2033);

    // BILL writes bdcUserData on any successful form submit. If it exists,
    // this visitor already converted — do not run or show the abandon modal.
    const hasSubmittedBdcUserData = () => {
      try {
        const raw = localStorage.getItem("bdcUserData");
        if (!raw) return false;
        const data = JSON.parse(raw);
        return !!(data && typeof data === "object" && (data.email || data.firstName));
      } catch (e) {
        return false;
      }
    };

    if (hasSubmittedBdcUserData()) return;

    document.querySelector("body").classList.add("spz_2033_v1");
    // Report this visitor into the variant bucket for the AB platform.
    localStorage.setItem("bdcAbTest15", "2033P-v1");

    /* ===== Cookie helpers (bill.com scoped) ===== */

    // Write a cookie for `exdays` days.
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";secure;" + expires + ";domain=bill.com;path=/";
    }
    // Read a cookie's value (returns undefined if absent).
    function get_cookie(name) {
      let value = `; ${document.cookie}`;
      let parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    // Expire a cookie immediately.
    function delete_cookie(name) {
      var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
      document.cookie = name + "=;secure;" + expires + ";domain=bill.com;path=/";
    }

    // Cookie must contain at least one filled field — not just a page URL.
    const hasAbandonedFormData = (data) => {
      if (!data || typeof data !== "object") return false;
      return Object.keys(data).some(function (key) {
        if (key === "url" || key === "leftAt") return false;
        const value = data[key];
        return value !== "" && value != null && value !== false;
      });
    };

    const getSavedFormData = () => {
      const raw = get_cookie("spz-2033-v1-form-data");
      if (!raw) return null;
      try {
        return JSON.parse(decodeURIComponent(raw));
      } catch (e) {
        try {
          return JSON.parse(raw);
        } catch (e2) {
          return null;
        }
      }
    };

    const normalizePath2033 = (path) => {
      const normalized = (path || "").replace(/\/$/, "");
      return normalized || "/";
    };

    const isPageReload2033 = () => {
      try {
        const nav = performance.getEntriesByType("navigation")[0];
        if (nav && nav.type) return nav.type === "reload";
      } catch (e) {}
      return !!(performance.navigation && performance.navigation.type === 1);
    };

    let userResumedFormAfterReload2033 = false;
    let refreshedSamePageAfterUnload2033 = sessionStorage.getItem("spz-2033-v1-page-unload-same-form") === "true";
    let pendingReloadPopupSchedule2033 = false;
    sessionStorage.removeItem("spz-2033-v1-page-unload-same-form");

    const hasUserFilledCurrentPage2033 = () => {
      return normalizePath2033(sessionStorage.getItem("spz-2033-v1-user-filled-page")) === normalizePath2033(window.location.pathname);
    };

    const markUserFilledCurrentPage2033 = () => {
      sessionStorage.setItem("spz-2033-v1-user-filled-page", normalizePath2033(window.location.pathname));
    };

    const isReturningToSavedForm2033 = (formData) => {
      const returning = sessionStorage.getItem("spz-2033-v1-returning-to-form");
      if (!returning || !formData) return false;
      return normalizePath2033(returning) === normalizePath2033(window.location.pathname) && normalizePath2033(formData.url) === normalizePath2033(window.location.pathname);
    };

    // Match #2027/#2033TC footer gate: cookie + not on the abandoned form page,
    // except after refresh on that same page (reload + saved abandon cookie).
    // need-refresh suppresses while the user is actively filling the form on-page.
    const canShowAbandonPopup = () => {
      const formData = getSavedFormData();
      if (!formData || !hasAbandonedFormData(formData)) return false;
      if (get_cookie("spz-2033-v1-closed") || get_cookie("spz-2033-v1-submitted") || hasSubmittedBdcUserData()) return false;

      const onSamePageAsForm = normalizePath2033(formData.url) === normalizePath2033(window.location.pathname);
      const refreshedAfterAbandon =
        refreshedSamePageAfterUnload2033 || sessionStorage.getItem("spz-2033-v1-abandonment-ready") === "true" || (isPageReload2033() && onSamePageAsForm && !userResumedFormAfterReload2033);

      if (onSamePageAsForm && !refreshedAfterAbandon) return false;
      if (document.querySelector(".spz_2033_v1.need-refresh") && !(onSamePageAsForm && refreshedAfterAbandon)) return false;
      return true;
    };

    (function markSamePageReloadAbandonment2033() {
      const formData = getSavedFormData();
      if (formData && hasAbandonedFormData(formData) && normalizePath2033(formData.url) === normalizePath2033(window.location.pathname) && (refreshedSamePageAfterUnload2033 || isPageReload2033())) {
        sessionStorage.setItem("spz-2033-v1-abandonment-ready", "true");
      }
    })();

    const syncNeedRefreshState2033 = () => {
      const formData = getSavedFormData();
      const bodyEl = document.querySelector(".spz_2033_v1");
      if (!bodyEl || !formData || !hasAbandonedFormData(formData)) return;
      if (normalizePath2033(formData.url) !== normalizePath2033(window.location.pathname)) {
        bodyEl.classList.remove("need-refresh");
      } else if (refreshedSamePageAfterUnload2033 || isPageReload2033()) {
        bodyEl.classList.remove("need-refresh");
      }
    };

    const markFormAbandoned2033 = (fromPath) => {
      const pathToCheck = fromPath || window.location.pathname;
      if (captureFormValues2033 && hasUserFilledCurrentPage2033()) {
        captureFormValues2033(false, { isLeavingPage: true });
      }
      const formData = getSavedFormData();
      if (formData && hasAbandonedFormData(formData) && normalizePath2033(formData.url) === normalizePath2033(pathToCheck)) {
        formData.leftAt = Date.now();
        setCookie("spz-2033-v1-form-data", encodeURIComponent(JSON.stringify(formData)), 30);
        sessionStorage.setItem("spz-2033-v1-abandonment-ready", "true");
      }
    };

    // Pages where same-page CTA should jump to signup instead of #formjump.
    const isCtaFormJumpExcluded = () => {
      const currentPath = window.location.pathname.replace(/\/$/, "");

      const excludedPaths = [
        "/product/ai",
        "/product/api",
        "/product/international-payments",
        "/partners/accountant-resource-center",
        "/demo-request",
        "/product/credit",
        "/product/virtual-cards",
        "/product/expenses",
        "/product/budgets",
        "/product/reporting",
        "/product/rewards",
        "/product/reimbursements",
        "/product/payments-services"
      ];

      // Returns true if the exact pathname exists in the array
      return excludedPaths.includes(currentPath);
    };

    /* ===== Modal open / close ===== */

    const blurActiveFormField2033 = () => {
      const activeEl = document.activeElement;
      if (!activeEl || activeEl === document.body) return;
      const tag = activeEl.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || activeEl.isContentEditable) {
        activeEl.blur();
      }
    };

    let modalFocusTrapBound2033 = false;

    const getModalFocusables2033 = (modal) => {
      if (!modal) return [];
      return Array.from(modal.querySelectorAll('a[href]:not(.hide), button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(function (el) {
        return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
      });
    };

    const setBackgroundInert2033 = (inert) => {
      Array.from(document.body.children).forEach(function (child) {
        if (child.classList.contains("spz-2033-modal")) return;
        if (inert) {
          child.setAttribute("inert", "");
        } else {
          child.removeAttribute("inert");
        }
      });
    };

    const onModalTabKey2033 = function (e) {
      if (e.key !== "Tab") return;
      const modal = document.querySelector(".spz-2033-modal.show");
      if (!modal) return;
      const focusables = getModalFocusables2033(modal);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const onModalFocusIn2033 = function (e) {
      const modal = document.querySelector(".spz-2033-modal.show");
      if (!modal || modal.contains(e.target)) return;
      const focusables = getModalFocusables2033(modal);
      if (focusables.length) focusables[0].focus();
    };

    const enableModalFocusTrap2033 = () => {
      const modal = document.querySelector(".spz-2033-modal");
      if (!modal || modalFocusTrapBound2033) return;
      modalFocusTrapBound2033 = true;
      setBackgroundInert2033(true);
      document.addEventListener("keydown", onModalTabKey2033, true);
      document.addEventListener("focusin", onModalFocusIn2033, true);
      const focusables = getModalFocusables2033(modal);
      if (focusables.length) focusables[0].focus();
    };

    const disableModalFocusTrap2033 = () => {
      if (!modalFocusTrapBound2033) return;
      modalFocusTrapBound2033 = false;
      setBackgroundInert2033(false);
      document.removeEventListener("keydown", onModalTabKey2033, true);
      document.removeEventListener("focusin", onModalFocusIn2033, true);
    };

    // Reveal the modal (CSS slides it in from the top) + freeze the page behind
    // it. GATE: only show to an abandoner (has form-data cookie) who hasn't
    // already closed or submitted. This gate is the whole point of the test —
    // if spz-2033-v1-form-data is never written, the modal never appears.
    const showModal = () => {
      if (!canShowAbandonPopup()) return;
      blurActiveFormField2033();
      document.querySelector(".spz-2033-modal").classList.add("show");
      document.querySelector("body").classList.add("spz-2033-modal-open");
      enableModalFocusTrap2033();
      // hideStickyCta(); // hide the page's sticky CTA while the modal is up
    };
    // Slide the modal away to the top + release the page.
    const hideModal = () => {
      disableModalFocusTrap2033();
      document.querySelector(".spz-2033-modal").classList.remove("show");
      document.querySelector("body").classList.remove("spz-2033-modal-open");
      // showStickyCta(); // restore the sticky CTA on close (remove if it should stay hidden)
    };

    /* ===== Build + wire the modal ===== */

    // Inject the modal markup once, then attach its close + CTA handlers.
    // Skipped entirely if the user already closed or submitted (so we never
    // even add the DOM for suppressed users).
    const addModal = () => {
      if (!document.querySelector(".spz-2033-modal") && !get_cookie("spz-2033-v1-closed") && !get_cookie("spz-2033-v1-submitted") && !hasSubmittedBdcUserData()) {
        document.querySelector("body").insertAdjacentHTML(
          "beforeend",
          `
            <div class="spz-2033-modal" data-spz-exp="2033">
              <div class="wrapper">
                <div class="content">
                  <div class="copy">
                    <div class="title">Finish signing up for your 30-day risk-free trial</div>
                    <div class="text">Start streamlining AP/AR, spend management, and accounting in 5 minutes. Get business credit and cards.</div>
                  </div>
                  <div class="action">
                    <button class="spz2033_v cta-button">
                      Continue With Risk-Free Trial
                    </button>
                    <div class="legal">The BILL Divvy Card may be issued by one of Divvy Pay, LLC's <a href="/legal/bank-partners" class="legal-link">bank partners</a>. The BILL Divvy Card is not a deposit product. For your specific lender, see your Card Agreement.</div>
                    <!-- Hidden native "jump to form" anchor; the CTA clicks this to
                         scroll to / focus the on-page form when we stay on the page. -->
                    <a class="spz2033_v button hide" href="#formjump" role="button" aria-label="Button Aria Label" tabindex="-1"><div>Get Started</div></a>
                  </div>
                </div>
                <div class="image">
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2033/ui-image_1.png" alt="BILL dashboard preview">
                </div>
                <button class="spz2033_v close-button"></button>
              </div>
            </div>
          `
        );
        // Close button: suppress the modal for 7 days, then hide it.
        document.querySelector(".spz-2033-modal .wrapper > .close-button").addEventListener("click", function () {
          // Closing the modal suppresses it for 7 days
          setCookie("spz-2033-v1-closed", "true", 7);
          hideModal();
        });

        // CTA: send the user to the form they last interacted with.
        document.querySelector(".spz-2033-modal .wrapper .content .cta-button").addEventListener("click", function () {
          const cookieData = get_cookie("spz-2033-v1-form-data");
          if (cookieData) {
            const formData = JSON.parse(decodeURIComponent(cookieData));
            // Saved form lives on a DIFFERENT page → navigate there (fields get
            // refilled on that page by the autofill block below on load).
            if (normalizePath2033(formData["url"]) !== normalizePath2033(window.location.pathname)) {
              hideModal();
              sessionStorage.setItem("spz-2033-v1-returning-to-form", normalizePath2033(formData["url"]));
              sessionStorage.setItem("spz-2033-v1-cta-clicked", "true");
              window.location.href = formData["url"];
            } else {
              // Saved form is on THIS page → jump to it in place and refill,
              // unless we're on an excluded page or there's no form anchor.
              if (document.querySelector("#formjump") && !isCtaFormJumpExcluded()) {
                document.querySelector('.spz-2033-modal .wrapper .content a[href="#formjump"]').click();
                localStorage.setItem("bdcAbTest15", "2033P-v1-autofill");
                hideModal();
              } else {
                hideModal();
                window.location.href = "https://www.bill.com/signup";
              }
            }
          } else {
            // No saved data → best-effort: jump to an on-page form, else signup.
            if (document.querySelector("#formjump") && !isCtaFormJumpExcluded()) {
              document.querySelector('.spz-2033-modal .wrapper .content a[href="#formjump"]').click();
              hideModal();
            } else {
              hideModal();
              window.location.href = "https://www.bill.com/signup";
            }
          }
          // set session storage cta clicked
          sessionStorage.setItem("spz-2033-v1-cta-clicked", "true");
        });
      }
    };
    // Never build the modal on the signup page itself (that's the destination).
    if (window.location.pathname.indexOf("/signup") == -1) {
      addModal();
    }

    /* ===== Form: autofill (read) + tracking (write) — mirrors #2027 rollout ===== */
    let myForm;
    let formState = {};
    let formBound2033 = false;
    let captureFormValues2033 = null;
    let applyingSavedData2033 = false;

    const readFormValuesIntoState2033 = (state, allInputText, allCheckbox, allSelect, allRadio) => {
      let hasValues = false;
      allInputText.forEach((input) => {
        if (input.id && input.value && input.value.trim() !== "") {
          state[input.id] = input.value;
          hasValues = true;
        }
      });
      allCheckbox.forEach((cb) => {
        if (cb.id && cb.checked) {
          state[cb.id] = cb.checked;
          hasValues = true;
        }
      });
      allSelect.forEach((sel) => {
        if (sel.id && sel.value) {
          state[sel.id] = sel.value;
          hasValues = true;
        }
      });
      allRadio.forEach((rb) => {
        if (rb.checked && rb.name) {
          state[rb.name] = rb.id;
          hasValues = true;
        }
      });
      return hasValues;
    };

    const applySavedFormData2033 = (formData, allInputText, allCheckbox, allSelect, allRadio, forceOverwrite) => {
      if (!formData || normalizePath2033(formData.url) !== normalizePath2033(window.location.pathname)) return;

      applyingSavedData2033 = true;
      try {
        allInputText.forEach((input) => {
          if (!formData[input.id]) return;
          if (forceOverwrite || input.value === "") {
            input.value = formData[input.id];
            input.dispatchEvent(new Event("change", { bubbles: true }));
            input.dispatchEvent(new Event("input", { bubbles: true }));
          }
        });

        allCheckbox.forEach((cb) => {
          if (formData[cb.id]) {
            cb.checked = formData[cb.id];
            cb.dispatchEvent(new Event("change", { bubbles: true }));
            cb.dispatchEvent(new Event("input", { bubbles: true }));
          }
        });

        allSelect.forEach((sel) => {
          if (formData[sel.id]) {
            sel.value = formData[sel.id];
            sel.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });

        allRadio.forEach((rb) => {
          if (formData[rb.name] === rb.id) {
            rb.checked = true;
            rb.click();
            rb.dispatchEvent(new Event("change", { bubbles: true }));
            rb.dispatchEvent(new Event("input", { bubbles: true }));
          }
        });
      } finally {
        applyingSavedData2033 = false;
      }
    };

    const bindFormTracking2033 = () => {
      if (isCtaFormJumpExcluded()) return;
      if (formBound2033 && myForm && document.contains(myForm)) return;
      if (formBound2033 && (!myForm || !document.contains(myForm))) {
        formBound2033 = false;
        myForm = null;
        captureFormValues2033 = null;
      }

      const allForm = document.querySelectorAll("form#up-form, form#wf-form-Spend-Expense, form#directSignup, form#wf-form-Console-Signup-Small");
      for (let i = 0; i < allForm.length; i++) {
        if (allForm[i] && allForm[i].offsetHeight > 0 && allForm[i].querySelector("#firstName")) {
          formBound2033 = true;
          myForm = allForm[i];
          const allInputText = myForm.querySelectorAll('input[type="text"],input[type="email"],input[type="tel"],input[type="number"]');
          const allCheckbox = myForm.querySelectorAll('input[type="checkbox"]');
          const allSelect = myForm.querySelectorAll("select");
          const allRadio = myForm.querySelectorAll('input[type="radio"]');

          const cookieData = get_cookie("spz-2033-v1-form-data");
          if (cookieData) {
            try {
              const formData = JSON.parse(decodeURIComponent(cookieData));
              const forceAutofill2033 = isReturningToSavedForm2033(formData);
              if (sessionStorage.getItem("spz-2033-v1-cta-clicked") || forceAutofill2033) {
                localStorage.setItem("bdcAbTest15", "2033P-v1-autofill");
              }

              if (normalizePath2033(formData["url"]) === normalizePath2033(window.location.pathname)) {
                formState = formData;
                applySavedFormData2033(formData, allInputText, allCheckbox, allSelect, allRadio, forceAutofill2033);
                if (forceAutofill2033) {
                  document.querySelector(".spz_2033_v1").classList.add("need-refresh");
                  sessionStorage.removeItem("spz-2033-v1-returning-to-form");
                  if (window.location.pathname.indexOf("/signup") == -1 && window.location.pathname.indexOf("/product/spend-and-expense") == -1) {
                    sessionStorage.removeItem("spz-2033-v1-cta-clicked");
                  }
                  setTimeout(function () {
                    applySavedFormData2033(getSavedFormData(), allInputText, allCheckbox, allSelect, allRadio, true);
                  }, 500);
                  setTimeout(function () {
                    applySavedFormData2033(getSavedFormData(), allInputText, allCheckbox, allSelect, allRadio, true);
                  }, 1500);
                }
              }
            } catch (e) {
              console.error("Error parsing form cookie", e);
            }
          }

          // True when cookie already stores an abandoned form from a DIFFERENT page.
          // Prefill / autofill on the current page must not steal that abandonment URL.
          const hasOtherPageAbandonment2033 = () => {
            const savedData = getSavedFormData();
            return !!(savedData && hasAbandonedFormData(savedData) && normalizePath2033(savedData.url) !== normalizePath2033(window.location.pathname));
          };

          const persistFormState2033 = (fromUserInput, isTrustedInput) => {
            if (!hasAbandonedFormData(formState)) return;
            // Passive persist (prefill on bind / leave capture) must not overwrite
            // abandonment data that belongs to another page. Real user input may.
            if (fromUserInput === false && hasOtherPageAbandonment2033()) {
              return;
            }
            formState["url"] = window.location.pathname;
            if (fromUserInput !== false) {
              delete formState.leftAt;
              sessionStorage.removeItem("spz-2033-v1-abandonment-ready");
              refreshedSamePageAfterUnload2033 = false;
              if (isTrustedInput !== false) {
                userResumedFormAfterReload2033 = true;
              }
            }
            markUserFilledCurrentPage2033();
            sessionStorage.setItem("spz-2033-v1-filled-this-session", "true");
            setCookie("spz-2033-v1-form-data", encodeURIComponent(JSON.stringify(formState)), 30);
            if (fromUserInput !== false || (!refreshedSamePageAfterUnload2033 && !isPageReload2033())) {
              document.querySelector(".spz_2033_v1").classList.add("need-refresh");
            }
          };

          const resetFormStateIfOtherPage2033 = () => {
            const savedData = getSavedFormData();
            if (savedData && normalizePath2033(savedData.url) !== normalizePath2033(window.location.pathname)) {
              formState = { url: window.location.pathname };
            } else if (savedData && normalizePath2033(savedData.url) === normalizePath2033(window.location.pathname)) {
              formState = Object.assign({}, savedData);
            } else {
              formState = { url: window.location.pathname };
            }
          };

          const onFormFieldChange2033 = (e) => {
            if (applyingSavedData2033) return;
            resetFormStateIfOtherPage2033();
            readFormValuesIntoState2033(formState, allInputText, allCheckbox, allSelect, allRadio);
            persistFormState2033(true, !e || e.isTrusted !== false);
          };

          // Capture prefilled values without stealing another page's abandonment URL.
          const capturePrefillOnBind2033 = () => {
            if (hasOtherPageAbandonment2033()) return;
            resetFormStateIfOtherPage2033();
            if (readFormValuesIntoState2033(formState, allInputText, allCheckbox, allSelect, allRadio)) {
              persistFormState2033(false);
            }
          };

          captureFormValues2033 = function (fromUserInput, options) {
            options = options || {};
            if (!fromUserInput && options.isLeavingPage) {
              // Only capture-on-leave if the user actually filled THIS page.
              // Prefill alone must not re-point abandonment to the current URL.
              if (!hasUserFilledCurrentPage2033()) return;
              if (hasOtherPageAbandonment2033()) return;
              resetFormStateIfOtherPage2033();
              readFormValuesIntoState2033(formState, allInputText, allCheckbox, allSelect, allRadio);
              persistFormState2033(false);
            }
          };

          allInputText.forEach((input) => {
            input.addEventListener("input", onFormFieldChange2033);
          });
          allCheckbox.forEach((checkbox) => {
            checkbox.addEventListener("input", onFormFieldChange2033);
          });
          allSelect.forEach((select) => {
            select.addEventListener("change", onFormFieldChange2033);
          });
          allRadio.forEach((radio) => {
            radio.addEventListener("change", function (e) {
              if (!e.target.checked) return;
              onFormFieldChange2033(e);
            });
          });

          // Prefill / autofill may not fire input events — capture once on bind,
          // but never overwrite an abandonment cookie from another page.
          capturePrefillOnBind2033();
          setTimeout(capturePrefillOnBind2033, 500);
          setTimeout(capturePrefillOnBind2033, 1500);

          myForm.addEventListener("submit", () => {
            setCookie("spz-2033-v1-submitted", "true", 30);
            delete_cookie("spz-2033-v1-form-data");
            if (document.querySelector(".spz-2033-modal")) hideModal();
          });

          if (refreshedSamePageAfterUnload2033 || isPageReload2033()) {
            syncNeedRefreshState2033();
            pendingReloadPopupSchedule2033 = true;
          }

          break;
        }
      }
    };

    const startFormPolling2033 = () => {
      const formInterval = setInterval(function () {
        bindFormTracking2033();
        if (formBound2033) clearInterval(formInterval);
      }, 60);
      setTimeout(function () {
        clearInterval(formInterval);
      }, 30000);
    };
    startFormPolling2033();

    // TRIGGER: reveal the modal after the user spends 8 seconds on the page.
    let modalTimer2033;
    const scheduleShowModal = () => {
      if (modalTimer2033) clearTimeout(modalTimer2033);
      modalTimer2033 = setTimeout(function () {
        showModal();
      }, 8000);
    };
    const tryScheduleAbandonPopup = () => {
      if (hasSubmittedBdcUserData()) return;
      syncNeedRefreshState2033();
      if (document.querySelector(".spz-2033-modal")) {
        scheduleShowModal();
      }
    };
    tryScheduleAbandonPopup();
    const reloadPopupScheduleInterval2033 = setInterval(function () {
      if (!pendingReloadPopupSchedule2033) return;
      pendingReloadPopupSchedule2033 = false;
      tryScheduleAbandonPopup();
      clearInterval(reloadPopupScheduleInterval2033);
    }, 60);
    setTimeout(function () {
      clearInterval(reloadPopupScheduleInterval2033);
    }, 30000);

    const onPageHide2033 = () => {
      hideModal();
      if (modalTimer2033) {
        clearTimeout(modalTimer2033);
        modalTimer2033 = null;
      }
      markFormAbandoned2033();
    };

    // Capture form state before the browser unloads this page on link click.
    document.addEventListener(
      "click",
      function (e) {
        const link = e.target.closest("a[href]");
        if (!link || !link.href) return;
        try {
          const linkUrl = new URL(link.href, window.location.origin);
          if (linkUrl.hostname.indexOf("bill.com") !== -1 && normalizePath2033(linkUrl.pathname) !== normalizePath2033(window.location.pathname)) {
            markFormAbandoned2033();
          }
        } catch (err) {}
      },
      true
    );

    window.addEventListener("pagehide", onPageHide2033);
  }
}, 70);
