let userScore = 0;
let comScore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");
const msg2 = document.querySelector(".rst-btn");

const genComChoise = () =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}



const showWinner = (userWin,userChoise,comChoise) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoise} beats ${comChoise}.`;
        msg.style.backgroundColor = "green";
    }
    else{
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = `Computer Win! ${comChoise} beats your ${userChoise}.`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
};

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const playGame = (userChoise) =>{
    const comChoise = genComChoise();
    if(userChoise === comChoise){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoise === "rock"){
            userWin = comChoise === "paper"? false : true;
        }
        else if(userChoise === "paper"){
            userWin = comChoise === "scissors" ? false : true;
        }
        else{
            userWin = comChoise === "rock" ? false : true;
        }
        showWinner(userWin,userChoise,comChoise);
    }
};

choises.forEach((choise) =>{
    choise.addEventListener("click",() =>{
        const userChoise = choise.getAttribute("id");
        playGame(userChoise);
    });
});

const resetGame = () =>{
    userScore = 0;
    comScore = 0;
};
msg2.addEventListener("click",resetGame);