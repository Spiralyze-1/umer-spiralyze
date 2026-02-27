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

      function otherPage() {
        setTimeout(() => {
          if (document.querySelector('.site-footer-disclaimer')) {
            document.querySelector('.site-footer-disclaimer').innerHTML = `
            <p>California loans made pursuant to the California Financing Law, Division 9 (commencing with Section 22000) of the Finance Code. All such
            loans made through Lendio Partners, LLC, a wholly- owned subsidiary of Lendio, Inc. and a licensed finance lender/broker, California Financing Law License No. 60DBO-44694.</p>
            <p>1. Time to fund depends upon the product that you select, and can be as little as 24 hours, but may be longer.</p>
            <p>2. Filling out an application for business funding and submitting it to our funding partners will not impact your personal credit score. 
             However, depending on the product and lender, accepting a funding offer may result in a hard credit inquiry, which could affect your personal credit score.</p>
            `;

          }
        }, 1000);
      }


      let sectionSelector;
      if (window.location.pathname.includes('/sba-loans') || window.location.pathname.includes('/partners-sf') || window.location.pathname.includes('/small-business-financing') || window.location.pathname.includes('/partners-lf')) {
        sectionSelector = document.querySelector('.spz_3002_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3002_v1 .main-content-div .form-div');
      } else if (window.location.pathname.includes('/lp/direct/search-small-business-loans')) {
        document.querySelector('body').classList.add("spz_3002_bussiness_loans");
        document.querySelector('.form-heading-lp-spec .code-embed-26').style.display = 'none';
        sectionSelector = document.querySelector('.spz_3002_v1 .lp-header-with-cta');
        formSelector = document.querySelector('.spz_3002_v1 .lp-pwf-cont .application-form-wrap-lp-spec');
        setTimeout(() => {
          const tootltipElement = document.querySelector('.form-heading-lp-spec .form-h6-lp-spec');
          if (tootltipElement) {
            tootltipElement.innerHTML = `LOAN QUALIFICATION  <div class="tooltips">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M8.125 15.625C12.2671 15.625 15.625 12.2671 15.625 8.125C15.625 3.98286 12.2671 0.625 8.125 0.625C3.98286 0.625 0.625 3.98286 0.625 8.125C0.625 12.2671 3.98286 15.625 8.125 15.625Z" stroke="#9C86BB" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 7.5C7.66576 7.5 7.82473 7.56585 7.94194 7.68306C8.05915 7.80027 8.125 7.95924 8.125 8.125V11.25C8.125 11.4158 8.19085 11.5747 8.30806 11.6919C8.42527 11.8092 8.58424 11.875 8.75 11.875" stroke="#9C86BB" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.8125 5.625C8.33027 5.625 8.75 5.20527 8.75 4.6875C8.75 4.16973 8.33027 3.75 7.8125 3.75C7.29473 3.75 6.875 4.16973 6.875 4.6875C6.875 5.20527 7.29473 5.625 7.8125 5.625Z" fill="#9C86BB"/>
            </svg>
            <div class="text">
              Answer the basics about your business and what you're using your funding for. If you qualify, we'll match you with one of our 75+ lenders and find the right match for you.
            </div>
          </div>`;

          }
          if (document.querySelector('#footer-copyright-body')) {
            document.querySelector('#footer-copyright-body').insertAdjacentHTML('afterend', `
              <p class="copyright-body dark-24" style="margin-bottom: 0;">1. Time to fund depends upon the product that you select, and can be as little as 24 hours, but may be longer.</p>
              <p class="copyright-body dark-24">2. Filling out an application for business funding and submitting it to our funding partners will not impact your personal credit score. 
                However, depending on the product and lender, accepting a funding offer may result in a hard credit inquiry, which could affect your personal credit score.</p>
            `);

          }
        }, 1000);
      } else if (window.location.pathname.includes('/simple-a')) {
        document.querySelector('body').classList.add("spz_3002_simple_a");
        sectionSelector = document.querySelector('.spz_3002_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3002_v1 .main-content-div .form-div');
        document.querySelector('.main-content-div .form-div .hs_cos_wrapper').insertAdjacentHTML('beforebegin', `
        <div class="form-div-header">
          <span class="col-10 px-0">
            <div id="hs_cos_wrapper_module_17050092700534" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module">
              <div id="hs_cos_wrapper_module_17050092700534_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" style="" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="headline">LOAN QUALIFICATION 
              </div>
            </div>
          </span>
        </div>  
        `)
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
                  <h2>Get funded in as little as 24 hours. <sup>1</sup></h2>
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
        if (window.location.pathname == '/sba-loans') {
          document.body.classList.add("spz_3002_sba_loans");
          document.querySelector('.form-div-header .infoIcon .tooltip-text').textContent = `Answer the basics about your business and what you're using your funding for. If you qualify, we'll match you with one of our lenders and find the right match for you.`;
          document.querySelector('.form_heading h2').textContent = `Check eligibility & view offers in minutes.`;
          document.querySelector('.form_heading p').textContent = `See options from multiple SBA-approved lenders. No hidden fees.`;

        }
        if (window.location.pathname.includes('/partners-sf') || window.location.pathname.includes('/simple-a')) {
          otherPage();
        }
        if (window.location.pathname.includes('/partners-sf')) {
          document.querySelector('.form-div-header .hs_cos_wrapper_type_inline_text').textContent = "LOAN QUALIFICATION";
        }
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
                  background: #F4F1F0;
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
                  border-radius: 8px;
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
                  padding-left: 49px !important;
                }

                #pwf-1 .spz-wrapper:has(input#business_name),
                #pwf-1 .carousel-item:has(input#business_name) .text-left,
                #pwf-1 .spz-wrapper:has(input#email),
                #pwf-1 .carousel-item:has(input#email) .text-left{
                  max-width: 398px;
                  margin: auto;
                }
                #pwf-1 .carousel-item.active.slide-11{
                  max-width: 398px;
                  margin: auto;
                  float:none;
                }
                #pwf-1 .carousel-item.active.slide-11 .legal-box-shadow{
                  display:none;
                }
                #pwf-1 .carousel-item.active.slide-11 #marketingSmsOptIn{
                  appearance: none;
                  -webkit-appearance: none;
                  width: 18px;
                  height: 18px;
                  border-radius: 4.5px;
                  border: 1.125px solid #E2DBD5;
                  background: #FFF;
                  cursor: pointer;
                }
                #marketingSmsOptIn:checked {
                  background: #2468c7 !important;
                  border-color: #2468C6 !important;
                }

                #marketingSmsOptIn:checked::after {
                  content: '';
                  position: absolute;
                  width: 5px;
                  height: 10px;
                  border: solid #fff;
                  border-width: 0 2px 2px 0;
                  top: 2px;
                  left: 5px;
                  transform: rotate(45deg);
                }
                #pwf-1 .carousel-item.active.slide-11 .legal-box{
                  height: auto;
                  padding: 0;
                  border: none;
                  background: transparent;
                  overflow: visible;
                  color: #666;
                  font-family: proxima-nova, sans-serif;
                  font-size: 12px;
                  font-weight: 400;
                  line-height:  15.6px;
                  margin: -2px 0 0 9px;
                }
                #pwf-1 .carousel-item.active.slide-11 .legal-consent{
                  color: #666;
                  font-family: proxima-nova, sans-serif;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 130%;
                  padding-left: 4px;
                  padding-top: 8.5px;
                }
                #pwf-1 .carousel-item.active.slide-11 .legal-consent span a{
                  color: #2468C7;
                  font-family: proxima-nova, sans-serif;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 130%;
                  text-decoration: none;
                }
                #pwf-1 .carousel-item.active.slide-11 .col-12 > div > .flex.mb-3 {
                  margin-bottom: 4px;
                }
                #pwf-1 input#email+label,
                #pwf-1 input#primary_phone+label {
                  left: 49px;
                }

                #pwf-1 input#email:focus~.spz-label,
                #pwf-1 input#primary_phone:focus~.spz-label,
                #pwf-1 input#email:not(:placeholder-shown)~.spz-label,
                #pwf-1 input#primary_phone:not(:placeholder-shown)~.spz-label {
                  left: 49px;
                }

                #pwf-1 input:not([type="checkbox"]) {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  padding-left: 15px !important;
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
                  left: 15px;
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
                  left: 15px;
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
                  left: 15px;
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
                  left: 17.5px;
                  top: 7.5px;
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
                #pwf-1:has(.carousel-item.slide-11.active) .btn-action {
                  min-width: 166px;
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

                // #pwf-1 .carousel-inner+div {
                //   margin-top: 13px
                // }

                #pwf-1 div:has(.disclosure-tooltip) {
                  margin-top: 6px;
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
                  margin-left: -1px;
                  text-decoration: underline;
                  text-underline-offset: 5px;
                  border: 0;
                  z-index: 1;
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
                  height: fit-content;

                }

                #pwf-1 .disclosure-tooltip .disclosure-tooltiptext:after {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='6' viewBox='0 0 14 6' fill='none'%3E%3Cpath d='M7 0L14 6H0L7 0Z' fill='%23192526'/%3E%3C/svg%3E");
                  width: 14px;
                  height: 6px;
                  border: 0;
                  top: -6px;
                  margin-left: -7px;
                }

                #pwf-1 .invisible {
                  display: none;
                }

                #pwf-1 .spz-wrapper:has(#business_name) {
                  margin-bottom: 12px;
                }
                #pwf-1:has(.carousel-inner .slide-10.active) .questions_wrap ~ .content-between{
                  margin-top: 0;
                }
                .questions_wrap{
                  padding: 38.5px 0 19px;
                }
                .questions_wrap:not(:has(.question_item[style="display: block;"])){
                  padding:0 0 29px;
                }
                .question_heading {
                  padding-bottom: 30px;
                }

                .question_heading h2 {
                  color: #171717;
                  font-family: proxima-nova, sans-serif;
                  font-size: 24px;
                  font-weight: 600;
                  line-height: 31.2px;
                  text-align: center;
                  margin-bottom: 0;
                }
                .question_list{
                  max-width: 780px;
                  margin: auto;
                }
                .question_3 .question_list{
                  max-width: 920px;
                }
                .question_4 .question_list{
                  max-width: 720px;
                }
                .carousel-inner .slide-9 .grid{
                  max-width: 508px;
                  margin: auto;
                  gap: 12px;
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
                  border: 1px solid rgba(175, 146, 125, 0.40);
                  box-shadow: 0 4px 16px -1px rgba(0, 0, 0, 0.06);
                }
                .question_data a:focus {
                  border: 2px solid #2468C7;
                  box-shadow: 0 0 0 2px rgba(36, 104, 199, 0.25), 0 4px 16px -1px rgba(0, 0, 0, 0.06);
                }

                .question_data a strong {
                  display: block;
                  color: #171717;
                  text-align: center;
                  font-family: proxima-nova, sans-serif;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 23.4px;
                }

                .question_data.active a {
                  border: 2px solid #2468C7;
                  background: #FFF;
                }

                .questions_wrap .question_item {
                  display: none;
                }

                .questions_wrap .question_item.question_1 {
                  display: block;
                }

                .question_6 .question_heading{
                  padding-bottom: 26px;
                }
                .Accordions {
                  display: block;
                }

                .accordion_item {
                  width: 100%;
                  height: auto;
                  margin: 5px 0 10px;

                  border-radius: 16px;
                  border: 1px solid rgba(25, 37, 38, 0.20);
                  background: #F4F2F0;

                }

                .Accordions .accordion_item:last-child{
                  margin-bottom: 9px;
                }

                .accordion_item .title_tab {
                  width: 100%;
                  padding: 29.5px 29px 30.5px;
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  cursor: pointer;
                  transition: background-color 0.3s ease-in;
                }

                .accordion_item .title_tab.active {
                  padding: 28.5px 29px 30px;
                }

                .accordion_item .title_tab .title {
                  width: 100%;
                  color: #171717;
                  font-family: proxima-nova, sans-serif;
                  font-size: 20px;
                  font-weight: 600;
                  line-height: 26px;
                  text-align: left;
                  position: relative;
                }

                .accordion_item .title_tab .title .icon {
                  position: absolute;
                  right: 0;
                  top: calc(50% - 5.5px);
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
                  overflow: visible;
                  padding: 0 29px 19.5px;
                }

                .inner_content p {
                  width: 98%;
                  margin: auto;
                  padding: 18px 15px;
                  font-size: 16px;
                  line-height: 28px;
                  letter-spacing: 1px;
                }

                .accordion_item .title_tab.active .title .icon {
                  transform: rotate(0deg);
                  top: calc(50% - 9.5px);
                  right: 4px;
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

                .inner_content .question_list  {
                  max-width: 880px;
                }
                .inner_content .question_list ul {
                  justify-content: flex-start;
                }

                #pwf-1 .slide-1,
                #pwf-1 .slide-2,
                #pwf-1 .slide-3,
                #pwf-1 .slide-4,
                #pwf-1 .slide-5,
                #pwf-1 .slide-6 {
                  display: none;
                }
                .questions_wrap ~ .content-between .flex-1:nth-of-type(1):has(a.invisible){
                  display: none;
                }
                .questions_wrap ~ .content-between:has(.flex-1:nth-of-type(1) a.invisible){
                  justify-content: center;
                }
                .questions_wrap ~ .content-between:not(:has(.flex-1:nth-of-type(1) a.invisible)){
                  display: flex;
                  justify-content: space-between;
                }
                .questions_wrap ~ .content-between .flex-1:nth-of-type(1){
                  text-align: left;
                }
                .questions_wrap ~ .content-between .flex-1:nth-of-type(1){
                  text-align: left;
                  padding-left: 3.5px;
                  margin-top: -8px;
                }
                .questions_wrap ~ .content-between .flex-1:nth-of-type(1) span.mr-2{
                  margin-top: 8px;
                  transform: translateY(3.5px) translateX(-3.5px);
                  display: inline-block;
                  margin-right: 2.5px;
                }
                #pwf-1 .back-link:hover>div svg g path{
                  stroke: #121111;
                }
                .questions_wrap ~ .content-between .w-100 ~ .flex-1{
                  display: none;
                }
                .slider_heading{
                  padding: 38.5px 0 12.5px;
                }
                .slider_heading h3{
                  color: #171717;
                  font-family: proxima-nova, sans-serif;
                  font-size: 24px;
                  font-weight: 600;
                  line-height: 31.2px;
                  text-align: center;
                  margin: 0;
                }
                .carousel-item  strong{
                  display: none;
                  text-align: center!important;
                  color: #171717;
                  font-family: proxima-nova, sans-serif;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 26px;
                  margin: 0 0 31.5px;
                }
                #pwf-1 .carousel-inner:has(.slide-1.active) .slider_heading,
                #pwf-1 .carousel-inner:has(.slide-2.active) .slider_heading,
                #pwf-1 .carousel-inner:has(.slide-3.active) .slider_heading,
                #pwf-1 .carousel-inner:has(.slide-4.active) .slider_heading,
                #pwf-1 .carousel-inner:has(.slide-5.active) .slider_heading,
                #pwf-1 .carousel-inner:has(.slide-6.active) .slider_heading{
                  display: none;
                }
                #pwf-1 .carousel-inner .slide-8.active > strong,
                #pwf-1 .carousel-inner .slide-9.active > strong,
                #pwf-1 .carousel-inner .slide-10.active > strong,
                #pwf-1 .carousel-inner .slide-11.active > strong{
                  display: block;
                }
                @media (min-width: 768px) and (max-width: 1023.98px) {
                  .question_heading{
                    padding-bottom: 30.5px;
                  }
                  .question_heading h2 {
                    font-size: 20px;
                    line-height: 26px;
                  }
                  .questions_wrap {
                    padding: 39.5px 0 18px;
                  }
                  .questions_wrap:has(.question_6[style="display: block;"]) {
                    padding-bottom: 19px;
                  }
                  .question_data{
                    width: 152px;
                  }
                  .question_4 .question_list {
                    max-width: 620px;
                  }
                  .question_6 .question_heading {
                    padding-bottom: 25.5px;
                  }
                  .accordion_item .title_tab {
                    width: 100%;
                    padding: 22.5px 15px 23px;
                  }
                  .accordion_item .title_tab .title {
                    font-size: 18px;
                    line-height: 23.4px;
                  }
                  .accordion_item .title_tab.active {
                    padding: 22.5px 15px 16px;
                  }
                  .inner_content .question_list ul{
                    margin: 0;
                  }
                  .inner_content {
                    width: 100%;
                    height: auto;
                    display: none;
                    // overflow: hidden;
                    padding: 0 15px 15px;
                  }
                  .inner_content .question_list ul li {
                    width: 100%;
                    padding: 0 0 10px;
                  }
                  .inner_content .question_data {
                    width: 100%;
                    height: auto;
                  }
                  .inner_content .question_data a {
                    padding: 15px 15px;
                    justify-content: flex-start;
                    flex-direction: row;
                    height: auto;
                  }
                  .inner_content .question_data a br{
                    display: none;
                  }
                  .question_data a{
                    padding: 24px 15px;
                  }
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
                    margin-top: 0;
                  }

                  #pwf-1 div:has(.disclosure-tooltip) small {
                    max-width: 270px;
                    display: block;
                    text-align: left;
                  }

                  #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip {
                    transform: translate(1.5px, 2.5px);
                  }
                  #pwf-1 div:has(.disclosure-tooltip) small sup {
                    margin-left: 0.5px;
                    top: -6px;
                  }

                  #pwf-1 .btn-action {
                    width: fit-content;
                  }

                  // #pwf-1 div:has(>.btn-action) {
                  //   width: calc(100% + 2px);
                  // }

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
                  .questions_wrap {
                    padding: 22px 0 8.5px;
                  }
                  .question_heading h2 {
                    font-size: 20px;
                    line-height: 28px;
                    text-align: left;
                  }
                  .questions_wrap:has(.question_6[style="display: block;"]) {
                    padding-bottom: 9px;
                  }
                  .question_data{
                    width: 152px;
                  }
                  .question_4 .question_list {
                    max-width: 620px;
                  }
                  .question_6 .question_heading {
                    padding-bottom: 25.5px;
                  }
                  .accordion_item .title_tab {
                    width: 100%;
                    padding: 22.5px 15px 23px;
                  }
                  .accordion_item .title_tab .title {
                    font-size: 18px;
                    line-height: 23.4px;
                  }
                  .accordion_item .title_tab.active {
                    padding: 22.5px 15px 16px;
                  }
                  .inner_content .question_list ul{
                    margin: 0;
                  }
                  .inner_content {
                    width: 100%;
                    height: auto;
                    display: none;
                    // overflow: hidden;
                    padding: 0 15px 15.5px;
                  }
                  .question_list ul {
                    justify-content: center;
                  }
                  .inner_content .question_list ul li {
                    width: 100%;
                    padding: 0 0 10px;
                  }
                  .inner_content .question_data {
                    width: 100%;
                    height: auto;
                  }
                  .inner_content .question_data a {
                    padding: 15px 15px;
                    justify-content: flex-start;
                    flex-direction: row;
                    height: auto;
                  }
                  .inner_content .question_data a strong{
                    text-align: left;
                  }
                  .question_data {
                    width: 151px;
                    height: 64px;
                  }
                  .question_data a strong {
                    font-size: 16px;
                    line-height: 20.8px;
                  }
                  .question_5 .question_heading h2 {
                    margin-right: -4px;
                  }
                  #pwf-1 .back-link, #pwf-1 .back-link>div {
                    display: flex;
                    align-items: center;
                  }
                  #pwf-1 .back-link, #pwf-1 .back-link>div{
                    display: flex;
                    align-items: center;
                    padding-top: 3px;
                  }
                  .questions_wrap ~ .content-between .flex-1:nth-of-type(1) span.mr-2 {
                    transform: translateY(-2.5px);
                  }
                  .accordion_item .title_tab.active {
                    padding: 22.5px 15px 15.5px 15px;
                  }
                  .accordion_item .title_tab .title {
                    font-size: 18px;
                    line-height: 23.4px;
                    padding-right: 25px;
                  }
                  .disclosure-tooltip .disclosure-tooltiptext{
                    right: -190px;
                  }
                  #pwf-1 .disclosure-tooltip .disclosure-tooltiptext:after {
                    right: unset;
                    left: 20%;
                  }
                  .slider_heading {
                    padding: 35px 0 9px;
                  }
                  .slider_heading h3 {
                    color: #181818;
                    font-family: proxima-nova, sans-serif;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    text-align: left;
                    margin: 0;
                  }
                  #pwf-1 .carousel-inner .slide-8.active > strong, 
                  #pwf-1 .carousel-inner .slide-9.active > strong, 
                  #pwf-1 .carousel-inner .slide-10.active > strong, 
                  #pwf-1 .carousel-inner .slide-11.active > strong {
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 23.4px;
                    text-align: left !important;
                    margin-bottom: 32px;
                  }
                  #pwf-1 .carousel-inner .slide-8.active .spz-wrapper,
                  #pwf-1 .carousel-inner .slide-9.active .spz-wrapper,
                  #pwf-1 .carousel-inner .slide-10.active .spz-wrapper,
                  #pwf-1 .carousel-inner .slide-11.active .spz-wrapper {
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 23.4px;
                    text-align: left !important;
                    margin-bottom: 32px;
                    padding: 0 1px;
                  }
                  #pwf-1 .carousel-inner .slide-11.active .spz-wrapper{
                    margin-bottom: 0;
                  }
                  .questions_wrap:not(:has(.question_item[style="display: block;"])) {
                    padding: 0 0 6px;
                  }
                  #pwf-1 .carousel-inner .slide-9.active .fullname-wrapper>div>.grid{
                    gap: 10px;
                  }
                  #pwf-1 .carousel-inner .slide-9.active .spz-wrapper{
                    margin-bottom: 0;
                  }
                  #pwf-1 .spz-wrapper:has(input#business_name), 
                  #pwf-1 .spz-wrapper:has(input#email),
                  .carousel-inner .slide-9 .grid,
                  #pwf-1 .carousel-item.active.slide-11,
                  #pwf-1 .carousel-item:has(input#business_name) .text-left,
                  #pwf-1 .carousel-item:has(input#email) .text-left {
                    max-width: 100%;
                  }
                  .inner_content .question_data a br{
                    display: none;
                  }
                    #pwf-1 .carousel-item.active.slide-11 .legal-box{
                      padding-right: 2px;
                    }
                }
                `;

              shadowRoot.appendChild(style);

              shadowRoot.querySelector('.carousel-inner').insertAdjacentHTML("afterbegin", `
                  <div class="steps"></div>
                  <div class="slider_heading">
                    <h3>Enter your information to see your results.</h3>

                  </div>
                `)
              shadowRoot.querySelector('.carousel-item.slide-8').insertAdjacentHTML('afterbegin', `<strong>What is your business’ name?</strong>`);
              shadowRoot.querySelector('.carousel-item.slide-9').insertAdjacentHTML('afterbegin', `<strong>What is your  name?</strong>`);
              shadowRoot.querySelector('.carousel-item.slide-10').insertAdjacentHTML('afterbegin', `<strong>What is your email address?</strong>`);
              shadowRoot.querySelector('.carousel-item.slide-11').insertAdjacentHTML('afterbegin', `<strong>What is your phone number?</strong>`);

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
                                <strong>500 - 599</strong>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class="question_data">
                              <a href="javascript:void(0)">
                                <strong>600 - 649</strong>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class="question_data">
                              <a href="javascript:void(0)">
                                <strong>650 - 679</strong>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class="question_data">
                              <a href="javascript:void(0)">
                                <strong>680 - 719</strong>
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
                        <h2>What is your company’s industry?</h2>
                      </div>
                      
                      <div class="container">
                        <div class="Accordions">
                          <div class="accordion_item">
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
                                        <strong>Political, Governmental, or Public Organizations</strong>
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
                          <div class="accordion_item">
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
                          <div class="accordion_item">
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
                                        <strong>Arts, Entertainment, <br> and Recreation</strong>
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
                          <div class="accordion_item">
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
                                        <strong>Automobile Dealers <br> & Parts</strong>
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

              const disclosureElement = shadowRoot.querySelector('#pwf-1 div:has(.disclosure-tooltip)');
              if (disclosureElement) {
                console.log(disclosureElement);
                shadowRoot.querySelector('.carousel-inner').insertAdjacentElement("beforebegin", disclosureElement);
              }

              const small = shadowRoot.querySelector('#pwf-1 div:has(.disclosure-tooltip) small');

              // get current HTML
              let smallHTML = small.innerHTML;

              // replace "...credit<sup>1</sup>. " with "...credit.<sup>1</sup> "
              if (window.location.pathname == '/sba-loans') {
                smallHTML = smallHTML.replace(
                  /credit<sup>1<\/sup>\.\s?/,
                  'credit.<sup>1</sup> '
                );
              } else {
                smallHTML = smallHTML.replace(
                  /credit<sup>1<\/sup>\.\s?/,
                  'credit.<sup>2</sup> '
                );
              }
              // update the element
              small.innerHTML = smallHTML;

              if (shadowRoot.querySelector('.questions_wrap ~ .content-between .flex-1:nth-of-type(1) span.mr-2')) {
                shadowRoot.querySelector('.questions_wrap ~ .content-between .flex-1:nth-of-type(1) span.mr-2').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_28672_2616)">
                    <path d="M10 12L5 7L10 2" stroke="#78716C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_28672_2616">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>`;
              }

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

                  // Special handling for question_6: open accordion with active item (only run once; skip if already open)
                  if (questionNum === 6) {
                    requestAnimationFrame(() => {
                      const activeItem = shadowRoot.querySelector('.question_6 .Accordions .question_data.active');
                      if (!activeItem) return;
                      const accordionItem = activeItem.closest('.accordion_item');
                      if (!accordionItem) return;

                      const titleTab = accordionItem.querySelector('.title_tab');
                      const innerContent = accordionItem.querySelector('.inner_content');
                      if (!titleTab || !innerContent) return;

                      const isTargetAlreadyOpen = titleTab.classList.contains('active') &&
                        (innerContent.style.display === 'block' || innerContent.style.display === '' ||
                          window.getComputedStyle(innerContent).display !== 'none');

                      const allAccordionItems = shadowRoot.querySelectorAll('.question_6 .accordion_item');
                      if (isTargetAlreadyOpen) {
                        // Target is already open; close others without animation so repeated showQuestion(6) calls don't re-run
                        allAccordionItems.forEach(item => {
                          if (item === accordionItem) return;
                          const t = item.querySelector('.title_tab');
                          const c = item.querySelector('.inner_content');
                          if (t && c) {
                            t.classList.remove('active');
                            c.style.display = 'none';
                            c.style.height = '';
                            c.style.overflow = '';
                          }
                        });
                        return;
                      }

                      // Close all accordion items first, then open the target once
                      allAccordionItems.forEach(item => {
                        const t = item.querySelector('.title_tab');
                        const c = item.querySelector('.inner_content');
                        if (t && c) {
                          t.classList.remove('active');
                          if (c.style.display === 'block' || c.style.display === '' ||
                            window.getComputedStyle(c).display !== 'none') {
                            slideUp(c);
                          }
                        }
                      });

                      setTimeout(() => {
                        const tab = accordionItem.querySelector('.title_tab');
                        const content = accordionItem.querySelector('.inner_content');
                        if (tab && content) {
                          content.style.removeProperty('display');
                          content.style.removeProperty('height');
                          content.style.removeProperty('overflow');
                          tab.classList.add('active');
                          slideDown(content);
                        }
                      }, 550);
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
                function getActiveSlideNumber() {
                  const activeSlide = shadowRoot.querySelector('.carousel-item.active') ||
                    Array.from(shadowRoot.querySelectorAll('.carousel-item')).find(el => el.classList.contains('active'));
                  if (!activeSlide) return 0;
                  const slideMatch = activeSlide.className.match(/slide-(\d+)/);
                  return slideMatch ? parseInt(slideMatch[1], 10) : 0;
                }

                function isOnFormSlides() {
                  const n = getActiveSlideNumber();
                  return n === 8 || n === 9 || n === 10 || n === 11;
                }

                function getCurrentQuestion() {
                  for (let i = 1; i <= 6; i++) {
                    const question = shadowRoot.querySelector(`.question_${i}`);
                    if (question && question.style.display === 'block') {
                      return i;
                    }
                  }
                  return 1; // Default to question 1 if none found
                }

                function hideAllQuestions() {
                  removeError();
                  for (let i = 1; i <= 6; i++) {
                    const question = shadowRoot.querySelector(`.question_${i}`);
                    if (question) question.style.display = 'none';
                  }
                }

                function setupBackButton() {
                  const backButton = shadowRoot.querySelector('#pwf-1 .back-link');
                  if (backButton && !backButton.hasAttribute('data-back-setup')) {
                    backButton.setAttribute('data-back-setup', 'true');
                    backButton.addEventListener('click', function (e) {
                      // Don't preventDefault - let the back link move the carousel. Observe when .active moves (transition can take time), then show matching question for slide 1-6
                      const checkAfterTransition = () => {
                        const activeNum = getActiveSlideNumber();
                        if (activeNum >= 1 && activeNum <= 6) {
                          showQuestion(activeNum);
                        } else {
                          hideAllQuestions();
                        }
                      };
                      [100, 300, 500, 700, 1000].forEach(delay => setTimeout(checkAfterTransition, delay));
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

                    button.addEventListener('click', function (e) {
                      // When any of slide-8, 9, 10, 11 has .active: don't run our logic, keep all 6 questions hidden
                      if (isOnFormSlides()) {
                        hideAllQuestions();
                        return;
                      }

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
                // When active slide is 8-11 (e.g. after next from slide-6 to slide-8), remove error and hide all questions
                const activeSlide = shadowRoot.querySelector('.carousel-item.active') ||
                  Array.from(shadowRoot.querySelectorAll('.carousel-item')).find(el => el.classList.contains('active'));
                if (activeSlide) {
                  const slideMatch = activeSlide.className.match(/slide-(\d+)/);
                  const slideNumber = slideMatch ? parseInt(slideMatch[1], 10) : 0;
                  if (slideNumber >= 8 && slideNumber <= 11) {
                    const existingError = shadowRoot.querySelector('.questions_wrap + .text-left');
                    if (existingError) existingError.remove();
                    for (let i = 1; i <= 6; i++) {
                      const question = shadowRoot.querySelector(`.question_${i}`);
                      if (question) question.style.display = 'none';
                    }
                  }
                }
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
                const firstItem = shadowRoot.querySelector(".accordion_item");
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
                      const siblings = parentItem.parentElement.querySelectorAll(".accordion_item");

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
                  shadowRoot.querySelector('#business_name').insertAdjacentHTML("afterend", "<label class='spz-label business_name'>Business Name</label>")
                }
                if (shadowRoot.querySelector('#first') && !shadowRoot.querySelector('.spz-label.first')) {
                  const input = shadowRoot.querySelector('#first');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#first').insertAdjacentHTML("afterend", "<label class='spz-label first'>First Name</label>")
                }
                if (shadowRoot.querySelector('#last') && !shadowRoot.querySelector('.spz-label.last')) {
                  const input = shadowRoot.querySelector('#last');   // select your input
                  const wrapper = document.createElement('div');   // create wrapper
                  wrapper.className = 'spz-wrapper';               // add class
                  input.parentNode.insertBefore(wrapper, input);
                  wrapper.appendChild(input);
                  shadowRoot.querySelector('#last').insertAdjacentHTML("afterend", "<label class='spz-label last'>Last Name   </label>")
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