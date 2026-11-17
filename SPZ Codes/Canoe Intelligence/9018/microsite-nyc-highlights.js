(function () {
  function showModal(content) {
    const modal = document.querySelector('.spz__canoe-compass__modal');
    if (!modal) return;
    modal.querySelector('#spz__canoe-compass__modal__body').innerHTML = content;
    modal.classList.add('show');
    modal.scrollTop = 0;
    document.body.classList.add('spz__canoe-compass__modal-open');
  }

  function hideModal() {
    const modal = document.querySelector('.spz__canoe-compass__modal');
    if (!modal) return;
    modal.querySelector('#spz__canoe-compass__modal__body').innerHTML = '';
    modal.classList.remove('show');
    document.body.classList.remove('spz__canoe-compass__modal-open');
  }

  function setupModal() {
    const modal = document.querySelector('.spz__canoe-compass__modal');
    const wrapper = document.querySelector('.spz__canoe-compass__modal__wrapper');

    if (wrapper) {
      wrapper.addEventListener('click', function (event) {
        if (event.target === wrapper) {
          hideModal();
        }
      });
    }

    if (modal) {
      modal.addEventListener('click', function (event) {
        if (event.target === modal) {
          hideModal();
        }
      });
    }

    document.querySelectorAll('.spz_video_modal_trigger').forEach(function (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const content = trigger.getAttribute('data-content');
        if (!content) return;
        showModal(content);
      });
    });

    // document.querySelector('.spz_hero__video__placeholder-secondary-button-link').addEventListener('click', (e) => {
    //   e.stopPropagation();
    // });
  }

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

  function setupModalPopupOnLoad() {
    const params = new URLSearchParams(window.location.search);
    const resource = params.get('video_key');
    if (!resource) return;
    const content = document.querySelector(`[data-key="${resource}"]`);
    if (!content) return;
    showModal(content.getAttribute('data-content'));
  }

  function withAutoplay(content) {
    return content.replace(/src="([^"]+)"/, function (match, src) {
      if (src.indexOf('player.vimeo.com') === -1 || src.indexOf('autoplay=1') !== -1) return match;
      const joiner = src.indexOf('?') === -1 ? '?' : '&';
      return 'src="' + src + joiner + 'autoplay=1"';
    });
  }

  function startModalPlayback() {
    const iframe = document.querySelector('#spz__canoe-compass__modal__body iframe');
    if (!iframe) return;

    function play() {
      const player = new window.Vimeo.Player(iframe);
      player.ready().then(function () {
        return player.play();
      }).catch(function () {
        return player.setMuted(true).then(function () {
          return player.play();
        });
      }).catch(function () {});
    }

    if (window.Vimeo && window.Vimeo.Player) {
      play();
      return;
    }

    let tries = 0;
    const timer = setInterval(function () {
      tries += 1;
      if (window.Vimeo && window.Vimeo.Player) {
        clearInterval(timer);
        play();
      } else if (tries >= 25) {
        clearInterval(timer);
      }
    }, 100);
  }

  function openAutoplayModal(trigger) {
    if (!trigger) return;
    const content = trigger.getAttribute('data-content');
    if (!content) return;
    showModal(withAutoplay(content));
    startModalPlayback();
  }

  function autoPlayVideo() {
    const video_key = localStorage.getItem('spz_video_key');
    if (!video_key) return;

    let trigger = null;
    if (video_key === 'total_portfolio_vision') {
      trigger = document.querySelector('.video-main .spz_video_modal_trigger');
    } else if (video_key === 'product_vision') {
      trigger = document.querySelector('.spz_session_library__sidebar-body .spz_session_library__video:first-child .spz_video_modal_trigger');
    } else if (video_key === 'delta_spotlight') {
      trigger = document.querySelector('.spz_session_library__sidebar-body .spz_session_library__video:last-child .spz_video_modal_trigger');
    }

    openAutoplayModal(trigger);
  }

  // check if access to the page is allowed
  const isAllowed = localStorage.getItem('spz_microsite') === 'canoe_compass_ny_2026';
  if (!isAllowed) {
    window.location.href = 'https://canoeintelligence.com/canoe-compass-nyc-2026-home/';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setupMobileNav();
      setupModal();
      setupModalPopupOnLoad();
      autoPlayVideo();
    });
  } else {
    setupMobileNav();
    setupModal();
    setupModalPopupOnLoad();
    autoPlayVideo();
  }
})();
