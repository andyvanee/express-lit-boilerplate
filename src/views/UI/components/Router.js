import { LightElement } from "./Base.js"
import page from "page"
import routes from "../routes.js"

class Router extends LightElement {
    static get properties() {
        return {
            element: { type: Object },
            layout: { type: String }
        }
    }
    constructor() {
        super()
        this.defaultElement = document.createElement("div")
        this.defaultElement.innerHTML = "<p>Loading</p>"
    }

    get el() {
        return this.element || this.defaultElement
    }

    firstUpdated() {
        page({ hashbang: true })
        routes.map((r) =>
            page(r.path, (ctx) => {
                this.element = document.createElement(r.component)
                const viewData = Object.assign({}, r, ctx.params)
                for (const [k, v] of Object.entries(viewData)) {
                    switch (k) {
                        case "title":
                            document.title = v
                            break
                        case "path":
                        case "component":
                            break
                        case "layout":
                            if (this.layout && this.layout !== v) {
                                // Different layout, full refresh
                                window.location = ctx.path
                            }
                            this.layout = v
                            break
                        default:
                            this.element.setAttribute(k, v)
                            break
                    }
                }
            })
        )
        page()
    }

    render() {
        return this.el
    }
}

customElements.define("ui-router", Router)
