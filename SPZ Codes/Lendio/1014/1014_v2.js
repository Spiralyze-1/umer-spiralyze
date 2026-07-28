(function () {
  let formInterval;
  let carouselObserverInitialized = false;

  const bodyInterval3008 = setInterval(function () {
    if (document.querySelector("body") && !document.querySelector(".spz_3018_v")) {
      clearInterval(bodyInterval3008);

      document.querySelector("body").classList.add("spz_3018_v", "spz_3018_v2");
      if (window.location.pathname == "/lp/direct/sba-loans") {
        document.querySelector("body").classList.add("sba-only");
      }

      if (window.location.pathname == "/lp/direct/sb-financing") {
        document.querySelector("body").classList.add("small", "sb-financing");
      }

      const newHTMl = `<div class="funds-section">
                    <div class="funds-row">
                      <div class="funds-dropdown-wrap">
                        <select class="funds-select" id="fundsSelect">
                          <option value="" disabled selected hidden>What do you need funding for?</option>
                          <option value="24h">Expansion</option>
                          <option value="2-3d">Working capital</option>
                          <option value="week">Payroll</option>
                          <option value="month">Purchase a business</option>
                          <option value="year">Equipment</option>
                          <option value="exploring">Real estate</option>
                          <option value="exploring">Start a business</option>
                          <option value="exploring">Accounts receivable</option>
                          <option value="other">Other</option>
                        </select>
                        <label>What do you need funding for?</label>
                      </div>
                      <button class="next-btn" id="fundsNext">Next</button>
                    </div>
                    <div class="funds-disclaimer text-center mt-3 d-block text-base-500">
                      <small>Applying is free and won't impact your credit.<sup>1</sup>
                        <span class="disclosure-tooltip"> View Disclosure.
                          <span class="disclosure-tooltiptext">
                            Filling out an application for business funding and submitting it to our funding partners will not impact
                            your personal credit score. However, depending on the product and lender, accepting a funding offer may
                            result in a hard credit inquiry, which could affect your personal credit score.
                          </span>
                        </span>
                      </small>
                    </div>
                  </div>
                `;

      // page 3
      if (window.location.pathname == "/lp/direct/sba-loans" && document.querySelector(".spz_3018_v .lp-hero-content-wrapper")) {
        document.querySelector(".spz_3018_v .lp-hero-content").insertAdjacentHTML("beforeend", newHTMl);
        if (document.querySelectorAll(".back_btn").length === 0) {
          document.querySelector(".spz_3018_v .text-amount-form-wrap-lp-sbfv2").insertAdjacentHTML("afterbegin", '<div class="back_btn"><span>Back</span></div>');
          backClick();
        }

        if (document.querySelector(".spz_3018_v .spz-3010-section1 .wrapper .header a")) {
          document.querySelector(".spz_3018_v .spz-3010-section1 .wrapper .header a").removeAttribute("target");
        }
      }

      //page 4
      if (window.location.pathname == "/lp/direct/sb-financing" && document.querySelector(".spz_3018_v .lp-hero-content-wrapper")) {
        document.querySelector(".spz_3018_v .lp-hero-content").insertAdjacentHTML("beforeend", newHTMl);
        if (document.querySelectorAll(".back_btn").length === 0) {
          document.querySelector(".spz_3018_v .text-amount-form-wrap-lp-sbfv2").insertAdjacentHTML("afterbegin", '<div class="back_btn"><span>Back</span></div>');
          backClick();
        }

        if (document.querySelector(".spz_3018_v .spz-3010-section1 .wrapper .header a")) {
          document.querySelector(".spz_3018_v .spz-3010-section1 .wrapper .header a").removeAttribute("target");
          document.querySelector(".spz_3018_v .spz-3010-section1 .wrapper .header a").setAttribute("href", "https://www.lendio.com");
        }
      }
    }
  }, 10);

  setTimeout(function () {
    clearInterval(bodyInterval3008);
  }, 7000);

  function formEdits() {
    if (carouselObserverInitialized) return;

    function initCarouselObserver() {
      const lendioStart = document.querySelector("lendio-start");
      const shadowRoot = lendioStart?.shadowRoot;
      if (!shadowRoot || carouselObserverInitialized) return false;

      carouselObserverInitialized = true;
      if (formInterval) clearInterval(formInterval);

      const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

      let prevSlide = null;
      let carouselObserved = false;
      let slideChangeTimer = null;
      let syncingBtnAction = false;

      function syncHideBtn() {
        const backBtn = document.querySelector(".spz_3018_v .text-amount-form-wrap-lp-sbfv2 .back_btn");
        if (!backBtn) return;

        const slide1Active = shadowRoot.querySelector(".carousel-item.slide-1.active");

        if (slide1Active) {
          if (!isMobile()) {
            backBtn.classList.remove("hide_btn");
          }
        } else if (!backBtn.classList.contains("hide_btn")) {
          backBtn.classList.add("hide_btn");
        }
      }

      function syncMobileBtnAction() {
        if (!isMobile() || syncingBtnAction) return;

        const slide1Active = shadowRoot.querySelector(".carousel-item.slide-1.active");
        const btnAction = shadowRoot.querySelector("#pwf-1 .btn-action");

        if (slide1Active && btnAction && btnAction.classList.contains("slide-1-active")) {
          syncingBtnAction = true;
          btnAction.classList.remove("slide-1-active");
          syncingBtnAction = false;
        }
      }

      function applyMobileLogic() {
        if (!isMobile()) return;

        const slide1Active = shadowRoot.querySelector(".carousel-item.slide-1.active");
        if (!slide1Active) return;

        const backBtn = document.querySelector(".spz_3018_v .text-amount-form-wrap-lp-sbfv2 .back_btn");
        const backLink = shadowRoot.querySelector("#pwf-1 .back-link");

        if (backLink) backLink.classList.remove("invisible");
        syncMobileBtnAction();
        if (backBtn) backBtn.classList.add("hide_btn");

        if (backLink && !backLink.dataset.mobileBindDone) {
          let slideOnPress = null;

          backLink.addEventListener("mousedown", function () {
            slideOnPress = shadowRoot.querySelector(".carousel-item.slide-1.active") ? "slide1" : "other";
          });

          backLink.addEventListener(
            "touchstart",
            function () {
              slideOnPress = shadowRoot.querySelector(".carousel-item.slide-1.active") ? "slide1" : "other";
            },
            { passive: true }
          );

          backLink.addEventListener("click", function (e) {
            if (isMobile()) {
              e.stopPropagation();
              if (slideOnPress === "slide1" && isSlide1Active()) {
                document.querySelector(".lp-hero-content")?.classList.remove("hide_tiles");
              }
              slideOnPress = null;
            }
          });

          backLink.dataset.mobileBindDone = "true";
        }
      }

      function handleSlideChange() {
        observeCarousel();
        syncHideBtn();

        const slide1Active = shadowRoot.querySelector(".carousel-item.slide-1.active");
        const currentSlide = slide1Active ? "slide1" : "other";

        if (currentSlide === "slide1") {
          syncMobileBtnAction();
        }

        if (currentSlide === prevSlide) return;
        prevSlide = currentSlide;

        if (currentSlide === "slide1") {
          applyMobileLogic();
        }
      }

      function queueSlideChange() {
        clearTimeout(slideChangeTimer);
        slideChangeTimer = setTimeout(handleSlideChange, 50);
      }

      const observer = new MutationObserver(queueSlideChange);

      function observeCarousel() {
        if (carouselObserved) return;

        const carouselInner = shadowRoot.querySelector("#pwf-1 .carousel-inner") || shadowRoot.querySelector(".carousel-inner");

        if (!carouselInner) return;

        carouselObserved = true;
        observer.disconnect();
        observer.observe(carouselInner, {
          subtree: true,
          attributes: true,
          attributeFilter: ["class"]
        });
      }

      observeCarousel();
      observer.observe(shadowRoot, {
        childList: true,
        subtree: true
      });

      let clickSyncTimer = null;
      shadowRoot.addEventListener(
        "click",
        function () {
          clearTimeout(clickSyncTimer);
          clickSyncTimer = setTimeout(function () {
            syncHideBtn();
            syncMobileBtnAction();
          }, 300);
        },
        true
      );

      handleSlideChange();
      return true;
    }

    if (initCarouselObserver()) return;

    formInterval = setInterval(function () {
      initCarouselObserver();
    }, 200);
  }

  function isSlide1Active() {
    const shadowRoot = document.querySelector("lendio-start")?.shadowRoot;
    if (!shadowRoot) return false;
    return !!shadowRoot.querySelector(".carousel-item.slide-1.active");
  }

  function resetHeroFundsState() {
    document.querySelector(".lp-hero-content")?.classList.remove("hide_tiles");

    const fundsSelect = document.querySelector(".spz_3018_v2 .funds-select");
    if (!fundsSelect) return;

    fundsSelect.selectedIndex = 0;
    fundsSelect.classList.remove("has-value");
  }

  window.addEventListener("pageshow", function () {
    resetHeroFundsState();
    setTimeout(resetHeroFundsState, 0);
  });

  function backClick() {
    document.addEventListener("click", function (e) {
      const backBtn = e.target.closest(".spz_3018_v .text-amount-form-wrap-lp-sbfv2 .back_btn");
      if (!backBtn) return;
      if (!isSlide1Active()) return;

      backBtn.closest(".lp-hero-content")?.classList.remove("hide_tiles");
    });
  }

  function hideHeroTiles(el) {
    el?.closest(".lp-hero-content")?.classList.add("hide_tiles");
  }

  function clickEvents() {
    const nextBtn = document.querySelector(".spz_3018_v2 .next-btn");
    if (!nextBtn || nextBtn.dataset.hideTilesBound) return;

    nextBtn.addEventListener("click", function (e) {
      hideHeroTiles(e.currentTarget);
    });
    nextBtn.dataset.hideTilesBound = "true";
  }

  function dropdownEvents() {
    const fundsSelect = document.querySelector(".spz_3018_v2 .funds-select");
    if (!fundsSelect || fundsSelect.dataset.dropdownBound) return;

    fundsSelect.addEventListener("change", function () {
      const hasValue = !!fundsSelect.value;
      fundsSelect.classList.toggle("has-value", hasValue);
      if (hasValue) {
        hideHeroTiles(fundsSelect);
      }
    });
    fundsSelect.dataset.dropdownBound = "true";
  }

  const dropdownInterval3008 = setInterval(function () {
    if (document.querySelectorAll(".spz_3018_v2 .funds-select").length > 0) {
      clearInterval(dropdownInterval3008);
      dropdownEvents();
      clickEvents();
      resetHeroFundsState();
    }
  });

  const fundsInitInterval3008 = setInterval(function () {
    if (document.querySelectorAll(".spz_3018_v2 .funds-section").length > 0) {
      clearInterval(fundsInitInterval3008);
      formEdits();
    }
  });
})();
