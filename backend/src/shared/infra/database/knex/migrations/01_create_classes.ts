import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.string("avatar").notNullable();
    table.string("cost").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("classes");
}
