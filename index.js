// Load environment
import dotenv from "dotenv"
dotenv.config()

const requiredEnv = ["TOKEN_SECRET", "STORAGE_PATH"]
for (const e of requiredEnv) {
    if (!process.env[e]) {
        console.error({ requiredEnv })
        throw new Error(`Missing env ${e}`)
    }
}
const PORT = Number(process.env.HTTP_PORT || "8080")

import("./src/app.js").then(({ default: app }) => {
    app.listen(PORT, () => console.log("listening", { PORT }))
})
