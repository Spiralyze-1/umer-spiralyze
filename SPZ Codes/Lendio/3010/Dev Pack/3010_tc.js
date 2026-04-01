// form
const newImage = document.createElement("img");
newImage.classList.add("lock-icon");
newImage.setAttribute('alt', 'Lock Icon');
newImage.setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1765281189/lendio/3007/LockSimple.svg');
formInterval = setInterval(function () {
  if (document.querySelector('lendio-start') && document.querySelector('lendio-start').shadowRoot) {
    clearInterval(formInterval);
    document.querySelector('lendio-start').style.maxWidth = "100%";
    document.querySelector('lendio-start').style.width = "100%";
    const shadowRoot = document.querySelector('lendio-start').shadowRoot;
    const style = document.createElement('style');
    style.textContent = `
            h4,h5 {
              display: none;
            }
            .form-field-wrapper{
              position: relative;
            }
            h5 + .mb-3,
            h4 + .mb-3{
              margin-bottom: 9px;
            }
            #start-widget{
              max-width: 100%;
            }
            #pwf-1{
              position: relative;
              max-width: 100%;
              display: flex;
              // flex-wrap: wrap;
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
            #pwf-1 .form-field-wrapper:has(input:not([type="checkbox"])) ~ img{
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
            #pwf-1 .carousel-item div:has(.error-text) .form-field-wrapper select,
            #pwf-1 .carousel-item div:has(.error-text) .form-field-wrapper input:not([type="checkbox"]){
              outline: 1px solid #BE3A3A;
            }
            #pwf-1 select ~ .form-field-label,#pwf-1 input:not([type="checkbox"]) ~ .form-field-label{
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
            #pwf-1 input:not([type="checkbox"]) ~ .form-field-label{
              width: calc(100% - 55px);
            }
            #pwf-1 input:not([type="checkbox"])#email ~ .form-field-label,
            #pwf-1 input:not([type="checkbox"])#primary_phone ~ .form-field-label{
              left: 58px;
            }
            #pwf-1 select:focus ~ .form-field-label,
            #pwf-1 select:not(:has(option:first-child:checked)) ~ .form-field-label,
            #pwf-1 input:focus ~ .form-field-label,
            #pwf-1 input:not(:placeholder-shown) ~ .form-field-label
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
            #pwf-1 input#email:focus ~ .form-field-label,
            #pwf-1 input:not(:placeholder-shown)#email ~ .form-field-label,
            pwf-1 input#primary_phone:focus ~ .form-field-label,
            #pwf-1 input:not(:placeholder-shown)#primary_phone ~ .form-field-label{
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
            #pwf-1 .flex:has(.btn-action) {
              width: 160px;
              margin-left: 12px;
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
            #pwf-1 .carousel-inner {
              width: 100%;
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
              position: absolute;
              bottom: -20px;
              left: 0;
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
            #pwf-1 .mb-3:has(.form-field-wrapper #primary_phone):not(.row){
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
              #pwf-1{
                flex-wrap: wrap;
              }
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
                position: absolute;
                bottom: -45px;
                left: 50%;
                min-width: 270px;
                transform: translateX(-50%);
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
                width: 100%;
                margin-left: 0;
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
    if (window.location.pathname == '/sba-loans') {
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
    let latestButton = ""

    shadowRoot.querySelector('#pwf-1 .back-link').addEventListener("click", function () {
      latestButton = "back";
    })
    const observer = new MutationObserver((mutationsList) => {
      if (shadowRoot.querySelector('#amountSeeking') && !shadowRoot.querySelector('.form-field-label.amountSeeking')) {
        const input = shadowRoot.querySelector('#amountSeeking');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        shadowRoot.querySelector('#amountSeeking').insertAdjacentHTML("afterend", "<label class='form-field-label amountSeeking'>How much money do you need?</label>")
        shadowRoot.querySelector('#amountSeeking option:first-child').textContent = "How much money do you need?"
        const allButtonNext = shadowRoot.querySelectorAll('.btn-action');
        for (let i = 0; i < allButtonNext.length; i++) {
          allButtonNext[i].classList.add('slide-1-active')
        }
      }
      if (shadowRoot.querySelector('#timeInBusiness') && !shadowRoot.querySelector('.form-field-label.timeInBusiness')) {
        const input = shadowRoot.querySelector('#timeInBusiness');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#timeInBusiness').insertAdjacentHTML("afterend", "<label class='form-field-label timeInBusiness'>How long have you been in business?</label>")
        shadowRoot.querySelector('#timeInBusiness option:first-child').textContent = "How long have you been in business?"
        const allButtonNext = shadowRoot.querySelectorAll('.btn-action');
        for (let i = 0; i < allButtonNext.length; i++) {
          allButtonNext[i].classList.remove('slide-1-active')
        }
      }
      if (shadowRoot.querySelector('#averageMonthlySales') && !shadowRoot.querySelector('.form-field-label.averageMonthlySales')) {
        const input = shadowRoot.querySelector('#averageMonthlySales');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#averageMonthlySales').insertAdjacentHTML("afterend", "<label class='form-field-label averageMonthlySales'>What’s your monthly revenue?</label>")
        shadowRoot.querySelector('#averageMonthlySales option:first-child').textContent = "What’s your monthly revenue?"
      }
      if (shadowRoot.querySelector('#creditScore') && !shadowRoot.querySelector('.form-field-label.creditScore')) {
        const input = shadowRoot.querySelector('#creditScore');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#creditScore').insertAdjacentHTML("afterend", "<label class='form-field-label creditScore'>What is your personal credit score?</label>")
        shadowRoot.querySelector('#creditScore option:first-child').textContent = "What is your personal credit score?"
      }
      if (shadowRoot.querySelector('#entityType') && !shadowRoot.querySelector('.form-field-label.entityType')) {
        const input = shadowRoot.querySelector('#entityType');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#entityType').insertAdjacentHTML("afterend", "<label class='form-field-label entityType'>What type of business do you own?</label>")
        shadowRoot.querySelector('#entityType option:first-child').textContent = "What type of business do you own?"
      }
      if (shadowRoot.querySelector('#industry') && !shadowRoot.querySelector('.form-field-label.industry')) {
        const input = shadowRoot.querySelector('#industry');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#industry').insertAdjacentHTML("afterend", "<label class='form-field-label industry'>What is your company's industry?</label>")
        shadowRoot.querySelector('#industry option:first-child').textContent = "What is your company's industry?"
      }
      if (shadowRoot.querySelector('#business_name') && !shadowRoot.querySelector('.form-field-label.business_name')) {
        const input = shadowRoot.querySelector('#business_name');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#business_name').insertAdjacentHTML("afterend", "<label class='form-field-label business_name'>What is your business’ name?</label>")
        shadowRoot.querySelector('#business_name').addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            latestButton = "enter"
          }
        });
        setTimeout(function () {
          if (shadowRoot.querySelector('#business_name').value == '' || latestButton == "next" || latestButton == "enter") {
            shadowRoot.querySelector('#business_name').focus()
          }
        }, 100)
      }
      if (shadowRoot.querySelector('#first') && !shadowRoot.querySelector('.form-field-label.first')) {
        const input = shadowRoot.querySelector('#first');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#first').insertAdjacentHTML("afterend", "<label class='form-field-label first'>First Name</label>")
        shadowRoot.querySelector('#first').addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            latestButton = "enter"
          }
        });
        setTimeout(function () {
          if (shadowRoot.querySelector('#first').value == '' || latestButton == "next" || latestButton == "enter") {
            shadowRoot.querySelector('#first').focus()
          }
        }, 100)
      }
      if (shadowRoot.querySelector('#last') && !shadowRoot.querySelector('.form-field-label.last')) {
        const input = shadowRoot.querySelector('#last');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#last').insertAdjacentHTML("afterend", "<label class='form-field-label last'>Last Name</label>")
        shadowRoot.querySelector('#last').addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            latestButton = "enter"
          }
        });
      }
      if (shadowRoot.querySelector('#email') && !shadowRoot.querySelector('.form-field-label.email')) {
        const input = shadowRoot.querySelector('#email');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#email').insertAdjacentHTML("afterend", "<label class='form-field-label email'>Email Address</label>")
        shadowRoot.querySelector('#email').addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            latestButton = "enter"
          }
        });
        setTimeout(function () {
          if (shadowRoot.querySelector('#email').value == '' || latestButton == "next" || latestButton == "enter") {
            shadowRoot.querySelector('#email').focus()
          }
        }, 100)
        const allButtonNext = shadowRoot.querySelectorAll('.btn-action');
        for (let i = 0; i < allButtonNext.length; i++) {
          allButtonNext[i].classList.remove('slide-11-active')
        }
      }
      if (shadowRoot.querySelector('#primary_phone') && !shadowRoot.querySelector('.form-field-label.primary_phone')) {
        const input = shadowRoot.querySelector('#primary_phone');   // select your input
        const wrapper = document.createElement('div');   // create wrapper
        wrapper.className = 'form-field-wrapper';               // add class
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        shadowRoot.querySelector('#primary_phone').insertAdjacentHTML("afterend", "<label class='form-field-label primary_phone'>Mobile Phone</label>")
        shadowRoot.querySelector('#primary_phone').addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            latestButton = "enter"
          }
        });
        setTimeout(function () {
          if (shadowRoot.querySelector('#primary_phone').value == '' || latestButton == "next" || latestButton == "enter") {
            shadowRoot.querySelector('#primary_phone').focus()
          }
        }, 100)
        const allButtonNext = shadowRoot.querySelectorAll('.btn-action');
        for (let i = 0; i < allButtonNext.length; i++) {
          allButtonNext[i].classList.add('slide-11-active')
        }
      }
      // change image email and phone
      if (shadowRoot.querySelector('#pwf-1 .form-field-wrapper:has(input:not([type="checkbox"])) ~ img') && !shadowRoot.querySelector('#pwf-1 .form-field-wrapper:has(input:not([type="checkbox"])) ~ img.changed')) {
        shadowRoot.querySelector('#pwf-1 .form-field-wrapper:has(input:not([type="checkbox"])) ~ img').setAttribute("src", "https://res.cloudinary.com/spiralyze/image/upload/v1765281189/lendio/3007/LockSimple.svg")
        shadowRoot.querySelector('#pwf-1 .form-field-wrapper:has(input:not([type="checkbox"])) ~ img').setAttribute("width", "24")
        shadowRoot.querySelector('#pwf-1 .form-field-wrapper:has(input:not([type="checkbox"])) ~ img').setAttribute("height", "24")
        shadowRoot.querySelector('#pwf-1 .form-field-wrapper:has(input:not([type="checkbox"])) ~ img').classList.add("changed")
      }

      //adding listener to button next
      if (shadowRoot.querySelector('#pwf-1 .btn-action:not(.btn-listener-added)')) {
        shadowRoot.querySelector('#pwf-1 .btn-action:not(.btn-listener-added)').addEventListener("click", function () {
          latestButton = "next";
        })
        shadowRoot.querySelector('#pwf-1 .btn-action:not(.btn-listener-added)').classList.add("btn-listener-added");
      }

    })
    observer.observe(shadowRoot.querySelector("#pwf-1"), { childList: true, subtree: true, attributes: true });
    shadowRoot.querySelector('#pwf-1').insertAdjacentHTML("beforeend", `<div class="fake-div"></div>`)
    shadowRoot.querySelector('.fake-div').remove()
  }
}, 100)