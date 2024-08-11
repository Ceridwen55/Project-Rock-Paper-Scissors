//prompting input from player

let playerScore = 0;
let computerScore = 0;
let paper = ("paper");
let rock = ("rock");
let scissors = ("scissors");
let choices = [paper, rock, scissors];


alert("There will be 5 rounds of this game.\nChoose rock, paper, or scissors to play the game, enjoy :)");


let input = "";
let semires = "";
let answer = "";
let randomized = "";

const outputDiv = document.getElementById("output");
function updateOutput (message)
{
    outputDiv.innerHTML += message + "<br>";
}


const buttons = [document.getElementById("btn1"), document.getElementById("btn2"), document.getElementById("btn3")];
let buttonsClicked = 0;
let maxClick = 5;

buttons.forEach(button => button.addEventListener('click', handleClick));


const rockbtn1 = document.querySelector("#btn1");
rockbtn1.style.color = "brown";
rockbtn1.style.backgroundcolor = "white";
rockbtn1.style.width = '250px';
rockbtn1.style.height = 'auto';
rockbtn1.style.margin = '50px';
rockbtn1.style.size = '30px;'
rockbtn1.onclick = () => 
    {
        
        input = "rock";
        answer = String(input).toLowerCase();
        updateOutput(answer);
        randomized = Math.floor(Math.random() * choices.length);
        semires = choices[randomized];
        updateOutput(semires);
        
        if (answer === rock && semires === paper) 
            {
                updateOutput(":(");
                computerScore = computerScore +1;
                updateOutput("Computer score = " + computerScore);
            }
            
            
        if (answer === rock && semires === scissors) 
            {
                updateOutput("NICE ONE");
                playerScore = playerScore + 1;
                updateOutput("Player score = " + playerScore);
            }
        
        if (answer === rock && semires === rock )
            {
                updateOutput("DRAW!!");
                playerScore = playerScore + 0;
                computerScore = computerScore + 0;
            }
        
    }


const paperbtn2 = document.querySelector("#btn2");
paperbtn2.style.color = "black";
paperbtn2.style.backgroundcolor = "white";
paperbtn2.style.width = '250px';
paperbtn2.style.height = 'auto';
paperbtn2.style.margin = '50px';
paperbtn2.style.size = '30px;'
paperbtn2.onclick = () => 
    {
        input = "paper";
        answer = String(input).toLowerCase();
        updateOutput(answer);
        randomized = Math.floor(Math.random() * choices.length);
        semires = choices[randomized];
        updateOutput(semires);
        
        if (answer === paper && semires === rock) 
            {
                updateOutput("NICE ONE");
                playerScore = playerScore + 1;
                updateOutput("Player score = " + playerScore);
            }
            
            
            
        if (answer === paper && semires === scissors)
            {
                updateOutput(":(");
                computerScore = computerScore +1;
                updateOutput("Computer score = " + computerScore);
            }


        if (answer === paper && semires === paper )
            {
                updateOutput("DRAW!!");
                playerScore = playerScore + 0;
                computerScore = computerScore + 0;
            }
        
    }

const scissorsbtn3 = document.querySelector("#btn3");
scissorsbtn3.style.color = "black";
scissorsbtn3.style.backgroundcolor = "white";
scissorsbtn3.style.width = '250px';
scissorsbtn3.style.height = 'auto';
scissorsbtn3.style.margin = '50px';
scissorsbtn3.style.size = '30px;'
scissorsbtn3.onclick = () => 
    {
        input = "scissors";
        answer = String(input).toLowerCase();
        updateOutput(answer);
        randomized = Math.floor(Math.random() * choices.length);
        semires = choices[randomized];
        updateOutput(semires);

        if (answer === scissors && semires === rock)
            {
                updateOutput(":(");
                computerScore = computerScore +1;
                updateOutput("Computer score = " + computerScore);
            }
            
            
        if (answer === scissors && semires === paper )
            {
                updateOutput("NICE ONE");
                playerScore = playerScore + 1;
                updateOutput("Player score = " + playerScore);
            }

        if (answer === scissors && semires === scissors )
            {
                updateOutput("DRAW!!");
                playerScore = playerScore + 0;
                computerScore = computerScore + 0;
            }
    }



    function handleClick() 
    {
        buttonsClicked++;
        if (buttonsClicked >= maxClick) {
            buttons.forEach(button => button.disabled = true);
            alert(final(playerScore, computerScore));
        }
    }

    function final(playerScore, computerScore) 
    {
        if (playerScore > computerScore) {
            return "YOU WIN!!!";
        } else {
            return "BETTER LUCK NEXT TIME BUDDY :D";
        }
    }

