
function computerPlay(){
	let array = ["rock", "paper", "scissors"];
	let randomNumber = Math.floor(Math.random()*array.length);
	return array[randomNumber];

}

function enterPlay(){
	let choice = prompt("Enter your play");
	return choice.toLowerCase();

}


function playRound(playerSelection, computerSelection) {
	switch(computerSelection) {
  case "rock":
  	if (playerSelection == "rock")
  		return "Computer selected Rock, so no one wins!"
  	if (playerSelection == "paper")
  		return "You Win! Paper beats Rock" 
  	if (playerSelection == "scissors")
  		return "You Lose! Rock beats Scissors" 
  case "paper":
  	if (playerSelection == "paper")
  		return "Computer selected Paper, so no one wins!"
  	if (playerSelection == "scissors")
  		return "You Win! Scissors beats Paper" 
  	if (playerSelection == "rock")
  		return "You Lose! Paper beats Rock" 
  case "scissors":
 	if (playerSelection == "scissors")
  		return "Computer selected Scissors, so no one wins!"
  	if (playerSelection == "rock")
  		return "You Win! Rock beats Scissors" 
  	if (playerSelection == "paper")
  		return "You Lose! Scissors beats Paper" 
    break;
}
}

function game() {

	let scoreP = 0;
	let scoreC = 0;
	for (let i = 0; i < 5; i++) {

		let playerSelection = enterPlay();
		let computerSelection = computerPlay();
   		let round = playRound(playerSelection, computerSelection);
   		console.log(round);
   		if ( round === "You Win! Paper beats Rock" || round === "You Win! Scissors beats Paper"
   			|| round === "You Win! Rock beats Scissors" )
   			{scoreP += 1;
   			console.log(scoreP);}
   			
   				else if ( round === "You Lose! Rock beats Scissors" || round === "You Lose! Scissors beats Paper"
   						|| round === "You Lose! Paper beats Rock" )
   					{scoreC += 1;
   					console.log(scoreC);}
   	}
  

if (scoreP > scoreC)
   		console.log("You Win!");
   	else if (scoreP < scoreC)
   		console.log("You Lose!")
   		else if (scoreP == scoreC)
   			console.log("Draw!")

}


game();






