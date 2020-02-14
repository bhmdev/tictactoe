const store = require('./../store')

const onNewGameSuccess = function (response) {
  store.game = response.game // save the game to store
  $('#getGamesMessage').show()
  $('#message').text(`New game created! It's X's turn`)
  $('#onNewGame').trigger('reset')
  $('#board').show()
  $('#getGames').show()
  $('#message').show()
  $('#getGamesMessage').hide()
  $('#changePassword').show()
}

const onNewGameFailure = function (response) {
  $('#message').text('New game failure!')
  $('#onNewGame').trigger('reset')
}

const onWrongSquare = function (response) {
  $('#message').text(`You can't play here`)
}

const onWinGame = function (response) {
  $('#message').text('You have won the game!🤟🏾👨🏾‍💻🕺🏽')
  $('#board').hide()
}

module.exports = {
  onWinGame,
  onNewGameSuccess,
  onWrongSquare,
  onNewGameFailure
}
