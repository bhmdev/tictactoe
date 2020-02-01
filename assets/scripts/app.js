'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  let currentPlayer = 'X'
  const board = [ '', '', '', '', '', '', '', '', ''
  ]
  $('.box').on('click', function (event) {
    $('this').off(event)
    // add player to DOM/screen
    $(event.target).text(currentPlayer)
    // add player to javascript board
    const position = event.target.id
    board[position] = currentPlayer
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    console.log(board)
  })
})
