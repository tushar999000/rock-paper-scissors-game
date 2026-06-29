let userScore = 0;
let compScore= 0;
let icon = document.querySelectorAll(".icon");
let msg = document.querySelector("#r1");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");

const compChoice = () => {
    let no = Math.floor(Math.random()*3);
    let options = ["rock","paper","scissors"];
    return options[no];
}

const drawGame = ()=> {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#a52a2a";
};

const showWinner = (userWin, userChoice, comp) => {
    if(userWin){
        userScore++;
        c1.innerText = userScore;
        msg.innerText= `You Win with ${userChoice} then ${comp}`;
        msg.style.backgroundColor = "#7fff00";
    }
    else{
        compScore++;
        c2.innerText = compScore;
        msg.innerText= `You Lose with ${userChoice} from ${comp}`;
        msg.style.backgroundColor = "#dc143c";
    }
};

const playGame = (userChoice)=>  {
    let comp = compChoice();
    if(userChoice === comp ){
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice === "rock"){
            userWin = comp === "paper" ? false : true; 
        }
        else if (userChoice === "paper"){
            userWin = comp === "scissors" ? false : true;
        }
        else{
            userWin = comp === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comp);
    }
};

icon.forEach((selected) => {
selected.addEventListener("click",(e)=>{
const userChoice = selected.getAttribute("id");
playGame (userChoice);
});
});