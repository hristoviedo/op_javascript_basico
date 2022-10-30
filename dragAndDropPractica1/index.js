const caja = document.querySelector(".caja");
const contenedor = document.querySelector(".contenedor");

caja.addEventListener("dragstart", (e) => {
  console.log("Drag Start");

});

caja.addEventListener("dragend", () => {
  console.log("Drag End");
});

contenedor.addEventListener("dragenter", () => {
  console.log("Drag Enter");
});

contenedor.addEventListener("dragleave", () => {
  console.log("Drag Leave");
  // contenedor.removeChild(caja)
});

contenedor.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("Drag Over");
});

contenedor.addEventListener("drop", (e) => {
  console.log("Drop");
  contenedor.appendChild(caja);
  caja.classList.add("droped");
});
