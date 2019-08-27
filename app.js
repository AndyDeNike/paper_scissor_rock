const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")
const rock_div = document.getElementById("r")


function getComputerChoice() {
    
}

function game(userChoice) {
    console.log("poop " + userChoice);
}

function main() {
    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissor_div.addEventListener('click', function(){
        game("s");
    })

    rock_div.addEventListener('click', function(){
        game("r");
    })
};

main();