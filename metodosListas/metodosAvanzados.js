// Métodos Avanzados
// ---------------------.map()---------------------
const ciudades = [
  "Tegus",
  "SPS",
  "Comayagua",
  "Trujillo",
  "Nacaome",
  "Gracias",
];

// Recorre el arreglo sin mutarlo
ciudades.forEach((ciudad) => {
  console.log(ciudad);
});

// Recorre el arreglo mutado
const ciudadMayus = ciudades.map((ciudad, indice) => {
  return `${indice + 1}-${ciudad.toUpperCase()}`;
});

console.log(ciudadMayus);

// ---------------------.filter()---------------------

const usuarios = [
  { nombre: "Raul", edad: 10 },
  { nombre: "Laura", edad: 18 },
  { nombre: "Carmen", edad: 19 },
  { nombre: "Luis", edad: 14 },
  { nombre: "Javier", edad: 11 },
];

const usuariosMayores = usuarios.filter((usuario) => {
  return usuario.edad > 17;
});

console.log(usuariosMayores);

// ---------------------.reduce()---------------------
const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23];

// Forma eficiente de sumar numeros
let suma = primos.reduce((acumulado, actual) => {
  return (acumulado += actual);
});

console.log(suma);

// Forma menos eficiente de sumar numeros
// let suma = 0;
// primos.forEach(numero => {suma+=numero});
// console.log(suma);
