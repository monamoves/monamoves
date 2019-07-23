// This variable is what connects the button to the rocks function
var play = document.getElementById("again");
function rocks() {
  // User choice
  var userChoice = prompt("Do you choose rock, paper or scissors?");

  if (!userChoice) {
    // If the player doesn't enter a choice
    document.getElementsByTagName("p")[0].innerHTML =
      "Player 1, you cheated! Refresh this screen and play again.";
  } else {
    // Display user choice
    document.getElementsByTagName("p")[0].innerHTML =
      "Player 1:" + " " + userChoice;
  }
  // Computer choice
  var computerChoice = Math.random();
  // Random number is between 0 and 1. The first third of that range is for rocks
  if (computerChoice < 0.34) {
    computerChoice = "rock";
 // the second third is for paper
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
 // the last third is for scissors
  } else {
    computerChoice = "scissors";
  }
  // Display computer choice
  document.getElementsByTagName("p")[1].innerHTML =
    "Computer:" + " " + computerChoice;
  // Compare player, choice 1 choice vs computer, choice 2
  // If player chooses the same as computer
  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
      return "It's a tie!";
    }
 // Player chooses rock and computer chooses scissors
    if (choice1 === "rock") {
      if (choice2 === "scissors") {
        // rock wins
        return "You win!";
      } else {
        // computer chooses paper
        return "You lose! Try again.";
      }
    }
   // If player chooses paper and computer chooses rock
    if (choice1 === "paper") {
      if (choice2 === "rock") {
        // paper wins
        return "You win!";
      } else {
        // computer chooses scissors
        return "You lose! Try again.";
      }
    }
  // If player chooses scissors and computer chooses rock
    if (choice1 === "scissors") {
      if (choice2 === "rock") {
        // rock wins
        return "You lose! Try again.";
      } else {
        // computer chooses paper
        return "You win!";
      }
    }
  };
  // Run the compare function
  var results = compare(userChoice, computerChoice);
  // Display results
  document.getElementsByTagName("p")[2].innerHTML = results;
}
// call your function
rocks();


