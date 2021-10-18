import app from "./src/app.js"

const PORT = Number(process.env.HTTP_PORT || "8080")

app.listen(PORT, () => console.log("listening", { PORT }))
