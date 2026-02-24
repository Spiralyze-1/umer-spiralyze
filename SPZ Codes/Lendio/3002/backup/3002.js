(function () {
  const bodyInterval3001 = setInterval(function () {
    if (document.body &&
      !document.querySelector('.spz_3002_v1') &&
      (
        document.querySelector('.main-content-div') ||
        document.querySelector('.lp-header-with-cta')
      )) {
      clearInterval(bodyInterval3001)
      document.querySelector('body').classList.add("spz_3002_v1")
      let formInterval;
      var quoteSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32" fill="none">
        <g opacity="0.9">
          <path d="M20.2871 32V15.6164L29.2476 0H37L30.1034 14.6301H37V32H20.2871ZM0 32V15.6164L8.80952 0H16.7633L9.71565 14.6301H16.7633V32H0Z" fill="white"/>
        </g>
      </svg>`;

      let sectionSelector;
      if (window.location.pathname.includes('/sba-loans') || window.location.pathname.includes('/partners-sf') || window.location.pathname.includes('/small-business-financing') || window.location.pathname.includes('/partners-lf')) {
        sectionSelector = document.querySelector('.spz_3002_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3002_v1 .main-content-div .form-div');
      } else if (window.location.pathname.includes('/lp/direct/search-small-business-loans')) {
        document.querySelector('body').classList.add("spz_3001_bussiness_loans");
        sectionSelector = document.querySelector('.spz_3002_v1 .lp-header-with-cta');
        formSelector = document.querySelector('.spz_3002_v1 .lp-pwf-cont .application-form-wrap-lp-spec');
      } else if (window.location.pathname.includes('/simple-a')) {
        document.querySelector('body').classList.add("spz_3001_simple_a");
        sectionSelector = document.querySelector('.spz_3002_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3002_v1 .main-content-div .form-div');
      }
      let waitforForm = setInterval(function () {
        if (sectionSelector) {
          clearInterval(waitforForm);
          newSection();
          formEdits();
        }
      }, 100)
      function newSection() {
        sectionSelector.insertAdjacentHTML("afterend", `
          <div class="form_section">
            <div class="auto_container">
              <div class="form_inner">
                <div class="form_heading">
                  <h2>See how much your business is eligible for.</h2>
                  <p>See options from 75+ lenders. No hidden fees.</p>
                </div>
                <div class="spz_form">
  
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial_section">
            <div class="auto_container">
              <div class="testimonial_inner">
                <div class="testimonial_data">
                  <div class="data_left">
                    <figure>
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1763730993/lendio/3001/reviews-v1_1.svg" alt="Trustpilot">
                    </figure>
                  </div>
                  <div class="data_right">
                    <span>${quoteSvg}</span>
                    <p>The process was amazing. They went at my pace. Funds were in my account within two days.</p>
                    <div class="author">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1764601213/lendio/3001/frame_1350681208.svg" alt="Art Hannemann">
                      <span>
                        <strong>Art Hannemann,</strong>
                        Owner at Seven Brothers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `)
        window.dispatchEvent(new Event('resize'));
        //form
        document.querySelector('.spz_form').insertAdjacentElement("afterbegin", formSelector);
      }

      function formEdits() {
        formInterval = setInterval(function () {
          if (document.querySelector('lendio-start')) {
            if (document.querySelector('lendio-start').shadowRoot) {
              clearInterval(formInterval);
              const shadowRoot = document.querySelector('lendio-start').shadowRoot;
              const style = document.createElement('style');
              style.textContent = `
                h4,
                h5 {
                  display: none;
                }

                h6 {
                  color: #171717;
                  font-family: proxima-nova, sans-serif;
                  font-size: 28px;
                  font-weight: 600;
                  line-height: 24px;
                  margin-top: 28px;
                  margin-bottom: 33px;
                  text-align: center;
                }

                #pwf-1 {
                  max-width: 100%;
                }

                #pwf-1:has(.carousel-item.slide-1.active) .carousel-inner {
                  --bar-scale: calc(1 / 11);
                }

                #pwf-1:has(.carousel-item.slide-2.active) .carousel-inner {
                  --bar-scale: calc(2 / 11);
                }

                #pwf-1:has(.carousel-item.slide-3.active) .carousel-inner {
                  --bar-scale: calc(3 / 11);
                }

                #pwf-1:has(.carousel-item.slide-4.active) .carousel-inner {
                  --bar-scale: calc(4 / 11);
                }

                #pwf-1:has(.carousel-item.slide-5.active) .carousel-inner {
                  --bar-scale: calc(5 / 11);
                }

                #pwf-1:has(.carousel-item.slide-6.active) .carousel-inner {
                  --bar-scale: calc(6 / 11);
                }

                #pwf-1:has(.carousel-item.slide-7.active) .carousel-inner {
                  --bar-scale: calc(7 / 11);
                }

                #pwf-1:has(.carousel-item.slide-8.active) .carousel-inner {
                  --bar-scale: calc(8 / 11);
                }

                #pwf-1:has(.carousel-item.slide-9.active) .carousel-inner {
                  --bar-scale: calc(9 / 11);
                }

                #pwf-1:has(.carousel-item.slide-10.active) .carousel-inner {
                  --bar-scale: calc(10 / 11);
                }

                #pwf-1:has(.carousel-item.slide-11.active) .carousel-inner {
                  --bar-scale: calc(11 / 11);
                }

                .steps {
                  width: calc(100% + 1px);
                  height: 3px;
                  border-radius: 999px;
                  // background: rgba(229, 224, 221, 0.40);
                  position: relative;
                  overflow: hidden;
                  margin-left: -1px;
                  position: absolute;
                  left: 0;
                  top: 0;
                }

                .steps::before {
                  content: "";
                  background: #192526;
                  width: 100%;
                  top: 0;
                  left: 0;
                  height: 100%;
                  position: absolute;
                  transform: scaleX(var(--bar-scale, 0));
                  transform-origin: left;
                  -webkit-transform: scaleX(var(--bar-scale, 0));
                  -webkit-transform-origin: left;
                  will-change: transform;
                }

                .spz-wrapper {
                  position: relative;
                }

                #pwf-1 select,
                #pwf-1 input:not([type="checkbox"]) {
                  border-radius: 999px;
                  outline: 1px solid #E2DBD5;
                  background: #FEFDFD;
                  padding: 19px 24px 0;
                  height: 54px;
                  color: #121111;
                  font-family: proxima-nova, sans-serif;
                  font-size: 16px;
                  font-weight: 400;
                  line-height: 20.8px;
                  border: 0;
                  box-shadow: none;
                }

                #pwf-1 select {
                  padding-right: 40px;
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M16.25 7.5L10 13.75L3.75 7.5' stroke='%23A7A19D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                  background-position: right 24px center;
                  background-repeat: no-repeat;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }

                #pwf-1 input#email,
                #pwf-1 input#primary_phone {
                  padding-left: 58px !important;
                }

                #pwf-1 input#email+label,
                #pwf-1 input#primary_phone+label {
                  left: 58px;
                }

                #pwf-1 input#email:focus~.spz-label,
                #pwf-1 input#primary_phone:focus~.spz-label,
                #pwf-1 input#email:not(:placeholder-shown)~.spz-label,
                #pwf-1 input#primary_phone:not(:placeholder-shown)~.spz-label {
                  left: 58px;
                }

                #pwf-1 input:not([type="checkbox"]) {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  padding-left: 24px !important;
                }

                #pwf-1 .spz-wrapper:has(input:not([type="checkbox"]))~img {
                  display: none;
                }

                #pwf-1 input:-webkit-autofill,
                #pwf-1 input:-webkit-autofill:hover,
                #pwf-1 input:-webkit-autofill:focus {
                  -webkit-box-shadow: 0 0 0px 1000px rgba(126, 126, 126, 0) inset !important;
                  transition: background-color 5000s ease-in-out 0s !important;
                  -webkit-text-fill-color: #121111 !important;
                  z-index: 2;
                  position: relative;
                }

                #pwf-1 input::-webkit-input-placeholder {
                  color: transparent;
                }

                #pwf-1 input:-moz-placeholder {
                  color: transparent;
                  opacity: 0;
                }

                #pwf-1 input:-ms-input-placeholder {
                  color: transparent;
                }

                #pwf-1 input::-moz-placeholder {
                  color: transparent;
                  opacity: 0;
                }

                #pwf-1 select+img,
                #pwf-1 input:not([type="checkbox"])+img {
                  left: 24px;
                }

                #pwf-1 select:focus,
                #pwf-1 input:not([type="checkbox"]):focus {
                  outline: 2px solid #2468C7;
                }

                #pwf-1 .carousel-item div:has(.error-text) .spz-wrapper select,
                #pwf-1 .carousel-item div:has(.error-text) .spz-wrapper input:not([type="checkbox"]) {
                  outline: 1px solid #BE3A3A;
                }

                #pwf-1 select~.spz-label,
                #pwf-1 input:not([type="checkbox"])~.spz-label {
                  position: absolute;
                  top: 50%;
                  transform: translateY(calc(-50% - 1.5px));
                  left: 24px;
                  color: #78716C;
                  font-family: proxima-nova, sans-serif;
                  font-size: 16px;
                  font-weight: 400;
                  line-height: 20.8px;
                  transition: ease 0.3s;
                  text-align: left;
                  width: calc(100% - 55px);
                  pointer-events: none;
                  z-index: 3;
                }

                #pwf-1 select:focus~.spz-label,
                #pwf-1 select:not(:has(option:first-child:checked))~.spz-label,
                #pwf-1 input:focus~.spz-label,
                #pwf-1 input:not(:placeholder-shown)~.spz-label {
                  color: #121111;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 18.2px;
                  top: 4.5px;
                  left: 24px;
                  transform: none;
                  width: calc(100% - 55px);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }

                #pwf-1 select:has(option:first-child:checked) {
                  color: transparent;
                }

                #pwf-1 select:has(option:first-child:checked):focus {
                  color: #121111;
                }

                #pwf-1 .spz-wrapper>img[alt="Secure Lock"] {
                  left: 26.5px;
                  top: 7px;
                  width: 19px;
                  z-index: 3;
                }

                #pwf-1 .error-text {
                  color: #BE3A3A;
                  font-family: proxima-nova, sans-serif;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18.2px;
                  text-align: left;
                  padding-left: 18px;
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM7 3.5C6.75938 3.5 6.5625 3.69688 6.5625 3.9375V7.4375C6.5625 7.67812 6.75938 7.875 7 7.875C7.24062 7.875 7.4375 7.67812 7.4375 7.4375V3.9375C7.4375 3.69688 7.24062 3.5 7 3.5ZM7.65625 9.625C7.65625 9.45095 7.58711 9.28403 7.46404 9.16096C7.34097 9.03789 7.17405 8.96875 7 8.96875C6.82595 8.96875 6.65903 9.03789 6.53596 9.16096C6.41289 9.28403 6.34375 9.45095 6.34375 9.625C6.34375 9.79905 6.41289 9.96597 6.53596 10.089C6.65903 10.2121 6.82595 10.2812 7 10.2812C7.17405 10.2812 7.34097 10.2121 7.46404 10.089C7.58711 9.96597 7.65625 9.79905 7.65625 9.625Z' fill='%23BE3A3A'/%3E%3C/svg%3E");
                  background-position: 0px 3px;
                  background-repeat: no-repeat;
                  margin-top: 7px;
                }

                #pwf-1 .btn-action {
                  min-width: 140px;
                  height: 56px;
                  overflow: hidden;
                  color: #FEFDFD;
                  font-family: proxima-nova, sans-serif;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 20.8px;
                  background: #192526;
                  border: 0;
                  letter-spacing: 0;
                  padding-top: 6px;
                  box-shadow: none;
                  transform: none;
                }

                #pwf-1 .btn-action>div {
                  color: #FEFDFD;
                  font-family: proxima-nova, sans-serif;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 20.8px;
                  justify-content: center;
                }

                #pwf-1 .btn-action:hover {
                  background: #121111;
                }

                #pwf-1 .back-link,
                #pwf-1 .back-link>div {
                  color: #78716C;
                  font-family: proxima-nova, sans-serif;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 20.8px;
                }

                #pwf-1 .back-link:hover>div {
                  color: #121111;
                }

                #pwf-1 .back-link:hover>div>span {
                  color: #121111;
                }

                #pwf-1 {
                  position: static;
                }

                #pwf-1 .carousel-inner {
                  position: static;
                }

                #pwf-1 .carousel-inner+.flex>.flex-1 {
                  text-align: left;
                  width: auto !important;
                }

                #pwf-1 .carousel-inner+div {
                  margin-top: 13px
                }

                #pwf-1 div:has(.disclosure-tooltip) {
                  margin-top: 20px;
                }

                #pwf-1 div:has(.disclosure-tooltip) small {
                  color: #171717;
                  font-family: proxima-nova, sans-serif;
                  font-size: 12px;
                  font-weight: 500;
                  line-height: 15.6px;
                }

                #pwf-1 div:has(.disclosure-tooltip) small sup {
                  top: -5.5px;
                }

                #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip {
                  color: #171717;
                  font-family: proxima-nova, sans-serif;
                  font-size: 12px;
                  font-weight: 500;
                  line-height: 15.6px;
                  margin-left: -3px;
                  text-decoration: underline;
                  text-underline-offset: 5px;
                  border: 0;
                  transform: translate(0.5px, -1px);
                }

                #pwf-1 .disclosure-tooltip .disclosure-tooltiptext {
                  margin-left: -140px;
                  width: 280px;
                  top: 172%;
                  border-radius: 8px;
                  color: #FBF8F7;
                  font-family: proxima-nova, sans-serif;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 16px;
                  padding: 14.5px 20px 18px;
                  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.10), 0 4px 6px -1px rgba(0, 0, 0, 0.10);
                  background: #192526;

                }

                #pwf-1 .disclosure-tooltip .disclosure-tooltiptext:after {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='6' viewBox='0 0 14 6' fill='none'%3E%3Cpath d='M7 0L14 6H0L7 0Z' fill='%23192526'/%3E%3C/svg%3E");
                  width: 14px;
                  height: 6px;
                  border: 0;
                  margin-left: -7px;
                }

                #pwf-1 .invisible {
                  display: none;
                }

                #pwf-1 .spz-wrapper:has(#business_name) {
                  margin-bottom: 12px;
                }

                .question_heading {
                  padding-bottom: 30px;
                }

                .question_heading h2 {
                  color: #181818;
                  font-family: proxima-nova, sans-serif;
                  font-size: 24px;
                  font-weight: 600;
                  line-height: 31.2px;
                  margin-bottom: 0;
                }

                .question_list ul {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  margin: 0 -5px;
                  list-style: none;
                  padding-left: 0;
                }

                .question_list ul li {
                  width: auto;
                  padding: 0 5px 10px;
                }

                .question_data {
                  width: 176px;
                  height: 88px;
                }

                .question_data a {
                  display: flex;
                  width: 100%;
                  height: 100%;
                  text-decoration: none;
                  padding: 24px 16px;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  border-radius: 12px;
                  border: 1px solid rgba(175, 146, 125, 0.2);
                  background: #FFF;
                  transition: all 0.4s ease;
                }

                .question_data a:hover {
                  border: 1px solid #2468C780;
                  background: linear-gradient(0deg, rgba(36, 104, 199, 0.05) 0%, rgba(36, 104, 199, 0.05) 100%), #FFF;
                }

                .question_data a strong {
                  display: block;
                  color: #181818;
                  text-align: center;
                  font-family: proxima-nova, sans-serif;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 23.4px;
                }

                .question_data.active a {
                  border: 1px solid #2468C780;
                  background: linear-gradient(0deg, rgba(36, 104, 199, 0.05) 0%, rgba(36, 104, 199, 0.05) 100%), #FFF;
                }

                .questions_wrap .question_item {
                  display: none;
                }

                .questions_wrap .question_item.question_1 {
                  display: block;
                }


                .Accordions {
                  display: block;
                }

                .Accordion_item {
                  width: 100%;
                  height: auto;
                  margin: 5px 0;

                  border-radius: 16px;
                  border: 1px solid rgba(25, 37, 38, 0.20);
                  background: #F4F2F0;

                }

                .Accordion_item .title_tab {
                  width: 100%;
                  padding: 30px;
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  cursor: pointer;
                  transition: background-color 0.3s ease-in;
                }

                .Accordion_item .title_tab .title {
                  width: 100%;
                  color: #181818;
                  font-family: proxima-nova, sans-serif;
                  font-size: 20px;
                  font-weight: 600;
                  line-height: 26px;
                  text-align: left;
                  position: relative;
                }

                .Accordion_item .title_tab .title .icon {
                  position: absolute;
                  right: 1%;
                  top: calc(50% - 8px);
                  width: 16px;
                  height: 16px;
                  background-color: transparent;
                  transform: rotate(-180deg);
                  transition: transform 0.3s ease-in;
                }


                .inner_content {
                  width: 100%;
                  height: auto;
                  display: none;
                  overflow: hidden;
                  padding: 0 30px 30px;
                }

                .inner_content p {
                  width: 98%;
                  margin: auto;
                  padding: 18px 15px;
                  font-size: 16px;
                  line-height: 28px;
                  letter-spacing: 1px;
                }

                .Accordion_item .title_tab.active .title .icon {
                  transform: rotate(0deg);
                  transition: transform 0.3s ease-in;
                }

                .inner_content .question_data {
                  width: 207px;
                }

                .inner_content .question_data a {
                  padding: 24px 12px;
                }

                .inner_content .question_data a strong {
                  font-size: 16px;
                  line-height: 20.8px;
                  pointer-events: none;
                }

                #pwf-1 .slide-1,
                #pwf-1 .slide-2,
                #pwf-1 .slide-3,
                #pwf-1 .slide-4,
                #pwf-1 .slide-5,
                #pwf-1 .slide-6 {
                  display: none;
                }

                @media (max-width: 767.98px) {
                  h6 {
                    margin-top: 22px;
                    margin-bottom: 27px;
                  }

                  // #pwf-1 .carousel-inner+div{
                  //   flex-direction: column-reverse;
                  // }
                  #pwf-1 .carousel-inner+div {
                    margin-top: 13px
                  }

                  #pwf-1 div:has(.disclosure-tooltip) {
                    margin-top: 25.5px
                  }

                  #pwf-1 div:has(.disclosure-tooltip) small {
                    max-width: 270px;
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                  }

                  #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip {
                    transform: translate(1.5px, 2.5px);
                  }

                  #pwf-1 .btn-action {
                    width: 100%;
                  }

                  #pwf-1 div:has(>.btn-action) {
                    width: calc(100% + 2px);
                  }

                  #pwf-1 .slide-9 .grid-cols-2 {
                    grid-template-columns: none;
                  }

                  #pwf-1 .carousel-inner+.flex>.flex-1 a:not(.invisible) {
                    margin-right: 78px;
                  }

                  #pwf-1 select~.spz-label,
                  #pwf-1 input:not([type="checkbox"])~.spz-label {
                    width: calc(100% - 65px);
                  }

                  #pwf-1 select:focus~.spz-label,
                  #pwf-1 select:not(:has(option:first-child:checked))~.spz-label,
                  #pwf-1 input:focus~.spz-label,
                  #pwf-1 input:not(:placeholder-shown)~.spz-label {
                    width: calc(100% - 65px);
                  }
                }
                `;

              shadowRoot.appendChild(style);
              shadowRoot.querySelector('.carousel-inner').insertAdjacentHTML("afterbegin", `
                  <div class="steps"></div>
                `)
              // const disclosureElement = shadowRoot.querySelector('#pwf-1 div:has(.disclosure-tooltip)');
              // if (disclosureElement) {
              //   console.log(disclosureElement);
              //   shadowRoot.insertAdjacentHTML("beforebegin", disclosureElement.outerHTML);
              // }
              shadowRoot.querySelector('.carousel-inner').insertAdjacentHTML("afterend", `
