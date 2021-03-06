exports.up = function(knex) {
    return knex.schema.createTable('nameEncrypted', function(table){
        table.increments('id').primary();
        table.text('name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('nameEncrypted');
};