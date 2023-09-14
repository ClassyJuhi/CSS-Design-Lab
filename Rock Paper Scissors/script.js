"use strict";

let rock = document.getElementById("rock");
let Scissors = document.getElementById("Scissors");
let paper = document.getElementById("paper");
let left = document.getElementById("left");
let right = document.getElementById("right");

let gameTriggers = document.getElementsByClassName("game-trigger");

for(let gameTrigger of gameTriggers) {
    gameTrigger.addEventListener('click', () => {
        console.log("clicked");
    
        // User has started a new inning
        // 1. Start the animation for 2 sec and generate computer move
        // 2. Get the input of user
        // 3. Update the UI to show the move by both usr
        // 4. Declare the winner

        // animation start
        startAnimation();
        // setTimeout method executes the given function only after the given time interval.
        setTimeout(() => {
            // stop the animation
            stopAnimation();
        }, 2000);
    })   
}

let startAnimation = () => {
    console.log("start");
    left.style.animationPlayState = 'running';
    right.style.animationPlayState = 'running';
}

let stopAnimation = () => {
    console.log("stop");
    left.style.animationPlayState = 'pause';
    right.style.animationPlayState = 'pause';
}

let initializeComputerMove = () => {
    let computerMove = Math.floor(Math.random() * 3)
    if(computerMove === 0){
        computerMove = 'rock';
    }
    else if(computerMove === 1){
        computerMove = 'scissors';
    }
    else{
        computerMove = 'paper';
    }
    if(computerMove === 'rock'){
        right.src = "../Rock Paper Scissors/assets/rock.png"
    }
    else if(computerMove === 'scissors'){
        right.src = "../Rock Paper Scissors/assets/scissors.png"
    }
    else{
        right.src = "../Rock Paper Scissors/assets/paper.png"
    }
}


// rock.addEventListener('click', action);
// Scissors.addEventListener('click', action);
// paper.addEventListener('click', action);
