//DEV 1/8. Put asana task URL here
const asana_URL = `https://app.asana.com/1/77217210692853/project/1211900921277295/task/1212663355945652?focus=true`
//DEV 2/8. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_heroSelector = '#productBlock';
//DEV 3/8. Choose where redesigned hero section should appear
const template_position = "beforebegin" //"beforebegin","afterbegin", "beforeend", "afterend"
//DEV 4/8. Find the class or ID of the control form and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_formSelector = `.formbar-content-container`;

//DEV 5/8. Fill hero content values. See comments below
const template_heroContent = {
    //[1] Hero form heading
    customHTMLBefore: `
    <div class="form-heading">
      Get Free Consultation
    </div>
  `,
    //[2] Hero form prozac
    customHTMLAfter: ``,
    //[3] Content eyebrow
    contentSuperHeading: "",
    //[4] Content trustBadge
    trustBadge: [],
    //[5] Hero heading
    contentHeading: "custom blinds",
    //[6] Hero pills
    contentPills: [],
    //[7] Hero subheading
    contentSubHeading: "Find the perfect blinds for your <span> </span> home",
    //[8] Arrow image between the form and content
    middleArrowImage: [],
    //Alt value for arrow
    middleArrowAlt: "",
    //[9] Hero bullets
    features: [
        {
            checkmarkImage:
                "//res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/1001/check_icon.webp",
            featureItemContent:
                "<b>Functional.</b> Customize options for privacy, light & glare reduction, climate control, motorization, and more.",
        },
        {
            checkmarkImage:
                "//res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/1001/check_icon.webp",
            featureItemContent:
                "<b>Style.</b> Compare colors, patterns & textures. Natural & faux wood, fabric, and other materials. See samples in your space.",
        },
        {
            checkmarkImage:
                "//res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/1001/check_icon.webp",
            featureItemContent:
                "<b>Full Service.</b> Free in-home consultation. Done-for-you design, measure & install. No contractors. Full warranty.",
        },
    ],
};
const template_additionalSection = {
    // Social proof logos with heading after interface image
    socialProofLogos: [],

}

