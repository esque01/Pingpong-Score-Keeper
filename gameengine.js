const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector('#p1Display')
}
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector('#p2Display')
}

// target score
let target = 3;

// reset & score goal
const resetButton = document.querySelector('#reset');
const scoreGoal = document.querySelector('#goal');

let isGameOver = false;

p1.button.addEventListener('click', function (e) {
  updateScores(p1, p2);
});

resetButton.addEventListener('click', reset);

p2.button.addEventListener('click', function (e) {
  updateScores(p2, p1);
});

scoreGoal.addEventListener('change', function (e) {
  reset();
  target = parseInt(this.value);
})

function reset() {
  isGameOver = false;

  for (let player of [p1, p2]) {
    player.score = 0;
    player.display.textContent = 0;
    player.display.classList.remove('has-text-success', 'has-text-danger');
    player.button.disabled = false;
  }
}

function updateScores(player, opponent) {

  if (!isGameOver) {
    player.score++;
    let diff = Math.abs(player.score - opponent.score);
    console.log(diff);
    if (player.score === target && diff >= 2) {
      endGame(); 
    } else if (player.score >= target && diff >= 2) {
      endGame(); 
    }
    player.display.textContent = player.score;
  }
}

function endGame() {
  isGameOver = true;
  p1.display.classList.add('has-text-success')
  p2.display.classList.add('has-text-danger');
  p1.button.disabled = true;
  p2.button.disabled = true;
}