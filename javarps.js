//prompting input from player
let playerScore = 0;
let computerScore = 0;
for (i = 0; i < 5; i++)
{
let input = prompt("There will be 5 rounds of this game.\nChoose rock, paper, or scissors to play the game, enjoy :)");
let answer = String(input).toLowerCase();



//defining the variables
let paper = ("paper");
let rock = ("rock");
let scissors = ("scissors");
let choices = [paper, rock, scissors];




//defining what computer do's
let randomized = Math.floor(Math.random() * choices.length); 
let semires = choices[randomized];
console.log(semires);



//defining result
if (answer === paper && semires === rock) 
{
    console.log("NICE ONE");
    playerScore = playerScore + 1;
    console.log("Player score = " + playerScore);
}



if (answer === paper && semires === scissors)
{
    console.log(":(");
    computerScore = computerScore +1;
    console.log("Computer score = " + computerScore);
}


if (answer === rock && semires === paper) 
{
    console.log(":(");
    computerScore = computerScore +1;
    console.log("Computer score = " + computerScore);
}


if (answer === rock && semires === scissors) 
{
    console.log("NICE ONE");
    playerScore = playerScore + 1;
    console.log("Player score = " + playerScore);
}


if (answer === scissors && semires === rock)
{
    console.log(":(");
    computerScore = computerScore +1;
    console.log("Computer score = " + computerScore);
}


if (answer === scissors && semires === paper )
{
    console.log("NICE ONE");
    playerScore = playerScore + 1;
    console.log("Player score = " + playerScore);
}


if (answer === rock && semires === rock )
{
        console.log("DRAW!!");
        playerScore = playerScore + 0;
        computerScore = computerScore + 0;
}


if (answer === paper && semires === paper )
{
        console.log("DRAW!!");
        playerScore = playerScore + 0;
        computerScore = computerScore + 0;
}


if (answer === scissors && semires === scissors )
{
        console.log("DRAW!!");
        playerScore = playerScore + 0;
        computerScore = computerScore + 0;
}



}
if (playerScore > computerScore) {
    console.log("YOU WINN!!!");
}
else 
{
    console.log("BETTER LUCK NEXT TIME BUDDY :D");
}
