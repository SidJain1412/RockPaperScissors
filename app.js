var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function win(userChoice, computerChoice) {
	userScore++;
	result_div.innerHTML = userChoice + " beats " + computerChoice+ ". You win!";
	userScore_span.innerHTML = userScore;
}


function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
}


function draw(userChoice, computerChoice) {
	
}


function game(userChoice)	{
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice)
	{
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
			win(userChoice, computerChoice);
			break;
		case "RockPaper":
		case "PaperScissors":
		case "ScissorsRock":
			lose(userChoice, computerChoice);
			break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorScissor":
			draw(userChoice, computerChoice);
			break;
	}
}


function getComputerChoice() {
	const choices = ['Rock','Paper','Scissors'];
	return choices[Math.floor(Math.random()*3)];
}


function main() {
	rock_div.addEventListener('click', function(){
		game("Rock");
	})
	paper_div.addEventListener('click', function(){
		game("Paper");
	})
	scissors_div.addEventListener('click', function(){
		game("Scissors");
	})
}

getComputerChoice();
main();