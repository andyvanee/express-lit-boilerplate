import { BaseElement, html, css } from "./Base.js"

class Nav extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }

            nav {
                display: grid;
                grid-template-columns: auto 1fr auto;
                gap: 1.5rem;
                padding: 0.25rem 0;
                align-items: center;
            }

            ul {
                list-style: none;
                display: inline-block;
                margin: 0;
                padding: 0;
            }

            li {
                display: inline-block;
                padding: 0 0.5rem;
            }

            a {
                display: block;
                padding: 0.5rem;
                text-decoration: none;
                color: inherit;
                font-size: 0.85rem;
                letter-spacing: 0.03rem;
            }

            .brand a {
                padding-left: 0;
            }
        `
    }

    get items() {
        return [...this.querySelectorAll("ui-nav-item")].map((i) => ({
            brand: i.brand,
            href: i.href,
            label: i.label
        }))
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
                    ${this.brandItems.map(
                        (i) => html` <a href=${i.href}>${i.label}</a> `
                    )}
                </div>
                <ul>
                    ${this.navItems.map(
                        (i) => html`
                            <li>
                                <a href=${i.href}>${i.label}</a>
                            </li>
                        `
                    )}
                </ul>
            </nav>
        `
    }
}

customElements.define("ui-nav", Nav)
