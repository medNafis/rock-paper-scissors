
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
  		div.textContent = 'Computer selected Rock, so no one wins!';
  		else if (playerSelection == "paper")
  		div.textContent = 'You Win! Paper beats Rock';
  		else if (playerSelection == "scissors")
  		div.textContent = 'You Lose! Rock beats Scissors';
  
  	break; 
  	case "paper":
  		if (playerSelection == "paper")
  		div.textContent = 'Computer selected Paper, so no one wins';
  		else if (playerSelection == "scissors")
  		div.textContent = 'You Win! Scissors beats Paper';
  		else if (playerSelection == "rock")
  		div.textContent = 'You Lose! Paper beats Rock';
  	break;
  	case "scissors":
 		if (playerSelection == "scissors")
  		div.textContent = 'Computer selected Scissors, so no one wins!';
  		else if (playerSelection == "rock")
  		div.textContent = 'You Win! Rock beats Scissors';
  		else if (playerSelection == "paper")
  		div.textContent = 'You Lose! Scissors beats Paper';	
  	break;
}
}

const div = document.querySelector('#result');

const verdict = document.querySelector('#verdict');

verdict.textContent = "Start";

const rockButton = document.querySelector('#rock');

rockButton.addEventListener('click', () => {
	
	let computerSelection = computerPlay();
	let playerSelection = "rock";
	verdict.textContent = "";
  	playRound(playerSelection, computerSelection);
	scoreRound();

 }); 

const paperButton = document.querySelector('#paper');

paperButton.addEventListener('click', () => {
	let computerSelection = computerPlay();
  	let playerSelection = "paper";
	verdict.textContent = "";
  	playRound(playerSelection, computerSelection);
	scoreRound();

});

const scissorsButton = document.querySelector('#scissors');

scissorsButton.addEventListener('click', () => {
	let computerSelection = computerPlay();
  	let playerSelection = "scissors";
	verdict.textContent = "";
  	playRound(playerSelection, computerSelection);
	scoreRound();
	
});

scoreP = 0;
scoreC = 0;

function tellVerdict(){
if (scoreP == 5) {
	verdict.textContent = "You win! Play again?";
	scoreP = 0;
	scoreC = 0;
}
else if (scoreC == 5)
	verdict.textContent = "You lose! Play again?";
	scoreP = 0;
	scoreC = 0;
}



function scoreRound(){
	
	if ( div.textContent === "You Win! Paper beats Rock" || div.textContent === "You Win! Scissors beats Paper"
   			|| div.textContent === "You Win! Rock beats Scissors" ){
   		scoreP += 1;
  		div.innerHTML = scoreP + "-" + scoreC;
		if (scoreP == 5)
			tellVerdict();
	}
  	else if ( div.textContent === "You Lose! Rock beats Scissors" || div.textContent === "You Lose! Scissors beats Paper"
   					|| div.textContent === "You Lose! Paper beats Rock" ){
   		scoreC += 1;
		div.innerHTML = scoreP + "-" + scoreC;
		if (scoreC == 5)
			tellVerdict();
	}
	else if ( div.textContent === "Computer selected Rock, so no one wins!" || div.textContent === "Computer selected Paper, so no one wins"
   					|| div.textContent === "Computer selected Scissors, so no one wins!"){
	div.innerHTML = "draw! Still" + " " + scoreP + "-" + scoreC;
}
}
		/*let playerSelection = enterPlay();
		let computerSelection = computerPlay();
   		let round = playRound(playerSelection, computerSelection);
   		console.log(round);
   		if ( round === "You Win! Paper beats Rock" || round === "You Win! Scissors beats Paper"
   				|| round === "You Win! Rock beats Scissors" ){
   			scoreP += 1;
   			console.log(scoreP);}
   			
   			else if ( round === "You Lose! Rock beats Scissors" || round === "You Lose! Scissors beats Paper"
   						|| round === "You Lose! Paper beats Rock" ){
   				scoreC += 1;
   				console.log(scoreC);}
   	}
  
	if (scoreP > scoreC)
   		console.log("You Win!");
   		else if (scoreP < scoreC)
   			console.log("You Lose!");
   			else if (scoreP == scoreC)
   				console.log("Draw!");*/


