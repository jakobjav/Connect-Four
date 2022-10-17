//Variables
let boardGame = document.querySelector(".board")
let player = document.querySelector(".player")
let playAgain = document.querySelector(".playAgain")
let reset = document.querySelector(".reset")
let winningArray = [[]]

let board;
let rows = 6;
let columns = 7;

//calling gameStart will call upon other functions that will create gameboard, set players, reset score, etc
gameStart()

function gameStart(){
    createBoard()
}

//function below will create board and 49 white cells
function createBoard() {
    board = [];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(' ');

            let cell = document.createElement("div");
            cell.id = r.toString() + "-" + c.toString()
            cell.classList.add("cell");
            document.getElementById("board").append(cell);
        }
        board.push(row);
    }
}

function switchTurn(turn) {

}

function dropToken(token) {

}

function checkWinner(winner) {

}

function congratsMsg(msg) {

}

function gameReset(reset) {

}