let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")
const rock_div = document.getElementById("r")


function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert2Word(letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors"
}

function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function winner() {
    if (userScore === 10){
        result_p.innerHTML = "YOU ARE A CALCULATED GENIUS AND A PATRIOT! PLAY AGAIN?";
        result_p.classList.add('greenwin');
        setTimeout(() => result_p.classList.remove('greenwin'), 1000);
        reset();
    } else if (computerScore === 10){
        result_p.innerHTML = "The robots have destroyed humanity...play again?";
        result_p.classList.add('redlose');
        setTimeout(() => result_p.classList.remove('redlose'), 1000);
        reset();
    }
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convert2Word(userChoice)}(You) beats ${convert2Word(computerChoice)}(Comp). We are all very proud of you!`;
    // result_p.innerHTML = convert2Word(userChoice) + " beats " + convert2Word(computerChoice) + ". You win the chocolate factory!";
    userChoice_div.classList.add('green-glow');
    // setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
    winner();
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert2Word(userChoice)}(You) loses to ${convert2Word(computerChoice)}(Comp). You lose! Good Day Sir!!!!`;
    // result_p.innerHTML = convert2Word(userChoice) + " beats " + convert2Word(computerChoice) + ". You win the chocolate factory!";
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
    winner();
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convert2Word(userChoice)}(You) is equal to ${convert2Word(computerChoice)}(Comp). We Gon Call This a Draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    paper_div.addEventListener('click', () => game("p"));

    scissor_div.addEventListener('click', () => game("s"));

    rock_div.addEventListener('click', function(){
        game("r");
    })
};

main();