import session from "express-session"
import SessionKnex from "connect-session-knex"
import database from "../database.js"

export default () => {
    const knexSessionStore = SessionKnex(session)
    const cookieMaxAgeHour = 1
    return session({
        secret: process.env.TOKEN_SECRET,
        resave: false,
        saveUninitialized: false,
        unset: "destroy",
        store: new knexSessionStore({
            knex: database,
            tablename: "sessions",
            sidfieldname: "sid",
            createtable: true,
            clearInterval: 1000 * 60 * 60
        }),
        cookie: {
            maxAge: cookieMaxAgeHour * 60 * 60 * 1000
        }
    })
}
