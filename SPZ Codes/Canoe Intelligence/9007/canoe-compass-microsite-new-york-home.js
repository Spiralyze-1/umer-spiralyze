let YES_SELECTED = false;

// timer js
function initCountdownTimer() {
  var root = document.querySelector('.spz_hero_timer');
  if (!root) {
    return;
  }

  var daysEl = root.querySelector('.days_value');
  var hoursEl = root.querySelector('.hours_value');
  var minutesEl = root.querySelector('.minutes_value');
  var secondsEl = root.querySelector('.seconds_value');
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
    return;
  }

  var endTime = Number(root.dataset.end);
  if (!endTime || Number.isNaN(endTime)) {
    console.log('invalid end date for countdown timer');
    return;
  }

  endTime = new Date(endTime);

  function pad2(n) {
    return String(n).padStart(2, '0');
  }

  function writeValues(days, hours, minutes, seconds) {
    daysEl.textContent = String(days);
    hoursEl.textContent = pad2(hours);
    minutesEl.textContent = pad2(minutes);
    secondsEl.textContent = pad2(seconds);
  }

  function updateFromDeadline() {
    var diff = endTime - Date.now();
    if (diff <= 0) {
      writeValues(0, 0, 0, 0);
      return false;
    }
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    writeValues(days, hours, minutes, seconds);
    return true;
  }

  if (!updateFromDeadline()) {
    return;
  }

  var countdownIntervalId = setInterval(function () {
    if (!updateFromDeadline()) {
      clearInterval(countdownIntervalId);
    }
  }, 1000);
}
initCountdownTimer();


// faq js
(function () {
  function setExpanded(question, expanded) {
    question.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  function syncAria(item) {
    var q = item.querySelector('.spz__compass__faq__list__item__question');
    if (q) {
      setExpanded(q, item.classList.contains('active'));
    }
  }

  function initFaqAccordion() {
    var list = document.querySelector('.spz__compass__faq__list');
    if (!list) {
      return;
    }

    var items = list.querySelectorAll('.spz__compass__faq__list__item');
    items.forEach(function (item) {
      var question = item.querySelector('.spz__compass__faq__list__item__question');
      if (!question) {
        return;
      }
      question.setAttribute('role', 'button');
      question.setAttribute('tabindex', '0');
      syncAria(item);
    });

    list.addEventListener('click', function (e) {
      var question = e.target.closest('.spz__compass__faq__list__item__question');
      if (!question || !list.contains(question)) {
        return;
      }
      var item = question.closest('.spz__compass__faq__list__item');
      if (!item) {
        return;
      }
      var opening = !item.classList.contains('active');
      list.querySelectorAll('.spz__compass__faq__list__item.active').forEach(function (el) {
        el.classList.remove('active');
        syncAria(el);
      });
      if (opening) {
        item.classList.add('active');
      }
      syncAria(item);
    });

    list.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') {
        return;
      }
      var question = e.target.closest('.spz__compass__faq__list__item__question');
      if (!question || !list.contains(question)) {
        return;
      }
      e.preventDefault();
      question.click();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqAccordion);
  } else {
    initFaqAccordion();
  }
})();

function formatLabel(label) {
  return label.replace('*', '').trim();
}

function restructureFormFields(form) {
  const fields = form.querySelectorAll('input:not([type="hidden"]):not([type="checkbox"]):not([name="g-recaptcha-response"]), textarea, select');
  fields.forEach(field => {
    const formField = field.closest('.hs-form-field');
    if (formField) {
      const label = formField.querySelector('label');
      formField.classList.add('spz__form-field');
      const inputContainer = formField.querySelector('.input');
      if (inputContainer && label) {
        inputContainer.insertAdjacentElement('beforeend', label);
        label.classList.add('spz__form-field-label');
        label.textContent = formatLabel(label.textContent);
      }
      field.setAttribute('placeholder', ' ');
    }
  });
}

