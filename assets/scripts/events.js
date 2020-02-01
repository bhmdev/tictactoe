const getFormFields = require('./../.../lib/get-form-fields')
const api = require('./api')
const ui = require('.ui')

const onSignUp = function (event) {
  event.preventDefault()
}

const form = event.target

const data = getFormFields(form)

const api = signUp(data)
  .then(ui.onSignUpSuccess)

const onClickEvent = (event) => {
  const box = $(event.target).box
}





module.exports = {
  onSignUp,
  onClickEvent,
  currentPlayer,
  preventDefault,
  box
}
