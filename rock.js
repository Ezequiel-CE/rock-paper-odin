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

//actualiza los elementos del que pierde

const updateWinner = (winner) => {
  if (winner) {
    announcer.textContent = `Player win`;
    playerScore++;
    playerScoreIco.textContent = playerScore;
  } else {
    announcer.textContent = `Computer win`;
    computerScore++;
    cpuScoreIco.textContent = computerScore;
  }
};

//jugar round

const playRound = function (playerC, computerC) {
  let playerWin = null;
  //tie

  if (playerC === computerC) {
    announcer.textContent = "Tie";
    playerICO.textContent = "💩";
    ComputerICO.textContent = "💩";
    return;
  }

  //rock

  if (playerC === "rock" && computerC === "scissor") {
    playerWin = true;
  }
  if (playerC === "rock" && computerC === "paper") {
    playerWin = false;
  }

  //paper

  if (playerC === "paper" && computerC === "rock") {
    playerWin = true;
  }
  if (playerC === "paper" && computerC === "scissor") {
    playerWin = false;
  }

  //scissor

  if (playerC === "scissor" && computerC === "paper") {
    playerWin = true;
  }
  if (playerC === "scissor" && computerC === "rock") {
    playerWin = false;
  }

  updateWinner(playerWin);
};

//se dispara al apretar

const buttoPress = (e) => {
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = computerPlay();

  if (playerScore < 5 && computerScore < 5) {
    updateIco(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
  }

  if (playerScore === 5) {
    playerICO.textContent = "😄";
    ComputerICO.textContent = "💥";
    announcer.textContent = "Player wins";
    restartBtn.classList.remove("hide");
    return;
  }

  if (computerScore === 5) {
    playerICO.textContent = "🤕";
    ComputerICO.textContent = "🤖";
    announcer.textContent = "CPU wins";
    restartBtn.classList.remove("hide");
    return;
  }
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
const restartBtn = document.querySelector(".restart");

//

btns.forEach((btn) => {
  btn.addEventListener("click", buttoPress);
});

restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  ComputerICO.textContent = "🤖";
  playerICO.textContent = "😄";
  playerScoreIco.textContent = "0";
  cpuScoreIco.textContent = "0";

  restartBtn.classList.add("hide");
});