const formInterval = setInterval(function () {
  const form = $('.spz__compass-footer__form form.hs-form');
  if (form && form.length > 0) {
    clearInterval(formInterval);

    form.each(function () {
      const hsForm = this;
      restructureFormFields(hsForm);
      setTimeout(() => {
        const attendingCheck = document.querySelector(
          'input[name="are_you_able_to_attend"][value="Yes, I will be there"]'
        );
        console.log('aaaaaaa');
        if (attendingCheck && !attendingCheck.checked) {
          attendingCheck.click();
        }
      }, 1000);
      // hsForm.querySelector('select[name="state_region_2"]').closest('.spz__form-field').querySelector('label').innerHTML = 'State/Region';
      hsForm.querySelector('select[name="state_region_2"]').querySelector('option:first-child').textContent = '';
      hsForm.querySelector('select[name="state_region_2"]').querySelector('option:first-child').setAttribute('hidden', 'hidden');
      hsForm.querySelector('select[name="state_region_2"]').selectedIndex = -1;
      setTimeout(() => {
        hsForm.querySelector('select[name="state_region_2"]').selectedIndex = 0;
      }, 100);

      hsForm.querySelector('select[name="country_region_2"]').querySelector('option:first-child').textContent = '';
      hsForm.querySelector('select[name="country_region_2"]').querySelector('option:first-child').setAttribute('hidden', 'hidden');
      hsForm.querySelector('select[name="country_region_2"]').selectedIndex = -1;
      setTimeout(() => {
        hsForm.querySelector('select[name="country_region_2"]').selectedIndex = 0;
      }, 100);

      hsForm.querySelector('select[name="zipup_size"]').querySelector('option:first-child').textContent = '';
      hsForm.querySelector('select[name="zipup_size"]').querySelector('option:first-child').setAttribute('hidden', 'hidden');
      hsForm.querySelector('select[name="zipup_size"]').selectedIndex = -1;
      setTimeout(() => {
        hsForm.querySelector('select[name="zipup_size"]').selectedIndex = 0;
      }, 100);

      const dietaryRequirementsField = hsForm.querySelector('input[name="dietary_requirements"]');
      if (dietaryRequirementsField) {
        const legend = dietaryRequirementsField.closest('.spz__form-field').querySelector('legend.hs-field-desc');
        if (legend) {
          legend.innerHTML = 'Please let us know about any dietary preferences or allergies. If you have no requirements, leave this blank.';
          dietaryRequirementsField.closest('.spz__form-field').insertAdjacentElement('afterend', legend);

        }
      }

      const CTAWrap = hsForm.querySelector('.hs_submit.hs-submit:has(.actions)');
      if (CTAWrap) {
        CTAWrap.classList.add('full-width');
      }

      if (localStorage.getItem('spz__canoe-compass-ny-rsvp-form-submitted') === 'true') {
        const successMessage = document.querySelector('.rsvp_hero__form__success-message');
        if (successMessage) {
          const message = successMessage.querySelector('.rsvp_hero__form__success-message__copy');

          message.textContent = 'Thank you, we look forward to seeing you at Canoe Compass NYC!';

          successMessage.classList.remove('hidden');

          const heading = successMessage.parentElement.querySelector('h2');
          if (heading) {
            heading.style.display = 'none';
          }

          const form = successMessage.parentElement.querySelector('.hbspt-form');
          if (form) {
            form.style.display = 'none';
          }
        }
      }
    });
  }
}, 200);


(function () {
  function setupMobileNav() {
    const menu = document.getElementById('spz_hero__mobile-menu');
    const toggle = document.querySelector('.spz_hero__mobile-nav__toggle');
    const overlay = document.querySelector('.spz_hero__mobile-menu__overlay');

    if (!menu || !toggle) return;

    function openMenu() {
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('spz_hero__mobile-menu-open');
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('spz_hero__mobile-menu-open');
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    menu.querySelectorAll('.spz_hero__mobile-menu__links a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMobileNav);
  } else {
    setupMobileNav();
  }
})();


function setupSuccessMessage() {
  const successMessage = document.querySelector('.rsvp_hero__form__success-message');
  if (!successMessage) return;

  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'hsFormCallback' || event.data.eventName !== 'onFormSubmitted') {
      return;
    }

    const message = successMessage.querySelector('.rsvp_hero__form__success-message__copy');

    message.textContent = 'Thank you, we look forward to seeing you at Canoe Compass NYC!';

    successMessage.classList.remove('hidden');

    const heading = successMessage.parentElement.querySelector('h2');
    if (heading) {
      heading.style.display = 'none';
    }

    const form = successMessage.parentElement.querySelector('.hbspt-form');
    if (form) {
      form.style.display = 'none';
    }

    localStorage.setItem('spz__canoe-compass-ny-rsvp-form-submitted', 'true');
    localStorage.setItem('spz__canoe-compass-ny-rsvp-yes-selected', YES_SELECTED);
  });
}

// setupForm();
setupSuccessMessage();



if (localStorage.getItem('spz_microsite') !== 'canoe_compass_ny_2026') {
  // window.location.replace('https://canoeintelligence.com/canoe-compass-ny-2026/');
  localStorage.setItem('spz_microsite', 'canoe_compass_ny_2026');
}