// Comparar elementos de una lista

// -------------------.every()-------------------
const numbers = [3, 1, 4, 1, 5, 5, 7, 9, 10, 4];

const resultado = numbers.every((valor) => valor > 0);

console.log(resultado); // true -> todos los elementos son mayores que 0

// Comparar dos listas

const pares1 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const pares2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// Las listas no se comparan así
console.log(pares1 === pares2);

const compararListas = (lista1, lista2) => {
    if(lista1.length !== lista2.length) return false;
    const resultado = lista1.every((valor,indice) => valor === lista2[indice]);
    return resultado;
};

console.log(compararListas(pares1,pares2));
