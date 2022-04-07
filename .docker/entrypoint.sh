#!/bin/bash

npm config set cache /home/node/app/.npm-cache --global
cd /home/user-poc/poc
npm i

tail -f /dev/null