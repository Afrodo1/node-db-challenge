const db = require('../data/db-config');

function find (){
    return db('resources');
};

function add(data) {
    return db ('resources')
        .insert(data);
};

module.exports = {
    find,
    add
};