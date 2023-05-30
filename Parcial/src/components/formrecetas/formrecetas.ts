import { Recetas } from "../../types/recetas";
import { dispatch } from "../../store";
import { savereceInDB } from "../../store/actions";


const userInputs: Recetas =  {
    nombre: "",
    igredientes: "",
    instrucciones: ""
};


export class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }



    connectedCallback() {
        this.render()
    }

    render() {
        
        
    
        const tittle = this.ownerDocument.createElement('h1');
        tittle.textContent = "Delicias Sabrosas"
        
        const nombrereceta = this.ownerDocument.createElement('label');
        nombrereceta.textContent = "nombre de la receta"
        const receta = this.ownerDocument.createElement('input');
        receta.addEventListener("change", (e: any) =>{ 
            console.log(e.target.value);
            userInputs.nombre = e.target.value
        });
        const ingre = this.ownerDocument.createElement('label');
        ingre.textContent = "Ingredientes de la receta"
        const ingredientes = this.ownerDocument.createElement('input');
        ingredientes.addEventListener("change", (e: any) =>{ 
            console.log(e.target.value);
            userInputs.igredientes = e.target.value
        });
        const instru = this.ownerDocument.createElement('label');
        instru.textContent = "Instrucciones de la receta"
        const instrucciones = this.ownerDocument.createElement('input');
        instrucciones.addEventListener("change", (e: any) =>{ 
            console.log(e.target.value);
            userInputs.instrucciones = e.target.value
        });
        
        
        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "compartir la receta";
        btn.addEventListener("click", async() =>{
            console.log(userInputs);
            dispatch( await savereceInDB(userInputs))
        });

        
    
        this.shadowRoot?.appendChild(tittle);
        this.shadowRoot?.appendChild(nombrereceta);
        this.shadowRoot?.appendChild(receta);
        this.shadowRoot?.appendChild(ingre);
        this.shadowRoot?.appendChild(ingredientes);
        this.shadowRoot?.appendChild(instru);
        this.shadowRoot?.appendChild(instrucciones);
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('form-rece', Form)
export default Form