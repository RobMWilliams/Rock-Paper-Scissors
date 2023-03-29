function enlargeImage(img) {
    img.style.transform = "scale(1.2)"; // increase the scale of the image
    img.style.transition = "transform 0.5s"; // add a smooth transition effect
  }
  
  function resetImage(img) {
    img.style.transform = "scale(1)"; // reset the scale of the image
    img.style.transition = "transform 0.5s"; // add a smooth transition effect
  }

  //Variables

  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  //DOM elements

  const allButtons = document.querySelectorAll("button");
  const rockButton = document.getElementById("playerRock");
  const paperButton = document.getElementById("playerPaper");
  const scissorsButton = document.getElementById("playerScissors");
  let roundText = document.getElementById("roundText");
  let playerScoreText = document.getElementById("playerScoreText");
  let computerScoreText = document.getElementById("computerScoreText");
  let roundWinner = document.getElementById("winnerText");
  let overallWinner = document.getElementById("winnerText");
  const resetButton = document.getElementById("restartButton");


  // Event listeners

  rockButton.addEventListener("click", () => playRound("rock"));
  paperButton.addEventListener("click", () => playRound("paper"));
  scissorsButton.addEventListener("click", () => playRound("scissors"));


  //Insert chosen weapons as images
  function insertImgs(playerChoice,computerWeapon){
    document.getElementById("playerChoice").innerHTML=`<img class="chosenWeapons" src="images/${playerChoice}.png">`;
    document.getElementById("computerChoice").innerHTML=`<img class="chosenWeapons" src="images/${computerWeapon}.png">`;
  }

  // Function to play one round

  function playRound(playerTurn){

    //confirm player choice
    
    console.log(`Player is ${playerTurn}`)

      //increment round

      roundsPlayed++

      //computer choice via array

      const weapons = ["rock","paper","scissors"];
      const computerWeapon = weapons[Math.floor(Math.random() * weapons.length)];
      console.log(`computer is ${computerWeapon}`)

      //update display weapons
      
      insertImgs(playerTurn,computerWeapon);

      //determine winner
      
      if(playerTurn === computerWeapon){
        roundWinner = "Tie";
      } else if(
        (playerTurn === "rock" && computerWeapon === "paper") ||
        (playerTurn === "paper" && computerWeapon === "scissors") ||
        (playerTurn === "scissors" && computerWeapon === "rock")){
        roundWinner = "Lost"
      } else{
        roundWinner = "Win"
      }

      //update score

      if(roundWinner === "Win"){
        playerScore++;
        WinnerText.textContent = "You win that round!"
      } else if(roundWinner === "Lost"){
        computerScore++;
        WinnerText.textContent = "You lost that round!"
      } else{
        WinnerText.textContent = "It's a tie!";
      }

      //update display

      playerScoreText.textContent = playerScore;
      computerScoreText.textContent = computerScore;
      roundText.textContent = roundsPlayed;
      
      //confirm round winner

      console.log(roundWinner);

      //count number of rounds and end game at round 5

      if(roundsPlayed === 5){
        endGame(playerScore,computerScore);
        return;
        
      }

      return;
  }

  // function to end the game

  function endGame(playerScore, computerScore){
    
    //disable all buttons
      disableButtons();  
    
    //determine game outcome

      if(playerScore > computerScore){
        overallWinner = "player";
      } else{
        overallWinner = "computer";
      }

      //update score with winner

      if(overallWinner === "player"){
        WinnerText.textContent = "You win the game!";
      } else{
        WinnerText.textContent = "You lose the game!"
      }

      showReset();
      return;


  }

  
    function disableButtons() {
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
      rockButton.removeEventListener("click", playRound);
      paperButton.removeEventListener("click", playRound);
      scissorsButton.removeEventListener("click", playRound);
    }
    
    function showReset(){
        resetButton.style.opacity = "100%";
        resetButton.addEventListener("click", () => resetGame());
        return;
    }
    
    function resetGame(){

      playerScoreText.textContent = "0";
      computerScoreText.textContent = "0";
      roundText.textContent = "0";
      roundsPlayed = 0;
      playerScore = 0;
      computerScore = 0;
      WinnerText.textContent = "";
      resetButton.style.opacity = "0%";
      document.getElementById("playerChoice").innerHTML="";
      document.getElementById("computerChoice").innerHTML="";
      rockButton.disabled = false;
      paperButton.disabled = false;
      scissorsButton.disabled = false;

      return;
    }

  