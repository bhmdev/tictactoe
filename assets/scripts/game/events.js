const gameapi = require('./gameapi')
const gameui = require('./gameui')
const store = require('../store')

store.currentPlayer = 'X'
store.winner = null
store.draw = null

const board = ['', '', '', '', '', '', '', '', '']

const checkDraw = function () {
  if (store.draw) {
    $('#gameMessages').text('You have tied!')
    $('#board').hide()
  }
}

const checkWinner = function () {
  if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
    store.winner = true
  } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
    store.winner = true
  } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
    store.winner = true
  } else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
    store.winner = true
  } else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
    store.winner = true
  } else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
    store.winner = true
  } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    store.winner = true
  } else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    store.winner = true
  }
  if (store.winner) {
    onWinGame()
  }

  if (!board.includes('')) {
    if (!store.winner) {
      store.draw = true
      checkDraw()
    }
  }
}
const onNewGame = function (event) {
  store.winner = false
  store.draw = false
  $('#0').text('')
  $('#1').text('')
  $('#2').text('')
  $('#3').text('')
  $('#4').text('')
  $('#5').text('')
  $('#6').text('')
  $('#7').text('')
  $('#8').text('')
  event.preventDefault()
  for (let i = 0; i < board.length; i++) {
    board[i] = ''
  }
  store.currentPlayer = 'X'
  $('#gameMessages').text('')
  console.log(event.target)
  gameapi.onNewGame()
    .then(gameui.onNewGameSuccess)
    .catch(gameui.onNewGameFailure)
}

const boardClick = function (event) {
  event.preventDefault()
  const position = event.target.id
  if ($(event.target).text() === '') {
    $(event.target).text(store.currentPlayer)
    if (store.currentPlayer === 'X') {
      store.currentPlayer = 'O'
    } else {
      store.currentPlayer = 'X'
    }
    // add X or O to screen
    board[position] = store.currentPlayer
    // $(store.currentPlayer).text('space taken')
    $('#gameMessages').text('')
  } else {
    $('#gameMessages').text('This is an invalid spot, go somewhere else')
  }
 // check what the board is?
  gameapi.moveMade(position)
    .catch(console.error)

  checkWinner()
  if (store.currentPlayer === 'X') {
    $('#message').text('Its Xs turn')
  } else {
    $('#message').text('Its Os  turn')
  }
}

const onWinGame = function () {
  if (store.winner) {
    $('#gameMessages').text('You have won the game!')
    $('#board').hide()
  }
}

// you could also use $('this') in place of event.target
// add player to DOM/screen
//
module.exports = {
  boardClick,
  checkWinner,
  onNewGame,
  checkDraw,
  onWinGame
}
