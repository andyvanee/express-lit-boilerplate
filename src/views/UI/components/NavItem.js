import { BaseElement, html } from "./Base.js"

class NavItem extends BaseElement {
    static get properties() {
        return {
            brand: { type: Boolean },
            href: { type: String },
            label: { type: String }
        }
    }
    render() {
        return html` <p>NavItem</p> `
    }
}

customElements.define("ui-nav-item", NavItem)
