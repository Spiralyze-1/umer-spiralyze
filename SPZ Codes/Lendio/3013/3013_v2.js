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
      document.querySelector('.lp-hero-eyebro-tooltip-text').innerHTML = `
        Answer a few quick questions about your business. See offers in minutes. <br>
        To continue with an application, you may need: <br>
        2 years tax returns (personal and business) <br>
        Debt Schedule <br>
        Profit and Loss statement <br>
        Balance Sheet <br>
        Driver’s License
      `;
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
           }
           #pwf-1 .carousel-item > div >div.text-center h5{
            display: none;
           }
          .carousel-item .form-field-wrapper + div,
          .carousel-item > div > .justify-center{
            min-height: unset;
            margin: 0;
          }
          #pwf-1 select, #pwf-1 input:not([type="checkbox"]){
            padding: 21px 24px 0 !important;
          }
          #pwf-1 select{
            padding-right: 46px !important;
            background-position: right 24px center;
          }
          #pwf-1 select ~ .form-field-label, #pwf-1 input:not([type="checkbox"]) ~ .form-field-label{
            left: 24px;
            transform: translateY(calc(-50% - 1.5px));
          }
          #pwf-1 div:has(>.btn-action){
            width:var(--flex-w-content-w);
            margin-left: var(--flex-ml-0);
          }
          #pwf-1 .btn-action{
            width: var(--flex-w);
          }
          #pwf-1 .btn-action.slide-11-active{
            width: var(--flex-w-long);
          }
            
          #pwf-1 .flex:has(.btn-action){
            width: 100%;
            margin-left: 0px;
          }
          #pwf-1 div:has(.disclosure-tooltip){
            bottom: -36px;
            left: 0;
            right: 0;
            margin: 0;
            width: 352px;
            text-align: left;
          }
          #pwf-1 div:has(.disclosure-tooltip) small{
            color: #171717;
          }
          #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
            color: #171717;
          }
          #pwf-1 div:has(>.back-link){
            position: static;
            transform: translate(-2px, -2px);
          }
          #pwf-1:has(.back-link:not(.invisible)){
            margin-top: 32.5px;
          }
          #pwf-1 .back-link >div{
            background-position: 2px calc(50% + 1px);
          }
          #pwf-1 select:focus ~ .form-field-label, 
          #pwf-1 select:not(:has(option:first-child:checked)) ~ .form-field-label, 
          #pwf-1 input:focus ~ .form-field-label, 
          #pwf-1 input:not(:placeholder-shown) ~ .form-field-label{
            left: 24px;
            transform: none;
          }
          #pwf-1 input#email, #pwf-1 input#primary_phone{
            padding-left: 47px !important;
          }
          #pwf-1 input:not([type="checkbox"])#email ~ .form-field-label, 
          #pwf-1 input:not([type="checkbox"])#primary_phone ~ .form-field-label
          {
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
          #pwf-1.additional-answered .additional-question,
          #pwf-1.additional-answered .additional-button-wrapper {
            display: none;
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
          #pwf-1.additional-answered:has(.active.slide-1){
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
          shadowRoot.querySelector('#pwf-1 .carousel-inner').insertAdjacentHTML("afterbegin",`<div class="additional-question form-field-wrapper">
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
          </div>`)
          shadowRoot.querySelector('#pwf-1 div:has(>button[data-cy="next"])').insertAdjacentHTML("beforebegin",`
            <div class="additional-button-wrapper">
              <button>Next</button>
            </div>  
          `)
          shadowRoot.querySelector('#pwf-1 div:has(>.back-link)').insertAdjacentHTML("afterbegin",`
          <div class="additional-back-button-wrapper">
            <button>Back</button>
          </div>
          `)
          shadowRoot.querySelector('#pwf-1 .additional-question-select').addEventListener("change",function(){
            if(this.value){
              shadowRoot.querySelector('#pwf-1').classList.add("additional-answered")
            }
          })
          shadowRoot.querySelector('#pwf-1 .additional-button-wrapper button').addEventListener("click",function(){
            shadowRoot.querySelector('#pwf-1').classList.add("additional-answered")
          })
          shadowRoot.querySelector('#pwf-1 .additional-back-button-wrapper').addEventListener("click",function(){
            shadowRoot.querySelector('#pwf-1').classList.remove("additional-answered")
          })
        }
      },100)
    }
  },10)

  setTimeout(function(){
    clearInterval(bodyInterval3013)
  },7000)
})();