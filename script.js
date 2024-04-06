const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  navigator.clipboard.writeText('SummerSpl');
  alert('SummerSpl is saved in your clipboard.');
});
