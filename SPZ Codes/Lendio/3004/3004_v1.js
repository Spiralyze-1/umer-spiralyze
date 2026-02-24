(function () {
  const bodyInterval3001 = setInterval(function () {
    if (document.body &&
      !document.querySelector('.spz_3004_v1') &&
      (
        document.querySelector('.main-content-div') ||
        document.querySelector('.lp-header-with-cta')
      )) {
      clearInterval(bodyInterval3001)
      document.querySelector('body').classList.add("spz_3004_v1")
      let formInterval;
      var quoteSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32" fill="none">
          <g opacity="0.9">
            <path d="M20.2871 32V15.6164L29.2476 0H37L30.1034 14.6301H37V32H20.2871ZM0 32V15.6164L8.80952 0H16.7633L9.71565 14.6301H16.7633V32H0Z" fill="white"/>
          </g>
        </svg>`;

      let sectionSelector;
      if (window.location.pathname.includes('/sba-loans') || window.location.pathname.includes('/small-business-financing') || window.location.pathname.includes('/partners-lf')) {
        sectionSelector = document.querySelector('.spz_3004_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3004_v1 .main-content-div .form-div');
      } else if (window.location.pathname.includes('/lp/direct/search-small-business-loans')) {
        document.querySelector('body').classList.add("spz_3004_bussiness_loans");
        sectionSelector = document.querySelector('.spz_3004_v1 .lp-header-with-cta');
        formSelector = document.querySelector('.spz_3004_v1 .lp-pwf-cont .application-form-wrap-lp-spec');
      } else if (window.location.pathname.includes('/simple-a')) {
        document.querySelector('body').classList.add("spz_3004_simple_a");
        sectionSelector = document.querySelector('.spz_3004_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3004_v1 .main-content-div .form-div');
      } else if (window.location.pathname.includes('/partners-sf')) {
        document.querySelector('body').classList.add("spz_3004_partners_sf");
        sectionSelector = document.querySelector('.spz_3004_v1 .main-content-div');
        formSelector = document.querySelector('.spz_3004_v1 .main-content-div .form-div');
      }
      let headerLogoHref = 'https://www.lendio.com/';
      let headerLogoHrefTarget = '';
      if (window.location.pathname.includes('/lp/direct/search-small-business-loans')) {
        const controlTag = document.querySelector('.spz_3004_v1 .navbar-container .nav-landing-logos-container a');
        if (controlTag) {
          headerLogoHref = controlTag.href;
        }
      } else if (window.location.pathname.includes('/simple-a')) {
        headerLogoHrefTarget = 'target="_blank"';
        const controlTag = document.querySelector('.spz_3004_v1 .dynamic-lp-inner div:first-child div:first-child a');
        if (controlTag) {
          headerLogoHref = controlTag.href;
        }
      } else if (window.location.pathname.includes('/partners-sf') || window.location.pathname.includes('/partners-lf')) {
        headerLogoHrefTarget = 'target="_blank"';
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
                  <div class="main_logo">
                    <a href="${headerLogoHref}" ${headerLogoHrefTarget}><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/lendio/3004/logo.webp"
                        alt="Lendio logo"></a>
                  </div>
                  <div class="hero_main">
                    <div class="hero_left">
                      <div class="form_heading">
                        <h3><span>SMALL BUSINESS FUNDING</span></h3>
                        <h2>Check eligibility & <strong>view offers in minutes.</strong></h2>
                        <picture>
                          <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1764861851/lendio/3004/reviews-v2.svg">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/v1764861258/lendio/3004/reviews-v3.svg" alt="Review">
                        </picture>
                        <ul>
                          <li>
                            <p><strong>Fast application.</strong> Apply for funding in minutes. No effect on your credit. Get funds as soon as next day.   </p>
                          </li>
                          <li>
                            <p><strong>75+ Lenders.</strong> See offers from over 75 vetted lenders, including SBA-approved lenders. Compare interest rates, APR, terms, and more.</p>
                          </li>
                          <li>
                            <p><strong>Loan options.</strong> Loan types include SBA, accounts receivable, equipment financing, and small business.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="hero_right">
                      <div class="spz_form">
  
                      </div>
                    </div>
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
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1764692297/lendio/3001/reviews-v1_2.svg"
                          alt="Trustpilot">
                      </figure>
                    </div>
                    <div class="data_right">
                      <span>${quoteSvg}</span>
                      <p>The process was amazing. They went at my pace. Funds were in my account within two days.</p>
                      <div class="author">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1764601213/lendio/3001/frame_1350681208.svg"
                          alt="Art Hannemann">
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
        if (window.location.pathname.includes('/sba-loans')) {
          document.querySelector('.form_heading h3').innerHTML = `<span>SBA SMALL BUSINESS FUNDING</span>`;
          document.querySelector('.form_heading h2').innerHTML = `Check eligibility &  <strong>view offers in minutes.</strong>`;
          document.querySelector('.form_heading ul').innerHTML = `
            <li>
              <p><strong>Fast application.  </strong>  Apply in minutes. No effect on your credit. Up to $5 million. Terms up to 30 years.</p>
            </li>
            <li>
              <p><strong>SBA Lenders. </strong>  See offers from multiple SBA-approved lenders. Compare APR, terms, etc.</p>
            </li>
            <li>
              <p><strong>Largest provider. </strong> Over 12,200 SBA loans awarded, totaling more than $475 million.</p>
            </li>
          `;
          document.querySelector('.form_heading h3 span').insertAdjacentHTML("afterend",`
            <div class="tooltips">
               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <g opacity="0.4">
                  <path d="M8.125 15.625C12.2671 15.625 15.625 12.2671 15.625 8.125C15.625 3.98286 12.2671 0.625 8.125 0.625C3.98286 0.625 0.625 3.98286 0.625 8.125C0.625 12.2671 3.98286 15.625 8.125 15.625Z" stroke="#192526" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.5 7.5C7.66576 7.5 7.82473 7.56585 7.94194 7.68306C8.05915 7.80027 8.125 7.95924 8.125 8.125V11.25C8.125 11.4158 8.19085 11.5747 8.30806 11.6919C8.42527 11.8092 8.58424 11.875 8.75 11.875" stroke="#192526" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.8125 5.625C8.33027 5.625 8.75 5.20527 8.75 4.6875C8.75 4.16973 8.33027 3.75 7.8125 3.75C7.29473 3.75 6.875 4.16973 6.875 4.6875C6.875 5.20527 7.29473 5.625 7.8125 5.625Z" fill="#192526"/>
                </g>
              </svg>
              <div class="text">
                Answer the basics about your business and what you're using your funding for. If you qualify, we'll match you with one of our lenders and find the right match for you.
              </div>
            </div>
            `)
        }
        if (window.location.pathname.includes('/search-small-business-loans')) {
          document.querySelector('.form_heading h3 span').insertAdjacentHTML("afterend",`
            <div class="tooltips">
               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <g opacity="0.4">
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
        //form
        document.querySelector('.spz_form').insertAdjacentElement("afterbegin", formSelector);
      }

      let LAST_ACTIVE_CAROUSEL_ITEM = null;
      let FIRST_TIME_FOCUS = true;

      function focusHandler(e, shadowRoot) {
        setTimeout(() => {
          if (LAST_ACTIVE_CAROUSEL_ITEM !== shadowRoot.querySelector('#pwf-1 .carousel-inner .carousel-item.active')) {
            const startTime = Date.now();
            const interval = setInterval(() => {
              const activeCarouselItem = shadowRoot.querySelector('#pwf-1 .carousel-inner .carousel-item.active');
              if (activeCarouselItem) {
                const inputs = activeCarouselItem.querySelectorAll('input');
                if (inputs.length > 0) {
                  inputs[0].focus();
                  clearInterval(interval);
                  LAST_ACTIVE_CAROUSEL_ITEM = shadowRoot.querySelector('#pwf-1 .carousel-inner .carousel-item.active');
                  return;
                }
              }
              if (Date.now() - startTime >= 4000) {
                LAST_ACTIVE_CAROUSEL_ITEM = shadowRoot.querySelector('#pwf-1 .carousel-inner .carousel-item.active');
                clearInterval(interval);
              }
            }, 100);
          }
        }, 500);
      }

      function keydownHandler(e, shadowRoot) {
        if (e.key === 'Enter') {
          focusHandler(e, shadowRoot);
        }
      }

      function backLinkHandler(e, shadowRoot) {
        LAST_ACTIVE_CAROUSEL_ITEM = shadowRoot.querySelector('#pwf-1 .carousel-inner .carousel-item.active');
      }

      function formEdits() {
        formInterval = setInterval(function () {
          if (document.querySelector('lendio-start')) {
            if (document.querySelector('lendio-start').shadowRoot) {
              clearInterval(formInterval);
              const shadowRoot = document.querySelector('lendio-start').shadowRoot;
              const style = document.createElement('style');
              style.textContent = `
                    h4,h5 {
                      display: none;
                    }
                    h6 {
                      color: #171717;
                      font-family: proxima-nova,sans-serif;
                      font-size: 28px;
                      font-weight: 600;
                      line-height: 24px;
                      margin-top: 28px;
                      margin-bottom: 33px;
                      text-align:center;
                    }
                    #pwf-1:has(.carousel-item.slide-1.active) .carousel-inner{
                      --bar-scale: calc(1 / 11);
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
                      margin-bottom: 28.5px;
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
                    .spz-wrapper{
                      position: relative;
                    }  
                    .form_header {
                      margin-bottom: 32.5px;
                    }
                    .form_header h2 {
                      color: #171717;
                      font-family: proxima-nova,sans-serif;
                      font-size: 28px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: 24px;
                      text-align: center;
                    }
  
                    #pwf-1 select,#pwf-1 input:not([type="checkbox"]){
                      border-radius: 8px;
                      outline: 1px solid #E2DBD5;
                      background: #FEFDFD;
                      padding: 19px 15px 0;
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
                      padding-right: 40px;
                      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M16.25 7.5L10 13.75L3.75 7.5' stroke='%23A7A19D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                      background-position: right 15px center;
                      background-repeat: no-repeat;
                      overflow:hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                    #pwf-1 input#email,
                    #pwf-1 input#primary_phone{
                      padding-left:50px!important;
                    }
                    #pwf-1 input#email + label,
                    #pwf-1 input#primary_phone + label{
                      left:50px;
                    }
                    #pwf-1 input#email:focus ~ .spz-label, 
                    #pwf-1 input#primary_phone:focus ~ .spz-label, 
                    #pwf-1 input#email:not(:placeholder-shown) ~ .spz-label,
                    #pwf-1 input#primary_phone:not(:placeholder-shown) ~ .spz-label{
                      left:50px;
                    }
                    #pwf-1 input:not([type="checkbox"]){
                      overflow:hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      padding-left: 15px !important;
                    }
                    #pwf-1 .spz-wrapper:has(input:not([type="checkbox"])) ~ img {
                      display:none;
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
                    #pwf-1 select + img,#pwf-1 input:not([type="checkbox"]) +img{
                      left:24px;
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
                      transform: translateY(calc(-50% - 1.5px));
                      left: 15px;
                      color: #78716C;
                      font-family: proxima-nova,sans-serif;
                      font-size: 16px;
                      font-weight: 400;
                      line-height: 20.8px;
                      transition: ease 0.3s;
                      text-align: left;
                      width: calc(100% - 55px);
                      pointer-events: none;
                      z-index: 3;
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
                      top: 4.5px;
                      left: 15px;
                      transform: none;
                      width: calc(100% - 55px);
                      overflow:hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                    #pwf-1 select option{
                      color: #121111;
                    }
                    #pwf-1 select:has(option:first-child:checked){
                      color: transparent;
                    }
                      
                    #pwf-1 .spz-wrapper>img[alt="Secure Lock"]{
                      left: 17.5px;
                      top: 7px;
                      width: 19px;
                      z-index: 3;
                    }
                    #pwf-1 .error-text{
                      color:  #BE3A3A;
                      font-family: proxima-nova,sans-serif;
                      font-size: 14px;
                      font-weight: 400;
                      line-height:18.2px;
                      text-align: left;
                      padding-left: 18px;
                      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM7 3.5C6.75938 3.5 6.5625 3.69688 6.5625 3.9375V7.4375C6.5625 7.67812 6.75938 7.875 7 7.875C7.24062 7.875 7.4375 7.67812 7.4375 7.4375V3.9375C7.4375 3.69688 7.24062 3.5 7 3.5ZM7.65625 9.625C7.65625 9.45095 7.58711 9.28403 7.46404 9.16096C7.34097 9.03789 7.17405 8.96875 7 8.96875C6.82595 8.96875 6.65903 9.03789 6.53596 9.16096C6.41289 9.28403 6.34375 9.45095 6.34375 9.625C6.34375 9.79905 6.41289 9.96597 6.53596 10.089C6.65903 10.2121 6.82595 10.2812 7 10.2812C7.17405 10.2812 7.34097 10.2121 7.46404 10.089C7.58711 9.96597 7.65625 9.79905 7.65625 9.625Z' fill='%23BE3A3A'/%3E%3C/svg%3E");
                      background-position: 0px 3px;
                      background-repeat: no-repeat;
                      margin-top: 7px;
                    }
                    #pwf-1 .btn-action{
                      min-width: 140px;
                      height: 52px;
                      overflow: hidden;
                      color: #FEFDFD;
                      font-family: proxima-nova,sans-serif;
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
                    #pwf-1 .btn-action > div{
                      color: #FEFDFD;
                      font-family: proxima-nova,sans-serif;
                      font-size: 16px;
                      font-weight: 600;
                      line-height: 20.8px;
                      justify-content: center;
                    }
                    #pwf-1 .btn-action:hover{
                      background: #121111;
                    }
                    #pwf-1 .back-link,
                    #pwf-1 .back-link>div{
                      color: #78716C;
                      font-family: proxima-nova,sans-serif;
                      font-size: 16px;
                      font-weight: 500;
                      line-height: 20.8px;
                    }
                    #pwf-1 .back-link {
                      margin-bottom: 2.5px;
                      margin-left: -0.5px;
                    }
                    #pwf-1 .back-link:hover>div{
                      color: #121111;
                    }
                    #pwf-1 .back-link:hover > div>span svg g path{
                      stroke: #121111;
                    }
                    #pwf-1{
                      position: static;
                    }
                    #pwf-1 .carousel-inner{
                      position: static;
                    }
                    #pwf-1 .carousel-inner .carousel-item{
                      padding: 0 1px;
                    }
                    #pwf-1 .carousel-inner + .flex > .flex-1{
                      text-align: left;
                      width:auto!important;
                    }
                    #pwf-1 .carousel-inner+div{
                      margin-top: 19px
                    }
                    #pwf-1 div:has(.disclosure-tooltip){
                      margin-top: 26px;
                    }
                    #pwf-1 div:has(.disclosure-tooltip) small{
                      color: #171717;
                      font-family: proxima-nova,sans-serif;
                      font-size: 12px;
                      font-weight: 500;
                      line-height: 15.6px;
                    }
                    #pwf-1 div:has(.disclosure-tooltip) small sup{
                      top:-5.5px;
                      font-weight: 400;
                    }
                    #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
                      color: #171717;
                      font-family: proxima-nova,sans-serif;
                      font-size: 12px;
                      font-weight: 500;
                      line-height: 15.6px;
                      margin-left:-3px;
                      text-decoration: underline;
                      text-underline-offset: 5px;
                      border: 0;
                      z-index: 9;
                      transform: translate(1.5px, -1px);
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
                    }
                    #pwf-1 .disclosure-tooltip .disclosure-tooltiptext:after{
                      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='6' viewBox='0 0 14 6' fill='none'%3E%3Cpath d='M7 0L14 6H0L7 0Z' fill='%23192526'/%3E%3C/svg%3E");
                      width: 14px;
                      height: 6px;
                      border: 0;
                      top: -6px;
                      right: auto;
                      left: 50%;
                      margin-left: 60px;
                    }
                    #pwf-1 .invisible {
                        display: none;
                    }  
    
                    #pwf-1 .spz-wrapper:has(#business_name){
                      margin-bottom: 12px;
                    }
                    #pwf-1 .back-link>div >span{
                      font-size: 0!important;
                      display: inline-block;
                      transform:translateX(2px) translateY(3.5px);
                      margin-right: 6px;
                      margin-top: 0px;
                    }
                    #pwf-1 .back-link>div >span svg{
                      width: 16px;
                    }
                    #pwf-1:has(.carousel-item.slide-11.active) .carousel-inner+div>.pl-4{
                      padding-left:0;
                     }

                     #pwf-1:has(.carousel-item.slide-11.active) .btn-action{
                         min-width: 166px;
                      }
                    @media (min-width: 1024px) and (max-width: 1235px){ 
                      #pwf-1 .disclosure-tooltip .disclosure-tooltiptext{
                        margin-left: -200px;
                      }
                      #pwf-1 .disclosure-tooltip .disclosure-tooltiptext:after {
                        margin-left: 30px;
                      }
                    }
  
                    @media (max-width: 767.98px) {  
                      #pwf-1 .back-link {
                        margin-bottom: 0;
                        margin-top: 2.5px;
                      }
                      #pwf-1 .slide-9 .grid-cols-2 {
                        gap: 12px !important;
                      }
                      h6{
                        margin-top: 22px;
                        margin-bottom: 27px;
                      }
                      // #pwf-1 .carousel-inner+div{
                      //   flex-direction: column-reverse;
                      // }
                      #pwf-1 .carousel-inner+div{
                        margin-top:13px
                      }
                      #pwf-1 .back-link>div{
                        display:flex;
                      }
                      #pwf-1 div:has(.disclosure-tooltip){
                        margin-top: 25.5px
                      }
                      #pwf-1 div:has(.disclosure-tooltip) small{
                        max-width: 270px;
                        margin-left: auto;
                        margin-right: auto;
                        display: block;
                      }
                      #pwf-1 div:has(.disclosure-tooltip) small .disclosure-tooltip{
                        transform: translate(1.5px, 2.5px);
                      }
                      #pwf-1 .disclosure-tooltip .disclosure-tooltiptext{
                        left: 50%;
                      }
                      #pwf-1 .disclosure-tooltip .disclosure-tooltiptext:after{
                        margin-left: 0;
                      }
                      // #pwf-1 .btn-action{
                      //   width: 100%;
                      // }
                      #pwf-1 div:has(>.btn-action){
                        width: calc(100% + 2px);
                        display: flex;
                      } 
                      #pwf-1 .slide-9 .grid-cols-2{
                        grid-template-columns: none;
                      }
                      #pwf-1 .carousel-inner + .flex > .flex-1 a:not(.invisible){
                        margin-right: 68.5px;
                        min-width: 61.98px;
                      }
          
                      #pwf-1 select ~ .spz-label,#pwf-1 input:not([type="checkbox"]) ~ .spz-label{
                        width: calc(100% - 56px);
                      }
                    
                      #pwf-1 select:focus ~ .spz-label,
                      #pwf-1 select:not(:has(option:first-child:checked)) ~ .spz-label,
                      #pwf-1 input:focus ~ .spz-label,
                      #pwf-1 input:not(:placeholder-shown) ~ .spz-label {
                        width: calc(100% - 56px);
                      }
                      // #pwf-1:has(.carousel-item.slide-11.active) .btn-action{
                      //    min-width: 140px;
                      // }
                      // #pwf-1:has(.carousel-item.slide-11.active) .btn-action{
                      //   // flex-direction: column-reverse;
                      // }
                      #pwf-1:has(.carousel-item.slide-11.active) .carousel-inner + .flex > .flex-1 a:not(.invisible){
                        margin-right: 42.5px;
                      }
                      .steps{
                        margin-bottom: 22.5px;
                        margin-top: 1.5px;
                      }
                      .form_header {
                        margin-bottom: 26.5px;
                      }
                    }
                  `;

              shadowRoot.appendChild(style);
              const disclosure = shadowRoot.querySelector('#pwf-1 div:has(.disclosure-tooltip) small');
              if (disclosure) {
                disclosure.innerHTML = disclosure.innerHTML.replace(/(<sup>.*?<\/sup>)(.*?)(\.)/i, '$2$3$1 ');
              }
              shadowRoot.querySelector('.carousel-inner').insertAdjacentHTML("afterbegin", `
                    <div class="steps"></div>
                    <div class="form_header"><h2>Get Started</h2></div>
                  `)

              shadowRoot.querySelector('#pwf-1 .back-link>div >span').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_24212_392)">
                    <path d="M10 12L5 7L10 2" stroke="#78716C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_24212_392">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>`;

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
                  if (FIRST_TIME_FOCUS) {
                    input.focus();
                    FIRST_TIME_FOCUS = false;
                  }
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
                  shadowRoot.querySelector('#last').insertAdjacentHTML("afterend", "<label class='spz-label last'>Last Name</label>")
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



                shadowRoot.querySelectorAll('#pwf-1 .carousel-inner .carousel-item.active input').forEach(item => {
                  item.removeEventListener('keydown', (e) => keydownHandler(e, shadowRoot));
                  item.addEventListener('keydown', (e) => keydownHandler(e, shadowRoot));
                });

                const firstBtn = shadowRoot.querySelector('.btn-action');
                if (firstBtn) {
                  shadowRoot.querySelectorAll('.btn-action').forEach(element => {
                    if (!element.classList.contains('spz3004_v1')) element.classList.add('spz3004_v1');
                    element.removeEventListener('click', (e) => focusHandler(e, shadowRoot));
                    element.addEventListener('click', (e) => focusHandler(e, shadowRoot));
                  });
                }

                const backLink = shadowRoot.querySelector('#pwf-1 .back-link');
                if (backLink) {
                  backLink.removeEventListener('click', (e) => backLinkHandler(e, shadowRoot));
                  backLink.addEventListener('click', (e) => backLinkHandler(e, shadowRoot));
                }
                
                // Ensure sup element always has value '2' (check on every mutation)
                // ensureSupValueIsTwo();
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