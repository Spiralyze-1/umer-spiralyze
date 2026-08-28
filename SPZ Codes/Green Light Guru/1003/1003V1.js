(function () {
  //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.

  // Set the value of squeezePage variable as per your requirement:
  // true: if you are using squeeze page (If page has form)
  // false: if you are not using squeeze page (If page does not have form)
  // 'both': if you want to set cookie as well as hidden field value (If page has form and you also want to set cookie).

  const squeezePage = 'both'; // true / false / 'both'
  const expName = '1006'; //experiment name should be 1001, 1002, 1003 etc.
  const variantName = `spz_#` + expName + `_true_control`; //variantName should be _variant, _true_control etc.
  const clientDomain = '.greenlight.guru'; //domain should be .spiralyze.com


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

const bodyInterval1003 = setInterval(function(){
  if(document.querySelector("body") && !document.querySelector('.spz_1003_v')){
    clearInterval(bodyInterval1003)
    document.querySelector('body').classList.add("spz_1003_v");
    const loadJS = (url, implementationCode, location)=>{
      var scriptTag = document.createElement('script');
      scriptTag.src = url;
    
      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;
    
      location.appendChild(scriptTag);
    };

    document.querySelector('.spz_1003_v .u4m-content-cards').insertAdjacentHTML("beforebegin",`
      <div class="section-1-1003">
        <div class="wrapper-1003">
          <div class="title">Key Features</div>
          <div class="carousel-section">
            <div class="text">
              <div class="child active" data-index="1">
                <div class="bar"><div class="line"></div></div>
                <div class="carousel-title">
                  <span>Design and development</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="content">
                  <p>Digitally manage your DDF with built-in traceability between design inputs, outputs, verifications, and product risk controls.</p>
                  <div class="button-wrapper">
                    <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Design and development" class="spz1003_design_development_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                  </div>
                  <div class="mobile-image">
                    <picture>
                    <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_13.webp">
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-1.jpg" alt="Design and development" width="689" height="491">
                  </picture> 
                  </div>
                </div>
              </div>
              <div class="child" data-index="2">
                <div class="bar"><div class="line"></div></div>
                <div class="carousel-title">
                  <span>Compliance and risk management</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="content">
                  <p>Track and manage operational risk across your QMS – from regulatory requirements to audit readiness and CAPA trends.</p>
                  <div class="button-wrapper">
                    <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Compliance and risk management" class="spz1003_compliance_risk_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                  </div>
                  <div class="mobile-image">
                    <picture>
                    <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_17.webp">
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-2.jpg"" alt="Compliance and risk management" width="689" height="491">
                  </picture> 
                  </div>
                </div>
              </div>
              <div class="child" data-index="3">
                <div class="bar"><div class="line"></div></div>
                <div class="carousel-title">
                  <span>Documents and training management</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="content">
                  <p>Control documents, changes, and training in one place – with automated routing, audit trails, and role-based access.</p>
                  <div class="button-wrapper">
                    <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Documents and training management" class="spz1003_document_training_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                  </div>
                    <div class="mobile-image">
                    <picture>
                      <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_12.webp">
                      <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-3.jpg" alt="Documents and training management" width="689" height="491">
                    </picture> 
                    </div>
                </div>
              </div>
              <div class="child" data-index="4">
                <div class="bar"><div class="line"></div></div>
                <div class="carousel-title">
                  <span>Post-market quality events</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="content">
                  <p>Log, track, and resolve quality events in a connected system that links CAPAs, training, and documentation.</p>
                  <div class="button-wrapper">
                    <a tabindex="-1"href="https://www.greenlight.guru/medical-device-software-demo" data-section="Post-market quality events" class="spz1003_quality_processes_events_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                  </div>
                    <div class="mobile-image">
                      <picture>
                      <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_16.webp">
                      <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-4.jpg" alt="Post-market quality events" width="689" height="491">
                    </picture> 
                  </div>
                </div>
              </div>
              <div class="child" data-index="5">
                <div class="bar"><div class="line"></div></div>
                <div class="carousel-title">
                  <span>Clinical data management</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="content">
                  <p>Capture compliant, audit-ready clinical data across every phase of your study - from first-in-human to post-market.</p>
                  <div class="button-wrapper">
                    <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Clinical data management" class="spz1003_clinical_data_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                  </div>
                    <div class="mobile-image">
                      <picture>
                      <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_15.webp">
                      <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-5.jpg" alt="Clinical data management" width="689" height="491">
                    </picture>
                  </div>
                </div>
              </div>
              <div class="child" data-index="6">
                <div class="bar"><div class="line"></div></div>
                <div class="carousel-title">
                  <span>AI built for medtech</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="content">
                  <p>Automatically research across your QMS, summarize docs, draft change orders, verify requirements, and more.</p>
                  <div class="button-wrapper">
                    <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="AI built for medtech" class="spz1003_clinical_data_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                  </div>
                    <div class="mobile-image">
                      <picture>
                      <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-mobile-6.jpg">
                      <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-tablet-6.jpg" alt="AI built for medtech" width="689" height="491">
                    </picture>
                  </div>
                </div>
              </div>
              <div class="child" data-index="7">
                <div class="bar"><div class="line"></div></div>
                <div class="carousel-title">
                  <span>Software development and traceability</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 15.5L12 9.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="content">
                  <p>Manage IEC 62304, trace requirements to code commits and test results so compliance builds alongside development, not after it.</p>
                  <div class="button-wrapper">
                    <a tabindex="-1" href="https://www.greenlight.guru/medical-device-software-demo" data-section="Software development and traceability" class="spz1003_clinical_data_mgmt_cta spz1003_v-section1-getdemo-cta">get a demo</a>
                  </div>
                    <div class="mobile-image">
                      <picture>
                      <source media="(max-width:599.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-mobile-7.png">
                      <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_19.png" alt="Software development and traceability" width="689" height="491">
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div class="image">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-1.jpg" class="reference" alt="Design and development" width="776" height="553">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-1.jpg" class="hero active" data-index="1" alt="Design and development" width="776" height="553">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-2.jpg" class="hero" data-index="2" alt="Compliance and risk management" width="776" height="553">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-3.jpg" class="hero" data-index="3" alt="Documents and training management" width="776" height="553">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-4.jpg" class="hero" data-index="4" alt="Post-market quality events" width="776" height="553">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-5.jpg" class="hero" data-index="5" alt="Clinical data management" width="776" height="553">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/new-image-6.jpg" class="hero" data-index="6" alt="AI built for medtech" width="776" height="553">
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/greenlightguru/1003/img-container_18.png" class="hero" data-index="7" alt="Software development and traceability" width="776" height="553">
            </div>
          </div>
        </div>
      </div>
    `)
    loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1759817061/greenlightguru/script/smooth-scroll.min.js', function(){}, document.body);
   
    const carouselTimer = 8000;
    let time = carouselTimer;
    let carouselInterval;
    let i=0;
    let mouseLeaveTimeout;
    let initialPlay = true;
    const isSectionInView =(section)=> {
      const rect = section.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && // Section's top is visible in the viewport
        rect.bottom > 0 && // Section's bottom is visible in the viewport
        rect.left < window.innerWidth && // Section's left side is visible in the viewport
        rect.right > 0 // Section's right side is visible in the viewport
      );
    }
    const isSectionTopAt50Percent = (section) => {
      const rect = section.getBoundingClientRect();
      const halfScreen = window.innerHeight / 2;
      return rect.top <= halfScreen && rect.bottom > 0;
    };
    const closedCarouselAnimation = (curActiveElement)=>{
      const curHeight= document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').offsetHeight;
      document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').classList.remove("active")
      document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
      const afterHeight = document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').offsetHeight;
      document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .hero[data-index="'+curActiveElement+'"]').classList.remove("active")
      document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').style.height=curHeight+"px"
      // adding tabindex to current button
      document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').querySelector('.button-wrapper a').setAttribute("tabindex","-1");
      setTimeout(function(){
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').style.height=afterHeight+"px"
      },1)
      setTimeout(function(){
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').removeAttribute("style")
      },501)
    }
    const playNextCarousel=()=>{
      const curActiveElement = parseInt(document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .text .active').getAttribute("data-index"));
      // to add animation when closed
      closedCarouselAnimation(curActiveElement)

      if(curActiveElement<7){
        nextActive = curActiveElement + 1;
      } else {
        nextActive = 1;
      }
      document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+nextActive+'"]').classList.add("active")
      document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .hero[data-index="'+nextActive+'"]').classList.add("active")
      playCarousel()

    }
    const adjustContentHeight =()=>{
      const curActiveElementIndex = document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .text .active').getAttribute("data-index");
      const curActiveElement =document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElementIndex+'"]');
      const fullHeight =curActiveElement.offsetHeight;
      curActiveElement.classList.remove("active")
      const prevHeight = curActiveElement.offsetHeight
      curActiveElement.classList.add("active")
      curActiveElement.style.height=prevHeight+"px";
      setTimeout(function(){
        curActiveElement.style.height=fullHeight+"px";
      },1)
      // removing tabindex from current button
      curActiveElement.querySelector('.button-wrapper a').removeAttribute("tabindex");

    }

    const setHeightOnResize=()=>{
      const curActiveElementIndex = document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .text .active').getAttribute("data-index");
      const curActiveElement =document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElementIndex+'"]');
      const prevHeight = curActiveElement.offsetHeight
      curActiveElement.removeAttribute("style")
      const fullHeight =curActiveElement.offsetHeight;
      curActiveElement.style.height=prevHeight+"px";
      setTimeout(function(){
        curActiveElement.style.height=fullHeight+"px";
      },1)
    }
    const playCarousel=()=>{
      const curActiveElement = document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .text .active').getAttribute("data-index");
      document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"] .bar .line').style.opacity=1;
      if(initialPlay==false)
      {
        adjustContentHeight();
      }
      initialPlay=false;
      carouselInterval = setInterval(function(){
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"] .bar .line').style.width=""+((i/time) * 100)+"%";
        // reach end
        if(i>time){
          clearInterval(carouselInterval)
          document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"] .bar .line').style.opacity=0;
          document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"] .bar .line').style.width="0px";
          i=0;
          playNextCarousel()
        }
        i+=200;
      },200)
    }

    //event listener 
    document.querySelector('.spz_1003_v .section-1-1003 .carousel-section').addEventListener('mouseenter', function() {
      if(!navigator.maxTouchPoints){
        clearInterval(carouselInterval);
        clearTimeout(mouseLeaveTimeout)
      }
    });

    document.querySelector('.spz_1003_v .section-1-1003 .carousel-section').addEventListener('mouseleave', function() {
      if(!navigator.maxTouchPoints && !document.querySelector('.spz_1003_v .section-1-1003 .clicked')){
        mouseLeaveTimeout = setTimeout(function(){
          if(document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked')){
            document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked .bar .line').style.opacity=0;
            document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked .bar .line').style.width="0px";
            document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked').classList.remove("clicked")
            i=0;
            playNextCarousel()
          } else {
            playCarousel();
          }
        } ,1000)
      }
    });

    document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .text').addEventListener('click', function(e) {
      if(e.target.closest(".carousel-title") && !e.target.closest(".clicked")){
        clearInterval(carouselInterval);
        //remove active
        const curActiveElement = document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .text .active').getAttribute("data-index");
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"] .bar .line').style.opacity=0;
        if(e.target.closest(".child").getAttribute("data-index")!=curActiveElement){
          document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"] .bar .line').style.width="0px";
        }
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child[data-index="'+curActiveElement+'"]').classList.remove("clicked");

        // to add animation when closed
        if(curActiveElement!=e.target.closest('.child').getAttribute("data-index")){
          closedCarouselAnimation(curActiveElement)
        }

        // add active
        e.target.closest(".child").classList.add("clicked","active")
        e.target.closest(".child").querySelector('.bar .line').style.opacity=1;
        e.target.closest(".child").querySelector('.bar .line').style.width="100%";
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .hero[data-index="'+ e.target.closest(".child").getAttribute("data-index")+'"]').classList.add("active")
        if(curActiveElement!=e.target.closest('.active').getAttribute("data-index")){
          adjustContentHeight();
        }

        // auto scroll on mobile
        if(window.matchMedia("(max-width: 1024.98px)").matches && document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked')){
          document.querySelector('.spz_1003_v .section-1-1003 .carousel-section').classList.add("mobile-clicked")
          setTimeout(function(){
            document.querySelector('.spz_1003_v .section-1-1003 .carousel-section.mobile-clicked').classList.remove("mobile-clicked")
          },1003)
          let  headerHeight = document.querySelector('.spz_1003_v header').offsetHeight;
          setTimeout(function(){
            let scroll = new SmoothScroll();
            scroll.animateScroll(document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .text .active').getBoundingClientRect().y + scrollY - headerHeight, null, {
              easing: 'easeOutQuad',
              speed: 500,
              speedAsDuration: true,
            });
          },502)
        }
      }
    });
    document.querySelector("body").addEventListener("click",function(e){
      if(!e.target.closest('.spz_1003_v .section-1-1003 .carousel-section') && navigator.maxTouchPoints && document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked') && !document.querySelector('.spz_1003_v .section-1-1003 .clicked')){
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked .bar .line').style.opacity=0;
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked .bar .line').style.width="0px";
        document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked').classList.remove("clicked")
        i=0;
        playNextCarousel()
      }
    })
    
    // 1. Debounce helper
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(null, args);
        }, delay);
      };
    };

    // 2. State management
    let lastWidth = window.innerWidth;
    let isExecuting = false;
    const targetSelector = 'body'; // You can change this to a specific container for better performance

    // 3. Resize logic
    const handleResize = (entries) => {
      if (isExecuting) return;
      
      const newWidth = entries[0].contentRect.width;

      // Only trigger if the width has changed significantly (ignoring sub-pixel noise)
      if (Math.round(newWidth) !== Math.round(lastWidth)) {
        isExecuting = true;
        lastWidth = newWidth;
        
        // Execute your function
        setHeightOnResize();
        
        // Unlock after the transition/delay period
        setTimeout(() => { isExecuting = false; }, 100);
      }
    };

    // 4. Wrap and observe
    const debouncedResize = debounce(handleResize, 100);
    const observer = new ResizeObserver(debouncedResize);
    const targetElement = document.querySelector(targetSelector);

    if (targetElement) {
      observer.observe(targetElement);
    }

    window.addEventListener('scroll',function(){
      if(!document.querySelector('.mobile-clicked') && !document.querySelector('.spz_1003_v .section-1-1003 .clicked')){
        if (isSectionInView(document.querySelector('.spz_1003_v .section-1-1003 .carousel-section')) && isSectionTopAt50Percent(document.querySelector('.spz_1003_v .section-1-1003'))) {
          if(!document.querySelector('.spz_1003_v .section-1-1003 .carousel-section.in-view')){
            document.querySelector('.spz_1003_v .section-1-1003 .carousel-section').classList.add("in-view")
            if(document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked')){
              document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked .bar .line').style.opacity=0;
              document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked .bar .line').style.width="0px";
              document.querySelector('.spz_1003_v .section-1-1003 .carousel-section .child.clicked').classList.remove("clicked")
              i=0;
              playNextCarousel()
            } else {
              playCarousel();
            }
          }
      
        } if(!isSectionInView(document.querySelector('.spz_1003_v .section-1-1003 .carousel-section'))) {
          clearInterval(carouselInterval);
          clearTimeout(mouseLeaveTimeout)
          document.querySelector('.spz_1003_v .section-1-1003 .carousel-section').classList.remove("in-view")
        }
      }
    });
    window.dispatchEvent(new Event('scroll'));
    let calculateHeightIndex=0;
    const calculateHeightInterval = setInterval(function(){
      setHeightOnResize();
      calculateHeightIndex++;
      if(calculateHeightIndex>40){
        clearInterval(calculateHeightInterval);
      }
    },100)
  }
  setTimeout(function(){
    clearInterval(bodyInterval1003)
  },7000)
},20)