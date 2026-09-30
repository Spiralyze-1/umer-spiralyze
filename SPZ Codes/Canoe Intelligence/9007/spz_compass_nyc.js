
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

  var endRaw = root.getAttribute('data-end') || '2026-10-14T09:00:00-04:00';
  var endTime = new Date(/^\d+$/.test(endRaw) ? Number(endRaw) : endRaw);
  if (Number.isNaN(endTime.getTime())) {
    console.log('invalid end date for countdown timer');
    return;
  }

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
