const label = document.querySelector('.label');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let number = Math.floor(Math.random() * 100);
  console.log(number);
  label.innerHTML = number;
});
