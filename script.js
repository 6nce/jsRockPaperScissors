function playRound(){
    let choice = prompt("Select your Weapon! Rock, Paper, or Scissors?").toLowerCase();

    cpu = ""


    function cpuChoice() {
        cpu = Math.floor(Math.random() * 3) +1;
        if(cpu === 1 ){
            return cpu = "rock";
        }
        else if (cpu === 2 ){
            return cpu = "scissors";
        }
        else if (cpu === 3 ){
            return cpu = "paper";
        }
    }

    function matching(choice){
        if(choice === "scissors"){
            if(cpu === "rock"){
                cpuScore++
                console.log("You LOSE. Try Again.")
            }
            else if(cpu === "paper"){
                playerScore++
                console.log("Congratulations, You WIN!")
            }
            else if(cpu === "scissors"){
                console.log("Stalemate!")
            }


        }
        else if(choice === "rock"){
            if(cpu === "paper"){
                cpuScore++
                console.log("You LOSE. Try Again.")
            }
            else if(cpu === "scissors"){
                playerScore++
                console.log("Congratulations, You WIN!")
            }
            else if(cpu === "rock"){
                console.log("Stalemate!")
            }

        }
        else if(choice === "paper"){
            if(cpu === "scissors"){
                cpuScore++
                console.log("You LOSE. Try Again.")
            }
            else if(cpu === "rock"){
                playerScore++
                console.log("Congratulations, You WIN!")
            }
            else if(cpu === "paper"){
                console.log("Stalemate!")
            }

        }
        else{
            tryagain = prompt("Incorrect Value, Would you like to try again? y or n").toLowerCase()
            if(tryagain === "y")
            playRound()
        }
        
    }

    cpuChoice()
    console.log(`You chose ${choice}.`)
    console.log(`The computer chose ${cpu}.`)
    matching(choice)
    console.log(`Player Score: ${playerScore}`)
    console.log(`CPU Score: ${cpuScore}`)

}

let playerScore = 0
let cpuScore = 0

function game(){
    for (let i = 0; i < 5; i++){
        if(i === 5){
            console.log("Game Over!")
        }
        playRound()
    }
}

startgame = prompt("Would you like to play a game of Rock, Paper, Scissors? y or n").toLowerCase()
if (startgame === "y"){
    game()
}

else{
    console.log("Okay Bye!")
}