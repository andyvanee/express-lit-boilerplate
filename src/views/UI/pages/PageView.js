import { LightElement, html } from "../components/Base.js"

class PageView extends LightElement {
    static get properties() {
        return {
            slug: { type: String }
        }
    }

    render() {
        return html`<p>View (${this.slug})</p>`
    }
}

customElements.define("ui-page-view", PageView)
