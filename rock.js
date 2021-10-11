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
    playerScore++;
    return `Player win, ${playerC} beats ${computerC}`;
  }
  if (playerC === "rock" && computerC === "paper") {
    computerScore++;
    return `Player Lose, ${playerC} lose to ${computerC}`;
  }

  //paper

  if (playerC === "paper" && computerC === "rock") {
    playerScore++;
    return `Player win, ${playerC} beats ${computerC}`;
  }
  if (playerC === "paper" && computerC === "scissor") {
    computerScore++;
    return `Player Lose, ${playerC} lose to ${computerC}`;
  }

  //scissor

  if (playerC === "scissor" && computerC === "paper") {
    playerScore++;
    return `Player win, ${playerC} beats ${computerC}`;
  }
  if (playerC === "scissor" && computerC === "rock") {
    computerScore++;
    return `Player Lose, ${playerC} lose to ${computerC}`;
  }
};

//juego

const game = function () {
  //loop
  for (let i = 1; i <= 5; i++) {
    //elecciones

    const playerChoice = prompt("choice Rock,Paper or Scissor").toLowerCase();
    const computer_Choice = computerPlay().toLowerCase();
    console.log(playRound(playerChoice, computer_Choice));
    console.log(`player score: ${playerScore} / cpu score: ${computerScore}`);
    console.log("++++++++++++++++++++++++++++++++++++++++++");
  }
};

let playerScore = 0;
let computerScore = 0;

game();
