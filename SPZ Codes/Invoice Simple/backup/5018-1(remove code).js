/* Spiralyze experiment #5018 — Invoice Simple — Specific Packages (form centre + bullets)
 * Variant: built on top of #5011 (qualifying questions) + split-screen panel on the form step.
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  CONFIG                                                             */
  /* ------------------------------------------------------------------ */
  const config = {
    experiment: '5018',
    bodyClass: 'spz_5018_v',
    guard: '.spz-5018-section',
    urlMatch: '/signup',
    formSelector: 'form[accept-charset="UTF-8"]',
    inputs: ['#firstName', '#lastName', '#email', '#password'],
    filledKey: 'spz-5018-form-filled',
    q1Key: 'spz5018_selectedQ1',
    q2Key: 'spz5018_selectedQ2',
    logo: '//res.cloudinary.com/spiralyze/image/upload/v1729141823/invoicesimple/5001/logo__desktop.svg',
    assets: {
      bg1440: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/invoicesimple/5018/bg_1440.webp',
      bg1440_2: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/invoicesimple/5018/bg_1.webp',
      bg768: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/invoicesimple/5018/bg_768.webp',
      bg360: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/invoicesimple/5018/bg_360.webp',
      check: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779197026/invoicesimple/5018/icon.svg',
      iconReduce: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779197026/invoicesimple/5018/feature_icon_shape.svg',
      iconPaid: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779197028/invoicesimple/5018/feature_icon_shape_1.svg',
      iconGrow: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779197029/invoicesimple/5018/feature_icon_shape_2.svg'
    },
    /* Hidden-field tracking (Marketo/intellimize reads these cookies).
       NOTE: exact hidden-field name to be agreed with the client. */
    tracking: {
      nameCookie: 'HiddenFieldName',
      valueCookie: 'HiddenFieldValue',
      fieldName: 'spz_experiment',
      value: 'variant_#5018'
    }
  };

  /* ------------------------------------------------------------------ */
  /*  QUALIFYING QUESTIONS DATA (from #5011)                             */
  /* ------------------------------------------------------------------ */
  const triageData = [
    {
      questionHeading: 'What best describes you?',
      answers: [
        {
          answerText: 'Freelancer',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__freelance_-_default.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__freelance_-_active.svg'
        },
        {
          answerText: 'Contractor',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__contractor_-_default.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__contractor_-_active.svg'
        },
        {
          answerText: 'Small Business Owner',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1756114005/invoicesimple/5011/icon__small_business_owner.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1756114006/invoicesimple/5011/icon__small_business_owner_-_active.svg'
        },
        {
          answerText: 'Other',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__other_-_default.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__other_-_active.svg'
        }
      ]
    },
    {
      questionHeading: 'How can we help?',
      answers: [
        {
          answerText: 'Build Professional<br> Invoices Fast',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447472/invoicesimple/5011/icon__accounting_-_default_1.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__accounting_-_active.svg'
        },
        {
          answerText: 'Get Paid <br>Faster',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__get_paid_-_default.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__get_paid_-_active.svg'
        },
        {
          answerText: 'Automate <br>Reminders',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447473/invoicesimple/5011/icon__automated_reminders_-_default_1.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1756114006/invoicesimple/5011/icon__automated_reminders_-_active_2.svg'
        },
        {
          answerText: 'Get More<br> Reviews',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__automated_reminders_-_default.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__automated_reminders_-_active.svg'
        },
        {
          answerText: 'See Revenue <br>Insights',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__revenue_insight_-_default.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__revenue_insight_-_active.svg'
        },
        {
          answerText: 'Other',
          answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447472/invoicesimple/5011/icon__other_-_default_1.svg',
          answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447472/invoicesimple/5011/icon__other_-_active_1.svg'
        }
      ]
    }
  ];

  /* ------------------------------------------------------------------ */
  /*  HELPERS                                                            */
  /* ------------------------------------------------------------------ */
  function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value) + ';path=/;max-age=31536000';
  }

  function applyTracking() {
    setCookie(config.tracking.nameCookie, config.tracking.fieldName);
    setCookie(config.tracking.valueCookie, config.tracking.value);
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function waitForElm(selector, cb) {
    const found = document.querySelector(selector);
    if (found) { cb(found); return; }
    const obs = new MutationObserver(function () {
      const el = document.querySelector(selector);
      if (el) { obs.disconnect(); cb(el); }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  function removeVariantHTML() {
    if (document.body) {
      document.body.classList.remove(config.bodyClass, 'spz-hide-qualifying-q');
    }

    document.querySelectorAll('.edition_copy, .invoice_logo, .final_step_subheader, .progress_bar, .qlf_wrapper').forEach(function (el) {
      el.remove();
    });

    document.querySelectorAll(config.guard).forEach(function (el) {
      el.remove();
    });

    const container = document.querySelector('.focus-container');
    const formSide = container && container.querySelector(':scope > .spz-5018-form-side');
    if (container && formSide) {
      while (formSide.firstChild) {
        container.insertBefore(formSide.firstChild, formSide);
      }
      formSide.remove();
    }

    const form = document.querySelector(config.formSelector);
    if (form) {
      form.classList.remove('spz-hidden', 'show-all');
      form.removeAttribute('novalidate');
    }

    const focusFooter = document.querySelector('.focus-footer');
    if (focusFooter) {
      focusFooter.classList.remove('spz-hidden');
    }

    if (container) {
      container.classList.remove('step-2', 'step-3');
    }

    config.inputs.forEach(function (selector) {
      const input = document.querySelector(selector);
      if (!input) { return; }
      const wrap = input.closest('.spz-input-wrap');
      if (!wrap) { return; }

      input.classList.remove('hard-error');
      wrap.querySelectorAll('.error-message').forEach(function (el) { el.remove(); });

      const label = wrap.querySelector('label');
      if (label) {
        if (!input.getAttribute('placeholder')) {
          input.setAttribute('placeholder', label.textContent.trim());
        }
        label.classList.remove('label-spz');
        Array.from(label.classList).forEach(function (className) {
          if (className.indexOf('label-spz-') === 0) {
            label.classList.remove(className);
          }
        });
      }

      wrap.classList.remove('spz-input-wrap', 'has-value', 'focused', 'has-error');
    });
  }

  /* ------------------------------------------------------------------ */
  /*  FORM SETUP (ported from #5011)                                     */
  /* ------------------------------------------------------------------ */
  function updateForm() {
    document.body.classList.add(config.bodyClass);

    /* On iOS the body class can be stripped — re-add via observer */
    const checkBodyClass = new MutationObserver(function () {
      if (!document.body.classList.contains(config.bodyClass) && location.pathname === config.urlMatch) {
        document.body.classList.add(config.bodyClass);
        animateLabels(config.inputs);
        addQualifyingQuestions();
        addSplitPanel();
        checkBodyClass.disconnect();
      } else if (document.body.classList.contains(config.bodyClass) && location.pathname !== config.urlMatch) {
        removeVariantHTML();
      }
    });
    checkBodyClass.observe(document.body, { attributes: true, childList: true, subtree: true });

    /* stop browser default validation */
    const ctrlForm = document.querySelector('.signup .focus-body form');
    if (ctrlForm) { ctrlForm.setAttribute('novalidate', 'novalidate'); }

    /* logo */
    const logoWrap = document.querySelector('.signup .focus-header .brand img');
    if (logoWrap) { logoWrap.setAttribute('src', config.logo); }

    /* consent / terms copy */
    const terms = document.querySelector('.signup #showmore p');
    if (terms) {
      terms.innerHTML = "<label for='consent'>I want to receive emails from Invoice Simple and its Affiliates about their products, services, news, events, and promotions.</label>";
    }

    /* CTA text */
    const ctaText = document.querySelector('.signup form button[type="submit"]');
    if (ctaText) { ctaText.innerHTML = 'FREE Instant access'; }

    /* keep fields populated -> reveal all */
    const checkInputs = setInterval(function () {
      if (document.querySelectorAll('.spz-input-wrap input')) {
        clearInterval(checkInputs);
        const allInputs = document.querySelectorAll('.spz-input-wrap input');
        allInputs.forEach(function (input) {
          if (input.value.length > 0) { input.closest('.form-group').classList.add('has-value'); }
          input.addEventListener('keyup', function () {
            if (
              allInputs[0].value.length > 0 &&
              allInputs[1].value.length > 0 &&
              allInputs[2].value.length > 0 &&
              validateEmail(allInputs[2].value)
            ) {
              input.closest('form').classList.add('show-all');
            }
          });
        });
      }
    }, 100);

    const checkfieldValue = setInterval(function () {
      const allInputs = document.querySelectorAll('.spz-input-wrap input');
      if (
        allInputs[0] && allInputs[0].value.length > 0 &&
        allInputs[1] && allInputs[1].value.length > 0 &&
        allInputs[2] && allInputs[2].value.length > 0 &&
        validateEmail(allInputs[2].value)
      ) {
        clearInterval(checkfieldValue);
        allInputs[0].closest('form').classList.add('show-all');
      }
    }, 100);
    setTimeout(function () { clearInterval(checkfieldValue); }, 5000);

    /* submit-time validation */
    document.addEventListener('click', function (e) {
      if (
        e.target.closest('form button[type="submit"]') &&
        e.target.closest('form').querySelectorAll('input').length > 0
      ) {
        const allInputs = document.querySelectorAll('.spz-input-wrap input');
        allInputs.forEach(function (input) {
          if (input.classList.contains('hard-error')) { return; }
          if (!input.value.length > 0) {
            input.closest('.spz-input-wrap').classList.add('has-error');
          } else {
            input.closest('.spz-input-wrap').classList.remove('has-error');
          }
          const inputType = input.getAttribute('type');
          if (inputType === 'email') {
            if (!validateEmail(input.value)) {
              input.closest('.spz-input-wrap').classList.add('has-error');
              input.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'Please enter a valid email address.';
            } else {
              input.closest('.spz-input-wrap').classList.remove('has-error');
              input.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'Please enter an email.';
            }
          }
        });
      }
    });

    /* mirror control errors onto our fields */
    const controlError = document.querySelector('.signup .is-alert');
    if (controlError) {
      const errorObserver = new MutationObserver(function () {
        const node = controlError.querySelector('.container div div');
        const errorText = node ? node.innerText : '';
        const emailWrap = document.querySelector('.spz-input-wrap input[type="email"]');
        const passWrap = document.querySelector('.spz-input-wrap input[type="password"]');
        if (errorText.includes('already exists') && emailWrap) {
          emailWrap.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'This email is already in use.';
          emailWrap.closest('.spz-input-wrap').classList.add('has-error');
          emailWrap.classList.add('hard-error');
          if (passWrap) { passWrap.closest('.spz-input-wrap').classList.remove('hard-error', 'has-error'); }
        } else if (errorText.includes('couldn’t verify your signup') && emailWrap) {
          emailWrap.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'We couldn’t verify your signup. Please try again.';
          emailWrap.closest('.spz-input-wrap').classList.add('has-error');
          emailWrap.classList.add('hard-error');
          if (passWrap) { passWrap.closest('.spz-input-wrap').classList.remove('hard-error', 'has-error'); }
        } else if (errorText.includes('must have at least 6') && passWrap) {
          passWrap.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'Password must be at least 6 characters.';
          passWrap.closest('.spz-input-wrap').classList.add('has-error');
          passWrap.classList.add('hard-error');
          if (emailWrap) { emailWrap.closest('.spz-input-wrap').classList.remove('hard-error', 'has-error'); }
        } else if (document.querySelector('.spz-input-wrap .hard-error')) {
          document.querySelector('.spz-input-wrap .hard-error').classList.remove('hard-error');
        }
        if (document.querySelector('.is-alert.alert-success')) {
          localStorage.setItem(config.filledKey, 'true');
        }
      });
      errorObserver.observe(controlError, { characterData: true, attributes: true, childList: true, subtree: true });
    }
  }

  /* label animation helpers (ported from #5011) */
  function animateLabels(inputs) {
    inputs.forEach(function (item) {
      const parentDiv = findParent(item);
      if (!parentDiv) { return; }
      if (parentDiv.querySelector('.label-spz')) { return; }
      const existingLabel = parentDiv.querySelector('label:not(.label-spz)');
      if (existingLabel) {
        existingLabel.classList.add('label-spz');
        existingLabel.classList.add('label-spz-' + item.replace(/[^a-zA-Z0-9]/g, ''));
      }
      parentDiv.classList.add('spz-input-wrap');
      parentDiv.insertAdjacentHTML(
        'beforeend',
        '<div class="error-message">Please enter a ' + (existingLabel ? existingLabel.innerText.toLowerCase() : 'value') + '.</div>'
      );
      addInputListener(document.querySelector(item));
    });
  }

  function addInputListener(input) {
    if (!input) { return; }
    input.placeholder = '';
    input.addEventListener('focus', function () {
      input.closest('.spz-input-wrap').classList.remove('has-value');
      input.closest('.spz-input-wrap').classList.add('focused');
    });
    input.addEventListener('blur', function () {
      if (input.value.length > 0) {
        input.closest('.spz-input-wrap').classList.remove('focused');
        input.closest('.spz-input-wrap').classList.add('has-value');
      } else {
        input.closest('.spz-input-wrap').classList.remove('focused');
      }
    });
    input.addEventListener('input', function () {
      if (input.classList.contains('hard-error')) { return; }
      if (!input.value.length > 0) {
        input.closest('.spz-input-wrap').classList.add('has-error');
      } else {
        input.closest('.spz-input-wrap').classList.remove('has-error');
      }
      const inputType = input.getAttribute('type');
      if (inputType === 'email') {
        if (!validateEmail(input.value)) {
          input.closest('.spz-input-wrap').classList.add('has-error');
          input.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'Please enter a valid email address.';
        } else {
          input.closest('.spz-input-wrap').classList.remove('has-error');
          input.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'Please enter an email.';
        }
      }
    });
  }

  function findParent(inputSelector) {
    const input = document.querySelector(inputSelector);
    if (!input) { return null; }
    let currentElement = input;
    while (currentElement && currentElement.tagName !== 'BODY') {
      const label = currentElement.querySelector('label');
      const containsInput = currentElement.contains(input);
      if (label && containsInput) { return currentElement; }
      currentElement = currentElement.parentElement;
    }
    return input.parentElement;
  }

  /* ------------------------------------------------------------------ */
  /*  QUALIFYING QUESTIONS (ported from #5011)                          */
  /* ------------------------------------------------------------------ */
  function addQualifyingQuestions() {
    if (document.querySelector('.edition_copy')) { return; }
    if (!document.querySelector('form')) { return; }

    document.querySelector('form').parentElement.parentElement.insertAdjacentHTML(
      'afterbegin',
      '<div class="edition_copy">New 2026 Edition</div>' +
      '<div class="invoice_logo">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">' +
      '<g clip-path="url(#clip0_24170_2223)">' +
      '<path d="M35.3524 0.532959L15.2035 30.8636C15.2035 30.8636 14.241 32.9716 12.5149 30.5773C10.7888 28.175 1.29103 14.8352 1.29103 14.8352C1.29103 14.8352 -0.82488 12.1466 2.34103 13.7773L12.0297 17.5239C12.0297 17.5239 14.3365 18.6773 16.5399 16.6568C18.7513 14.6443 35.3444 0.532959 35.3444 0.532959H35.3524Z" fill="#F15320"/>' +
      '</g><defs><clipPath id="clip0_24170_2223"><rect width="35" height="32" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>' +
      '</div>'
    );

    document.querySelector('.focus-header h1').insertAdjacentHTML(
      'afterend',
      '<p class="final_step_subheader" style="display: none;">Awesome! Invoice Simple is perfect for <span></span>.</p>'
    );

    document.querySelector('form').classList.add('spz-hidden');
    document.querySelector('.focus-footer').classList.add('spz-hidden');

    document.querySelector('form').insertAdjacentHTML(
      'beforebegin',
      '<div class="progress_bar"></div>' +
      '<div class="qlf_wrapper"><div class="questions-wrap">' +
      triageData.map(function (item, index) {
        const spzHiddenClass = index !== 0 ? 'spz-hidden' : '';
        return (
          '<div class="question-item question-' + (index + 1) + ' ' + spzHiddenClass + '">' +
          '<div class="question-heading">' + item.questionHeading + '</div>' +
          '<div class="answers-wrap">' +
          item.answers.map(function (itemm) {
            const altText = itemm.answerText.replace('<br>', '');
            return (
              '<div class="answer-item">' +
              '<div class="answer-checkbox"></div>' +
              '<img class="default" src="' + itemm.answerImage1 + '" alt="' + altText + '" />' +
              '<img class="active" src="' + itemm.answerImage2 + '" alt="' + altText + '" />' +
              '<div class="answer-text">' + itemm.answerText + '</div>' +
              '</div>'
            );
          }).join('') +
          '</div>' +
          '<div class="next-question">Next</div>' +
          '</div>'
        );
      }).join('') +
      '</div></div>'
    );

    document.querySelector('.question-item.question-2').classList.add('spz-hidden');

    if (localStorage.getItem(config.filledKey)) {
      document.body.classList.add('spz-hide-qualifying-q');
      document.querySelector('.focus-container').classList.add('step-3');
      document.querySelector('.qlf_wrapper').classList.add('spz-hidden');
      document.querySelector('form').classList.remove('spz-hidden');
      document.querySelector('.focus-footer').classList.remove('spz-hidden');
      return;
    }

    /* restore previous selections */
    const selectedQ1 = localStorage.getItem(config.q1Key);
    const selectedQ2 = JSON.parse(localStorage.getItem(config.q2Key)) || [];
    if (selectedQ1) {
      const q1Items = document.querySelectorAll('.question-item.question-1 .answer-item');
      if (q1Items[selectedQ1]) { q1Items[selectedQ1].classList.add('checked'); }
    }
    if (selectedQ2.length > 0) {
      const q2Items = document.querySelectorAll('.question-item.question-2 .answer-item');
      selectedQ2.forEach(function (idx) { if (q2Items[idx]) { q2Items[idx].classList.add('checked'); } });
    }

    document.querySelectorAll('.question-item.question-1 .answer-item').forEach(function (item, index) {
      item.addEventListener('click', function (e) {
        document.querySelectorAll('.question-item.question-1 .answer-item').forEach(function (ele) { ele.classList.remove('checked'); });
        e.currentTarget.classList.add('checked');
        localStorage.setItem(config.q1Key, index);
      });
    });

    document.querySelectorAll('.question-item.question-2 .answer-item').forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.toggle('checked');
        const checkedIndices = Array.from(document.querySelectorAll('.question-item.question-2 .answer-item'))
          .map(function (el, idx) { return el.classList.contains('checked') ? idx : null; })
          .filter(function (i) { return i !== null; });
        localStorage.setItem(config.q2Key, JSON.stringify(checkedIndices));
      });
    });

    document.querySelector('.question-item.question-1 .next-question').addEventListener('click', function () {
      document.querySelector('.focus-container').classList.add('step-2');
      document.querySelector('.question-item.question-1').classList.add('spz-hidden');
      document.querySelector('.question-item.question-2').classList.remove('spz-hidden');
    });

    document.querySelector('.question-item.question-2 .next-question').addEventListener('click', function () {
      document.querySelector('.qlf_wrapper').classList.add('spz-hidden');
      document.querySelector('.focus-body form').classList.remove('spz-hidden');
      document.querySelector('.focus-footer').classList.remove('spz-hidden');
      document.querySelector('.focus-container').classList.remove('step-2');
      document.querySelector('.focus-container').classList.add('step-3');
      document.querySelector('.final_step_subheader').style.display = 'block';

      const q1Checked = document.querySelector('.question-item.question-1 .answer-item.checked');
      const q2Checked = document.querySelector('.question-item.question-2 .answer-item.checked');
      const subheader = document.querySelector('.final_step_subheader');

      if (q1Checked && q2Checked) {
        if (q1Checked.querySelector('.answer-text').textContent === 'Other' && q2Checked.querySelector('.answer-text').textContent === 'Other') {
          subheader.innerHTML = 'Awesome! Sign up and start invoicing!';
        } else if (q1Checked.querySelector('.answer-text').textContent === 'Other') {
          subheader.querySelector('span').innerHTML = q2Checked.querySelector('.answer-text').textContent;
          subheader.innerHTML = subheader.innerHTML.replace(' for', ' to');
        } else {
          subheader.querySelector('span').innerHTML = q1Checked.querySelector('.answer-text').textContent;
          subheader.innerHTML = subheader.innerHTML.replace(' to', ' for');
        }
      } else if (q1Checked) {
        if (q1Checked.querySelector('.answer-text').textContent === 'Other') {
          subheader.innerHTML = 'Awesome! Sign up and start invoicing!';
        } else {
          subheader.querySelector('span').innerHTML = q1Checked.querySelector('.answer-text').textContent;
          subheader.innerHTML = subheader.innerHTML.replace(' to', ' for');
        }
      } else if (q2Checked) {
        if (q2Checked.querySelector('.answer-text').textContent === 'Other') {
          subheader.innerHTML = 'Awesome! Sign up and start invoicing!';
        } else {
          subheader.querySelector('span').innerHTML = q2Checked.querySelector('.answer-text').textContent;
          subheader.innerHTML = subheader.innerHTML.replace(' for', ' to');
        }
      } else {
        subheader.innerHTML = 'Awesome! Sign up and start invoicing!';
      }

      document.querySelectorAll('.spz-input-wrap input').forEach(function (input) {
        input.addEventListener('input', function () {
          if (input.classList.contains('hard-error')) { return; }
          if (!input.value.length > 0) {
            input.closest('.spz-input-wrap').classList.add('has-error');
          } else {
            input.closest('.spz-input-wrap').classList.remove('has-error');
          }
          const inputType = input.getAttribute('type');
          if (inputType === 'email') {
            if (!validateEmail(input.value)) {
              input.closest('.spz-input-wrap').classList.add('has-error');
              input.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'Please enter a valid email address.';
            } else {
              input.closest('.spz-input-wrap').classList.remove('has-error');
              input.closest('.spz-input-wrap').querySelector('.error-message').innerHTML = 'Please enter an email.';
            }
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /*  NEW SPLIT-SCREEN PANEL (#5018)                                     */
  /* ------------------------------------------------------------------ */
  function buildPanel() {
    const a = config.assets;
    return (
      '<div class="spz-5018-section">' +
        '<picture class="spz-5018-bg" aria-hidden="true">' +
          '<source media="(max-width: 767.98px)" srcset="' + a.bg360 + '">' +
          '<source media="(max-width: 1023.98px)" srcset="' + a.bg768 + '">' +
          '<img src="' + a.bg1440 + '" alt="">' +
          '<img class="bg_step2" src="' + a.bg1440_2 + '" alt="">' +
        '</picture>' +
        '<div class="spz-5018-panel">' +
          '<div class="spz-5018-hero">' +
            '<h2 class="spz-5018-title">Streamline every step of invoicing</h2>' +
            '<ul class="spz-5018-bullets">' +
              '<li class="spz-5018-bullet">' +
                '<img class="spz-5018-check" src="' + a.check + '" alt="check mark" width="28" height="28">' +
                '<p class="spz-5018-bullet-text"><strong>Send invoices in seconds.</strong> 60+ templates for any industry. Add due dates, photos, and signatures. Automate recurring invoices.</p>' +
              '</li>' +
              '<li class="spz-5018-bullet">' +
                '<img class="spz-5018-check" src="' + a.check + '" alt="check mark" width="28" height="28">' +
                '<p class="spz-5018-bullet-text"><strong>Accept online payments.</strong> Card, PayPal, Apple Pay, Google Pay, and more. Send reminders. Get notified when clients pay.</p>' +
              '</li>' +
              '<li class="spz-5018-bullet">' +
                '<img class="spz-5018-check" src="' + a.check + '" alt="check mark" width="28" height="28">' +
                '<p class="spz-5018-bullet-text"><strong>Manage invoices and clients.</strong> Track unpaid invoices. Generate income reports. Add expenses. Request customer reviews.</p>' +
              '</li>' +
            '</ul>' +
          '</div>' +
          '<div class="spz-5018-features">' +
            '<div class="spz-5018-feature">' +
              '<img class="spz-5018-feature-icon" src="' + a.iconReduce + '" alt="Reduce paperwork" width="51" height="51">' +
              '<span class="spz-5018-feature-label">Reduce paperwork</span>' +
            '</div>' +
            '<div class="spz-5018-feature">' +
              '<img class="spz-5018-feature-icon" src="' + a.iconPaid + '" alt="Get paid faster" width="51" height="51">' +
              '<span class="spz-5018-feature-label">Get paid faster</span>' +
            '</div>' +
            '<div class="spz-5018-feature">' +
              '<img class="spz-5018-feature-icon" src="' + a.iconGrow + '" alt="Grow revenue" width="51" height="51">' +
              '<span class="spz-5018-feature-label">Grow revenue</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function addSplitPanel() {
    const container = document.querySelector('.focus-container');
    if (!container) { return; }
    if (container.querySelector(config.guard)) { return; }

    /* wrap the existing (form) content so the new panel can sit beside it */
    const formSide = document.createElement('div');
    formSide.className = 'spz-5018-form-side';
    while (container.firstChild) { formSide.appendChild(container.firstChild); }
    container.appendChild(formSide);

    /* inject the panel directly after the form side (afterend) */
    formSide.insertAdjacentHTML('afterend', buildPanel());
  }

  /* ------------------------------------------------------------------ */
  /*  RUN                                                                */
  /* ------------------------------------------------------------------ */
  function runVariant() {
    if (document.body.classList.contains(config.bodyClass) && document.querySelector(config.guard)) { return; }
    applyTracking();
    updateForm();
    animateLabels(config.inputs);
    addQualifyingQuestions();
    addSplitPanel();
  }

  function init() {
    if (location.pathname !== config.urlMatch) { return; }
    waitForElm(config.formSelector, function (form) {
      if (form.querySelectorAll('input').length > 0) {
        runVariant();
      } else {
        waitForElm(config.formSelector + ' input', runVariant);
      }
    });
  }

  /* SPA navigation support */
  if (!window.__spz5018loc) {
    window.__spz5018loc = true;
    (function (history) {
      ['pushState', 'replaceState'].forEach(function (type) {
        const orig = history[type];
        history[type] = function () {
          const result = orig.apply(this, arguments);
          window.dispatchEvent(new Event('locationchange'));
          return result;
        };
      });
    })(window.history);
    window.addEventListener('popstate', function () { window.dispatchEvent(new Event('locationchange')); });
  }
  window.addEventListener('locationchange', function () {
    if (location.pathname === config.urlMatch) {
      init();
    } else if (document.body) {
      removeVariantHTML();
    }
  });

  init();
})();