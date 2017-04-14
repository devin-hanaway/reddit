const config = require('../knexfile')

const environment = 'development'
const connection =config[environment]

const pg = require('knex')(connection)

module.exports = pg
