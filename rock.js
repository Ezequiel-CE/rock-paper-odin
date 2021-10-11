// desicion de pc

const computerPlay = function () {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
};

//jugar round

const playRound = function (playerC, computerC) {
  //tie

  if (playerC === computerC) {
    return "it a tie";
  }

  //rock

  if (playerC === "rock" && computerC === "scissor") {
    return `Player win, ${playerC} beats ${computerC}`;
  }
  if (playerC === "rock" && computerC === "paper") {
    return `Player Lose, ${playerC} lose to ${computerC}`;
  }

  //paper

  if (playerC === "paper" && computerC === "rock") {
    return `Player win, ${playerC} beats ${computerC}`;
  }
  if (playerC === "paper" && computerC === "scissor") {
    return `Player Lose, ${playerC} lose to ${computerC}`;
  }

  //scissor

  if (playerC === "scissor" && computerC === "paper") {
    return `Player win, ${playerC} beats ${computerC}`;
  }
  if (playerC === "scissor" && computerC === "rock") {
    return `Player Lose, ${playerC} lose to ${computerC}`;
  }
};

//elecciones

const playerChoice = prompt("choice Rock,Paper or Scissor").toLowerCase();
const computer_Choice = computerPlay().toLowerCase();

console.log(`player ${playerChoice} / cpu ${computer_Choice}`);

console.log(playRound(playerChoice, computer_Choice));
