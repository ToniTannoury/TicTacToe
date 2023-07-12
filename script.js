const winningCombinations = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9], 
  [1, 4, 7], 
  [2, 5, 8], 
  [3, 6, 9], 
  [1, 5, 9], 
  [3, 5, 7]  
]

let selectedNumbers = {}
let player = 1
let board = document.getElementById("game-board")
let line = document.getElementById("line")
let resetGameButton = document.getElementById("resetButton")
let resetScoresButton = document.getElementById("resetScoresButton")


function checkWin(playerNumbers) {
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i]
    let hasWon = true
    for (let j = 0; j < combination.length; j++) {
      const number = combination[j]
      if (!playerNumbers?.includes(number)) {
        hasWon = false
        break
      }
    }
    if (hasWon) {
      return combination
    }
  }
  return null
}

function handleClickOnBoard(e) {
  if(e.target.id === "line"){
    return
  }
  const cell = e.target
  if (!cell.textContent) {
    if(player === 1){
      cell.textContent = "X"
    }else{
      cell.textContent = "O"
    }

    const number = cell.getAttribute('number')
    selectedNumbers[player] = selectedNumbers[player] || []
    selectedNumbers[player].push(+number)

    const winningCombination = checkWin(selectedNumbers[player])
    if (winningCombination) {
      console.log('Player', player, 'wins!')
      line.classList = 'line'
      return
    }
  
    if(player === 1){
      player = 2
    }else{
      player = 1
    }
  }
}
board.addEventListener('click', handleClickOnBoard)