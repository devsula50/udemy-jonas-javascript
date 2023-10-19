'use strict';

/*document.querySelector('.message');
document.querySelector('.message').textContent = '🎉Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //When there is no input
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    //When player wins
    document.querySelector('.message').textContent = '🎉Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    // When guess is too high
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  } else if (guess < secretNumber) {
    // When guess is too low
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});
