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