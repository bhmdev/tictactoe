const store = require('./../store')

const onWinGame = function (response) {
  $('#message').text('You have won the game!')
  console.log('Great Job')
}

const onNewGameSuccess = function (response) {
  store.game = response.game // save the game to store
  $('#message').text('New game created!')
  $('#onNewGame').trigger('reset')
  $('#board').show()
}

const onNewGameFailure = function (response) {
  $('#message').text('New game failure!')
  $('#onNewGame').trigger('reset')
}

const onWrongSquare = function (response) {
  $('#message').text(`You can't play here`)
}

module.exports = {
  onWinGame,
  onNewGameSuccess,
  onWrongSquare,
  onNewGameFailure
}
