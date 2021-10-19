import express from "express"
import connect from "../database.js"

const app = express.Router()
export default app

app.use(async (req, res, next) => {
    const { userId } = req.session
    if (userId) {
        res.locals.currentUser = await connect()("accounts")
            .where({ id: userId })
            .first()
    }
    next()
})
