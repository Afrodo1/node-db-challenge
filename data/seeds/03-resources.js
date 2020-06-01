exports.seed = function(knex) {
  return knex('resources').insert([
    {
     resource: 'computer',
     description: 'a computational device'
    },
    {
      resource: 'pen',
      description: 'a writing device'
    },
    {
      resource:'notepad',
      description:'note taking device'
    },
    {
      resource:'chair',
      description:'leisure device'
    },
    {
      resource:'zoom',
      description:'video conference software'
    },
    {
      resource:'gmail',
      description:'email service'
    }
  ])
 };
