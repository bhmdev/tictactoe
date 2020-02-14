const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#signUp').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#signUp').hide()
  $('#getGames').hide()
  $('#gameMessages').show()
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#signUp').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in')
  $('#signIn').trigger('reset')
  store.user = response.user
  $('#changePassword').show()
  $('#signOut').show()
  $('#boardGame').show()
  $('#signIn').hide()
  $('#signUp').hide()
  $('#gameMessages').text('Click the NEW GAME button to embark on a wild adventure')
  $('#onNewGame').show()
  $('#getGames').hide()
  $('#gameMessages').show()
  $('#message').show()
  $('#getGamesMessage').show()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#signIn').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Change Password failed')
  $('#changePassword').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Change Password Succeeded')
  $('#changePassword').trigger('reset')
  $('#getGamesMessage').hide()
  $('message').show()
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign Out failed')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Sign Out Succeeded')
  $('#changePassword').hide()
  $('#signOut').hide()
  $('#signIn').show()
  $('#signUp').show()
  $('#onNewGame').hide()
  $('#board').hide()
  $('#changePassword').trigger('reset')
  $('#getGames').hide()
  $('#gameMessages').hide()
  $('#getGamesMessage').hide()
  $('#finalMessage').hide()
  store.user = null
}

const onGetGamesResults = function (data) {
  $('#finalMessage').show()
  $('#finalMessage').text(`You've played ${data.games.length} games.`)
  // $('#getGames').show()
  $('#finalMessage').fadeOut(5000)
}

const onWinGame = function (response) {
  $('#message').text(response.user.email + ' Has WON the game!🤟🏾👨🏾‍💻🕺🏽').show()
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onWinGame,
  onGetGamesResults
}
