'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#board').on('click', gameEvents.boardClick)
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').show()
  $('#signOut').hide()
  $('#onChangePassword').on('submit', authEvents.onChangePassword)
  $('#signOut').on('submit', authEvents.onSignOut)
  $('#onNewGame').on('click', gameEvents.onNewGame)
  $('#boardGame').show()
})
