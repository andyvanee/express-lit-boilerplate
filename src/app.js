import path from "path"
import express from "express"
import auth from "./routes/auth.js"
import accounts from "./routes/accounts.js"
import build from "./middleware/build.js"
import session from "./middleware/session.js"
import routes from "./views/UI/routes.js"

const app = express()
export default app
const ROOT = path.dirname(new URL(import.meta.url).pathname)
const STATIC_ROOT = path.join(ROOT, "static")
const VIEW_ROOT = path.join(ROOT, "views")
const JS_ENTRYPOINT = path.join(VIEW_ROOT, "index.js")

// Static config
app.set("view engine", "hbs")
app.set("views", VIEW_ROOT)
app.use(express.static(STATIC_ROOT))
app.use(build({ entryPoints: [JS_ENTRYPOINT] }))

// Dynamic config
app.use(session())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(auth)
app.use("/accounts", accounts)

// SPA routes (Add SSR pages before these if required)
routes.map((r) =>
    app.get(r.path, async (req, res) => {
        return res.render(r.layout, { title: r.title })
    })
)
