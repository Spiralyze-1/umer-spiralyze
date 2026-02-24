(function () {
  const squeezePage = 'both';
  const expName = "8001";
  const variantName = `variant_#${expName}`;
  const clientDomain = ".hellopebl.com";

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
    const setCookie = (name, value, days) => {
      const expires = days
        ? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`
        : "";
      document.cookie = `${name}=${value || ""}${expires};domain=${clientDomain};path=/`;
    };

    const getCookie = (name) => {
      const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
      return match ? match[2] : null;
    };

    const existingName = getCookie("ExperimentName");
    const existingValue = getCookie("ExperimentValue");
    const nameList = existingName ? existingName.split(",") : [];
    const index = nameList.indexOf(currentExperimentName);

    if (!existingName) {
      setCookie("ExperimentName", currentExperimentName, 1);
      setCookie("ExperimentValue", currentExperimentValue, 1);
    } else if (index === -1) {
      setCookie("ExperimentName", `${existingName},${currentExperimentName}`, 1);
      setCookie("ExperimentValue", `${existingValue},${currentExperimentValue}`, 1);
    } else {
      const names = existingName.split(",");
      const values = existingValue.split(",");
      values[index] = currentExperimentValue;
      setCookie("ExperimentName", names.join(","), 1);
      setCookie("ExperimentValue", values.join(","), 1);
    }
  }
})();

function waitForElement(selector, callback, timeout = 5000) {
  const el = document.querySelector(selector);
  if (el) return callback(el);

  const observer = new MutationObserver((_, obs) => {
    const el = document.querySelector(selector);
    if (el) {
      obs.disconnect();
      callback(el);
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), timeout);
}

const testNumber = "8001";
const testType = "v1";

waitForElement("#self-signup-header", (docEl) => {
  const body = document.body;
  const className = `spz_${testNumber}_${testType}`;

  if (!body.classList.contains(className)) {
    body.classList.add(className);
  }

  document.querySelector('#self-signup-header~div').insertAdjacentHTML('beforeend', `
      <div class="spz_logos_section">
        <div class="auto_container">
          <div class="spz_logoMain">
            <div class="logo_title">
              <h3>Trusted by global leaders</h3>
            </div>
            <div class="logo_main">
              <ul>
                <li>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1770141899/pebl/8001/logo-03.svg"
                      alt="attentive">
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1770141899/pebl/8001/logo-05.svg"
                      alt="consensys">
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1770141900/pebl/8001/logo-01.svg"
                      alt="LastPass">
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1770141900/pebl/8001/logo-02.svg"
                      alt="crunchbase">
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1770141900/pebl/8001/logo-04.svg"
                      alt="Materialize">
                  </figure>
                </li>
              </ul>
              <figure>
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1770142053/pebl/8001/vector.svg" alt="Logos">
              </figure>
            </div>
          </div>
        </div>
      </div>
    `);

  //browser detection
  let userAgent = navigator.userAgent;
  let browser;
  if (userAgent.match(/edg/i)) {
    browser = "edge";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browser = "firefox";
  } else if (userAgent.match(/opr\//i)) {
    browser = "opera";
  } else if (userAgent.match(/chrome|chromium|crios/i)) {
    browser = "chrome";
  } else if (userAgent.match(/safari/i)) {
    browser = "safari";
  } else {
    //alert("Other browser");
  }
  document.querySelector('body').classList.add(browser);

});
