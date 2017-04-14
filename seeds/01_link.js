
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          votes: 35,
          url: 'https://www.google.com',
          title: 'yo this is cool'
        },
        {
          votes: 12,
          url: 'https://www.yahoo.com',
          title: 'something is cool'
        },
        {
          votes: 33,
          url: 'https://www.facebook.com',
          title: 'something is cool'
        }
      ]);
    });
};
