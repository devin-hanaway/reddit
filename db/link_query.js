const pg = require('./knex')

function getAll(){
  return pg('link').orderBy('votes', 'desc')
}

function add(obj){
  return pg('link').insert(obj)
}

function upvote(obj){
  return pg('link').where('id', obj['id']).update('votes', +obj['votes' ]+1)
}

function downvote(obj){
  console.log(obj);
  return pg('link').where('id', obj['id']).update('votes', +obj['votes' ]-1)
}


module.exports = {
  getAll,
  add,
  upvote,
  downvote
}