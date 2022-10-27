/**localStorage*/
localStorage.setItem("nombre", "Julian");
localStorage.setItem("nombre", "Miguel");

console.log(localStorage.getItem("nombre"));

localStorage.setItem(
  "persona",
  JSON.stringify({ nombre: "Mario", edad: 34, esDesarrollador: true })
);
console.table(JSON.parse(localStorage.getItem("persona")));

localStorage.removeItem("nombre");

// JSON.stringify() -> Convierte un objeto/arreglo en un String
// JSON.parse() -> Convierte un objeto/arreglo convertido por stringfy() a un objeto JS

/**sessionStorage*/
sessionStorage.setItem("nombre", "Vannesa");
sessionStorage.setItem(
  "alumno",
  JSON.stringify({ nombre: "Juan", edad: 15, promedio: 87 })
);

console.log(sessionStorage.getItem("nombre"));
console.table(JSON.parse(sessionStorage.getItem("alumno")));

/**cookie*/

document.cookie = "nombreCookie=Juan";
document.cookie = "nombreCaducidad=nombre;expires=" + new Date(2023,0,1).toUTCString();
console.log(document.cookie);
