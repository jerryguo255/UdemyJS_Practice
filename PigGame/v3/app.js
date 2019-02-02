/*
PIG GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var playerScores, roundScore, activePlayer, dice, gameStatus, diceElement, diceP6, winScore;
diceElement1 = document.querySelector('.dice');
diceElement2 = document.querySelector('.dice-0');



initGame();


function initGame() {
    // 1. Initial stage: 
    // score :0  
    gameStatus = true;
    playerScores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    winScore = 0;
    diceElement1.style.display = "none";
    diceElement2.style.display = "none";
    // dice-img:hide; 

    document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
    document.querySelector('#score-' + activePlayer).innerHTML = playerScores[activePlayer];
    document.querySelector('#current-1').innerHTML = roundScore;
    document.querySelector('#score-1').innerHTML = playerScores[1];


    document.querySelector('#name-0').innerHTML = 'PLAYER 1';
    document.querySelector('#name-1').innerHTML = 'PLAYER 2';

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    // Player 1 first turn(active) ,)

    if (!document.querySelector('.setScore').value || isNaN(document.querySelector('.setScore').value)) {
        winScore = 22;
    } else {
        winScore = document.querySelector('.setScore').value;
    }
}

document.querySelector('.btn-new').addEventListener('click', initGame);




/*


2. click Roll dice btn, generate a random number ,
   than change img of the dice accordingly, 
   accumulate the value to current score,
   if the number is 1 , revoke all the accumulation of this turn,and hand over 
   to player 2 , start next turn.
   when click hold , pass the value to total score of current player
*/

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameStatus) {
        var diceP1 = Math.floor(Math.random() * 6) + 1;
        var diceP2 = Math.floor(Math.random() * 6) + 1;

        // 把仅仅用作局部的变量，变为局部变量
        diceElement1.src = 'dice-' + diceP1 + '.png';  // change the dice image
        diceElement1.style.display = "inline-block";    //shows the dice
        diceElement2.src = 'dice-' + diceP2 + '.png';  // change the dice image
        diceElement2.style.display = "inline-block";    //shows the dice

        roundScore += (diceP1 + diceP2);   //add score
        document.querySelector('#current-' + activePlayer).innerHTML = roundScore; //show score

        if (diceP1 != 6 && diceP2 != 6) {// only two other points
            if (diceP1 === 1 || diceP2 === 1) {
                roundScore = 0;
                document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
                shiftPlayer();
                diceP6 = false;
            }
        } else {//once get one 6 point, 
            if (diceP6) {
                diceP6 = false;
                roundScore = 0;
                document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
                shiftPlayer();
            } else
                diceP6 = true;
        }
    }
});  //roll dice





document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameStatus) {
        // write if statement  inside of  aninymos function , not outside
        playerScores[activePlayer] += roundScore;
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
        document.querySelector('#score-' + activePlayer).innerHTML = playerScores[activePlayer];
        diceElement1.style.display = "none";
        diceElement2.style.display = "none";



        if (playerScores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).innerHTML = ' Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gameStatus = false;
            // document.querySelector('.btn-roll').removeAttribute("onclick");
            // document.querySelector('.btn-hold').removeAttribute("onclick");

        } else
            shiftPlayer();
    }
});





function shiftPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

//document.querySelector('.player-0-panel').display = 'none';
