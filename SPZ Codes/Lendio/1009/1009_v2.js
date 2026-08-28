function injectVariant() {
  if (document.body.classList.contains('spz_1009_v2')) return;
  document.body.classList.add('spz_1009_v2');

  const sliderData = [
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card1_2.png',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card1_3.png',
                  alt: 'Card 1',
                  shadow: false
              }
          ]
      },
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card2_3.png',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card2_2.png',
                  alt: 'Card 2',
                  shadow: false
              }
          ]
      },
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card3-top_2.webp',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card3-top_3.webp',
                  alt: 'Card 3 Top',
                  shadow: true
              },
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card3-bottom_1.webp',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card3-bottom.webp',
                  alt: 'Card 3 Bottom',
                  shadow: false
              }
          ]
      },
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card4.webp',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card4_1.webp',
                  alt: 'Card 4',
                  shadow: false
              }
          ]
      },
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card5_10.png',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card5_9.png',
                  alt: 'Card 5',
                  shadow: false
              }
          ]
      },
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card6_3.png',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card6_2.png',
                  alt: 'Card 6',
                  shadow: false
              }
          ]
      },
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card7-top.webp',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card7-top_1.webp',
                  alt: 'Card 7 Top',
                  shadow: false
              },
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card7-bottom_2.webp',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card7-bottom_3.webp',
                  alt: 'Card 7 Bottom',
                  shadow: true
              }
          ]
      },
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card8_4.png',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card8_5.png',
                  alt: 'Card 8',
                  shadow: false
              }
          ]
      },
      {
          images: [
              {
                  desktop: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card9_1.webp',
                  mobile: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/1009/card9.webp',
                  alt: 'Card 9',
                  shadow: false
              }
          ]
      }
  ];

  function removeOriginalSplide(root) {
      const originalSplide = root.querySelector('.home-splide');
      if (originalSplide) {
          originalSplide.remove();
      }
  }

  function injectSliderMarkup() {
      const mountPoint = document.querySelector('.spz_1009_v2 .home-hero-section .home-hero-slider');
      if (!mountPoint || mountPoint.querySelector('.spz__slider__container')) return;

      const splideHtml = `
          <div class="splide spz__slider__container">
              <div class="splide__track">
                  <div class="splide__list">
                      ${sliderData.map(item => `
                          <div class="splide__slide spz__slider__item">
                              ${item.images.map(image => `
                                  <picture class="${image.shadow ? 'spz__slider__item__shadow' : ''}">
                                      <source srcset="${image.desktop}" media="(min-width: 768px)">
                                      <source srcset="${image.mobile}" media="(max-width: 767.98px)">
                                      <img src="${image.desktop}" alt="${image.alt}">
                                  </picture>
                              `).join('')}
                          </div>
                      `).join('')}
                  </div>
              </div>
          </div>
      `;

      removeOriginalSplide(mountPoint);
      mountPoint.insertAdjacentHTML('beforeend', splideHtml);
  }

  function mountSplide() {
      const mountPoint = document.querySelector('.spz_1009_v2 .home-hero-section .home-hero-slider .spz__slider__container');
      if (!mountPoint || !window.Splide) return;

      window.spzHeroSplideInstance = new Splide('.spz_1009_v2 .home-hero-section .home-hero-slider .spz__slider__container', {
          type: 'loop',
          gap: '16px',
          autoWidth: true,
          arrows: false,
          pagination: false,
          focus: 'center',
          drag: false,
          speed: 5000,
          easing: 'linear',
          waitForTransition: true,
          autoplay: true,
          interval: 0,
          pauseOnHover: false,
          pauseOnFocus: false,
          breakpoints: {
              1024: {
                  speed: 6000,
              },
              767: {
                  speed: 7000,
                  gap: '11.08px',
              },
              575: {
                  speed: 8000,
              },
              479: {
                  speed: 9000,
              }
          },
      }).mount();
  }

  // Insert markup immediately so images preload; match Lendio's 1000ms mount delay
  injectSliderMarkup();

  const checkSlider = setInterval(() => {
      if (typeof Splide !== 'undefined') {
          clearInterval(checkSlider);
          mountSplide();
      }
  }, 300);
}

const bodyInjectInterval = setInterval(() => {
  if (document.body && document.body.children.length > 0) {
      clearInterval(bodyInjectInterval);
      injectVariant();
  }
}, 300);

console.log('1009.v2.js loaded');