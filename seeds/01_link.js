
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
          title: 'Google, the best search engine, come work for this company'
        },
        {
          id: 2,
          votes: 12,
          url: 'https://www.yahoo.com',
          title: 'check out YAHOO, even though nobody uses our website'
        },
        {
          id: 3,
          votes: 33,
          url: 'https://www.facebook.com',
          title: 'Facebook, we will keep you on our site as long as you live'
        }
      ]);
    });
};
