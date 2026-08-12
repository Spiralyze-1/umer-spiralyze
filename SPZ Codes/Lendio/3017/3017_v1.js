(function() {
  const bodyInterval3013 = setInterval(function(){
    if(document.querySelector('body') && !document.querySelector('.spz_3013_v') && (
      document.querySelector('.lp-hero') 
    )){
      clearInterval(bodyInterval3013)
      let formInterval;
      document.querySelector('body').classList.add("spz_3013_v","spz_3013_v2")
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
          .form_header{
            padding-bottom: 26.5px;
          }
          .form_header h2{
            color: #171717;
            font-size: 28px;
            font-weight: 500;
            line-height: 36.4px;
            letter-spacing: 0.17px;
            text-align: center;
          }
          .steps,
          .form_header{
            display: none;
          }
          .additional-answered{
            padding: 29.5px 47px 31px;
            border-radius: 12px;
            border: 1px solid rgba(175, 146, 125, 0.20);
            background: #FFF;
            margin-top: 0;
          }
          .additional-answered .steps,
          .additional-answered .form_header{
            display: block;
          }
          .spz_steps ul{
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            padding-left: 0;
            list-style: none;
            margin: 0;
          }
          .spz_steps ul li {
            width: calc(50% - 8px);
          }
          .custom_stepField{
            width: 100%;
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
            padding: 1px 0px 0px 1px;
            margin-bottom: -0.5px;
          }
          #pwf-1 .flex:has(> #marketingSmsOptIn){
            margin-bottom:5.5px;
          }
          #pwf-1 .legal-consent .agreements{
            line-height: 18px;
          }
          #pwf-1 .flex.mb-3:has(.agreements[data-cy="applicationSigned-text"]){
            margin-bottom: 9.5px;
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
          #pwf-1 .spz_steps .text-left .error-text {
            color: #b91c1c;
          }
          #pwf-1 .custom_stepField.form-field-wrapper:has(+ .text-left .error-text) select,
          #pwf-1 .custom_stepField.form-field-wrapper:has(+ .text-left .error-text) input {
            border-color: #b91c1c;
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
            --bar-scale: calc(2 / 11);
          }
          #pwf-1:has(.carousel-item.slide-3.active) .carousel-inner{
            --bar-scale: calc(3 / 11);
          }
          #pwf-1:has(.carousel-item.slide-4.active) .carousel-inner{
            --bar-scale: calc(4 / 11);
          }
          #pwf-1:has(.carousel-item.slide-5.active) .carousel-inner{
            --bar-scale: calc(5 / 11);
          }
          #pwf-1:has(.carousel-item.slide-6.active) .carousel-inner{
            --bar-scale: calc(6 / 11);
          }
          #pwf-1:has(.carousel-item.slide-7.active) .carousel-inner{
            --bar-scale: calc(7 / 11);
          }
          #pwf-1:has(.carousel-item.slide-8.active) .carousel-inner{
            --bar-scale: calc(8 / 11);
          }
          #pwf-1:has(.carousel-item.slide-9.active) .carousel-inner{
            --bar-scale: calc(9 / 11);
          }
          #pwf-1:has(.carousel-item.slide-10.active) .carousel-inner{
            --bar-scale: calc(10 / 11);
          }
          #pwf-1:has(.carousel-item.slide-11.active) .carousel-inner{
            --bar-scale: calc(11 / 11);
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
          @media (max-width: 1024.98px) {
            #pwf-1 {
              margin-top: 27.5px;
            }
            #pwf-1 .carousel-inner{
              width: 100%;
            }
            #pwf-1 div:has(.disclosure-tooltip){
               width: 245px;
               text-align: center;
               margin: 0 auto;
               bottom: -59px;
            }
            #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
              transform: translateY(-6px);
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
              margin-top: 20.5px;
            }
            #pwf-1:has(.slide-11.active) .carousel-inner+div {
              margin-top: 5px;
            }
            #pwf-1 div:has(.disclosure-tooltip){
              transform:none;
              bottom: -44px;
            }
            #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
              transform: translate(0px, 2.5px);
            }
            #pwf-1 .back-link{
              margin-top: 6px;
            }
            #pwf-1:has(.active.slide-1) .additional-back-button-wrapper{
              margin-top: 4px;
            }
            #pwf-1 .back-link >div{
              padding-left: 24px;
            }
            .steps{
              margin-bottom: 22.5px;
              margin-top: 1.5px;
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
                        data-cy="marketingSmsOptIn-text">By checking this box and clicking 'Continue', I agree to receive
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
                      By clicking ‘Continue’ you agree to receive informational text messages about your account. You also agree
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
          shadowRoot.querySelector('#pwf-1 .additional-question-select').addEventListener("change",function(){
            if(this.value){
              shadowRoot.querySelector('#pwf-1').classList.add("additional-answered");
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
            { selector: '.last', type: 'text', requiredMsg: 'Last Name is required', minLength: 2, minLengthMsg: 'Last Name must be at least 2 characters long' },
            { selector: '.email', type: 'email', requiredMsg: 'Email address is required', invalidMsg: 'Must be a valid email address' },
            { selector: '.primary_phone', type: 'phone', requiredMsg: 'Phone number is required', invalidMsg: 'Please enter a valid phone number' }
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

          function isValidPhone(value) {
            const digits = (value || '').replace(/\D/g, '');
            return digits.length === 10 || (digits.length === 11 && digits.charAt(0) === '1');
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
            if (field.type === 'phone' && !isValidPhone(value)) return field.invalidMsg;
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
                const el = shadowRoot.querySelector('#' + fieldId);
                if (el) return resolve(el);
                if (Date.now() - start > timeout) return reject(new Error(fieldId + ' not found'));
                setTimeout(check, 50);
              })();
            });
          }

          function clickControlNext() {
            const nextBtn = shadowRoot.querySelector('button[data-cy="next"]');
            if (nextBtn) nextBtn.click();
          }

          function clickControlBack() {
            const backBtn = shadowRoot.querySelector('.back-link');
            if (backBtn) backBtn.click();
          }

          function waitForControlFieldOptional(fieldId, timeout) {
            timeout = timeout || 400;
            return new Promise(function(resolve) {
              const start = Date.now();
              (function check() {
                const el = shadowRoot.querySelector('#' + fieldId);
                if (el) return resolve(el);
                if (Date.now() - start > timeout) return resolve(null);
                setTimeout(check, 50);
              })();
            });
          }

          async function syncFieldsToControl(containerSelector, fields, options) {
            options = options || {};
            for (let i = 0; i < fields.length; i++) {
              const field = fields[i];
              const fieldId = getFieldId(field.selector);
              const customEl = shadowRoot.querySelector(containerSelector + ' ' + field.selector);
              if (!customEl) continue;

              const controlEl = await waitForControlField(fieldId);
              setNativeValue(controlEl, customEl.value);

              // Advance control form so the next field can appear
              if (i < fields.length - 1) {
                const nextFieldId = getFieldId(fields[i + 1].selector);
                let nextEl = await waitForControlFieldOptional(nextFieldId, 400);
                if (!nextEl) {
                  clickControlNext();
                  nextEl = await waitForControlField(nextFieldId);
                }
              } else if (!options.skipLastNext) {
                clickControlNext();
              }
            }
          }

          function waitForSubmitButton(timeout) {
            timeout = timeout || 10000;
            return new Promise(function(resolve, reject) {
              const start = Date.now();
              (function check() {
                const el = shadowRoot.querySelector('#pwf-submit-button');
                if (el) return resolve(el);
                if (Date.now() - start > timeout) return reject(new Error('pwf-submit-button not found'));
                setTimeout(check, 50);
              })();
            });
          }

          async function syncSixSteps() {
            await syncFieldsToControl('.spz_six_steps', sixStepFields);
            pwfForm.classList.add('spz-four-mode');
          }

          async function syncFourSteps() {
            const customOptIn = shadowRoot.querySelector('.spz_four_steps #marketingSmsOptIn');
            const controlOptIn = shadowRoot.querySelector('.carousel-item input[name="marketingSmsOptIn"]');
            if (customOptIn && controlOptIn && customOptIn.checked !== controlOptIn.checked) {
              controlOptIn.click();
            }
            await syncFieldsToControl('.spz_four_steps', fourStepFields, { skipLastNext: true });
            const submitBtn = await waitForSubmitButton();
            submitBtn.click();
          }

          bindFieldErrorClear('.spz_six_steps', sixStepFields);
          bindFieldErrorClear('.spz_four_steps', fourStepFields);

          let isSyncing = false;

          shadowRoot.querySelector('#pwf-1 .additional-button-wrapper button').addEventListener("click", async function(){
            if (isSyncing) return;

            // Initial funding question step (before additional-answered)
            if (!pwfForm.classList.contains('additional-answered')) {
              pwfForm.classList.add('additional-answered');
              return;
            }

            const slideNum = getActiveSlideNumber();
            if (slideNum < 2) return;

            if (!pwfForm.classList.contains('spz-four-mode')) {
              if (!validateStepFields('.spz_six_steps', sixStepFields)) return;
              isSyncing = true;
              try {
                await syncSixSteps();
              } catch (e) {
                console.warn('SPZ 3017 six-step sync failed', e);
              }
              isSyncing = false;
              return;
            }

            if (!validateStepFields('.spz_four_steps', fourStepFields)) return;
            isSyncing = true;
            try {
              await syncFourSteps();
            } catch (e) {
              console.warn('SPZ 3017 four-step sync failed', e);
            }
            isSyncing = false;
          });

          shadowRoot.querySelector('#pwf-1 .additional-back-button-wrapper').addEventListener("click",function(){
            if (isSyncing) return;
            const slideNum = getActiveSlideNumber();

            if (pwfForm.classList.contains('spz-four-mode')) {
              pwfForm.classList.remove('spz-four-mode');
              return;
            }

            if (slideNum >= 2) {
              clickControlBack();
              return;
            }

            pwfForm.classList.remove('additional-answered');
          });

          shadowRoot.querySelector('label.amountSeeking').textContent = "Select amount";

        }
      },100)
    }
  },10)

  setTimeout(function(){
    clearInterval(bodyInterval3013)
  },7000)
})();
