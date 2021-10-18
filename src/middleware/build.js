import esbuild from "esbuild"
import mime from "mime-types"

export default (config = {}) => {
    const { entryPoints } = config
    const buildTargets = {}

    // Async build
    ;(async () => {
        const { errors, warnings, outputFiles } = await esbuild.build({
            entryPoints,
            bundle: true,
            minify: true,
            sourcemap: true,
            outdir: "___OUT___",
            write: false
        })

        if (errors.length) {
            console.log({ errors })
            return
        }
        if (warnings.length) {
            console.log({ warnings })
        }
        outputFiles.map((f) => {
            const [_, url] = f.path.split("___OUT___")
            buildTargets[url] = {
                type: mime.lookup(url) || "application/octet-stream",
                content: f.text
            }
        })
    })()

    return (req, res, next) => {
        const pathname = new URL(req.url, "http://a.b").pathname
        const match = buildTargets[pathname]
        if (match) {
            res.set("content-type", match.type)
            return res.end(match.content)
        }
        return next()
    }
}
