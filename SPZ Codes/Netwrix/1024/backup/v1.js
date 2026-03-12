function loadTestCode() {
  if (!document.querySelector('body').classList.contains('spz_1024_v1')) {
    document.querySelector('body').classList.add('spz_1024_v1');

    var arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <g clip-path="url(#clip0_122_1569)">
        <path d="M10 5L5.88739 10H4.12071L7.57878 5.80162H0V4.19839H7.57878L4.12071 0H5.88739L10 5Z" fill="#5851DB"/>
      </g>
      <defs>
        <clipPath id="clip0_122_1569">
          <rect width="10" height="10" fill="white"/>
        </clipPath>
      </defs>
    </svg>`;

    const content = [
      {
        title: "Data Security Posture Management",
        desc: "Identify, monitor, and protect sensitive data, mitigating risks across hybrid cloud environments.",
        link: "https://netwrix.com/en/solutions/data-security-posture-management/",
        image: [
          {
            breakPoint: 1920,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/data-security-1920_3.webp",
          },
          {
            breakPoint: 1440,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/data-security_3.webp",
          },
          {
            breakPoint: 481,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/data-security-tablet_3.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/data-security-mobile_4.webp",
          },
        ]
      },
      {
        title: "Directory Management",
        desc: "Automate user provisioning and access with real-time visibility and easy policy enforcement for secure Active Directory management.",
        link: "https://netwrix.com/en/solutions/directory-management/",
        image: [
          {
            breakPoint: 1920,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/directory-management-1920_1.webp",
          },
          {
            breakPoint: 1440,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/directory-management_1.webp",
          },
          {
            breakPoint: 481,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/directory-management-tablet_1.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/directory-management-mobile_1.webp",
          },
        ]
      },
      {
        title: "Endpoint Management",
        desc: "Secure every endpoint, simplify compliance, and keep teams productive - no matter where they work.",
        link: "https://netwrix.com/en/solutions/endpoint-management/",
        image: [
          {
            breakPoint: 1920,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/endpoint-management-1920_2.webp",
          },
          {
            breakPoint: 1440,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/endpoint-management_2.webp",
          },
          {
            breakPoint: 481,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/endpoint-management-tablet_2.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/endpoint-management-mobile_2.webp",
          },
        ]
      },
      {
        title: "Identity Management",
        desc: "Manage and govern identities at scale with automated access, reduced privilege sprawl, and simplified compliance.",
        link: "https://netwrix.com/en/solutions/identity-management/",
        image: [
          {
            breakPoint: 1920,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/identity-management-1920_2.webp",
          },
          {
            breakPoint: 1440,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/img-container_2.webp",
          },
          {
            breakPoint: 481,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/identity-management-tablet_2.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/identity-management-mobile_2.webp",
          },
        ]
      },
      {
        title: "Identity Threat Detection and Response",
        desc: "Detect suspicious activity sooner, respond faster, and recover quickly to minimize downtime and avoid business disruptions.",
        link: "https://netwrix.com/en/solutions/identity-threat-detection-response/",
        image: [
          {
            breakPoint: 1920,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/identity-threat-1920_1.webp",
          },
          {
            breakPoint: 1440,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/identity-threat_1.webp",
          },
          {
            breakPoint: 481,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/identity-threat-tablet_1.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/identity-threat-mobile_1.webp",
          },
        ]
      },
      {
        title: "Privileged Access Management",
        desc: "Lock down admin access, enforce least privilege, and stop credential misuse before attackers log in and move laterally.",
        link: "https://netwrix.com/en/solutions/privileged-access-management/",
        image: [
          {
            breakPoint: 1920,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/priviliged-access-1920_5.webp",
          },
          {
            breakPoint: 1440,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/priviliged-access_5.webp",
          },
          {
            breakPoint: 481,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/priviliged-access-tablet_5.webp",
          },
          {
            breakPoint: 360,
            url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1024/priviliged-access-mobile_5.webp",
          },
        ]
      }
    ]

    document.querySelector('main>section:nth-of-type(2)').insertAdjacentHTML('afterend', `
      <div class="spz_platformSection">
        <div class="auto_container">
          <div class="spz_platformInner">
            <div class="spz_heading">
              <h2>One platform. No fluff.</h2>
              <p>Meet 1Secure, the first platform to unify data and identity security.  Ditch the siloed tools and secure your identities, strengthen data protection, and simplify compliance — all from one platform. </p>
            </div>
            <div class="spz_platfromList">
              <ul>
                ${content.map(item => `
                  <li>
                    <div class="spz_platformData">
                      <div class="spz_platformTop">
                        <picture>
                          ${item.image.map(img => `<source media="(min-width:${img.breakPoint}px)" srcset="${img.url}" ></source>`).join("")}
                          <img src="${item.image[1].url}" alt="${item.title} visualization" />
                        </picture>
                      </div>
                      <div class="spz_platformBottom">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <a href="${item.link}" slug="${item.title}" class="spz1024_v1">Learn more ${arrowIcon}</a>
                      </div>
                    </div>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
      `);

    //Add the following code of experiment. This code will set the cookie with the experiment name and variant name.
    //exptName should be #1001, #1002, #1003 etc.
    const expName = '1024';
    //variantName should be _V1, _V2, _TC etc.
    const variantName = `variant_` + expName;

    hiddenValue(expName, variantName);

    /***********************************
    ************************************
    DO NOT TOUCH
    BEYOND THIS LINE
    ******************************
    ************************/
    function hiddenValue(currentExperimentName, currentExperimentValue) {
      function setCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

      if (!ExistingExperimentName) {

        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);

      } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

      } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');

        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;

        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
      }
    }
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body main >.c--hero-a").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode();
  }
}, 100);

