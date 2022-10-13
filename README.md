# Connect Four
## Background
- Game Choice: Connect Four, I chose this game because I didn't want to be too ambitious, I know the order of difficulty was easy -> hard chronologically and to coding I feel like a slow learner.
---
## Wireframe
![mainPic](https://i.imgur.com/myKtJIu.png)
![postGamePic](https://i.imgur.com/wfe5zCC.png)

---
## Pseudocodes

```js
variables -----

let board = document.querySelector(...)
let player = document...
let playAgain = document...
let reset = document...
let winningArray = [[x, x, x, x]...]

functions -----

function gameStart(start){
    //loads in current player, board, and event listener to listen for clicks
}

function switchTurn(turn){
    //alternates between player1 & player2
}

function dropToken(token){
    //lets player drop yellow or red coin/token into connect 4 slot
    //identify the connect 4 slot/cell with click then generate token into that cell
    //before generating token, check to see if cell is occupied or not
}

function checkWinner(winner){
    //checks filled in arrays to see if it fulfills winningArray combos for win
    //a if else or for loop will be here to check for tie/draw
}

function congratsMsg(msg){
    //congratulates player on winning the game
}

function gameReset(reset){
    //resets the game either during the game or after tie/win  
}
```