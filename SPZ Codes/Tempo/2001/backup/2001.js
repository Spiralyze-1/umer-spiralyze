if(window.location.pathname=="/" || window.location.pathname=="/demo"){
  const bodyInterval2001 = setInterval(function(){
    if(document.querySelector("body")){
      clearInterval(bodyInterval2001)
      
    
      if(!document.querySelector('body.observed2002')){
        const observer = new MutationObserver((mutationsList) => {
          // basic modification
          if( (!document.querySelector('.spz_2001_v')  && window.location.pathname=="/") )
          {
            document.querySelector('body').classList.add("spz_2001_v")
           
          }
          // If you face any issues, please switch to the named-function version of this code and use that instead.
          (function() {
            //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
            
            // Set the value of the squeezePage variable as needed:
            // true  – if you are using a squeeze page (i.e., the page contains a form)
            // false – if you are not using a squeeze page (i.e., the page does not contain a form)
            // 'both' – if you want to set both the cookie and the hidden field value (i.e., the page has a form and you also want to set a cookie)
            const squeezePage = false; // true / false / 'both'
            const expName = '2001'; //experiment name should be 1001, 1002, 1003 etc.
            const variantName = `spz_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
            const clientDomain = '.tempo.io'; //domain should be .spiralyze.com
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
          // page modification
          if(document.querySelector('.spz_2001_v') && document.querySelector('.spz_2001_v main > section:first-child > div:nth-child(1)') && !document.querySelector('.spz_2001_v .section-1-2001')){
            const loadJS = (url, implementationCode, location)=>{
              var scriptTag = document.createElement('script');
              scriptTag.src = url;
            
              scriptTag.onload = implementationCode;
              scriptTag.onreadystatechange = implementationCode;
            
              location.appendChild(scriptTag);
            };
            const gb_load_css=(path)=> {
              let css = document.createElement('link');
              css.rel = 'stylesheet';
              css.media = 'all';
              css.href = path;
            
              document.getElementsByTagName('head')[0].appendChild(css);
            }
            Array.prototype.remove = function() {
              var what, a = arguments, L = a.length, ax;
              while (L && this.length) {
                  what = a[--L];
                  while ((ax = this.indexOf(what)) !== -1) {
                      this.splice(ax, 1);
                  }
              }
              return this;
            };
            const arraySelectedIndex=[];
            gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");
            document.querySelector('.spz_2001_v main > section:first-child > div:nth-child(1)').insertAdjacentHTML('afterend',`
              <div class="section-1-2001">
                <div class="wrapper">
                  <div class="g2-review">
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/g2.webp" alt="G2 Logo" width="138" height="32">
                    <div class="text">
                      <strong>4.4</strong>
                      <span>(107 reviews)</span>
                    </div>
                  </div>
                  <div class="title">
                    Optimize project and portfolio management in Jira
                  </div>
                  <div class="multiple-section">
                    <div class="title">How can we help?</div>
                    <div class="cards">
                      <button class="spz2001_hero_tiles" data-index="1">
                        <div class="image-placeholder"></div>
                        <div class="text">Plan and<br>Allocate Work</div>
                      </button>
                      <button class="spz2001_hero_tiles" data-index="2">
                        <div class="image-placeholder"></div>
                        <div class="text">Track Time<br>and Effort</div>
                      </button>
                      <button class="spz2001_hero_tiles" data-index="3">
                        <div class="image-placeholder"></div>
                        <div class="text">Adapt in Real<br>Time</div>
                      </button>
                      <button class="spz2001_hero_tiles" data-index="4">
                        <div class="image-placeholder"></div>
                        <div class="text">Optimize<br>Cost</div>
                      </button>
                      <button class="spz2001_hero_tiles" data-index="5">
                        <div class="image-placeholder"></div>
                        <div class="text">Analyze<br>Results</div>
                      </button>
                    </div>
                    <div class="email-input-wrapper">
                      <input type="email" placeholder=" ">
                      <label for="email">Email</label>
                      <button class="spz2001_hero_cta">
                        <span>Get a Demo</span>
                        <div class="arrow"></div>
                      </button>
                    </div>
                    <div class="logo-slider">
                      <div class="text">Trusted by 30,000+ global companies</div>
                      <div class="slider-wrapper">
                        <section class="splide splide2001-section1">
                          <div class="splide__track">
                            <ul class="splide__list">
                              <li class="splide__slide">
                                <div class="img-wrapper">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_1.webp" alt="Airbnb Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_2.webp" alt="Airbus Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_3.webp" alt="Netflix Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_4.webp" alt="Cisco Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_5.webp" alt="Slack Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_6.webp" alt="Oracle Logo" width="128.96" height="54">
                                </div>
                              </li>
                              <li class="splide__slide">
                                <div class="img-wrapper">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_1.webp" alt="Airbnb Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_2.webp" alt="Airbus Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_3.webp" alt="Netflix Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_4.webp" alt="Cisco Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_5.webp" alt="Slack Logo" width="128.96" height="54">
                                  <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/logo_6.webp" alt="Oracle Logo" width="128.96" height="54">
                                </div>
                              </li>
                            </ul>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div class="hero-image-wrapper">
                      <picture>
                        <source media="(max-width:767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/tempo_360.webp">
                        <source media="(max-width:1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/tempo_768.webp">
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2001/tempo_1440.webp" alt="Tempo UI" title="Tempo UI" width="940" height="500">
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            `)
            const stored = sessionStorage.getItem("spz2001Cards");
              if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed.length) {
                  for (let i = 0; i < 5; i++) {
                    if (parseInt(parsed[i])) {
                      arraySelectedIndex.push("" + parseInt(parsed[i]));
                      document
                        .querySelector('.spz_2001_v .section-1-2001 .multiple-section .cards button[data-index="' + parseInt(parsed[i]) + '"]')
                        ?.classList.add('active');
                    }
                  }
                }
              }
          
            document.querySelector('.spz_2001_v .section-1-2001 .multiple-section .cards').addEventListener("click",function(e){
              if(e.target.closest(".spz_2001_v .section-1-2001 .multiple-section .cards button")){
                if(!e.target.closest(".spz_2001_v .section-1-2001 .multiple-section .cards button").classList.contains('active')){
                  arraySelectedIndex.push(""+e.target.closest(".spz_2001_v .section-1-2001 .multiple-section .cards button").getAttribute("data-index"))
                } else{
                  arraySelectedIndex.remove(""+e.target.closest(".spz_2001_v .section-1-2001 .multiple-section .cards button").getAttribute("data-index"))
                 }                
                sessionStorage.spz2001Cards = JSON.stringify(arraySelectedIndex);
                e.target.closest(".spz_2001_v .section-1-2001 .multiple-section .cards button").classList.toggle('active');
              }
            })
            document.querySelector('.spz_2001_v .section-1-2001 .email-input-wrapper button').addEventListener("click",function(e){
              sessionStorage.setItem("userEmail", document.querySelector('.spz_2001_v .section-1-2001 .email-input-wrapper input').value); 
              window.location.href = "https://www.tempo.io/demo";
            })
            document.querySelector('.spz_2001_v .section-1-2001 .email-input-wrapper input').addEventListener("keydown",function(event){
              if(event.key === "Enter"){
                sessionStorage.setItem("userEmail", document.querySelector('.spz_2001_v .section-1-2001 .email-input-wrapper input').value); 
                window.location.href = "https://www.tempo.io/demo";
              }
            })
            // splide
            loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function(){
              var splide2001_1 = new Splide( '.spz_2001_v .splide2001-section1', {
                type   : 'loop',
                autoWidth: true,
                arrows: false,
                pagination: false,
                focus: 'center',
                drag: false,
                speed: 60000,
                easing: 'linear',
                autoplay: true,
                interval: 0,
                pauseOnHover: false,
                pauseOnFocus: false,
              });
              setTimeout(function(){
                splide2001_1.mount();
                window.dispatchEvent(new Event('resize'));
              },200)
            }, document.body);
          }
          // if in demo page
          if(window.location.pathname=="/demo" && sessionStorage.getItem("userEmail") && document.querySelector('[name="company_email"]') && !document.querySelector('[name="company_email"].filled') ){
            document.querySelector('[name="company_email"]').value = sessionStorage.getItem("userEmail");
            document.querySelector('[name="company_email"]').classList.add("filled");
          }
          // check another page and remove unecessary
          if(window.location.pathname!="/" && document.querySelector('body.spz_2001_v')){
            if(document.querySelector('.spz_2001_v .section-1-2001')){
              document.querySelector('.spz_2001_v .section-1-2001').remove()
            }
            document.querySelector('body').classList.remove("spz_2001_v")
          }
        })
        observer.observe(document.querySelector("body"), { attributes: false, childList: true, subtree: true   });
        document.querySelector('body').classList.add("observed2002")
        let i=0;
        const bodyTriggerInterval=setInterval(function(){
          i++;
          document.querySelector('body').insertAdjacentHTML("beforeend",`<div class="fake-div"></div>`)
          document.querySelector('.fake-div').remove();
          if(i==5){
            clearInterval(bodyTriggerInterval)
          }
    
        },1000)
        document.querySelector('body').insertAdjacentHTML("beforeend",`<div class="fake-div"></div>`)
        document.querySelector('.fake-div').remove();
      } 
    }
  },20)
  }