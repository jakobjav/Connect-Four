//Variables

let gameOver = false
let board
let currentColumns

let rows = 6
let columns = 7

let playerRed = "R"
let playerYellow = "Y"
let currentPlayer = playerRed

//Functions

//calling gameStart will call upon other functions that will create gameboard, set players, reset score, etc
gameStart()

function gameStart(){
    createBoard()
}

//function below will create board and 49 white cells
function createBoard() {
    board = []
    currentColumns = [5, 5, 5, 5, 5, 5, 5]

    for (let r = 0; r < rows; r++) {
        let row = []
        for (let c = 0; c < columns; c++) {
            row.push(' ')

            let cell = document.createElement("div")
            cell.id = r.toString() + "-" + c.toString()
            cell.classList.add("cell")
            cell.addEventListener('click', dropToken)
            document.getElementById("board").append(cell)
        }
        board.push(row)
    }
}

function dropToken() {
    if (gameOver){
        return;
    }

    let coords = this.id.split("-") // converts string '0-0' into array ['0', '0']
    let r = parseInt(coords[0])
    let c = parseInt(coords[1])

    r = currentColumns[c];
    if (r < 0){
        return;
    }

    board[r][c] = currentPlayer
    let cell = document.getElementById(r.toString() + "-" + c.toString())
    if (currentPlayer == playerRed) {
        cell.classList.add('red-Token')
        currentPlayer = playerYellow
    } else {
        cell.classList.add('yellow-Token')
        currentPlayer = playerRed
    }
    
    r -= 1; //moves token up one row per click
    currentColumns[c] = r; //updates array input
}

function checkWinner() {

}

function congratsMsg() {

}

function gameReset() {

}