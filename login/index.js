const user = document.querySelector('username');

const btn = document.querySelector('.btn-submit');

function clickEventHandler() {
  console.log(user);
  user === 'admin@gmail.com'
    ? (window.location.href = 'https://www.google.com/')
    : (window.location.href = 'https://www.youtube.com/');
}

btn.addEventListener('click', clickEventHandler);
