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

function deleteLink(id){
  return pg('link').where('id', id).del()}

function getPage(id){
  return pg('comments')
  .join('link', 'link.id', 'comments.link_id')
  .select('*' ).where('link.id', '=', id)
}

function addComment(obj){
  let currentLink = obj['link_id']

  return pg('comments').insert(obj)
    .then(function(link_id){
      return pg('comments')
      .join('link', 'link.id', 'comments.link_id')
      .select('comments.username','comments.comment_text' ).where('link.id', '=', currentLink)
  })
}



module.exports = {
  getAll,
  add,
  upvote,
  downvote,
  deleteLink,
  getPage,
  addComment
}
