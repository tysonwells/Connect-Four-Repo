/*-------------------------------- Constants --------------------------------*/
// Set array of winning combinations to variable winning
const winningCombos = [ 
  [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
  [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
  [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
  [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
  [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
  [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
  [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
  [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
  [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
  [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
  [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
  [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
  [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
  [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
  [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
  [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
  [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
  [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
  [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
  [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
  [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
  [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
  [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
  ]; 

/*-------------------------------- Variables --------------------------------*/

// Variables used to track the game state.
let currentPlayer, winner, board

/*------------------------ Cached Element References ------------------------*/

//    

const gridSlot = document.querySelectorAll(".slot")
const messageDisplay = document.querySelector("#message")
const playAgainButton = document.querySelector("#btn")
const themeSwitcher = document.querySelector('.btn')
const lightDarkBtn = document.querySelector('#light-dark-button')
const body = document.querySelector('body')



/*----------------------------- Event Listeners -----------------------------*/

gridSlot.forEach(slot => slot.addEventListener('click', handleClick))

playAgainButton.addEventListener('click', init)
themeSwitcher.addEventListener('click', init)
  
/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  //playAgainButton.setAttribute('hidden', true)     
  winner = null
  currentPlayer = 1
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  
  render()
}

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}

function render() {
  for (i = 0; i < board.length; i++) {
    if(board[i] === 1) gridSlot[i].style.backgroundColor = 'red'
    if(board[i] === -1) gridSlot[i].style.backgroundColor = 'blue'
    if(board[i] === null) gridSlot[i].style.backgroundColor = null
  }
checkWin()
renderMessage()
}

function renderMessage(){
  if (winner === 'T') {
    messageDisplay.innerText = "The game is tied"
  } else if (winner !== null) {
    messageDisplay.innerText = `${currentPlayer === 1 ? 'blue' : 'red'} won the game`
  } else {
    messageDisplay.innerText = `Current Turn: ${currentPlayer === 1 ? 'red' : 'blue'}`
  }

}


function handleClick(event) {
  console.log('handleClick') //! Test function
  const i = parseInt(event.target.id)
  if (board[i] === null && !winner) {
    if (board[1] === null) { 
    let adding = 35
    while (board[i + adding] !== null) {
    adding -= 7 
    }
    board[i + adding] = currentPlayer
    } 
   currentPlayer *= -1
   console.log(handleClick)
  render()
  } 
}

function checkWin() {
    winningCombos.forEach((combo) => {
        if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]] + board[combo[3]]) === 4) winner = true
    })
}

// themeSwitcher.onclick = function() {
  // Get the current selected theme, on the first run
  // it should be `light`
  // let currentTheme = document.documentElement.getAttribute("data-theme");

  // Switch between `dark` and `light`
  // let = switchToTheme = currentTheme === "dark" ? "light" : "dark"

  // Set our currenet theme to the new one
  //document.documentElement.setAttribute("data-theme", switchToTheme)
