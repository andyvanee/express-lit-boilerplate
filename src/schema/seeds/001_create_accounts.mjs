import * as knex from "knex"
import bcrypt from "bcrypt"

/**
 * @param db {knex.Knex}
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
