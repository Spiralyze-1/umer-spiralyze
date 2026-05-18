const bodyInterval = setInterval(function () {
  if (document.querySelector('body') && !document.querySelector('.spz-2022_v1')) {

    clearInterval(bodyInterval)
    document.querySelector('body').classList.add("spz-2022_v1");

    localStorage.setItem('bdcAbTest9', '2022-v1');

    // Add this code for manage active state of input field in hero banner
    const emailInput = document.querySelector('.spz-2022_v1 .section_homehero form#email-form input#email');
    if (emailInput) {
      const parentForm = emailInput.closest('form');

      emailInput.addEventListener('focus', function () {
        parentForm.classList.add('spz-focus');
      });

      emailInput.addEventListener('blur', function () {
        parentForm.classList.remove('spz-focus');
      });
    }

    function setUniformHeights(selector) {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;

      let maxHeight = 0;

      // Reset heights before recalculating
      elements.forEach(el => {
        el.style.height = 'auto';
      });

      // Find max height
      elements.forEach(el => {
        const elHeight = el.offsetHeight;
        if (elHeight > maxHeight) maxHeight = elHeight;
      });

      // Apply max height to all
      elements.forEach(el => {
        el.style.height = `${maxHeight}px`;
      });
    }

    function applyCardTextHeights() {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setUniformHeights('.features-card-slider .splide__list .card-text h4');
          setUniformHeights('.features-card-slider .splide__list .card-text p');
        }, 100);
      });
    }

    function applyUniformCardHeights() {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setUniformHeights('.features-card-slider .splide__list .feature-card');
        }, 100);
      });
    }

    // Wait until elements are present
    const sliderInterval = setInterval(() => {
      const cards = document.querySelectorAll('.features-card-slider .splide__list .card-text p');
      if (cards.length === 6) {
        clearInterval(sliderInterval);
        setTimeout(applyCardTextHeights, 300);
        setTimeout(applyUniformCardHeights, 350);
      }
    }, 50);

    // Also run once on full page load (fallback)
    window.addEventListener('load', function () {
      const cards = document.querySelectorAll('.features-card-slider .splide__list .card-text p');
      if (cards.length === 6) {
        clearInterval(sliderInterval);
        setTimeout(applyCardTextHeights, 300);
        setTimeout(applyUniformCardHeights, 350);
      }
    });

    if (!document.querySelector('.spz-feature-cards') && document.querySelector('.section_logos')) {
      // Shell first: Splide carousel HTML is injected only after Splide CSS + JS load to avoid unstyled list flash.
      document.querySelector('.section_logos').insertAdjacentHTML('afterend', `<section class="spz-feature-cards">
        <div class="container-large">
            <h2>Features</h2>
            <div class="slider-arrows">
              <div class="spz-feature-splide-prev" role="button" tabindex="0" aria-label="Previous features"></div>
              <div class="spz-feature-splide-next" role="button" tabindex="0" aria-label="Next features"></div>
            </div>
        </div>
        <div id="spz-2022-features-slider-mount" class="spz-features-slider-mount" aria-busy="true" style="min-height:420px"></div>
        <div class="new_footnotes">
            <ul>
              <li>
                <sup>1</sup> Additional bank and card fees may apply.
              </li>
              <li>
                <sup>2</sup> Credit lines are not guaranteed and will be determined upon application approval.
              </li>
              <li>
                <sup>3</sup> The BILL Divvy Card may be issued by one of Divvy Pay, LLC's <a href="https://www.bill.com/legal/bank-partners">bank partners</a>. The BILL Divvy Card is not a deposit product. For your specific lender, see your Card Agreement.
              </li>
            </ul>
          </div>
      </section>`);

      (function alignFeatureSectionPadding() {
        var sliderContainer = document.querySelector('.spz-feature-cards .container-large');
        var footnotes = document.querySelector('.spz-feature-cards .new_footnotes');
        if (sliderContainer && footnotes) {
          footnotes.style.paddingLeft = sliderContainer.getBoundingClientRect().left + 'px';
        }
      })();

      var FEATURES_SPLIDE_HTML = `<div class="features-card-slider splide" id="spz-2022-features-splide" aria-label="Features carousel">
         <div class="splide__track">
         <ul class="splide__list">
            <li class="splide__slide"><div class="feature-card">
               <div class="card-text">
                  <h4>Automated payments</h4>
                  <p>Import bill info. Auto-pay vendors. Flat fees<sup>1</sup>. Speed up bill pay.</p>
               </div>
               <a href="/signup" class="spz-get-started mobile-hide spz_automated_payments">Get Started</a>
               <div class="feature-card-image">
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2020/image-automated-payments_3.webp" alt="Automated payments">
                  <a href="/signup" class="spz-get-started desktop-hide spz_automated_payments">Get Started</a>
               </div>
               <div class="feature-card-image-overlay"></div>
            </div></li>
            <li class="splide__slide"><div class="feature-card">
               <div class="card-text">
                  <h4>Payment options</h4>
                  <p>Pay via ACH, card, wire, international wire, or virtual card.</p>
               </div>
               <a href="/signup" class="spz-get-started mobile-hide spz_payment_options">Get Started</a>
               <div class="feature-card-image">
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2020/image-payment-options_3.webp" alt="Payment options">
                  <a href="/signup" class="spz-get-started desktop-hide spz_payment_options">Get Started</a>
               </div>
               <div class="feature-card-image-overlay"></div>
            </div></li>
            <li class="splide__slide"><div class="feature-card">
               <div class="card-text">
                  <h4>Approval workflows</h4>
                  <p>Request electronic payments. Auto-route for approval.</p>
               </div>
               <a href="/signup" class="spz-get-started mobile-hide spz_approval_workflows">Get Started</a>
               <div class="feature-card-image">
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2020/image-approval-workflows_3.webp" alt="Approval workflows">
                  <a href="/signup" class="spz-get-started desktop-hide spz_approval_workflows">Get Started</a>
               </div>
               <div class="feature-card-image-overlay"></div>
            </div></li>
            <li class="splide__slide"><div class="feature-card">
               <div class="card-text">
                  <h4>Business credit</h4>
                  <p>$1K-5M<sup>2</sup>. Corporate cards. Up to 7x rewards. Apply in minutes.</p>
               </div>
               <a href="/signup" class="spz-get-started mobile-hide spz_business_credit">Get Started</a>
               <div class="feature-card-image">
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2020/image-business-credit_5.webp" alt="Business credit">
                  <a href="/signup" class="spz-get-started desktop-hide spz_business_credit">Get Started</a>
               </div>
               <div class="feature-card-image-overlay"></div>
            </div></li>
            <li class="splide__slide"><div class="feature-card">
               <div class="card-text">
                  <h4>Spend & Expense</h4>
                  <p>Set spend limits. Get up-to-date visibility into company spend.</p>
               </div>
               <a href="/product/spend-and-expense" class="spz-get-started mobile-hide spz_spend_and_expense">Get Started</a>
               <div class="feature-card-image">
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2020/image-spend-and-expense_3.webp" alt="Spend & Expense">
                  <a href="/product/spend-and-expense" class="spz-get-started desktop-hide spz_spend_and_expense">Get Started</a>
               </div>
               <div class="feature-card-image-overlay"></div>
            </div></li>
            <li class="splide__slide"><div class="feature-card">
               <div class="card-text">
                  <h4>2-way account. sync</h4>
                  <p>Two-way sync with QuickBooks, Xero, Intacct, etc. </p>
               </div>
               <a href="/signup" class="spz-get-started mobile-hide spz_accounting_sync">Get Started</a>
               <div class="feature-card-image">
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/bill/2020/image-accounting-sync_3.webp" alt="2-way account. sync">
                  <a href="/signup" class="spz-get-started desktop-hide spz_accounting_sync">Get Started</a>
               </div>
               <div class="feature-card-image-overlay"></div>
            </div></li>
         </ul>
         </div>
      </div>`;

      function sliderSpace() {
        const sliderContainer = document.querySelector('.spz-feature-cards .container-large');
        const sliderEl = document.querySelector('.features-card-slider');
        if (sliderContainer && sliderEl) {
          const containerOffsetLeft = sliderContainer.getBoundingClientRect().left;
          sliderEl.style.paddingLeft = containerOffsetLeft + 'px';
          document.querySelector('.new_footnotes').style.paddingLeft = containerOffsetLeft + 'px';
        }
      }

      function getScript(source, callback) {
        var el = document.createElement("script");
        el.onload = callback;
        el.src = source;
        document.body.appendChild(el);
      }

      function ensureSplideCss(onCssReady) {
        var existing = document.querySelector('link[data-spz-splide-css]');
        if (existing) {
          if (onCssReady) onCssReady();
          return;
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
        link.setAttribute('data-spz-splide-css', '1');
        link.onload = function () {
          if (onCssReady) onCssReady();
        };
        link.onerror = function () {
          if (onCssReady) onCssReady();
        };
        document.head.appendChild(link);
      }

      var featureSplideInitialized = false;
      var featureSplideLoading = false;
      var SPLIDE_JS_URL = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';

      function pauseFeatureSplideAutoplay() {
        var s = window.spz2022FeatureSplide;
        if (s && s.Components && s.Components.Autoplay) {
          s.Components.Autoplay.pause();
        }
      }

      function resumeFeatureSplideAutoplay() {
        var s = window.spz2022FeatureSplide;
        if (s && s.Components && s.Components.Autoplay) {
          s.Components.Autoplay.play();
        }
      }

      function initFeatureSplide() {
        if (featureSplideInitialized || featureSplideLoading) return;
        featureSplideLoading = true;

        function loadSplideJsAndMount() {
          function mountSplide() {
            featureSplideLoading = false;
            var mount = document.getElementById('spz-2022-features-slider-mount');
            if (!mount || typeof Splide === 'undefined') {
              return;
            }
            if (featureSplideInitialized) return;

            mount.innerHTML = FEATURES_SPLIDE_HTML;
            mount.removeAttribute('aria-busy');
            mount.style.minHeight = '';

            sliderSpace();

            var root = document.getElementById('spz-2022-features-splide');
            if (!root) return;

            var splide = new Splide(root, {
              type: 'loop',
              fixedWidth: 308,
              gap: 16,
              arrows: false,
              pagination: false,
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              drag: true,
              flickPower: 200,
              breakpoints: {
                767: { gap: 8, focus: 'center' }
              }
            });

            splide.mount();
            featureSplideInitialized = true;
            window.spz2022FeatureSplide = splide;

            var prevBtn = document.querySelector('.spz-feature-splide-prev');
            var nextBtn = document.querySelector('.spz-feature-splide-next');
            if (prevBtn) {
              prevBtn.addEventListener('click', function () {
                pauseFeatureSplideAutoplay();
                splide.go('<');
              });
            }
            if (nextBtn) {
              nextBtn.addEventListener('click', function () {
                pauseFeatureSplideAutoplay();
                splide.go('>');
              });
            }

            root.addEventListener('click', function () {
              pauseFeatureSplideAutoplay();
            });

            root.addEventListener('mouseleave', resumeFeatureSplideAutoplay);
            var featureCardsSection = document.querySelector('.spz-feature-cards');
            if (featureCardsSection) {
              featureCardsSection.addEventListener('mouseleave', resumeFeatureSplideAutoplay);
            }

            function syncHeightsAfterSplide() {
              setTimeout(applyCardTextHeights, 50);
              setTimeout(applyUniformCardHeights, 100);
            }
            splide.on('mounted moved updated', syncHeightsAfterSplide);
            syncHeightsAfterSplide();

            document.querySelectorAll('.feature-cta .spz-get-started, .features-card-slider .splide__list .feature-card a.spz-get-started, .spz-feature-cards .slider-arrows .spz-feature-splide-prev, .spz-feature-cards .slider-arrows .spz-feature-splide-next').forEach(function (button) {
              button.addEventListener('click', function () {
                setTimeout(() => {
                  this.blur();
                }, 100);
              });
            });
          }

          if (typeof Splide !== 'undefined') {
            mountSplide();
            return;
          }

          getScript(SPLIDE_JS_URL, mountSplide);
        }

        ensureSplideCss(loadSplideJsAndMount);
      }

      initFeatureSplide();
    }

    // Detect Browser and add class
    function addBrowserAndOSClassToBody() {
      const ua = navigator.userAgent.toLowerCase();

      function applyClass() {
        const body = document.body;
        if (!body) return;

        // Browser detection
        if (ua.includes('firefox')) {
          body.classList.add('is-firefox');
        } else if (ua.includes('chrome') && !ua.includes('edg')) {
          body.classList.add('is-chrome');
        } else if (ua.includes('safari') && !ua.includes('chrome')) {
          body.classList.add('is-safari');
        } else if (ua.includes('edg')) {
          body.classList.add('is-edge');
        } else {
          body.classList.add('is-unknown-browser');
        }

        // OS detection
        if (ua.includes('windows')) {
          body.classList.add('os-windows');
        } else if (ua.includes('macintosh') || ua.includes('mac os')) {
          body.classList.add('os-mac');
        } else if (ua.includes('linux')) {
          body.classList.add('os-linux');
        } else if (ua.includes('android')) {
          body.classList.add('os-android');
        } else if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ios')) {
          body.classList.add('os-ios');
        } else {
          body.classList.add('os-unknown');
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyClass);
      } else {
        applyClass();
      }
    }
    addBrowserAndOSClassToBody();

  }
}, 70);
