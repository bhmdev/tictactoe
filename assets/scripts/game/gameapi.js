const store = require('./../store')
const config = require('./../config')

const onNewGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const moveMade = function (position) {
  console.log('store is', store)
  console.log('position is', position)
  console.log('currentPlayer is', store.currentPlayer)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: position,
          value: store.currentPlayer
        },
        over: false
      }
    }
  })
}

module.exports = {
  onNewGame,
  moveMade
}
