// Identificar si un elemento existe

// ----------------------.some()----------------------
const number = [3, 5, 2, 6, 8, 3, 6, 7, 8, 5, 3, 4, 6, 10];

const isInList = number.some((element) => element === 1);

console.log(isInList); // false

const users = [
  { name: "Raul", age: 20 },
  { name: "Laura", age: 18 },
  { name: "Carmen", age: 29 },
  { name: "Luis", age: 24 },
  { name: "Javier", age: 21 },
];

const isUser = users.some((user) => user.name === "Laura");

console.log(isUser);

// Obtener una lista a partir de un objeto iterable

// ----------------------Array.from()----------------------

const message = "Welcome to my app"; // Objeto iterable

console.log(message); // Welcome to my app

const messageList = Array.from(message);

console.log(messageList); // [ 'W', 'e', 'l', 'c', 'o', 'm', 'e'...]

const set = new Set(["hola", 4, true, Infinity, NaN]);

console.log(set);

const setList = Array.from(set);

console.log(setList);

// Obtener una lista de indices de un arreglo
// ----------------------.keys()----------------------

const Numbers = [3, 5, 2, 6, 8, 3, 6, 7, 8, 5, 3, 4, 6, 10];

const keys = Numbers.keys();
console.log(keys);
const listKeys = Array.from(keys);
console.log(listKeys);
