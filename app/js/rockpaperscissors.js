////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    prompt().toLowerCase();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     var check = !!move;
    if (check && (move == "rock" || "paper" || "scissors")){
        return move;
    }else{
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     var check = !!move;
    if (check && (move == "rock" || "paper" || "scissors")){
        return move;
    }else{
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == computerMove){
        winner =  "tie";
    }else if(playerMove == "rock"){
        if(computerMove == "scissors"){
            winner = "player";
        }else{
            winner = "computer";
        }
    }else if (playerMove == "paper"){
        if (computerMove == "scissors"){
            winner = "computer";
        }else{
            winner = "player";
        }
    }else if(playerMove == "scissors"){
        if(computerMove == "rock"){
            winner = "computer";
        }else{
            winner = "player";
        }
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins<5 || computerWins<5){
        var playerMoves = getPlayerMove();
        var computerMoves = getComputerMove();
        var winner = getWinner(playerMoves, computerMoves);

        if (winner == "player") {
            playerWins += 1;
            console.log("Player Wins!" + "\n", "Player chose " + playerMoves + " while Computer chose " + computerMoves);
            console.log("The score is currently " + "\n" + "Player: " + playerWins + " to " + "Machines: " + computerWins + "\n");
        }else if(winner == "computer"){
            computerWins += 1;
            console.log("Computer Wins!" + "\n", "Player chose " + playerMoves + " while Computer chose " + computerMoves);
            console.log("The score is currently " + "\n" + "Player: " + playerWins + " to " + "Machines: " + computerWins + "\n");
        }else{
            console.log("The result is a tie!" + "\n", "Player chose " + playerMoves + " and Computer chose " + computerMoves + "!");
            console.log("The score is currently " + "\n" + "Player: " + playerWins + " to " + "Machines: " + computerWins + "\n");
        }
    }

    return [playerWins, computerWins];
}

playToFive();