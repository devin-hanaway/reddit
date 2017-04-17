const config = require('../knexfile')

const environment = proess.env.NODE_ENV || 'development'
const connection =config[environment]

const pg = require('knex')(connection)

module.exports = pg
