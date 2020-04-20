
exports.seed = function(knex) {
 return knex('projects').insert([
   {
    project: 'db-challenge',
    description: 'Lambda sprint Challenge',
    completed: ''
   },
   {
     project: 'Lambda Labs',
     description: 'Four Months of Fuuuuun',
     completed: ''
   }
 ])
};
