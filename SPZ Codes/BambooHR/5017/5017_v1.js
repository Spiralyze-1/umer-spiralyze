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
        if (target && target.textContent.trim() !== 'Pricing') target.innerHTML = 'Pricing';
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
      var getQuoteLinks = document.querySelectorAll('.section.package-comparison .table-wrapper thead th .button-container a.button.accent');
      if (!getQuoteLinks.length) {
        getQuoteLinks = document.querySelectorAll('.spz-5017-pricing-section .table-wrapper thead th a.button.accent');
      }
      if (!getQuoteLinks.length) {
        getQuoteLinks = document.querySelectorAll('.spz-5017-pricing-section a.button.accent[data-action="open-modal"]');
      }
      var cardIndex = 0;
      getQuoteLinks.forEach(function (link) {
        if (link.closest('.table-mobile-container')) return;
        link.innerHTML = 'Get a Demo &amp; Current Promos';
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
      var descriptionByPlan = {
        core: 'For small businesses',
        pro: 'For mid-sized businesses',
        elite: 'For large businesses and enterprises'
      };
      tableWrappers.forEach(function (wrapper) {
        if (wrapper.closest('.table-mobile-container')) return;
        var th = wrapper.querySelector('thead th');
        if (!th) return;
        var planName = '';
        var h2 = th.querySelector('h2');
        if (h2) planName = (h2.textContent || '').trim().toLowerCase();
        var description = descriptionByPlan[planName] || null;
        if (!description) return;
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
        if (descP) descP.innerHTML = description;
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
      var proCardFeatures = [
        'Custom Performance Review Cycles',
        '360° Feedback for Performance',
        'Goal Tracking',
        'Internal Announcements',
        'Employee Interest Groups',
        'Compliance Training: 15 Courses',
        'Upgraded AI Assistant'
      ];
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
      if (proWrapper) {
        var tableBlock = proWrapper.querySelector('.table.comparison.block');
        var tbody = tableBlock ? tableBlock.querySelector('tbody') : null;
        if (tbody) {
          var trs = tbody.querySelectorAll('tr');
          if (trs.length >= 2) {
            var templateTr = trs[1].cloneNode(true);
            while (tbody.rows.length > 1) tbody.removeChild(tbody.lastChild);
            for (var f = 0; f < proCardFeatures.length; f++) {
              var newTr = templateTr.cloneNode(true);
              var textEl = newTr.querySelector('.icon-wrapper__text') || newTr.querySelector('.feature-text') || newTr.querySelector('td');
              var wrapperText = newTr.querySelector('.icon-wrapper__text');
              if (textEl) {
                var target = textEl.classList && (textEl.classList.contains('icon-wrapper__text') || textEl.classList.contains('feature-text')) ? textEl : textEl.querySelector('.icon-wrapper__text, .feature-text') || textEl;
                target.textContent = proCardFeatures[f];
              }
              var hasNew = (f === 5 || f === 6);
              var newPill = newTr.querySelector('.icon-new');
              if (newPill) {
                if (!hasNew) newPill.remove();
              } else if (hasNew && wrapperText) {
                var pill = document.createElement('span');
                pill.className = 'icon icon-new';
                wrapperText.appendChild(pill);
              }
              tbody.appendChild(newTr);
            }
          }
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

    // Add-on card: Employer of Record — split title per Figma (only within add-on section)
    function applyAddonEorCardTitle() {
      var addonSection = document.querySelector('#add-on-solutions') ? document.querySelector('#add-on-solutions').closest('.section') : null;
      if (!addonSection) addonSection = document.querySelector('[id*="add-on-solutions"]') ? document.querySelector('[id*="add-on-solutions"]').closest('.section') : null;
      if (!addonSection) return false;
      var eorH3 = addonSection.querySelector('.cards-wrapper .card h3#employer-of-record-powered-by-remote') ||
        addonSection.querySelector('#employer-of-record-powered-by-remote') ||
        addonSection.querySelector('.card h3[id*="employer-of-record"]');
      if (!eorH3 || eorH3.classList.contains('spz-5017-eor-split')) return true;
      var text = (eorH3.textContent || '').trim();
      if (text.indexOf('Employer of Record') === -1) return false;
      eorH3.innerHTML = 'Employer of Record';
      var subtitle = document.createElement('span');
      subtitle.className = 'addon-card-subtitle spz-5017-eor-subtitle';
      subtitle.setAttribute('aria-hidden', 'true');
      subtitle.textContent = '(powered by Remote)';
      eorH3.parentNode.insertBefore(subtitle, eorH3.nextSibling);
      eorH3.classList.add('spz-5017-eor-split');
      return true;
    }
    var addonEorInterval = setInterval(function () {
      if (applyAddonEorCardTitle()) clearInterval(addonEorInterval);
    }, 150);
    setTimeout(applyAddonEorCardTitle, 800);
    setTimeout(applyAddonEorCardTitle, 2000);

    // Remove "Explore ROI Calculator" CTA (only within add-on section)
    function removeAddonLearnMoreAndRoiCta() {
      var addonSection = document.querySelector('#add-on-solutions') ? document.querySelector('#add-on-solutions').closest('.section') : null;
      if (!addonSection) addonSection = document.querySelector('[id*="add-on-solutions"]') ? document.querySelector('[id*="add-on-solutions"]').closest('.section') : null;
      if (!addonSection) return true;
      var removed = false;
      var links = addonSection.querySelectorAll('a');
      links.forEach(function (link) {
        var text = (link.textContent || '').trim();
        if (text.indexOf('ROI Calculator') !== -1 || text.indexOf('Explore ROI') !== -1) {
          var container = link.closest('.button-container');
          if (container) {
            container.remove();
          } else {
            link.remove();
          }
          removed = true;
        }
      });
      return !removed;
    }
    var removeAddonInterval = setInterval(function () {
      if (removeAddonLearnMoreAndRoiCta()) clearInterval(removeAddonInterval);
    }, 200);

    // Modal: minimal overlay (backdrop + close) — required for modal UX
    // Backdrop overlay (only new element injected at body end)
    document.body.insertAdjacentHTML('beforeend', '<div class="spz-5017-backdrop"></div>');

    // 6. Modal open/close — form stays in place, CSS makes .form-col act as the modal
    var savedScrollY = 0;

    function openModal() {
      savedScrollY = window.scrollY || window.pageYOffset || 0;
      document.body.style.top = '-' + savedScrollY + 'px';
      document.body.classList.add('spz-5017-modal-active');
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
      if (e.target.classList && e.target.classList.contains('spz-5017-backdrop')) {
        closeModal();
      }

    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('spz-5017-modal-active')) {
        closeModal();
      }
    });

    document.querySelector('#add-on-solutions').textContent = 'Add on Solutions';


    setTimeout(() => {
      if (document.querySelector('.section:has([id*=add-on-solutions]) .cards-wrapper .cards .card:nth-child(3)> ul >li:first-child')) {
        document.querySelector('.section:has([id*=add-on-solutions]) .cards-wrapper .cards .card:nth-child(3)> ul >li:first-child').textContent = 'View & Edit Time Sheets';
      }
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
          // document.querySelector('.form_container .form-col-container > p:nth-of-type(1) strong').innerHTML = "Get Pricing";
          // document.querySelector('#LblEmail').closest('.mktoFormRow').classList.add('width50', 'email-parent')
          // document.querySelector('#LblEmail').textContent = "Email*";
          // document.querySelector('#LblFirstName').closest('.mktoFormRow').classList.add('fname-parent')
          // document.querySelector('#LblLastName').closest('.mktoFormRow').classList.add('lname-parent')
          // document.querySelector('#LblPhone').closest('.mktoFormRow').classList.add('phone-parent')
          // document.querySelector('#LblTitle').closest('.mktoFormRow').classList.add('job-parent', 'width50')
          // document.querySelector('#LblCompany').closest('.mktoFormRow').classList.add('company-parent', 'width50')
          // document.querySelector('#LblCountry').closest('.mktoFormRow').classList.add('country-parent', 'width50')
          // document.querySelector('#LblEmployees_Text__c').closest('.mktoFormRow').classList.add('employee_c-parent');
          // setTimeout(() => {
          //   document.querySelector('[name="Phone"]').tabIndex = 4;
          //   document.querySelector('.job-parent input').tabIndex = 5;
          //   document.querySelector('.company-parent input').tabIndex = 6;
          //   document.querySelector('.employee_c-parent select').tabIndex = 7;
          //   document.querySelector('.country-parent select').tabIndex = 8;
          //   document.querySelector('.privacy-policy a').tabIndex = 9;
          //   document.querySelector('.form_container .mktoButton').tabIndex = 10;
          // }, 500);


          // if (document.querySelector('.bhrForm__partnerDisclaimer').parentNode.parentNode.classList.contains("form-checkbox-flex")) {
          //   document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy")
          //   document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy")
          // } else {
          //   document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-1', "privacy-policy")
          //   document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-2', "privacy-policy")
          // }

          /*
          document.querySelector('.mktoPlaceholderDisclaimer__c').closest('.mktoFormRow').classList.add('disclaimer-parent-1',"privacy-policy")
          document.querySelector('.mktoPlaceholder').closest('.mktoFormRow').classList.add('disclaimer-parent-1',"privacy-policy")
          document.querySelector('.bhrForm__partnerDisclaimer').closest('.mktoFormRow').classList.add('disclaimer-parent-2',"privacy-policy")
          document.querySelector('#LblDisclaimer__c').closest('.mktoFormRow').classList.add('disclaimer-parent-2',"privacy-policy")
          */

          if(document.querySelector('.bhrForm__partnerDisclaimer')){
            document.querySelector('.bhrForm__partnerDisclaimer a').textContent = 'Privacy Policy'
          }
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