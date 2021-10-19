// eslint-disable-next-line no-unused-vars
import * as _knex from "knex"
import bcrypt from "bcrypt"

/**
 * @param db {_knex.Knex}
 */
export const seed = async (db) => {
    await db("accounts").del()
    const hash = await bcrypt.hash("super secret", 10)
    await db("accounts").insert([
        {
            id: 1,
            email: 'test@example.com',
            name: "Test User",
            password_hash: hash
        }
    ])
}
