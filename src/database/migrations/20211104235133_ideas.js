
exports.up = function (knex) {
    return knex.schema.createTable('ideas', (table) => {
        table.increments()
        table.string('title').notNullable()
        table.string('category').notNullable()
        table.string('link_image').notNullable()
        table.string('description')
        table.string('link_idea').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('ideas')
};