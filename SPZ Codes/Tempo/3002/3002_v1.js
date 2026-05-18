// #3002 | Tempo | Get Started | Qualifying Questions

(function () {

    // ============ SPA NAVIGATION ============
    const _pushState = history.pushState;
    const _replaceState = history.replaceState;
    history.pushState = function () {
        _pushState.apply(history, arguments);
        window.dispatchEvent(new Event('spz:locationchange'));
    };
    history.replaceState = function () {
        _replaceState.apply(history, arguments);
        window.dispatchEvent(new Event('spz:locationchange'));
    };
    window.addEventListener('popstate', function () {
        window.dispatchEvent(new Event('spz:locationchange'));
    });

    // ============ CONFIG ============
    // DEV 1/4. Test identity
    const asana_URL = `https://app.asana.com/1/77217210692853/task/1213888701520111?focus=true`;
    let testId = '3002',
        testType = 'v',
        testClass = 'spz_' + testId + '_' + testType,
        ctaClass = 'spz' + testId + '_' + testType;

    // DEV 2/4. Selector + URL
    const template_url = '/get-started/onboarding';
    const template_selector = 'main form';

    // DEV 3/4. Content / copy
    const template_content = {
        step1: {
            heading: 'Get Started <em>Free</em>',
            subheading: "What's your focus?",
            row1: [
                { val: 'agile-leadership', label: 'Agile\nLeadership', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/agileleadership.webp' },
                { val: 'engineer-management', label: 'Engineer\nManagement', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/engineer_management.webp' },
                { val: 'it-management', label: 'IT\nManagement', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/itmanagement.webp' }
            ],
            row2: [
                { val: 'product-management', label: 'Product\nManagement', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/product_management.webp' },
                { val: 'executive', label: 'Executive', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/executive.webp' },
                { val: 'project-management', label: 'Project\nManagement', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/project_management.webp' },
                { val: 'cross-functional', label: 'Cross-\nfunctional', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/cross-functional.webp' }
            ]
        },
        step2: {
            heading: 'Get Started <em>Free</em>',
            subheading: 'What are you looking to manage?',
            tiles: [
                { val: 'single-team', label: 'Single\nTeam', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/single__team.webp' },
                { val: 'multiple-teams', label: 'Multiple\nTeams', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/multiple__teams.webp' },
                { val: 'portfolio-level', label: 'Portfolio-level planning', icon: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/tempo/3002/portfolio-level_planning.webp' }
            ]
        },
        formHeading: 'Get Started <em>Free</em>',
        submitBtnText: 'Instant Access'
    };

    // DEV 4/4. Assets (full Cloudinary URLs)
    const ASSETS = {
        logo: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775809023/tempo/3002/tempo_logo.svg',
        logoHref: 'https://www.tempo.io/',
        arrow: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M18 12L0 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M12 6L18 12L12 18" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`,
        checkmark: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1775809009/tempo/3002/checkmark.svg'
    };

    const focusValueMap = {
        'agile-leadership': 'agile-leadership',
        'engineer-management': 'engineering-management',
        'it-management': 'it-management',
        'product-management': 'product-management',
        'executive': 'executive-leadership',
        'project-management': 'project-management',
        'cross-functional': 'cross-functional-all'
    };

    // ============ SESSION ============
    const SK_Q1 = 'spz_3002_q1';
    const SK_Q2 = 'spz_3002_q2';
    const SK_SUBMITTED = 'spz_3002_submitted';

    function getSession(key) {
        try { return JSON.parse(sessionStorage.getItem(key)); } catch (e) { return null; }
    }
    function setSession(key, val) {
        try { sessionStorage.setItem(key, JSON.stringify(val)); } catch (e) { }
    }

    // DEV: Downfunnel tracking config
    const squeezePage = true;
    const expName = testId;
    const variantName = 'spz_' + expName + '_variant';
    const clientDomain = '.tempo.io';

    // ============ DOWNFUNNEL TRACKING ============
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

    // ============ HTML ============
    function buildTileHTML(tile, qNum) {
        const cbClass = qNum === 1 ? 'spz-cb spz-cb--radio' : 'spz-cb';
        return `<button type="button" class="spz-tile spz-tile--q${qNum}" data-val="${tile.val}">
                <span class="${cbClass}"><span class="spz-cb-inner"></span></span>
                <span class="spz-tile-icon-wrap"><img src="${tile.icon}" alt="${tile.label.replace(/\n/g, ' ')}" loading="eager"></span>
                <span class="spz-tile-label">${tile.label.replace(/\n/g, '<br>')}</span>
            </button>`;
    }

    function buildHTML() {
        const s1 = template_content.step1;
        const s2 = template_content.step2;
        return `
        <div class="spz-qq-wrap">
            <div class="spz-qq-card">
                <div class="spz-qq-logo">
                    <a href="${ASSETS.logoHref}" class="${ctaClass}">
                        <img src="${ASSETS.logo}" alt="Tempo" loading="eager">
                    </a>
                </div>
                <div class="spz-progress">
                    <div class="spz-progress-dot spz-progress-dot--active"></div>
                    <div class="spz-progress-dot"></div>
                    <div class="spz-progress-dot"></div>
                </div>
                <div class="spz-step" data-step="1">
                    <h1 class="spz-heading">${s1.heading}</h1>
                    <p class="spz-subheading">${s1.subheading}</p>
                    <div class="spz-tiles-wrap spz-tiles-wrap--q1">
                        <div class="spz-tiles-row">${s1.row1.map(function (t) { return buildTileHTML(t, 1); }).join('')}</div>
                        <div class="spz-tiles-row">${s1.row2.map(function (t) { return buildTileHTML(t, 1); }).join('')}</div>
                    </div>
                    <p class="spz-error" data-step="1">Please select an option</p>
                    <button type="button" class="${ctaClass} spz-btn-next" data-step="1">
                        Next <span class="spz-btn-arrow">${ASSETS.arrow}${ASSETS.arrow}</span>
                    </button>
                </div>
                <div class="spz-step spz-step-hidden" data-step="2">
                    <h1 class="spz-heading">${s2.heading}</h1>
                    <p class="spz-subheading">${s2.subheading}</p>
                    <div class="spz-tiles-wrap spz-tiles-wrap--q2">
                        <div class="spz-tiles-row">${s2.tiles.map(function (t) { return buildTileHTML(t, 2); }).join('')}</div>
                    </div>
                    <div class="spz-step2-btns">
                        <button type="button" class="${ctaClass} spz-btn-back" data-step="2">
                            <span class="spz-btn-arrow spz-btn-arrow--back">${ASSETS.arrow}${ASSETS.arrow}</span>
                            Back
                        </button>
                        <button type="button" class="${ctaClass} spz-btn-next" data-step="2">
                            Next <span class="spz-btn-arrow">${ASSETS.arrow}${ASSETS.arrow}</span>
                        </button>
                    </div>
                </div>
                <div class="spz-step spz-step-hidden spz-step-form" data-step="3">
                    <h1 class="spz-heading">${template_content.formHeading}</h1>
                    <div class="spz-form-area"></div>
                </div>
            </div>
        </div>`;
    }

    // ============ NAVIGATION ============
    function goToStep(stepNum) {
        document.querySelectorAll('.spz-qq-card .spz-step').forEach(function (step) {
            step.classList.toggle('spz-step-hidden', +step.getAttribute('data-step') !== stepNum);
        });
        document.querySelectorAll('.spz-qq-card .spz-progress-dot').forEach(function (dot, i) {
            dot.classList.toggle('spz-progress-dot--active', i < stepNum);
        });
    }

    // ============ FORM ============
    function tagFormSections(form) {
        var sections = [];
        form.querySelectorAll(':scope > div').forEach(function (div) {
            if (div.id === 'recaptcha-container') return;
            if (div.classList.contains('flex') && div.classList.contains('w-full')) {
                sections.push(div);
            }
        });
        if (sections[0]) sections[0].classList.add('spz-3002-fields');
        if (sections[1]) sections[1].classList.add('spz-3002-focus');
        if (sections[2]) sections[2].classList.add('spz-3002-submit');

        if (sections.length === 0) {
            form.querySelectorAll(':scope > div').forEach(function (div) {
                if (div.id === 'recaptcha-container') return;
                sections.push(div);
            });
            if (sections[0]) sections[0].classList.add('spz-3002-fields');
            if (sections[1]) sections[1].classList.add('spz-3002-focus');
            if (sections[2]) sections[2].classList.add('spz-3002-submit');
        }

        return sections;
    }

    function cleanLabels(form) {
        form.querySelectorAll('.spz-3002-fields label').forEach(function (label) {
            var text = label.textContent.replace(/\*/g, '').replace(/\s*\(required\)/gi, '').trim();
            text = text.split(' ').map(function (word, i) {
                return i === 0
                    ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    : word.toLowerCase();
            }).join(' ');
            label.textContent = text;
        });
    }

    function setupFloatingLabels(form) {
        form.querySelectorAll('input:not([type="hidden"]):not([type="radio"]):not([type="submit"])').forEach(function (input) {
            var fieldWrap = input.closest('.relative') || input.parentElement;
            if (!fieldWrap || fieldWrap._spzBound) return;
            fieldWrap._spzBound = true;

            input.addEventListener('focus', function () { fieldWrap.classList.add('focused'); });
            input.addEventListener('blur', function () {
                fieldWrap.classList.remove('focused');
                fieldWrap.classList.toggle('filled', input.value.trim() !== '');
            });
            input.addEventListener('input', function () {
                fieldWrap.classList.toggle('filled', input.value.trim() !== '');
            });
            if (input.value.trim() !== '') fieldWrap.classList.add('filled');
        });
    }

    function styleSubmitButton(form) {
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.classList.add(ctaClass, 'spz-submit-btn');
        }
    }

    function applyFormChanges(form) {
        if (form._spz3002Done) return;
        form._spz3002Done = true;

        tagFormSections(form);
        cleanLabels(form);
        setupFloatingLabels(form);
        styleSubmitButton(form);
    }

    function syncFocusToForm(form) {
        var savedQ1 = getSession(SK_Q1);
        if (!savedQ1) return;

        var formVal = focusValueMap[savedQ1] || savedQ1;
        var radio = form.querySelector('input[type="radio"][value="' + formVal + '"]');
        if (!radio) return;

        radio.checked = true;
        radio.dispatchEvent(new Event('change', { bubbles: true }));

        var propsKey = Object.keys(radio).find(function (k) { return k.indexOf('__reactProps') === 0; });
        if (propsKey && radio[propsKey] && radio[propsKey].onChange) {
            radio[propsKey].onChange({ target: radio, currentTarget: radio });
        }
    }

    function showFormStep(formRef) {
        var formArea = document.querySelector('.spz-step-form .spz-form-area');
        if (!formArea) return;

        var form = document.querySelector(template_selector);
        if (!form) form = formRef;
        if (!form) return;

        applyFormChanges(form);

        if (!formArea.contains(form)) {
            formArea.appendChild(form);
        }

        syncFocusToForm(form);
        goToStep(3);
    }

    // ============ TILE INTERACTION (delegated — survives DOM replace / re-hydration) ============
    function applySessionToQQTiles() {
        var savedQ1 = getSession(SK_Q1);
        var savedQ2 = getSession(SK_Q2) || [];

        document.querySelectorAll('.spz-tile--q1').forEach(function (tile) {
            tile.classList.toggle('active', !!(savedQ1 && tile.getAttribute('data-val') === savedQ1));
        });

        document.querySelectorAll('.spz-tile--q2').forEach(function (tile) {
            tile.classList.toggle('active', savedQ2.indexOf(tile.getAttribute('data-val')) > -1);
        });
    }

    function ensureDelegatedQQClicks() {
        if (window._spz3002DelegatedClicks) return;
        window._spz3002DelegatedClicks = true;

        document.addEventListener('click', function (e) {
            if (!document.body || !document.body.classList.contains(testClass)) return;
            if (!window.location.pathname.includes(template_url)) return;

            var wrap = document.querySelector('.spz-qq-wrap');
            if (!wrap || !wrap.contains(e.target)) return;

            var tile = e.target.closest('.spz-tile--q1');
            if (tile && wrap.contains(tile)) {
                var tiles = document.querySelectorAll('.spz-tile--q1');
                tiles.forEach(function (t) { t.classList.remove('active'); });
                tile.classList.add('active');
                setSession(SK_Q1, tile.getAttribute('data-val'));
                var err1 = document.querySelector('.spz-error[data-step="1"]');
                if (err1) err1.classList.remove('spz-error--show');

                var clickedVal = tile.getAttribute('data-val');
                setTimeout(function () {
                    var active = document.querySelector('.spz-tile--q1.active');
                    if (active && active.getAttribute('data-val') === clickedVal) goToStep(2);
                }, 400);
                return;
            }

            var tile2 = e.target.closest('.spz-tile--q2');
            if (tile2 && wrap.contains(tile2)) {
                tile2.classList.toggle('active');
                setSession(SK_Q2, [].map.call(document.querySelectorAll('.spz-tile--q2.active'), function (t) {
                    return t.getAttribute('data-val');
                }));
                return;
            }

            if (e.target.closest('.spz-btn-back[data-step="2"]')) {
                goToStep(1);
                return;
            }

            var next1 = e.target.closest('.spz-btn-next[data-step="1"]');
            if (next1) {
                var err1b = document.querySelector('.spz-error[data-step="1"]');
                var hasSel = document.querySelector('.spz-tile--q1.active');
                if (!hasSel) {
                    if (err1b) err1b.classList.add('spz-error--show');
                    return;
                }
                if (err1b) err1b.classList.remove('spz-error--show');
                goToStep(2);
                return;
            }

            var next2 = e.target.closest('.spz-btn-next[data-step="2"]');
            if (next2) {
                var formLive = document.querySelector(template_selector);
                if (formLive) showFormStep(formLive);
                return;
            }
        }, true);
    }

    /** Re-apply saved .active states after markup under the overlay is replaced (SPA / hydration). */
    function ensureQQTileResyncObserver() {
        var wrap = document.querySelector('.spz-qq-wrap');
        if (!wrap || wrap._spz3002TileResync) return;
        wrap._spz3002TileResync = true;

        var resyncTimer;
        var mo = new MutationObserver(function () {
            if (!document.body || !document.body.classList.contains(testClass)) return;
            clearTimeout(resyncTimer);
            resyncTimer = setTimeout(applySessionToQQTiles, 50);
        });
        mo.observe(wrap, { childList: true, subtree: true });
    }

    // ============ INIT ============
    function injectOverlay() {
        if (document.querySelector('.spz-qq-wrap')) return;
        document.body.classList.add(testClass);
        document.body.insertAdjacentHTML('afterbegin', buildHTML());
        if (localStorage.getItem("spz-form-title")) {
            document.querySelectorAll('.spz-heading').forEach(function (heading) {
                heading.innerHTML = localStorage.getItem("spz-form-title");
            })
        }
        applySessionToQQTiles();
        ensureQQTileResyncObserver();
    }

    function wireForm() {
        if (window._spz3002FormReady) return true;

        var form = document.querySelector(template_selector);
        if (!form) return false;

        window._spz3002FormReady = true;

        if (!window._spz3002SubmitListening) {
            window._spz3002SubmitListening = true;
            document.addEventListener('submit', function (e) {
                if (!e.target.closest('.spz-step-form')) return;
                var submittedForm = e.target;
                var startPath = window.location.pathname;
                var elapsed = 0;
                var poll = setInterval(function () {
                    elapsed += 500;
                    var navigatedAway = window.location.pathname !== startPath;
                    var formGone = !document.body.contains(submittedForm);
                    if (navigatedAway || formGone) {
                        setSession(SK_SUBMITTED, true);
                        clearInterval(poll);
                    } else if (elapsed >= 15000) {
                        clearInterval(poll);
                    }
                }, 500);
            });
        }

        if (getSession(SK_SUBMITTED)) {
            showFormStep(form);
            return true;
        }

        applySessionToQQTiles();

        return true;
    }

    function init() {
        if (!window.location.pathname.includes(template_url)) return;
        ensureDelegatedQQClicks();

        if (document.body.classList.contains(testClass)) {
            ensureQQTileResyncObserver();
            wireForm();
            return;
        }

        injectOverlay();

        if (!wireForm()) {
            var obs = new MutationObserver(function () {
                if (wireForm()) obs.disconnect();
            });
            obs.observe(document.body, { childList: true, subtree: true });
        }
    }

    // ============ SPA ROUTE LISTENER ============
    window.addEventListener('spz:locationchange', function () {
        if (!window.location.pathname.includes(template_url)) {
            document.body.classList.remove(testClass);
            window._spz3002FormReady = false;
            var oldWrap = document.querySelector('.spz-qq-wrap');
            if (oldWrap) oldWrap.remove();
        } else {
            init();
        }
    });

    if (document.body) {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }

})();
