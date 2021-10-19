import knex from "knex"
import path from "path"

const STORAGE_PATH = process.env.STORAGE_PATH || "./data"
const dbPath = path.join(STORAGE_PATH, "system.db")

const database = knex({
    client: "sqlite3",
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true,
    migrations: {
        tableName: "migrations",
        directory: `./src/schema/migrations`,
        loadExtensions: [".mjs"]
    },
    seeds: {
        directory: `./src/schema/seeds`,
        loadExtensions: [".mjs"]
    }
})

if (!(process.env.AUTO_MIGRATE === "false")) {
    // Auto Migrations
    database.migrate.latest().then(async ([count, migrations]) => {
        for (const m of migrations) {
            try {
                await database.seed.run(m)
                console.log(`Ran migration ${m}`)
            } catch (err) {
                console.log(`Migration error`, { err })
            }
        }
    })
}

export default database