<div class="questions_wrap">
  <div class="question_item question_1">
    <div class="question_heading">
      <h2>How much money do you need?</h2>
    </div>
    <div class="question_list">
      <ul>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$1 - $5k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$5k - $25k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$25 - $50k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$50 - $100k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$100 - $250k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$250 - $500k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$500k - $1M</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>Over $1M</strong>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="question_item question_2">
    <div class="question_heading">
      <h2>How long have you been in business?</h2>
    </div>
    <div class="question_list">
      <ul>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>0 - 2 Months</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>3 - 5 Months</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>6 - 11 Months</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>1 - 2 Years</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>2 - 3 Years</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>3 - 5 Years</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>5+ Years</strong>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="question_item question_3">
    <div class="question_heading">
      <h2>On average, how much revenue does your business currently generate each month?</h2>
    </div>
    <div class="question_list">
      <ul>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$0, No Revenue</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$1 - $4k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$5k - $7k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$8k - $14k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$15k - $19k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$20k - $49k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$50k - $79k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$80k - $199k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>$200k - $399k</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>More than $400k</strong>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="question_item question_4">
    <div class="question_heading">
      <h2>What is your personal credit score?</h2>
    </div>
    <div class="question_list">
      <ul>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>499 or Below</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>500-599</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>600-649</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>650-679</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>680-719</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>720 or Higher</strong>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="question_item question_5">
    <div class="question_heading">
      <h2>What type of business do you own?</h2>
    </div>
    <div class="question_list">
      <ul>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>Corporation</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>Legal Partnership</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>LLC</strong>
            </a>
          </div>
        </li>
        <li>
          <div class="question_data">
            <a href="javascript:void(0)">
              <strong>Sole Proprietor</strong>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="question_item question_6">
    <div class="question_heading">
      <h2>How much money do you need?</h2>
    </div>
    
    <div class="container">
      <div class="Accordions">
        <div class="Accordion_item">
          <div class="title_tab">
            <h3 class="title">
              Professional, Institutional & Public Services
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.25 12.5L10 6.25L3.75 12.5" stroke="#A7A19D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </h3>
          </div>
          <div class="inner_content">
            <div class="question_list">
              <ul>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Finance and Insurance</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Legal Services</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Real Estate</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Education</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>IT, Media, or Publishing</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Political, Governmental,or Public Organizations</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Religious Organizations</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Social Assistance</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Healthcare</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>All Other</strong>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="Accordion_item">
          <div class="title_tab">
            <h3 class="title">Industrial, Energy & Trade 
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.25 12.5L10 6.25L3.75 12.5" stroke="#A7A19D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </h3>
          </div>
          <div class="inner_content">
            <div class="question_list">
              <ul>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Manufacturing</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Construction</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Mining (except Oil and Gas)</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Oil and Gas Extraction</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Utilities</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Agriculture, Forestry, Fishing and Hunting</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Wholesale Trade</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Gas Stations</strong>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="Accordion_item">
          <div class="title_tab">
            <h3 class="title">Retail, Consumer & Hospitality
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.25 12.5L10 6.25L3.75 12.5" stroke="#A7A19D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </h3>
          </div>
          <div class="inner_content">
            <div class="question_list">
              <ul>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Retail Stores</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Restaurants and Food Services</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Travel Agencies</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Arts, Entertainment, and Recreation</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Gambling</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Adult Entertainment</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Firearm Sales</strong>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="Accordion_item">
          <div class="title_tab">
            <h3 class="title">
              Transportation, Logistics & Mobility
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.25 12.5L10 6.25L3.75 12.5" stroke="#A7A19D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </h3>
          </div>
          <div class="inner_content">
            <div class="question_list">
              <ul>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Automobile Dealers & Parts</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Freight Trucking</strong>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="question_data">
                    <a href="javascript:void(0)">
                      <strong>Transportation and Warehousing</strong>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
                `)

              // Function to handle question item clicks
              function setupQuestionHandlers() {
                const questionsWrap = shadowRoot.querySelector('.questions_wrap');
                if (!questionsWrap) return;

                // Helper function to sync active state based on select value
                function syncActiveState(questionNum) {
                  let selectElement, items, selectedIndex, selectedText;
                  
                  if (questionNum === 1) {
                    selectElement = shadowRoot.querySelector('#amountSeeking');
                    items = shadowRoot.querySelectorAll('.question_1 .question_data');
                    if (selectElement && selectElement.selectedIndex > 0) {
                      selectedIndex = selectElement.selectedIndex - 1; // Adjust for disabled first option
                    }
                  } else if (questionNum === 2) {
                    selectElement = shadowRoot.querySelector('#timeInBusiness');
                    items = shadowRoot.querySelectorAll('.question_2 .question_data');
                    if (selectElement && selectElement.selectedIndex > 0) {
                      selectedIndex = selectElement.selectedIndex - 1;
                    }
                  } else if (questionNum === 3) {
                    selectElement = shadowRoot.querySelector('#averageMonthlySales');
                    items = shadowRoot.querySelectorAll('.question_3 .question_data');
                    if (selectElement && selectElement.selectedIndex > 0) {
                      selectedIndex = selectElement.selectedIndex - 1;
                    }
                  } else if (questionNum === 4) {
                    selectElement = shadowRoot.querySelector('#creditScore');
                    items = shadowRoot.querySelectorAll('.question_4 .question_data');
                    if (selectElement && selectElement.selectedIndex > 0) {
                      selectedIndex = selectElement.selectedIndex - 1;
                    }
                  } else if (questionNum === 5) {
                    selectElement = shadowRoot.querySelector('#entityType');
                    items = shadowRoot.querySelectorAll('.question_5 .question_data');
                    if (selectElement && selectElement.selectedIndex > 0) {
                      selectedIndex = selectElement.selectedIndex - 1;
                    }
                  } else if (questionNum === 6) {
                    selectElement = shadowRoot.querySelector('#industry');
                    items = shadowRoot.querySelectorAll('.question_6 .Accordions .question_data');
                    if (selectElement && selectElement.selectedIndex > 0) {
                      selectedText = selectElement.options[selectElement.selectedIndex].textContent.trim();
                    }
                  }
                  
                  // Remove active class from all items in this question
                  if (items) {
                    items.forEach(item => item.classList.remove('active'));
                    
                    // Add active class to matching item
                    if (questionNum === 6 && selectedText) {
                      items.forEach(item => {
                        const itemText = item.querySelector('strong')?.textContent.trim();
                        if (itemText && normalizeText(itemText) === normalizeText(selectedText)) {
                          item.classList.add('active');
                        }
                      });
                    } else if (selectedIndex !== undefined && items[selectedIndex]) {
                      items[selectedIndex].classList.add('active');
                    }
                  }
                }

                // Helper function to remove error messages
                function removeError() {
                  const existingError = shadowRoot.querySelector('.questions_wrap + .text-left');
                  if (existingError) {
                    existingError.remove();
                  }
                }

                // Helper function to hide all questions and show specific one
                function showQuestion(questionNum) {
                  // Remove any error messages when navigating
                  removeError();
                  
                  for (let i = 1; i <= 6; i++) {
                    const question = shadowRoot.querySelector(`.question_${i}`);
                    if (question) {
                      question.style.display = i === questionNum ? 'block' : 'none';
                    }
                  }
                  // Sync active state when showing a question
                  syncActiveState(questionNum);
                  
                  // Special handling for question_6: open accordion with active item
                  if (questionNum === 6) {
                    // Use requestAnimationFrame to ensure DOM is updated after syncActiveState
                    requestAnimationFrame(() => {
                      const activeItem = shadowRoot.querySelector('.question_6 .Accordions .question_data.active');
                      if (activeItem) {
                        // Find the parent Accordion_item
                        const accordionItem = activeItem.closest('.Accordion_item');
                        if (accordionItem) {
                          // Close all accordion items first
                          const allAccordionItems = shadowRoot.querySelectorAll('.question_6 .Accordion_item');
                          allAccordionItems.forEach(item => {
                            const titleTab = item.querySelector('.title_tab');
                            const innerContent = item.querySelector('.inner_content');
                            if (titleTab && innerContent) {
                              titleTab.classList.remove('active');
                              // Close if it's currently open
                              if (innerContent.style.display === 'block' || 
                                  innerContent.style.display === '' ||
                                  window.getComputedStyle(innerContent).display !== 'none') {
                                slideUp(innerContent);
                              }
                            }
                          });
                          
                          // Open the accordion item containing the active item after closing animations complete
                          // Wait for slideUp animation to finish (500ms duration) plus a small buffer
                          setTimeout(() => {
                            const titleTab = accordionItem.querySelector('.title_tab');
                            const innerContent = accordionItem.querySelector('.inner_content');
                            if (titleTab && innerContent) {
                              // Reset any inline styles that might interfere
                              innerContent.style.removeProperty('display');
                              innerContent.style.removeProperty('height');
                              innerContent.style.removeProperty('overflow');
                              
                              titleTab.classList.add('active');
                              // Always use slideDown to ensure smooth animation
                              slideDown(innerContent);
                            }
                          }, 550);
                        }
                      }
                    });
                  }
                }

                // Helper function to normalize text for comparison (remove extra spaces, trim)
                function normalizeText(text) {
                  return text.trim().replace(/\s+/g, ' ');
                }

                // Helper function to find and select option by text with improved matching
                function selectOptionByText(selectElement, text) {
                  if (!selectElement) return;
                  const normalizedText = normalizeText(text);
                  const options = Array.from(selectElement.options);

                  // First try exact match
                  for (let i = 0; i < options.length; i++) {
                    if (normalizeText(options[i].textContent) === normalizedText) {
                      selectElement.selectedIndex = i;
                      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                      selectElement.dispatchEvent(new Event('input', { bubbles: true }));
                      return;
                    }
                  }

                  // Fallback: try partial match (contains)
                  for (let i = 0; i < options.length; i++) {
                    const optionText = normalizeText(options[i].textContent);
                    if (optionText.includes(normalizedText) || normalizedText.includes(optionText)) {
                      selectElement.selectedIndex = i;
                      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                      selectElement.dispatchEvent(new Event('input', { bubbles: true }));
                      return;
                    }
                  }
                }

                // Helper function to select option by index (more reliable)
                function selectOptionByIndex(selectElement, itemIndex, offset = 1) {
                  if (!selectElement) return;
                  // offset: always 1 since index 0 is always disabled (ignored)
                  // item 0 -> option 1, item 1 -> option 2, etc.
                  const optionIndex = itemIndex + offset;
                  if (selectElement.options.length > optionIndex) {
                    selectElement.selectedIndex = optionIndex;
                    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                    selectElement.dispatchEvent(new Event('input', { bubbles: true }));
                  }
                }

                // Question 1 handlers - map to #amountSeeking
                const question1Items = shadowRoot.querySelectorAll('.question_1 .question_data a');
                question1Items.forEach((item, index) => {
                  item.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Remove active class from all items
                    shadowRoot.querySelectorAll('.question_1 .question_data').forEach(q => q.classList.remove('active'));
                    // Add active class to clicked item
                    item.closest('.question_data').classList.add('active');
                    
                    const selectElement = shadowRoot.querySelector('#amountSeeking');
                    if (selectElement) {
                      // Map items to options: item 0 -> option 1, item 1 -> option 2, etc.
                      // Ignoring index 0 as it's always disabled
                      selectOptionByIndex(selectElement, index, 1);
                    }
                    // Hide all questions and show question_2
                    showQuestion(2);
                  });
                });

                // Question 2 handlers - map to #timeInBusiness
                const question2Items = shadowRoot.querySelectorAll('.question_2 .question_data a');
                question2Items.forEach((item, index) => {
                  item.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Remove active class from all items
                    shadowRoot.querySelectorAll('.question_2 .question_data').forEach(q => q.classList.remove('active'));
                    // Add active class to clicked item
                    item.closest('.question_data').classList.add('active');
                    
                    const selectElement = shadowRoot.querySelector('#timeInBusiness');
                    if (selectElement) {
                      // Ignoring index 0 as it's always disabled
                      selectOptionByIndex(selectElement, index, 1);
                    }
                    // Hide all questions and show question_3
                    showQuestion(3);
                  });
                });

                // Question 3 handlers - map to #averageMonthlySales
                const question3Items = shadowRoot.querySelectorAll('.question_3 .question_data a');
                question3Items.forEach((item, index) => {
                  item.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Remove active class from all items
                    shadowRoot.querySelectorAll('.question_3 .question_data').forEach(q => q.classList.remove('active'));
                    // Add active class to clicked item
                    item.closest('.question_data').classList.add('active');
                    
                    const selectElement = shadowRoot.querySelector('#averageMonthlySales');
                    if (selectElement) {
                      // Ignoring index 0 as it's always disabled
                      selectOptionByIndex(selectElement, index, 1);
                    }
                    // Hide all questions and show question_4
                    showQuestion(4);
                  });
                });

                // Question 4 handlers - map to #creditScore
                const question4Items = shadowRoot.querySelectorAll('.question_4 .question_data a');
                question4Items.forEach((item, index) => {
                  item.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Remove active class from all items
                    shadowRoot.querySelectorAll('.question_4 .question_data').forEach(q => q.classList.remove('active'));
                    // Add active class to clicked item
                    item.closest('.question_data').classList.add('active');
                    
                    const selectElement = shadowRoot.querySelector('#creditScore');
                    if (selectElement) {
                      // Ignoring index 0 as it's always disabled
                      selectOptionByIndex(selectElement, index, 1);
                    }
                    // Hide all questions and show question_5
                    showQuestion(5);
                  });
                });

                // Question 5 handlers - map to #entityType
                const question5Items = shadowRoot.querySelectorAll('.question_5 .question_data a');
                question5Items.forEach((item, index) => {
                  item.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Remove active class from all items
                    shadowRoot.querySelectorAll('.question_5 .question_data').forEach(q => q.classList.remove('active'));
                    // Add active class to clicked item
                    item.closest('.question_data').classList.add('active');
                    
                    const selectElement = shadowRoot.querySelector('#entityType');
                    if (selectElement) {
                      // Ignoring index 0 as it's always disabled
                      selectOptionByIndex(selectElement, index, 1);
                    }
                    // Hide all questions and show question_6
                    showQuestion(6);
                  });
                });

                // Question 6 handlers - map to #industry
                // Find all items across all accordion tabs in question_6
                const question6Items = shadowRoot.querySelectorAll('.question_6 .Accordions .question_data a');
                question6Items.forEach((item, index) => {
                  // Prevent duplicate event listeners
                  if (item.hasAttribute('data-question6-setup')) return;
                  item.setAttribute('data-question6-setup', 'true');
                  
                  item.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Remove active class from all items
                    shadowRoot.querySelectorAll('.question_6 .Accordions .question_data').forEach(q => q.classList.remove('active'));
                    // Add active class to clicked item
                    item.closest('.question_data').classList.add('active');
                    
                    const selectElement = shadowRoot.querySelector('#industry');
                    if (selectElement) {
                      // Get the text from the clicked item and match it with option text
                      const text = item.querySelector('strong').textContent.trim();
                      selectOptionByText(selectElement, text);
                    }
                    // Hide all questions (form will continue normally)
                    for (let i = 1; i <= 6; i++) {
                      const question = shadowRoot.querySelector(`.question_${i}`);
                      if (question) {
                        question.style.display = 'none';
                      }
                    }
                  });
                });

                // Back button handler - show previous question
                function getCurrentQuestion() {
                  for (let i = 1; i <= 6; i++) {
                    const question = shadowRoot.querySelector(`.question_${i}`);
                    if (question && question.style.display === 'block') {
                      return i;
                    }
                  }
                  return 1; // Default to question 1 if none found
                }

                function setupBackButton() {
                  const backButton = shadowRoot.querySelector('#pwf-1 .back-link');
                  if (backButton && !backButton.hasAttribute('data-back-setup')) {
                    backButton.setAttribute('data-back-setup', 'true');
                    backButton.addEventListener('click', function(e) {
                      e.preventDefault();
                      
                      // Check if #business_name field is visible
                      const businessNameField = shadowRoot.querySelector('#business_name');
                      const isBusinessNameVisible = businessNameField && 
                        (businessNameField.offsetParent !== null || 
                         businessNameField.style.display !== 'none' ||
                         window.getComputedStyle(businessNameField).display !== 'none');
                      
                      if (isBusinessNameVisible) {
                        // Show question_6 if business_name is visible
                        showQuestion(6);
                      } else {
                        // Normal back button behavior
                        const currentQuestion = getCurrentQuestion();
                        if (currentQuestion > 1) {
                          // Show previous question
                          showQuestion(currentQuestion - 1);
                        }
                        // If already on question 1, do nothing
                      }
                    });
                  }
                }

                // Setup back button
                setupBackButton();

                // Button validation handler
                function setupButtonValidation() {
                  const buttons = shadowRoot.querySelectorAll('#pwf-1 .btn-action.spz3001_v1');
                  buttons.forEach(button => {
                    if (button.hasAttribute('data-validation-setup')) return;
                    button.setAttribute('data-validation-setup', 'true');
                    
                    button.addEventListener('click', function(e) {
                      const currentQuestion = getCurrentQuestion();
                      let selectElement;
                      let errorMessage = '';
                      
                      // Get the corresponding select element based on current question
                      if (currentQuestion === 1) {
                        selectElement = shadowRoot.querySelector('#amountSeeking');
                        errorMessage = 'Amount seeking is required';
                      } else if (currentQuestion === 2) {
                        selectElement = shadowRoot.querySelector('#timeInBusiness');
                        errorMessage = 'Time in business is required';
                      } else if (currentQuestion === 3) {
                        selectElement = shadowRoot.querySelector('#averageMonthlySales');
                        errorMessage = 'Average monthly sales is required';
                      } else if (currentQuestion === 4) {
                        selectElement = shadowRoot.querySelector('#creditScore');
                        errorMessage = 'Credit score is required';
                      } else if (currentQuestion === 5) {
                        selectElement = shadowRoot.querySelector('#entityType');
                        errorMessage = 'Entity type is required';
                      } else if (currentQuestion === 6) {
                        selectElement = shadowRoot.querySelector('#industry');
                        errorMessage = 'Industry is required';
                      }
                      
                      // Check if select has a value (selectedIndex > 0, since 0 is disabled)
                      if (selectElement && (selectElement.selectedIndex === 0 || selectElement.selectedIndex === -1)) {
                        // No selection - show error
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Remove existing error if any
                        removeError();
                        
                        // Add error message after .questions_wrap
                        const questionsWrap = shadowRoot.querySelector('.questions_wrap');
                        if (questionsWrap) {
                          const errorDiv = document.createElement('div');
                          errorDiv.className = 'text-left';
                          errorDiv.innerHTML = '<div class="mt-1 text-sm font-semibold text-danger-700 error-text">' + errorMessage + '</div>';
                          questionsWrap.insertAdjacentElement('afterend', errorDiv);
                        }
                      } else {
                        // Has selection - remove error and show next question
                        removeError();
                        
                        // Show next question if not on last question
                        if (currentQuestion < 6) {
                          e.preventDefault();
                          e.stopPropagation();
                          showQuestion(currentQuestion + 1);
                        }
                        // If on question 6, let the form submit normally
                      }
                    });
                  });
                }

                // Setup button validation
                setupButtonValidation();

                // Initially show only question_1
                showQuestion(1);
              }

              // Setup question handlers after a short delay to ensure DOM is ready
              setTimeout(setupQuestionHandlers, 100);

              // Function to update progress bar for Safari compatibility
              function updateProgressBar() {
                const carouselInner = shadowRoot.querySelector('.carousel-inner');
                if (!carouselInner) return;

                // Find active slide - check for .carousel-item with .active class
                const activeSlide = shadowRoot.querySelector('.carousel-item.active') ||
                  Array.from(shadowRoot.querySelectorAll('.carousel-item')).find(el => el.classList.contains('active'));

                if (!activeSlide) return;

                // Extract slide number from class name (slide-1, slide-2, etc.)
                const slideMatch = activeSlide.className.match(/slide-(\d+)/);
                if (!slideMatch) return;

                const slideNumber = parseInt(slideMatch[1] || '0');
                if (slideNumber > 0 && slideNumber <= 11) {
                  const scale = slideNumber / 11;
                  // Directly set CSS variable on the element containing .steps
                  carouselInner.style.setProperty('--bar-scale', scale.toString());
                  // Force Safari to repaint by reading a computed style
                  void carouselInner.offsetHeight;
                }
              }

              // Watch for slide changes
              const progressObserver = new MutationObserver(() => {
                updateProgressBar();
              });

              const carouselInner = shadowRoot.querySelector('.carousel-inner');
              if (carouselInner) {
                progressObserver.observe(carouselInner, {
                  attributes: true,
                  attributeFilter: ['class'],
                  childList: true,
                  subtree: true
                });
                // Initial update
                updateProgressBar();
                // Also check periodically as a fallback
                setInterval(updateProgressBar, 100);
              }

              // accordion
              function slideUp(element, duration = 500) {
                element.style.overflow = "hidden";
                element.style.height = element.scrollHeight + "px";
                element.style.transition = `height ${duration}ms ease-in-out`;

                // Force reflow
                void element.offsetHeight;

                requestAnimationFrame(() => {
                  element.style.height = "0px";
                });

                setTimeout(() => {
                  element.style.display = "none";
                  element.style.overflow = "";
                  element.style.height = "";
                }, duration);
              }

              function slideDown(element, duration = 500) {
                // First, make it visible but hidden to get the actual height
                element.style.display = "block";
                element.style.height = "auto";
                element.style.overflow = "hidden";
                element.style.visibility = "hidden";
                let height = element.scrollHeight;
                element.style.visibility = "";
                
                // Now set it to 0 and animate
                element.style.height = "0px";
                element.style.transition = `height ${duration}ms ease-in-out`;

                // Force reflow
                void element.offsetHeight;

                requestAnimationFrame(() => {
                  element.style.height = height + "px";
                });

                setTimeout(() => {
                  element.style.height = "auto";
                  element.style.overflow = "";
                }, duration);
              }

              // ------------------------------
              // Accordion Logic
              // ------------------------------
              function setupAccordion() {
                const titleTab = shadowRoot.querySelectorAll(".title_tab");

                if (titleTab.length === 0) return;

                // Open first item by default
                const firstItem = shadowRoot.querySelector(".Accordion_item");
                if (firstItem) {
                  const firstTitle = firstItem.querySelector(".title_tab");
                  const firstContent = firstTitle.nextElementSibling;

                  if (firstTitle && firstContent) {
                    firstTitle.classList.add("active");
                    firstContent.style.display = "block";
                    firstContent.style.height = "auto";
                  }
                }

                // Click handler
                titleTab.forEach(tab => {
                  if (tab.hasAttribute('data-accordion-setup')) return;
                  tab.setAttribute('data-accordion-setup', 'true');
                  
                  tab.addEventListener("click", (e) => {
                    e.preventDefault();

                    const content = tab.nextElementSibling;
                    const parentItem = tab.parentElement;

                    if (!content || !parentItem) return;

                    if (tab.classList.contains("active")) {
                      // Already open → close it
                      tab.classList.remove("active");
                      slideUp(content);
                      content.querySelectorAll("p").forEach(p => p.classList.remove("show"));

                    } else {
                      // Open clicked item
                      tab.classList.add("active");
                      slideDown(content);

                      // Close all siblings
                      const siblings = parentItem.parentElement.querySelectorAll(".Accordion_item");

                      siblings.forEach(sib => {
                        if (sib !== parentItem) {
                          const sibTitle = sib.querySelector(".title_tab");
                          const sibContent = sib.querySelector(".inner_content");

                          if (sibTitle && sibContent) {
                            sibTitle.classList.remove("active");
                            slideUp(sibContent);
                            sibContent.querySelectorAll("p").forEach(p => p.classList.remove("show"));
                          }
                        }
                      });

                      content.querySelectorAll("p").forEach(p => p.classList.add("show"));
                    }
                  });
                });
              }

              // Setup accordion after a short delay to ensure DOM is ready
              setTimeout(setupAccordion, 200);
              // Also try to setup accordion when DOM changes
              const accordionObserver = new MutationObserver(() => {
                setupAccordion();
              });
              accordionObserver.observe(shadowRoot, { childList: true, subtree: true });


              const observer = new MutationObserver((mutationsList) => {
                if (shadowRoot.querySelector('#amountSeeking') && !shadowRoot.querySelector('.spz-label.amountSeeking')) {
                  const input = shadowRoot.querySelector('#amountSeeking');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);

                  shadowRoot.querySelector('#amountSeeking').insertAdjacentHTML("afterend", "<label class='spz-label amountSeeking'>How much money do you need?</label>")
                  shadowRoot.querySelector('#amountSeeking option:first-child').textContent = "How much money do you need?"
                }
                if (shadowRoot.querySelector('#timeInBusiness') && !shadowRoot.querySelector('.spz-label.timeInBusiness')) {
                  const input = shadowRoot.querySelector('#timeInBusiness');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#timeInBusiness').insertAdjacentHTML("afterend", "<label class='spz-label timeInBusiness'>How long have you been in business?</label>")
                  shadowRoot.querySelector('#timeInBusiness option:first-child').textContent = "How long have you been in business?"
                }
                if (shadowRoot.querySelector('#averageMonthlySales') && !shadowRoot.querySelector('.spz-label.averageMonthlySales')) {
                  const input = shadowRoot.querySelector('#averageMonthlySales');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#averageMonthlySales').insertAdjacentHTML("afterend", "<label class='spz-label averageMonthlySales'>What’s your monthly revenue?</label>")
                  shadowRoot.querySelector('#averageMonthlySales option:first-child').textContent = "What’s your monthly revenue?"
                }
                if (shadowRoot.querySelector('#creditScore') && !shadowRoot.querySelector('.spz-label.creditScore')) {
                  const input = shadowRoot.querySelector('#creditScore');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#creditScore').insertAdjacentHTML("afterend", "<label class='spz-label creditScore'>What is your personal credit score?</label>")
                  shadowRoot.querySelector('#creditScore option:first-child').textContent = "What is your personal credit score?"
                }
                if (shadowRoot.querySelector('#entityType') && !shadowRoot.querySelector('.spz-label.entityType')) {
                  const input = shadowRoot.querySelector('#entityType');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#entityType').insertAdjacentHTML("afterend", "<label class='spz-label entityType'>What type of business do you own?</label>")
                  shadowRoot.querySelector('#entityType option:first-child').textContent = "What type of business do you own?"
                }
                if (shadowRoot.querySelector('#industry') && !shadowRoot.querySelector('.spz-label.industry')) {
                  const input = shadowRoot.querySelector('#industry');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#industry').insertAdjacentHTML("afterend", "<label class='spz-label industry'>What is your company's industry?</label>")
                  shadowRoot.querySelector('#industry option:first-child').textContent = "What is your company's industry?"
                }
                if (shadowRoot.querySelector('#business_name') && !shadowRoot.querySelector('.spz-label.business_name')) {
                  const input = shadowRoot.querySelector('#business_name');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#business_name').insertAdjacentHTML("afterend", "<label class='spz-label business_name'>What is your business' name?</label>")
                }
                if (shadowRoot.querySelector('#first') && !shadowRoot.querySelector('.spz-label.first')) {
                  const input = shadowRoot.querySelector('#first');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#first').insertAdjacentHTML("afterend", "<label class='spz-label first'>What is your first name?</label>")
                }
                if (shadowRoot.querySelector('#last') && !shadowRoot.querySelector('.spz-label.last')) {
                  const input = shadowRoot.querySelector('#last');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#last').insertAdjacentHTML("afterend", "<label class='spz-label last'>What is your last name?</label>")
                }
                if (shadowRoot.querySelector('#email') && !shadowRoot.querySelector('.spz-label.email')) {
                  const input = shadowRoot.querySelector('#email');
                  const lockIcon = shadowRoot.querySelector('#email + img[alt="Secure Lock"]');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(lockIcon);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#email').insertAdjacentHTML("afterend", "<label class='spz-label email'>Email Address</label>")
                }
                if (shadowRoot.querySelector('#primary_phone') && !shadowRoot.querySelector('.spz-label.primary_phone')) {
                  const input = shadowRoot.querySelector('#primary_phone');   // select your input
                  const lockIcon = shadowRoot.querySelector('#primary_phone + img');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(lockIcon);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#primary_phone').insertAdjacentHTML("afterend", "<label class='spz-label primary_phone'>Mobile Phone</label>")
                }

                const firstBtn = shadowRoot.querySelector('.btn-action');
                if (firstBtn && !firstBtn.classList.contains('spz3001_v1')) {
                  shadowRoot.querySelectorAll('.btn-action').forEach(element => {
                    element.classList.add('spz3001_v1');
                  });
                }
              })
              observer.observe(shadowRoot.querySelector("#pwf-1"), { childList: true, subtree: true, attributes: true });
              shadowRoot.querySelector('#pwf-1').insertAdjacentHTML("beforeend", `<div class="fake-div"></div>`)
              shadowRoot.querySelector('.fake-div').remove()
            }
          }
        }, 100)
      }

    }
  }, 100)
  setTimeout(function () {
    clearInterval(bodyInterval3001)
  }, 7000)
})();