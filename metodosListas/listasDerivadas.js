// Obtener una lista a partir de otra sin mutarlo

let alumnos = ["Ana","Luis","Carlos","Andrea","Victor","Beatriz"];

let destacados = alumnos.slice(2,-2);
let noDestacados = alumnos.slice(0,2);

console.log(destacados);
console.log(noDestacados);