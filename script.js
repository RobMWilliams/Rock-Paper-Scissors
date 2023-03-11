function enlargeImage(img) {
    img.style.transform = "scale(1.2)"; // increase the scale of the image
    img.style.transition = "transform 0.5s"; // add a smooth transition effect
  }
  
  function resetImage(img) {
    img.style.transform = "scale(1)"; // reset the scale of the image
    img.style.transition = "transform 0.5s"; // add a smooth transition effect
  }
// Defines that the user has not yet chosen a "weapon"
  let userHasChosen = false;

  //User chooses an image, the weapon is chosen and no other options can be chosen.
  const playerRockImg = document.getElementById("playerRock");
  playerRockImg.addEventListener('click', function(){
    if (userHasChosen != true)
    playerChoiceImg("Rock");
    userHasChosen = true;
  });

  const playerPaperImg = document.getElementById("playerPaper");
  playerPaperImg.addEventListener('click', function(){
    if (userHasChosen != true)
    playerChoiceImg("Paper");
    userHasChosen = true;
  });

  const playerScissorsImg = document.getElementById("playerScissors");
  playerScissorsImg.addEventListener('click', function(){
    if (userHasChosen != true)
      playerChoiceImg("Scissors");
    userHasChosen = true;
  });

//The users "weapon" is displayed and logged.
function playerChoiceImg (choice){

    if (choice === "Rock"){
      const playerImg = document.getElementById("player");
      const img = document.createElement("img");
      img.src = "images/rock.png";
      playerImg.appendChild(img);
      console.log("Rock");
    }
    else if (choice === "Paper"){
      const playerImg = document.getElementById("player");
      const img = document.createElement("img");
      img.src = "images/paper.png";
      playerImg.appendChild(img);
      console.log("Paper");
    }
    else if (choice === "Scissors"){
      const playerImg = document.getElementById("player");
      const img = document.createElement("img");
      img.src = "images/scissors.png";
      playerImg.appendChild(img);
      console.log("Scissors");
    };

    return choice;
}
 
function computerChoice(){

  const randomChoice = Math.floor(Math.random() * 3);

  let selectedOption;
  switch (randomChoice) {
    case 0:
    selectedOption = "Rock";
    break;

    case 1:
      selectedOption = "Paper";
      break;

    case 2:
      selectedOption = "Scissors";
      break;
  }
  console.log(`Computer choice is ${selectedOption}`)
  return selectedOption;

}

computerChoice();