//DEV 6/8. Find the class or ID of the control inputs and place below
const template_inputsSelectors = [`input[name="firstname"]`, `input[name="lastname"]`, `input[name="email"]`, `input[name="phone"]`, `input[name="zip"]`] //Examples of selectors: "#some_input_id", ".some_input_unique_classname", "input[name='FirstName']" etc...
//DEV 7/8. Copy labels test from Figma and place it below i
const template_labelValues = ["First Name", "Last Name", "Email", "Phone Number", "Zip Code"] //Grab values from Figma design: "First Name", "Last Name", "Email" etc...

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
//Helper function to animate labels for inputs
function animateLabels(inputs, template_labelValues) {
    inputs.forEach((item, index) => {
        const parentDiv = document.querySelector(item).parentElement;
        const input = document.querySelector(item);
        const existingLabel = parentDiv.querySelector('label:not(.label-spz)');
        if (existingLabel) existingLabel.style.display = 'none';

        const label = document.createElement('label');
        label.innerText = template_labelValues[index];
        label.classList.add('label-spz');
        label.classList.add(`label-spz-${item.replace(/[^a-zA-Z0-9]/g, '')}`);
        label.style.width = '';

        label.addEventListener('click', function (e) {
            const actualInput = parentDiv.querySelector('input, select, textarea');
            if (actualInput) actualInput.focus();
        });
        //inserting labels after input.
        parentDiv.insertBefore(label, input.nextSibling);
        label.parentElement.classList.add('spz-input-wrap')
        //adding placeholder to all inputs
        input.setAttribute('placeholder', template_labelValues[index]);
        if (input.tagName === 'SELECT') {
            input.setAttribute('style', 'color:')
            input.addEventListener('change', () => {
                if (input.value.length > 0) {
                    input.closest(".spz-input-wrap").classList.add("has-value")
                    input.setAttribute('style', 'color:')
                } else {
                    input.closest(".spz-input-wrap").classList.remove("has-value")
                }
            })
            if (input.value !== '') {
                parentDiv.classList.add('has-value');
                input.setAttribute('style', 'color:')
            } else {

            }
        }
    });
}
function addBaseline(formData, whereToPut, template_formSelector, template_heroSelector, template_additionalSection) {
    const formTemplate = `
		<div class="spz-bg-wrap">
            <div class="spz-bg-inner">
                <div class="spz-form-wrap">
                <div class="content-section">
                    ${formData.contentSuperHeading.replace(/\s/g, "").length !== 0
            ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
            : ""
        }
                    ${formData.trustBadge.length !== 0
            ? `<div class="trust-badge">
                        <picture>
                        ${formData.trustBadge.map(
                (item) =>
                    `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
            )
                .join("")
            }
                        <img src="${formData.trustBadge[0].url}" alt="trust badge" />
                        </picture>
                    </div>`
            : ""
        }
                    ${formData.contentHeading.replace(/\s/g, "").length !== 0
            ? `<div class="content-heading">${formData.contentHeading}</div>`
            : ""
        }
                    ${formData.contentSubHeading.replace(/\s/g, "").length !== 0
            ? `<div class="content-subheading">${formData.contentSubHeading}</div>`
            : ""
        }
                    <div class="spz-features-wrap">
                    ${formData.features.length > 0
            ? formData.features
                .map((item) => {
                    return `<div class="feature-item">
                                <div class="checkmark"></div>
                                <span>${item.featureItemContent}</span>
                                </div>`;
                })
                .join("")
            : ""
        }
                    </div>
                </div>
                <div class="spz-form-section">
                    ${formData.customHTMLBefore.replace(/\s/g, "").length !== 0
            ? formData.customHTMLBefore
            : ""
        }
                    <div class="the-form"></div>
                    ${formData.customHTMLAfter.replace(/\s/g, "").length !== 0
            ? formData.customHTMLAfter
            : ""
        }
                </div>
                </div>
                ${typeof template_additionalSection.socialProofLogos !== 'undefined' ?
            `
                <div class="customer_main">
                    <div class="customer_inner">
                        <div class="customer_wrap">
                            <div class="customer_left">
                            <picture>
                                <source media="(min-width:1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/1001/badges_2.webp">
                                <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/1001/badges_1.webp">
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/1001/badges_2.webp" alt="Awards" width="408" height="96">
                            </picture>
                            </div>
                            <div class="customer_right">#1 in Customer Service</div>
                        </div>
                    </div>
                </div>                
                `: ``}

            </div>
            <div class="hidden">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesblindsv2desktopimage_4.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesblindsv2desktopimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesblindsv2desktopimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesshadesv2desktopimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesblindsv2mobileimage_11.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesblindsv2mobileimage_7.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesblindsv2mobileimage_8.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesshadesv2tabletimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesshadesv2mobileimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesshadesv2desktopimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesshadesv2tabletimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesshadesv2mobileimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesdraperyv2desktopimage_4.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesdraperyv2tabletimage_4.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesdraperyv2mobileimage_4.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesdraperyv2desktopimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesdraperyv2tabletimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesdraperyv2mobileimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesvalancesv2desktopimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesvalancesv2tabletimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesvalancesv2mobileimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesvalancesv2desktopimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesvalancesv2tabletimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imagesvalancesv2mobileimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imageswindow_treatmentsv2desktopimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imageswindow_treatmentsv2tabletimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imageswindow_treatmentsv2mobileimage_5.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imageswindow_treatmentsv2desktopimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imageswindow_treatmentsv2tabletimage_6.webp" width="0" height ="0" alt="">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/stoneside/2001/imageswindow_treatmentsv2mobileimage_6.webp" width="0" height ="0" alt="">
            </div>
	  </div>`;
    document
        .querySelector(template_heroSelector)
        .insertAdjacentHTML(whereToPut, formTemplate);

    let formLoaded = setInterval(() => {
        if (document.querySelector(template_formSelector)) {
            clearInterval(formLoaded)

            document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(template_formSelector));
            setTimeout(function () {
                animateLabels(template_inputsSelectors, template_labelValues);
                if (document.querySelector('.the-form button.submitBtn')) {
                    document.querySelector('.the-form button.submitBtn').classList.add('spz_2001_v2')
                }
            }, 500);
        }
    })

    placeCategoryHeroSection();
    if (!window._categoryHeroResizeBound) {
        window._categoryHeroResizeBound = true;
        window.addEventListener('resize', placeCategoryHeroSection);
    }
}

function placeCategoryHeroSection() {
    setTimeout(() => {
        const contentSection = document.querySelector('.spz-form-wrap>.content-section');
        const contentSectionMob = document.querySelector('.form_mobile_list .content-section');
        const heroSection = document.querySelector('#category-hero-section');
        if (window.innerWidth < 768) {
            contentSectionMob.insertAdjacentElement('afterend', heroSection);
        } else {
            contentSection.insertAdjacentElement('beforeend', heroSection);
        }
    }, 300);
}

var url_2001 = location.href;
urlCheck_2001(url_2001);

history.pushState = (function (f) {
    return function pushState() { var ret = f.apply(this, arguments); window.dispatchEvent(new Event("pushstate")); window.dispatchEvent(new Event("locationchange")); return ret; };
})(history.pushState);
history.replaceState = (function (f) {
    return function replaceState() { var ret = f.apply(this, arguments); window.dispatchEvent(new Event("replacestate")); window.dispatchEvent(new Event("locationchange")); return ret; };
})(history.replaceState);
window.addEventListener("popstate", function () { window.dispatchEvent(new Event("locationchange")); });

window.addEventListener("locationchange", function () {
    url_2001 = location.href;
    urlCheck_2001(url_2001);
});
setInterval(function () { urlCheck_2001(location.href); }, 300);

function applyHeroSubheading_2001() {
    var heroTitle = document.querySelector('.category-hero-title');
    if (!heroTitle) return;
    var hero_dynamic = heroTitle.innerText;
    var hero_dynamic2 = hero_dynamic.split("in ");
    if (hero_dynamic2.length <= 1) return;
    var validPaths = ['/shades', '/drapery', '/valances', '/window-treatments', '/blinds'];
    var pathname = window.location.pathname;
    var isValidPath = validPaths.some(function (path) { return pathname === path || pathname.startsWith(path + '/'); });
    var prefix = isValidPath ? 'in ' : '';
    var span = document.querySelector('.spz-form-wrap .content-subheading span');
    if (span) span.innerHTML = prefix + hero_dynamic2[1] + ' ';
}

function run2001() {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        load2001();
    } else {
        document.addEventListener('DOMContentLoaded', load2001);
    }
    //load2001();
}
function urlCheck_2001(url) {
    var allblogsurlstring = "https://www.stoneside.com/";
    if (window.location.pathname.indexOf("/") > -1) {
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        var contentHeading = document.querySelector('.spz-form-wrap .content-heading');
        if (window.location.pathname.indexOf('/blinds') > -1) {
            run2001();
            if (document.body) document.body.classList.add('spz_blinds_page');
        } else if (window.location.pathname.indexOf('/shades') > -1) {
            run2001();
            if (contentHeading) {
                contentHeading.innerText = 'custom shades';
                document.querySelector('body').classList.add('spz_shades_page');
                var sub = document.querySelector('.content-subheading');
                if (sub) sub.innerHTML = 'Design the perfect shades <span>for your home</span>';
                applyHeroSubheading_2001();
                document.querySelectorAll('.spz-features-wrap').forEach(function (featureWrap) {
                    featureWrap.innerHTML = `
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Performance.</b>  Customize options for privacy, light control, heat & cold reduction, energy efficiency, automation, and more. </span> 
                </div>
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Aesthetics.</b>  Compare colors, patterns & textures. Woven wood, fabric, and other materials. See samples in your space. </span> 
                </div>
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Full Service.</b>  Free in-home consultation. Done-for-you design, measure & install. No contractors. Full warranty. </span> 
                </div>
            `;
                });
            }
        } else if (window.location.pathname.indexOf('/valances') > -1) {
            run2001();
            if (contentHeading) {
                contentHeading.innerText = 'custom valances & Cornices';
                document.querySelector('body').classList.add('spz_valances_page');
                var sub = document.querySelector('.content-subheading');
                if (sub) sub.innerHTML = 'Expertly designed valances  <span>for your home</span>';
                applyHeroSubheading_2001();
                document.querySelectorAll('.spz-features-wrap').forEach(function (featureWrap) {
                    featureWrap.innerHTML = `
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Style.</b>  Customize options for designs, mounting types, fabrics, colors, textures & more. See samples in your space.</span> 
                </div>
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Quality.</b> Built with premium materials and expert craftsmanship. Highly durable. Full warranty. </span> 
                </div>
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Full Service.</b> Free in-home consultation. Completely done-for-you design, measure & install. No contractors.</span> 
                </div>
            `;
                });
            }
        } else if (window.location.pathname.indexOf('/window-treatments') > -1) {
            run2001();
            if (contentHeading) {
                contentHeading.innerText = 'window treatments';
                contentHeading.style.display = 'none';
                document.querySelector('body').classList.add('spz_window_treatments_page');
                var sub = document.querySelector('.content-subheading');
                if (sub) {
                    sub.innerHTML = 'Custom window treatments <span>for your home</span>';
                    applyHeroSubheading_2001();
                    if (!document.querySelector('.spz-form-wrap .hero_tags')) sub.insertAdjacentHTML('afterend', `
                <div class="hero_tags">
                    <ul>
                        <li>
                            <span>Shades</span>
                        </li>
                        <li>
                            <span>Blinds</span>
                        </li>
                        <li>
                            <span>Drapery</span>
                        </li>
                        <li>
                            <span>Valances & cornices</span>
                        </li>
                    </ul>
                </div>    
            `);
                }
                document.querySelectorAll('.spz-features-wrap').forEach(function (featureWrap) {
                    featureWrap.innerHTML = `
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Comfort & Function.</b>   Customize options for privacy, light, glare reduction, temperature control, automation & more. </span> 
                </div>
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Style.</b> Compare colors, patterns & textures. Natural & faux wood, fabric, and other materials. See samples in your space. </span> 
                </div>
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Full Service.</b> Free in-home consultation. Done-for-you design, measure & install. In-house team, no contractors. Full warranty.</span> 
                </div>
            `;
                });
            }
        } else if (window.location.pathname.indexOf('/drapery') > -1) {
            run2001();
            if (contentHeading) {
                contentHeading.style.display = 'none';
                document.querySelector('body').classList.add('spz_drapery_page');
                var sub = document.querySelector('.content-subheading');
                if (sub) sub.innerHTML = 'Stunning custom drapery  <span>for your home</span>';
                applyHeroSubheading_2001();
                document.querySelectorAll('.spz-features-wrap').forEach(function (featureWrap) {
                    featureWrap.innerHTML = `
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Aesthetics.</b> See samples in your space. Compare styles, widths & lengths, colors, patterns, textures, and more. 300+ fabrics.</span> 
                </div>
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Performance.</b> Personalize options for privacy, sunlight filtering, room darkening, and climate control. Fully customizable. </span> 
                </div>
                <div class="feature-item">
                    <div class="checkmark"></div> <span><b>Full Service.</b> Free in-home consultation. Done-for-you design, measure & install. No contractors. Full warranty.</span> 
                </div>
            `;
                });
            }
        }
    }
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ? currentUrl.slice(0, currentUrl.indexOf("#")) : currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ? specifiedUrl.slice(0, specifiedUrl.indexOf("#")) : specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?") ? currentUrl.slice(0, currentUrl.indexOf("?")) : currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}
function load2001() {
    if (!document.body.classList.contains('spz2001_v')) {
        document.body.classList.add('spz2001_v');
        if (!document.body.classList.contains('spz2001_v2')) {
            document.body.classList.add('spz2001_v2');
        }

        let heroSelector = template_heroSelector;
        if (window.location.pathname === '/window-treatments' || window.location.pathname.indexOf('/window-treatments/') > -1) {
            if (document.getElementById('categoryBlock')) {
                heroSelector = '#categoryBlock';
            } else if (document.getElementById('productBlock')) {
                heroSelector = '#productBlock';
            }
        }
        addBaseline(
            template_heroContent, //object with the data
            template_position, //any value you pass using insertAdjacentHTML
            template_formSelector, // control form selector
            heroSelector,
            template_additionalSection
        );

        waitForElm('.category-hero-title').then((hero_title) => {
            setTimeout(() => {
                var hero_dynamic = hero_title.innerText;
                const hero_dynamic2 = hero_dynamic.split("in ");
                if (hero_dynamic2.length > 1) {
                    const validPaths = ['/shades', '/drapery', '/valances', '/window-treatments'];
                    const pathname = window.location.pathname;
                    const isValidPath = validPaths.some(path => pathname === path || pathname.startsWith(path + '/'));
                    const prefix = isValidPath ? 'in ' : '';
                    document.querySelector('.spz-form-wrap .content-subheading span').innerHTML = prefix + hero_dynamic2[1] + ' ';
                }
            }, 320);
        });
        waitForElm('.spz-form-wrap .button-formbar-free-consultation').then((cta_wrap) => {
            cta_wrap.closest(".formbar-element").classList.add("cta_wrap");
            cta_wrap.innerHTML = 'Submit';
            document.querySelector('.spz-form-section form > div').appendChild(document.querySelector('.spz-form-wrap .cta_wrap'));

            var dynamic_no_str = document.querySelector('.formbar-title').innerText;
            var dynamic_no = dynamic_no_str.split(" ");

            var el1 = document.createElement("div");
            el1.innerHTML = `
            <div class="form_disc_inner">
                <div class="call_wrap">or call <span>`+ dynamic_no[1] + `</span></div>
                <div class="disc_text_wrap">
                    <div class="disc_text">Your information with Stoneside is secure. We will <span><a href="/company/privacy">never sell or share</a></span> your information</div>
                </div>
            </div>`;
            el1.classList.add('form_disc');

            wrapper = document.querySelector('.spz2001_v .spz-form-section form');
            wrapper.insertAdjacentElement('beforeend', el1);

            /*-----Phone change on control change------*/
            const targetNode = document.querySelector('.spz2001_v .icon-phone-receiver-before');
            const config = { characterData: true, childList: true, subtree: true };
            const callback = (mutationsList, observer) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList' || mutation.type === 'characterData') {
                        var dynamic_no2 = document.querySelector('.spz2001_v .icon-phone-receiver-before').innerText;
                        document.querySelector('.call_wrap span').innerText = dynamic_no2;
                    }
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(targetNode, config);

        });
        waitForElm('.spz-form-wrap .button-formbar-free-consultation').then((cta_wrap) => {
            var el2 = document.createElement("div");
            el2.innerHTML = `
            <div class="content-section">
                <div class="spz-features-wrap">
                    <div class="feature-item">
                        <div class="checkmark"></div> <span><b>Functional.</b> Customize options for privacy, light & glare reduction, climate control, motorization, and more.</span> </div>
                    <div class="feature-item">
                        <div class="checkmark"></div> <span><b>Style.</b> Compare colors, patterns & textures. Natural & faux wood, fabric, and other materials. See samples in your space.</span> </div>
                    <div class="feature-item">
                        <div class="checkmark"></div> <span><b>Full Service.</b> Free in-home consultation. Done-for-you design, measure & install. No contractors. Full warranty.</span> </div>
                </div>
            </div>
            `;
            el2.classList.add('form_mobile_list');

            wrapper = document.querySelector('.spz-form-wrap');
            wrapper.insertAdjacentElement('beforeend', el2);

            document.querySelector('.spz-bg-wrap').insertAdjacentHTML('afterend', `<div class="spz_bg_container"></div>`);
            document.querySelector('.spz_bg_container').appendChild(document.querySelector('.spz-bg-wrap'));
        });

    }

    const squeezePage = 'both'; // true / false / 'both'
    expName = '2001'; //experiment name should be 1001, 1002, 1003 etc.
    const variantName = `SPZ_` + expName + `_variant2`; //variantName should be _variant, _true_control etc.
    const clientDomain = '.stoneside.com'; //domain should be .spiralyze.com
    expName = `SPZ_` + expName;

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

    setTimeout(() => {
        setHiddenField();
    }, 1000);

}

function getCookieForHiddenValue(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function setHiddenField() {
    // Get values safely
    var squeezePageValue = (typeof window.squeezePageValue !== "undefined") ? window.squeezePageValue : "";
    var landingPageValue = getCookieForHiddenValue("ExperimentValue") || "";

    var finalList = [];

    if (landingPageValue) {
        finalList = landingPageValue.split(",");
    }

    if (squeezePageValue) {
        finalList = finalList.filter(v => v !== squeezePageValue);
        finalList.push(squeezePageValue);
    }

    var finalValue = finalList.join(",");

    if (!finalValue) return;

    // Set hidden field value once available
    var spzHiddenFieldName = setInterval(() => {
        var input = document.querySelector('input[name="cro1"]');
        if (input) {
            clearInterval(spzHiddenFieldName);
            input.value = finalValue;
        }
    }, 1000);
}

function waitForElm(selector) {
    var bodyElm = document.querySelectorAll('body').length > 0 ? document.querySelector('body') : document.querySelector('html');
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector)); observer.disconnect();
            }
        });
        observer.observe(bodyElm, { childList: true, subtree: true });
    });
}
