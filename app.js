let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userCount = document.querySelector("#user-score");
const compCount = document.querySelector("#computer-score");

const compGen = () =>{
    let arr = ["rock","paper","scissors"]
    let randomOptions = Math.floor(Math.random(arr)  *3);
    return arr[randomOptions];
};

const showWinner = (userWin,userOps,compOps) => {
    if(userWin){
       userScore++;
       userCount.innerText = userScore;
       msg.innerText = `You Win ;) ${userOps} beats ${compOps}`;
       msg.style.backgroundColor = "#29bf12";
       msg.style.color = "#edf2f4";
    }
    else{
        compScore++;
        compCount.innerText = compScore;
        msg.innerText = `You lost ;( ${compOps} beats ${userOps}`;
        msg.style.backgroundColor = "#ef233c";
        msg.style.color = "#edf2f4";
    }
    
}; 

const playGame = (userOps) =>{
    // console.log("playgame function ",ops);
    
    const compOps = compGen();
    console.log("computer ops: ",compOps);
        if(userOps === compOps){
            msg.innerText="Game was draw";
            msg.style.backgroundColor = "#bc6c25";
            msg.style.color = "#edf2f4";
        }
        else{
            let userWin = true;
            if(userOps === "rock") {
                userWin = compOps === "paper" ? false : true; // false = paper beats rock and true = rock beats  scissors
            }
            else if(userOps === "paper") {
                userWin = compOps === "scissors" ? false : true; // false = scissors beats paper and true = paper beats  rock
            }
            else{
                userWin = compOps === "rock" ? false : true; // false = rock beats scissors and true = scissors beats paper 
            }
            showWinner(userWin , userOps , compOps);
        }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userOps = choice.getAttribute("id");
        console.log("user ops is :", userOps);
        playGame(userOps);
    });
});