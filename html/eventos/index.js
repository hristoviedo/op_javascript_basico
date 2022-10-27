const titulo = document.getElementById("h-texto");

titulo.addEventListener("cambioTexto", evento => {
    console.log(evento.detail);
    titulo.innerText = evento.detail.texto;
    titulo.style.color = evento.detail.color;
    titulo.style.backgroundColor = evento.detail.back_color;
})

function cambiarTexto(nuevoTexto,colorTexto,bColor){
    const evento = new CustomEvent("cambioTexto", {
        detail:{
            texto: nuevoTexto, 
            color: colorTexto,
            back_color: bColor,
        }
    })
    titulo.dispatchEvent(evento);
}