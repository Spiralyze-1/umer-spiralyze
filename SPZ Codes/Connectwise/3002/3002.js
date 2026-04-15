(function () {
  const bodyInterval3002 = setInterval(function () {
    if (document.querySelector('body') && document.querySelector('.form-container') && !document.querySelector('.spz_3002_v')) {
      clearInterval(bodyInterval3002)
      //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

      // Set the value of the squeezePage variable as needed:
      // true  – if you are using a squeeze page (i.e., the page contains a form)
      // false – if you are not using a squeeze page (i.e., the page does not contain a form)
      // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)

      const squeezePage = true; // true / false / 'both'
      const expName = '3002'; //experiment name should be 1001, 1002, 1003 etc.
      const variantName = `spz_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
      const clientDomain = '.connectwise.com'; //domain should be .connectwise.com


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
      const checkBoxValueQ1 = [];
      const checkBoxValueQ2 = [];
      Array.prototype.remove = function () {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
          what = a[--L];
          while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
          }
        }
        return this;
      };
      document.querySelector('body').classList.add('spz_3002_v')
      document.querySelector('.spz_3002_v .form-container').classList.add('step-1', 'hide')
      document.querySelector('.spz_3002_v .form-container .form-container__form').insertAdjacentHTML("afterbegin", `
        <div class="lds-dual-ring"></div>
        <div class="steps">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="title">Contact sales</div>
        <div class="description">What best describes you?</div>
        <div class="question-wrapper  q1">
          <button data-index="1" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15.9998 13.3336H16.0132M15.9998 18.6669H16.0132M15.9998 8.00024H16.0132M21.3332 13.3336H21.3465M21.3332 18.6669H21.3465M21.3332 8.00024H21.3465M10.6665 13.3336H10.6798M10.6665 18.6669H10.6798M10.6665 8.00024H10.6798M11.9998 29.3336V25.3336C11.9998 24.98 12.1403 24.6408 12.3904 24.3908C12.6404 24.1407 12.9795 24.0002 13.3332 24.0002H18.6665C19.0201 24.0002 19.3593 24.1407 19.6093 24.3908C19.8594 24.6408 19.9998 24.98 19.9998 25.3336V29.3336" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.9999 2.66675H7.99992C6.52716 2.66675 5.33325 3.86066 5.33325 5.33341V26.6667C5.33325 28.1395 6.52716 29.3334 7.99992 29.3334H23.9999C25.4727 29.3334 26.6666 28.1395 26.6666 26.6667V5.33341C26.6666 3.86066 25.4727 2.66675 23.9999 2.66675Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">MSP</div>
          </button>
          <button data-index="2" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16.0001 22.6667V28M19.0734 10.04L20.3041 9.53069M20.3041 6.46936L19.0734 5.95869M22.4694 4.30402L21.9587 3.07202M22.4694 11.696L21.9587 12.9267M25.5307 4.30402L26.0414 3.07202M26.0401 12.928L25.5307 11.696M27.6961 6.46936L28.9281 5.95869M27.6961 9.53069L28.9281 10.0414M29.3334 17.3334V20C29.3334 20.7073 29.0525 21.3855 28.5524 21.8856C28.0523 22.3857 27.374 22.6667 26.6667 22.6667H5.33341C4.62617 22.6667 3.94789 22.3857 3.4478 21.8856C2.9477 21.3855 2.66675 20.7073 2.66675 20V6.66669C2.66675 5.95944 2.9477 5.28117 3.4478 4.78107C3.94789 4.28097 4.62617 4.00002 5.33341 4.00002H14.6667M10.6667 28H21.3334" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Internal IT department</div>
          </button>
          <button data-index="3" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M3.98925 21.7893C4.1853 22.2838 4.22895 22.8257 4.11458 23.3453L2.69458 27.7319C2.64883 27.9544 2.66066 28.1848 2.72895 28.4014C2.79724 28.6181 2.91973 28.8136 3.0848 28.9696C3.24988 29.1256 3.45206 29.2368 3.67218 29.2928C3.8923 29.3487 4.12306 29.3475 4.34258 29.2893L8.89325 27.9586C9.38353 27.8613 9.89129 27.9038 10.3586 28.0813C13.2058 29.4109 16.4311 29.6922 19.4654 28.8755C22.4998 28.0589 25.1483 26.1968 26.9435 23.6177C28.7388 21.0387 29.5654 17.9085 29.2776 14.7793C28.9899 11.6502 27.6062 8.72321 25.3707 6.51485C23.1352 4.30648 20.1915 2.95864 17.0591 2.70911C13.9267 2.45959 10.8068 3.32443 8.24984 5.15104C5.69291 6.97764 3.86329 9.64864 3.08377 12.6928C2.30425 15.7369 2.62494 18.9585 3.98925 21.7893Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.1199 12C12.4333 11.1089 13.0521 10.3575 13.8665 9.87887C14.6809 9.40024 15.6384 9.22528 16.5694 9.38498C17.5005 9.54467 18.345 10.0287 18.9533 10.7514C19.5617 11.4741 19.8946 12.3887 19.8932 13.3334C19.8932 16 15.8932 17.3334 15.8932 17.3334M15.9999 22.6667H16.0132" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Other</div>
          </button>
        </div>
        <div class="question-wrapper q2 type-a">
          <button data-index="1" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M21.3332 28V25.3333C21.3332 23.9188 20.7713 22.5623 19.7711 21.5621C18.7709 20.5619 17.4143 20 15.9998 20H7.99984C6.58535 20 5.22879 20.5619 4.2286 21.5621C3.22841 22.5623 2.6665 23.9188 2.6665 25.3333V28M21.3332 4.17065C22.4768 4.46715 23.4897 5.13501 24.2127 6.0694C24.9358 7.0038 25.3281 8.15184 25.3281 9.33332C25.3281 10.5148 24.9358 11.6628 24.2127 12.5972C23.4897 13.5316 22.4768 14.1995 21.3332 14.496M29.3332 28V25.3333C29.3323 24.1516 28.939 23.0037 28.215 22.0697C27.491 21.1358 26.4773 20.4687 25.3332 20.1733" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9998 14.6667C14.9454 14.6667 17.3332 12.2789 17.3332 9.33333C17.3332 6.38781 14.9454 4 11.9998 4C9.05432 4 6.6665 6.38781 6.6665 9.33333C6.6665 12.2789 9.05432 14.6667 11.9998 14.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Client management</div>
          </button>
          <button data-index="2" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
              <path d="M12.4883 6.02384L13.8217 8.33325M20.4883 19.8803L21.8217 22.1897M16.4883 12.952L17.8217 15.2614M2.45329 17.976C3.37202 17.4455 4.46385 17.3018 5.48856 17.5764C6.51328 17.8509 7.38696 18.5213 7.91739 19.4401C8.44782 20.3588 8.59156 21.4506 8.31699 22.4754C8.04242 23.5001 7.37202 24.3737 6.45329 24.9042L7.78662 27.2136C8.14024 27.8261 8.72269 28.273 9.40584 28.4561C10.089 28.6391 10.8169 28.5433 11.4294 28.1897L29.9046 17.523C30.5171 17.1694 30.964 16.5869 31.147 15.9038C31.3301 15.2206 31.2343 14.4927 30.8806 13.8803L29.5473 11.5708C28.6286 12.1013 27.5367 12.245 26.512 11.9705C25.4873 11.6959 24.6136 11.0255 24.0832 10.1067C23.5528 9.18801 23.409 8.09619 23.6836 7.07147C23.9582 6.04675 24.6286 5.17308 25.5473 4.64265L24.214 2.33325C23.8603 1.72075 23.2779 1.27383 22.5947 1.09078C21.9116 0.907729 21.1837 1.00356 20.5712 1.35718L2.09602 12.0238C1.48353 12.3775 1.0366 12.9599 0.853553 13.6431C0.670505 14.3262 0.766332 15.0541 1.11995 15.6666L2.45329 17.976Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Ticketing <span class="desktop-break"></span>& support</div>
          </button>
          <button data-index="3" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M23.9998 10.6666V7.99992C23.9998 7.29267 23.7189 6.6144 23.2188 6.1143C22.7187 5.6142 22.0404 5.33325 21.3332 5.33325H5.33317C4.62593 5.33325 3.94765 5.6142 3.44755 6.1143C2.94746 6.6144 2.6665 7.29267 2.6665 7.99992V17.3333C2.6665 18.0405 2.94746 18.7188 3.44755 19.2189C3.94765 19.719 4.62593 19.9999 5.33317 19.9999H15.9998M13.3332 25.3333V20.0533V24.2533M9.33317 25.3333H15.9998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26.6663 16H23.9997C22.5269 16 21.333 17.1939 21.333 18.6667V26.6667C21.333 28.1394 22.5269 29.3333 23.9997 29.3333H26.6663C28.1391 29.3333 29.333 28.1394 29.333 26.6667V18.6667C29.333 17.1939 28.1391 16 26.6663 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Remote access</div>
          </button>
          <button data-index="4" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15.9998 22.6667C16.7362 22.6667 17.3332 22.0697 17.3332 21.3333C17.3332 20.597 16.7362 20 15.9998 20C15.2635 20 14.6665 20.597 14.6665 21.3333C14.6665 22.0697 15.2635 22.6667 15.9998 22.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.3333 13.3335H6.66667C5.19391 13.3335 4 14.5274 4 16.0002V26.6668C4 28.1396 5.19391 29.3335 6.66667 29.3335H25.3333C26.8061 29.3335 28 28.1396 28 26.6668V16.0002C28 14.5274 26.8061 13.3335 25.3333 13.3335Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.3335 13.3334V9.33341C9.3335 7.5653 10.0359 5.86961 11.2861 4.61937C12.5364 3.36913 14.2321 2.66675 16.0002 2.66675C17.7683 2.66675 19.464 3.36913 20.7142 4.61937C21.9644 5.86961 22.6668 7.5653 22.6668 9.33341V13.3334" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Cybersecurity</div>
          </button>
          <button data-index="5" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15.9998 17.3334V28.0001M5.33313 19.8654C4.34252 18.8533 3.59523 17.6291 3.14785 16.2854C2.70047 14.9417 2.56474 13.5138 2.75095 12.1098C2.93715 10.7059 3.44041 9.36278 4.22259 8.18215C5.00478 7.00153 6.04538 6.0144 7.26558 5.29551C8.48578 4.57662 9.85357 4.14485 11.2654 4.03288C12.6771 3.92091 14.0959 4.13169 15.4142 4.64925C16.7324 5.16682 17.9156 5.97759 18.8741 7.02016C19.8326 8.06273 20.5413 9.30975 20.9465 10.6668H23.3331C24.6205 10.6666 25.8737 11.0805 26.9078 11.8474C27.9418 12.6142 28.7018 13.6933 29.0755 14.9252C29.4492 16.1571 29.4167 17.4766 28.9829 18.6886C28.5491 19.9007 27.737 20.9411 26.6665 21.6561" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6665 22.6668L15.9998 17.3335L21.3332 22.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Backup <span class="desktop-break"></span>& recovery</div>
          </button>
          <button data-index="6" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M26.6668 17.3333C26.6668 23.9999 22.0002 27.3333 16.4535 29.2666C16.163 29.365 15.8475 29.3603 15.5602 29.2533C10.0002 27.3333 5.3335 23.9999 5.3335 17.3333V7.99995C5.3335 7.64633 5.47397 7.30719 5.72402 7.05714C5.97407 6.80709 6.31321 6.66662 6.66683 6.66662C9.3335 6.66662 12.6668 5.06662 14.9868 3.03995C15.2693 2.79861 15.6286 2.66602 16.0002 2.66602C16.3717 2.66602 16.731 2.79861 17.0135 3.03995C19.3468 5.07995 22.6668 6.66662 25.3335 6.66662C25.6871 6.66662 26.0263 6.80709 26.2763 7.05714C26.5264 7.30719 26.6668 7.64633 26.6668 7.99995V17.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15.9999L14.6667 18.6666L20 13.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Patching</div>
          </button>
          <button data-index="7" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M17.3335 21.3334H10.6668M18.6668 10.6667H10.6668M21.3335 16.0001H10.6668M5.3335 4.00005C5.3335 3.64643 5.47397 3.30729 5.72402 3.05724C5.97407 2.80719 6.31321 2.66672 6.66683 2.66672C6.99699 2.6649 7.3208 2.75742 7.60016 2.93338L8.84416 3.73338C9.12288 3.91149 9.44674 4.00612 9.7775 4.00612C10.1083 4.00612 10.4321 3.91149 10.7108 3.73338L11.9562 2.93338C12.2349 2.75528 12.5587 2.66064 12.8895 2.66064C13.2203 2.66064 13.5441 2.75528 13.8228 2.93338L15.0668 3.73338C15.3455 3.91149 15.6694 4.00612 16.0002 4.00612C16.3309 4.00612 16.6548 3.91149 16.9335 3.73338L18.1775 2.93338C18.4562 2.75528 18.7801 2.66064 19.1108 2.66064C19.4416 2.66064 19.7654 2.75528 20.0442 2.93338L21.2895 3.73338C21.5682 3.91149 21.8921 4.00612 22.2228 4.00612C22.5536 4.00612 22.8774 3.91149 23.1562 3.73338L24.4002 2.93338C24.6795 2.75742 25.0033 2.6649 25.3335 2.66672C25.6871 2.66672 26.0263 2.80719 26.2763 3.05724C26.5264 3.30729 26.6668 3.64643 26.6668 4.00005V28C26.6668 28.3537 26.5264 28.6928 26.2763 28.9429C26.0263 29.1929 25.6871 29.3334 25.3335 29.3334C25.0033 29.3352 24.6795 29.2427 24.4002 29.0667L23.1562 28.2667C22.8774 28.0886 22.5536 27.994 22.2228 27.994C21.8921 27.994 21.5682 28.0886 21.2895 28.2667L20.0442 29.0667C19.7654 29.2448 19.4416 29.3395 19.1108 29.3395C18.7801 29.3395 18.4562 29.2448 18.1775 29.0667L16.9335 28.2667C16.6548 28.0886 16.3309 27.994 16.0002 27.994C15.6694 27.994 15.3455 28.0886 15.0668 28.2667L13.8228 29.0667C13.5441 29.2448 13.2203 29.3395 12.8895 29.3395C12.5587 29.3395 12.2349 29.2448 11.9562 29.0667L10.7108 28.2667C10.4321 28.0886 10.1083 27.994 9.7775 27.994C9.44674 27.994 9.12288 28.0886 8.84416 28.2667L7.60016 29.0667C7.3208 29.2427 6.99699 29.3352 6.66683 29.3334C6.31321 29.3334 5.97407 29.1929 5.72402 28.9429C5.47397 28.6928 5.3335 28.3537 5.3335 28V4.00005Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Sales & quoting</div>
          </button>
          <button data-index="8" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M20.0003 2.66675H12.0003C11.2639 2.66675 10.667 3.2637 10.667 4.00008V6.66675C10.667 7.40313 11.2639 8.00008 12.0003 8.00008H20.0003C20.7367 8.00008 21.3337 7.40313 21.3337 6.66675V4.00008C21.3337 3.2637 20.7367 2.66675 20.0003 2.66675Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.3335 5.3335H24.0002C24.7074 5.3335 25.3857 5.61445 25.8858 6.11454C26.3859 6.61464 26.6668 7.29292 26.6668 8.00016V26.6668C26.6668 27.3741 26.3859 28.0524 25.8858 28.5524C25.3857 29.0525 24.7074 29.3335 24.0002 29.3335H8.00016C7.29292 29.3335 6.61464 29.0525 6.11454 28.5524C5.61445 28.0524 5.3335 27.3741 5.3335 26.6668V8.00016C5.3335 7.29292 5.61445 6.61464 6.11454 6.11454C6.61464 5.61445 7.29292 5.3335 8.00016 5.3335H10.6668M16.0002 14.6668H21.3335M16.0002 21.3335H21.3335M10.6668 14.6668H10.6802M10.6668 21.3335H10.6802" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Reporting <span class="desktop-break"></span>& audits</div>
          </button>
          <button data-index="9" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M3.98925 21.7893C4.1853 22.2838 4.22895 22.8257 4.11458 23.3453L2.69458 27.7319C2.64883 27.9544 2.66066 28.1848 2.72895 28.4014C2.79724 28.6181 2.91973 28.8136 3.0848 28.9696C3.24988 29.1256 3.45206 29.2368 3.67218 29.2928C3.8923 29.3487 4.12306 29.3475 4.34258 29.2893L8.89325 27.9586C9.38353 27.8613 9.89129 27.9038 10.3586 28.0813C13.2058 29.4109 16.4311 29.6922 19.4654 28.8755C22.4998 28.0589 25.1483 26.1968 26.9435 23.6177C28.7388 21.0387 29.5654 17.9085 29.2776 14.7793C28.9899 11.6502 27.6062 8.72321 25.3707 6.51485C23.1352 4.30648 20.1915 2.95864 17.0591 2.70911C13.9267 2.45959 10.8068 3.32443 8.24984 5.15104C5.69291 6.97764 3.86329 9.64864 3.08377 12.6928C2.30425 15.7369 2.62494 18.9585 3.98925 21.7893Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.1201 12C12.4336 11.1089 13.0523 10.3575 13.8667 9.87887C14.6811 9.40024 15.6386 9.22528 16.5697 9.38498C17.5007 9.54467 18.3452 10.0287 18.9536 10.7514C19.5619 11.4741 19.8949 12.3887 19.8935 13.3334C19.8935 16 15.8935 17.3334 15.8935 17.3334M16.0001 22.6667H16.0135" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Other / Not sure</div>
          </button>
        </div>
        <div class="question-wrapper q2 type-b">
          <button data-index="1" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M26.7385 21.3161H5.2612M23.9999 6.66675C24.7071 6.66675 25.3854 6.9477 25.8855 7.4478C26.3856 7.94789 26.6665 8.62617 26.6665 9.33341V20.7014C26.6664 21.1167 26.7631 21.5262 26.9492 21.8974L28.3732 24.7334C28.476 24.9374 28.5247 25.1644 28.5145 25.3926C28.5044 25.6208 28.4358 25.8425 28.3154 26.0366C28.1949 26.2307 28.0266 26.3905 27.8266 26.5009C27.6266 26.6112 27.4016 26.6683 27.1732 26.6667H4.82653C4.59812 26.6683 4.37312 26.6112 4.17312 26.5009C3.97312 26.3905 3.80483 26.2307 3.68437 26.0366C3.56391 25.8425 3.49533 25.6208 3.4852 25.3926C3.47507 25.1644 3.52374 24.9374 3.62653 24.7334L5.05053 21.8974C5.23659 21.5262 5.33338 21.1167 5.3332 20.7014V9.33341C5.3332 8.62617 5.61415 7.94789 6.11425 7.4478C6.61434 6.9477 7.29262 6.66675 7.99987 6.66675H23.9999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Endpoint management</div>
          </button>
          <button data-index="2" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 14.6667H8C8.70724 14.6667 9.38552 14.9477 9.88562 15.4478C10.3857 15.9479 10.6667 16.6262 10.6667 17.3334V21.3334C10.6667 22.0407 10.3857 22.7189 9.88562 23.219C9.38552 23.7191 8.70724 24.0001 8 24.0001H6.66667C5.95942 24.0001 5.28115 23.7191 4.78105 23.219C4.28095 22.7189 4 22.0407 4 21.3334V14.6667ZM4 14.6667C4 13.0909 4.31039 11.5305 4.91345 10.0745C5.5165 8.61864 6.40042 7.29577 7.51472 6.18147C8.62902 5.06716 9.95189 4.18325 11.4078 3.58019C12.8637 2.97714 14.4241 2.66675 16 2.66675C17.5759 2.66675 19.1363 2.97714 20.5922 3.58019C22.0481 4.18325 23.371 5.06716 24.4853 6.18147C25.5996 7.29577 26.4835 8.61864 27.0866 10.0745C27.6896 11.5305 28 13.0909 28 14.6667M28 14.6667V21.3334C28 22.0407 27.719 22.7189 27.219 23.219C26.7189 23.7191 26.0406 24.0001 25.3333 24.0001H24C23.2928 24.0001 22.6145 23.7191 22.1144 23.219C21.6143 22.7189 21.3333 22.0407 21.3333 21.3334V17.3334C21.3333 16.6262 21.6143 15.9479 22.1144 15.4478C22.6145 14.9477 23.2928 14.6667 24 14.6667H28Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28 21.3335V24.0002C28 25.4147 27.4381 26.7712 26.4379 27.7714C25.4377 28.7716 24.0812 29.3335 22.6667 29.3335H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Help desk <span class="desktop-break"></span>& ticketing</div>
          </button>
          <button data-index="3" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M26.6668 17.3333C26.6668 23.9999 22.0002 27.3333 16.4535 29.2666C16.163 29.365 15.8475 29.3603 15.5602 29.2533C10.0002 27.3333 5.3335 23.9999 5.3335 17.3333V7.99995C5.3335 7.64633 5.47397 7.30719 5.72402 7.05714C5.97407 6.80709 6.31321 6.66662 6.66683 6.66662C9.3335 6.66662 12.6668 5.06662 14.9868 3.03995C15.2693 2.79861 15.6286 2.66602 16.0002 2.66602C16.3717 2.66602 16.731 2.79861 17.0135 3.03995C19.3468 5.07995 22.6668 6.66662 25.3335 6.66662C25.6871 6.66662 26.0263 6.80709 26.2763 7.05714C26.5264 7.30719 26.6668 7.64633 26.6668 7.99995V17.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15.9999L14.6667 18.6666L20 13.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Patching</div>
          </button>
          <button data-index="4" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15.9998 29.3334C23.3636 29.3334 29.3332 23.3639 29.3332 16.0001C29.3332 8.63628 23.3636 2.66675 15.9998 2.66675C8.63604 2.66675 2.6665 8.63628 2.6665 16.0001C2.6665 23.3639 8.63604 29.3334 15.9998 29.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.6665 16.0001H29.3332M15.9998 2.66675C12.5761 6.26162 10.6665 11.0357 10.6665 16.0001C10.6665 20.9644 12.5761 25.7385 15.9998 29.3334C19.4235 25.7385 21.3332 20.9644 21.3332 16.0001C21.3332 11.0357 19.4235 6.26162 15.9998 2.66675Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Remote <span class="desktop-break"></span>access</div>
          </button>
          <button data-index="5" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M9.33317 24.0001V16.0001C9.33317 14.232 10.0355 12.5363 11.2858 11.286C12.536 10.0358 14.2317 9.33341 15.9998 9.33341C17.7679 9.33341 19.4636 10.0358 20.7139 11.286C21.9641 12.5363 22.6665 14.232 22.6665 16.0001V24.0001M9.33317 24.0001H22.6665M9.33317 24.0001C8.62593 24.0001 7.94765 24.281 7.44755 24.7811C6.94746 25.2812 6.6665 25.9595 6.6665 26.6667V28.0001C6.6665 28.3537 6.80698 28.6928 7.05703 28.9429C7.30708 29.1929 7.64621 29.3334 7.99984 29.3334H23.9998C24.3535 29.3334 24.6926 29.1929 24.9426 28.9429C25.1927 28.6928 25.3332 28.3537 25.3332 28.0001V26.6667C25.3332 25.9595 25.0522 25.2812 24.5521 24.7811C24.052 24.281 23.3737 24.0001 22.6665 24.0001M27.9998 16.0001H29.3332M24.6665 6.00008L23.9998 6.66675M2.6665 16.0001H3.99984M15.9998 2.66675V4.00008M6.57184 6.57208L7.5145 7.51475M15.9998 16.0001V24.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Threat <span class="desktop-break"></span>detection</div>
          </button>
          <button data-index="6" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M5.33349 18.6666C5.08117 18.6674 4.83379 18.5967 4.62009 18.4625C4.40639 18.3284 4.23513 18.1364 4.12622 17.9088C4.01731 17.6812 3.97521 17.4273 4.00482 17.1768C4.03443 16.9262 4.13453 16.6892 4.29349 16.4932L17.4935 2.89323C17.5925 2.77893 17.7274 2.7017 17.8761 2.6742C18.0248 2.6467 18.1785 2.67058 18.3118 2.7419C18.4451 2.81322 18.5503 2.92775 18.6099 3.0667C18.6696 3.20565 18.6803 3.36076 18.6402 3.50656L16.0802 11.5332C16.0047 11.7353 15.9793 11.9526 16.0063 12.1666C16.0332 12.3806 16.1117 12.5848 16.2349 12.7618C16.3582 12.9388 16.5225 13.0832 16.7139 13.1828C16.9052 13.2823 17.1178 13.3339 17.3335 13.3332H26.6668C26.9191 13.3324 27.1665 13.4031 27.3802 13.5373C27.5939 13.6714 27.7652 13.8634 27.8741 14.091C27.983 14.3186 28.0251 14.5724 27.9955 14.823C27.9659 15.0736 27.8658 15.3106 27.7068 15.5066L14.5068 29.1066C14.4078 29.2208 14.2729 29.2981 14.1242 29.3256C13.9755 29.3531 13.8219 29.3292 13.6885 29.2579C13.5552 29.1866 13.45 29.072 13.3904 28.9331C13.3307 28.7941 13.32 28.639 13.3602 28.4932L15.9202 20.4666C15.9956 20.2645 16.021 20.0472 15.994 19.8332C15.9671 19.6192 15.8886 19.415 15.7654 19.238C15.6421 19.061 15.4778 18.9165 15.2865 18.817C15.0951 18.7175 14.8825 18.6659 14.6668 18.6666H5.33349Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Automated remediation</div>
          </button>
          <button data-index="7" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15.9998 17.3334V28.0001M5.33313 19.8654C4.34252 18.8533 3.59523 17.6291 3.14785 16.2854C2.70047 14.9417 2.56474 13.5138 2.75095 12.1098C2.93715 10.7059 3.44041 9.36278 4.22259 8.18215C5.00478 7.00153 6.04538 6.0144 7.26558 5.29551C8.48578 4.57662 9.85357 4.14485 11.2654 4.03288C12.6771 3.92091 14.0959 4.13169 15.4142 4.64925C16.7324 5.16682 17.9156 5.97759 18.8741 7.02016C19.8326 8.06273 20.5413 9.30975 20.9465 10.6668H23.3331C24.6205 10.6666 25.8737 11.0805 26.9078 11.8474C27.9418 12.6142 28.7018 13.6933 29.0755 14.9252C29.4492 16.1571 29.4167 17.4766 28.9829 18.6886C28.5491 19.9007 27.737 20.9411 26.6665 21.6561" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6665 22.6668L15.9998 17.3335L21.3332 22.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Backup <span class="desktop-break"></span>& recovery</div>
          </button>
          <button data-index="8" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M26.6663 6.66667C27.3736 6.66667 28.0519 6.94762 28.552 7.44772C29.0521 7.94781 29.333 8.62609 29.333 9.33333V18.6667C29.333 19.3739 29.0521 20.0522 28.552 20.5523C28.0519 21.0524 27.3736 21.3333 26.6663 21.3333H11.9997C11.2924 21.3333 10.6142 21.0524 10.1141 20.5523C9.61396 20.0522 9.33301 19.3739 9.33301 18.6667V6.66667C9.33301 5.95942 9.61396 5.28115 10.1141 4.78105C10.6142 4.28095 11.2924 4 11.9997 4H15.333C15.6435 4 15.9497 4.07229 16.2274 4.21115C16.5051 4.35 16.7467 4.55161 16.933 4.8L17.733 5.86667C17.9193 6.11506 18.1609 6.31667 18.4386 6.45552C18.7163 6.59438 19.0225 6.66667 19.333 6.66667H26.6663Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.99985 11.0239C3.5933 11.2586 3.25591 11.5965 3.02179 12.0034C2.78768 12.4103 2.66512 12.8718 2.66652 13.3413V25.3333C2.66652 26.0405 2.94747 26.7188 3.44756 27.2189C3.94766 27.719 4.62594 27.9999 5.33318 27.9999H19.9998C20.4679 27.9999 20.9278 27.8767 21.3331 27.6426C21.7385 27.4086 22.0751 27.072 22.3092 26.6666" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Asset management</div>
          </button>
          <button data-index="9" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M3.98925 21.7893C4.1853 22.2838 4.22895 22.8257 4.11458 23.3453L2.69458 27.7319C2.64883 27.9544 2.66066 28.1848 2.72895 28.4014C2.79724 28.6181 2.91973 28.8136 3.0848 28.9696C3.24988 29.1256 3.45206 29.2368 3.67218 29.2928C3.8923 29.3487 4.12306 29.3475 4.34258 29.2893L8.89325 27.9586C9.38353 27.8613 9.89129 27.9038 10.3586 28.0813C13.2058 29.4109 16.4311 29.6922 19.4654 28.8755C22.4998 28.0589 25.1483 26.1968 26.9435 23.6177C28.7388 21.0387 29.5654 17.9085 29.2776 14.7793C28.9899 11.6502 27.6062 8.72321 25.3707 6.51485C23.1352 4.30648 20.1915 2.95864 17.0591 2.70911C13.9267 2.45959 10.8068 3.32443 8.24984 5.15104C5.69291 6.97764 3.86329 9.64864 3.08377 12.6928C2.30425 15.7369 2.62494 18.9585 3.98925 21.7893Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.1201 12C12.4336 11.1089 13.0523 10.3575 13.8667 9.87887C14.6811 9.40024 15.6386 9.22528 16.5697 9.38498C17.5007 9.54467 18.3452 10.0287 18.9536 10.7514C19.5619 11.4741 19.8949 12.3887 19.8935 13.3334C19.8935 16 15.8935 17.3334 15.8935 17.3334M16.0001 22.6667H16.0135" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Other / Not sure</div>
          </button>
        </div>
        <div class="question-wrapper q2 type-c">
          <button data-index="1" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M21.3332 28V25.3333C21.3332 23.9188 20.7713 22.5623 19.7711 21.5621C18.7709 20.5619 17.4143 20 15.9998 20H7.99984C6.58535 20 5.22879 20.5619 4.2286 21.5621C3.22841 22.5623 2.6665 23.9188 2.6665 25.3333V28M21.3332 4.17065C22.4768 4.46715 23.4897 5.13501 24.2127 6.0694C24.9358 7.0038 25.3281 8.15184 25.3281 9.33332C25.3281 10.5148 24.9358 11.6628 24.2127 12.5972C23.4897 13.5316 22.4768 14.1995 21.3332 14.496M29.3332 28V25.3333C29.3323 24.1516 28.939 23.0037 28.215 22.0697C27.491 21.1358 26.4773 20.4687 25.3332 20.1733" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9998 14.6667C14.9454 14.6667 17.3332 12.2789 17.3332 9.33333C17.3332 6.38781 14.9454 4 11.9998 4C9.05432 4 6.6665 6.38781 6.6665 9.33333C6.6665 12.2789 9.05432 14.6667 11.9998 14.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Client management</div>
          </button>
          <button data-index="2" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <g clip-path="url(#clip0_24024_1213)">
                <path d="M12.4878 7.25041L13.8212 9.55981M20.4878 21.1068L21.8212 23.4162M16.4878 14.1786L17.8212 16.488M2.4528 19.2025C3.37154 18.6721 4.46336 18.5284 5.48807 18.8029C6.51279 19.0775 7.38647 19.7479 7.9169 20.6666C8.44733 21.5854 8.59107 22.6772 8.3165 23.7019C8.04193 24.7266 7.37154 25.6003 6.4528 26.1307L7.78613 28.4401C8.13975 29.0526 8.7222 29.4996 9.40535 29.6826C10.0885 29.8657 10.8164 29.7698 11.4289 29.4162L29.9041 18.7495C30.5166 18.3959 30.9635 17.8135 31.1465 17.1303C31.3296 16.4472 31.2338 15.7193 30.8801 15.1068L29.5468 12.7974C28.6281 13.3278 27.5362 13.4716 26.5115 13.197C25.4868 12.9224 24.6131 12.252 24.0827 11.3333C23.5523 10.4146 23.4085 9.32275 23.6831 8.29803C23.9577 7.27332 24.6281 6.39964 25.5468 5.86921L24.2135 3.55981C23.8599 2.94732 23.2774 2.50039 22.5943 2.31734C21.9111 2.13429 21.1832 2.23012 20.5707 2.58374L2.09553 13.2504C1.48304 13.604 1.03611 14.1865 0.853065 14.8696C0.670017 15.5528 0.765844 16.2806 1.11947 16.8931L2.4528 19.2025Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_24024_1213">
                  <rect width="32" height="32" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="text">Ticketing</div>
          </button>
          <button data-index="3" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M24.0003 10.6666V7.99992C24.0003 7.29267 23.7194 6.6144 23.2193 6.1143C22.7192 5.6142 22.0409 5.33325 21.3337 5.33325H5.33366C4.62641 5.33325 3.94814 5.6142 3.44804 6.1143C2.94794 6.6144 2.66699 7.29267 2.66699 7.99992V17.3333C2.66699 18.0405 2.94794 18.7188 3.44804 19.2189C3.94814 19.719 4.62641 19.9999 5.33366 19.9999H16.0003M13.3337 25.3333V20.0533V24.2533M9.33366 25.3333H16.0003" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26.6673 16H24.0007C22.5279 16 21.334 17.1939 21.334 18.6667V26.6667C21.334 28.1394 22.5279 29.3333 24.0007 29.3333H26.6673C28.1401 29.3333 29.334 28.1394 29.334 26.6667V18.6667C29.334 17.1939 28.1401 16 26.6673 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Remote access</div>
          </button>
          <button data-index="4" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M27.9998 27.9999L22.2665 22.2666M14.6665 9.33325V14.6666M14.6665 19.9999H14.6798" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Risk detection <span class="desktop-break"></span>& remediation</div>
          </button>
          <button data-index="5" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M26.6663 17.3333C26.6663 23.9999 21.9997 27.3333 16.453 29.2666C16.1626 29.365 15.8471 29.3603 15.5597 29.2533C9.99967 27.3333 5.33301 23.9999 5.33301 17.3333V7.99995C5.33301 7.64633 5.47348 7.30719 5.72353 7.05714C5.97358 6.80709 6.31272 6.66662 6.66634 6.66662C9.33301 6.66662 12.6663 5.06662 14.9863 3.03995C15.2688 2.79861 15.6281 2.66602 15.9997 2.66602C16.3712 2.66602 16.7305 2.79861 17.013 3.03995C19.3463 5.07995 22.6663 6.66662 25.333 6.66662C25.6866 6.66662 26.0258 6.80709 26.2758 7.05714C26.5259 7.30719 26.6663 7.64633 26.6663 7.99995V17.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15.9999L14.6667 18.6666L20 13.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Patching</div>
          </button>
          <button data-index="6" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 9.33333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H9.33333M22.6667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V9.33333M28 22.6667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H22.6667M9.33333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V22.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.0003 17.3334C16.7367 17.3334 17.3337 16.7365 17.3337 16.0001C17.3337 15.2637 16.7367 14.6667 16.0003 14.6667C15.2639 14.6667 14.667 15.2637 14.667 16.0001C14.667 16.7365 15.2639 17.3334 16.0003 17.3334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.259 16.4401C25.3586 16.1552 25.3586 15.845 25.259 15.5601C24.5083 13.7207 23.2268 12.1465 21.5778 11.0385C19.9288 9.9304 17.9871 9.33862 16.0004 9.33862C14.0136 9.33862 12.0719 9.9304 10.4229 11.0385C8.77394 12.1465 7.49237 13.7207 6.74168 15.5601C6.64209 15.845 6.64209 16.1552 6.74168 16.4401C7.49237 18.2796 8.77394 19.8537 10.4229 20.9618C12.0719 22.0698 14.0136 22.6616 16.0004 22.6616C17.9871 22.6616 19.9288 22.0698 21.5778 20.9618C23.2268 19.8537 24.5083 18.2796 25.259 16.4401Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Device monitoring</div>
          </button>
          <button data-index="7" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15.9998 17.3334V28.0001M5.33313 19.8654C4.34252 18.8533 3.59523 17.6291 3.14785 16.2854C2.70047 14.9417 2.56474 13.5138 2.75095 12.1098C2.93715 10.7059 3.44041 9.36278 4.22259 8.18215C5.00478 7.00153 6.04538 6.0144 7.26558 5.29551C8.48578 4.57662 9.85357 4.14485 11.2654 4.03288C12.6771 3.92091 14.0959 4.13169 15.4142 4.64925C16.7324 5.16682 17.9156 5.97759 18.8741 7.02016C19.8326 8.06273 20.5413 9.30975 20.9465 10.6668H23.3331C24.6205 10.6666 25.8737 11.0805 26.9078 11.8474C27.9418 12.6142 28.7018 13.6933 29.0755 14.9252C29.4492 16.1571 29.4167 17.4766 28.9829 18.6886C28.5491 19.9007 27.737 20.9411 26.6665 21.6561" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6665 22.6668L15.9998 17.3335L21.3332 22.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Backup <span class="desktop-break"></span>& recovery</div>
          </button>
          <button data-index="8" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M14.6667 8C18.7218 8.10446 22.6852 6.78334 25.8667 4.26667C26.0648 4.1181 26.3003 4.02763 26.5469 4.00539C26.7935 3.98315 27.0415 4.03003 27.263 4.14076C27.4844 4.2515 27.6707 4.42172 27.8009 4.63236C27.931 4.84299 28 5.08572 28 5.33333V21.3333C28 21.5809 27.931 21.8237 27.8009 22.0343C27.6707 22.2449 27.4844 22.4152 27.263 22.5259C27.0415 22.6366 26.7935 22.6835 26.5469 22.6613C26.3003 22.639 26.0648 22.5486 25.8667 22.4C22.6852 19.8833 18.7218 18.5622 14.6667 18.6667H6.66667C5.95942 18.6667 5.28115 18.3857 4.78105 17.8856C4.28095 17.3855 4 16.7072 4 16V10.6667C4 9.95942 4.28095 9.28115 4.78105 8.78105C5.28115 8.28095 5.95942 8 6.66667 8H14.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 18.6667C8 22.1286 9.12285 25.4971 11.2 28.2667C11.6243 28.8325 12.2561 29.2065 12.9562 29.3065C13.6563 29.4066 14.3675 29.2243 14.9333 28.8C15.4991 28.3757 15.8732 27.7439 15.9732 27.0438C16.0732 26.3437 15.891 25.6325 15.4667 25.0667C14.0819 23.2203 13.3333 20.9746 13.3333 18.6667M10.6667 8V18.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Sales <span class="desktop-break"></span>& marketing</div>
          </button>
          <button data-index="9" class="spz3002_v">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M3.98925 21.7893C4.1853 22.2838 4.22895 22.8257 4.11458 23.3453L2.69458 27.7319C2.64883 27.9544 2.66066 28.1848 2.72895 28.4014C2.79724 28.6181 2.91973 28.8136 3.0848 28.9696C3.24988 29.1256 3.45206 29.2368 3.67218 29.2928C3.8923 29.3487 4.12306 29.3475 4.34258 29.2893L8.89325 27.9586C9.38353 27.8613 9.89129 27.9038 10.3586 28.0813C13.2058 29.4109 16.4311 29.6922 19.4654 28.8755C22.4998 28.0589 25.1483 26.1968 26.9435 23.6177C28.7388 21.0387 29.5654 17.9085 29.2776 14.7793C28.9899 11.6502 27.6062 8.72321 25.3707 6.51485C23.1352 4.30648 20.1915 2.95864 17.0591 2.70911C13.9267 2.45959 10.8068 3.32443 8.24984 5.15104C5.69291 6.97764 3.86329 9.64864 3.08377 12.6928C2.30425 15.7369 2.62494 18.9585 3.98925 21.7893Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.1201 12C12.4336 11.1089 13.0523 10.3575 13.8667 9.87887C14.6811 9.40024 15.6386 9.22528 16.5697 9.38498C17.5007 9.54467 18.3452 10.0287 18.9536 10.7514C19.5619 11.4741 19.8949 12.3887 19.8935 13.3334C19.8935 16 15.8935 17.3334 15.8935 17.3334M16.0001 22.6667H16.0135" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text">Other / Not sure</div>
          </button>
        </div>
        <button class="next_cta spz3002_v">Next</button>
      `)
      // check answer
      if (sessionStorage.spz3002CheckBoxValueQ1 && !sessionStorage.spz3002CheckBoxValueQ2 && !sessionStorage.spz3002CheckBoxValueQ3) {
        // move to step 2
        /*
        document.querySelector('.spz_3002_v .form-container').classList.remove('step-1')
        document.querySelector('.spz_3002_v .form-container').classList.add('step-2')
        document.querySelector('.spz_3002_v .form-container .form-container__form .description').textContent="How can we help?"
        document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[parseInt(JSON.parse(sessionStorage.spz3002CheckBoxValueQ1)[0]) - 1].style.display="flex"
        */
      }
      if (sessionStorage.spz3002CheckBoxValueQ1 && sessionStorage.spz3002CheckBoxValueQ2 && !sessionStorage.spz3002CheckBoxValueQ3) {
        // move to step 2
        /*
        document.querySelector('.spz_3002_v .form-container').classList.remove('step-1')
        document.querySelector('.spz_3002_v .form-container').classList.add('step-2')
        
        document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[parseInt(JSON.parse(sessionStorage.spz3002CheckBoxValueQ1)[0]) - 1].style.display="flex";
        */
      }
      // click listener
      document.querySelector('.spz_3002_v .form-container .form-container__form .question-wrapper.q1').addEventListener("click", function (e) {
        if (e.target.closest("button") && !e.target.closest("button").classList.contains("active")) {
          if (e.target.closest(".question-wrapper.q1").querySelector("button.active")) {
            checkBoxValueQ1.remove("" + e.target.closest(".question-wrapper.q1").querySelector("button.active").getAttribute("data-index"));
            e.target.closest(".question-wrapper.q1").querySelector("button.active").classList.remove("active");
          }
          e.target.closest("button").classList.add("active");
          checkBoxValueQ1.push("" + e.target.closest("button").getAttribute("data-index"))
          if (typeof _sz === 'object') {
            _sz.push(["event", "SPZ 3002 Qualifying Questions Option Click", "Step 1", "" + e.target.closest("button").querySelector(".text").textContent]);
          }
          // move to step 2

          if (sessionStorage.Q1Preselected && sessionStorage.Q1Preselected == checkBoxValueQ1[0]) {
            if (sessionStorage.spz3002CheckBoxValueQ2 !== "no value") {
              for (let i = 0; i < document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[parseInt(JSON.parse(sessionStorage.spz3002CheckBoxValueQ1)[0] - 1)].querySelectorAll('button').length; i++) {
                if (JSON.parse(sessionStorage.spz3002CheckBoxValueQ2).includes("" + parseInt(i + 1))) {
                  checkBoxValueQ2.push("" + parseInt(i + 1))
                  document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[parseInt(sessionStorage.Q1Preselected - 1)].querySelectorAll('button')[i].classList.add("active");
                  if (typeof _sz === 'object') {
                    _sz.push(["event", "SPZ 3002 Qualifying Questions Option Click", "Step 2", "" + document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[parseInt(sessionStorage.Q1Preselected - 1)].querySelectorAll('button')[i].querySelector('.text').textContent]);
                  }
                }
              }
            }
          }
          sessionStorage.spz3002CheckBoxValueQ1 = JSON.stringify(checkBoxValueQ1);

          document.querySelector('.spz_3002_v .form-container').classList.remove('step-1')
          document.querySelector('.spz_3002_v .form-container').classList.add('step-2')
          document.querySelector('.spz_3002_v .form-container .form-container__form .description').textContent = "How can we help?"
          document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[parseInt(e.target.closest("button").getAttribute("data-index")) - 1].style.display = "flex"
        }
      })
      for (let i = 0; i < document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2').length; i++) {
        document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[i].addEventListener("click", function (e) {
          if (e.target.closest("button")) {
            if (typeof _sz === 'object') {
              _sz.push(["event", "SPZ 3002 Qualifying Questions Option Click", "Step 2", "" + e.target.closest("button").querySelector(".text").textContent]);
            }
            if (e.target.closest("button").classList.contains("active")) {
              checkBoxValueQ2.remove("" + e.target.closest("button").getAttribute("data-index"))
            } else {
              checkBoxValueQ2.push("" + e.target.closest("button").getAttribute("data-index"))
            }
            e.target.closest("button").classList.toggle("active");
          }
        })
      }
      document.querySelector('.spz_3002_v .form-container .next_cta').addEventListener("click", function (e) {
        if (typeof _sz === 'object') {
          _sz.push(["event", "SPZ 3002 Qualifying Questions CTA Click", "Step 2", "Next"]);
        }
        if (checkBoxValueQ2.length) {
          sessionStorage.spz3002CheckBoxValueQ2 = JSON.stringify(checkBoxValueQ2);
        } else {
          sessionStorage.spz3002CheckBoxValueQ2 = "no value"
        }
        sessionStorage.Q1Preselected = checkBoxValueQ1[0];
        // move to step 3
        document.querySelector('.spz_3002_v .form-container').classList.remove('step-1', 'step-2')
        document.querySelector('.spz_3002_v .form-container').classList.add('step-3');
        for (let i = 0; i < document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2').length; i++) {
          document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[i].removeAttribute("style")
        }
        // cro 2

        document.querySelector('.spz_3002_v .form-container form [name=CWS_Cr02__c]').value = "Step 1: " + document.querySelector('.spz_3002_v .form-container .form-container__form .question-wrapper.q1 button[data-index="' + JSON.parse(sessionStorage.spz3002CheckBoxValueQ1)[0] + '"] .text').textContent;
        document.querySelector('.spz_3002_v .form-container form [name=CWS_Cr02__c]').value += ". Step 2:"
        for (let i = 0; i < JSON.parse(sessionStorage.spz3002CheckBoxValueQ2).length; i++) {
          document.querySelector('.spz_3002_v .form-container form [name=CWS_Cr02__c]').value += " " + document.querySelectorAll('.spz_3002_v .form-container .form-container__form .question-wrapper.q2')[JSON.parse(sessionStorage.spz3002CheckBoxValueQ1)[0] - 1].querySelector('button[data-index="' + JSON.parse(sessionStorage.spz3002CheckBoxValueQ2)[i] + '"]').querySelector('.text').textContent + ",";
        }
        document.querySelector('.spz_3002_v .form-container form [name=CWS_Cr02__c]');
        document.querySelector('.spz_3002_v .form-container form [name=CWS_Cr02__c]').value = document.querySelector('.spz_3002_v .form-container form [name=CWS_Cr02__c]').value.replace(/,([^,]*)$/, '.$1');
      })


      // form modification
      const formInterval = setInterval(function () {
        if (typeof MktoForms2 !== 'undefined') {
          MktoForms2.whenReady(function (form) {
            clearInterval(formInterval)
            // move to step 3 if submitted exist
            if (sessionStorage.spz3002CheckBoxValueQ3) {
              document.querySelector('.spz_3002_v .form-container').classList.remove('step-1', 'step-2')
              document.querySelector('.spz_3002_v .form-container').classList.add('step-3');
            }
            if (document.querySelector('.spz_3002_v .form-container .form-container__form .lds-dual-ring')) {
              document.querySelector('.spz_3002_v .form-container .form-container__form .lds-dual-ring').remove();
            }
            document.querySelector('.spz_3002_v .form-container').classList.remove('hide')
            const allInput = document.querySelectorAll('.spz_3002_v .form-container form input[type="text"],.spz_3002_v .form-container form input[type="tel"],.spz_3002_v .form-container form input[type="email"],.spz_3002_v .form-container form select');
            for (let i = 0; i < allInput.length; i++) {
              // add class
              if (allInput[i].getAttribute("id") !== "Email") {
                allInput[i].closest(".mktoFormRow").classList.add("width50");
              }
              // adding arrow and label to select
              if (allInput[i].tagName === "SELECT" && !allInput[i].closest(".mktoFormRow").querySelector(".arrow")) {
                allInput[i].insertAdjacentHTML("beforebegin", `<label class="costum-label" for="${allInput[i].getAttribute("id")}">${allInput[i].querySelector("option:first-child").textContent}</label>`);
                allInput[i].insertAdjacentHTML("afterend", `<div class="arrow"></div>`);
              }
              // change label
              if (allInput[i].tagName !== "SELECT") {
                allInput[i].closest(".mktoFormRow").querySelector("label").textContent = allInput[i].getAttribute("placeholder");
              }

            }
            // move position
            document.querySelector('.spz_3002_v .form-container form #FirstName').closest(".mktoFormRow").insertAdjacentElement('beforebegin', document.querySelector('.spz_3002_v .form-container form #Email').closest(".mktoFormRow"));
            document.querySelector('.spz_3002_v .form-container form #emailOptIn').closest(".mktoFormRow").insertAdjacentElement('afterend', document.querySelector('.spz_3002_v .form-container form .mktoButtonRow'));


            // change privacy and policy 
            document.querySelector('.spz_3002_v .form-container form .mktoHtmlText.mktoHasWidth').innerHTML = document.querySelector('.spz_3002_v .form-container form .mktoHtmlText.mktoHasWidth').innerHTML.replace(/&nbsp;/g, " ");
            document.querySelector('.spz_3002_v .form-container form.mktoForm .mktoButtonWrap.mktoSimple .mktoButton').classList.add('spz3002_v')
            document.querySelector('.spz_3002_v .form-container form.mktoForm .mktoButtonWrap.mktoSimple .mktoButton').addEventListener("click", function (e) {
              if (typeof _sz === 'object') {
                _sz.push(["event", "SPZ 3002 Qualifying Questions CTA Click", "Step 3", "Submit"]);
              }
            })
            // on submit success
            form.onSuccess(function (values, followUpUrl) {
              sessionStorage.spz3002CheckBoxValueQ3 = "submitted";
            });

          });
        }
      }, 20)
    }
  }, 20)
  setTimeout(function () {
    clearInterval(bodyInterval3002)
  }, 7000)
})();
