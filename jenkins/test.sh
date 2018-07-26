#!/usr/bin/env sh
set -x

# npm install --save-dev cross-env
set +x
npm i expect mocha nodemon supertest --save-dev
set -x
npm test