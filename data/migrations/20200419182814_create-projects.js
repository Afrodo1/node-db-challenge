
exports.up = function(knex) {
    return(
        knex.schema
            .createTable('projects', tbl => {
                tbl.increments();
                tbl.string('project', 128).notNullable().unique();
                tbl.string('description');
                tbl.boolean('completed').notNullable().defaultTo(false);
            })
            .createTable('resources', tbl =>{
                tbl.increments();
                tbl.string('resource',128).notNullable().unique();
                tbl.string('description');
            })
            .createTable('tasks', tbl =>{
                tbl.increments();
                tbl.string('task').notNullable().unique();
                tbl.string('note');
                tbl.boolean('completed').notNullable().defaultTo(false);
                tbl.integer('project_id')
                    .unsigned()
                    .notNullable()
                    .references('projects.id')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
            })
            .createTable('project-resource', tbl =>{
                tbl.increments();
                tbl.integer('projects_id')
                    .unsigned()
                    .notNullable()
                    .references('projects.id')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
                tbl.integer('resources_id')
                    .unsigned()
                    .notNullable()
                    .references('resources.id')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
            })
    )
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project-resource')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
  
};
