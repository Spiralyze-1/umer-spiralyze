if (window.location.pathname == "/") {
  const bodyInterval2002 = setInterval(function () {
    if (document.querySelector("body")) {
      clearInterval(bodyInterval2002)
      function findByText(type, text) {
        for (let i = 0; i < document.querySelectorAll(type).length; i++) {
          if (document.querySelectorAll(type)[i].textContent == text) {
            return document.querySelectorAll(type)[i];
          }
        }
        return;
      }
      let carouselInterval;
      let mouseLeaveTimeout;
      let i = 0;
      if (!document.querySelector('body.observed2002')) {
        const observer = new MutationObserver((mutationsList) => {
          // basic modification
          if ((!document.querySelector('.spz_2002_v') && window.location.pathname == "/")
          ) {
            document.querySelector('body').classList.add("spz_2002_v")

          }
          // page modification
          if (document.querySelector('.spz_2002_v') && document.querySelector('.spz_2002_v main > div.light') && !document.querySelector('.spz_2002_v .section-1-2002')) {
            const loadJS = (url, implementationCode, location) => {
              var scriptTag = document.createElement('script');
              scriptTag.src = url;

              scriptTag.onload = implementationCode;
              scriptTag.onreadystatechange = implementationCode;

              location.appendChild(scriptTag);
            };
            document.querySelector('.spz_2002_v main > div.light').insertAdjacentHTML("beforebegin", `
            <div class="section-1-2002">
              <div class="wrapper-2002">
                <div class="title">Solutions</div>
                <div class="carousel-section">
                  <div class="text">
                    <div class="child active" data-index="1">
                      <div class="bar"><div class="line"></div></div>
                      <div class="carousel-title">
                        <span>Project management</span>
                        <div class="svg-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                            <g clip-path="url(#clip0_24038_1184)">
                              <path d="M6.58023 9.54801L5.52023 8.48701L11.2972 2.70801C11.3898 2.61486 11.4999 2.54093 11.6211 2.49048C11.7424 2.44003 11.8724 2.41406 12.0037 2.41406C12.1351 2.41406 12.2651 2.44003 12.3863 2.49048C12.5076 2.54093 12.6177 2.61486 12.7102 2.70801L18.4902 8.48701L17.4302 9.54701L12.0052 4.12301L6.58023 9.54801Z" fill="currentColor"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_24038_1184">
                                <rect width="12" height="24" fill="white" transform="translate(0 12) rotate(-90)"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <p>Track progress across Jira projects, teams, and epics. Get a single dashboard for comparing initiatives, portfolios, and more. </p>
                        <p>Identify bottlenecks and adjust timelines in real time. Easily align projects to strategy.  </p>
                        <div class="button-wrapper">
                          <a href="https://www.tempo.io/demo" data-section="Project management" class="spz2002_v">
                            <span>Get a Demo</span>
                            <div class="arrow"></div>
                          </a>
                        </div>
                        <div class="mobile-image">
                          <picture>
                          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/project_management_mobile.webp">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/project_management_tablet.webp" title="Project management" width="688" height="572" loading="lazy">
                        </picture> 
                        </div>
                      </div>
                    </div>
                    <div class="child" data-index="2">
                      <div class="bar"><div class="line"></div></div>
                      <div class="carousel-title">
                        <span>Capacity planning</span>
                        <div class="svg-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                            <g clip-path="url(#clip0_24038_1184)">
                              <path d="M6.58023 9.54801L5.52023 8.48701L11.2972 2.70801C11.3898 2.61486 11.4999 2.54093 11.6211 2.49048C11.7424 2.44003 11.8724 2.41406 12.0037 2.41406C12.1351 2.41406 12.2651 2.44003 12.3863 2.49048C12.5076 2.54093 12.6177 2.61486 12.7102 2.70801L18.4902 8.48701L17.4302 9.54701L12.0052 4.12301L6.58023 9.54801Z" fill="currentColor"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_24038_1184">
                                <rect width="12" height="24" fill="white" transform="translate(0 12) rotate(-90)"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <p>Plan schedules by dragging and dropping tickets inside of Jira. Generate recurring schedules. Auto-assign resources based on resource availability and team skills.</p>
                        <p>2-way sync with Jira, Timesheets, Structure, and more. </p>
                        <div class="button-wrapper">
                          <a href="https://www.tempo.io/demo" data-section="Capacity planning" class="spz2002_v">
                            <span>Get a Demo</span>
                            <div class="arrow"></div>
                          </a>
                        </div>
                        <div class="mobile-image">
                          <picture>
                          <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/capacity_planning_mobile.webp">
                          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/capacity_planning_tablet.webp" alt="Capacity planning" title="Capacity planning" width="688" height="572" loading="lazy">
                        </picture> 
                        </div>
                      </div>
                    </div>
                    <div class="child" data-index="3">
                      <div class="bar"><div class="line"></div></div>
                      <div class="carousel-title">
                        <span>Time management</span>
                        <div class="svg-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                            <g clip-path="url(#clip0_24038_1184)">
                              <path d="M6.58023 9.54801L5.52023 8.48701L11.2972 2.70801C11.3898 2.61486 11.4999 2.54093 11.6211 2.49048C11.7424 2.44003 11.8724 2.41406 12.0037 2.41406C12.1351 2.41406 12.2651 2.44003 12.3863 2.49048C12.5076 2.54093 12.6177 2.61486 12.7102 2.70801L18.4902 8.48701L17.4302 9.54701L12.0052 4.12301L6.58023 9.54801Z" fill="currentColor"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_24038_1184">
                                <rect width="12" height="24" fill="white" transform="translate(0 12) rotate(-90)"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <p>Let team members log time for specific Jira tasks and issues. Billable and non-billable hours. Track time by day, issue, etc. Monitor productivity and resource utilization.</p>
                        <p>Sync with Google Calendar, Office 365, and more. </p>
                        <div class="button-wrapper">
                          <a href="https://www.tempo.io/demo" data-section="Time management" class="spz2002_v">
                            <span>Get a Demo</span>
                            <div class="arrow"></div>
                          </a>
                        </div>
                          <div class="mobile-image">
                          <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/time_management_mobile.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/time_management_tablet.webp" alt="Time management" title="Time management" width="688" height="572" loading="lazy">
                          </picture> 
                          </div>
                      </div>
                    </div>
                    <div class="child" data-index="4">
                      <div class="bar"><div class="line"></div></div>
                      <div class="carousel-title">
                        <span>Roadmapping</span>
                        <div class="svg-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                            <g clip-path="url(#clip0_24038_1184)">
                              <path d="M6.58023 9.54801L5.52023 8.48701L11.2972 2.70801C11.3898 2.61486 11.4999 2.54093 11.6211 2.49048C11.7424 2.44003 11.8724 2.41406 12.0037 2.41406C12.1351 2.41406 12.2651 2.44003 12.3863 2.49048C12.5076 2.54093 12.6177 2.61486 12.7102 2.70801L18.4902 8.48701L17.4302 9.54701L12.0052 4.12301L6.58023 9.54801Z" fill="currentColor"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_24038_1184">
                                <rect width="12" height="24" fill="white" transform="translate(0 12) rotate(-90)"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <p>Create visual plans and roadmaps in minutes with pre-built templates. Drag and drop items. Add external links. Easily separate work by team, department, status, etc. </p>
                        <p>Roll multiple roadmaps into one shareable view. Streamline idea management and optimize strategy. </p>
                        <div class="button-wrapper">
                          <a href="https://www.tempo.io/demo" data-section="Roadmapping" class="spz2002_v">
                            <span>Get a Demo</span>
                            <div class="arrow"></div>
                          </a>
                        </div>
                          <div class="mobile-image">
                            <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/roadmapping_mobile.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/roadmapping_tablet.webp" alt="Roadmapping" title="Roadmapping" width="688" height="572" loading="lazy">
                          </picture> 
                        </div>
                      </div>
                    </div>
                    <div class="child" data-index="5">
                      <div class="bar"><div class="line"></div></div>
                      <div class="carousel-title">
                        <span>Financial management</span>
                        <div class="svg-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                            <g clip-path="url(#clip0_24038_1184)">
                              <path d="M6.58023 9.54801L5.52023 8.48701L11.2972 2.70801C11.3898 2.61486 11.4999 2.54093 11.6211 2.49048C11.7424 2.44003 11.8724 2.41406 12.0037 2.41406C12.1351 2.41406 12.2651 2.44003 12.3863 2.49048C12.5076 2.54093 12.6177 2.61486 12.7102 2.70801L18.4902 8.48701L17.4302 9.54701L12.0052 4.12301L6.58023 9.54801Z" fill="currentColor"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_24038_1184">
                                <rect width="12" height="24" fill="white" transform="translate(0 12) rotate(-90)"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <p>Track labor costs, time spent, costs vs. budget, and more. Generate budgets and forecast expenses. Compare projected and actual revenue. Automatically calculate CapEx and OpEx. </p>
                        <p>Reduce accounting tasks, prevent overruns, and increase profits. </p>
                        <div class="button-wrapper">
                          <a href="https://www.tempo.io/demo" data-section="Financial management" class="spz2002_v">
                            <span>Get a Demo</span>
                            <div class="arrow"></div>
                          </a>
                        </div>
                          <div class="mobile-image">
                            <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/financial_management_mobile.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/financial_management_tablet.webp" alt="Financial management" title="Financial management" width="688" height="572" loading="lazy">
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div class="child" data-index="6">
                      <div class="bar"><div class="line"></div></div>
                      <div class="carousel-title">
                        <span>Reporting & forecasting</span>
                        <div class="svg-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                            <g clip-path="url(#clip0_24038_1184)">
                              <path d="M6.58023 9.54801L5.52023 8.48701L11.2972 2.70801C11.3898 2.61486 11.4999 2.54093 11.6211 2.49048C11.7424 2.44003 11.8724 2.41406 12.0037 2.41406C12.1351 2.41406 12.2651 2.44003 12.3863 2.49048C12.5076 2.54093 12.6177 2.61486 12.7102 2.70801L18.4902 8.48701L17.4302 9.54701L12.0052 4.12301L6.58023 9.54801Z" fill="currentColor"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_24038_1184">
                                <rect width="12" height="24" fill="white" transform="translate(0 12) rotate(-90)"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <p>Generate detailed charts and dashboards. No code. Track productivity, sprint progress, velocity, time in status, blockers, and other project data. Share in a couple of clicks. Sync with JWM, JSM, and more.</p>
                        <div class="button-wrapper">
                          <a href="https://www.tempo.io/demo" data-section="Reporting & forecasting" class="spz2002_v">
                            <span>Get a Demo</span>
                            <div class="arrow"></div>
                          </a>
                        </div>
                          <div class="mobile-image">
                            <picture>
                            <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/financial_management_mobile_1.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/financial_management_tablet_1.webp" alt="Reporting & forecasting" title="Reporting & forecasting" width="688" height="572" loading="lazy">
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="image">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/project_management_desktop.webp" class="reference" alt="Project management" title="Project management" width="780" height="649">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/project_management_desktop.webp" class="hero active" data-index="1" alt="Project management" title="Project management" width="780" height="649" loading="lazy">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/capacity_planning_desktop.webp" class="hero" data-index="2" alt="Capacity planning" title="Capacity planning" width="780" height="649" loading="lazy">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/time_management_desktop.webp" class="hero" data-index="3" alt="Time management" title="Time management" width="780" height="649" loading="lazy">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/roadmapping_desktop.webp" class="hero" data-index="4" alt="Roadmapping" title="Roadmapping" width="780" height="649" loading="lazy">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/financial_management_desktop.webp" class="hero" data-index="5" alt="Financial management" title="Financial management" width="780" height="649" loading="lazy">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/2002/financial_management_desktop_1.webp" class="hero" data-index="6" alt="Reporting & forecasting" title="Reporting & forecasting" width="780" height="649" loading="lazy">
                  </div>
                </div>
              </div>
            </div>
            `)
            //loadJS('//res.cloudinary.com/spiralyze/raw/upload/v1773298930/tempo/script/smooth-scroll.min.js', function(){}, document.body);
            const carouselTimer = 8000;
            let time = carouselTimer;
            let initialPlay = true;
            let barStartTimeRef = null;
            let barElapsedWhenPaused = null;
            const isSectionInView = (section) => {
              if (section) {
                const rect = section.getBoundingClientRect();
                return (
                  rect.top < window.innerHeight && // Section's top is visible in the viewport
                  rect.bottom > 0 && // Section's bottom is visible in the viewport
                  rect.left < window.innerWidth && // Section's left side is visible in the viewport
                  rect.right > 0 // Section's right side is visible in the viewport
                );
              }
            }
            const isSectionTopAt50Percent = (section) => {
              const rect = section.getBoundingClientRect();
              const viewportHeight = window.innerHeight;

              const bandStart = viewportHeight * 0; // 40%
              const bandEnd = viewportHeight * 0.5;   // 50%

              return rect.top >= bandStart && rect.top <= bandEnd;
            };
            const closedCarouselAnimation = (curActiveElement) => {
              const curHeight = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"]').offsetHeight;
              document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"]').classList.remove("active")
              document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"]').removeAttribute("style")
              const afterHeight = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"]').offsetHeight;
              document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .hero[data-index="' + curActiveElement + '"]').classList.remove("active")
              document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"]').style.height = curHeight + "px"
              setTimeout(function () {
                document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"]').style.height = afterHeight + "px"
              }, 1)
              setTimeout(function () {
                document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"]').removeAttribute("style")
              }, 501)
            }
            const playNextCarousel = () => {
              const curActiveElement = parseInt(document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .text .active').getAttribute("data-index"));
              // to add animation when closed
              closedCarouselAnimation(curActiveElement)

              if (curActiveElement < 6) {
                nextActive = curActiveElement + 1;
              } else {
                nextActive = 1;
              }
              document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + nextActive + '"]').classList.add("active")
              document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .hero[data-index="' + nextActive + '"]').classList.add("active")
              playCarousel()

            }
            const adjustContentHeight = () => {
              const curActiveElementIndex = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .text .active').getAttribute("data-index");
              const curActiveElement = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElementIndex + '"]');
              const fullHeight = curActiveElement.offsetHeight;
              curActiveElement.classList.remove("active")
              const prevHeight = curActiveElement.offsetHeight
              curActiveElement.classList.add("active")
              curActiveElement.style.height = prevHeight + "px";
              setTimeout(function () {
                curActiveElement.style.height = fullHeight + "px";
              }, 1)
            }

            const setHeightOnResize = () => {
              const curActiveElementIndex = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .text .active').getAttribute("data-index");
              const curActiveElement = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElementIndex + '"]');
              curActiveElement.removeAttribute("style")
              const fullHeight = curActiveElement.offsetHeight;
              curActiveElement.style.height = fullHeight + "px";
            }
            const playCarousel = () => {
              const curActiveElement = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .text .active').getAttribute("data-index");
              const lineEl = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line');
              lineEl.style.opacity = 1;
              if (initialPlay == false) {
                adjustContentHeight();
              }
              initialPlay = false;
              clearInterval(carouselInterval);
              var barStartTime = barElapsedWhenPaused != null
                ? Date.now() - barElapsedWhenPaused
                : Date.now();
              barElapsedWhenPaused = null;
              barStartTimeRef = barStartTime;
              carouselInterval = setInterval(function () {
                var elapsed = Date.now() - barStartTime;
                var widthPct = Math.min(100, (elapsed / time) * 100);
                lineEl.style.width = widthPct + "%";
                // only advance after full duration; wait for .line transition (0.2s) to finish so bar visibly reaches 100%
                if (elapsed >= time) {
                  lineEl.style.width = "100%";
                  clearInterval(carouselInterval);
                  barStartTimeRef = null;
                  setTimeout(function () {
                    lineEl.style.opacity = 0;
                    lineEl.style.width = "0px";
                    playNextCarousel();
                  }, 210);
                }
              }, 50)
            }

            //event listener 
            document.querySelector('.spz_2002_v .section-1-2002 .carousel-section').addEventListener('mouseenter', function () {
              if (!navigator.maxTouchPoints) {
                clearInterval(carouselInterval);
                clearTimeout(mouseLeaveTimeout);
                if (barStartTimeRef != null) {
                  barElapsedWhenPaused = Date.now() - barStartTimeRef;
                }
              }
            });
            //event listener 
            const myDiv = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section');

            // Function to check if mouse is inside the div
            function isMouseInDiv(event) {
              const rect = myDiv.getBoundingClientRect();
              const mouseX = event.clientX;
              const mouseY = event.clientY;

              // Check if mouse position is inside the div's bounding box
              if (mouseX >= rect.left && mouseX <= rect.right &&
                mouseY >= rect.top && mouseY <= rect.bottom && !navigator.maxTouchPoints) {
                clearInterval(carouselInterval);
                clearTimeout(mouseLeaveTimeout)
              }
            }

            // Listen for mousemove event to track mouse position
            myDiv.addEventListener('mousemove', isMouseInDiv);

            document.querySelector('.spz_2002_v .section-1-2002 .carousel-section').addEventListener('mouseleave', function () {
              if (!navigator.maxTouchPoints && !document.querySelector('.spz_2002_v .section-1-2002 .clicked')) {
                mouseLeaveTimeout = setTimeout(function () {
                  if (document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked')) {
                    document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked .bar .line').style.opacity = 0;
                    document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked .bar .line').style.width = "0px";
                    document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked').classList.remove("clicked")
                    i = 0;
                    playNextCarousel()
                  } else {
                    playCarousel();
                  }
                }, 0)
              }
            });

            document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .text').addEventListener('click', function (e) {
              if (e.target.closest(".carousel-title") && !e.target.closest(".clicked")) {
                clearInterval(carouselInterval);
                //remove active
                const curActiveElement = document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .text .active').getAttribute("data-index");
                document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line').style.opacity = 0;
                if (e.target.closest(".child").getAttribute("data-index") != curActiveElement) {
                  document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"] .bar .line').style.width = "0px";
                }
                document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child[data-index="' + curActiveElement + '"]').classList.remove("clicked");

                // to add animation when closed
                if (curActiveElement != e.target.closest('.child').getAttribute("data-index")) {
                  closedCarouselAnimation(curActiveElement)
                }

                // add active
                e.target.closest(".child").classList.add("clicked", "active")
                e.target.closest(".child").querySelector('.bar .line').style.opacity = 1;
                e.target.closest(".child").querySelector('.bar .line').style.width = "100%";
                document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .hero[data-index="' + e.target.closest(".child").getAttribute("data-index") + '"]').classList.add("active")
                if (curActiveElement != e.target.closest('.active').getAttribute("data-index")) {
                  adjustContentHeight();
                }

                // auto scroll on mobile
                if (window.matchMedia("(max-width: 1024.98px)").matches && document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked')) {
                  document.querySelector('.spz_2002_v .section-1-2002 .carousel-section').classList.add("mobile-clicked")
                  setTimeout(function () {
                    document.querySelector('.spz_2002_v .section-1-2002 .carousel-section.mobile-clicked').classList.remove("mobile-clicked")
                  }, 1003)
                  let headerHeight = document.querySelector('.spz_2002_v header').offsetHeight;
                  setTimeout(function () {
                    /*
                    let scroll = new SmoothScroll();
                    scroll.animateScroll(document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .text .active').getBoundingClientRect().y + scrollY - headerHeight, null, {
                      easing: 'easeOutQuad',
                      speed: 500,
                      speedAsDuration: true,
                    });
                    */
                    window.scrollTo({
                      top: document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .text .active').getBoundingClientRect().y + scrollY - headerHeight,
                      behavior: 'smooth'
                    });
                  }, 502)
                }
              }
            });
            document.querySelector("body").addEventListener("click", function (e) {
              if (!e.target.closest('.spz_2002_v .section-1-2002 .carousel-section') && navigator.maxTouchPoints && document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked') && !document.querySelector('.spz_2002_v .section-1-2002 .clicked')) {
                document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked .bar .line').style.opacity = 0;
                document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked .bar .line').style.width = "0px";
                document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked').classList.remove("clicked")
                i = 0;
                playNextCarousel()
              }
            })

            window.addEventListener("resize", function () {
              if (document.querySelector('.spz_2002_v .section-1-2002')) {
                setHeightOnResize()
              }

            })
            window.addEventListener('scroll', function () {
              if (document.querySelector('.spz_2002_v .section-1-2002')) {
                if (!document.querySelector('.mobile-clicked') && !document.querySelector('.spz_2002_v .section-1-2002 .clicked')) {
                  if (isSectionInView(document.querySelector('.spz_2002_v .section-1-2002 .carousel-section')) && isSectionTopAt50Percent(document.querySelector('.spz_2002_v .section-1-2002 .carousel-section'))) {
                    if (!document.querySelector('.spz_2002_v .section-1-2002 .carousel-section.in-view')) {
                      document.querySelector('.spz_2002_v .section-1-2002 .carousel-section').classList.add("in-view")
                      if (document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked')) {
                        document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked .bar .line').style.opacity = 0;
                        document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked .bar .line').style.width = "0px";
                        document.querySelector('.spz_2002_v .section-1-2002 .carousel-section .child.clicked').classList.remove("clicked")
                        i = 0;
                        playNextCarousel()
                      } else {
                        playCarousel();
                      }
                    }

                  } if (!isSectionInView(document.querySelector('.spz_2002_v .section-1-2002 .carousel-section'))) {
                    clearInterval(carouselInterval);
                    clearTimeout(mouseLeaveTimeout)
                    document.querySelector('.spz_2002_v .section-1-2002 .carousel-section').classList.remove("in-view")
                  }
                }
              }
            });
            window.dispatchEvent(new Event('scroll'));
            let calculateHeightIndex = 0;
            const calculateHeightInterval = setInterval(function () {
              setHeightOnResize();
              calculateHeightIndex++;
              if (calculateHeightIndex > 40) {
                clearInterval(calculateHeightInterval);
              }
            }, 100)
          }

          // check another page and remove unecessary
          if (window.location.pathname != "/" && document.querySelector('body.spz_2002_v')) {
            if (document.querySelector('.spz_2002_v .section-1-2002')) {
              document.querySelector('.spz_2002_v .section-1-2002').remove()
            }
            clearInterval(carouselInterval);
            clearTimeout(mouseLeaveTimeout)
            i = 0;
            document.querySelector('body').classList.remove("spz_2002_v")
          }
          console.log("running")
        })
        observer.observe(document.querySelector("body"), { childList: true, subtree: true });
        document.querySelector('body').classList.add("observed2002")
        let i = 0;
        const bodyTriggerInterval = setInterval(function () {
          i++;
          document.querySelector('body').insertAdjacentHTML("beforeend", `<div class="fake-div"></div>`)
          document.querySelector('.fake-div').remove();
          if (i == 5) {
            clearInterval(bodyTriggerInterval)
          }

        }, 1000)
        document.querySelector('body').insertAdjacentHTML("beforeend", `<div class="fake-div"></div>`)
        document.querySelector('.fake-div').remove();


        function hiddenValue(currentExperimentName, currentExperimentValue) {
          function setCookie(name, value, days) {
            var expires = ''
            if (days) {
              var date = new Date()
              date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
              expires = '; expires=' + date.toUTCString()
            }
            document.cookie = name + '=' + (value || '') + expires + '; path=/'
          }

          function getCookie(name) {
            var nameEQ = name + '='
            var ca = document.cookie.split(';')
            for (var i = 0; i < ca.length; i++) {
              var c = ca[i]
              while (c.charAt(0) == ' ') c = c.substring(1, c.length)
              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
            }
            return null
          }

          var ExistingExperimentName = getCookie('ExperimentName')
          var ExistingExperimentValue = getCookie('ExperimentValue')

          if (!ExistingExperimentName) {
            setCookie('ExperimentName', currentExperimentName, 1)
            setCookie('ExperimentValue', currentExperimentValue, 1)
          } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {
            setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1)
            setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1)
          } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {
            var existingNames = ExistingExperimentName.split(',')
            var existingValues = ExistingExperimentValue.split(',')
            var index = existingNames.indexOf(currentExperimentName)
            existingValues[index] = currentExperimentValue
            setCookie('ExperimentName', existingNames.join(','), 1)
            setCookie('ExperimentValue', existingValues.join(','), 1)
          }
        }
        hiddenValue('#2002 | Tempo | Homepage | Features Accordion ', 'spz_2002_variant');
      }
    }
  }, 20)
}