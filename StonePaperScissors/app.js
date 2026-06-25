let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");





// Dark Mode
const darkBtn = document.querySelector("#dark-mode-btn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// Computer Choice
const genCompChoice = () => {

  const options = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return options[randomIndex];
};


// Draw Game
const drawGame = () => {

  msg.innerText = "Game Draw!";
  msg.style.backgroundColor = "#081b31";

  drawSound.play();
};


// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {

  if (userWin) {

    userScore++;

    userScorePara.innerText = userScore;

    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;

    msg.style.backgroundColor = "green";

  

  } else {

    compScore++;

    compScorePara.innerText = compScore;

    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;

    msg.style.backgroundColor = "red";

    loseSound.play();
  }

  // Best Of 5 Winner
  if (userScore === 5) {

    msg.innerText = "🎉 You Won The Match!";

    userScore = 0;
    compScore = 0;

    updateScore();
  }

  if (compScore === 5) {

    msg.innerText = "😢 Computer Won The Match!";

    userScore = 0;
    compScore = 0;

    updateScore();
  }
};


// Update Score
const updateScore = () => {

  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
};


// Main Game
const playGame = (userChoice) => {

  const compChoice = genCompChoice();

  if (userChoice === compChoice) {

    drawGame();

  } else {

    let userWin = true;

    if (userChoice === "rock") {

      userWin = compChoice === "paper" ? false : true;

    } else if (userChoice === "paper") {

      userWin = compChoice === "scissors" ? false : true;

    } else {

      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};


// Click Events
choices.forEach((choice) => {

  choice.addEventListener("click", () => {

    const userChoice = choice.getAttribute("id");

    playGame(userChoice);

  });

});