function loadTestCode() {
  var bodyEle = document.querySelector('body');
  if (!bodyEle.classList.contains('spz_5017_v')) {
    bodyEle.classList.add('spz_5017_v');

    var expName = '5017';
    var variantName = '#' + expName + '_variant';
    var clientDomain = '.bamboohr.com';

    // Wait for pricing cards to be fully loaded (structure + content), then apply DOM changes and add body class.
    // Re-apply description and CTA after delays so we overwrite any late-loaded or re-rendered content from the site.
    function isPricingCardsReady() {
      var section = document.querySelector('.section.package-comparison.table-container');
      var wrappers = document.querySelectorAll('.section.package-comparison .table-wrapper');
      if (!section || wrappers.length < 1) return false;
      var loadedBlocks = document.querySelectorAll('.section.package-comparison .table-wrapper .table.comparison.block[data-block-status="loaded"]');
      if (loadedBlocks.length < 1) return false;
      // Require each card to have thead th with h2 and at least one paragraph or button so content is present
      var readyCount = 0;
      for (var w = 0; w < wrappers.length; w++) {
        if (wrappers[w].closest('.table-mobile-container')) continue;
        var th = wrappers[w].querySelector('thead th');
        if (!th || !th.querySelector('h2')) continue;
        var hasContent = th.querySelector('p:not(.button-container)') || th.querySelector('.button-container');
        if (hasContent) readyCount++;
      }
      return readyCount >= 1;
    }

    function replacePricingHeading() {
      var headingEl = document.getElementById('plans-and-pricing-for-every-organization');
      if (!headingEl) {
        var allH2s = document.querySelectorAll('.section.title-container h2, .section.package-comparison h2');
        for (var i = 0; i < allH2s.length; i++) {
          if (allH2s[i].textContent && allH2s[i].textContent.indexOf('Plans and pricing') !== -1) {
            headingEl = allH2s[i];
            break;
          }
        }
      }
      if (headingEl) {
        var target = headingEl.tagName === 'H2' ? headingEl : headingEl.querySelector('h2');
        if (target && target.innerHTML.trim() !== `Get BambooHR <sup>®</sup> <strong>Plans and Pricing</strong> `) {
          target.innerHTML = `Get BambooHR <sup>®</sup> <strong>Plans and Pricing</strong> `;
        }
      }
    }

    // Run heading replacement immediately and keep polling so it always wins
    var headingInterval = setInterval(function () {
      replacePricingHeading();
    }, 200);
    setTimeout(function () { clearInterval(headingInterval); }, 10000);

    function applyPricingCardContent() {
      var section = document.querySelector('.section.package-comparison.table-container');
      if (!section) return;

      // 1. Heading — always re-apply
      replacePricingHeading();

      // 2. Pricing section class (for fallback selectors)
      section.classList.add('spz-5017-pricing-section');

      // 3. Get Quote CTAs — apply text and classes so our UI always wins over late-loaded content
      var getQuoteLinks = document.querySelectorAll('.section.package-comparison .table-wrapper thead th .button-container:not(.non-img-col) a.button.accent');
      if (!getQuoteLinks.length) {
        getQuoteLinks = document.querySelectorAll('.spz-5017-pricing-section .table-wrapper thead th a.button.accent');
      }
      if (!getQuoteLinks.length) {
        getQuoteLinks = document.querySelectorAll('.spz-5017-pricing-section a.button.accent[data-action="open-modal"]');
      }
      var cardIndex = 0;
      getQuoteLinks.forEach(function (link) {
        if (link.closest('.table-mobile-container')) return;
        // link.innerHTML = 'Get a Demo &amp; Current Promos';
        link.setAttribute('href', '#');
        link.setAttribute('data-action', 'open-modal');
        link.classList.add('spz5017_v');
        link.classList.remove('spz-5017-cta-outlined', 'spz-5017-cta-filled');
        if (cardIndex < 2) {
          link.classList.add('spz-5017-cta-outlined');
        } else {
          link.classList.add('spz-5017-cta-filled');
        }
        cardIndex++;
      });

      // 4. Wire scroll-to-form links to open modal (only within pricing section or same main content)
      var contentRoot = section.closest('main') || section.parentElement;
      var scrollLinks = contentRoot ? contentRoot.querySelectorAll('a.button[href="#scroll-to-form"], a[href*="scroll-to-form"]') : [];
      scrollLinks.forEach(function (link) {
        if (!link.hasAttribute('data-action')) {
          link.setAttribute('href', '#');
          link.setAttribute('data-action', 'open-modal');
          link.classList.add('spz5017_v');
        }
      });

      // 5. Cards: set description by plan name (Core/Pro/Elite); re-applying overwrites any restored content
      var tableWrappers = document.querySelectorAll('.section.package-comparison .table-wrapper');
      // var descriptionByPlan = {
      //   core: 'For small businesses',
      //   pro: 'For mid-sized businesses',
      //   elite: 'For large businesses and enterprises'
      // };
      tableWrappers.forEach(function (wrapper) {
        if (wrapper.closest('.table-mobile-container')) return;
        var th = wrapper.querySelector('thead th');
        if (!th) return;
        var planName = '';
        var h2 = th.querySelector('h2');
        if (h2) planName = (h2.textContent || '').trim().toLowerCase();
        // var description = descriptionByPlan[planName] || null;
        // if (!description) return;
        var paras = th.querySelectorAll('p:not(.button-container)');
        var descP = null;
        for (var i = 0; i < paras.length; i++) {
          var t = (paras[i].textContent || '').trim();
          if (t.indexOf('per employee') === -1 && t.length > 2) {
            descP = paras[i];
            break;
          }
        }
        if (!descP && paras.length > 1) descP = paras[1];
        if (!descP && paras.length > 0) descP = paras[0];
        // if (descP) descP.innerHTML = description;
        if (planName === 'elite') wrapper.classList.add('spz-5017-elite-card');
      });

      // 6. Pricing card icons — Cloudinary 5017 checkmark + information SVG. Live DOM: span.icon.icon-checkmark > svg (no img).
      var checkmarkSvg = 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1773059771/bamboohr/5017/checkmark_1.svg';
      var informationSvg = 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1773059769/bamboohr/5017/informationsvg.svg';
      var pricingSection = document.querySelector('.section.package-comparison.spz-5017-pricing-section') || document.querySelector('.section.package-comparison.table-container');
      if (pricingSection) {
        var checkmarkSpans = pricingSection.querySelectorAll('.table-wrapper .icon-wrapper .icon-checkmark, .table-wrapper .icon-wrapper span.icon-checkmark');
        checkmarkSpans.forEach(function (span) {
          if (span.querySelector('svg')) {
            span.innerHTML = '<img src="' + checkmarkSvg + '" alt="checkmark" width="18" height="18" style="display:block;width:18px;height:18px">';
          } else if (span.querySelector('img')) {
            span.querySelector('img').setAttribute('src', checkmarkSvg);
          }
        });
        var infoIcons = pricingSection.querySelectorAll('.table-wrapper tbody td .icon-wrapper__text img, .table-wrapper tbody td .feature-text img');
        infoIcons.forEach(function (img) {
          if (img.closest('.icon-checkmark')) return;
          img.setAttribute('src', informationSvg);
        });
      }

      // 7. Replace second card (Pro) feature list with Figma 29056:1016 points
      var tableWrappersList = document.querySelectorAll('.section.package-comparison .table-wrapper');
      var proWrapper = null;
      for (var pw = 0; pw < tableWrappersList.length; pw++) {
        if (tableWrappersList[pw].closest('.table-mobile-container')) continue;
        var h2 = tableWrappersList[pw].querySelector('thead th h2');
        if (h2 && (h2.textContent || '').trim().toLowerCase() === 'pro') {
          proWrapper = tableWrappersList[pw];
          break;
        }
      }
    }

    var pricingApplied = false;
    var cardsInterval = setInterval(function () {
      if (pricingApplied) return;
      if (!isPricingCardsReady()) return;
      pricingApplied = true;
      clearInterval(cardsInterval);
      // Wait for cards to settle (site may still be injecting description/CTA) then apply and add body class
      setTimeout(function () {
        applyPricingCardContent();
        bodyEle.classList.add('spz-5017-cards-ready');
        // Re-apply so we overwrite any content that loads or re-renders after our first run
        setTimeout(applyPricingCardContent, 400);
        setTimeout(applyPricingCardContent, 1000);
        setTimeout(applyPricingCardContent, 2500);
      }, 250);
    }, 150);

    // Modal: minimal overlay (backdrop + close) — required for modal UX
    // Backdrop overlay (only new element injected at body end)
    document.body.insertAdjacentHTML('beforeend', '<div class="spz-5017-backdrop"></div>');

    // 6. Modal open/close — form stays in place, CSS makes .form-col act as the modal
    var savedScrollY = 0;

    function getModalHero() {
      return document.querySelector('body.spz_5017_v .spz_hero');
    }

    function getFocusableInModalHero() {
      var hero = getModalHero();
      if (!hero) return [];
      var sel = 'a[href], area[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';
      var nodes = Array.prototype.slice.call(hero.querySelectorAll(sel));
      return nodes.filter(function (el) {
        if (!el || el.getAttribute('aria-hidden') === 'true') return false;
        var ti = el.getAttribute('tabindex');
        if (ti === '-1') return false;
        var rect = el.getBoundingClientRect();
        return rect.width > 0 || rect.height > 0;
      });
    }

    function focusFirstInModalHero() {
      var list = getFocusableInModalHero();
      if (list.length) list[0].focus();
    }

    function onModalFocusIn(e) {
      if (!document.body.classList.contains('spz-5017-modal-active')) return;
      var hero = getModalHero();
      if (!hero || !e.target || hero.contains(e.target)) return;
      focusFirstInModalHero();
    }

    document.addEventListener('focusin', onModalFocusIn);
    document.addEventListener('keydown', function (e) {
      if (!document.body.classList.contains('spz-5017-modal-active')) return;
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key !== 'Tab') return;
      var list = getFocusableInModalHero();
      if (list.length < 1) return;
      var first = list[0];
      var last = list[list.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    function openModal() {
      savedScrollY = window.scrollY || window.pageYOffset || 0;
      document.body.style.top = '-' + savedScrollY + 'px';
      document.body.classList.add('spz-5017-modal-active');
      window.requestAnimationFrame(function () {
        focusFirstInModalHero();
      });
    }

    function closeModal() {
      var formCol = document.querySelector('.section.form-container .form-col');
      if (formCol) {
        formCol.classList.add('spz-5017-slide-out');
      }
      document.body.classList.remove('spz-5017-modal-active');
      document.body.style.top = '';
      window.scrollTo(0, savedScrollY);
      if (formCol) {
        formCol.classList.remove('spz-5017-slide-out');
      }
    }

    document.addEventListener('click', function (e) {
      var ctaBtn = e.target.closest('[data-action="open-modal"]');
      if (ctaBtn) {
        e.preventDefault();
        openModal();
        return;
      }
      var closeBtnEl = e.target.closest('.close_icon');
      if (closeBtnEl) {
        e.preventDefault();
        closeModal();
        return;
      }
      // if (e.target.classList && e.target.classList.contains('spz-5017-backdrop')) {
      //   closeModal();
      // }

    });
    document.querySelector('#add-on-solutions').textContent = 'Add-on Solutions';
    document.addEventListener('mouseover', function (e) {
      var el = e.target.closest('.spz_5017_v .package-comparison .table-wrapper .table td.has-popup-data .icon-wrapper__text::after');
      if (el) {
        el.closest('.has-popup-data').classList.add('table-tooltip-show');
      }
    });
    
    document.addEventListener('mouseout', function (e) {
      var el = e.target.closest('.spz_5017_v .package-comparison .table-wrapper .table td.has-popup-data .icon-wrapper__text::after');
      if (el) {
        el.closest('.has-popup-data').classList.remove('table-tooltip-show');
      }
    });

    setTimeout(() => {
      if (document.querySelector('.spz-5017-pricing-section #usd')) {
        document.querySelectorAll(
          '.spz-5017-pricing-section #usd, \
           .spz-5017-pricing-section #usd-1, \
           .spz-5017-pricing-section #usd-2'
        ).forEach(function (el) {
          if (!el) return;

          var html = el.innerHTML;

          // Replace $ with <i>$</i> (only first occurrence)
          if (html.indexOf('$') !== -1) {
            el.innerHTML = html.replace('$', '<b>$</b>');
          }
        });

      }
    }, 3000);

    document.querySelector('.form-wrapper').insertAdjacentHTML('afterend', `
      <div class="spz_hero">
        <div class="auto_container">
          <div class="spz_heroInner">
            <div class="hero_main">
              <div class="hero_imageContainer">
                <div class="form_container">
                  <div class="form"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
      `);

    // 7. Floating labels + form styling (wait for MktoForms2)
    // form modification
    const formInterval = setInterval(function () {
      if (document.querySelector('.bhrForm__partnerDisclaimer')) {

        document.querySelector('.form_container .form').insertAdjacentElement("afterbegin", document.querySelector('.form-wrapper .form-col'))
        if (document.querySelectorAll('.form_container .close_icon').length === 0) {
          document.querySelector('.form_container').insertAdjacentHTML('afterbegin', `<div class="close_icon"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path d="M13.8758 4.62549L4.62524 13.876M13.8758 13.876L4.62524 4.62549" stroke="#95918F" stroke-width="1.54176" stroke-linecap="round"/>
          </svg></div>`);
        }
        clearInterval(formInterval)
        mainFormChanges();

        function mainFormChanges() {
          document.querySelector('.form_container .mktoButton').textContent = "Submit"
          document.querySelector('.form_container .mktoButton').classList.add("spz5017_v1")
        }
      }
    }, 20)

    // 8. Cookie tracking
    hiddenValue(expName, variantName);

    function hiddenValue(currentExperimentName, currentExperimentValue) {
      function setCookie(name, value, days) {
        var expires = '';
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + ';domain=' + clientDomain + ';path=/';
      }
      function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var c_i = 0; c_i < ca.length; c_i++) {
          var c = ca[c_i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }
      var ExistingExperimentName = getCookie('ExperimentName');
      var ExistingExperimentValue = getCookie('ExperimentValue');
      var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(',') : [];
      if (!ExistingExperimentName) {
        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);
      } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) === -1) {
        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);
      } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {
        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');
        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;
        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
      }
    }
  }
}

// Only run on pricing page: require pricing section so we do not touch other pages/sections
var runCode = setInterval(function () {
  var body = document.querySelector('body');
  var formContainer = document.querySelector('.section.form-container');
  var form = document.querySelector('#mktoForm_1767');
  var pricingSection = document.querySelector('.section.package-comparison');
  if (body && pricingSection && (formContainer || form)) {
    clearInterval(runCode);
    loadTestCode();
  }
}, 100);