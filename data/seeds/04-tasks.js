
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task:'meet with group',
      note:'general icebreaker',
      completed: '',
      project_id: 2
    },
    {
      task:'fork project',
      note:'first step',
      completed: '',
      project_id: 1
    },
    {
      task:'brainstorm',
      note:'come up with a general idea of project',
      completed: '',
      project_id: 2
    },
    {
      task:'clone and begin',
      note:'finish sprint in 3 hours!!!',
      completed: '',
      project_id: 1
    },
    {
      task:'Finish project and add to Porfolio',
      note:'great job!! you finished!!',
      completed: '',
      project_id: 2
    },
    {
      task:'Make pull request and finish sprint',
      note:'great job!! you finished!!',
      completed: '',
      project_id: 1
    }
  ])
};
