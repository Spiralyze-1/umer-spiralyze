(function() {
  const bodyInterval3017 = setInterval(function(){
    if(document.querySelector('body') && !document.querySelector('.spz_3017_v') && (
      document.querySelector('.lp-hero') 
    )){
      clearInterval(bodyInterval3017)
      let formInterval;
      document.querySelector('body').classList.add("spz_3017_v","spz_3017_v2")
      document.querySelector('.lp-logo-desktop').setAttribute("src","https://res.cloudinary.com/spiralyze/image/upload/v1780293491/lendio/3013/logo-desktop.svg")
      document.querySelector('.lp-logo-mobile').setAttribute("src","https://res.cloudinary.com/spiralyze/image/upload/v1780477970/lendio/3013/lendio-mobile.svg")
      document.querySelector('.lp-hero-img.show-large').setAttribute("src","https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/v2-destop-hero.png")
      document.querySelector('.lp-hero-img.show-medium').setAttribute("src","https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/v2-tablet-hero.png")
      document.querySelector('.lp-hero-img.show-small').setAttribute("src","https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/v2-mobile-hero.png")
      document.querySelector('.lp-hero-content').insertAdjacentHTML("afterbegin",`
        <a href=""><img src="https://res.cloudinary.com/spiralyze/image/upload/v1780293491/lendio/3013/logo-desktop.svg" alt="Lendio Logo" width="127" height="25" class="spz-company-logo"></a>  
      `)
      document.querySelector('.lp-hero-eyebro-tooltip img').setAttribute("src","https://res.cloudinary.com/spiralyze/image/upload/v1780295026/lendio/3013/info-icon.svg")
      document.querySelector('.spz-company-logo').parentElement.setAttribute("href",document.querySelector('.lp-logo-desktop').parentElement.getAttribute("href"))
      document.querySelector('.lp-hero-eyebro-wrapper').insertAdjacentHTML("afterend",`
        <div class="spz-3013-trustpilot-section">
          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1780393080/lendio/3013/TP-Logo-Tricolor-Black-RGB.svg" width="104" height="26" alt="Trustpilot Logo">
          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1780393080/lendio/3013/start-logo.svg" width="98" height="18" alt="Star Logo">
          <div class="text">
            <strong>4.5</strong> 
            <span>(21,750 reviews)</span>
          </div>
        </div>
      `)
      document.querySelector('.lp-hero-title').innerHTML="Get funded in <span class='tablet-break'></span>as little as <span class='lp-hero-title-highlight'>24 hours.</span><sup>1</sup>";
      document.querySelector('.lp-hero-title').insertAdjacentHTML("afterend",`
        <div class="spz-3013-eyebrow-text">
          No hidden fees.<span class='mobile-break'></span> No impact to credit score.<sup>2</sup>
        </div>
      `)
      document.querySelector('.lp-hero-container').insertAdjacentHTML("beforeend",`
        <div class="spz-3013-logo-section">
          <div class="title">How it works</div>
          <div class="desktop">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/desktop-1.jpg" alt="Step 1 Image" width="384" height="380">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/desktop-2.jpg" alt="Step 2 Image" width="384" height="380">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/desktop-3.jpg" alt="Step 3 Image" width="384" height="380">
          </div>
          <div class="tablet">
            <div class="left">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/step-tablet-1.png" alt="Step 1 Image" width="321.3" height="321.3">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/step-tablet-2.png" alt="Step 2 Image" width="321.3" height="321.3">
            </div>
            <div class="right">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3013/ui-tablet-3_2.webp" alt="Step 3 Image" width="321.3" height="380">
            </div>
          </div>
        </div>
        <div class="spz-3013-footer-section">
          <div class="logos">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1780397994/lendio/3013/footer-lendio-logo.svg" alt="Lendio Logo" width="106" height="20">
            <div class="socmed">
            <a href="https://www.instagram.com/lendio/" target="_blank"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1780397994/lendio/3013/ig-logo.svg" alt="Instagram Logo" width="19" height="19"></a>
            <a href="https://www.facebook.com/Lendio" target="_blank"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1780397994/lendio/3013/fb-logo.svg" alt="Facebook Logo" width="19" height="19"></a>
            <a href="https://twitter.com/Lendio" target="_blank"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1780397994/lendio/3013/x-logo.svg" alt="X Logo" width="19" height="16"></a>
            <a href="https://www.linkedin.com/company/lendio/" target="_blank"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1780397994/lendio/3013/linkedin-logo.svg" alt="Linkedin Logo" width="19" height="19"></a>
            </div>
          </div>
          <div class="text">
            <div class="links">
              <a href="https://www.lendio.com/agreements/terms-of-use/" target="_blank">Terms of Use</a>
              <a href="https://www.lendio.com/agreements/privacy-policy/" target="_blank">Privacy Policy</a>
              <a href="https://www.lendio.com/opt-out/">Your Privacy Choices</a>
            </div>
            <div class="copyright">
              Copyright © 2026 Lendio. All Rights Reserved.   |  4100 Chapel Ridge Road, Suite 500, Lehi, UT 84043
            </div>
            <div class="copyright-desc">
              <p>California loans made pursuant to the California Financing Law, Division 9 (commencing with Section 22000) of the Finance Code. All such loans made through Lendio Partners, LLC, a wholly-owned subsidiary of Lendio, Inc. and a licensed finance lender/broker, California Financing Law License No. 60DBO-44694.</p>
              <p>
              1. Time to fund depends upon the product that you select, and can be as little as 24 hours, but may be longer.<br>
              2. Filling out an application for business funding and submitting it to our funding partners will not impact your personal credit score. However, depending on the product and lender, accepting a
              funding offer may result in a hard credit inquiry, which could affect your personal credit score.
              </p>
            </div>
          </div>
        </div>  
      `)
      // form
      formInterval=setInterval(function(){
        if(document.querySelector('lendio-start') && document.querySelector('lendio-start').shadowRoot && document.querySelector('lendio-start').shadowRoot.querySelectorAll("style").length==2){
          clearInterval(formInterval);
          const shadowRoot = document.querySelector('lendio-start').shadowRoot;
          const style = document.createElement('style');
          style.textContent = `
          #pwf-1 {
            --flex-w: 140px;
            --flex-w-full: 100%;
            --flex-w-content-w:fit-content;
            --flex-w-long: 220px;
            --flex-ml-auto: auto;
            --flex-ml-0: 0;
            --back-display: none;
            --back-opacity: 0;
          }
          #pwf-1{
            flex-direction: column;
            gap: 9px;
            margin-top: 31.5px;
          }
          #pwf-1.additional-answered{
            margin-top: 0 !important;
          }
          // #pwf-1 .error-text{
          //   white-space: nowrap;
          // }
          #pwf-1:has(.slide-11.active) div:has(>#pwf-submit-button){
            width: 0px;
            visibility: hidden;
            opacity: 0;
          }
          .form_header{
            padding-bottom: 26.5px;
          }
          .form_header h2{
            color: #171717;
            font-size: 28px;
            font-weight: 500;
            line-height: 36.4px;
            font-family: 'proxima-nova';
            text-align: center;
          }
          .steps,
          .form_header{
            display: none;
          }
          .additional-answered{
            padding: 33px 47px 35px 46.5px;
            border-radius: 12px;
            border: 1px solid rgba(175, 146, 125, 0.20);
            background: #FFF;
            margin-top: 0;
          }
          .additional-answered .steps,
          .additional-answered .form_header{
            display: block;
          }
          .spz_steps > ul{
            display: flex;
            flex-wrap: wrap;
            gap: 18px 18px;
            padding-left: 0;
            list-style: none;
            margin: 0 1px 0 1px;
          }
          .spz_steps > ul > li {
            width: calc(50% - 9px);
          }
          .spz_steps > .col-12{
            padding-left: 1px;
          }
          .spz_steps ul + .col-12{
            padding-top: 2px;
          }
          .custom_stepField{
            width: 100%;
          }
          .custom_stepField input:-webkit-autofill,
          .custom_stepField input:-webkit-autofill:hover,
          .custom_stepField input:-webkit-autofill:focus,
          .custom_stepField input:-webkit-autofill:active,
          .custom_stepField select:-webkit-autofill,
          .custom_stepField select:-webkit-autofill:hover,
          .custom_stepField select:-webkit-autofill:focus,
          .custom_stepField select:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0 30px white inset !important;
          }
          #pwf-1 input:-webkit-autofill, #pwf-1 input:-webkit-autofill:hover, #pwf-1 input:-webkit-autofill:focus{
            -webkit-box-shadow: 0 0 0 30px white inset !important;
          }
          .spz_steps ul li:has(.error-text) .custom_stepField select,
          .spz_steps ul li:has(.error-text) .custom_stepField input{
            border-color: #BE3A3A;
          }
          #pwf-1 select, 
          #pwf-1 input:not([type="checkbox"]) {
            border-radius: 8px;
          }
          #pwf-1 select, #pwf-1 input:not([type="checkbox"]){
            padding: 21px 15px 0 !important;
          }
          #pwf-1 select{
            padding-right: 35px !important;
            background-position: right 15px center;
          }

          #pwf-1 select.additional-question-select{
            padding: 21px 24px 0 !important;
            border-radius: 999px;
          }
          #pwf-1 select.additional-question-select{
            padding-right: 46px !important;
            background-position: right 24px center;
          }
          #pwf-1 select ~ .form-field-label, #pwf-1 input:not([type="checkbox"]) ~ .form-field-label{
            left: 15px;
            transform: translateY(calc(-50% - 1.5px));
          }
          #pwf-1 select.additional-question-select ~ .form-field-label{
            left: 24px;
          }
          #pwf-1 div:has(>.btn-action){
            width: calc(100% - 57px);
            text-align: center;
            margin-left: var(--flex-ml-0);
          }
          #pwf-1 .btn-action{
            width: var(--flex-w);
            margin-left: -57px;
          }
          #pwf-1 .btn-action.slide-11-active{
            width: var(--flex-w-long);
          }
            
          #pwf-1 .flex:has(.btn-action){
            width: 100%;
            margin-left: 0px;
            margin-top: 8px;
            justify-content: space-between;
          }
          #pwf-1 .flex:has(.btn-action):not(:has(.w-100.text-center.my-4[style="display: none;"])) .additional-button-wrapper,
          #pwf-1 .flex:has(.btn-action):not(:has(.w-100.text-center.my-4[style="display: none;"])) .additional-back-button-wrapper{
            display: none!important;
          }
          /* Keep custom next/back visible on slides 2-11 even when control toggles loader display */
          #pwf-1:has(.slide-2.active) .additional-button-wrapper,
          #pwf-1:has(.slide-3.active) .additional-button-wrapper,
          #pwf-1:has(.slide-4.active) .additional-button-wrapper,
          #pwf-1:has(.slide-5.active) .additional-button-wrapper,
          #pwf-1:has(.slide-6.active) .additional-button-wrapper,
          #pwf-1:has(.slide-7.active) .additional-button-wrapper,
          #pwf-1:has(.slide-8.active) .additional-button-wrapper,
          #pwf-1:has(.slide-9.active) .additional-button-wrapper,
          #pwf-1:has(.slide-10.active) .additional-button-wrapper,
          #pwf-1:has(.slide-11.active) .additional-button-wrapper,
          #pwf-1:has(.slide-2.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-3.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-4.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-5.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-6.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-7.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-8.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-9.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-10.active) .additional-back-button-wrapper,
          #pwf-1:has(.slide-11.active) .additional-back-button-wrapper {
            display: block !important;
          }
          #pwf-1 div:has(.disclosure-tooltip){
            position: relative;
            bottom: 0;
            // left: 0;
            // right: 0;
            margin: 0;
            width: 352px;
            margin: -1px auto 0;
            text-align: center;
          }
          #pwf-1 div:has(.disclosure-tooltip) small{
            color: #78716C;
          }
          #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
            color: #78716C;
          }
          #pwf-1 div:has(>.back-link){
            position: static;
            transform: translate(-2px, -2px);
          }
          #pwf-1:has(.back-link:not(.invisible)){
            margin-top: 31.5px;
          }
          #pwf-1 .back-link >div{
            background-position: 2px calc(50% + 1px);
          }
          #pwf-1 select:focus ~ .form-field-label, 
          #pwf-1 select:not(:has(option:first-child:checked)) ~ .form-field-label, 
          #pwf-1 input:focus ~ .form-field-label, 
          #pwf-1 input:not(:placeholder-shown) ~ .form-field-label{
            left: 15px;
            transform: none;
          }
          #pwf-1 select.additional-question-select:focus ~ .form-field-label, 
          #pwf-1 select.additional-question-select:not(:has(option:first-child:checked)) ~ .form-field-label{
            left: 24px;
          }
          #pwf-1 input#email, #pwf-1 input#primary_phone{
            padding-left: 47px !important;
          }
          #pwf-1 input:not([type="checkbox"])#email ~ .form-field-label, 
          #pwf-1 input:not([type="checkbox"])#primary_phone ~ .form-field-label {
            left: 47px;
          }
          #pwf-1 input#email:focus ~ .form-field-label, 
          #pwf-1 input:not(:placeholder-shown)#email ~ .form-field-label, 
          pwf-1 input#primary_phone:focus ~ .form-field-label, 
          #pwf-1 input:not(:placeholder-shown)#primary_phone ~ .form-field-label{
            left: 47px;
          }
          #pwf-1 .form-field-wrapper:has(input:not([type="checkbox"])) ~ img{
            left: 15px;
          }
          #pwf-1 .mb-3:has(.form-field-wrapper #primary_phone):not(.row){
            margin-bottom:20px;
          }
          #pwf-1 .legal-box{
            margin-top: -2.5px;
            margin-left: 4px;
          }
          #pwf-1 .legal-consent{
            padding: 1px 1px 0px 1px;
            margin-bottom: -0.5px;
          }
          #pwf-1 .flex:has(> #marketingSmsOptIn){
            margin: 16px 0;
          }
          #pwf-1 .legal-consent .agreements{
            line-height: 18px;
          }
          #pwf-1 .flex.mb-3:has(.agreements[data-cy="applicationSigned-text"]){
            margin-bottom: 0;
          }
          #pwf-1:not(.additional-answered) .carousel-item,
          #pwf-1:not(.additional-answered) button[data-cy="next"],
          #pwf-1:not(.additional-answered) .spz_steps,
          #pwf-1:has(.slide-1.active) .spz_steps,
          #pwf-1.additional-answered .additional-question,
          #pwf-1.additional-answered:has(.slide-1.active) .additional-button-wrapper,
          #pwf-1 .spz_four_steps,
          #pwf-1.spz-four-mode .spz_six_steps {
            display: none;
          }
          #pwf-1 .carousel-item:not(.slide-1){
            visibility: hidden;
            position: absolute;
            pointer-events: none;
            height: 0;
            overflow: hidden;
            margin: 0;
            padding: 0;
          }
          #pwf-1.spz-four-mode .spz_four_steps {
            display: block;
          }
          #pwf-1:has(.slide-2.active) .form_header,
          #pwf-1:has(.slide-3.active) .form_header,
          #pwf-1:has(.slide-4.active) .form_header,
          #pwf-1:has(.slide-5.active) .form_header,
          #pwf-1:has(.slide-6.active) .form_header,
          #pwf-1:has(.slide-7.active) .form_header,
          #pwf-1:has(.slide-8.active) .form_header,
          #pwf-1:has(.slide-9.active) .form_header,
          #pwf-1:has(.slide-10.active) .form_header,
          #pwf-1:has(.slide-11.active) .form_header {
            padding-bottom: 26.5px;
          }
          #pwf-1:has(.slide-2.active) .additional-button-wrapper,
          #pwf-1:has(.slide-3.active) .additional-button-wrapper,
          #pwf-1:has(.slide-4.active) .additional-button-wrapper,
          #pwf-1:has(.slide-5.active) .additional-button-wrapper,
          #pwf-1:has(.slide-6.active) .additional-button-wrapper,
          #pwf-1:has(.slide-7.active) .additional-button-wrapper,
          #pwf-1:has(.slide-8.active) .additional-button-wrapper,
          #pwf-1:has(.slide-9.active) .additional-button-wrapper,
          #pwf-1:has(.slide-10.active) .additional-button-wrapper,
          #pwf-1:has(.slide-11.active) .additional-button-wrapper {
            display: block;
            min-width: unset;
            width: calc(100% - 57px);
            text-align: center;
            margin-left: -57px;
            margin-top: 0;
          }
          #pwf-1:has(.slide-2.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-3.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-4.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-5.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-6.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-7.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-8.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-9.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-10.active) .additional-button-wrapper button,
          #pwf-1:has(.slide-11.active) .additional-button-wrapper button {
            width: 140px;
          }
          #pwf-1:has(.slide-2.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-3.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-4.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-5.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-6.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-7.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-8.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-9.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-10.active) .additional-button-wrapper + div,
          #pwf-1:has(.slide-11.active) .additional-button-wrapper + div {
            width: unset;
          }
          #pwf-1:has(.slide-2.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-3.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-4.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-5.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-6.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-7.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-8.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-9.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-10.active) .flex:has(.btn-action),
          #pwf-1:has(.slide-11.active) .flex:has(.btn-action) {
            margin-top: 17px;
          }
          #pwf-1:has(.slide-2.active) button[data-cy="next"],
          #pwf-1:has(.slide-3.active) button[data-cy="next"],
          #pwf-1:has(.slide-4.active) button[data-cy="next"],
          #pwf-1:has(.slide-5.active) button[data-cy="next"],
          #pwf-1:has(.slide-6.active) button[data-cy="next"],
          #pwf-1:has(.slide-7.active) button[data-cy="next"],
          #pwf-1:has(.slide-8.active) button[data-cy="next"],
          #pwf-1:has(.slide-9.active) button[data-cy="next"],
          #pwf-1:has(.slide-10.active) button[data-cy="next"],
          #pwf-1:has(.slide-11.active) button[data-cy="next"],
          #pwf-1:has(.slide-2.active) .back-link,
          #pwf-1:has(.slide-3.active) .back-link,
          #pwf-1:has(.slide-4.active) .back-link,
          #pwf-1:has(.slide-5.active) .back-link,
          #pwf-1:has(.slide-6.active) .back-link,
          #pwf-1:has(.slide-7.active) .back-link,
          #pwf-1:has(.slide-8.active) .back-link,
          #pwf-1:has(.slide-9.active) .back-link,
          #pwf-1:has(.slide-10.active) .back-link,
          #pwf-1:has(.slide-11.active) .back-link {
            display: none !important;
          }
          // #pwf-1 .spz_steps .text-left .error-text {
          //   color: #b91c1c;
          // }
          #pwf-1 .custom_stepField.form-field-wrapper:has(+ .text-left .error-text) select,
          #pwf-1 .custom_stepField.form-field-wrapper:has(+ .text-left .error-text) input {
            outline-color: #b91c1c;
          }
          #pwf-1 .additional-button-wrapper{
            min-width: 100%;
            margin-top: 9px;
          }
          #pwf-1 .additional-button-wrapper button{
            cursor: pointer;
            width: 100%;
            height: 56px;
            overflow: hidden;
            background: #192526;
            color: #FEFDFD;
            font-family: proxima-nova, sans-serif;
            font-size: 16px;
            font-weight: 600;
            line-height: 20.8px;
            border: 0;
            letter-spacing: 0;
            padding-top: 6px;
            box-shadow: none;
            transform: none;
            padding-left: 0;
            padding-right: 0;
            margin-top: -1px;
            outline-color: var(--primary-700);
            border-radius: var(--button-radius);
            padding: 8px 40px;
            text-align: center;
            position: relative;
          }
          #pwf-1 .additional-button-wrapper button:hover{
            background: #121111;
          }
          #pwf-1 .additional-button-wrapper button:disabled{
            opacity: 0.6;
            cursor: not-allowed;
            pointer-events: none;
          }
         
          #pwf-1 .additional-back-button-wrapper{
            display: none;
            padding-left: 24px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cg clip-path='url(%23clip0_28944_277)'%3E%3Cpath d='M10 12L5 7L10 2' stroke='%2378716C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_28944_277'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: 2px calc(50% + 1.5px);
            transition-property: background-image;
            transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-duration: .15s;
            animation: fadeIn 1s ease-out forwards;
            opacity: 0;
          }
          #pwf-1.additional-answered:has(.active.slide-1),
          #pwf-1:has(.slide-2.active),
          #pwf-1:has(.slide-3.active),
          #pwf-1:has(.slide-4.active),
          #pwf-1:has(.slide-5.active),
          #pwf-1:has(.slide-6.active),
          #pwf-1:has(.slide-7.active),
          #pwf-1:has(.slide-8.active),
          #pwf-1:has(.slide-9.active),
          #pwf-1:has(.slide-10.active),
          #pwf-1:has(.slide-11.active){
            --back-display: block;
            --back-opacity: 1;
          }
          #pwf-1 .additional-back-button-wrapper{
            display: var(--back-display);
            opacity: var(--back-opacity);
          }
          
          #pwf-1 .additional-back-button-wrapper:hover{
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cg clip-path='url(%23clip0_2055_3072)'%3E%3Cpath d='M10 12L5 7L10 2' stroke='%23121111' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2055_3072'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
          }
          #pwf-1 .additional-back-button-wrapper button{
            color: #78716C;
            font-family: proxima-nova, sans-serif;
            font-size: 16px;
            font-weight: 500;
            line-height: 20.8px;
            cursor: pointer;
          }
          #pwf-1 .additional-back-button-wrapper:hover button{
            color: #121111;
          }
          #pwf-1:has(.carousel-item.slide-1.active) .carousel-inner{
            --bar-scale: calc(1 / 3);
          }
          #pwf-1:has(.carousel-item.slide-2.active) .carousel-inner{
            --bar-scale: calc(2 / 3);
          }
          #pwf-1:has(.carousel-item.slide-3.active) .carousel-inner{
            --bar-scale: calc(2 / 3);
          }
          #pwf-1:has(.carousel-item.slide-4.active) .carousel-inner{
            --bar-scale: calc(2 / 3);
          }
          #pwf-1:has(.carousel-item.slide-5.active) .carousel-inner{
            --bar-scale: calc(2 / 3);
          }
          #pwf-1:has(.carousel-item.slide-6.active) .carousel-inner{
            --bar-scale: calc(2 / 3);
          }
          #pwf-1:has(.carousel-item.slide-7.active) .carousel-inner{
            --bar-scale: calc(2 / 3);
          }
          #pwf-1:has(.carousel-item.slide-8.active) .carousel-inner{
            --bar-scale: calc(3 / 3);
          }
          #pwf-1:has(.carousel-item.slide-9.active) .carousel-inner{
            --bar-scale: calc(3 / 3);
          }
          #pwf-1:has(.carousel-item.slide-10.active) .carousel-inner{
            --bar-scale: calc(3 / 3);
          }
          #pwf-1:has(.carousel-item.slide-11.active) .carousel-inner{
            --bar-scale: calc(3 / 3);
          }
          .steps {
            width: calc(100% + 1px);
            height: 3px;
            border-radius: 999px;
            background: #F4F1F0;
            position: relative;
            overflow: hidden;
            margin-bottom: 22px;
            margin-top: 1.5px;
          }
          .steps::before{
            content:"";
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
          @media (min-width: 768px) and (max-width: 1023.98px) {
            #pwf-1:not(.additional-answered) .flex:has(.btn-action){
              margin-top: 0;
            }
            #pwf-1:has(.back-link:not(.invisible)) {
              margin-top: 26.5px;
            }
          }
          @media (max-width: 1024.98px) {
            #pwf-1:not(.additional-answered){
              margin-top: 27.5px;
            }
            #pwf-1 {
              margin-top: 26.5px;
            }
            #pwf-1 .carousel-inner{
              width: 100%;
            }
            #pwf-1 div:has(.disclosure-tooltip){
               width: 100%;
               text-align: center;
               margin: 0 auto;
               bottom: 0;
               position: relative;
            }
            #pwf-1.additional-answered div:has(.disclosure-tooltip){
              margin-top: -1px;
            }
            #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
              transform: translateY(-6px);
            }
            #pwf-1.additional-answered div:has(.disclosure-tooltip) small .disclosure-tooltip{
              transform: translateY(-1px);
            }
            #pwf-1:not(.additional-answered) div:has(.disclosure-tooltip) {
              position: absolute;
              bottom: -59px;
              width: 245px;
              right: 0;
            }
            #pwf-1 select.additional-question-select {
              padding-right: 35px !important;
              background-position: right 16px center;
            }
            #pwf-1 select.additional-question-select ~ .form-field-label {
                left: 16px;
            }
            #pwf-1 select.additional-question-select{
              padding-left: 16px !important;
            }
            #pwf-1 select.additional-question-select:focus ~ .form-field-label, 
            #pwf-1 select.additional-question-select:not(:has(option:first-child:checked)) ~ .form-field-label {
              left: 16px;
            }
            .additional-answered {
              padding: 33.5px 47px 35px 47px;
            }
            #pwf-1:has(.slide-2.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-3.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-4.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-5.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-6.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-7.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-8.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-9.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-10.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-11.active) .additional-button-wrapper {
              width: calc(100% - 57px);
              margin-left: -57px;
            }
            #pwf-1:has(.back-link:not(.invisible)>div[style*="display: none"]){
              margin-top: 26.5px;
            }
          }
          @media (max-width: 767.98px) {
            #pwf-1 {
              margin-top: 20.5px;
              gap:0;
            }
            #pwf-1.additional-answered .btn-action.slide-1-active{
              width: var(--flex-w);
            }
            #pwf-1.additional-answered div:has(>.btn-action.slide-1-active){
              width: var(--flex-w-content-w);
            }
            #pwf-1 .flex:has(.btn-action){
              --flex-w: 140px;
            }
            #pwf-1, #pwf-1:has(.back-link:not(.invisible)), #pwf-1:has(.back-link:not(.invisible)>div[style*="display: none"]){
              margin-top: 21px;
            }
            #pwf-1.additional-answered, #pwf-1.additional-answered:has(.back-link:not(.invisible)), #pwf-1.additional-answered:has(.back-link:not(.invisible)>div[style*="display: none"]){
              margin-top: 31.5px;
            }
            #pwf-1:has(.slide-11.active) .carousel-inner+div {
              margin-top: 5px;
            }
            #pwf-1 div:has(.disclosure-tooltip){
              transform:none;
              bottom: -14px;
              left: 0;
            }
            #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
              transform: translate(0px, 2.5px);
            }
            #pwf-1.additional-answered div:has(.disclosure-tooltip) small .disclosure-tooltip {
                transform: translateY(2px);
            }
            #pwf-1 .back-link{
              margin-top: 6px;
            }
            #pwf-1:has(.active.slide-1) .additional-back-button-wrapper{
              margin-top: 9px;
            }
            #pwf-1 .back-link >div{
              padding-left: 24px;
            }
            .steps{
              margin-bottom: 21px;
              margin-top: 1.5px;
            }
            #pwf-1:not(.additional-answered){
              margin-top: 18px;
            }
            #pwf-1 select.additional-question-select ~ .form-field-label {
                left: 24px;
            }
            #pwf-1 select.additional-question-select {
              padding-left: 16px !important;
            }
            #pwf-1 select.additional-question-select {
              padding-right: 35px !important;
              background-position: right 24px center;
            }
            #pwf-1 div:has(.btn-action.slide-1-active) {
              margin-top: 8.5px;
            }
            #pwf-1:not(.additional-answered) div:has(.disclosure-tooltip) {
              bottom: -43px;
              left: 0;
            }
            .additional-answered {
              padding: 30px 23px 51px;
            }
            .form_header {
              padding-bottom: 27.5px;
            }
            .form_header h2 {
              font-size: 24px;
              line-height: 31.2px;
            }
            #pwf-1:has(.slide-2.active) .form_header, 
            #pwf-1:has(.slide-3.active) .form_header, 
            #pwf-1:has(.slide-4.active) .form_header, 
            #pwf-1:has(.slide-5.active) .form_header, 
            #pwf-1:has(.slide-6.active) .form_header, 
            #pwf-1:has(.slide-7.active) .form_header, 
            #pwf-1:has(.slide-8.active) .form_header, 
            #pwf-1:has(.slide-9.active) .form_header, 
            #pwf-1:has(.slide-10.active) .form_header, 
            #pwf-1:has(.slide-11.active) .form_header {
                padding-bottom: 18px;
            }
            .spz_steps > ul{
              gap: 14px;
            }
            .spz_steps > ul > li{
              width: 100%;
            }
            #pwf-1:has(.slide-2.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-3.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-4.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-5.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-6.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-7.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-8.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-9.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-10.active) .flex:has(.btn-action), 
            #pwf-1:has(.slide-11.active) .flex:has(.btn-action) {
              margin-top: 18px;
            }
            #pwf-1:has(.slide-2.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-3.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-4.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-5.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-6.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-7.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-8.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-9.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-10.active) .additional-button-wrapper, 
            #pwf-1:has(.slide-11.active) .additional-button-wrapper {
              width: 100%;
              margin-left: 0;
              text-align: end;
            }
            #pwf-1 div:has(>.back-link){
              margin-top: 0;
            }

          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          `
          shadowRoot.appendChild(style);
          shadowRoot.querySelector('#pwf-1 div:has(.disclosure-tooltip) small sup').textContent="2";
          shadowRoot.querySelector('#pwf-1 .carousel-inner').insertAdjacentHTML("afterbegin",`
          <div class="additional-question form-field-wrapper">
            <select class="pwf-input additional-question-select">
              <option disabled selected hidden>What do you need funding for?</option>
              <option>Expansion</option>
              <option>Working capital</option>
              <option>Payroll</option>
              <option>Purchase a business</option>
              <option>Equipment</option>
              <option>Real estate</option>
              <option>Start a business</option>
              <option>Accounts receivable</option>
              <option>Other</option>
            </select>
            <label class="form-field-label">What do you need funding for?</lable>
          </div>
          <div class="spz_six_steps spz_steps">
            <ul>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <select class="timeInBusiness pwf-input">
                    <option disabled selected hidden>How long have you been in business?</option>
                    <option value="1170">0 - 2 Months</option>
                    <option value="110">3 - 5 Months</option>
                    <option value="111">6 - 11 Months</option>
                    <option value="112">1 - 2 Years</option>
                    <option value="862">2 - 3 Years</option>
                    <option value="864">3 - 5 Years</option>
                    <option value="183">5 or More Years</option>
                  </select>
                  <label class="form-field-label">Time in business</label>
                </div>
              </li>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <select class="averageMonthlySales pwf-input">
                    <option disabled selected hidden>What’s your monthly revenue?</option>
                    <option value="0">$0, No Revenue</option>
                    <option value="3999">$1 - $4K</option>
                    <option value="7999">$5K - $7K</option>
                    <option value="14999">$8K - $14K</option>
                    <option value="19999">$15K - $19K</option>
                    <option value="49999">$20K - $49K</option>
                    <option value="79999">$50K - $79K</option>
                    <option value="199999">$80K - $199K</option>
                    <option value="399999">$200K - $399K</option>
                    <option value="400000">More than $400K</option>
                  </select>
                  <label class="form-field-label">Monthly revenue</label>
                </div>
              </li>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <select class="creditScore pwf-input">
                    <option disabled selected hidden>What is your personal credit score?</option>
                    <option value="878">(499 or Below)</option>
                    <option value="880">(500 - 599) </option>
                    <option value="101">(600 - 649) </option>
                    <option value="100">(650 - 679)</option>
                    <option value="99">(680 - 719) </option>
                    <option value="98">(720 or Higher)</option>
                  </select>
                  <label class="form-field-label">Personal credit score</label>
                </div>
              </li>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <select class="entityType pwf-input">
                    <option disabled selected hidden>What type of business do you own?</option>
                    <option value="corporation">Corporation</option>
                    <option value="legalPartnership">Legal Partnership</option>
                    <option value="llc">LLC</option>
                    <option value="soleProprietor">Sole Proprietor</option>
                  </select>
                  <label class="form-field-label">Type of business</label>
                </div>
              </li>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <select class="industry pwf-input">
                    <option disabled selected hidden>What is your company's industry?</option>
                    <option value="adultEntertainment">Adult Entertainment</option>
                    <option value="agricultureForestry">Agriculture, Forestry, Fishing and Hunting</option>
                    <option value="artsEntertainment">Arts, Entertainment, and Recreation</option>
                    <option value="automotive">Automobile Dealers &amp; Parts</option>
                    <option value="construction">Construction</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance and Insurance</option>
                    <option value="firearms">Firearm Sales</option>
                    <option value="freightTrucking">Freight Trucking</option>
                    <option value="gambling">Gambling</option>
                    <option value="gasStations">Gas Stations</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="informationMedia">IT, Media, or Publishing</option>
                    <option value="legalServices">Legal Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="mining">Mining (except Oil and Gas)</option>
                    <option value="oilGas">Oil and Gas Extraction</option>
                    <option value="governmentPublic">Political, Governmental, or Public Organizations</option>
                    <option value="realEstate">Real Estate</option>
                    <option value="religiousOrganizations">Religious Organizations</option>
                    <option value="restaurants">Restaurants and Food Services</option>
                    <option value="retail">Retail Stores</option>
                    <option value="socialAssistance">Social Assistance</option>
                    <option value="transportation">Transportation and Warehousing</option>
                    <option value="travelAgencies">Travel Agencies</option>
                    <option value="utilities">Utilities</option>
                    <option value="wholesale">Wholesale Trade</option>
                    <option value="other">All Other</option>
                  </select>
                  <label class="form-field-label">Industry</label>
                </div>
              </li>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <input type="text" value="" class="business_name pwf-input" placeholder="Business name">
                  <label class="form-field-label">Business name</label>
                </div>
              </li>
            </ul>
          </div>
          <div class="spz_four_steps spz_steps">
            <ul>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <input type="text" value="" class="first pwf-input" placeholder="First name">
                  <label class="form-field-label">First name</label>
                </div>
              </li>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <input type="text" value="" class="last pwf-input" placeholder="Last name">
                  <label class="form-field-label">Last name</label>
                </div>
              </li>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <input type="email" value="" class="email pwf-input" placeholder="Email address">
                  <label class="form-field-label">Email address</label>
                </div>
              </li>
              <li>
                <div class="custom_stepField form-field-wrapper">
                  <input type="tel" value="" class="primary_phone pwf-input" placeholder="Phone number">
                  <label class="form-field-label">Phone number</label>
                </div>
              </li>
            </ul>
            <div class="col-12">
              <div>
                <div class="flex mb-3"><input type="checkbox" id="marketingSmsOptIn"
                    class="w-4 h-4 text-primary-500 bg-primary-100 rounded-full hover:cursor-pointer focus:ring focus:ring-primary-200 legal-box-check"
                    name="marketingSmsOptIn" data-cy="marketingSmsOptIn" value="false"><label for="marketingSmsOptIn"
                    class="legal-box-shadow-controller relative">
                    <div class="legal-box-shadow"></div>
                    <div class="p-2 border ml-1 pr-3 bg-white text-start legal-box"><span class="pb-4 agreements"
                        data-cy="marketingSmsOptIn-text">By checking this box and clicking ‘Submit’, I agree to receive
                        automated marketing calls/texts from or on behalf of Lendio at the number I provided. I understand this
                        consent is optional, and not required to create an account or use Lendio's services, and I can opt out
                        anytime by texting STOP. Msg &amp; data rates may apply.</span></div>
                  </label></div>
              </div>
            </div>
            <div class="col-12">
              <div>
                <div class="flex mb-3">
                  <div class="py-2 text-start legal-consent">
                    <span class="pb-4 agreements" data-cy="applicationSigned-text">
                      By clicking ‘Submit’ you agree to receive informational text messages about your account. You also agree
                      to
                      the <a href="//www.lendio.com/agreements/terms-of-application/" target="_blank">Terms of Application</a>,
                      <a href="//www.lendio.com/agreements/terms-of-use" target="_blank">Terms of Use</a> (which includes an
                      arbitration agreement), <a href="//www.lendio.com/agreements/credit-gathering-auth/" target="_blank">Credit
                        Gathering Authorization</a>,
                      <a href="https://www.lendio.com/agreements/electronic-disclosure-and-consent/" target="_blank">E-sign
                        Disclosure</a>, and
                      <a href="//www.lendio.com/agreements/privacy-policy/" target="_blank">Privacy Policy</a>.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `)
          shadowRoot.querySelector('#pwf-1 div:has(>button[data-cy="next"])').insertAdjacentHTML("beforebegin",`
            <div class="additional-button-wrapper">
              <button>Next</button>
            </div>  
          `);
          shadowRoot.querySelector('#pwf-1 div:has(>.back-link)').insertAdjacentHTML("afterbegin",`
          <div class="additional-back-button-wrapper">
            <button>Back</button>
          </div>
          `);
          shadowRoot.querySelector('.carousel-inner').insertAdjacentHTML("afterbegin", `
            <div class="steps"></div>
            <div class="form_header"><h2>How much money do you need?</h2></div>
          `);

          // Shadow root can't style <body>, but JS can still toggle light-DOM classes / modal
          function getFundingQuestionValue() {
            const select = shadowRoot.querySelector('#pwf-1 .additional-question-select');
            if (!select || select.selectedIndex <= 0) return '';
            return (select.options[select.selectedIndex].textContent || select.value || '').trim();
          }

          function lockBodyScroll() {
            if (document.documentElement.classList.contains('spz-3017-modal-open')) return;
            const scrollY = window.scrollY || window.pageYOffset || 0;
            document.documentElement.classList.add('spz-3017-modal-open');
            document.documentElement.setAttribute('data-spz-scroll-y', String(scrollY));
            document.body.style.top = '-' + scrollY + 'px';
          }

          function unlockBodyScroll() {
            if (!document.documentElement.classList.contains('spz-3017-modal-open')) return;
            const scrollY = parseInt(document.documentElement.getAttribute('data-spz-scroll-y') || '0', 10);
            document.documentElement.classList.remove('spz-3017-modal-open');
            document.documentElement.removeAttribute('data-spz-scroll-y');
            document.body.style.top = '';
            window.scrollTo(0, scrollY);
          }

          function openRemainingFormModal() {
            if (document.querySelector('.spz-3017-modal-overlay')) return;
            const host = document.querySelector('lendio-start');
            if (!host || !host.parentNode) return;

            const fundingValue = getFundingQuestionValue();

            // Keep first step visible in-place
            const placeholder = document.createElement('div');
            placeholder.className = 'spz-3017-first-step';
            placeholder.innerHTML =
              '<div class="spz-3017-first-step-field">' +
                '<select class="spz-3017-first-step-select" disabled>' +
                  '<option selected>' + (fundingValue || 'What do you need funding for?') + '</option>' +
                '</select>' +
                '<label class="spz-3017-first-step-label">What do you need funding for?</label>' +
              '</div>';
            host.parentNode.insertBefore(placeholder, host);

            const overlay = document.createElement('div');
            overlay.className = 'spz-3017-modal-overlay';
            overlay.innerHTML =
              '<div class="spz-3017-modal" role="dialog" aria-modal="true">' +
                '<div class="spz-3017-modal-inner"></div>' +
              '</div>';
            document.body.appendChild(overlay);
            overlay.querySelector('.spz-3017-modal-inner').appendChild(host);
            lockBodyScroll();
          }

          function closeRemainingFormModal() {
            const overlay = document.querySelector('.spz-3017-modal-overlay');
            const placeholder = document.querySelector('.spz-3017-first-step');
            const host = overlay && overlay.querySelector('lendio-start');
            if (host && placeholder && placeholder.parentNode) {
              placeholder.parentNode.insertBefore(host, placeholder);
              placeholder.remove();
            } else if (host && !placeholder) {
              const formWrap = document.querySelector('.lp-hero-form') || document.querySelector('.lp-hero-content');
              if (formWrap) formWrap.appendChild(host);
            }
            if (overlay) overlay.remove();
            unlockBodyScroll();
          }

          function setAdditionalAnswered(enabled) {
            const form = shadowRoot.querySelector('#pwf-1');
            if (!form) return;
            if (enabled) {
              form.classList.add('additional-answered');
              document.body.classList.add('main_steps');
              openRemainingFormModal();
            } else {
              form.classList.remove('additional-answered');
              document.body.classList.remove('main_steps');
              closeRemainingFormModal();
            }
          }

          shadowRoot.querySelector('#pwf-1 .additional-question-select').addEventListener("change",function(){
            if(this.value){
              setAdditionalAnswered(true);
            }
          });

          const pwfForm = shadowRoot.querySelector('#pwf-1');
          const sixStepFields = [
            { selector: '.timeInBusiness', type: 'select', requiredMsg: 'Time in business is required' },
            { selector: '.averageMonthlySales', type: 'select', requiredMsg: 'Average monthly sales is required' },
            { selector: '.creditScore', type: 'select', requiredMsg: 'Credit score is required' },
            { selector: '.entityType', type: 'select', requiredMsg: 'Entity type is required' },
            { selector: '.industry', type: 'select', requiredMsg: 'Industry is required' },
            { selector: '.business_name', type: 'text', requiredMsg: 'Business name is required', minLength: 2, minLengthMsg: 'Business Name must be at least 2 characters long' }
          ];
          const fourStepFields = [
            { selector: '.first', type: 'text', requiredMsg: 'First Name is required', minLength: 2, minLengthMsg: 'First Name must be at least 2 characters long' },
            { selector: '.last', type: 'text', sameSlide: true, requiredMsg: 'Last Name is required', minLength: 2, minLengthMsg: 'Last Name must be at least 2 characters long' },
            { selector: '.email', type: 'email', requiredMsg: 'Email address is required', invalidMsg: 'Must be a valid email address' },
            { selector: '.primary_phone', type: 'phone', requiredMsg: 'Phone number is required', invalidMsg: 'Please enter a valid phone number', lengthMsg: 'Phone number must be 10 digits long' }
          ];

          function getFieldId(selector) {
            return selector.replace(/^\./, '');
          }

          function getActiveSlideNumber() {
            const activeSlide = shadowRoot.querySelector('.carousel-item.active');
            if (!activeSlide) return 0;
            const match = activeSlide.className.match(/slide-(\d+)/);
            return match ? parseInt(match[1], 10) : 0;
          }

          const HEADER_AMOUNT = 'How much money do you need?';
          const HEADER_SIX = 'Tell us about your business';
          const HEADER_FOUR = 'Tell us about you';

          function updateFormHeader() {
            const h2 = shadowRoot.querySelector('.form_header h2');
            if (!h2) return;
            if (pwfForm.classList.contains('spz-four-mode')) {
              h2.textContent = HEADER_FOUR;
            } else if (getActiveSlideNumber() >= 2) {
              h2.textContent = HEADER_SIX;
            } else {
              h2.textContent = HEADER_AMOUNT;
            }
            updateAdditionalButtonText();
          }

          function updateAdditionalButtonText() {
            const btn = shadowRoot.querySelector('.additional-button-wrapper button');
            if (!btn) return;
            btn.textContent = pwfForm.classList.contains('spz-four-mode') ? 'Submit' : 'Next';
          }

          function waitForSlide(slideNum, timeout) {
            timeout = timeout || 10000;
            return new Promise(function(resolve, reject) {
              const start = Date.now();
              (function check() {
                if (getActiveSlideNumber() === slideNum) return resolve();
                if (Date.now() - start > timeout) return reject(new Error('slide-' + slideNum + ' not active'));
                setTimeout(check, 50);
              })();
            });
          }

          function waitForSlideDecrease(previousSlide, timeout) {
            timeout = timeout || 3000;
            return new Promise(function(resolve) {
              const start = Date.now();
              (function check() {
                const current = getActiveSlideNumber();
                if (current > 0 && current < previousSlide) return resolve(true);
                if (Date.now() - start > timeout) return resolve(false);
                setTimeout(check, 50);
              })();
            });
          }

          function clickControlBack() {
            const backLink = shadowRoot.querySelector('.back-link');
            if (!backLink) return;
            // Control back is hidden on slides 2-11; temporarily force it clickable
            backLink.style.setProperty('display', 'block', 'important');
            backLink.style.setProperty('visibility', 'visible', 'important');
            backLink.style.setProperty('pointer-events', 'auto', 'important');
            const clickable = backLink.querySelector('div, button, a, span') || backLink;
            clickable.click();
            backLink.style.removeProperty('display');
            backLink.style.removeProperty('visibility');
            backLink.style.removeProperty('pointer-events');
          }

          async function goBackToSlide(targetSlide) {
            let guard = 25;
            while (getActiveSlideNumber() > targetSlide && guard-- > 0) {
              const before = getActiveSlideNumber();
              clickControlBack();
              const moved = await waitForSlideDecrease(before, 3000);
              if (!moved) {
                // Retry once if the first click did not change the slide
                clickControlBack();
                await waitForSlideDecrease(before, 3000);
              }
            }
            // Ensure we landed on the target (control may skip slides while going back)
            if (getActiveSlideNumber() !== targetSlide && getActiveSlideNumber() > targetSlide) {
              throw new Error('Unable to reach slide-' + targetSlide + ', currently on slide-' + getActiveSlideNumber());
            }
          }

          function clearFieldError(wrapper) {
            if (!wrapper) return;
            const siblingError = wrapper.nextElementSibling;
            if (siblingError && siblingError.classList.contains('text-left') && siblingError.querySelector('.error-text')) {
              siblingError.remove();
            }
          }

          function showFieldError(wrapper, message) {
            clearFieldError(wrapper);
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-left';
            errorDiv.innerHTML = '<div class="mt-1 text-sm font-semibold text-danger-700 error-text">' + message + '</div>';
            wrapper.insertAdjacentElement('afterend', errorDiv);
          }

          function isValidEmail(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          }

          function getPhoneDigits(value) {
            return (value || '').replace(/\D/g, '').slice(0, 10);
          }

          function formatPhoneNumber(value) {
            const digits = getPhoneDigits(value);
            if (digits.length <= 3) return digits;
            if (digits.length <= 6) return digits.slice(0, 3) + '-' + digits.slice(3);
            return digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
          }

          function isValidPhone(value) {
            return getPhoneDigits(value).length === 10;
          }

          function getFieldError(field, el) {
            if (!el) return field.requiredMsg;
            if (field.type === 'select') {
              if (el.selectedIndex <= 0 || !el.value) return field.requiredMsg;
              return '';
            }
            const value = (el.value || '').trim();
            if (!value) return field.requiredMsg;
            if (field.minLength && value.length < field.minLength) return field.minLengthMsg;
            if (field.type === 'email' && !isValidEmail(value)) return field.invalidMsg;
            if (field.type === 'phone') {
              const digits = getPhoneDigits(value);
              if (!digits.length) return field.requiredMsg;
              if (digits.length !== 10) return field.lengthMsg || 'Phone number must be 10 digits long';
              if (!isValidPhone(value)) return field.invalidMsg;
              return '';
            }
            return '';
          }

          function validateStepFields(containerSelector, fields) {
            let isValid = true;
            fields.forEach(function(field) {
              const el = shadowRoot.querySelector(containerSelector + ' ' + field.selector);
              const wrapper = el && el.closest('.form-field-wrapper');
              if (!wrapper) return;
              const errorMsg = getFieldError(field, el);
              if (errorMsg) {
                isValid = false;
                showFieldError(wrapper, errorMsg);
              } else {
                clearFieldError(wrapper);
              }
            });
            return isValid;
          }

          function bindFieldErrorClear(containerSelector, fields) {
            fields.forEach(function(field) {
              const el = shadowRoot.querySelector(containerSelector + ' ' + field.selector);
              if (!el || el.hasAttribute('data-spz-error-bound')) return;
              el.setAttribute('data-spz-error-bound', 'true');
              const eventName = field.type === 'select' ? 'change' : 'input';
              el.addEventListener(eventName, function() {
                const wrapper = el.closest('.form-field-wrapper');
                // Only clear once valid; errors are shown on Next click
                if (!getFieldError(field, el)) {
                  clearFieldError(wrapper);
                }
              });
            });
          }

          function setNativeValue(el, value) {
            const proto = el.tagName === 'SELECT' ? window.HTMLSelectElement.prototype : window.HTMLInputElement.prototype;
            const descriptor = Object.getOwnPropertyDescriptor(proto, 'value');
            if (descriptor && descriptor.set) {
              descriptor.set.call(el, value);
            } else {
              el.value = value;
            }
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }

          function waitForControlField(fieldId, timeout) {
            timeout = timeout || 10000;
            return new Promise(function(resolve, reject) {
              const start = Date.now();
              (function check() {
                // Control removes inactive-slide fields — only match the active slide
                const el = shadowRoot.querySelector('.carousel-item.active #' + fieldId);
                if (el) return resolve(el);
                if (Date.now() - start > timeout) return reject(new Error(fieldId + ' not found'));
                setTimeout(check, 50);
              })();
            });
          }

          function clickControlNext() {
            const nextBtn = shadowRoot.querySelector('button[data-cy="next"]');
            if (!nextBtn) return;
            nextBtn.style.setProperty('display', 'inline-block', 'important');
            nextBtn.style.setProperty('pointer-events', 'auto', 'important');
            nextBtn.disabled = false;
            nextBtn.click();
            nextBtn.style.removeProperty('display');
            nextBtn.style.removeProperty('pointer-events');
          }

          async function syncFieldsToControl(containerSelector, fields, options) {
            options = options || {};
            for (let i = 0; i < fields.length; i++) {
              const field = fields[i];
              const fieldId = getFieldId(field.selector);
              const customEl = shadowRoot.querySelector(containerSelector + ' ' + field.selector);
              if (!customEl) continue;

              const controlEl = await waitForControlField(fieldId);
              setNativeValue(controlEl, field.type === 'phone' ? formatPhoneNumber(customEl.value) : customEl.value);
              await delay(150);

              if (i < fields.length - 1) {
                const nextField = fields[i + 1];
                const nextFieldId = getFieldId(nextField.selector);
                // sameSlide (e.g. #first + #last on slide-9): fill both, do not click next
                if (nextField.sameSlide) continue;
                if (!shadowRoot.querySelector('.carousel-item.active #' + nextFieldId)) {
                  clickControlNext();
                }
                await waitForControlField(nextFieldId);
              } else if (!options.skipLastNext) {
                if (shadowRoot.querySelector('.carousel-item.active #' + fieldId)) {
                  clickControlNext();
                }
              }
            }
          }

          function waitForSubmitButton(timeout) {
            timeout = timeout || 10000;
            return new Promise(function(resolve, reject) {
              const start = Date.now();
              (function check() {
                const el = shadowRoot.querySelector('#pwf-submit-button');
                if (el && getActiveSlideNumber() === 11 && !el.disabled) return resolve(el);
                if (Date.now() - start > timeout) return reject(new Error('pwf-submit-button not found'));
                setTimeout(check, 50);
              })();
            });
          }

          function clickPwfSubmit() {
            const submitBtn = shadowRoot.querySelector('#pwf-submit-button');
            if (!submitBtn) return false;
            submitBtn.disabled = false;
            submitBtn.removeAttribute('disabled');
            submitBtn.click();
            return true;
          }

          async function syncSixSteps() {
            await syncFieldsToControl('.spz_six_steps', sixStepFields);
            pwfForm.classList.add('spz-four-mode');
            updateFormHeader();
          }

          function getControlMarketingOptIn() {
            return shadowRoot.querySelector('.slide-11 #marketingSmsOptIn') ||
              shadowRoot.querySelector('.carousel-item.slide-11 input[name="marketingSmsOptIn"]');
          }

          function syncMarketingOptIn() {
            const customOptIn = shadowRoot.querySelector('.spz_four_steps #marketingSmsOptIn');
            const controlOptIn = getControlMarketingOptIn();
            if (!customOptIn || !controlOptIn) return;
            if (customOptIn.checked !== controlOptIn.checked) {
              controlOptIn.click();
            }
          }

          function bindPhoneFormatter() {
            const phoneInput = shadowRoot.querySelector('.spz_four_steps .primary_phone');
            if (!phoneInput || phoneInput.hasAttribute('data-spz-phone-bound')) return;
            phoneInput.setAttribute('data-spz-phone-bound', 'true');
            phoneInput.setAttribute('maxlength', '12'); // 10 digits + 2 dashes
            phoneInput.addEventListener('input', function() {
              const formatted = formatPhoneNumber(phoneInput.value);
              if (phoneInput.value !== formatted) {
                phoneInput.value = formatted;
              }
            });
            phoneInput.addEventListener('keydown', function(e) {
              // Allow control keys
              if (e.ctrlKey || e.metaKey || e.altKey) return;
              const allowed = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
              if (allowed.indexOf(e.key) !== -1) return;
              if (!/^\d$/.test(e.key)) {
                e.preventDefault();
                return;
              }
              if (getPhoneDigits(phoneInput.value).length >= 10) {
                e.preventDefault();
              }
            });
          }

          function bindMarketingOptInSync() {
            const customOptIn = shadowRoot.querySelector('.spz_four_steps #marketingSmsOptIn');
            if (!customOptIn || customOptIn.hasAttribute('data-spz-optin-bound')) return;
            customOptIn.setAttribute('data-spz-optin-bound', 'true');
            customOptIn.addEventListener('change', function() {
              syncMarketingOptIn();
            });
          }

          function delay(ms) {
            return new Promise(function(resolve) {
              setTimeout(resolve, ms);
            });
          }

          function getSlide11ErrorMessages() {
            const slide11 = shadowRoot.querySelector('.carousel-item.slide-11.active');
            if (!slide11) return [];
            const errors = [];
            slide11.querySelectorAll('.error-text').forEach(function(errorEl) {
              const message = (errorEl.textContent || '').trim();
              if (!message) return;

              let relatedInput = null;
              let node = errorEl.parentElement;
              while (node && node !== slide11) {
                const prev = node.previousElementSibling;
                if (prev) {
                  relatedInput = prev.matches('input:not([type="checkbox"]), select')
                    ? prev
                    : prev.querySelector('input:not([type="checkbox"]), select');
                  if (relatedInput) break;
                }
                const candidate = node.querySelector('input:not([type="checkbox"]), select');
                if (candidate && !errorEl.contains(candidate)) {
                  relatedInput = candidate;
                  break;
                }
                node = node.parentElement;
              }

              errors.push({
                message: message,
                fieldId: relatedInput && relatedInput.id ? relatedInput.id : 'primary_phone'
              });
            });
            return errors;
          }

          function mirrorSlide11ErrorsToFourSteps() {
            const errors = getSlide11ErrorMessages();
            if (!errors.length) return false;

            // Clear existing custom errors first
            shadowRoot.querySelectorAll('.spz_four_steps .form-field-wrapper').forEach(function(wrapper) {
              clearFieldError(wrapper);
            });

            errors.forEach(function(error) {
              const customEl = shadowRoot.querySelector('.spz_four_steps .' + error.fieldId) ||
                shadowRoot.querySelector('.spz_four_steps .primary_phone');
              const wrapper = customEl && customEl.closest('.form-field-wrapper');
              if (wrapper) {
                showFieldError(wrapper, error.message);
              }
            });
            return true;
          }

          async function waitForSlide11ErrorsOrClear(timeout) {
            timeout = timeout || 1500;
            const start = Date.now();
            // Give control a moment to render validation after first submit click
            await delay(200);
            return new Promise(function(resolve) {
              (function check() {
                const errors = getSlide11ErrorMessages();
                if (errors.length) return resolve(true);
                if (Date.now() - start > timeout) return resolve(false);
                setTimeout(check, 50);
              })();
            });
          }

          async function syncFourSteps() {
            // slide-9 = #first + #last together, slide-10 = #email, slide-11 = #primary_phone
            const slide = getActiveSlideNumber();
            const startIndex = slide <= 9 ? 0 : (slide === 10 ? 2 : 3);
            await syncFieldsToControl('.spz_four_steps', fourStepFields.slice(startIndex), { skipLastNext: true });

            if (getActiveSlideNumber() !== 11) {
              await waitForSlide(11);
            }
            syncMarketingOptIn();
            await delay(250);

            await waitForSubmitButton();
            clickPwfSubmit();

            const hasErrors = await waitForSlide11ErrorsOrClear(1500);
            if (hasErrors) {
              mirrorSlide11ErrorsToFourSteps();
              // Back to slide-9 so #first + #last are in the DOM again for the next submit
              await goBackToSlide(9);
              return;
            }

            // Re-query after validation — first click can re-render the button
            await delay(200);
            await waitForSubmitButton();
            clickPwfSubmit();
          }

          bindFieldErrorClear('.spz_six_steps', sixStepFields);
          bindFieldErrorClear('.spz_four_steps', fourStepFields);
          bindPhoneFormatter();
          bindMarketingOptInSync();

          // Keep form header / CTA label in sync with active slide / step mode
          shadowRoot.querySelectorAll('.carousel-item').forEach(function(item) {
            new MutationObserver(function() {
              updateFormHeader();
              // Opt-in may only exist once slide-11 is in the DOM
              if (getActiveSlideNumber() === 11) {
                syncMarketingOptIn();
              }
            }).observe(item, { attributes: true, attributeFilter: ['class'] });
          });
          updateFormHeader();

          let isSyncing = false;

          function setSyncing(state) {
            isSyncing = state;
            const btn = shadowRoot.querySelector('.additional-button-wrapper button');
            if (btn) btn.disabled = state;
          }

          shadowRoot.querySelector('#pwf-1 .additional-button-wrapper button').addEventListener("click", async function(){
            if (isSyncing || this.disabled) return;

            // Initial funding question step (before additional-answered)
            if (!pwfForm.classList.contains('additional-answered')) {
              setAdditionalAnswered(true);
              return;
            }

            const slideNum = getActiveSlideNumber();
            if (slideNum < 2) return;

            if (!pwfForm.classList.contains('spz-four-mode')) {
              if (!validateStepFields('.spz_six_steps', sixStepFields)) return;
              setSyncing(true);
              try {
                await syncSixSteps();
              } catch (e) {
                console.warn('SPZ 3017 six-step sync failed', e);
              }
              setSyncing(false);
              return;
            }

            if (!validateStepFields('.spz_four_steps', fourStepFields)) return;
            setSyncing(true);
            try {
              await syncFourSteps();
            } catch (e) {
              console.warn('SPZ 3017 four-step sync failed', e);
            }
            setSyncing(false);
          });

          shadowRoot.querySelector('#pwf-1 .additional-back-button-wrapper').addEventListener("click", async function(){
            if (isSyncing) return;
            const slideNum = getActiveSlideNumber();

            // From four-steps: click control back until slide-2, then show six-steps
            if (pwfForm.classList.contains('spz-four-mode')) {
              setSyncing(true);
              pwfForm.classList.remove('spz-four-mode');
              try {
                await goBackToSlide(2);
              } catch (e) {
                console.warn('SPZ 3017 back to six-steps failed', e);
              }
              updateFormHeader();
              setSyncing(false);
              return;
            }

            // From six-steps: go back to amount (slide-1)
            if (slideNum >= 2) {
              setSyncing(true);
              try {
                await goBackToSlide(1);
              } catch (e) {
                console.warn('SPZ 3017 back to amount failed', e);
              }
              updateFormHeader();
              setSyncing(false);
              return;
            }

            setAdditionalAnswered(false);
            updateFormHeader();
          });

          shadowRoot.querySelector('label.amountSeeking').textContent = "Select amount";

        }
      },100)
    }
  },10)

  setTimeout(function(){
    clearInterval(bodyInterval3017)
  },7000)
})();
