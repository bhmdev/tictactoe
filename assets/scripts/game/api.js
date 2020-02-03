const store = require('./../store')
const config = require('./../config')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.Token
    },
    data: {}
  })
}

module.exports = {
  newGame
}
