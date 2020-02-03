let currentPlayer = 'X'
const board = [ '', '', '', '', '', '', '', '', '' ]

const boardClick = function (event) {
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    // add player to javascript board
    const position = event.target.id
    board[position] = currentPlayer
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    checkWinner()
    console.log(board)
  }
}

const checkWinner = function () {
  if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
    console.log('winner')
  } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
    console.log('winner')
  } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
    console.log('winner')
  } else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
    console.log('winner')
  } else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
    console.log('winner')
  } else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
    console.log('winner')
  } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    console.log('winner')
  } else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    console.log('winner')
  }
}

// you could also use $('this') in place of event.target
// add player to DOM/screen
//
module.exports = {
  boardClick,
  checkWinner,
  currentPlayer
}
