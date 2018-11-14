'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  TOBACKEND: true,
  NODE_ENV: '"development"',
  BASE_API: '"https://www.easy-mock.com/mock/5b7a7c59bf95d870586e7a12/vue-abc"'
})
