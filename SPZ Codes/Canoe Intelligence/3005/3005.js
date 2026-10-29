// #3005 | Canoe Intelligence | Solutions | Product Highlights

// ============ CONFIG ============
const CDN = "https://res.cloudinary.com/spiralyze/image/upload";
const ctaUrl = "javascript:void(0)";
const heading = "Features";
const ctaLabel = "Get a Demo";

// Decorative arrows — used ONLY by the /solutions/ overview bento.
const arrows = {
  desktop: `${CDN}/f_auto/canoeintelligence/3005/arrows-desktop_webp.webp`,
  tablet: `${CDN}/f_svg/v1782927200/canoeintelligence/3005/arrows-tblt.svg`,
  mobile: `${CDN}/f_svg/v1782927242/canoeintelligence/3005/arrows-mobile.svg`
};

// Per-URL feature sets — each solution page shows its OWN unique cards.
const pages = {
  // Overview: 6-card bento (single screenshot + card colour + arrows).
  "/solutions/": {
    variant: "overview",
    cards: [
      {
        title: "Document Collection",
        alt: "DocumentCollection",
        theme: "navy",
        image: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-01_5.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-01_4.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-01_4.webp`
        },
        description: "Auto-retrieve investment docs from email inboxes & 850+ GP portals. Spend 75% less time on manual admin tasks."
      },
      {
        title: "Data Extraction",
        alt: "DataExtraction",
        theme: "teal",
        image: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-02_5.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-02_5.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-02_5.webp`
        },
        description: "Extract, normalize, and map key data points. Manage cap calls, fund metrics, distributions, etc, with enterprise-grade AI."
      },
      {
        title: "Downstream Reporting",
        alt: "DownstreamReporting",
        theme: "navy",
        image: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-03_4.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-03_4.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-03_4.webp`
        },
        description: "Deliver system-agnostic data to all your accounting & reporting tools. Addepar, Tamarac, Black Diamond, Orion, and more."
      },
      {
        title: "Dashboards and Alerts",
        alt: "DashboardsAndAlerts",
        theme: "teal",
        image: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-04_1.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-04_1.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-04_1.webp`
        },
        description: "Auto-categorize and track investment documents on one dashboard. Get alerts for late and missing docs."
      },
      {
        title: "Tax Documents",
        alt: "TaxDocuments",
        theme: "navy",
        image: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-05_1.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-05_1.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-05_1.webp`
        },
        description: "Automate tax document collection for state and federal K-1s, Schedule K-3s, Form 1099, Form 8621, and Form ADV."
      },
      {
        title: "Security and Compliance",
        alt: "SecurityandCompliance",
        theme: "teal",
        image: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-06_1.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-06_1.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-06_1.webp`
        },
        description: "Get secure data encryption, role-based access controls, multi-factor authentication, etc. Full audit trails. SOC 2 Type II compliant."
      }
    ]
  },
  // Canoe Connect: 3 responsive full-card images (desktop portrait / tablet landscape / mobile portrait).
  "/solutions/canoe-connect/": {
    variant: "product",
    cards: [
      {
        title: "Portal Connect",
        alt: "PortalConnect",
        theme: "navy",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-01_4.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-01_2.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-01_1.webp`
        },
        description: "Auto-connect and log in to email inboxes, 500+ GP portals, secure document stores, and more. Includes open API."
      },
      {
        title: "Document Collection",
        alt: "DocumentCollection",
        theme: "teal",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-02_2.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-02_2.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-02_2.webp`
        },
        description: "Auto-retrieve investment docs, like capital calls and distribution notices. Spend 75% less time on manual admin tasks."
      },
      {
        title: "Tracking and Alerts",
        alt: "TrackingAndAlerts",
        theme: "navy",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-03_1.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-03_2.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-03_1.webp`
        },
        description: "Track which documents are collected and which are still outstanding. Get alerts for missing or delayed docs."
      }
    ]
  },
  // Canoe Intelligence: 3 responsive full-card images.
  "/solutions/canoe-intelligence/": {
    variant: "product",
    cards: [
      {
        title: "Data Extraction",
        alt: "DataExtraction",
        theme: "teal",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-01_3.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-01_3.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-01_3.webp`
        },
        description: "Auto-pull key values from investment docs. Fund details, investor account data, valuations, tax data, and more."
      },
      {
        title: "Downstream Reporting",
        alt: "DownstreamReporting",
        theme: "navy",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-02_1.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-02_1.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-02_1.webp`
        },
        description: "Deliver system-agnostic data to all your accounting & reporting tools. Addepar, Tamarac, Black Diamond, Orion, and more."
      },
      {
        title: "Validation",
        alt: "Validation",
        theme: "navy",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-03_3.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-03_3.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-03_3.webp`
        },
        description: "Automatically validate extracted data. Flag exceptions like missing data, value mismatches, and duplicates."
      }
    ]
  },
  // Canoe Asset Data: 3 responsive full-card images.
  "/solutions/canoe-asset-data/": {
    variant: "product",
    cards: [
      {
        title: "Asset-Level Data",
        alt: "Asset-LevelData",
        theme: "navy",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-01_2.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-01_1.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-01_2.webp`
        },
        description: "Auto-extract fund- and company-level data from investment docs. Holdings summaries, operating metrics, etc. Track performance."
      },
      {
        title: "Exposure Analysis",
        alt: "ExposureAnalysis",
        theme: "teal",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-02_4.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-02_4.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-02_4.webp`
        },
        description: "See exactly where portfolios are exposed. Track across sectors, regions, funds, and companies. Allocate better and reduce risk."
      },
      {
        title: "Downstream Reporting",
        alt: "DownstreamReporting",
        theme: "navy",
        images: {
          desktop: `${CDN}/f_auto/canoeintelligence/3005/bg-desktop-03_2.webp`,
          tablet: `${CDN}/f_auto/canoeintelligence/3005/bg-tablet-03_1.webp`,
          mobile: `${CDN}/f_auto/canoeintelligence/3005/bg-mobile-03_2.webp`
        },
        description: "Deliver system-agnostic data to all your accounting & reporting tools. Addepar, Tamarac, Black Diamond, Orion, and more."
      }
    ]
  }
};

// ============ HTML ============
// One overview bento card (/solutions/): static screenshot + overlaid copy.
function overviewCard(card) {
  return `
        <article class="feature-card ${card.theme}">
            <picture class="feature-media" aria-hidden="true">
                <source media="(max-width: 767.98px)" srcset="${card.image.mobile}">
                <source media="(max-width: 1023.98px)" srcset="${card.image.tablet}">
                <img src="${card.image.desktop}" alt="${card.alt}" loading="lazy">
            </picture>
            <div class="feature-copy">
                <h3 class="feature-title">${card.title}</h3>
                <p class="feature-text">${card.description}</p>
            </div>
        </article>`;
}

// One product-highlight card: responsive full-card background + overlaid copy.
function productCard(card) {
  return `
        <article class="product-card ${card.theme}">
            <picture class="product-media">
                <source media="(max-width: 767.98px)" srcset="${card.images.mobile}">
                <source media="(max-width: 1023.98px)" srcset="${card.images.tablet}">
                <img class="product-image" src="${card.images.desktop}" alt="${card.alt}" loading="lazy">
            </picture>
            <div class="product-copy">
                <h3 class="product-title">${card.title}</h3>
                <p class="product-text">${card.description}</p>
            </div>
        </article>`;
}

