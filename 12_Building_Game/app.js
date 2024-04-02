let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options =["rock","paper","scissors"];
    const rndInx = Math.floor(Math.random()*3);
    return options[rndInx];
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win, Your ${userChoice} beats ${compChoice} !`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText=`You Lose, ${compChoice} beats your ${userChoice} !`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = ()=>{
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";

};

const playGame = (userChoice)=>{
    console.log("User Choice: ", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice: ", compChoice);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // compChoice: scissor, paper
            userWin = compChoice === "paper" ? false:true;
        } else if(userChoice === "paper"){
            // compchoice can be: rock, scissors
            userWin = compChoice === "scissors"? false:true;
        }else{
            // userChoice: scissor
            // compchoice: rock, paper
            userWin = compChoice === "rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{    // choice means options (stone, paper, scissor)
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});