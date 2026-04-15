const targetPaths = ['/en/products/1secure-msps/',
  '/en/products/auditor/',
  '/en/products/pingcastle/',
  '/en/products/access-analyzer/',
  '/en/products/endpoint-protector/',
  '/en/products/data-classification/',
  '/en/products/change-tracker/',
  '/en/products/identity-recovery-software/',
  '/en/products/identity-manager/',
  '/en/products/password-policy-enforcer/',
  '/en/products/password-secure/',
  '/en/products/threat-manager/',
  '/en/products/threat-prevention/',
  '/en/products/privilege-secure/'
];

let observerInstance = null;
let observerStopTimer = null;

function observerForLoadingBlock() {
  // prevent duplicate observers
  if (observerInstance) return;

  var target = document.querySelector('body');
  const config = {
    childList: true,
    subtree: false,
  };

  var running = false;
  const callback = function (mutationsList) {
    for (let mutation of mutationsList) {
      if (running) return;

      if (targetPaths.includes(location.pathname)) {
        document.querySelector('body').classList.add('spz_6026_v');
        hiddenValue6026();

      } else {
        // remove squezePageValue if user navigates to a non-target page
        if (window.squeezePageValue) {
          delete window.squeezePageValue;
        }
      }

      running = true;
      setTimeout(function () {
        running = false;
      }, 1000);
    }
  };

  observerInstance = new MutationObserver(callback);
  observerInstance.observe(target, config);
}

var checkBody = setInterval(() => {
  if (document.querySelectorAll('body').length > 0) {
    clearInterval(checkBody);
    observerForLoadingBlock();
  }
}, 100);

function hiddenValue6026() {
  (function () {
    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

    // Set the value of the squeezePage variable as needed:
    // true  – if you are using a squeeze page (i.e., the page contains a form)
    // false – if you are not using a squeeze page (i.e., the page does not contain a form)
    // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

    const squeezePage = true; // true / false / 'both'
    const expName = '6026'; //experiment name should be 1001, 1002, 1003 etc.
    const variantName = `Variant_` + expName; //variantName should be variant_, true_control_ etc.
    const clientDomain = '.netwrix.com'; //domain should be .spiralyze.com


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
    } else if (squeezePage === 'both') {
      hiddenValue(expName, variantName);
      window.squeezePageValue = formHiddenValue;
    }
    function hiddenValue(currentExperimentName, currentExperimentValue) {
      function setCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
      }

      function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }

      var ExistingExperimentName = getCookie('ExperimentName');
      var ExistingExperimentValue = getCookie('ExperimentValue');
      var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(',') : [];

      if (!ExistingExperimentName) {
        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);
      } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {
        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);
      } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {
        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');
        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;
        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
      }
    }
  }());
}
