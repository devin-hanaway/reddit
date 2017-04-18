
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
      {id: 1,
        comment_text: 'cool post',
        username: "devinh11",
        link_id: 1
      },
      {id: 2,
      comment_text: 'second  comment',
      username: "nick mc",
      link_id: 1
      },
      {id: 3,
        comment_text: 'sweet webpage bro',
        username:"youngvap GOD",
        link_id: 2
      }
      ]);
    });
};
