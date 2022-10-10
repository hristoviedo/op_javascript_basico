// Ordenar elementos de una lista

// ------------------.sort()------------------
const numerosAleatorios = [2, 8, 4, 6, 21, 9, 7, 9, 24, 46, 82, 7, 59, 54];

console.log(numerosAleatorios.sort((actual, siguiente) => actual - siguiente));

const users = [
  { name: "Raul", age: 20 },
  { name: "Laura", age: 18 },
  { name: "Carmen", age: 29 },
  { name: "Luis", age: 24 },
  { name: "Javier", age: 21 },
];

users.sort((a, b) => a.age - b.age);

console.log(users);

const numbers = [3, 1, 4, 1, 5];

// [...numbers] crea una copia, así que .sort() no muta el original

const sorted = [...numbers].sort((a, b) => a - b);

console.log(numbers);
console.log(sorted);
