(function () {
  let formInterval;
  let carouselObserverInitialized = false;

  function isLendioHomepage() {
    return window.location.hostname === "www.lendio.com" && window.location.pathname === "/";
  }

  const bodyInterval3008 = setInterval(function () {
    if (document.querySelector("body") && !document.querySelector(".spz_1014_v")) {
      clearInterval(bodyInterval3008);

      document.querySelector("body").classList.add("spz_1014_v");

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
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1014/hero-img-1440.png" alt="Hero Image">
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
                        <span class="disclosure-tooltip">
                          <span class="disclosure-tooltiptext">
                          </span>
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              `;

      if (isLendioHomepage() && document.querySelector(".spz_1014_v .home-hero-content")) {
        document.querySelector('.spz_1014_v .home-hero-section').insertAdjacentHTML("afterbegin", heroHTML)
        document.querySelector(".spz_1014_v .lp-hero-content").insertAdjacentHTML("beforeend", newHTMl);
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
      }
    }
  }, 10);

  setTimeout(function () {
    clearInterval(bodyInterval3008);
  }, 7000);

  function backClick() {
    document.addEventListener("click", function (e) {
      const backBtn = e.target.closest(".spz_1014_v .dropdown-amount-form .back_btn");
      if (!backBtn) return;
      backBtn.closest(".lp-hero-content")?.classList.remove("hide_tiles");
    });
  }

  function clickEvents() {
    const nextBtn = document.querySelector(".spz_1014_v .next-btn");
    if (!nextBtn || nextBtn.dataset.hideTilesBound) return;

    nextBtn.addEventListener("click", function (e) {
      e.currentTarget.closest(".lp-hero-content")?.classList.add("hide_tiles");
    });
    nextBtn.dataset.hideTilesBound = "true";
  }

  const tileInterval3008 = setInterval(function () {
    if (document.querySelectorAll(".spz_1014_v .tile").length > 0) {
      clearInterval(tileInterval3008);

      document.querySelectorAll(".spz_1014_v .tile").forEach((tile) => {
        tile.removeAttribute("onclick");
        tile.addEventListener("click", () => tile.classList.toggle("selected"));
      });

      clickEvents();
    }
  });


  const tileNewInterval3008 = setInterval(function () {
    if (document.querySelectorAll(".spz_1014_v .funds-title").length > 0) {
      clearInterval(tileNewInterval3008);
    }
  });
})();
