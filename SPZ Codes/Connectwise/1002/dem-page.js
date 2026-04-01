/* ---------------- DEMO PAGE ---------------- */

function populateDemoEmail() {
  var email = new URLSearchParams(location.search).get('email') || getEmail();
  if (!email) return;

  saveEmail(email);


  tryPopulate();
  setTimeout(tryPopulate, 500);
  setTimeout(tryPopulate, 1500);
}
function tryPopulate() {
  var selectors = [
    '#Email',
  ];
  selectors.forEach(function(sel) {
    var field = document.querySelector(sel);
    if (field && !field.value) {
      field.value = email;
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
}
function getEmail() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY) || '';
  } catch (e) {
    return '';
  }
}
function saveEmail(email) {
  try {
    var v = email.trim();
    sessionStorage.setItem(STORAGE_KEY, v);
    localStorage.setItem(STORAGE_KEY, v);
  } catch (e) {}
}