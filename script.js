let selectedNumbers = {}
let player = 1
let board = document.getElementById("game-board")
let line = document.getElementById("line")
let resetGameButton = document.getElementById("resetButton")
let resetScoresButton = document.getElementById("resetScoresButton")

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

    
    if(player === 1){
      player = 2
    }else{
      player = 1
    }
  }
}