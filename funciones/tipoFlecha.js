// Funciones de tipo flecha - Funciones anónimas

const array = [1, 4, 7, 2, 4, 9, 12, 76, 24, 86, 12, 70];
// Definición de una función tipo flecha
const dobleValor = valor => valor * 2;

// Usando función de tipo flecha previa declaración
const array2 = array.map(dobleValor);

console.log(array2);



// Usando función de tipo flecha reducida
// const array2 = array.map(el => el * 2);

// Usando una función de tipo flecha
// const array2 = array.map((el) => {
//   return el * 2;
// });


// Forma no recomendada
// const array2 = array.map(function(el){
//     return el * 2;
//})
