#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--include \
--request PATCH \
--header "Content-type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${PLAYER}"'"
    },
    "over": "'"${OVER}"'"
  }
}'

echo
