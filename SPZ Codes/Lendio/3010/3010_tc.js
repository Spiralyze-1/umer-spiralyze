(function() {
  const bodyInterval3010 = setInterval(function(){
    if(document.querySelector('body') && !document.querySelector('.spz_3010_v') && (
      document.querySelector('.exit-pop-header') || 
      document.querySelector('.dynamic-lp-inner') ||
      document.querySelector('.lp-header-wrapper')
    )){
      clearInterval(bodyInterval3010)
      let formInterval;
     
      document.querySelector('body').classList.add("spz_3010_v","spz_3010_v1")
      if(window.location.pathname=='/sba-loans'){
        document.querySelector('body').classList.add('sba-only')
      }
      if(window.location.pathname=='/simple-a'){
        document.querySelector('body').classList.add('simple-a');
      }
      if(window.location.pathname=='/lp/direct/search-small-business-loans'){
        document.querySelector('body').classList.add('small');
      }
      const newHTMl=
      `<div class="spz-3010-section1">
        <div class="wrapper">
          <div class="header">
            <a href="https://www.lendio.com" target="_blank">
              <picture>
                <source media="(max-width:767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1764604812/lendio/3007/logo_1.svg">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1764604810/lendio/3007/logo.svg" width="127" height="25" alt="Lendio Logo">
              </picture>
            </a>
          </div>
          <div class="hero-section">
            <div class="text">
              <div class="eyelash"><span>SMALL BUSINESS FUNDING</span></div>
              <div class="title">Check eligibility & view offers <span class="green">in minutes.</span></div>
              <div class="stars">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1768546691/lendio/3010/TP-Logo-Tricolor-Black-RGB.svg" alt="Trustpilot Logo" width="104" height="26" >
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1768463236/lendio/3010/star.svg" alt="Stars Logo" width="98" height="18" >
                <div class="numbers">
                  <strong>4.6</strong>
                  (21,674 reviews)
                </div>
              </div>
              <div class="form-wrapper">
              </div>
              <ul>
                <li><strong>Fast application.</strong> Apply for funding in minutes. No effect on your credit<sup>1</sup>. Get funds as soon as next day.</li>
                <li><strong>75+ Lenders.</strong> See offers from over 75 vetted lenders, including SBA-approved lenders. Compare interest rates, APR, terms, and more.</li>
                <li><strong>Loan options.</strong> Loan types include SBA, accounts receivable, equipment financing, and small business.</li>
              </ul>
            </div>
            <div class="image">
              <picture>
                <source media="(max-width:767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3010/v1-mobile_1.webp">
                <source media="(max-width:1024.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3010/v1-tablet.webp">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3010/v1-desktop.webp" width="566" height="563" alt="Hero Image">
              </picture>
            </div>
          </div>
        </div>
      </div>
      `
      // page 1
      if(window.location.pathname=='/partners-sf' && document.querySelector('.spz_3010_v .exit-pop-header')){
        document.querySelector('.spz_3010_v .exit-pop-header').insertAdjacentHTML("afterend",newHTMl)
      }  
      // page 2
      if(window.location.pathname=='/simple-a' && document.querySelector('.spz_3010_v .dynamic-lp-inner')){
        document.querySelector('.spz_3010_v .dynamic-lp-inner').insertAdjacentHTML("afterbegin",newHTMl)
      }
       // page 3
      if(window.location.pathname=='/sba-loans' && document.querySelector('.spz_3010_v .exit-pop-header')){
        document.querySelector('.spz_3010_v .exit-pop-header').insertAdjacentHTML("afterend",newHTMl)
        document.querySelector('.spz_3010_v .spz-3010-section1 .wrapper .header a').removeAttribute("target")
        document.querySelector('.spz_3010_v .spz-3010-section1 .hero-section .text .eyelash span').textContent="SBA SMALL BUSINESS FUNDING";
        document.querySelector('.spz_3010_v .spz-3010-section1 .hero-section .text .eyelash').insertAdjacentHTML("beforeend",`
        <div class="tooltips">
           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <g opacity="0.5">
              <path d="M8.125 15.625C12.2671 15.625 15.625 12.2671 15.625 8.125C15.625 3.98286 12.2671 0.625 8.125 0.625C3.98286 0.625 0.625 3.98286 0.625 8.125C0.625 12.2671 3.98286 15.625 8.125 15.625Z" stroke="#192526" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 7.5C7.66576 7.5 7.82473 7.56585 7.94194 7.68306C8.05915 7.80027 8.125 7.95924 8.125 8.125V11.25C8.125 11.4158 8.19085 11.5747 8.30806 11.6919C8.42527 11.8092 8.58424 11.875 8.75 11.875" stroke="#192526" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.8125 5.625C8.33027 5.625 8.75 5.20527 8.75 4.6875C8.75 4.16973 8.33027 3.75 7.8125 3.75C7.29473 3.75 6.875 4.16973 6.875 4.6875C6.875 5.20527 7.29473 5.625 7.8125 5.625Z" fill="#192526"/>
            </g>
          </svg>
          <div class="text">
            Answer the basics about your business and what you're using your funding for. If you qualify, we'll match you with one of our lenders and find the right match for you.
          </div>
        </div>
        `);
        document.querySelector('.spz_3010_v .spz-3010-section1 .hero-section .text ul').innerHTML=`
        <li><strong>Fast application.</strong> Apply in minutes. No effect on your credit<sup>1</sup>. Up to $5 million. Terms up to 30 years.</li>
        <li><strong>SBA Lenders.</strong> See offers from multiple SBA-approved lenders. Compare APR, terms, etc.</li>
        <li><strong>Largest provider.</strong> Over 12,200 SBA loans awarded, totaling more than $475 million.</li>
        `
       
      }  
      //page 4
      if(window.location.pathname=='/lp/direct/search-small-business-loans' && document.querySelector('.spz_3010_v .lp-header-wrapper')){
        document.querySelector('.spz_3010_v .lp-header-wrapper').insertAdjacentHTML("afterbegin",newHTMl)
        document.querySelector('.spz_3010_v .spz-3010-section1 .wrapper .header a').removeAttribute("target")
        document.querySelector('.spz_3010_v .spz-3010-section1 .wrapper .header a').setAttribute("href","https://www.lendio.com/lp/direct/search-small-business-loans")
        document.querySelector('.spz_3010_v .spz-3010-section1 .hero-section .text .eyelash').insertAdjacentHTML("beforeend",`
        <div class="tooltips">
           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <g opacity="0.5">
                <path d="M8.125 15.625C12.2671 15.625 15.625 12.2671 15.625 8.125C15.625 3.98286 12.2671 0.625 8.125 0.625C3.98286 0.625 0.625 3.98286 0.625 8.125C0.625 12.2671 3.98286 15.625 8.125 15.625Z" stroke="#192526" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 7.5C7.66576 7.5 7.82473 7.56585 7.94194 7.68306C8.05915 7.80027 8.125 7.95924 8.125 8.125V11.25C8.125 11.4158 8.19085 11.5747 8.30806 11.6919C8.42527 11.8092 8.58424 11.875 8.75 11.875" stroke="#192526" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.8125 5.625C8.33027 5.625 8.75 5.20527 8.75 4.6875C8.75 4.16973 8.33027 3.75 7.8125 3.75C7.29473 3.75 6.875 4.16973 6.875 4.6875C6.875 5.20527 7.29473 5.625 7.8125 5.625Z" fill="#192526"/>
              </g>
            </svg>
          <div class="text">
            Answer the basics about your business and what you're using your funding for. If you qualify, we'll match you with one of our 75+ lenders and find the right match for you.
          </div>
        </div>
        `)
      }

      // form
      const newImage = document.createElement("img");
      newImage.classList.add("lock-icon");
      newImage.setAttribute('alt', 'Lock Icon');
      newImage.setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1765281189/lendio/3007/LockSimple.svg');
      formInterval=setInterval(function(){
        if(document.querySelector('lendio-start') && document.querySelector('lendio-start').shadowRoot){
          clearInterval(formInterval);
          //form move
          //page 1
          if(window.location.pathname=='/partners-sf' && document.querySelector('.form-div-con')){
            document.querySelector('.spz_3010_v .spz-3010-section1 .hero-section .text .form-wrapper').insertAdjacentElement("beforeend",document.querySelector('.form-div-con'))
          }
          //page 2
          if(window.location.pathname=='/simple-a' && document.querySelector('.form-div')){
            document.querySelector('.spz_3010_v .spz-3010-section1 .hero-section .text .form-wrapper').insertAdjacentElement("beforeend",document.querySelector('.form-div'))
          }
          //page 3
          if(window.location.pathname=='/sba-loans' && document.querySelector('.form-div-con')){
            document.querySelector('.spz_3010_v .spz-3010-section1 .hero-section .text .form-wrapper').insertAdjacentElement("beforeend",document.querySelector('.form-div-con'))
          }
          //page 4
          if(window.location.pathname=='/lp/direct/search-small-business-loans' && document.querySelector('.text-amount-form-wrap-var-2')){
            document.querySelector('.spz_3010_v .spz-3010-section1 .hero-section .text .form-wrapper').insertAdjacentElement("beforeend",document.querySelector('.text-amount-form-wrap-var-2'))
          }
          const shadowRoot = document.querySelector('lendio-start').shadowRoot;
          const style = document.createElement('style');
          style.textContent = `
            h4,h5 {
              display: none;
            }
            .spz-wrapper{
              position: relative;
            }
            h5 + .mb-3,
            h4 + .mb-3{
              margin-bottom: 9px;
            }
            #pwf-1{
              max-width: 100%;
              display: flex;
              flex-wrap: wrap;
              align-items: flex-start;
              margin-top: 32.5px;
            }  
            #pwf-1:has(.back-link:not(.invisible)){
              margin-top: 65px;
            }
            #pwf-1:has(.back-link:not(.invisible)>div[style*="display: none"]){
              margin-top: 32.5px;
            }
            #pwf-1 .carousel-item{
              padding: 0 1px;
            }   
            #pwf-1 select,#pwf-1 input:not([type="checkbox"]){
              border-radius: 999px;
              outline: 1px solid #E2DBD5;
              background-color: #FEFDFD;
              padding: 21px 24px 0;
              height: 54px;
              color: #121111;
              font-family: proxima-nova,sans-serif;
              font-size: 16px;
              font-weight: 400;
              line-height: 20.8px;
              border: 0;
              box-shadow: none;
            }
            #pwf-1 select{
              padding-right: 48px;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M16.25 7.5L10 13.75L3.75 7.5' stroke='%23A7A19D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
              background-position: right 24px center;
              background-repeat: no-repeat;
              overflow:hidden;
              background-size: 20px 20px;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            #pwf-1 input:not([type="checkbox"]){
              overflow:hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding-left: 24px !important;
            }
            #pwf-1 input[type="checkbox"]{
              width: 16px;
              height: 16px;
              border-radius: 4.5px !important;
              outline: 1.125px solid #E2DBD5;
              background: #FFF;
              appearance: none;
              -webkit-appearence: none;
              border: 0;
              box-shadow: none;
            }
            #pwf-1 input[type="checkbox"]:focus{
              outline: 2px solid #2468C7;
            }
            #pwf-1 input[type="checkbox"]:checked{
              background-color: #2468C7;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='12' viewBox='0 0 14 12' fill='none'%3E%3Cpath d='M0.74707 5.16431L4.74707 9.66431L12.7471 0.664307' stroke='white' stroke-width='2'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: center center;
              background-size: 10px;
            }
            #pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img{
              width: 24px;
              height: 24px;
              filter: none;
              top: 9px;
              left: 24px;
              z-index:2;
            }
            #pwf-1 input#email,
            #pwf-1 input#primary_phone{
              padding-left: 58px !important;
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
              opacity:0;
            }
            #pwf-1 input:-ms-input-placeholder { 
              color: transparent;
            }
            #pwf-1 input::-moz-placeholder { 
              color: transparent;
              opacity:0;
            }
            #pwf-1 select:focus,#pwf-1 input:not([type="checkbox"]):focus{
              outline: 2px solid #2468C7;
            }
            #pwf-1 .carousel-item div:has(.error-text) .spz-wrapper select,
            #pwf-1 .carousel-item div:has(.error-text) .spz-wrapper input:not([type="checkbox"]){
              outline: 1px solid #BE3A3A;
            }
            #pwf-1 select ~ .spz-label,#pwf-1 input:not([type="checkbox"]) ~ .spz-label{
              position: absolute;
              top: 50%;
              transform: translateY(calc(-50% - 1px));
              left: 24px;
              color: #78716C;
              font-family: proxima-nova,sans-serif;
              font-size: 16px;
              font-weight: 400;
              line-height: 20.8px;
              transition: ease 0.3s;
              text-align: left;
              width: calc(100% - 72px);
              pointer-events: none;
              z-index: 3;
            }
            #pwf-1 input:not([type="checkbox"]) ~ .spz-label{
              width: calc(100% - 55px);
            }
            #pwf-1 input:not([type="checkbox"])#email ~ .spz-label,
            #pwf-1 input:not([type="checkbox"])#primary_phone ~ .spz-label{
              left: 58px;
            }
            #pwf-1 select:focus ~ .spz-label,
            #pwf-1 select:not(:has(option:first-child:checked)) ~ .spz-label,
            #pwf-1 input:focus ~ .spz-label,
            #pwf-1 input:not(:placeholder-shown) ~ .spz-label
            {
              color:  #121111;
              font-weight: 400;
              font-size: 14px;
              line-height: 18.2px;
              top: 5px;
              left: 24px;
              transform: none;
              width: calc(100% - 42px);
              overflow:hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            #pwf-1 input#email:focus ~ .spz-label,
            #pwf-1 input:not(:placeholder-shown)#email ~ .spz-label,
            pwf-1 input#primary_phone:focus ~ .spz-label,
            #pwf-1 input:not(:placeholder-shown)#primary_phone ~ .spz-label{
              left: 58px;
            }
            #pwf-1 select option{
              color: #121111;
            }
            #pwf-1 select:has(option:first-child:checked){
              color: transparent;
            }
            #pwf-1 .error-text{
              color:  #BE3A3A;
              font-family: proxima-nova,sans-serif;
              font-size: 14px;
              font-weight: 400;
              line-height:18.2px;
              padding-left: 18px;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM7 3.5C6.75938 3.5 6.5625 3.69688 6.5625 3.9375V7.4375C6.5625 7.67812 6.75938 7.875 7 7.875C7.24062 7.875 7.4375 7.67812 7.4375 7.4375V3.9375C7.4375 3.69688 7.24062 3.5 7 3.5ZM7.65625 9.625C7.65625 9.45095 7.58711 9.28403 7.46404 9.16096C7.34097 9.03789 7.17405 8.96875 7 8.96875C6.82595 8.96875 6.65903 9.03789 6.53596 9.16096C6.41289 9.28403 6.34375 9.45095 6.34375 9.625C6.34375 9.79905 6.41289 9.96597 6.53596 10.089C6.65903 10.2121 6.82595 10.2812 7 10.2812C7.17405 10.2812 7.34097 10.2121 7.46404 10.089C7.58711 9.96597 7.65625 9.79905 7.65625 9.625Z' fill='%23BE3A3A'/%3E%3C/svg%3E");
              background-position: 0px 3px;
              background-repeat: no-repeat;
              margin-top: 7px;
              text-align:left;
              padding-top: 0.5px;
              transform:translateX(-1px);
            }
            #pwf-1  .flex:has(.btn-action){
              justify-content: space-between;
              width: 160px;
              margin-left: 12px;
            }
            #pwf-1:has(.carousel-inner[style="display: none;"]){
              flex-direction: column;
            }
            #pwf-1 {
              --flex-w: 160px;
              --flex-ml: 12px;
            }

            #pwf-1 .flex:has(.btn-action) {
              width: var(--flex-w);
              margin-left: var(--flex-ml);
            }
            #pwf-1:has(.carousel-inner[style="display: none;"]) {
              --flex-w: 100%;
              --flex-ml: 0;
            }
            #pwf-1 div:has(>.back-link){
              flex: 0;
              width: 57px !important;
              position: absolute;
              top: -36px;
              left: 0;
            }
            #pwf-1 .back-link{
              color: #78716C;
              font-family: proxima-nova,sans-serif;
              font-size: 16px;
              font-weight: 500;
              line-height: 20.8px;
              transition-property: color;
              transition-timing-function: cubic-bezier(.4, 0, .2, 1);
              transition-duration: .15s;
            }
            #pwf-1 .back-link >div{
              padding-left: 24px;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cg clip-path='url(%23clip0_28944_277)'%3E%3Cpath d='M10 12L5 7L10 2' stroke='%2378716C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_28944_277'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: left calc(50% + 0.5px);
              transition-property: background-image;
              transition-timing-function: cubic-bezier(.4, 0, .2, 1);
              transition-duration: .15s;
            }
            #pwf-1 .back-link:hover{
              color: #121111
            }
            #pwf-1 .back-link:hover >div{
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cg clip-path='url(%23clip0_2055_3072)'%3E%3Cpath d='M10 12L5 7L10 2' stroke='%23121111' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2055_3072'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
            }
            #pwf-1 .back-link span{
              display: none;
            }
            #pwf-1  .flex:has(.btn-action) div:empty{
              display: none;
            }
            #pwf-1 .btn-action{
              width: 160px;
              height: 56px;
              overflow: hidden;
              background: #192526;
              color: #FEFDFD;
              font-family: proxima-nova,sans-serif;
              font-size: 16px;
              font-weight: 600;
              line-height: 20.8px;
              border: 0;
              letter-spacing: 0;
              padding-top: 6px;
              box-shadow: none;
              transform: none;
              padding-left:0;
              padding-right:0;
              margin-top: -1px;
            }
           #pwf-1 .pl-4:has(#pwf-submit-button){
              padding-left: 0;
            }
            #pwf-1 .btn-action > div{
              color: #FFF;
              font-family: proxima-nova,sans-serif;
              font-size: 16px;
              font-weight: 600;
              line-height: 20.8px;
              justify-content: center;
            }
            #pwf-1 .btn-action:hover{
              background: #121111;
            }
            #pwf-1 {
              --inner-width: calc(100% - 176px);
            }

            #pwf-1 .carousel-inner {
              width: var(--inner-width);
            }

            #pwf-1:has(.slide-7.active) {
              --inner-width: 100%;
            }
            #pwf-1 .carousel-inner+div{
              margin-top: 0px;
            }
            #pwf-1 div:has(.disclosure-tooltip){
              margin-top: 0;
              margin-left: 24px;
            }
            #pwf-1 div:has(.disclosure-tooltip) small{
              color: #171717;
              font-family: proxima-nova,sans-serif;
              font-size: 12px;
              font-weight: 500;
              line-height: 15.6px;
              padding-left: 0.5px;
            }
            #pwf-1 div:has(.disclosure-tooltip) small sup{
              top:-5.5px;
            }
            #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
              color: #171717;
              font-family: proxima-nova,sans-serif;
              font-size: 12px;
              font-weight: 500;
              line-height: 15.6px;
              margin: 0 auto;
              text-decoration: underline;
              text-underline-offset: 5px;
              border: 0;
              transform: translate(-1px,-1px)
            }
            #pwf-1 .disclosure-tooltip .disclosure-tooltiptext{
              margin-left: -140px;
              width: 280px;
              top: 172%;
              bottom: auto;
              border-radius: 8px;
              color: #FBF8F7;
              font-family: proxima-nova,sans-serif;
              font-size: 12px;
              font-weight: 400;
              line-height: 16px;
              padding: 14.5px 20px 18px;
              box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.10), 0 4px 6px -1px rgba(0, 0, 0, 0.10);
              background: #192526;
              left: 50%;
            }
            #pwf-1 .disclosure-tooltip .disclosure-tooltiptext:after{
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='6' viewBox='0 0 14 6' fill='none'%3E%3Cpath d='M7 0L14 6H0L7 0Z' fill='%23192526'/%3E%3C/svg%3E");
              width: 14px;
              height: 6px;
              border: 0;
              top: -6px;
              right: auto;
              left: 50%;
            }
            #pwf-1 .invisible {
              display: none;
            }  
            #pwf-1 .mb-3:has(.spz-wrapper #primary_phone):not(.row){
              margin-bottom: 26px;
            }
            #pwf-1 .legal-box{
              overflow-y: hidden;
              border: 0;
              height: auto;
              padding-bottom:0;
              border-radius: 0;
              background: none;
              padding-top: 0;
              padding-left: 7px;
              margin-top: -1.5px;
              margin-left: 2px;
              padding-right: 0;
            }
            #pwf-1 .legal-box .agreements{
              color: #666;
              font-family: proxima-nova,sans-serif;
              font-size: 12px;
              font-weight: 400;
              line-height: 16px;
              display: block;
              padding: 0;
            }
            #pwf-1 .legal-consent{
              padding: 1px 0px 0px 24px;
              margin-bottom: -0.5px;
            }
            #pwf-1 .legal-consent .agreements{
              color: #666;
              font-family: proxima-nova,sans-serif;
              font-size: 14px;
              font-weight: 400;
              line-height: 18.2px;
            }
            #pwf-1 .legal-consent .agreements a{
              color: #2468C7;
              text-decoration: none;
            }
            #pwf-1 .legal-box-shadow{
              display: none;
            }
            #pwf-1 .business_name-wrapper{
                margin-bottom: 9px;
            }
            #pwf-1 #results #button-container{
              justify-content: center;
            }
            #pwf-1 .slide-9 .grid-cols-2{
              gap: 14px;
            }
            #pwf-1 .flex:has(> #marketingSmsOptIn){
              margin-top: -12px;
            }
            @media (max-width: 1024.98px) {
              #pwf-1{
                margin-top: 34.5px;
              }  
              #pwf-1:has(.back-link:not(.invisible)>div[style*="display: none"]){
                margin-top: 34.5px;
              }
              #pwf-1 .carousel-inner{
                width: calc(100% - 172px);
              }
            }
            @media (max-width: 767.98px) {  
              h6{
                margin-top: 22px;
                margin-bottom: 27px;
              }
              #pwf-1,#pwf-1:has(.back-link:not(.invisible)),#pwf-1:has(.back-link:not(.invisible)>div[style*="display: none"]){
                margin-top: 33.5px;
              }
              #pwf-1 .carousel-inner+div{
                margin-top:5px;
              }
              #pwf-1:has(.slide-11.active) .carousel-inner+div{
                margin-top:13px
              }
              #pwf-1 div:has(.disclosure-tooltip){
                margin-top: 13.5px;
                margin-left: auto;
                margin-right: auto;
              }
              #pwf-1 div:has(.disclosure-tooltip) small{
                max-width: 270px;
                margin-left: auto;
                margin-right: auto;
                display: block;
              }
              #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
                transform: translate(0px, 2.5px);
              }
              #pwf-1 div:has(.btn-action.slide-1-active){
                width: 100%;
                margin-left:0;
              }
              #pwf-1 .btn-action.slide-1-active{
                width: 100%;
              } 
              #pwf-1 .slide-9 .grid-cols-2{
                grid-template-columns: none;
                gap: 12px;
              }
              #pwf-1 .carousel-inner{
                width: 100%;
              }
              #pwf-1 div:has(>.back-link){
                position: static;
                margin-top: -4px;
                margin-left: 0px;
              }
              #pwf-1 .back-link >div{
                padding-left: 22px;
              }
              #pwf-1 .flex:has(.btn-action){
                --flex-w: 100%;
                --flex-ml: 0;
              }
              #pwf-1 .btn-action{
                width: 140px;
              }
              #pwf-1 .legal-consent{
                padding:0px 0px 0px 1px;
              }
              #pwf-1 .legal-box{
                margin-top: -2.5px;
                margin-left: 4px;
              }
              #pwf-1 .flex:has(>.legal-consent){
                margin-bottom: -8px;
              }   
            }
          `;

          shadowRoot.appendChild(style);
          const small = shadowRoot.querySelector('#pwf-1 div:has(.disclosure-tooltip) small');

          // get current HTML
          let html = small.innerHTML;

          // replace "...credit<sup>1</sup>. " with "...credit.<sup>1</sup> "
          if(window.location.pathname=='/sba-loans'){
            html = html.replace(
              /credit<sup>1<\/sup>\.\s?/,
              'credit.<sup>1</sup> '
            );
          } else {
            html = html.replace(
              /credit<sup>1<\/sup>\.\s?/,
              'credit.<sup>1</sup> '
            );
          }
          
          // update the element
          small.innerHTML = html;

          // add button listener
          let latestButton=""
         
          shadowRoot.querySelector('#pwf-1 .back-link').addEventListener("click",function(){
            latestButton="back";
          })
          const observer = new MutationObserver((mutationsList) => {
            if(shadowRoot.querySelector('#amountSeeking') && !shadowRoot.querySelector('.spz-label.amountSeeking')){
              const input = shadowRoot.querySelector('#amountSeeking');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);

              shadowRoot.querySelector('#amountSeeking').insertAdjacentHTML("afterend","<label class='spz-label amountSeeking'>How much money do you need?</label>")
              shadowRoot.querySelector('#amountSeeking option:first-child').textContent="How much money do you need?"
              const allButtonNext= shadowRoot.querySelectorAll('.btn-action');
              for(let i=0;i<allButtonNext.length;i++){
                allButtonNext[i].classList.add('slide-1-active')
              }
            }
            if(shadowRoot.querySelector('#timeInBusiness') && !shadowRoot.querySelector('.spz-label.timeInBusiness')){
              const input = shadowRoot.querySelector('#timeInBusiness');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#timeInBusiness').insertAdjacentHTML("afterend","<label class='spz-label timeInBusiness'>How long have you been in business?</label>")
              shadowRoot.querySelector('#timeInBusiness option:first-child').textContent="How long have you been in business?"
              const allButtonNext= shadowRoot.querySelectorAll('.btn-action');
              for(let i=0;i<allButtonNext.length;i++){
                allButtonNext[i].classList.remove('slide-1-active')
              }
            } 
            if(shadowRoot.querySelector('#averageMonthlySales') && !shadowRoot.querySelector('.spz-label.averageMonthlySales')){
              const input = shadowRoot.querySelector('#averageMonthlySales');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#averageMonthlySales').insertAdjacentHTML("afterend","<label class='spz-label averageMonthlySales'>What’s your monthly revenue?</label>")
              shadowRoot.querySelector('#averageMonthlySales option:first-child').textContent="What’s your monthly revenue?"
            }
            if(shadowRoot.querySelector('#creditScore') && !shadowRoot.querySelector('.spz-label.creditScore')){
              const input = shadowRoot.querySelector('#creditScore');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#creditScore').insertAdjacentHTML("afterend","<label class='spz-label creditScore'>What is your personal credit score?</label>")
              shadowRoot.querySelector('#creditScore option:first-child').textContent="What is your personal credit score?"
            }
            if(shadowRoot.querySelector('#entityType') && !shadowRoot.querySelector('.spz-label.entityType')){
              const input = shadowRoot.querySelector('#entityType');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#entityType').insertAdjacentHTML("afterend","<label class='spz-label entityType'>What type of business do you own?</label>")
              shadowRoot.querySelector('#entityType option:first-child').textContent="What type of business do you own?"
            }
            if(shadowRoot.querySelector('#industry') && !shadowRoot.querySelector('.spz-label.industry')){
              const input = shadowRoot.querySelector('#industry');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#industry').insertAdjacentHTML("afterend","<label class='spz-label industry'>What is your company's industry?</label>")
              shadowRoot.querySelector('#industry option:first-child').textContent="What is your company's industry?"
            }
            if(shadowRoot.querySelector('#business_name') && !shadowRoot.querySelector('.spz-label.business_name')){
              const input = shadowRoot.querySelector('#business_name');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#business_name').insertAdjacentHTML("afterend","<label class='spz-label business_name'>What is your business’ name?</label>")
              shadowRoot.querySelector('#business_name').addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                  latestButton="enter"
                }
              });
              setTimeout(function(){
                if(shadowRoot.querySelector('#business_name').value=='' || latestButton=="next" || latestButton=="enter" ){
                  shadowRoot.querySelector('#business_name').focus()
                }
              },100)
            }
            if(shadowRoot.querySelector('#first') && !shadowRoot.querySelector('.spz-label.first')){
              const input = shadowRoot.querySelector('#first');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#first').insertAdjacentHTML("afterend","<label class='spz-label first'>First Name</label>")
              shadowRoot.querySelector('#first').addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                  latestButton="enter"
                }
              });
              setTimeout(function(){
                if(shadowRoot.querySelector('#first').value=='' || latestButton=="next" || latestButton=="enter"){
                  shadowRoot.querySelector('#first').focus()
                }
              },100)
            }
            if(shadowRoot.querySelector('#last') && !shadowRoot.querySelector('.spz-label.last')){
              const input = shadowRoot.querySelector('#last');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#last').insertAdjacentHTML("afterend","<label class='spz-label last'>Last Name</label>")
              shadowRoot.querySelector('#last').addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                  latestButton="enter"
                }
              });
            }
            if(shadowRoot.querySelector('#email') && !shadowRoot.querySelector('.spz-label.email')){
              const input = shadowRoot.querySelector('#email');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#email').insertAdjacentHTML("afterend","<label class='spz-label email'>Email Address</label>")
              shadowRoot.querySelector('#email').addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                  latestButton="enter"
                }
              });
              setTimeout(function(){
                if(shadowRoot.querySelector('#email').value=='' || latestButton=="next" || latestButton=="enter"){
                  shadowRoot.querySelector('#email').focus()
                }
              },100)
              const allButtonNext= shadowRoot.querySelectorAll('.btn-action');
              for(let i=0;i<allButtonNext.length;i++){
                allButtonNext[i].classList.remove('slide-11-active')
              }
            }
            if(shadowRoot.querySelector('#primary_phone') && !shadowRoot.querySelector('.spz-label.primary_phone')){
              const input = shadowRoot.querySelector('#primary_phone');   // select your input
              const wrapper = document.createElement('div');   // create wrapper
              wrapper.className = 'spz-wrapper';               // add class
              input.parentNode.insertBefore(wrapper, input);
              wrapper.appendChild(input);
              shadowRoot.querySelector('#primary_phone').insertAdjacentHTML("afterend","<label class='spz-label primary_phone'>Mobile Phone</label>")
              shadowRoot.querySelector('#primary_phone').addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                  latestButton="enter"
                }
              });
              setTimeout(function(){
                if(shadowRoot.querySelector('#primary_phone').value=='' || latestButton=="next" || latestButton=="enter"){
                  shadowRoot.querySelector('#primary_phone').focus()
                }
              },100)
              const allButtonNext= shadowRoot.querySelectorAll('.btn-action');
              for(let i=0;i<allButtonNext.length;i++){
                allButtonNext[i].classList.add('slide-11-active')
              }
            }
            // change image email and phone
            if(shadowRoot.querySelector('#pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img') && !shadowRoot.querySelector('#pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img.changed')){
              shadowRoot.querySelector('#pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img').setAttribute("src","https://res.cloudinary.com/spiralyze/image/upload/v1765281189/lendio/3007/LockSimple.svg")
              shadowRoot.querySelector('#pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img').setAttribute("width","24")
              shadowRoot.querySelector('#pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img').setAttribute("height","24")
              shadowRoot.querySelector('#pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img').classList.add("changed")
            }
         
            //adding listener to button next
            if(shadowRoot.querySelector('#pwf-1 .btn-action:not(.listener-3010-added)')){
              shadowRoot.querySelector('#pwf-1 .btn-action:not(.listener-3010-added)').addEventListener("click",function(){
                  latestButton="next";
                })
              shadowRoot.querySelector('#pwf-1 .btn-action:not(.listener-3010-added)').classList.add("listener-3010-added");
            }

          })
          observer.observe(shadowRoot.querySelector("#pwf-1"), { childList: true, subtree: true,attributes: true  });
          shadowRoot.querySelector('#pwf-1').insertAdjacentHTML("beforeend",`<div class="fake-div"></div>`)
          shadowRoot.querySelector('.fake-div').remove()
        }
      },100)
    }
  },10)

  setTimeout(function(){
    clearInterval(bodyInterval3010)
  },7000)
})();