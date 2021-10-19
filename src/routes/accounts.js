import express from "express"
import connect from "../database.js"
import bcrypt from "bcrypt"

const app = express.Router()
export default app

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const err = (error) => res.render("login", { error, email, password })

    if (!(email && password)) return err("login error")

    // TODO: email & password verify
    const account = await connect()("accounts").where({ email }).first()
    if (!account) return err("account not found")

    const valid = await bcrypt.compare(password, account.password_hash)
    if (!valid) return err("invalid hash")
    req.session.userId = account.id
    res.redirect("/")
})

app.get("/logout", async (req, res) => {
    req.session.destroy()
    res.redirect("/")
})
