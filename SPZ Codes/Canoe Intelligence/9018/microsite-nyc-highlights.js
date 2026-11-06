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

    document.querySelector('.spz_hero__video__placeholder-secondary-button-link').addEventListener('click', (e) => {
      e.stopPropagation();
    });
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
    });
  } else {
    setupMobileNav();
    setupModal();
    setupModalPopupOnLoad();
  }
})();
