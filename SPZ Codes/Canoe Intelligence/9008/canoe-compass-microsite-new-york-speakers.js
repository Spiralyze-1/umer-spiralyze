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