// /solutions/ overview section: decorative arrows + heading + 6-card grid + CTA.
function overviewSection(cards) {
  return `
        <section class="spz-features">
            <picture class="feature-arrows" aria-hidden="true">
                <source media="(max-width: 767.98px)" srcset="${arrows.mobile}">
                <source media="(max-width: 1023.98px)" srcset="${arrows.tablet}">
                <img src="${arrows.desktop}" alt="">
            </picture>
            <div class="feature-inner">
                <h2 class="feature-heading">${heading}</h2>
                <div class="feature-grid">
                    ${cards.map(overviewCard).join("")}
                </div>
                <a class="feature-cta spz3005_v form-modal-cta" href="${ctaUrl}">${ctaLabel}</a>
            </div>
        </section>`;
}

// Product-page section: heading + 3 responsive cards + CTA (no arrows).
function productSection(cards) {
  return `
        <section class="spz-product">
            <div class="product-inner">
                <h2 class="product-heading">${heading}</h2>
                <div class="product-list">
                    ${cards.map(productCard).join("")}
                </div>
                <a class="product-cta spz3005_v form-modal-cta" href="${ctaUrl}">${ctaLabel}</a>
            </div>
        </section>`;
}

// ============ HELPERS ============
// Resolves once the selector exists (polling) or rejects after the timeout.
function waitForElement(selector, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(interval);
        resolve(el);
      }
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      reject();
    }, timeout);
  });
}

