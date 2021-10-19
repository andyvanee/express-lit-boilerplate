import { BaseElement, html, css } from "./Base.js"

class NavItem extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: inline-block;
                font-size: 0.85rem;
                letter-spacing: 0.03rem;
                position: relative;
                padding: 0 0.5rem;
            }
            a {
                display: block;
                padding: 0.5rem 0;
                text-decoration: none;
                color: inherit;
            }
            .modal {
                display: none;
                position: absolute;
                top: 100%;
                right: 0;
            }
            .wrapper:hover .modal {
                display: block;
            }
        `
    }

    static get properties() {
        return {
            brand: { type: Boolean },
            href: { type: String },
            label: { type: String }
        }
    }

    render() {
        return html`
            <div class="wrapper">
                ${this.href
                    ? html` <a href=${this.href}>${this.label}</a> `
                    : html` <span>${this.label}</span> `}
                <div class="modal"><slot /></div>
            </div>
        `
    }
}

customElements.define("ui-nav-item", NavItem)
