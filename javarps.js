//prompting input from player
for (i = 0; i < 5; i++)
{
let input = prompt("There will be 5 rounds of this game.\nChoose rock, paper, or scissors to play the game, enjoy :)");
let answer = String(input).toLowerCase();



//defining the variables
let paper = ("paper");
let rock = ("rock");
let scissors = ("scissors");
let choices = [paper, rock, scissors];
console.log(choices.includes(answer));



//defining what computer do's
let randomized = Math.floor(Math.random() * choices.length); 
let semires = choices[randomized];
console.log(semires);

//defining result
if (answer === paper && semires === rock) 
{
    console.log("Congrats");
} 
else if (answer === paper && semires === scissors)
{
    console.log("Booo");
}
else if (answer === rock && semires === paper) 
{
    console.log("Booo");
}
else if (answer === rock && semires === scissors) 
{
    console.log("Congrats");
}
else if (answer === scissors && semires === rock)
{
    console.log("Booo");
}
else if (answer === scissors && semires === paper )
{
    console.log("Congrats");
}
else if (answer === rock && semires === rock )
{
        console.log("Try again");
}
else if (answer === paper && semires === paper )
{
        console.log("Try again");
}
else if (answer === scissors && semires === scissors )
{
        console.log("Try again");
}

//scoring
let pl = answer === true;
let co = answer === false;

function playerScore (pl)
{       let pl = 0;
        return pl++
}

console.log(playerScore);

function computerScore (co)
{       let co = 0;
        return co++
}
console.log(computerScore);

}