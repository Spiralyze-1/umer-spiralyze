(function () {
  let formInterval;
  let carouselObserverInitialized = false;

  const bodyInterval3008 = setInterval(function () {
    if (document.querySelector("body") && !document.querySelector(".spz_3008_v")) {
      clearInterval(bodyInterval3008);

      document.querySelector("body").classList.add("spz_3008_v", "spz_3008_v2");
      if (window.location.pathname == "/lp/direct/sba-loans") {
        document.querySelector("body").classList.add("sba-only");
      }

      if (window.location.pathname == "/lp/direct/sb-financing") {
        document.querySelector("body").classList.add("small", "sb-financing");
      }

      const heroHTML =
      `<div class="spz-3010-section1">
      <div class="wrapper">
        <div class="header">
          <a href="https://www.lendio.com" target="_blank">
            <picture>
              <source media="(max-width:767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1764604812/lendio/3007/logo_1.svg">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1764604810/lendio/3007/logo.svg" width="127" height="25" alt="Lendio Logo">
            </picture>
          </a>
        </div>
        <div class="hero-section">
          <div class="text lp-hero-content">
            <div class="eyelash"><span>SMALL BUSINESS FUNDING</span></div>
            <div class="title">Check eligibility & view offers <span class="green">in minutes.</span></div>
            <div class="stars">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1768546691/lendio/3010/TP-Logo-Tricolor-Black-RGB.svg" alt="Trustpilot Logo" width="104" height="26" >
              <img src="https://res.cloudinary.com/spiralyze/image/upload/v1768463236/lendio/3010/star.svg" alt="Stars Logo" width="98" height="18" >
              <div class="numbers">
                <strong>4.5</strong>
                (21,750 reviews)
              </div>
            </div>
            <div class="form-wrapper">
            </div>
            <ul class="lp-hero-list">
              <li><strong>Fast application.</strong> Apply for funding in minutes. No effect on your credit. Get funds as soon as next day.</li>
              <li><strong>75+ Lenders.</strong> See offers from over 75 vetted lenders, including SBA-approved lenders. Compare interest rates, APR, terms, and more.</li>
              <li><strong>Loan options.</strong> Loan types include SBA, accounts receivable, equipment financing, and small business.</li>
            </ul>
          </div>
          <div class="image lp-hero-img-col">
            <picture class="spz-3019-hero-picture">
              <source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-01.png">
              <source media="(max-width: 991px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-01.png">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-01.png" alt="Hero Image">
            </picture>
          </div>
        </div>
      </div>
    </div>
    `;

      const newHTMl = `<div class="funds-section">
                  <p class="funds-title">What do you need funding for?</p>
                  <div class="tile-grid">
                
                    <div class="tile" data-value="24h" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Expansion
                    </div>
                
                    <div class="tile" data-value="2-3d" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Working capital
                    </div>
                
                    <div class="tile" data-value="week" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Payroll
                    </div>
                
                    <div class="tile" data-value="month" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Purchase a <br>business
                    </div>
                
                    <div class="tile" data-value="year" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Equipment
                    </div>
                
                    <div class="tile" data-value="exploring" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Real estate
                    </div>
                    
                    <div class="tile" data-value="exploring" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Start a <br>business
                    </div>
                    
                    <div class="tile" data-value="exploring" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Accounts receivable
                    </div>
                
                    <div class="tile tile-single" data-value="other" onclick="this.classList.toggle('selected')">
                      <span class="tile-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M8.83325 0.833252L3.33325 6.33325L0.833252 3.83325" stroke="#FBF8F7" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      Other
                    </div>
                
                  </div>
                  <div class="funds-footer">
                    <button class="next-btn" id="fundsNext">Next</button>
                    <div class="text-center mt-3 d-block text-base-500">
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
                </div>
              `;

      // page 3
      if (window.location.href === "https://www.lendio.com/" && document.querySelector(".spz_3008_v .home-hero-content")) {
        document.querySelector('.spz_3008_v .home-hero-section').insertAdjacentHTML("afterbegin", heroHTML)
        document.querySelector(".spz_3008_v .home-hero-content").insertAdjacentHTML("afterend", newHTMl);
        if (document.querySelectorAll(".back_btn").length === 0) {
          document.querySelector(".spz_3008_v .dropdown-amount-form.w-embed").insertAdjacentHTML("afterbegin", '<div class="back_btn"><span>Back</span></div>');
          backClick();
        }

        if (document.querySelector(".spz_3008_v .spz-3010-section1 .wrapper .header a")) {
          document.querySelector(".spz_3008_v .spz-3010-section1 .wrapper .header a").removeAttribute("target");
        }
      }
      if (window.location.pathname == "/lp/direct/sba-loans" && document.querySelector(".spz_3008_v .lp-hero-content-wrapper")) {
        document.querySelector(".spz_3008_v .lp-hero-content").insertAdjacentHTML("beforeend", newHTMl);
        if (document.querySelectorAll(".back_btn").length === 0) {
          document.querySelector(".spz_3008_v .text-amount-form-wrap-lp-sbfv2").insertAdjacentHTML("afterbegin", '<div class="back_btn"><span>Back</span></div>');
          backClick();
        }

        if (document.querySelector(".spz_3008_v .spz-3010-section1 .wrapper .header a")) {
          document.querySelector(".spz_3008_v .spz-3010-section1 .wrapper .header a").removeAttribute("target");
        }
      }

      //page 4
      if (window.location.pathname == "/lp/direct/sb-financing" && document.querySelector(".spz_3008_v .lp-hero-content-wrapper")) {
        document.querySelector(".spz_3008_v .lp-hero-content").insertAdjacentHTML("beforeend", newHTMl);
        if (document.querySelectorAll(".back_btn").length === 0) {
          document.querySelector(".spz_3008_v .text-amount-form-wrap-lp-sbfv2").insertAdjacentHTML("afterbegin", '<div class="back_btn"><span>Back</span></div>');
          backClick();
        }

        if (document.querySelector(".spz_3008_v .spz-3010-section1 .wrapper .header a")) {
          document.querySelector(".spz_3008_v .spz-3010-section1 .wrapper .header a").removeAttribute("target");
          document.querySelector(".spz_3008_v .spz-3010-section1 .wrapper .header a").setAttribute("href", "https://www.lendio.com");
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
        const backBtn = document.querySelector(".spz_3008_v .text-amount-form-wrap-lp-sbfv2 .back_btn");
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

        const backBtn = document.querySelector(".spz_3008_v .text-amount-form-wrap-lp-sbfv2 .back_btn");
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

  function backClick() {
    document.addEventListener("click", function (e) {
      const backBtn = e.target.closest(".spz_3008_v .text-amount-form-wrap-lp-sbfv2 .back_btn");
      if (!backBtn) return;
      if (!isSlide1Active()) return;

      backBtn.closest(".lp-hero-content")?.classList.remove("hide_tiles");
    });
  }

  function clickEvents() {
    const nextBtn = document.querySelector(".spz_3008_v2 .next-btn");
    if (!nextBtn || nextBtn.dataset.hideTilesBound) return;

    nextBtn.addEventListener("click", function (e) {
      e.currentTarget.closest(".lp-hero-content")?.classList.add("hide_tiles");
    });
    nextBtn.dataset.hideTilesBound = "true";
  }

  const tileInterval3008 = setInterval(function () {
    if (document.querySelectorAll(".spz_3008_v2 .tile").length > 0) {
      clearInterval(tileInterval3008);

      document.querySelectorAll(".spz_3008_v2 .tile").forEach((tile) => {
        tile.removeAttribute("onclick");
        tile.addEventListener("click", () => tile.classList.toggle("selected"));
      });

      clickEvents();
    }
  });

  const tileNewInterval3008 = setInterval(function () {
    if (document.querySelectorAll(".spz_3008_v2 .funds-title").length > 0) {
      clearInterval(tileNewInterval3008);
      formEdits();
    }
  });
})();
