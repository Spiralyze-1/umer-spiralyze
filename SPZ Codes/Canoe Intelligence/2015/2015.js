// #2015 | Canoe Intelligence | Home | Integrations

// ============ CONFIG ============
// DEV 1/4. Test identity
let testId = "2015",
  testType = "v",
  testClass = "spz_" + testId + "_" + testType;

// DEV 2/4. Selector + URL
const template_url = "/";
const template_selector = "div#row4";
const hero_selector = ".hero-section .wrapper .title";

// DEV 3/4. Content / copy
// Hero copy from true control (#2005 animated headlines). Kept separate so integrations config stays untouched.
const hero_content = {
  staticText: "Spend 75% less time",
  headlines: ["on exposures.", "on quarterlies.", "on capital calls.", "on K-1s.", "on distributions."],
  subtitle: "Purpose-built AI that eliminates manual work, surfaces deeper insights, and scales with your alts program."
};

// Logos are grouped into three marquee rows. Rows 1 & 3 slide left→right, row 2 slides right→left (per prototype).
const template_content = {
  heading: "300+ Integrations",
  ctaText: "Get a Demo",
  ctaUrl: "https://canoeintelligence.com/demo-request/",
  logoRows: [
    {
      direction: "ltr",
      logos: [
        {
          name: "Solovis",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160756/canoeintelligence/2015/solovis_logo_6.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160756/canoeintelligence/2015/solovis_logo_3.svg"
        },
        {
          name: "SimCorp",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160773/canoeintelligence/2015/simcorp_logo_6.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160773/canoeintelligence/2015/simcorp_logo_2.svg"
        },
        {
          name: "SS&C Black Diamond",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160797/canoeintelligence/2015/black_diamond_logo_7.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160797/canoeintelligence/2015/black_diamond_logo_3.svg"
        },
        {
          name: "Atlas by Holland",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160671/canoeintelligence/2015/atlas_by_holland_6.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160671/canoeintelligence/2015/atlas_by_holland_3.svg"
        },
        {
          name: "iPaladin",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160671/canoeintelligence/2015/ipaladin_7.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160671/canoeintelligence/2015/ipaladin_3.svg"
        }
      ]
    },
    {
      direction: "rtl",
      logos: [
        {
          name: "Envestnet",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160819/canoeintelligence/2015/envestnet_8.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160819/canoeintelligence/2015/envestnet_4.svg"
        },
        {
          name: "SEI",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160840/canoeintelligence/2015/sei_logo_8.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160840/canoeintelligence/2015/sei_logo_4.svg"
        },
        {
          name: "Cobalt LP",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160870/canoeintelligence/2015/cobalt_lp_8.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160870/canoeintelligence/2015/cobalt_lp_4.svg"
        },
        {
          name: "Splunk",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160890/canoeintelligence/2015/splunk_logo_7.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160890/canoeintelligence/2015/splunk_logo_3.svg"
        },
        {
          name: "Snowflake",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160928/canoeintelligence/2015/snowflake_logo_6.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160928/canoeintelligence/2015/snowflake_logo_4.svg"
        },
        {
          name: "Exchangelodge",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160671/canoeintelligence/2015/exchangelodge_7.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160671/canoeintelligence/2015/exchangelodge_4.svg"
        }
      ]
    },
    {
      direction: "ltr",
      logos: [
        {
          name: "Bipsync",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160953/canoeintelligence/2015/bipsync_8.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160953/canoeintelligence/2015/bipsync_3.svg"
        },
        {
          name: "Bloomberg",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160966/canoeintelligence/2015/bloomberg_6.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/canoeintelligence/2015/bloomberg.png"
        },
        {
          name: "Apliqo",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160983/canoeintelligence/2015/apliqo_7.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788160983/canoeintelligence/2015/apliqo_3.svg"
        },
        {
          name: "Confluence",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788161010/canoeintelligence/2015/confluence-logo_8.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788161010/canoeintelligence/2015/confluence-logo_4.svg"
        },
        {
          name: "Addepar",
          url: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788161023/canoeintelligence/2015/addepar_7.svg",
          mobileUrl: "https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1788161023/canoeintelligence/2015/addepar_3.svg"
        }
      ]
    }
  ]
};

