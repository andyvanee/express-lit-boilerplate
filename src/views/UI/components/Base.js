import { LitElement, html, css } from "lit"

class BaseElement extends LitElement {}

class LightElement extends BaseElement {
    createRenderRoot() {
        return this
    }
}

export { BaseElement, LitElement, LightElement, html, css }
