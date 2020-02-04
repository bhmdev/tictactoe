const gameapi = require('./gameapi')
const gameui = require('./gameui')
const store = require('../store')

store.currentPlayer = 'X'
const board = [ '', '', '', '', '', '', '', '', '' ]

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
  // return onWinGame
}
// const onWinGame = function (response) {
//   $('#message').text('You have won the game!')
//  console.log('You have won the game!')
// }
const onNewGame = function (event) {
  event.preventDefault()
  console.log(event.target)
  gameapi.onNewGame()
    .then(gameui.onNewGameSuccess)
    .catch(gameui.onNewGameFailure)
}

const boardClick = function (event) {
  event.preventDefault()
  if ($(event.target).text() === '') {
    $(event.target).text(store.currentPlayer)
    // add X or O to screen
    const position = event.target.id
    console.log('position is ', position) // check what the position is?
    board[position] = store.currentPlayer
    console.log('board is ', board) // check what the board is?
    gameapi.moveMade(position)
      .then(function () {
        if (store.currentPlayer === 'X') {
          store.currentPlayer = 'O'
        } else {
          store.currentPlayer = 'X'
        }
        checkWinner()
        if (store.currentPlayer === 'X') {
          $('#message').text('Its Xs turn')
          console.log()
        } else {
          $('#message').text('Its Os  turn')
          console.log()
        }
      })
      .catch(console.error)
  }
}

// you could also use $('this') in place of event.target
// add player to DOM/screen
//
module.exports = {
  boardClick,
  checkWinner,
  onNewGame
}
