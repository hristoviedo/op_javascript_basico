const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (evento) => {
    console.log("Estoy arrastrando el párrafo " + parrafo.innerText);
    parrafo.classList.add("dragging");
    evento.dataTransfer.setData("id", parrafo.id);
    const imagenFantasma = document.querySelector(".imagen-fantasma");
    evento.dataTransfer.setDragImage(imagenFantasma, 0, 0);
  });

  parrafo.addEventListener("dragend", () => {
    console.log("Fin de arrastre");
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (evento) => {
    // console.log("Arrastre");
    evento.preventDefault();
    evento.dataTransfer.dropEffect = "move";
  });

  seccion.addEventListener("drop", (evento) => {
    console.log("Suelto");
    const parrafoID = evento.dataTransfer.getData("id");
    const parrafo = document.getElementById(parrafoID);
    seccion.appendChild(parrafo);
  });
});
