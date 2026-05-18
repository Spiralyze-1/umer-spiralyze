function inject6009Tc() {
  if (document.body.classList.contains('spz_6009_tc')) return;
  document.body.classList.add('spz_6009_tc');
  if (document.querySelector('#se-form-button')) {
    document.querySelector('#se-form-button').classList.add('spz6009_tc');
  }
  if (document.querySelector('a[href="#formjump"]')) {
    document.querySelector('a[href="#formjump"]').classList.add('spz6009_tc', 'bill_vs_other');
  }
  if (document.querySelector('body>div:nth-of-type(2) .feature-content-wrapper a[href="#formjumplink"]')) {
    document.querySelector('body>div:nth-of-type(2) .feature-content-wrapper a[href="#formjumplink"]').classList.add('spz6009_tc', 'rewards');
  }
  if (document.querySelector('body>div:nth-of-type(4) .feature-content-wrapper a[href="#formjumplink"]')) {
    document.querySelector('body>div:nth-of-type(4) .feature-content-wrapper a[href="#formjumplink"]').classList.add('spz6009_tc', 'free_software');
  }
  if (document.querySelector('body>section.background-color-light-grey a[href="#formjumplink"]')) {
    document.querySelector('body>section.background-color-light-grey a[href="#formjumplink"]').classList.add('spz6009_tc');
  }
  localStorage.setItem('bdcAbTest12', '6009-con');
}

const bodyInterval6009 = setInterval(() => {
  if (document.querySelector('body') && !document.querySelector('.spz_6009_v') && document.body.children.length > 1) {
    clearInterval(bodyInterval6009);
    inject6009Tc();
  }
}, 10);
