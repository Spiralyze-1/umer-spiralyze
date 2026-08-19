function spz5011() {
	if (!document.querySelector('body').classList.contains('spz_5011_v')) {
		document.querySelector('body').classList.add('spz_5011_v');

		document.querySelector('.hero-title').insertAdjacentHTML('afterend', `
<div class="spz_thankYou_hero">
  <div class="auto_container">
    <div class="spz_hero_inner">
      <div class="spz_hero_data">
        <strong>WEBINAR: SHAPING A SMARTER FUTURE FOR ALTS WITH CANOE</strong>
        <h1>Optimize alts strategy and grow</h1>
        <b>You’re registered!</b>
        <p>Check your email for your confirmation.</p>
        <div class="spz_dateTime">
          <span>
            <img
              src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1785325116/canoeintelligence/5011/icon-calendar.svg"
              alt="date icon">
            Thursday, July 23, 2026
          </span>
          <span>
            <img
              src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1785325116/canoeintelligence/5011/icon-clock.svg"
              alt="clock icon">
            11:00 am – 12:00 pm PT
          </span>
        </div>
        <div class="spz_hero_tags">
          <ul>
            <li>
              <div class="spz_tagData">
                <img
                  src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1785325117/canoeintelligence/5011/icon-arrow-link.svg"
                  alt="arrow">
                <p>Automate alts workflows from middle office to compliance</p>
              </div>
            </li>
            <li>
              <div class="spz_tagData">
                <img
                  src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1785325117/canoeintelligence/5011/icon-arrow-link.svg"
                  alt="arrow">
                <p>Classify docs and extract data with AI</p>
              </div>
            </li>
            <li>
              <div class="spz_tagData">
                <img
                  src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1785325117/canoeintelligence/5011/icon-arrow-link.svg"
                  alt="arrow">
                <p>Optimize alts strategy and grow</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="spz_ctaOuter">
          <a href="" class="spz_custom_cta btn btn-fill">
            Click to add to your calendar
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
        `)
	}
}

spz5011();


// If you face any issues, please switch to the named-function version of this code and use that instead.
(function () {
	//Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

	// Set the value of the squeezePage variable as needed:
	// true  – if you are using a squeeze page (i.e., the page contains a form)
	// false – if you are not using a squeeze page (i.e., the page does not contain a form)
	// 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

	const squeezePage = false; // true / false / 'both'
	const expName = '5011'; //experiment name should be 1001, 1002, 1003 etc.
	const variantName = `#` + expName + `_spz_var`; //variantName should be _spz_var, _spz_control etc.
	const clientDomain = '.canoeintelligence.com'; //domain should be .spiralyze.com


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