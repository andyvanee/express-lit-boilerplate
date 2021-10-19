import { BaseElement, html, css } from "./Base.js"

class Nav extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
                margin: 0 -0.5rem;
            }

            nav {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 1.5rem;
                padding: 0.25rem 0;
                align-items: center;
            }
            .items {
                text-align: right;
            }
            .account-details {
                background-color: white;
                border: 1px solid #ddd;
                padding: 1rem;
            }

            .account-details a {
                color: inherit;
                text-decoration: none;
            }
        `
    }

    get items() {
        return [...this.querySelectorAll("ui-nav-item")]
    }

    get brandItems() {
        return this.items.filter((i) => i.brand)
    }

    get navItems() {
        return this.items.filter((i) => !i.brand)
    }

    render() {
        return html`
            <nav>
                <div class="brand">
                    ${this.brandItems}
                </div>
                <div class="items">
                    ${this.navItems}
                </div>
            </nav>
        `
    }
}

customElements.define("ui-nav", Nav)
