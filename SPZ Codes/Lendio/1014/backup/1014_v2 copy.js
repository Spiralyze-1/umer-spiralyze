(function () {
  let formInterval;
  let carouselObserverInitialized = false;

  function isLendioHomepage() {
    return window.location.hostname === "www.lendio.com" && window.location.pathname === "/";
  }

  const bodyInterval3008 = setInterval(function () {
    if (document.querySelector("body") && !document.querySelector(".spz_1014_v")) {
      clearInterval(bodyInterval3008);

      document.querySelector("body").classList.add("spz_1014_v", "spz_1014_v2");

      const heroHTML =
        `<div class="spz-3010-section1 lp-hero">
      <div class="wrapper">
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
          </div>
          <div class="image lp-hero-img-col">
            <picture class="spz-3019-hero-picture">
              <source media="(max-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1014/hero-img-360.png">
              <source media="(max-width: 1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1014/hero-img-768.png">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1014/hero-img-1440_1.png" alt="Hero Image">
            </picture>
          </div>
        </div>
      </div>
    </div>
    `;

      const newHTMl = `<div class="form-wrapper-2">
          <div class="dropdown-amount-form-2 w-embed">
            <div class="form-application-home-2" id="application-dropdown-form-2">
              <label class="form-label-hidden">What do you need funding for?</label>
              <div class="custom-dropdown-2">
                <button type="button" class="application-dropdown-select-2" aria-expanded="false" aria-haspopup="listbox"
                  id="dropdownButton-2">What do you need funding for?</button>
                <div class="custom-dropdown-list-wrap-2" role="listbox" aria-labelledby="dropdownButton-2" tabindex="0">
                  <ul class="custom-dropdown-list-2 custom-dropdown-list" role="presentation">
                    <li data-value="Expansion" role="option" tabindex="0">Expansion</li>
                    <li data-value="Working capital" role="option" tabindex="0">Working capital</li>
                    <li data-value="Payroll" role="option" tabindex="0">Payroll</li>
                    <li data-value="Purchase a business" role="option" tabindex="0">Purchase a business</li>
                    <li data-value="Equipment" role="option" tabindex="0">Equipment</li>
                    <li data-value="Real estate" role="option" tabindex="0">Real estate</li>
                    <li data-value="Start a business" role="option" tabindex="0">Start a business</li>
                    <li data-value="Accounts receivable" role="option" tabindex="0">Accounts receivable</li>
                    <li data-value="Other" role="option" tabindex="0">Other</li>
                  </ul>
                </div>
              </div>

              <a href="https://app.lendio.com/bp/application" class="next-btn" id="fundsNext">Next</a>
            </div>
          </div>
          <div class="form_bottom">
            <p>Applying is free and won't impact your credit. <sup>1</sup></p>
          </div>
        </div>
              `;

      if (isLendioHomepage() && document.querySelector(".spz_1014_v .home-hero-content")) {
        document.querySelector('.spz_1014_v .home-hero-section').insertAdjacentHTML("afterbegin", heroHTML)
        document.querySelector(".spz_1014_v .lp-hero-content").insertAdjacentHTML("beforeend", newHTMl);
        initDropdown();
        // initNextBtn();
        if (document.querySelectorAll(".back_btn").length === 0) {
          document.querySelector(".spz_1014_v .dropdown-amount-form.w-embed").insertAdjacentHTML("afterbegin", '<div class="back_btn"><span>Back</span></div>');
          backClick();
        }
        let formIntervalTwo;

        formIntervalTwo = setInterval(function () {
          if (document.querySelector('.form-application-home')) {
            clearInterval(formIntervalTwo);
            //form move
            if (document.querySelector('.dropdown-amount-form ')) {
              document.querySelector('.spz_1014_v .spz-3010-section1 .hero-section .text .form-wrapper').insertAdjacentElement("beforeend", document.querySelector('.dropdown-amount-form '))
            }
          }
        }, 100);
        if (document.querySelector(".spz_1014_v .spz-3010-section1 .wrapper .header a")) {
          document.querySelector(".spz_1014_v .spz-3010-section1 .wrapper .header a").removeAttribute("target");
        }
        if(document.querySelector('.spz-3010-section1')){
          document.querySelector('.spz-3010-section1').insertAdjacentHTML('afterend', `<div class="spz-3010-section-outer"></div>`);
          document.querySelector('.spz-3010-section-outer').appendChild(document.querySelector('.spz-3010-section1'));
        }
      }
    }
  }, 10);

  setTimeout(function () {
    clearInterval(bodyInterval3008);
  }, 7000);

  let outsideClickBound = false;

  function initDropdown() {
    const dropdownButton = document.querySelector(".form-wrapper-2 .application-dropdown-select-2");
    const dropdown = dropdownButton?.closest(".custom-dropdown-2");
    if (!dropdownButton || !dropdown || dropdownButton.dataset.dropdownBound) return;

    dropdownButton.dataset.dropdownBound = "true";

    dropdownButton.addEventListener("click", function () {
      const isOpen = dropdown.classList.contains("open");
      dropdown.classList.toggle("open", !isOpen);
      dropdownButton.setAttribute("aria-expanded", String(!isOpen));
    });

    dropdown.querySelectorAll('.custom-dropdown-list-2 li[role="option"]').forEach((option) => {
      option.addEventListener("click", function () {
        dropdown.classList.remove("open");
        dropdownButton.textContent = option.dataset.value || option.textContent.trim();
        dropdownButton.classList.add("has-value");
        dropdownButton.setAttribute("aria-expanded", "false");
      });
    });

    if (outsideClickBound) return;
    outsideClickBound = true;

    document.addEventListener("click", function (e) {
      const btn = document.querySelector(".form-wrapper-2 .application-dropdown-select-2");
      const targetDropdown = btn?.closest(".custom-dropdown-2");
      if (!btn || !targetDropdown?.classList.contains("open")) return;
      if (targetDropdown.contains(e.target)) return;

      targetDropdown.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function initNextBtn() {
    const nextBtn = document.querySelector(".spz_1014_v2 .next-btn");
    if (!nextBtn || nextBtn.dataset.hideTilesBound) return;

    nextBtn.addEventListener("click", function () {
      document.querySelector(".lp-hero-content")?.classList.add("hide_tiles");
    });
    nextBtn.dataset.hideTilesBound = "true";
  }

  function backClick() {
    document.addEventListener("click", function (e) {
      const backBtn = e.target.closest(".spz_1014_v .dropdown-amount-form .back_btn");
      if (!backBtn) return;
      backBtn.closest(".lp-hero-content")?.classList.remove("hide_tiles");
    });
  }

  const tileInterval3008 = setInterval(function () {
    if (document.querySelectorAll(".spz_1014_v2 .tile").length > 0) {
      clearInterval(tileInterval3008);

      document.querySelectorAll(".spz_1014_v2 .tile").forEach((tile) => {
        tile.removeAttribute("onclick");
        tile.addEventListener("click", () => tile.classList.toggle("selected"));
      });
    }
  });


  const tileNewInterval3008 = setInterval(function () {
    if (document.querySelectorAll(".spz_1014_v2 .funds-title").length > 0) {
      clearInterval(tileNewInterval3008);
    }
  });
})();
