import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('form-rece');

        this.shadowRoot?.appendChild(form);
        

    }
}

customElements.define('app-container', AppContainer)