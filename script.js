const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#navLinks');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
function updateChinaTime(){
  const now = new Date().toLocaleTimeString('en-GB', {timeZone:'Asia/Shanghai', hour12:true});
  document.querySelector('#chinaTime').textContent = `China time: ${now}`;
}
updateChinaTime();
setInterval(updateChinaTime, 1000);
document.querySelector('#year').textContent = new Date().getFullYear();
