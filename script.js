'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // when there's no input
    if (!guess) {
      displayMessage('No number! 🚫');
    }
    // when the player wins
    else if (guess === secretNumber) {
      displayMessage('Correct Number! 🥳');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
    // when the player guesses a lower number
    else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // when the player loses
    else {
      displayMessage('You lost the game! 🤣');
      document.querySelector('.score').textContent = 0;
    }
  }
});
