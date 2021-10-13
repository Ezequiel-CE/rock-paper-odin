//Metodos

// desicion de pc

const computerPlay = function () {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissor";
  }
};

// escoge los iconos segun el parametro

const updateIco = (player, computer) => {
  switch (player) {
    case "rock":
      playerICO.textContent = "✊";
      break;
    case "paper":
      playerICO.textContent = "🖐️";
      break;
    case "scissor":
      playerICO.textContent = "✌️";
      break;
    default:
      playerICO.textContent = "💩";
  }

  switch (computer) {
    case "rock":
      ComputerICO.textContent = "✊";
      break;
    case "paper":
      ComputerICO.textContent = "🖐️";
      break;
    case "scissor":
      ComputerICO.textContent = "✌️";
      break;
    default:
      ComputerICO.textContent = "💩";
  }
};

const updateWinner = (winner) => {};

//jugar round

const playRound = function (playerC, computerC) {
  let roundWinner = "";
  //tie

  if (playerC === computerC) {
    announcer.textContent = "Tie";
    playerICO.textContent = "💩";
    ComputerICO.textContent = "💩";
  }

  //rock

  if (playerC === "rock" && computerC === "scissor") {
    roundWinner = "player";
    announcer.textContent = `Player win, ${playerC} beats ${computerC}`;
    playerScore++;
    playerScoreIco.textContent = playerScore;
  }
  if (playerC === "rock" && computerC === "paper") {
    announcer.textContent = `Player Lose, ${playerC} lose to ${computerC}`;
    computerScore++;
    cpuScoreIco.textContent = computerScore;
  }

  //paper

  if (playerC === "paper" && computerC === "rock") {
    announcer.textContent = `Player win, ${playerC} beats ${computerC}`;
    playerScore++;
    playerScoreIco.textContent = playerScore;
  }
  if (playerC === "paper" && computerC === "scissor") {
    announcer.textContent = `Player Lose, ${playerC} lose to ${computerC}`;
    computerScore++;
    cpuScoreIco.textContent = computerScore;
  }

  //scissor

  if (playerC === "scissor" && computerC === "paper") {
    announcer.textContent = `Player win, ${playerC} beats ${computerC}`;
    playerScore++;
    playerScoreIco.textContent = playerScore;
  }
  if (playerC === "scissor" && computerC === "rock") {
    announcer.textContent = `Player Lose, ${playerC} lose to ${computerC}`;
    computerScore++;
    cpuScoreIco.textContent = computerScore;
  }
};

//se dispara al apretar

const buttoPress = (e) => {
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = computerPlay();

  if (playerScore === 5) {
    playerICO.textContent = "😄";
    ComputerICO.textContent = "💥";
    announcer.textContent = "Player wins";
    return;
  }

  if (computerScore === 5) {
    playerICO.textContent = "🤕";
    ComputerICO.textContent = "🤖";
    announcer.textContent = "CPU wins";
    return;
  }

  updateIco(playerChoice, computerChoice);
  playRound(playerChoice, computerChoice);
};

//variables de juego

let playerScore = 0;
let computerScore = 0;

//Dom elements

const btns = [...document.querySelectorAll(".options")];
const announcer = document.querySelector("h2");
const playerICO = document.querySelector(".player .icon");
const ComputerICO = document.querySelector(".cpu .icon");
const playerScoreIco = document.querySelector(".player .score");
const cpuScoreIco = document.querySelector(".cpu .score");

//

btns.forEach((btn) => {
  btn.addEventListener("click", buttoPress);
});
