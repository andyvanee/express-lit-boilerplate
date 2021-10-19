import * as knex from "knex"

/**
 * @param db {knex.Knex}
 */
export const up = async (db) => {
    await db.schema.createTable("accounts", (t) => {
        t.string("id").primary()
        t.string("name")
        t.string("email")
        t.string("password_hash")
    })
}

/**
 * @param db {knex.Knex}
 */
export const down = async (db) => {
    db.schema.dropTable("accounts")
}
