const pswInput = document.querySelector('#password');
const switchBtn = document.querySelector('.switch-btn');
switchBtn.addEventListener('click', togglePswVisibility);

function togglePswVisibility() {
  const isHide = pswInput.type === 'password';
  pswInput.setAttribute('type', isHide ? 'text' : 'password');
  switchBtn.setAttribute('name', isHide ? 'eye-outline' : 'eye-off-outline');
}

