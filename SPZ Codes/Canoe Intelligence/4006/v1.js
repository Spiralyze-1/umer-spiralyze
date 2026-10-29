document.querySelector('#row2').insertAdjacentHTML('afterend', `
<section class="ci_accordion family_office" aria-labelledby="ci_accordion_title">
  <div class="ci_accordion__inner">
    <h2 class="ci_accordion__title" id="ci_accordion_title">Bank &amp;  Brokerage Statement Collection.</h2>
    <p class="ci_accordion__subtitle">Automate data and document collection.</p>
    <div class="ci_accordion__grid">
      <button class="ci_accordion__tab is-active" type="button" data-index="0" aria-expanded="true">
        <span class="ci_accordion__label">Stop chasing down client statements</span>
        <span class="ci_accordion__progress" aria-hidden="true"><i></i></span>
      </button>
      <div class="ci_accordion__detail is-active" data-index="0">
        <div class="ci_accordion__copy">
          <h3 class="ci_accordion__heading">Stop chasing down client statements</h3>
          <p>Automatically collect alternatives, bank, and brokerage statements across custodians, entities, and family accounts.</p>
          <p>Reduce portal logins, downloads, and follow-ups. Keep documents organized across complex family structures.  </p>
          <a class="ci_accordion__cta" href="https://canoeintelligence.com/demo-request/">GET A DEMO</a>
        </div>
        <div class="ci_accordion__art">
          <picture>
            <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/feature_accordion_sp_1.png">
            <source media="(max-width:1023px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/feature_accordion_sp_3.png ">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/stop_chasing_down_client_statements.png" alt="Stop chasing down client statements">
          </picture>
        </div>
      </div>

      <button class="ci_accordion__tab" type="button" data-index="1" aria-expanded="false">
        <span class="ci_accordion__label">Reduce reconciliation & tax prep</span>
        <span class="ci_accordion__progress" aria-hidden="true"><i></i></span>
      </button>
      <div class="ci_accordion__detail" data-index="1">
        <div class="ci_accordion__copy">
          <h3 class="ci_accordion__heading">Reduce reconciliation & <br> tax prep</h3>
          <p>Auto-extract and structure statement data across accounts and investment types.</p>
          <p>Reduce manual reconciliation and monthly 1099 tie-outs. Give finance teams cleaner data for accounting, tax, and reporting. </p>
          <a class="ci_accordion__cta" href="https://canoeintelligence.com/demo-request/">GET A DEMO</a>
        </div>
        <div class="ci_accordion__art">
          <picture>
            <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/feature_accordion_sp_4.png">
            <source media="(max-width:1023px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/feature_accordion_sp_5.png">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/accelerate_reconciliation_and_reporting.png" alt="Reduce reconciliation & tax prep">
          </picture>
        </div>
      </div>

      <button class="ci_accordion__tab" type="button" data-index="2" aria-expanded="false">
        <span class="ci_accordion__label">Easily consolidate finances </span>
        <span class="ci_accordion__progress" aria-hidden="true"><i></i></span>
      </button>
      <div class="ci_accordion__detail" data-index="2">
        <div class="ci_accordion__copy">
          <h3 class="ci_accordion__heading">Easily consolidate finances </h3>
          <p>Connect alternative investments, bank accounts, and brokerage holdings across entities and generations.</p>
          <p>Break down data silos. Get a more complete view of family wealth without piecing information together manually.</p>
          <a class="ci_accordion__cta" href="https://canoeintelligence.com/demo-request/">GET A DEMO</a>
        </div>
        <div class="ci_accordion__art">
          <picture>
            <source media="(max-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/feature_accordion_sp.png">
            <source media="(max-width:1023px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/feature_accordion_sp_2.png">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/4006/see_the_full_client_picture.png" alt="Easily consolidate finances ">
          </picture>
        </div>
      </div>
    </div>
  </div>
</section>
`);

(function () {
  const DURATION = 8000;
  const section = document.querySelector('.ci_accordion');
  if (!section) return;

  const grid = section.querySelector('.ci_accordion__grid');
  const tabs = Array.from(section.querySelectorAll('.ci_accordion__tab'));
  const details = Array.from(section.querySelectorAll('.ci_accordion__detail'));
  const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 992px)');

  let active = 0;
  let elapsed = 0;
  let lastFrame = null;
  let rafId = 0;
  let running = false;
  let paused = false;
  let stopped = false;
  let scrolled = false;
  const initialScroll = window.scrollY;

  function setBar(percent) {
    tabs.forEach((tab, index) => {
      const bar = tab.querySelector('.ci_accordion__progress i');
      if (!bar) return;
      bar.style.width = index === active ? percent + '%' : '0%';
    });
  }

  function restartFade(detail) {
    const image = detail.querySelector('.ci_accordion__image');
    if (!image) return;
    image.style.animation = 'none';
    void image.offsetWidth;
    image.style.animation = '';
  }

  function activate(index) {
    active = index;
    elapsed = 0;
    setBar(0);
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
    details.forEach((detail, i) => {
      const on = i === index;
      detail.classList.toggle('is-active', on);
      if (on) restartFade(detail);
    });
  }

  function stopAutoplay() {
    if (stopped) return;
    stopped = true;
    running = false;
    paused = false;
    lastFrame = null;
    section.classList.add('ci_accordion--stopped');
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    tabs.forEach((tab) => {
      const bar = tab.querySelector('.ci_accordion__progress i');
      if (bar) bar.style.width = '0%';
    });
  }

  function frame(now) {
    if (!running || stopped) {
      rafId = 0;
      lastFrame = null;
      return;
    }
    if (lastFrame == null) lastFrame = now;
    const delta = Math.min(64, now - lastFrame);
    lastFrame = now;
    if (!paused) {
      elapsed += delta;
      if (elapsed >= DURATION) {
        activate((active + 1) % tabs.length);
      } else {
        setBar((elapsed / DURATION) * 100);
      }
    }
    rafId = requestAnimationFrame(frame);
  }

  function inZone() {
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight / 2 && rect.bottom > 0;
  }

  function updateRunState() {
    if (stopped) return;
    const shouldRun = scrolled && inZone();
    if (shouldRun && !running) {
      running = true;
      lastFrame = null;
      if (!rafId) rafId = requestAnimationFrame(frame);
    } else if (!shouldRun && running) {
      running = false;
      lastFrame = null;
    }
  }

  function onScroll() {
    if (window.scrollY !== initialScroll) scrolled = true;
    updateRunState();
  }

  grid.addEventListener('click', (event) => {
    const tab = event.target.closest('.ci_accordion__tab');
    if (tab && grid.contains(tab)) {
      const index = Number(tab.dataset.index);
      stopAutoplay();
      if (index !== active) activate(index);
      return;
    }
    if (event.target.closest('.ci_accordion__detail')) stopAutoplay();
  });

  grid.addEventListener('mouseenter', () => {
    if (!hoverQuery.matches || stopped) return;
    paused = true;
    lastFrame = null;
  });

  grid.addEventListener('mouseleave', () => {
    paused = false;
    lastFrame = null;
  });

  hoverQuery.addEventListener('change', () => {
    if (!hoverQuery.matches) paused = false;
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateRunState);
  document.addEventListener('visibilitychange', () => {
    lastFrame = null;
  });
})();
