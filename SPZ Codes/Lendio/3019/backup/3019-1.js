(function () {
  let formInterval;
  let carouselObserverInitialized = false;
  let defaultHeroImages = null;
  let tileSelectionOrder = [];

  const TILE_HERO_IMAGES = {
    1: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-01.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-01.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-01.png",
    },
    2: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-02.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-02.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/mobile-04.png",
    },
    3: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-03.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-03.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/mobile-07.png",
    },
    4: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-06.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-04.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/mobile-02.png",
    },
    5: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-05.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-06.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/mobile-05.png",
    },
    6: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-04.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-08.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/mobile-08.png",
    },
    7: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-07.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-05.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/mobile-03.png",
    },
    8: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-07.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-07.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/mobile-06.png",
    },
    9: {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/desktop-09.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-09.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/lendio/3019/tablet-09.png",
    },
  };

  function cacheDefaultHeroImages(col) {
    if (defaultHeroImages) return;

    const existingPicture = col.querySelector("picture");
    const existingImg = col.querySelector("img");
    if (!existingImg?.getAttribute("src")) return;

    defaultHeroImages = {
      desktop: existingImg.getAttribute("src"),
      tablet:
        existingPicture?.querySelector('source[media*="991"]')?.getAttribute(
          "srcset",
        ) ||
        existingImg.getAttribute("src"),
      mobile:
        existingPicture?.querySelector('source[media*="767"]')?.getAttribute(
          "srcset",
        ) || existingImg.getAttribute("src"),
      alt: existingImg.getAttribute("alt") || "Hero image",
    };
  }

  function buildHeroPictureMarkup(images) {
    return (
      `<picture class="spz-3019-hero-picture">` +
      `<source media="(max-width: 767px)" srcset="${images.mobile}">` +
      `<source media="(max-width: 991px)" srcset="${images.tablet}">` +
      `<img src="${images.desktop}" alt="${images.alt}">` +
      `</picture>`
    );
  }

  function setupHeroPicture() {
    const col = document.querySelector(".spz_3019_v .lp-hero-img-col");
    if (!col) return false;

    if (col.querySelector(".spz-3019-hero-picture")) return true;

    cacheDefaultHeroImages(col);
    if (!defaultHeroImages) return false;

    const initialImages = {
      desktop: TILE_HERO_IMAGES[1].desktop,
      tablet: TILE_HERO_IMAGES[1].tablet,
      mobile: TILE_HERO_IMAGES[1].mobile,
      alt: defaultHeroImages.alt,
    };

    col.innerHTML = buildHeroPictureMarkup(initialImages);
    return true;
  }

  function updateHeroPicture(tileNum) {
    if (!setupHeroPicture()) return;

    const picture = document.querySelector(
      ".spz_3019_v .spz-3019-hero-picture",
    );
    if (!picture) return;

    const images = TILE_HERO_IMAGES[tileNum || 1];
    if (!images) return;

    const mobileSource = picture.querySelector('source[media*="767"]');
    const tabletSource = picture.querySelector('source[media*="991"]');
    const img = picture.querySelector("img");

    if (mobileSource) {
      mobileSource.setAttribute("srcset", images.mobile);
    }
    if (tabletSource) {
      tabletSource.setAttribute("srcset", images.tablet);
    }
    if (img) {
      img.setAttribute("src", images.desktop);
    }
  }

  function waitForHeroPicture(callback) {
    if (setupHeroPicture()) {
      callback();
      return;
    }

    const heroSetupInterval = setInterval(function () {
      if (setupHeroPicture()) {
        clearInterval(heroSetupInterval);
        callback();
      }
    }, 100);

    setTimeout(function () {
      clearInterval(heroSetupInterval);
    }, 10000);
  }

  function handleTileSelection(tileNum, isSelected) {
    if (isSelected) {
      tileSelectionOrder = tileSelectionOrder.filter(function (num) {
        return num !== tileNum;
      });
      tileSelectionOrder.push(tileNum);
    } else {
      tileSelectionOrder = tileSelectionOrder.filter(function (num) {
        return num !== tileNum;
      });
    }

    const activeTileNum =
      tileSelectionOrder[tileSelectionOrder.length - 1] || null;

    waitForHeroPicture(function () {
      updateHeroPicture(activeTileNum);
    });
  }

  function initTileHeroEvents() {
    document.querySelectorAll(".spz_3019_v .tile").forEach(function (tile, index) {
      const tileNum = index + 1;
      tile.removeAttribute("onclick");
      tile.addEventListener("click", function () {
        this.classList.toggle("selected");
        handleTileSelection(tileNum, this.classList.contains("selected"));
      });
    });
  }

  const bodyInterval3019 = setInterval(function () {
    if (
      document.querySelector("body") &&
      !document.querySelector(".spz_3019_v")
    ) {
      clearInterval(bodyInterval3019);

      document.querySelector("body").classList.add("spz_3019_v");
      if (window.location.pathname == "/lp/direct/sba-loans") {
        document.querySelector("body").classList.add("sba-only");
      }

      if (window.location.pathname == "/lp/direct/sb-financing") {
        document.querySelector("body").classList.add("small", "sb-financing");
      }

      waitForHeroPicture(function () {
        updateHeroPicture(1);
      });

      const newHTMl = `<div class="funds-section">
                <p class="funds-title">What do you need funding for?</p>
                <div class="tile-grid">
              
                  <div class="tile" data-value="24h" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
                      </svg>
                    </span>
                    Expansion
                  </div>
              
                  <div class="tile" data-value="2-3d" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
                      </svg>
                    </span>
                    Working <br> capital
                  </div>
              
                  <div class="tile" data-value="week" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
                      </svg>
                    </span>
                    Payroll
                  </div>
              
                  <div class="tile" data-value="month" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
                      </svg>
                    </span>
                    Purchase a <br>business
                  </div>
              
                  <div class="tile" data-value="year" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
                      </svg>
                    </span>
                    Equipment
                  </div>
              
                  <div class="tile" data-value="exploring" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
                      </svg>
                    </span>
                    Real estate
                  </div>
                  
                  <div class="tile" data-value="exploring" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
                      </svg>
                    </span>
                    Start a <br>business
                  </div>
                  
                  <div class="tile" data-value="exploring" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
                      </svg>
                    </span>
                    Accounts <br> receivable
                  </div>
              
                  <div class="tile tile-single" data-value="other" onclick="this.classList.toggle('selected')">
                    <span class="tile-check">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="8" fill="#2468C7"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#192526" stroke-opacity="0.06"/>
                        <circle cx="8" cy="8" r="3" fill="#FBF8F7"/>
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

      // page 1
      if (
        window.location.pathname == "/lp/direct/search-small-business-loans" &&
        document.querySelector(".spz_3019_v .lp-pwf-form-wrapper")
      ) {
        document
          .querySelector(".spz_3019_v .lp-pwf-wrapper")
          .insertAdjacentHTML("beforeend", newHTMl);
        if (document.querySelectorAll(".back_btn").length === 0) {
          document
            .querySelector(".spz_3019_v .text-amount-form-wrap-var-2")
            .insertAdjacentHTML(
              "afterbegin",
              '<div class="back_btn"><span>Back</span></div>',
            );
          backClick();
        }

        if (
          document.querySelector(
            ".spz_3019_v .spz-3010-section1 .wrapper .header a",
          )
        ) {
          document
            .querySelector(".spz_3019_v .spz-3010-section1 .wrapper .header a")
            .removeAttribute("target");
        }
      }

      // page 2
      if (
        window.location.pathname == "/lp/direct/sba-loans" &&
        document.querySelector(".spz_3019_v .lp-hero-content-wrapper")
      ) {
        document
          .querySelector(".spz_3019_v .lp-hero-content")
          .insertAdjacentHTML("beforeend", newHTMl);
        if (document.querySelectorAll(".back_btn").length === 0) {
          document
            .querySelector(".spz_3019_v .text-amount-form-wrap-lp-sbfv2")
            .insertAdjacentHTML(
              "afterbegin",
              '<div class="back_btn"><span>Back</span></div>',
            );
          backClick();
        }

        if (
          document.querySelector(
            ".spz_3019_v .spz-3010-section1 .wrapper .header a",
          )
        ) {
          document
            .querySelector(".spz_3019_v .spz-3010-section1 .wrapper .header a")
            .removeAttribute("target");
        }
      }

      //page 3
      if (
        window.location.pathname == "/lp/direct/sb-financing" &&
        document.querySelector(".spz_3019_v .lp-hero-content-wrapper")
      ) {
        document
          .querySelector(".spz_3019_v .lp-hero-content")
          .insertAdjacentHTML("beforeend", newHTMl);
        if (document.querySelectorAll(".back_btn").length === 0) {
          document
            .querySelector(".spz_3019_v .text-amount-form-wrap-lp-sbfv2")
            .insertAdjacentHTML(
              "afterbegin",
              '<div class="back_btn"><span>Back</span></div>',
            );
          backClick();
        }

        if (
          document.querySelector(
            ".spz_3019_v .spz-3010-section1 .wrapper .header a",
          )
        ) {
          document
            .querySelector(".spz_3019_v .spz-3010-section1 .wrapper .header a")
            .removeAttribute("target");
          document
            .querySelector(".spz_3019_v .spz-3010-section1 .wrapper .header a")
            .setAttribute("href", "https://www.lendio.com");
        }
      }
    }
  }, 10);

  setTimeout(function () {
    clearInterval(bodyInterval3019);
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
        const backBtn = document.querySelector(
          ".spz_3019_v .text-amount-form-wrap-lp-sbfv2 .back_btn",
        );
        if (!backBtn) return;

        const slide1Active = shadowRoot.querySelector(
          ".carousel-item.slide-1.active",
        );

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

        const slide1Active = shadowRoot.querySelector(
          ".carousel-item.slide-1.active",
        );
        const btnAction = shadowRoot.querySelector("#pwf-1 .btn-action");

        if (
          slide1Active &&
          btnAction &&
          btnAction.classList.contains("slide-1-active")
        ) {
          syncingBtnAction = true;
          btnAction.classList.remove("slide-1-active");
          syncingBtnAction = false;
        }
      }

      function applyMobileLogic() {
        if (!isMobile()) return;

        const slide1Active = shadowRoot.querySelector(
          ".carousel-item.slide-1.active",
        );
        if (!slide1Active) return;

        const backBtn = document.querySelector(
          ".spz_3019_v .text-amount-form-wrap-lp-sbfv2 .back_btn",
        );
        const backLink = shadowRoot.querySelector("#pwf-1 .back-link");

        if (backLink) backLink.classList.remove("invisible");
        syncMobileBtnAction();
        if (backBtn) backBtn.classList.add("hide_btn");

        if (backLink && !backLink.dataset.mobileBindDone) {
          let slideOnPress = null;

          backLink.addEventListener("mousedown", function () {
            slideOnPress = shadowRoot.querySelector(
              ".carousel-item.slide-1.active",
            )
              ? "slide1"
              : "other";
          });

          backLink.addEventListener(
            "touchstart",
            function () {
              slideOnPress = shadowRoot.querySelector(
                ".carousel-item.slide-1.active",
              )
                ? "slide1"
                : "other";
            },
            { passive: true },
          );

          backLink.addEventListener("click", function (e) {
            if (isMobile()) {
              e.stopPropagation();
              if (slideOnPress === "slide1" && isSlide1Active()) {
                document
                  .querySelector(".lp-hero-content")
                  ?.classList.remove("hide_tiles");
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

        const slide1Active = shadowRoot.querySelector(
          ".carousel-item.slide-1.active",
        );
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

        const carouselInner =
          shadowRoot.querySelector("#pwf-1 .carousel-inner") ||
          shadowRoot.querySelector(".carousel-inner");

        if (!carouselInner) return;

        carouselObserved = true;
        observer.disconnect();
        observer.observe(carouselInner, {
          subtree: true,
          attributes: true,
          attributeFilter: ["class"],
        });
      }

      observeCarousel();
      observer.observe(shadowRoot, {
        childList: true,
        subtree: true,
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
        true,
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
      const backBtn = e.target.closest(
        ".spz_3019_v .text-amount-form-wrap-lp-sbfv2 .back_btn",
      );
      if (!backBtn) return;
      if (!isSlide1Active()) return;

      backBtn.closest(".lp-hero-content")?.classList.remove("hide_tiles");
    });
  }

  function clickEvents() {
    const nextBtn = document.querySelector(".spz_3019_v .next-btn");
    if (!nextBtn || nextBtn.dataset.hideTilesBound) return;

    nextBtn.addEventListener("click", function (e) {
      e.currentTarget.closest(".lp-hero-content")?.classList.add("hide_tiles");
    });
    nextBtn.dataset.hideTilesBound = "true";
  }

  const tileInterval3019 = setInterval(function () {
    if (document.querySelectorAll(".spz_3019_v .tile").length > 0) {
      clearInterval(tileInterval3019);

      waitForHeroPicture(function () {
        updateHeroPicture(1);
      });
      initTileHeroEvents();
      clickEvents();
    }
  });

  const tileNewInterval3019 = setInterval(function () {
    if (document.querySelectorAll(".spz_3019_v .funds-title").length > 0) {
      clearInterval(tileNewInterval3019);
      formEdits();
    }
  });
})();
