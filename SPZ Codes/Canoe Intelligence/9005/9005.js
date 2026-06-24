const loadJS = (url, implementationCode, location) => {
  var scriptTag = document.createElement('script');
  scriptTag.src = url;
  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};
const gb_load_css = (path) => {
  let css = document.createElement('link');
  css.rel = 'stylesheet';
  css.media = 'all';
  css.href = path;

  document.getElementsByTagName('head')[0].appendChild(css);
}
gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");

loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {

  const slider = new Splide(".resources_slider", {
    type: "loop",
    rewind: true,
    start: 1,
    focus: "center",
    perPage: 3,
    perMove: 1,
    clones: 4,
    gap: "33.5px",
    breakpoints: {
      1023: {
        perPage: 1.98,
        perMove: 1,
      },
      767: {
        start: 0,
        perPage: 1.26,
        perMove: 1,
        gap: "22px",
      },
    },
    arrows: true,
    pagination: true,
  });


  slider.mount();

  var syncSliderParagraphClampTimer;
  var syncSliderParagraphClamp = function () {
    clearTimeout(syncSliderParagraphClampTimer);
    syncSliderParagraphClampTimer = setTimeout(function () {
      document.querySelectorAll('.slider_dataMain p').forEach(function (p) {
        p.style.removeProperty('height');
        p.style.removeProperty('max-height');
        p.style.removeProperty('-webkit-line-clamp');
        p.style.removeProperty('line-clamp');
        p.style.removeProperty('flex-grow');
      });
      requestAnimationFrame(function () {
        document.querySelectorAll('.slider_dataMain p').forEach(function (p) {
          var lineHeight = parseFloat(getComputedStyle(p).lineHeight) || 23.94;
          var boxHeight = p.clientHeight;
          if (boxHeight <= 0) return;
          var lines = Math.max(1, Math.floor(boxHeight / lineHeight));
          var maxHeight = Math.round(lines * lineHeight * 100) / 100;
          var nextClamp = String(lines);
          var nextMaxHeight = maxHeight + 'px';
          if (
            p.style.webkitLineClamp === nextClamp &&
            p.style.lineClamp === nextClamp &&
            p.style.maxHeight === nextMaxHeight
          ) {
            return;
          }
          p.style.setProperty('-webkit-line-clamp', nextClamp);
          p.style.setProperty('line-clamp', nextClamp);
          p.style.setProperty('max-height', nextMaxHeight);
        });
      });
    }, 50);
  };
  var sliderParagraphClampObserver = new ResizeObserver(syncSliderParagraphClamp);
  document.querySelectorAll('.slider_dataMain').forEach(function (main) {
    sliderParagraphClampObserver.observe(main);
  });
  requestAnimationFrame(syncSliderParagraphClamp);
  window.addEventListener('resize', syncSliderParagraphClamp);
  window.addEventListener('load', syncSliderParagraphClamp);
  slider.on('mounted moved', syncSliderParagraphClamp);

}, document.body);