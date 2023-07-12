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
    console.log(1)
    return
  }
  const cell = e.target
  console.log(cell.id)
  if (!cell.textContent && !checkWin(selectedNumbers[player])) {
    
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
      updateScoreboard(player)
      showWinningLine(winningCombination)
      return
    }
    if(player === 1){
      player = 2
    }else{
      player = 1
    }
  }
}

function updateScoreboard(player) {
  const playerScoreElement = document.getElementById(`player${player}Score`)
  const currentScore = +(playerScoreElement.textContent.split(':')[1])
  playerScoreElement.textContent = `Player ${player}: ${currentScore + 1}`
}
function  showWinningLine(winningCombination){
  if (winningCombination[0] === 1 && winningCombination[2] === 3) {
        line.classList.add('first')
      } else if (winningCombination[0] === 4 && winningCombination[2] === 6) {
        line.classList.add('second')
      } else if (winningCombination[0] === 7 && winningCombination[2] === 9) {
        line.classList.add('third')
      } else if (winningCombination[0] === 1 && winningCombination[2] === 9) {
        line.classList.add('fourth')
      } else if (winningCombination[0] === 3 && winningCombination[2] === 7) {
        line.classList.add('fifth')
      } else if (winningCombination[0] === 2 && winningCombination[2] === 8) {
        line.classList.add('sixth')
      } else if (winningCombination[0] === 1 && winningCombination[2] === 7) {
        line.classList.add('seventh')
      } else if (winningCombination[0] === 3 && winningCombination[2] === 9) {
        line.classList.add('eighth')
      }      
}
board.addEventListener('click', handleClickOnBoard)