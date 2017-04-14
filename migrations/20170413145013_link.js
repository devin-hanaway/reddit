exports.up = function(knex, Promise) {
  return knex.schema.createTable("link",(table)=> {
    table.increments()
    table.integer("votes").notNull()
    table.string('url')
    table.string('title')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("link")
}
