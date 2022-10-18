//constants
const row1 = document.querySelectorAll('.row1')
const row2 = document.querySelectorAll('.row2')
const row3 = document.querySelectorAll('.row3')
const row4 = document.querySelectorAll('.row4')
const row5 = document.querySelectorAll('.row5')
const row6 = document.querySelectorAll('.row6')

const columns = document.querySelectorAll('.column')
const column1 = document.querySelectorAll('.column1')
const column2 = document.querySelectorAll('.column2')
const column3 = document.querySelectorAll('.column3')
const column4 = document.querySelectorAll('.column4')
const column5 = document.querySelectorAll('.column5')
const column6 = document.querySelectorAll('.column6')
const column7 = document.querySelectorAll('.column7')

// const winningArray = [[x, x, x, x]]

//state variables
let playerOne = 'playerOne'
let playerTwo = 'playerTwo'
let currentPlayer = playerOne

let p1Score = 0
let p2Score = 0

let winner = 0

//cached elements
//board elements
const board = document.querySelector(".grid")
const reset = document.querySelector(".resetButton")
const playAgain = document.querySelector(".playAgain")
//player elements
const player = document.querySelector(".player")
const p1ScoreDisplay = document.querySelector(".p1Score")
const p2ScoreDisplay = document.querySelector(".p2Score")

//event listeners


// functions 

function init() {

    render()
}

function render() {

}

function createBoard() {

    //create gameboard and cells
}

function switchTurn() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo
        player.innerHTML = currentPlayer
    } else {
        currentPlayer = playerOne
        player.innerHTML = currentPlayer
    }
}



testColumn()

function testColumn() {
    column1.forEach(column => {
        column.addEventListener('click', () => {
            if (column.classList.contains('base')){
                alert("you clicked this column")
            } else {
                alert("you can't clcik this")
            }
        };

// dropToken()

function dropToken() {
    row1.forEach(row => {
        row.addEventListener('click', () => {
            if (currentPlayer === playerOne && row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorOne')
            } else if (row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorTwo')
            }
            switchTurn()
        })
    })
    row2.forEach(row => {
        row.addEventListener('click', () => {
            if (currentPlayer === playerOne && row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorOne')
            } else if (row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorTwo')
            }
            switchTurn()
        })
    })
    row3.forEach(row => {
        row.addEventListener('click', () => {
            if (currentPlayer === playerOne && row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorOne')
            } else if (row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorTwo')
            }
            switchTurn()
        })
    })
    row4.forEach(row => {
        row.addEventListener('click', () => {
            if (currentPlayer === playerOne && row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorOne')
            } else if (row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorTwo')
            }
            switchTurn()
        })
    })
    row5.forEach(row => {
        row.addEventListener('click', () => {
            if (currentPlayer === playerOne && row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorOne')
            } else if (row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorTwo')
            }
            switchTurn()
        })
    })
    row6.forEach(row => {
        row.addEventListener('click', () => {
            if (currentPlayer === playerOne && row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorOne')
            } else if (row.classList.contains('unclaimed')) {
                row.classList.remove('unclaimed')
                row.classList.add('colorTwo')
            }
            switchTurn()
        })
    })
    //lets player drop yellow or red coin/token into connect 4 slot
    //identify the connect 4 slot/cell with click then generate token into that cell
    //before generating token, check to see if cell is occupied or not
}

function checkWinner() {
    //checks filled in arrays to see if it fulfills winningArray combos for win
    //a if else or for loop will be here to check for tie/draw
}

function congratsMsg() {
    //congratulates player on winning the game
}

function gameReset() {
    //resets the game either during the game or after tie/win  
}