// ============ DOWNFUNNEL TRACKING ============
(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of the squeezePage variable as needed:
  // true  – if you are using a squeeze page (i.e., the page contains a form)
  // false – if you are not using a squeeze page (i.e., the page does not contain a form)
  // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

  const squeezePage = false; // true / false / 'both'
  const expName = "2015"; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `#2015_spz_var`; //variantName should be _variant, _true_control etc.
  const clientDomain = ".canoeintelligence.com"; //domain should be .spiralyze.com

  /***********************************
  ************************************
  DO NOT TOUCH
  BEYOND THIS LINE
  ******************************
  ******************************/
  const formHiddenValue = variantName;
  if (squeezePage === true) {
    window.squeezePageValue = formHiddenValue;
  } else if (squeezePage === false) {
    hiddenValue(expName, variantName);
  } else if (squeezePage === "both") {
    hiddenValue(expName, variantName);
    window.squeezePageValue = formHiddenValue;
  }
  function hiddenValue(currentExperimentName, currentExperimentValue) {
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    var ExistingExperimentName = getCookie("ExperimentName");
    var ExistingExperimentValue = getCookie("ExperimentValue");
    var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(",") : [];

    if (!ExistingExperimentName) {
      setCookie("ExperimentName", currentExperimentName, 1);
      setCookie("ExperimentValue", currentExperimentValue, 1);
    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {
      setCookie("ExperimentName", ExistingExperimentName + "," + currentExperimentName, 1);
      setCookie("ExperimentValue", ExistingExperimentValue + "," + currentExperimentValue, 1);
    } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {
      var existingNames = ExistingExperimentName.split(",");
      var existingValues = ExistingExperimentValue.split(",");
      var index = existingNames.indexOf(currentExperimentName);
      existingValues[index] = currentExperimentValue;
      setCookie("ExperimentName", existingNames.join(","), 1);
      setCookie("ExperimentValue", existingValues.join(","), 1);
    }
  }
})();

// ============ HERO HTML + ANIMATION (from true control) ============
function buildHeroHTML() {
  const items = hero_content.headlines.map((h, i) => `<span class="spz-headline${i === 0 ? " is-active" : ""}">${h}</span>`).join("");
  return `
    <p class="spz-title-static">${hero_content.staticText}</p>
    <div class="spz-headline-track">${items}</div>
  `;
}

function showNext(items, current) {
  const next = (current + 1) % items.length;
  items[current].classList.replace("is-active", "is-exiting");
  setTimeout(() => items[current].classList.remove("is-exiting"), 200);
  items[next].classList.add("is-entering");
  setTimeout(() => {
    items[next].classList.replace("is-entering", "is-active");
    setTimeout(() => showNext(items, next), 4000);
  }, 800);
}

// ============ HTML ============
// One logo card.
// Eager src (no lazy, no <picture>): iOS Safari skips lazy images inside a
// CSS-transformed marquee, and <picture> + SVG often paints as a blank card.
function logoCardHTML(logo) {
  const src = window.matchMedia("(max-width: 767.98px)").matches ? logo.mobileUrl : logo.url;
  return `<div class="spz-integrations-card"><img class="spz-integrations-logo" src="${src}" alt="${logo.name}" decoding="async"></div>`;
}

// One marquee track. The card sequence is duplicated so the CSS translateX(-50%) loop is seamless.
function marqueeTrackHTML(row) {
  const sequence = row.logos.map(logoCardHTML).join("");
  return `<div class="spz-integrations-track spz-integrations-track--${row.direction}">${sequence}${sequence}</div>`;
}

function buildHTML() {
  const tracks = template_content.logoRows.map(marqueeTrackHTML).join("");
  return `
    <section class="spz-integrations-section" data-spz-exp="2015">
      <div class="spz-integrations-inner">
        <div class="spz-integrations-intro">
          <h2 class="spz-integrations-title">${template_content.heading}</h2>
          <a class="spz-2015-integrations-cta" href="${template_content.ctaUrl}">${template_content.ctaText}</a>
        </div>
        <div class="spz-integrations-logos">${tracks}</div>
      </div>
    </section>
  `;
}

// ============ INIT ============
function waitForElement(selector, timeout = 10000) {
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

function initHero() {
  if (window.location.pathname !== template_url) return;
  if (document.querySelector(".spz-headline-track")) return;
  waitForElement(hero_selector)
    .then((ctrl) => {
      if (document.querySelector(".spz-headline-track")) return;
      document.body.classList.add(testClass);
      ctrl.innerHTML = buildHeroHTML();
      const headlines = Array.from(ctrl.querySelectorAll(".spz-headline"));
      setTimeout(() => showNext(headlines, 0), 4000);
      if (ctrl.nextElementSibling) {
        ctrl.nextElementSibling.innerHTML = hero_content.subtitle;
      }
    })
    .catch(() => {});
}

function initIntegrations() {
  if (window.location.pathname !== template_url) return;
  if (document.querySelector('[data-spz-exp="2015"]')) return;
  waitForElement(template_selector)
    .then((anchor) => {
      if (document.querySelector('[data-spz-exp="2015"]')) return;
      document.body.classList.add(testClass);
      anchor.insertAdjacentHTML("beforebegin", buildHTML());
    })
    .catch(() => {});
}

function init() {
  initHero();
  initIntegrations();
}

document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : (init(), setTimeout(init, 1000), setTimeout(init, 2000));