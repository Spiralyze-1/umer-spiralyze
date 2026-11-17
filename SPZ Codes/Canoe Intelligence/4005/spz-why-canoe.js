
document.querySelector('.how-it-works').insertAdjacentElement('afterbegin', document.querySelector('.ci-ribbon-section'));

document.querySelector('.spz-features').insertAdjacentElement('beforebegin', document.querySelector('.how-it-works'));

/* Ribbon behavior. Markup is already in .how-it-works. */
(function () {
  "use strict";

  const CONFIG = {
    visibleClass: "ci-ribbon-visible",
    contentGhostClass: "ci-ribbon-content-ghost",
    observerThreshold: 0.25,
    observerRootMargin: "0px 0px -12% 0px",
    batchDwellMs: 4500,
    rollDelayMs: 1000,
    rollDurationMs: 2000,
    rollEasing: "ease-out",
    swapDurationMs: 300,
    swapEasing: "cubic-bezier(0, 0, 0.58, 1)",
    ghostFadeMs: 150,
    minTravelPx: 16,
    maxTravelPx: 48,
    digitHeightDesktop: 52.8,
    digitHeightMobile: 39.6,
    digitGap: 13,
    mobileMaxWidth: 767.98
  };

  const statSets = [
    [
      {
        steps: ["0.8", "0.9", "1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6"],
        prefix: "",
        suffix: "M",
        label: "docs processed per mo",
        roll: { delayMs: 0, durationMs: 3200, easing: "linear" }
      },
      {
        steps: ["40", "45", "50", "55", "60", "65", "70", "75", "80"],
        prefix: "",
        suffix: "0,000+",
        label: "LP positions optimized",
        roll: { durationMs: 3000 }
      },
      {
        steps: ["86", "87", "88", "89", "90", "91", "92", "93", "94"],
        prefix: "",
        suffix: "%",
        label: "faster reporting times",
        roll: { durationMs: 3000 }
      }
    ],
    [
      {
        steps: ["1", "2", "3"],
        prefix: "",
        suffix: "k+",
        label: "GP portals"
      },
      {
        steps: ["1", "2", "3", "4", "5", "6", "7", "9", "10", "11"],
        prefix: "$",
        suffix: "T",
        label: "AUA supported",
        roll: { durationMs: 2500 }
      },
      {
        steps: ["45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "99", "100"],
        prefix: "",
        suffix: "+",
        label: "Automated data validations"
      }
    ],
    [
      {
        steps: ["50", "100", "150", "200", "250", "300", "350", "400", "450", "500", "510", "520", "523", "525"],
        prefix: "",
        suffix: "+",
        label: "Clients"
      },
      {
        steps: ["10", "15", "20", "30", "40", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100"],
        prefix: "",
        suffix: "+",
        label: "Supported doc types"
      },
      {
        steps: ["0", "4", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18"],
        prefix: "",
        suffix: ",000+",
        label: "LPs supported"
      }
    ],
    [
      {
        steps: ["65", "70", "75", "80", "85", "88", "92", "96", "110", "140", "160", "180", "200"],
        prefix: "",
        suffix: "M+",
        label: "Data points extracted"
      },
      {
        steps: ["5", "10", "14", "16", "18", "20", "22", "24"],
        prefix: "< ",
        suffix: "hrs",
        label: "To retrieve docs"
      },
      {
        steps: ["10", "15", "20", "25", "30", "35", "40", "42", "44"],
        prefix: "",
        suffix: "k",
        label: "Funds mastered"
      }
    ]
  ];

  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const odometerHTML = (stat) => {
    const roll = {
      delayMs: CONFIG.rollDelayMs,
      durationMs: CONFIG.rollDurationMs,
      easing: CONFIG.rollEasing,
      ...stat.roll
    };
    const finalValue = `${stat.prefix}${stat.steps[stat.steps.length - 1]}${stat.suffix}`;
    const digits = stat.steps.map((step) => `<span class="ci-ribbon-odometer-digit">${step}</span>`).join("");
    const prefix = stat.prefix ? `<span class="ci-ribbon-prefix" aria-hidden="true">${stat.prefix}</span>` : "";
    const suffix = stat.suffix ? `<span class="ci-ribbon-suffix" aria-hidden="true">${stat.suffix}</span>` : "";
    return `
      <div class="ci-ribbon-value">
        ${prefix}
        <span class="ci-ribbon-odometer" aria-hidden="true">
          <span class="ci-ribbon-odometer-strip" data-ci-steps="${stat.steps.length}" data-ci-roll-delay="${roll.delayMs}" data-ci-roll-duration="${roll.durationMs}" data-ci-roll-easing="${roll.easing}">${digits}</span>
        </span>
        ${suffix}
        <span class="ci-ribbon-sr-only">${finalValue}</span>
      </div>`;
  };

  let activeSetIndex = 0;
  let rotationTimer = null;
  let rollTimers = [];
  let hasStarted = false; // gate: animations only run after scroll-into-view

  const isMobile = () => window.matchMedia(`(max-width: ${CONFIG.mobileMaxWidth}px)`).matches;

  // Pixel step between stacked digits (height + gap), matching SCSS breakpoints.
  const getDigitStepPx = () => {
    const height = isMobile() ? CONFIG.digitHeightMobile : CONFIG.digitHeightDesktop;
    return height + CONFIG.digitGap;
  };

  // Rolls each visible odometer strip to its final step on its own prototype delay/duration/easing.
  const startOdometers = (section) => {
    rollTimers.forEach(clearTimeout);
    rollTimers = [];
    const strips = section.querySelectorAll(".ci-ribbon-odometer-strip");
    const stepPx = getDigitStepPx();
    const endTransformFor = (strip) => {
      const stepCount = Number(strip.getAttribute("data-ci-steps")) || 1;
      return `translateY(-${Math.max(stepCount - 1, 0) * stepPx}px)`;
    };

    if (prefersReducedMotion()) {
      strips.forEach((strip) => {
        strip.style.transition = "none";
        strip.style.transform = endTransformFor(strip);
      });
      return;
    }

    strips.forEach((strip) => {
      const duration = Number(strip.getAttribute("data-ci-roll-duration")) || CONFIG.rollDurationMs;
      const easing = strip.getAttribute("data-ci-roll-easing") || CONFIG.rollEasing;
      const delay = Number(strip.getAttribute("data-ci-roll-delay")) || 0;
      strip.style.transition = `transform ${duration}ms ${easing}`;
      strip.style.transform = "translateY(0)";
      // Commit the start position so a zero-delay roll still transitions.
      void strip.offsetHeight;
      rollTimers.push(
        window.setTimeout(() => {
          strip.style.transform = endTransformFor(strip);
        }, delay)
      );
    });
  };

  // Swaps one card's odometer + label without recreating the card shell.
  const updateCard = (cardElement, stat) => {
    const content = cardElement.querySelector(".ci-ribbon-content");
    if (!content) return;
    content.innerHTML = `
      ${odometerHTML(stat)}
      <p class="ci-ribbon-label">${stat.label}</p>`;
  };

  // How far the incoming values travel: the real gap between the old and new value rows,
  // clamped so the motion always reads but never lurches. Negative = travelling left→right.
  const getTravelPx = (delta) => {
    const min = isMobile() ? CONFIG.minTravelPx / 1.5 : CONFIG.minTravelPx;
    const magnitude = Math.min(Math.max(Math.abs(delta), min), CONFIG.maxTravelPx);
    return delta > 0 ? magnitude : -magnitude;
  };

  // Swaps batches the way smart animate does: the outgoing values dissolve where they sit while the
  // incoming ones travel in from that spot. Moving both would read as a duplicate trailing the new
  // values, which is the echo this replaces. Wraps to the first batch.
  const showNextSet = (section) => {
    if (statSets.length < 2) return;

    const cards = Array.from(section.querySelectorAll(".ci-ribbon-card"));
    activeSetIndex = (activeSetIndex + 1) % statSets.length;
    const nextSet = statSets[activeSetIndex];

    cards.forEach((cardElement, cardIndex) => {
      const content = cardElement.querySelector(".ci-ribbon-content");
      if (!content) return;

      // Without the Web Animations API the batch just swaps in place.
      if (typeof content.animate !== "function") {
        updateCard(cardElement, nextSet[cardIndex]);
        return;
      }

      const value = content.querySelector(".ci-ribbon-value");
      const cardRect = cardElement.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const fromLeft = value ? value.getBoundingClientRect().left : contentRect.left;

      // Pin a copy of the outgoing batch so it can dissolve instead of being cut off.
      const ghost = content.cloneNode(true);
      ghost.classList.add(CONFIG.contentGhostClass);
      ghost.style.top = `${contentRect.top - cardRect.top}px`;
      ghost.style.left = `${contentRect.left - cardRect.left}px`;
      ghost.style.width = `${contentRect.width}px`;
      cardElement.appendChild(ghost);

      updateCard(cardElement, nextSet[cardIndex]);
      const nextValue = content.querySelector(".ci-ribbon-value");
      const toLeft = nextValue ? nextValue.getBoundingClientRect().left : fromLeft;
      const travel = getTravelPx(fromLeft - toLeft);

      const fade = ghost.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: CONFIG.ghostFadeMs,
        easing: CONFIG.swapEasing,
        fill: "forwards"
      });
      fade.onfinish = () => {
        if (ghost.parentNode) ghost.parentNode.removeChild(ghost);
      };

      content.animate(
        [
          { opacity: 0, transform: `translateX(${travel}px)` },
          { opacity: 1, transform: "translateX(0)" }
        ],
        { duration: CONFIG.swapDurationMs, easing: CONFIG.swapEasing }
      );
    });

    startOdometers(section);
    scheduleNextRotation(section);
  };

  // After the batch's prototype dwell, advance to the next batch.
  const scheduleNextRotation = (section) => {
    if (rotationTimer) {
      clearTimeout(rotationTimer);
      rotationTimer = null;
    }
    if (prefersReducedMotion()) return;
    if (statSets.length < 2) return;
    rotationTimer = window.setTimeout(() => showNextSet(section), CONFIG.batchDwellMs);
  };

  const revealRibbon = (section) => {
    if (hasStarted) return;
    hasStarted = true;
    section.classList.add(CONFIG.visibleClass);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        startOdometers(section);
        scheduleNextRotation(section);
      });
    });
  };

  const section = document.querySelector(".ci-ribbon-section");
  if (!section) return;

  const observeTarget = section.querySelector(".ci-ribbon-inner") || section;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || hasStarted) return;
        observer.disconnect();
        revealRibbon(section);
      });
    },
    {
      threshold: CONFIG.observerThreshold,
      rootMargin: CONFIG.observerRootMargin
    }
  );
  observer.observe(observeTarget);
})();

/* Integrations: swap desktop logo srcs for mobile assets when needed. Markup is already in page. */
(function () {
  if (!window.matchMedia("(max-width: 767.98px)").matches) return;
  document.querySelectorAll(".spz-integrations-logo[data-mobile-src]").forEach((img) => {
    img.src = img.getAttribute("data-mobile-src");
  });
})();


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

  function bindFaqList(list) {
    if (!list || list.getAttribute('data-spz-faq-bound') === 'true') {
      return;
    }
    list.setAttribute('data-spz-faq-bound', 'true');

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

  function initFaqAccordion() {
    document.querySelectorAll('.spz__compass__faq__list').forEach(bindFaqList);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqAccordion);
  } else {
    initFaqAccordion();
  }
})();
if(document.querySelector('.how-it-works .demo-button a')){
  document.querySelector('.how-it-works .demo-button a').href = 'javascript:void(0);';
  document.querySelector('.how-it-works .demo-button a').classList.add('form-modal-cta');
}

window.addEventListener('click', function (e) {
  if (e.target.closest('.form-modal-cta')) {
    var formModalCTA = document.querySelector('.solutions-hero__cta');
    if (formModalCTA) {
      formModalCTA.click();
    }
  }
});