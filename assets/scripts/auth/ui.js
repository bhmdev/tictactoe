const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
  $('#signUp').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#signUp').hide()
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
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
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Change Password failed')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Change Password Succeeded')
  $('#changePassword').trigger('reset')
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
  store.user = null
}

const onWinGame = function (response) {
  $('#message').text(response.user.emaail + ' Has won the game!').show()
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
  onWinGame
}
