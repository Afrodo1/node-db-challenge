const db = require('../data/db-config');

function find (){
    return db('projects');
};

function findById (id) {
    return db('projects')
        .where({id});
};

function findResources(id) {
    return db('project-resource as pr')
        .join('projects as p', 'pr.projects_id', 'p.id')
        .join('resources as r', 'pr.resources_id', 'r.id')
        .select('resource', 'r.description')
        .where('pr.projects_id', id);
}

function findTasks(id) {
    return db('tasks')
        .select('task', 'note', 'completed')
        .where('tasks.project_id', id)
}

module.exports = {
    find,
    findById,
    findResources,
    findTasks
}