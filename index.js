const btnToggle = document.querySelector('.btn-toggle');
const body = document.querySelector('body');

btnToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

