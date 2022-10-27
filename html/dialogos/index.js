const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // alert("Se ha hecho clic");
  // confirm("Estás de acuerdo, ¿verdad?") && console.log("OK");
  confirm("Estás de acuerdo, ¿verdad?") ? console.log("OK") : console.log("NO");
});

const lista = [
  { nombre: "Juan", edad: 23 },
  { nombre: "Ramón", edad: 45 },
  {nombre: "Alex", edad: 17}
];

console.table(lista)

