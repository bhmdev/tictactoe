#!/bin/bash

curl --include "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"


echo
