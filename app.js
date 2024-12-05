const body = document.body;
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  body.style.background = input.value;
  //   btn.style.background = input.value
});
