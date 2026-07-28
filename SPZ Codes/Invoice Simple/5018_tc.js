var inputsSelectors = ["#firstName", "#lastName", "#email", "#password"]

const template_triageData = [
  //Question 1 start
  {
    questionHeading: "What best describes you?",
    answers: [
      {
        answerText: `Freelancer`,
        answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__freelance_-_default.svg',
        answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__freelance_-_active.svg'
      },
      {
        answerText: `Contractor`,
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
        answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447471/invoicesimple/5011/icon__other_-_active.svg',
      }
    ]
  },
  //Question 1 end
  //Question 2 start
  {
    questionHeading: "How can we help?",
    answers: [
      {
        answerText: `Build Professional<br> Invoices Fast`,
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
        answerText: `Other`,
        answerImage1: '//res.cloudinary.com/spiralyze/image/upload/v1755447472/invoicesimple/5011/icon__other_-_default_1.svg',
        answerImage2: '//res.cloudinary.com/spiralyze/image/upload/v1755447472/invoicesimple/5011/icon__other_-_active_1.svg',
      }
    ]
  }
  //Question 2 end
]

var formLoaded = setInterval(() => {
  if (
    document.querySelector('form')
    && document.querySelectorAll(`form input`).length > 0
  ) {
    clearInterval(formLoaded);
    updateForm();
    animateLabels(inputsSelectors);
    addQualifyingQuestions();
  }
})
function updateForm() {
  document.querySelector('body').classList.add('spz_5011_v1');
  document.querySelector('body').classList.add('v1');
  //On IOS body class is being removed
  //Muatation observer will track body class and add class back if removed
  const checkBodyClass = new MutationObserver(() => {
    if (!document.body.classList.contains('spz_5011_v1') && window.location.pathname == '/signup') {
      //document.body.classList.add('spz_5011_v1');

      updateForm();
      animateLabels(inputsSelectors);
      addQualifyingQuestions();

      checkBodyClass.disconnect(); // Stop observing after adding the class
    } else if (document.body.classList.contains('spz_5011_v1') && window.location.pathname !== '/signup') {
      document.body.classList.remove('spz_5011_v1');
    }
  });
  checkBodyClass.observe(document.body, { attributes: true, childList: true, subtree: true });
  //add font
  document.head.insertAdjacentHTML('beforeend', `
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Source+Sans+3&display=swap" rel="stylesheet">
            `);
  //form stop default validation
  document.querySelector('.signup .focus-body form').setAttribute('novalidate', 'novalidate');
  //update logo
  let logoWrap = document.querySelector('.signup .focus-header .brand img');
  if (logoWrap) {
    logoWrap.setAttribute("src", "//res.cloudinary.com/spiralyze/image/upload/v1729141823/invoicesimple/5001/logo__desktop.svg");
  }
  //update terms
  let terms = document.querySelector('.signup #showmore p');
  if (terms) {
    terms.innerHTML = "<label for='consent'>I want to receive emails from Invoice Simple and its Affiliates about their products, services, news, events, and promotions.</label>";
  }
  //update CTA text
  let ctaText = document.querySelector('.signup form button[type="submit"]');
  if (ctaText) {
    ctaText.innerHTML = "FREE Instant access";
  }

  //validate email
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  var checkInputs = setInterval(() => {
    if (document.querySelectorAll('.spz-input-wrap input')) {
      clearInterval(checkInputs);
      var allInputs = document.querySelectorAll('.spz-input-wrap input');
      allInputs.forEach((input) => {
        if (input.value.length > 0) {
          input.closest('.form-group').classList.add('has-value');
        }
        input.addEventListener('keyup', function () {
          if (allInputs[0].value.length > 0
            && allInputs[1].value.length > 0
            && allInputs[2].value.length > 0
            && validateEmail(allInputs[2].value)
          ) {
            input.closest('form').classList.add('show-all');
          }
        });
      })
    }
  }, 100);

  /* check input value on page load */
  /* show all fields if condition is true */
  let checkfieldValue = setInterval(() => {
    var allInputs = document.querySelectorAll('.spz-input-wrap input');
    if (allInputs[0].value.length > 0
      && allInputs[1].value.length > 0
      && allInputs[2].value.length > 0
      && validateEmail(allInputs[2].value)
    ) {
      clearInterval(checkfieldValue);
      allInputs[0].closest('form').classList.add('show-all');
    }
  }, 100);
  setTimeout(() => {
    clearInterval(checkfieldValue);
  }, 5000);

  document.addEventListener('click', function (e) {
    if (e.target.closest('form button[type="submit"]') && e.target.closest('form').querySelectorAll(`input`).length > 0) {
      let allInputs = document.querySelectorAll('.spz-input-wrap input');
      allInputs.forEach((input) => {
        if (input.classList.contains('hard-error')) { return }
        if (!input.value.length > 0) {
          input.closest(".spz-input-wrap").classList.add('has-error');
        }
        else {
          input.closest(".spz-input-wrap").classList.remove('has-error');
        }
        let inputType = input.getAttribute('type');
        if (inputType == 'email') {
          if (!validateEmail(input.value)) {
            input.closest(".spz-input-wrap").classList.add('has-error');
            input.closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "Please enter a valid email address.";
          }
          else {
            input.closest(".spz-input-wrap").classList.remove('has-error');
            input.closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "Please enter an email.";
          }
        }
      });
    }
  });
  //show specia errors on email and password
  let controlError = document.querySelector('.signup .is-alert');
  const errorObserver = new MutationObserver(() => {
    let errorText = controlError.querySelector('.container div div').innerText;
    if (errorText.includes('already exists')) {//email error
      document.querySelector('.spz-input-wrap input[type="email"]').closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "This email is already in use.";
      document.querySelector('.spz-input-wrap input[type="email"]').closest(".spz-input-wrap").classList.add('has-error');
      document.querySelector('.spz-input-wrap input[type="email"]').classList.add('hard-error');
      document.querySelector('.spz-input-wrap input[type="password"]').closest(".spz-input-wrap").classList.remove('hard-error', 'has-error');
    } else if (errorText.includes('couldn’t verify your signup')) {
      document.querySelector('.spz-input-wrap input[type="email"]').closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "We couldn’t verify your signup. Please try again.";
      document.querySelector('.spz-input-wrap input[type="email"]').closest(".spz-input-wrap").classList.add('has-error');
      document.querySelector('.spz-input-wrap input[type="email"]').classList.add('hard-error');
      document.querySelector('.spz-input-wrap input[type="password"]').closest(".spz-input-wrap").classList.remove('hard-error', 'has-error');
    }
    else if (errorText.includes('must have at least 6')) {//password error
      document.querySelector('.spz-input-wrap input[type="password"]').closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "Password must be at least 6 characters.";
      document.querySelector('.spz-input-wrap input[type="password"]').closest(".spz-input-wrap").classList.add('has-error');
      document.querySelector('.spz-input-wrap input[type="password"]').classList.add('hard-error');
      document.querySelector('.spz-input-wrap input[type="email"]').closest(".spz-input-wrap").classList.remove('hard-error', 'has-error');
    }
    else if (document.querySelector('hard-error')) {
      document.querySelector('.spz-input-wrap .hard-error').classList.remove('hard-error');
    }
    if (document.querySelector('.is-alert.alert-success')) {
      localStorage.setItem('spz-5011-form-filled', 'true');
    }
  });
  errorObserver.observe(document.querySelector('.signup .is-alert'), { characterData: true, attributes: true, childList: true, subtree: true })
  //add custom styles
  document.head.insertAdjacentHTML('beforeend', `
            <style>
            
            </style>
            `);
};
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//Helper function to animate labels for inputs
function animateLabels(inputs) {
  inputs.forEach((item) => {
    const parentDiv = findParent(item);
    if (!parentDiv) return; // Skip if we can't find a suitable parent
    // Check if we've already added our custom label
    if (parentDiv.querySelector('.label-spz')) return;
    const existingLabel = parentDiv.querySelector('label:not(.label-spz)');
    if (existingLabel) existingLabel.classList.add('label-spz');
    existingLabel.classList.add(`label-spz-${item.replace(/[^a-zA-Z0-9]/g, '')}`);
    parentDiv.classList.add('spz-input-wrap');
    //add an error message
    parentDiv.insertAdjacentHTML('beforeend', `<div class="error-message">Please enter a ${existingLabel.innerText.toLowerCase()}.</div>`);
    addInputListener(document.querySelector(item));
  });
}
//Helper function to add input listeners like focus, blur and add class to parent div
function addInputListener(input) {
  input.placeholder = "";
  input.addEventListener("focus", function () {
    input.closest(".spz-input-wrap").classList.remove("has-value");
    input.closest(".spz-input-wrap").classList.add("focused");
  });
  input.addEventListener("blur", function () {
    if (input.value.length > 0) {
      input.closest(".spz-input-wrap").classList.remove("focused");
      input.closest(".spz-input-wrap").classList.add("has-value");
    } else {
      input.closest(".spz-input-wrap").classList.remove("focused");
    }
  });
  input.addEventListener("input", function () {
    if (input.classList.contains('hard-error')) { return }
    if (!input.value.length > 0) {
      input.closest(".spz-input-wrap").classList.add('has-error');
    }
    else {
      input.closest(".spz-input-wrap").classList.remove('has-error');
    }
    let inputType = input.getAttribute('type');
    if (inputType == 'email') {
      if (!validateEmail(input.value)) {
        input.closest(".spz-input-wrap").classList.add('has-error');
        input.closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "Please enter a valid email address.";
      }
      else {
        input.closest(".spz-input-wrap").classList.remove('has-error');
        input.closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "Please enter an email.";
      }
    }
  });
}
function findParent(inputSelector) {
  const input = document.querySelector(inputSelector);
  if (!input) return null;
  let currentElement = input;
  while (currentElement && currentElement.tagName !== 'BODY') {
    // Check if this element contains a label (including hidden ones)
    const label = currentElement.querySelector('label');
    // Check if this element contains the input or its wrapper
    const containsInput = currentElement.contains(input);
    // If we have both a label and the input, this is likely our target
    if (label && containsInput) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
  // If no suitable parent is found, return the immediate parent
  return input.parentElement;
}
function addQualifyingQuestions() {
  if (!document.querySelector('.edition_copy')) {
    document.querySelector('form').parentElement.parentElement.insertAdjacentHTML('afterbegin', `
            <div class="edition_copy">New 2026 Edition</div>
            <div class="invoice_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                    <g clip-path="url(#clip0_24170_2223)">
                        <path d="M35.3524 0.532959L15.2035 30.8636C15.2035 30.8636 14.241 32.9716 12.5149 30.5773C10.7888 28.175 1.29103 14.8352 1.29103 14.8352C1.29103 14.8352 -0.82488 12.1466 2.34103 13.7773L12.0297 17.5239C12.0297 17.5239 14.3365 18.6773 16.5399 16.6568C18.7513 14.6443 35.3444 0.532959 35.3444 0.532959H35.3524Z" fill="#F15320"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_24170_2223">
                        <rect width="35" height="32" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        `);
    document.querySelector('.focus-header h1').insertAdjacentHTML('afterend', `<p class="final_step_subheader" style="display: none;">Awesome! Invoice Simple is perfect for <span></span>.</p>`);
    document.querySelector('form').classList.add('spz-hidden');
    document.querySelector('.focus-footer').classList.add('spz-hidden');
    // Add Qualifying Questions
    document.querySelector('form').insertAdjacentHTML('beforebegin', `
            <div class="progress_bar"></div>
            <div class="qlf_wrapper">
                <div class="questions-wrap">
                    ${template_triageData.length !== 0
      && template_triageData.map((item, index) => {
        let spzHiddenClass = '';
        if (index !== 0) {
          spzHiddenClass = 'spz-hidden';
        }
        return `
                                                        <div class="question-item question-${index + 1} ${spzHiddenClass}}">
                                                            <div class="question-heading">${item.questionHeading}</div>
                                                            <div class="answers-wrap">
                                                                ${item.answers.map((itemm, indexx) => {
          return `
                                                                <div class="answer-item">
                                                                    <div class="answer-checkbox">
                                                                        
                                                                    </div>
                                                                    <img class="default" src="${itemm.answerImage1}" class="answer-image" alt="${itemm.answerText.replace('<br>', '')}" />
                                                                    <img class="active" src="${itemm.answerImage2}" class="answer-image" alt="${itemm.answerText.replace('<br>', '')}" />
                                                                    <div class="answer-text">${itemm.answerText}</div>
                                                                </div>
                                                                `
        }).join('')
          }
                                                            </div>
                                                            <div class="next-question">Next</div>
                                                        </div>
                                                        `
      }).join('')
      }
                </div>
            </div>    
        `);
    document.querySelector('.question-item.question-2').classList.add('spz-hidden');
    if (localStorage.getItem('spz-5011-form-filled')) {
      document.querySelector('body').classList.add('spz-hide-qualifying-q');
      document.querySelector('.focus-container').classList.add('step-3');
      document.querySelector('.qlf_wrapper').classList.add('spz-hidden');
      document.querySelector('form').classList.remove('spz-hidden');
      document.querySelector('.focus-footer').classList.remove('spz-hidden');
    } else {
      // Checking answers listener
      const selectedQ1 = localStorage.getItem('selectedQ1');
      const selectedQ2 = JSON.parse(localStorage.getItem('selectedQ2')) || [];
      if (selectedQ1) {
        const q1Items = document.querySelectorAll('.question-item.question-1 .answer-item');
        if (q1Items[selectedQ1]) {
          q1Items[selectedQ1].classList.add('checked');
        }
      }
      if (selectedQ2.length > 0) {
        const q2Items = document.querySelectorAll('.question-item.question-2 .answer-item');
        selectedQ2.forEach(idx => {
          if (q2Items[idx]) {
            q2Items[idx].classList.add('checked');
          }
        });
      }

      document.querySelectorAll('.question-item.question-1 .answer-item').forEach((item, index) => {
        item.addEventListener('click', (e) => {
          document.querySelectorAll('.question-item.question-1 .answer-item').forEach((ele) => {
            ele.classList.remove('checked');
          });
          const clickedItem = e.currentTarget;
          clickedItem.classList.add('checked');

          // Save selected index
          localStorage.setItem('selectedQ1', index);
        })
      })

      document.querySelectorAll('.question-item.question-2 .answer-item').forEach((item, index) => {
        item.addEventListener('click', (e) => {
          item.classList.toggle('checked');

          // Save all selected indices
          const checkedIndices = Array.from(
            document.querySelectorAll('.question-item.question-2 .answer-item')
          ).map((el, idx) => {
            if (el.classList.contains('checked')) {
              return idx;
            }
            return null;
          }).filter(i => i !== null);

          localStorage.setItem('selectedQ2', JSON.stringify(checkedIndices));
        })
      })

      //Next question click listener
      document.querySelector('.question-item.question-1 .next-question').addEventListener('click', (e) => {
        document.querySelector('.focus-container').classList.add('step-2');
        document.querySelector('.question-item.question-1').classList.add('spz-hidden');
        document.querySelector('.question-item.question-2').classList.remove('spz-hidden');
      });

      document.querySelector('.question-item.question-2 .next-question').addEventListener('click', (e) => {
        document.querySelector('.qlf_wrapper').classList.add('spz-hidden');
        document.querySelector('.focus-body form').classList.remove('spz-hidden');
        document.querySelector('.focus-footer').classList.remove('spz-hidden');
        document.querySelector('.focus-container').classList.remove('step-2');
        document.querySelector('.focus-container').classList.add('step-3');
        document.querySelector('.final_step_subheader').style.display = 'block';
        if (document.querySelector('.question-item.question-1 .answer-item.checked') && document.querySelector('.question-item.question-2 .answer-item.checked')) {
          if (document.querySelector('.question-item.question-1 .answer-item.checked .answer-text').textContent == 'Other' && document.querySelector('.question-item.question-2 .answer-item.checked .answer-text').textContent == 'Other') {
            document.querySelector('.final_step_subheader').innerHTML = 'Awesome! Sign up and start invoicing!';
          } else if (document.querySelector('.question-item.question-1 .answer-item.checked') && document.querySelector('.question-item.question-1 .answer-item.checked .answer-text').textContent == 'Other') {
            document.querySelector('.final_step_subheader span').innerHTML = document.querySelector('.question-item.question-2 .answer-item.checked .answer-text').textContent;
            document.querySelector('.final_step_subheader').innerHTML = document.querySelector('.final_step_subheader').innerHTML.replace(' for', ' to');
          } else {
            document.querySelector('.final_step_subheader span').innerHTML = document.querySelector('.question-item.question-1 .answer-item.checked .answer-text').textContent;
            document.querySelector('.final_step_subheader').innerHTML = document.querySelector('.final_step_subheader').innerHTML.replace(' to', ' for');
          }
        } else if (document.querySelector('.question-item.question-1 .answer-item.checked')) {
          if (document.querySelector('.question-item.question-1 .answer-item.checked .answer-text').textContent == 'Other') {
            document.querySelector('.final_step_subheader').innerHTML = 'Awesome! Sign up and start invoicing!';
          } else {
            document.querySelector('.final_step_subheader span').innerHTML = document.querySelector('.question-item.question-1 .answer-item.checked .answer-text').textContent;
            document.querySelector('.final_step_subheader').innerHTML = document.querySelector('.final_step_subheader').innerHTML.replace(' to', ' for');
          }
        } else if (document.querySelector('.question-item.question-2 .answer-item.checked')) {
          if (document.querySelector('.question-item.question-2 .answer-item.checked .answer-text').textContent == 'Other') {
            document.querySelector('.final_step_subheader').innerHTML = 'Awesome! Sign up and start invoicing!';
          } else {
            document.querySelector('.final_step_subheader span').innerHTML = document.querySelector('.question-item.question-2 .answer-item.checked .answer-text').textContent;
            document.querySelector('.final_step_subheader').innerHTML = document.querySelector('.final_step_subheader').innerHTML.replace(' for', ' to');
          }
        } else {
          document.querySelector('.final_step_subheader').innerHTML = 'Awesome! Sign up and start invoicing!';
        }

        document.querySelectorAll('.spz-input-wrap input').forEach((input) => {
          input.addEventListener("input", function () {
            if (input.classList.contains('hard-error')) { return }
            if (!input.value.length > 0) {
              input.closest(".spz-input-wrap").classList.add('has-error');
            }
            else {
              input.closest(".spz-input-wrap").classList.remove('has-error');
            }
            let inputType = input.getAttribute('type');
            if (inputType == 'email') {
              if (!validateEmail(input.value)) {
                input.closest(".spz-input-wrap").classList.add('has-error');
                input.closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "Please enter a valid email address.";
              }
              else {
                input.closest(".spz-input-wrap").classList.remove('has-error');
                input.closest(".spz-input-wrap").querySelector('.error-message').innerHTML = "Please enter an email.";
              }
            }
          });
        });
      });
    }
  }
}