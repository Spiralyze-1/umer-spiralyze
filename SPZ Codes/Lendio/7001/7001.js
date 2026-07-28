(function () {
  const bodyInterval7001 = setInterval(function () {
    if (document.body &&
      !document.querySelector('.spz_7001_v') &&
      (
        document.querySelector('.navmenu-right')
      )) {
      clearInterval(bodyInterval7001)
      document.querySelector('body').classList.add("spz_7001_v")

      const ctaSelectors = document.querySelectorAll(
        '.navmenu-right .nav-desktop-cta-wrap a, .nav-mobile-button-wrap .nav-mobile-cta-wrap a'
      );

      ctaSelectors.forEach((cta) => {
        if (cta.textContent !== "Check eligibility" && cta.textContent == "Apply now") {
          cta.textContent = "Check eligibility";
        }
        cta.classList.add("spz7001_v");

        const ctaTextObserver = new MutationObserver(() => {
          if (cta.textContent !== "Check eligibility" && cta.textContent == "Apply now") {
            cta.textContent = "Check eligibility";
          }
        });

        ctaTextObserver.observe(cta, {
          childList: true,
          characterData: true,
          subtree: true,
        });
      });
      
    }
  }, 100)
  setTimeout(function () {
    clearInterval(bodyInterval7001)
  }, 7000)
})();