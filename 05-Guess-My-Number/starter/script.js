'use strict';

document.querySelector('.message');
document.querySelector('.message').textContent = '🎉Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // const answer = Number(document.querySelector('.number').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }

  // if (guess === answer) console.log('correct');
  // else console.log('not correct');
});
