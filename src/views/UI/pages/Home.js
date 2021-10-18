import { LightElement, html } from "../components/Base.js"

class PageHome extends LightElement {
    render() {
        return html`<p>Home</p>`
    }
}

customElements.define("ui-page-home", PageHome)