function injectTrueControl() {
  function spz3002() {
    if (!document.querySelector("body").classList.contains("spz_3002_v")) {
      document.querySelector("body").classList.add("spz_3002_v");

      let heroHtml = "";
      var contentMain = document.querySelector(".content-main");
      if (contentMain) {
        if (window.location.pathname === "/solutions/") {
          heroHtml = solutionsHero();
          document.body.classList.add("spz-solutions");
        } else if (window.location.pathname === "/solutions/canoe-intelligence/") {
          heroHtml = solutionsIntelligenceHero();
        } else if (window.location.pathname === "/solutions/canoe-connect/") {
          heroHtml = solutionsConnectHero();
        } else if (window.location.pathname === "/solutions/canoe-asset-data/") {
          heroHtml = solutionsAssetHero();
        }

        var tImg1 = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/image_3.webp";
        var tImg2 = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/image_4.webp";
        var tImg3 = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/image_5.webp";

        var testimonialsHtml =
          '<section class="spz3002-testimonials" aria-labelledby="spz3002-testimonials-title">' +
          '<div class="container">' +
          '<div class="spz3002-testimonials__inner">' +
          '<h2 id="spz3002-testimonials-title" class="spz3002-testimonials__title">Join 500+ investors &amp; advisors streamlining alts management.</h2>' +
          '<div class="spz3002-testimonials__splide" id="spz3002-t-splide" aria-label="Testimonials">' +
          '<div class="spz3002-testimonials__slide" role="group" aria-label="1 of 3">' +
          '<article class="spz3002-testimonials__card">' +
          '<div class="spz3002-testimonials__block">' +
          '<div class="spz3002-testimonials__stat">' +
          '<p class="spz3002-testimonials__num">75%</p>' +
          '<div class="spz3002-testimonials__label spz3002-testimonials__label--lines">' +
          "<p>less time spent</p><p>on manual admin</p></div></div>" +
          '<p class="spz3002-testimonials__quote">By automating our alternative investment reporting process, we are able to scale our firm, execute on data projects with more confidence.</p>' +
          "</div>" +
          '<div class="spz3002-testimonials__author">' +
          '<img class="spz3002-testimonials__avatar" src="' +
          tImg1 +
          '" alt="' +
          "Eric Stephenson" +
          '" width="36" height="36" loading="lazy" decoding="async" />' +
          '<div class="spz3002-testimonials__byline">' +
          '<p class="spz3002-testimonials__name">Eric Stephenson</p>' +
          '<p class="spz3002-testimonials__role">Director of Client Service &amp; Ops<span class="desk"> |</span><span class="tab">,</span> Align Impact</p>' +
          "</div></div></article></div>" +
          '<div class="spz3002-testimonials__slide" role="group" aria-label="2 of 3">' +
          '<article class="spz3002-testimonials__card">' +
          '<div class="spz3002-testimonials__block">' +
          '<div class="spz3002-testimonials__stat">' +
          '<p class="spz3002-testimonials__num">90%</p>' +
          '<div class="spz3002-testimonials__label spz3002-testimonials__label--lines">' +
          "<p>of data processes</p><p>automated</p></div></div>" +
          '<p class="spz3002-testimonials__quote">We anticipate eliminating reporting errors, improving our time to analytics, and enabling us to service a greater number of clients.</p>' +
          "</div>" +
          '<div class="spz3002-testimonials__author">' +
          '<img class="spz3002-testimonials__avatar" src="' +
          tImg2 +
          '" alt="' +
          "Andrew Doman" +
          '" width="36" height="36" loading="lazy" decoding="async" />' +
          '<div class="spz3002-testimonials__byline">' +
          '<p class="spz3002-testimonials__name">Andrew Doman</p>' +
          '<p class="spz3002-testimonials__role">Chief Operating Officer<span class="desk"> |</span><span class="tab">,</span> Prime Quadrant</p>' +
          "</div></div></article></div>" +
          '<div class="spz3002-testimonials__slide" role="group" aria-label="3 of 3">' +
          '<article class="spz3002-testimonials__card">' +
          '<div class="spz3002-testimonials__block">' +
          '<div class="spz3002-testimonials__stat">' +
          '<p class="spz3002-testimonials__num">50%</p>' +
          '<div class="spz3002-testimonials__label spz3002-testimonials__label--lines">' +
          "<p>faster document</p><p>collection</p></div></div>" +
          '<p class="spz3002-testimonials__quote">We&rsquo;ve dramatically reduced operational inefficiencies and empowered our team with more time to support our Partner Advisors.</p>' +
          "</div>" +
          '<div class="spz3002-testimonials__author">' +
          '<img class="spz3002-testimonials__avatar" src="' +
          tImg3 +
          '" alt="' +
          "Matt Woodward" +
          '" width="36" height="36" loading="lazy" decoding="async" />' +
          '<div class="spz3002-testimonials__byline">' +
          '<p class="spz3002-testimonials__name">Matt Woodward</p>' +
          '<p class="spz3002-testimonials__role">Head of Advisory Services<span class="desk"> |</span><span class="tab">,</span> AdvicePeriod</p>' +
          "</div></div></article></div></div></div></div></section>";

        contentMain.insertAdjacentHTML("afterbegin", heroHtml + testimonialsHtml);

        document.addEventListener("click", function (e) {
          if (e.target.closest(".demo-cta-fill")) {
            document.querySelector("#row1 .btn-fill")?.click();
            window.setTimeout(updateSelectState, 500);
          } else if (e.target.closest(".demo-cta-border")) {
            document.querySelector("#row1 .btn-aurora")?.click();
          }
        });
      }
    }
  }

  spz3002();

  function solutionsHero() {
    var heroImageUrlDesktop = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero1-graphic_2.webp";
    var heroImageUrlTablet = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero1-graphic-tablet_3.webp";
    var heroImageUrlMobile = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero1-graphic-mobile_2.webp";
    var checkSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none"><path d="M1 6.55556L5.61538 11L16 1" stroke="#293054" stroke-width="2" stroke-linecap="round"></path></svg>';

    let heroHtml =
      '<section class="spz3002-hero solution-main" aria-label="Canoe Intelligence">' +
      '<div class="container">' +
      '<div class="spz3002-hero__inner">' +
      '<div class="spz3002-hero__copy">' +
      '<p class="spz3002-hero__eyebrow">Canoe Intelligence</p>' +
      '<h1 class="spz3002-hero__title">Spend 75% less time on alts administration</h1>' +
      '<ul class="spz3002-hero__list">' +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Document management.</strong><span class="spz3002-hero__muted"> Investment and tax docs pulled directly from email inboxes and 3,000+ GP portals, categorized and tracked in one place. No manual retrieval.</span></p>' +
      "</li>" +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Data extraction. </strong><span class="spz3002-hero__muted">Instantly extract and normalize key data points. Manage cap calls, distributions, fund metrics, and more with AI trained on 200M+ alts data points.</span></p>' +
      "</li>" +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Insights and reporting. </strong><span class="spz3002-hero__muted">Drill into each investment. Get exposure and risk analysis with 99%+ accuracy. Make faster, more confident allocation decisions.</span></p>' +
      "</li>" +
      "</ul>" +
      '<div class="spz3002-hero__cta-wrap">' +
      '<a href="javascript:void(0)" class="spz3002-hero__cta demo-cta-fill spz3002_v">Get a demo</a>' +
      "</div>" +
      "</div>" +
      '<div class="spz3002-hero__media">' +
      "<picture>" +
      '<source srcset="' +
      heroImageUrlMobile +
      '" media="(max-width: 767px)">' +
      '<source srcset="' +
      heroImageUrlTablet +
      '" media="(max-width: 1023px)">' +
      '<img src="' +
      heroImageUrlDesktop +
      '" alt="Canoe product interface: data mapping, Connect summary dashboard, and fund tracking" width="668" height="600" loading="eager" decoding="async" />' +
      "</picture>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>";
    return heroHtml;
  }
  function solutionsIntelligenceHero() {
    var heroImageUrlDesktop = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero2-graphic_2.webp";
    var heroImageUrlTablet = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero2-graphic-tablet_3.webp";
    var heroImageUrlMobile = "https://res.cloudinary.com/spiralyze/image/upload/v1778024732/canoeintelligence/3002/hero2-graphic-mobile3.png";
    var checkSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none"><path d="M1 6.55556L5.61538 11L16 1" stroke="#293054" stroke-width="2" stroke-linecap="round"></path></svg>';

    let heroHtml =
      '<section class="spz3002-hero canoe-intelligence" aria-label="Canoe Intelligence">' +
      '<div class="container">' +
      '<div class="spz3002-hero__inner">' +
      '<div class="spz3002-hero__copy">' +
      '<p class="spz3002-hero__eyebrow">Canoe Intelligence</p>' +
      '<h1 class="spz3002-hero__title">99%+ accuracy. <br/>Every field. Every fund.</h1>' +
      '<ul class="spz3002-hero__list">' +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Data extraction, automated. </strong><span class="spz3002-hero__muted"> Canoe extracts and normalizes 2,500+ data fields across 100+ document types, powered by AI built exclusively on alts data. Cap calls, distributions, financials, and more.</span></p>' +
      "</li>" +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Validation built in. </strong><span class="spz3002-hero__muted"> Automated data rules catch outliers before they reach your systems. Where human review is needed, Canoe flags it. Errors do not make it downstream.</span></p>' +
      "</li>" +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Delivered to your systems. </strong><span class="spz3002-hero__muted"> Structured data flows directly into your reporting, accounting, and analytics platforms via API. No reformatting. No manual uploads. No gaps.</span></p>' +
      "</li>" +
      "</ul>" +
      '<div class="spz3002-hero__cta-wrap">' +
      '<a href="javascript:void(0)" class="spz3002-hero__cta demo-cta-fill spz3002_v">Get a demo</a>' +
      '<a href="javascript:void(0)" class="spz3002-hero__cta demo-cta-border spz3002_v">Download Brochure</a>' +
      "</div>" +
      "</div>" +
      '<div class="spz3002-hero__media">' +
      "<picture>" +
      '<source srcset="' +
      heroImageUrlMobile +
      '" media="(max-width: 767px)">' +
      '<source srcset="' +
      heroImageUrlTablet +
      '" media="(max-width: 1023px)">' +
      '<img src="' +
      heroImageUrlDesktop +
      '" alt="Canoe product interface: data mapping, Connect summary dashboard, and fund tracking" width="668" height="600" loading="eager" decoding="async" />' +
      "</picture>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>";
    return heroHtml;
  }
  function solutionsConnectHero() {
    var heroImageUrlDesktop = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero3-graphic_1.webp";
    var heroImageUrlTablet = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero3-graphic-tablet_1.webp";
    var heroImageUrlMobile = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero3-graphic-mobile_3.webp";
    var checkSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none"><path d="M1 6.55556L5.61538 11L16 1" stroke="#293054" stroke-width="2" stroke-linecap="round"></path></svg>';

    let heroHtml =
      '<section class="spz3002-hero canoe-connect" aria-label="Canoe Connect">' +
      '<div class="container">' +
      '<div class="spz3002-hero__inner">' +
      '<div class="spz3002-hero__copy">' +
      '<p class="spz3002-hero__eyebrow">Canoe connect</p>' +
      '<h1 class="spz3002-hero__title">Your documents, collected. Zero effort required.</h1>' +
      '<ul class="spz3002-hero__list">' +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Portal access, handled. </strong><span class="spz3002-hero__muted"> Canoe connects directly to 3,000+ GP portals and email inboxes on your behalf, retrieving documents automatically as they become available. No logins. No password resets.</span></p>' +
      "</li>" +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Nothing falls through the cracks. </strong><span class="spz3002-hero__muted"> Real-time dashboards show expected versus received documents across your entire portfolio. Get proactive alerts when something is late or missing, before it becomes a problem.</span></p>' +
      "</li>" +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      "<p class='spz3002-hero__item-text'><strong>Scales without adding headcount. </strong><span class='spz3002-hero__muted'> Whether you manage 50 funds or 500, your team's document workload stays the same. Add commitments confidently, knowing the process can handle the growth.</span></p>" +
      "</li>" +
      "</ul>" +
      '<div class="spz3002-hero__cta-wrap">' +
      '<a href="javascript:void(0)" class="spz3002-hero__cta demo-cta-fill spz3002_v">Get a demo</a>' +
      '<a href="javascript:void(0)" class="spz3002-hero__cta demo-cta-border spz3002_v">Download Brochure</a>' +
      "</div>" +
      "</div>" +
      '<div class="spz3002-hero__media">' +
      "<picture>" +
      '<source srcset="' +
      heroImageUrlMobile +
      '" media="(max-width: 767px)">' +
      '<source srcset="' +
      heroImageUrlTablet +
      '" media="(max-width: 1023px)">' +
      '<img src="' +
      heroImageUrlDesktop +
      '" alt="Canoe product interface: data mapping, Connect summary dashboard, and fund tracking" width="668" height="600" loading="eager" decoding="async" />' +
      "</picture>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>";
    return heroHtml;
  }
  function solutionsAssetHero() {
    var heroImageUrlDesktop = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero4-graphic_3.webp";
    var heroImageUrlTablet = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero4-graphic-tablet_2.webp";
    var heroImageUrlMobile = "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/3002/hero4-graphic-mobile_4.webp";
    var checkSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none"><path d="M1 6.55556L5.61538 11L16 1" stroke="#293054" stroke-width="2" stroke-linecap="round"></path></svg>';

    let heroHtml =
      '<section class="spz3002-hero canoe-asset" aria-label="Canoe Asset">' +
      '<div class="container">' +
      '<div class="spz3002-hero__inner">' +
      '<div class="spz3002-hero__copy">' +
      '<p class="spz3002-hero__eyebrow">Canoe Asset Data</p>' +
      "<h1 class='spz3002-hero__title'>See exactly what's inside every fund you own.</h1>" +
      '<ul class="spz3002-hero__list">' +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Holdings extracted from your actual documents. </strong><span class="spz3002-hero__muted"> Canoe pulls asset-level data directly from your GP reports, including ownership percentages, operating metrics, and investor-specific transactions. Your data, not third-party estimates.</span></p>' +
      "</li>" +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      '<p class="spz3002-hero__item-text"><strong>Full portfolio visibility, finally. </strong><span class="spz3002-hero__muted"> View every underlying holding across all your private funds in one structured, centralized place. Identify cross-fund concentrations and exposure risks before your next board meeting.</span></p>' +
      "</li>" +
      '<li class="spz3002-hero__item">' +
      '<span class="spz3002-hero__check">' +
      checkSvg +
      "</span>" +
      "<p class='spz3002-hero__item-text'><strong>Analysis-ready, every day. </strong><span class='spz3002-hero__muted'>Clean, enriched data delivered via API or flat file to your reporting and analytics systems. No manual prep, no reformatting required.</span></p>" +
      "</li>" +
      "</ul>" +
      '<div class="spz3002-hero__cta-wrap">' +
      '<a href="javascript:void(0)" class="spz3002-hero__cta demo-cta-fill spz3002_v">Get a demo</a>' +
      '<a href="javascript:void(0)" class="spz3002-hero__cta demo-cta-border spz3002_v">Download Brochure</a>' +
      "</div>" +
      "</div>" +
      '<div class="spz3002-hero__media">' +
      "<picture>" +
      '<source srcset="' +
      heroImageUrlMobile +
      '" media="(max-width: 767px)">' +
      '<source srcset="' +
      heroImageUrlTablet +
      '" media="(max-width: 1023px)">' +
      '<img src="' +
      heroImageUrlDesktop +
      '" alt="Canoe product interface: data mapping, Connect summary dashboard, and fund tracking" width="668" height="600" loading="eager" decoding="async" />' +
      "</picture>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>";
    return heroHtml;
  }

  var SPZ3002_POPUP_TRACKED_SELECT_FIELDS = {
    field_6_5: 1,
    field_15_5: 1,
    field_4_5: 1,
    field_15_25: 1,
    field_4_24: 1,
    field_6_22: 1
  };

  function spz3002SelectHasValueWrapper(selectEl) {
    return (selectEl && selectEl.closest && selectEl.closest(".gfield--input-type-select")) || (selectEl && selectEl.closest && selectEl.closest(".gfield"));
  }

  /** Sync select .has-value (GF AJAX replaces nodes; delegated change + periodic sync survives re-render.) */
  function spz3002SyncSelectHasValueClass(selectEl) {
    if (!selectEl || selectEl.tagName !== "SELECT" || !document.body.classList.contains("spz_3002_v")) return false;
    if (!selectEl.closest("#sgpb-popup-dialog-main-div")) return false;
    var gfield = selectEl.closest(".gfield");
    if (!gfield || !gfield.id || !SPZ3002_POPUP_TRACKED_SELECT_FIELDS[gfield.id]) return false;
    var wrapper = spz3002SelectHasValueWrapper(selectEl);
    if (!wrapper) return true;
    if (selectEl.value && String(selectEl.value).length > 0) {
      wrapper.classList.add("has-value");
    } else {
      wrapper.classList.remove("has-value");
    }
    return true;
  }

  function handleSelectHasValueClass() {
    var modal = document.querySelector("#sgpb-popup-dialog-main-div");
    if (!modal || !document.body.classList.contains("spz_3002_v")) return;
    modal.querySelectorAll(".gfield select").forEach(function (sel) {
      spz3002SyncSelectHasValueClass(sel);
    });
  }
  function handleErrorState() {
    const selectors = [
      '#sgpb-popup-dialog-main-div .sgpb-main-html-content-wrapper form .ginput_container input[aria-describedby*="validation_message"]',
      '#sgpb-popup-dialog-main-div .sgpb-main-html-content-wrapper form #field_6_5 select[aria-describedby*="validation_message"]',
      '#sgpb-popup-dialog-main-div .sgpb-main-html-content-wrapper form #field_15_5 select[aria-describedby*="validation_message"]'
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((ele) => {
        const gfield = ele.closest(".gfield");
        if (gfield) {
          gfield.classList.add("spz_custom_error");
        }
      });
    });
  }

  var SPZ3002_POPUP_FILLED_INPUT_SELECTOR = '.spz_3002_v .ginput_container input[type="text"], .spz_3002_v .ginput_container input[type="email"], .spz_3002_v .ginput_container input[type="tel"]';

  function spz3002PopupFilledInputMatches(el) {
    return !!(el && el.matches && el.matches(SPZ3002_POPUP_FILLED_INPUT_SELECTOR));
  }

  function updateSpz3002PopupFilledState() {
    document.querySelectorAll(SPZ3002_POPUP_FILLED_INPUT_SELECTOR).forEach(function (input) {
      const gfield = input.closest(".gfield");
      if (gfield) {
        if (input.value.trim() !== "") {
          gfield.classList.add("spz_input_filled");
        } else {
          gfield.classList.remove("spz_input_filled");
        }
      }
    });
  }

  /** Brochure / demo controls in SG popup (CSS floated labels expect `.active` / `.focused` on `.gfield`). */
  function spz3002BrochureModalControlMatches(el) {
    if (!el || !el.closest || !document.body.classList.contains("spz_3002_v")) return false;
    if (!el.closest("#sgpb-popup-dialog-main-div")) return false;
    var g = el.closest(".gfield.gfield_visibility_visible");
    if (!g) return false;
    var t = el.tagName;
    if (t === "TEXTAREA" || t === "SELECT") return true;
    if (t !== "INPUT") return false;
    var ty = (el.type || "text").toLowerCase();
    return ty === "text" || ty === "email" || ty === "tel" || ty === "number" || ty === "";
  }

  /** Same behaviour as demo `labelChange` in 3002.js */
  function spz3002BrochureGfieldLabelState(controlEl) {
    if (!spz3002BrochureModalControlMatches(controlEl)) return;
    var field = controlEl.closest(".gfield");
    if (!field) return;

    field.classList.remove("spz_input_focus");

    var has = controlEl.tagName === "SELECT" ? !!(controlEl.value && String(controlEl.value).trim() !== "") : !!(controlEl.value && String(controlEl.value).trim() !== "");

    if (!has) {
      field.classList.remove("active", "focused");
    } else {
      field.classList.add("active");
      field.classList.remove("focused");
    }

    if (controlEl.tagName === "INPUT" || controlEl.tagName === "TEXTAREA") {
      if (has) field.classList.add("spz_input_filled");
      else field.classList.remove("spz_input_filled");
    }
  }

  function spz3002SyncBrochureFloatingLabels(modalRoot) {
    var modal = modalRoot || document.querySelector("#sgpb-popup-dialog-main-div");
    if (!modal) return;
    modal.querySelectorAll(".gfield.gfield_visibility_visible input, .gfield.gfield_visibility_visible select, .gfield.gfield_visibility_visible textarea").forEach(function (el) {
      spz3002BrochureGfieldLabelState(el);
    });
  }

  function spz3002BrochurePopupShell() {
    if (!document.body.classList.contains("spz_3002_v")) return null;
    var popupDivs = document.querySelectorAll(".spz_3002_v #sgpb-popup-dialog-main-div-wrapper > div");
    var brochureMark =
      ".sgpb-popup-builder-content-6998, #sg-popup-content-wrapper-6998, " + "#sg-popup-content-wrapper-6959, #sg-popup-content-wrapper-7500, " + "form#gform_6, form#gform_4, form#gform_15";
    var i;
    for (i = popupDivs.length - 1; i >= 0; i--) {
      if (popupDivs[i].querySelector(brochureMark)) return popupDivs[i];
    }
    if (popupDivs.length > 1) return popupDivs[1];
    if (popupDivs.length === 1) return popupDivs[0];
    return null;
  }

  /** After demo (6993) opens first, brochure markup often lives in the 2nd wrapper div — not the first #sgpb-popup-dialog-main-div. */
  function spz3002BrochurePopupRoot() {
    var shell = spz3002BrochurePopupShell();
    if (shell) return shell.querySelector("#sgpb-popup-dialog-main-div") || shell;
    return document.querySelector("#sgpb-popup-dialog-main-div");
  }

  function spz3002IsVisibleEl(el) {
    if (!el || !el.getBoundingClientRect) return false;
    var rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return false;
    var cs = window.getComputedStyle(el);
    return cs.display !== "none" && cs.visibility !== "hidden" && parseFloat(cs.opacity || "1") > 0;
  }

  /** Reordering `.gfield` nodes while selects are open destroys native & enhanced dropdowns — skip until safe. */
  function spz3002PopupShouldDeferFieldReorder(modal) {
    modal = spz3002BrochurePopupRoot() || modal || document.querySelector("#sgpb-popup-dialog-main-div");
    if (!modal) return false;

    var ae = document.activeElement;
    if (ae && modal.contains(ae) && ae.matches("select")) return true;

    var openInScope = modal.querySelectorAll('.chosen-with-drop, .chosen-container-active, .select2-container--open, .choices.is-open, [aria-expanded="true"][role="combobox"]');
    for (var i = 0; i < openInScope.length; i++) {
      if (spz3002IsVisibleEl(openInScope[i])) return true;
    }

    return false;
  }

  function spz3002PopupIs6998Brochure(modal) {
    modal = modal || spz3002BrochurePopupRoot();
    if (!modal) return false;
    return !!modal.querySelector(".sgpb-popup-builder-content-6998, #sg-popup-content-wrapper-6998");
  }

  function spz3002GformFieldIndex(form, fieldEl) {
    if (!form || !fieldEl) return -1;
    var container = form.querySelector(".gform_fields") || form;
    var nodes = container.querySelectorAll(":scope > .gfield");
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] === fieldEl) return i;
    }
    return -1;
  }

  /** True when popup 6998 / gform_6 still needs reorder (fields missing or wrong DOM order). */
  function spz3002Gform6FieldOrderPending(modal) {
    modal = modal || spz3002BrochurePopupRoot();
    if (!modal || !spz3002PopupIs6998Brochure(modal)) return false;
    var form = modal.querySelector("form#gform_6");
    if (!form) return false;

    var email = form.querySelector(".gfield--type-email");
    var lastName = form.querySelector("#field_6_16");
    var companyType = form.querySelector("#field_6_5");
    var job = form.querySelector("#field_6_22");
    if (!email || !lastName || !companyType || !job) return true;

    var lastIdx = spz3002GformFieldIndex(form, lastName);
    var emailIdx = spz3002GformFieldIndex(form, email);
    var coIdx = spz3002GformFieldIndex(form, companyType);
    var jobIdx = spz3002GformFieldIndex(form, job);
    if (lastIdx < 0 || emailIdx < 0 || coIdx < 0 || jobIdx < 0) return true;

    return !(emailIdx > lastIdx && jobIdx > coIdx);
  }

  /** Apply field reorder when no control/dropdown is active; retry so GF AJAX + timers do not clash with the user. */
  function spz3002MaybeApplyFieldReorder(modal, attempt) {
    modal = spz3002BrochurePopupRoot() || modal;
    if (!modal) return;
    if (!modal.querySelector("form#gform_6, form#gform_4, form#gform_15")) return;
    var n = attempt != null ? attempt : 0;
    var MAX_ATTEMPTS = 80;
    if (spz3002PopupShouldDeferFieldReorder(modal)) {
      if (n < MAX_ATTEMPTS)
        window.setTimeout(function () {
          spz3002MaybeApplyFieldReorder(modal, n + 1);
        }, 150);
      return;
    }
    brochureApplyFieldOrderInPopup(modal);
    handleSelectHasValueClass();
    spz3002SyncBrochureFloatingLabels(modal);

    if (spz3002Gform6FieldOrderPending(modal) && n < MAX_ATTEMPTS) {
      window.setTimeout(function () {
        spz3002MaybeApplyFieldReorder(modal, n + 1);
      }, 150);
    }
  }

  function ensureBrochurePopupChrome() {
    var targetDiv = spz3002BrochurePopupShell();
    if (!targetDiv) return;
    const gformTitle = targetDiv.querySelector(".gform_title");
    if (gformTitle) gformTitle.innerHTML = "Download the Canoe Brochure";
    if (!targetDiv.querySelector(".spz_close_icon")) {
      targetDiv.insertAdjacentHTML(
        "afterbegin",
        '<div class="spz_close_icon">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">' +
          '<path d="M15.8337 4.16675L4.16699 15.8334M15.8337 15.8334L4.16699 4.16675" ' +
          'stroke="#293054" stroke-opacity="0.5" stroke-width="1.5" ' +
          'stroke-linecap="round" stroke-linejoin="round"></path>' +
          "</svg>" +
          "</div>"
      );
    }
  }

  /** SG popup gravity root (variant scoped). */
  function spz3002PopupGravityModalRoot() {
    if (!document.body.classList.contains("spz_3002_v")) return null;
    return document.querySelector("#sgpb-popup-dialog-main-div");
  }

  /**
   * Gravity form inside the popup. After AJAX, `.sgpb-main-html-content-wrapper` may be absent;
   * fallback to any `form[id^="gform_"]` under the modal.
   */
  function spz3002GravityFormInPopup(modalRoot) {
    if (!modalRoot) return null;
    return (
      modalRoot.querySelector('.sgpb-main-html-content-wrapper form[id^="gform_"]') || modalRoot.querySelector(".sgpb-main-html-content-wrapper form") || modalRoot.querySelector('form[id^="gform_"]')
    );
  }

  function spz3002GravityFormByNumInPopup(modalRoot, num) {
    if (!modalRoot) return null;
    var id = typeof num === "string" ? num : String(num);
    return modalRoot.querySelector("form#gform_" + id);
  }

  function brochureReorderBrochureEmailColumns(modalRoot) {
    if (!modalRoot) return;
    [
      { id: "6", companySel: "#field_6_16" },
      { id: "4", companySel: "#field_4_16" },
      { id: "15", companySel: "#field_15_16" }
    ].forEach(function (cfg) {
      var fel = spz3002GravityFormByNumInPopup(modalRoot, cfg.id);
      if (!fel) return;
      var email = fel.querySelector(".gfield--type-email");
      var companyField = fel.querySelector(cfg.companySel + ".gfield--type-text") || fel.querySelector(cfg.companySel);
      if (!email || !companyField) return;
      companyField.after(email);
      var validationMessage = email.querySelector(".validation_message");
      if (validationMessage) {
        validationMessage.innerHTML = validationMessage.innerHTML.replace("The email address entered is invalid, please check the formatting (e.g. email@domain.com).", "Invalid email format.");
      }
    });
  }

  /** Legacy wrapper-based reorder when popup builder fragment IDs survive (safe to run with direct form reorder). */
  function brochureReorderBrochureEmailColumnsLegacy(modalRoot) {
    if (!modalRoot) return;
    [
      [".sgpb-popup-builder-content-6998, #sg-popup-content-wrapper-6998", "#gform_6", "#field_6_16"],
      ["#sg-popup-content-wrapper-6959", "#gform_4", "#field_4_16"],
      ["#sg-popup-content-wrapper-7500", "#gform_15", "#field_15_16"]
    ].forEach(function (parts) {
      var wrapper = parts[0];
      var formSel = parts[1];
      var companySel = parts[2];
      if (!modalRoot.querySelector(wrapper)) return;
      var fel = modalRoot.querySelector(formSel);
      if (!fel) return;
      var email = fel.querySelector(".gfield--type-email");
      var companyField = fel.querySelector(companySel + ".gfield--type-text") || fel.querySelector(companySel);
      if (!email || !companyField) return;
      companyField.after(email);
      var validationMessage = email.querySelector(".validation_message");
      if (validationMessage) {
        validationMessage.innerHTML = validationMessage.innerHTML.replace("The email address entered is invalid, please check the formatting (e.g. email@domain.com).", "Invalid email format.");
      }
    });
  }

  /**
   * FIELD ORDER ONLY — GF often finishes markup after gform_post_render; debugger delays hide that race.
   * Rerun cheaply whenever the popup subtree changes (debounced).
   */
  function spz3002ReorderEmailAfterLastName(form, lastNameSel) {
    if (!form) return;
    var emailField = form.querySelector(".gfield--type-email") || form.querySelector('[id$="_2"]');
    var lastNameField = form.querySelector(lastNameSel || '[id$="_16"]');
    if (emailField && lastNameField) lastNameField.after(emailField);
  }

  function brochureApplyFieldOrderInPopup(modal) {
    modal = spz3002BrochurePopupRoot() || modal;
    if (!modal) return;

    var gf6 = modal.querySelector(".sgpb-main-html-content-wrapper form#gform_6") || modal.querySelector("form#gform_6");
    var gf4 = modal.querySelector(".sgpb-main-html-content-wrapper form#gform_4") || modal.querySelector("form#gform_4");
    var gf15 = modal.querySelector(".sgpb-main-html-content-wrapper form#gform_15") || modal.querySelector("form#gform_15");

    spz3002ReorderEmailAfterLastName(gf6, "#field_6_16");
    spz3002ReorderEmailAfterLastName(gf4, "#field_4_16");
    spz3002ReorderEmailAfterLastName(gf15, "#field_15_16");

    if (gf15) {
      var companyName = gf15.querySelector('[id="field_15_17"]');
      var companyType = gf15.querySelector('[id="field_15_5"]');
      if (companyName && companyType) companyName.after(companyType);
    }

    if (gf6) {
      var giJob = gf6.querySelector("#field_6_22");
      var giCo = gf6.querySelector("#field_6_5");
      if (giJob && giCo) giCo.insertAdjacentElement("afterend", giJob);
    }

    if (gf15) {
      var connJob = gf15.querySelector("#field_15_25");
      var connCo = gf15.querySelector("#field_15_5");
      if (connJob && connCo) connCo.insertAdjacentElement("afterend", connJob);
    }

    if (gf4) {
      var assetJob = gf4.querySelector("#field_4_24");
      var assetCo = gf4.querySelector("#field_4_5");
      if (assetJob && assetCo) assetCo.insertAdjacentElement("afterend", assetJob);
    }

    brochureReorderBrochureEmailColumns(modal);
    brochureReorderBrochureEmailColumnsLegacy(modal);
  }

  function spz3002PollBrochureFieldOrderUntilDone() {
    var attempts = 0;
    var MAX = 100;
    var timer = window.setInterval(function () {
      attempts += 1;
      var modal = spz3002BrochurePopupRoot();
      if (!modal || !modal.querySelector("form#gform_6")) {
        if (attempts >= MAX) window.clearInterval(timer);
        return;
      }
      if (!spz3002PopupShouldDeferFieldReorder(modal)) {
        brochureApplyFieldOrderInPopup(modal);
        handleSelectHasValueClass();
        spz3002SyncBrochureFloatingLabels(modal);
      }
      if (!spz3002Gform6FieldOrderPending(modal) || attempts >= MAX) {
        window.clearInterval(timer);
      }
    }, 200);
  }

  /** GF AJAX may repaint after our reorder; rerun enhancements over a longer tail than a single frame. */
  function brochureScheduleDomEnhancementPasses() {
    var delays = [0, 32, 100, 200, 380, 700, 1200, 2000, 3500];
    delays.forEach(function (ms) {
      window.setTimeout(function () {
        brochureFormDomEnhancements();
        updateSpz3002PopupFilledState();
      }, ms);
    });
  }

  function spz3002EnsurePopupFieldOrderObserver() {
    if (window.__SPZ3002_FIELD_ORDER_OBS__) return;
    window.__SPZ3002_FIELD_ORDER_OBS__ = true;

    var debounceTimer = null;
    var DEBOUNCE_MS = 160;

    function applyReorderAfterStableFrame() {
      if (!document.body.classList.contains("spz_3002_v")) return;
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          var modal = spz3002BrochurePopupRoot();
          if (!modal || !modal.querySelector('form[id^="gform_"]')) return;
          spz3002MaybeApplyFieldReorder(modal);
        });
      });
    }

    function scheduleReorder() {
      if (!document.body.classList.contains("spz_3002_v")) return;
      if (debounceTimer) window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(function () {
        debounceTimer = null;
        applyReorderAfterStableFrame();
      }, DEBOUNCE_MS);
    }

    function observePopupModal(popupModal) {
      if (!popupModal || popupModal.__spz3002FieldOrderSubtreeObs) return;
      popupModal.__spz3002FieldOrderSubtreeObs = true;
      try {
        var mo = new MutationObserver(function () {
          scheduleReorder();
        });
        mo.observe(popupModal, { childList: true, subtree: true });
      } catch (e) {}
    }

    try {
      var bootMo = new MutationObserver(function () {
        var wrapper = document.querySelector(".spz_3002_v #sgpb-popup-dialog-main-div-wrapper");
        if (wrapper) observePopupModal(wrapper);
        var m = spz3002BrochurePopupRoot();
        if (m) observePopupModal(m);
      });
      bootMo.observe(document.documentElement, { childList: true, subtree: true });
    } catch (e) {}

    var wrapperFirst = document.querySelector(".spz_3002_v #sgpb-popup-dialog-main-div-wrapper");
    if (wrapperFirst) observePopupModal(wrapperFirst);
    var first = spz3002BrochurePopupRoot();
    if (first) observePopupModal(first);
  }

  function brochureFormDelegatedListenersOnce() {
    if (window.__SPZ3002_BROCHURE_DELEGATES__) return;
    window.__SPZ3002_BROCHURE_DELEGATES__ = true;

    document.addEventListener("click", function (e) {
      const closeIcon = e.target.closest(".spz_close_icon");
      if (!closeIcon) return;
      const wrapper = closeIcon.parentElement;
      const closeImg = wrapper && wrapper.querySelector('img[title="Close"]');
      if (closeImg) closeImg.click();
    });

    document.addEventListener(
      "input",
      function (e) {
        if (!document.body.classList.contains("spz_3002_v")) return;
        var tgt = e.target;
        if (spz3002PopupFilledInputMatches(tgt)) updateSpz3002PopupFilledState();
        if (tgt && tgt.tagName === "SELECT" && tgt.closest("#sgpb-popup-dialog-main-div")) {
          spz3002SyncSelectHasValueClass(tgt);
        }
      },
      true
    );
    document.addEventListener(
      "change",
      function (e) {
        if (!document.body.classList.contains("spz_3002_v")) return;
        var tgt = e.target;
        if (spz3002BrochureModalControlMatches(tgt)) {
          spz3002BrochureGfieldLabelState(tgt);
        }
        if (spz3002PopupFilledInputMatches(tgt)) updateSpz3002PopupFilledState();
        if (tgt && tgt.tagName === "SELECT") spz3002SyncSelectHasValueClass(tgt);
      },
      true
    );

    document.addEventListener("animationstart", function (e) {
      if (e.animationName === "autofill-start") {
        updateSpz3002PopupFilledState();
      }
    });

    document.addEventListener("focusin", function (e) {
      if (!document.body.classList.contains("spz_3002_v")) return;
      var tgt = e.target;
      if (spz3002BrochureModalControlMatches(tgt)) {
        var gBo = tgt.closest(".gfield");
        if (gBo) gBo.classList.add("active", "focused", "spz_input_focus");
        return;
      }
      if (spz3002PopupFilledInputMatches(tgt)) {
        var gPl = tgt.closest(".gfield");
        if (gPl) gPl.classList.add("spz_input_focus");
      }
    });

    document.addEventListener("focusout", function (e) {
      if (!document.body.classList.contains("spz_3002_v")) return;
      var tgt = e.target;
      if (spz3002BrochureModalControlMatches(tgt)) {
        spz3002BrochureGfieldLabelState(tgt);
        if (tgt.tagName === "SELECT") spz3002SyncSelectHasValueClass(tgt);
        return;
      }
      if (spz3002PopupFilledInputMatches(tgt)) {
        const gfield = tgt.closest(".gfield");
        if (gfield) {
          gfield.classList.remove("spz_input_focus");
          if (tgt.value.trim() !== "") {
            gfield.classList.add("spz_input_filled");
          } else {
            gfield.classList.remove("spz_input_filled");
          }
        }
      } else if (tgt && tgt.tagName === "SELECT" && tgt.closest("#sgpb-popup-dialog-main-div")) {
        spz3002SyncSelectHasValueClass(tgt);
      }
    });
  }

  function isWhyCanoePage() {
    return window.location.pathname.includes("why-canoe-intelligence") || document.body.classList.contains("why-canoe-intelligence");
  }

  function isWhyCanoeInfoPage() {
    const normalizedPath = window.location.pathname.replace(/\/$/, "");
    return window.location.hostname === "info.canoeintelligence.com" && normalizedPath === "/why-canoe-intelligence";
  }

  function spz3002DemoCountrySelect() {
    return document.querySelector(".spz_3002_v .form_wrapper form#gform_3 #field_3_23 select") || document.querySelector(".spz_3002_v #sg-popup-content-wrapper-6993 form#gform_3 #field_3_23 select");
  }

  function spz3002DemoStateField() {
    return document.querySelector(".spz_3002_v .form_wrapper form#gform_3 #field_3_18") || document.querySelector(".spz_3002_v #sg-popup-content-wrapper-6993 form#gform_3 #field_3_18");
  }

  function spz3002DemoStateSelect() {
    const stateField = spz3002DemoStateField();
    return stateField ? stateField.querySelector("select") : null;
  }

  function updateStatePlaceholder() {
    if (isWhyCanoePage()) return;

    const stateSelect = spz3002DemoStateSelect();
    const firstOption = stateSelect ? stateSelect.querySelector("option:first-child") : null;
    if (firstOption && firstOption.textContent !== "State") {
      const stateContainer = spz3002DemoStateField();

      if (stateSelect && stateContainer && stateSelect.value !== "" && stateSelect.value !== "State") {
        stateContainer.classList.add("active");
      }

      firstOption.textContent = "State";
    }
  }

  function updateSelectState() {
    const countrySelect = spz3002DemoCountrySelect();

    if (countrySelect) {
      // Run once on page load (with slight delay to allow rendering)
      setTimeout(updateStatePlaceholder, 10);

      // Run again on change of country
      if (!countrySelect.dataset.spzCountryChangeBound) {
        countrySelect.dataset.spzCountryChangeBound = "1";
        countrySelect.addEventListener("change", function (event) {
          setTimeout(function () {
            if (event.target.value === "United States" && !isWhyCanoeInfoPage()) {
              const stateField = spz3002DemoStateField();
              const stateLabel = stateField?.querySelector("label");
              if (stateLabel) stateLabel.textContent = "State";
            }
          }, 100);

          const stateSelect = spz3002DemoStateSelect();
          const stateContainer = spz3002DemoStateField();
          if (stateSelect && stateContainer && stateSelect.value !== "" && stateSelect.value !== "State") {
            stateContainer.classList.add("active");
          }
          setTimeout(updateStatePlaceholder, 10);
        });
      }
    }
  }

  function brochureFormDomEnhancements() {
    var modal = spz3002BrochurePopupRoot();
    if (!modal) return;
    if (!modal.querySelector("form#gform_6, form#gform_4, form#gform_15")) return;

    ensureBrochurePopupChrome();
    updateSelectState();

    modal.querySelectorAll('form[id^="gform_"] .gfield label').forEach(function (label) {
      var labelText = label.textContent.trim().replace(/\*/g, "").replace(/\s+/g, "-").toLowerCase();

      var gf = label.closest(".gfield");
      if (gf) gf.classList.add(labelText);
    });

    spz3002SyncBrochureFloatingLabels(modal);
    spz3002MaybeApplyFieldReorder(modal);

    document
      .querySelectorAll(
        ".spz_3002_v #sgpb-popup-dialog-main-div:has(.sgpb-popup-builder-content-7500) h2.gform_title," +
          ".spz_3002_v #sgpb-popup-dialog-main-div:has(.sgpb-popup-builder-content-6998) h2.gform_title," +
          ".spz_3002_v #sgpb-popup-dialog-main-div:has(#sg-popup-content-wrapper-6959) h2.gform_title"
      )
      .forEach(function (ele) {
        ele.textContent = "Download the Canoe Brochure";
      });

    modal.querySelectorAll("#field_6_5 select option:first-child, #field_15_5 select option:first-child, #field_4_5 select option:first-child").forEach(function (ele) {
      ele.textContent = "Company Type*";
    });

    modal.querySelectorAll("#field_15_25 select option:first-child, #field_4_24 select option:first-child, #field_6_22 select option:first-child").forEach(function (option) {
      option.textContent = "Your Job Function*";
      let gfield = option.closest(".gfield");
      option.closest(".gfield").querySelector(".gfield_label").textContent = "Your Job Function*";
    });

    handleSelectHasValueClass();
    handleErrorState();
    updateSpz3002PopupFilledState();
    window.setTimeout(updateSpz3002PopupFilledState, 120);
    spz3002SyncBrochureFloatingLabels(modal);
    window.setTimeout(function () {
      spz3002SyncBrochureFloatingLabels(modal);
    }, 140);
  }

  function brochureFormChanges() {
    brochureFormDelegatedListenersOnce();
    brochureFormDomEnhancements();
    brochureScheduleDomEnhancementPasses();
    spz3002PollBrochureFieldOrderUntilDone();
    window.setTimeout(function () {
      var modal = spz3002BrochurePopupRoot();
      if (modal) spz3002MaybeApplyFieldReorder(modal, 0);
      brochureFormDomEnhancements();
      updateSpz3002PopupFilledState();
    }, 450);
  }

  function spz3002BindGformPostRender() {
    var attempts = 0;
    function attach() {
      if (!window.jQuery) {
        attempts += 1;
        if (attempts < 100) window.setTimeout(attach, 50);
        return;
      }
      window.jQuery(document).off("gform_post_render.spz3002");
      if (!window.__SPZ3002_JQUERY_SELECT_SYNC__) {
        window.__SPZ3002_JQUERY_SELECT_SYNC__ = true;
        window.jQuery(document).on("change.spz3002select", "#sgpb-popup-dialog-main-div select", function () {
          if (!document.body.classList.contains("spz_3002_v")) return;
          spz3002BrochureGfieldLabelState(this);
          spz3002SyncSelectHasValueClass(this);
        });
      }
      window.jQuery(document).on("gform_post_render.spz3002", function (_event, formId) {
        if (!document.body.classList.contains("spz_3002_v")) return;
        if (formId === 3) return;
        if ([4, 6, 15].indexOf(Number(formId)) === -1) return;
        var modal = spz3002BrochurePopupRoot();
        if (!modal || !modal.querySelector("form#gform_" + formId)) return;
        brochureFormDelegatedListenersOnce();
        brochureScheduleDomEnhancementPasses();
        spz3002PollBrochureFieldOrderUntilDone();
      });
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", attach);
    } else {
      attach();
    }
  }

  spz3002BindGformPostRender();
  spz3002EnsurePopupFieldOrderObserver();

  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".spz3002-hero .demo-cta-border");
    if (btn) {
      setTimeout(function () {
        brochureFormChanges();
      }, 500);
    }
  });
  let downloadsecondCTA = setInterval(function () {
    const btn = document.querySelector('.spz_3002_v .cta-cont [title="DOWNLOAD BROCHURE"]');
    const btn2 = document.querySelector('.spz_3002_v .cta-cont [title="Download Brochure"]');
    if (btn || btn2) {
      clearInterval(downloadsecondCTA);
      if (btn) {
        btn.addEventListener("click", function () {
          setTimeout(function () {
            brochureFormChanges();
          }, 500);
        });
      }
      if (btn2) {
        btn2.addEventListener("click", function () {
          setTimeout(function () {
            brochureFormChanges();
          }, 500);
        });
      }
    }
  });

  (function spz3002TestimonialsSlick() {
    var SLICK_JS = "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
    var SLICK_CSS = "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css";

    function loadCss(href) {
      if (document.querySelector("link[data-spz-3002-slick-css]")) return;
      var l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      l.setAttribute("data-spz-3002-slick-css", "1");
      document.head.appendChild(l);
    }

    // 1. Wait for jQuery (already on the page for most WP sites; poll until ready).
    function waitForJQuery(cb) {
      if (window.jQuery) {
        cb();
        return;
      }
      var t = setInterval(function () {
        if (window.jQuery) {
          clearInterval(t);
          cb();
        }
      }, 50);
    }

    // 2. Wait for Slick (inject script once, then poll until $.fn.slick is available).
    function waitForSlick(cb) {
      if (window.jQuery && window.jQuery.fn && window.jQuery.fn.slick) {
        cb();
        return;
      }
      if (!document.querySelector("script[data-spz-3002-slick-js]")) {
        var s = document.createElement("script");
        s.src = SLICK_JS;
        s.async = true;
        s.setAttribute("data-spz-3002-slick-js", "1");
        document.body.appendChild(s);
      }
      var t = setInterval(function () {
        if (window.jQuery && window.jQuery.fn && window.jQuery.fn.slick) {
          clearInterval(t);
          cb();
        }
      }, 50);
    }

    function getVW() {
      return window.innerWidth || document.documentElement.clientWidth;
    }

    // 3. Init or destroy based on viewport — mirrors Splide's breakpoints:
    //    < 768px  → 1 slide  |  768–1023px → 2 slides  |  ≥ 1024px → static grid (unslick)
    function initOrDestroy() {
      if (!window.jQuery) return;
      var $ = window.jQuery;
      var $el = $("#spz3002-t-splide");
      if (!$el.length) return;

      var w = getVW();

      if (w >= 1024) {
        if ($el.hasClass("slick-initialized")) {
          $el.slick("unslick");
        }
        return;
      }

      if ($el.hasClass("slick-initialized")) return;

      $el.slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: true,
        touchThreshold: 10,
        waitForAnimate: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }

    var resizeTimer = null;
    function onResize() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initOrDestroy, 300);
    }

    function go() {
      if (!document.getElementById("spz3002-t-splide")) return;
      loadCss(SLICK_CSS);
      waitForJQuery(function () {
        waitForSlick(function () {
          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", initOrDestroy, { once: true });
          } else {
            initOrDestroy();
          }
          window.jQuery(window).on("resize.spz3002slick", onResize);
        });
      });
    }

    go();
  })();
}

// ============ INIT ============
function spz3005() {
  if (document.body.classList.contains("spz_3005_v")) return;

  // Run ONLY on the targeted solution paths (trailing slash normalised).
  const path = location.pathname.endsWith("/") ? location.pathname : location.pathname + "/";
  const content = pages[path];
  if (!content) return;

  waitForElement("#row1")
    .then(function (anchor) {
      if (document.body.classList.contains("spz_3005_v")) return;
      document.body.classList.add("spz_3005_v");
      injectTrueControl();
      const html = content.variant === "product" ? productSection(content.cards) : overviewSection(content.cards);
      if (content.variant === "product" && path.includes("/solutions/canoe-connect/")) {
        anchor.nextElementSibling.insertAdjacentHTML("afterend", html);
      } else {
        anchor.insertAdjacentHTML("afterend", html);
      }
      document.querySelectorAll(".form-modal-cta").forEach(function (cta) {
        cta.addEventListener("click", function () {
          const controlCTA = document.querySelector('a[title="GET A DEMO"], a[title="Get a Demo"], a[title="Get a demo"]');
          if (controlCTA) {
            controlCTA.click();
          }
        });
      });
    })
    .catch(function () {});
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", spz3005);
else spz3005();

