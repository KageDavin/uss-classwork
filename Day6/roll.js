 
let rollCount = 0;
let totalScore = 0;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

document.getElementById('rollAll').addEventListener('click', () => {
  const dice1 = rollDice();
  const dice2 = rollDice();
  const diceTotal = dice1 + dice2;

  rollCount += 1;
  totalScore += diceTotal;

  document.getElementById('diceOne').innerText = dice1;
  document.getElementById('diceTwo').innerText = dice2;
  document.getElementById('diceSum').innerText = diceTotal;
  document.getElementById('rollCount').innerText = rollCount;
  document.getElementById('totalScore').innerText = totalScore;

  if (totalScore >= 100) {
    alert(`🎉 You reached 100 in ${rollCount} rolls!`);
   
    // document.getElementById('rollAll').disabled = true;
  }
});


document.getElementById('rollAll').addEventListener('click', () => {
  const dice1 = rollDice();
  const dice2 = rollDice();
  const diceTotal = dice1 + dice2;

  rollCount += 1;
  totalScore += diceTotal;

  document.getElementById('diceOne').innerText = dice1;
  document.getElementById('diceTwo').innerText = dice2;
  document.getElementById('diceSum').innerText = diceTotal;
  document.getElementById('rollCount').innerText = rollCount;
  document.getElementById('totalScore').innerText = totalScore;

  if (totalScore >= 100) {
    alert(`🎉 You reached 100 in ${rollCount} rolls!`);
   
   document.getElementById('rollAll').disabled = true;
  }
});
