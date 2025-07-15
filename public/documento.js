import { emitirTextoEditor } from "./socket_front_documento.js";

const textoEditor = document.getElementById("editor-texto")

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value)
})

function atualizaTextoEditor(texto){
    textoEditor.value = texto
}

export { atualizaTextoEditor }