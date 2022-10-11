// Fechas

const fecha = new Date();
const fecha2 = new Date(1999, 0, 25);
const fecha3 = new Date("July 29, 2015 13:05:59");
const fecha4 = new Date(999999999999);

console.log(fecha);
console.log(fecha2);
console.log(fecha3);
console.log(fecha4);

const fecha5 = new Date();
// Precaución: Así no se comparan las fechas
console.log(fecha === fecha5);

// Forma correcta de comparar fechas
console.log(fecha.getTime() === fecha5.getTime());

console.log(fecha.getDate());
console.log(fecha.getMonth() + 1);
console.log(fecha.getFullYear());
console.log(fecha.getDay());
console.log(fecha.toLocaleDateString("es-HN"));
