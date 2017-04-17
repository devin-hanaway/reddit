
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          id: 1,
          votes: 35,
          url: 'https://www.google.com',
          title: 'yo this is cool'
        },
        {
          id: 2,
          votes: 12,
          url: 'https://www.yahoo.com',
          title: 'something is cool'
        },
        {
          id: 3,
          votes: 33,
          url: 'https://www.facebook.com',
          title: 'lets do something else'
        }
      ]);
    });
};
